//https://eth-goerli.g.alchemy.com/v2/xP4G4z0b7D1zba1oh6V7TgWu2naE8wqX
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/xP4G4z0b7D1zba1oh6V7TgWu2naE8wqX",
      accounts: [ '106ad3fb1c0820fe2b437309926657ce977a52cdd9249ea187d9c9af3d411d21' ]
    },
  },
};