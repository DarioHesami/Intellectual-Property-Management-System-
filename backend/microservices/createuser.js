'use strict';

//const prompt = require('prompt-sync')();
const KaleidoClient = require('../lib/kaleido');
//const { Gateway } = require('fabric-network');
//const Client = require('fabric-common');

//const chaincodeName = process.env.CCNAME || 'asset_transfer';
const userId = process.env.USER_ID || 'user102';
//const useDiscovery = process.env.USE_DISCOVERY || 'false';

newuser();

async function newuser() {
  const kclient = new KaleidoClient(userId);

}

exports.newuser = newuser;