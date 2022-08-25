'use strict';

const prompt = require('prompt-sync')();
const KaleidoClient = require('./lib/kaleido');
const { Gateway } = require('fabric-network');
const Client = require('fabric-common');

const chaincodeName = process.env.CCNAME || 'asset_transfer';
const userId = process.env.USER_ID || 'user109';
const useDiscovery = process.env.USE_DISCOVERY || 'false';

//  main();

async function main2() {
  const kclient = new KaleidoClient(userId);

  console.log('User hase been created');

  await kclient.init();

  const gateway = new Gateway();
  try {
    // setup the gateway instance
    // The user will now be able to create connections to the fabric network and be able to
    // submit transactions and query. All transactions submitted by this gateway will be
    // signed by this user using the credentials stored in the wallet.
    await gateway.connect(kclient.config, {
      wallet: kclient.wallet.wallet,
      identity: userId,
      clientTlsIdentity: userId,
      discovery: { enabled: useDiscovery === 'true', asLocalhost: false }
    });

    // Build a network instance based on the channel where the smart contract is deployed
    const network = await gateway.getNetwork(kclient.channel.name);
    const contract = network.getContract(chaincodeName);

  } catch (error) {
		console.error(`******** FAILED to run the application: ${error.stack ? error.stack : error}`);
	} finally {
    // Disconnect from the gateway when the application is closing
    // This will close all connections to the network
    gateway.disconnect();
  }
}

exports.main2 = main2;
