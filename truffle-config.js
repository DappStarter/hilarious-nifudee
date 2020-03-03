require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half enter blue tooth notice rival smile punch harvest crisp flip skill'; 
let testAccounts = [
"0x4eac8039ae4c40400a58a2d94b7175b0ee109216384911c0f2f62c10783ace2a",
"0xcb0d14ee35f145debb34a5c61d8e075b107ad3df25ac4995717138a99f323b46",
"0xb56adb73056f404e51dbb53e94410fdc7e219629f208a83589527ad7a932bc75",
"0xbba23b30b52ba1849027d796fd6e45d6e1d9a8cb73153253ede78124862bc515",
"0xa93125a66763e379e077610aaeda78453028965f6d5375376b10eef97f31c198",
"0x592d9494d26d3529826cbd668ca37a77fabe662678455c15a00d4c05bccbd7d3",
"0xed1cede83f0a0cb7990690e3823719cd800c8de0cf30a45b3dd8aed4234cd4cc",
"0xf07af7383b83f0718561edeb9b57fc6f00cac9bd174982a6ab94a0356ff0dda9",
"0x71afd915cd52379c0a00e520c294e4428cbdb9aa303beb5e8e9191b2645223a5",
"0x61d0c4106e7e2368527b2a80fa42599d352cb5b3a5e9833a1378db9484bce1d3"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
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
            version: '^0.5.11'
        }
    }
};
