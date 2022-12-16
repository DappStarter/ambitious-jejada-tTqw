require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help olympic trip notice rival smile pull grace fantasy flip sentence'; 
let testAccounts = [
"0xb86cb111e29fcafc8114f91db805875531e7bdb75bbd40eebfdad50a01a823cb",
"0x9c37832ecc4eac07431b3be8fdb1eb7681b238fb6aadf96a1a7afb437b76e928",
"0x55ac43967af4a5d2d8216a833d3a2d05b86822f7b699d921adc3a4ae5bff84af",
"0xc4e3e4b63a271e129dc1fc482e33ec6949f2d42db7e8406e6d382baef3859123",
"0x442d8482c61a1e5f4b3efc7a5e4776f1f8c7998fddddbc5f25ab2a3764e1d9d0",
"0x38e7847bc377288676b1a2b8a93ac9365e5daac5bd291b3413664db1ed483e04",
"0x8b1b218015d3e6be372b78c3ef810f46ad308452cb0dbc4cbdff6c09932d8a08",
"0x3ae831fcfe3dd102fc04e7b421a7aa4c37938c0dcb0918e6e6a4945be2abcea5",
"0x04dde2b75587a9dd8831e9ad01dd7f45b7906576086a9388c5c8d0aa480d72ea",
"0x5d195fff81686b6a893670dd5783e111f4ebcd80b776d31423725d0bb5cdfbe2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

