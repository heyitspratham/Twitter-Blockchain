require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: "0.8.2",
  networks:{
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/TtVtItRuVula9pTCD1jcizAYkiVjLaji",
      accounts: ['0e22d41f8e2874ab81a5923abe37b2069817aa4bc329633d15d24d289e7a81fd',],
    },
  },
};
