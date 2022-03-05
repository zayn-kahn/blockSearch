const {providers, utils} = require("ethers");
const dotenv = require("dotenv");
dotenv.config();
var Provider = new providers.WebSocketProvider(process.env.wssETH);

const uncles = 
    [
    "0x85ccab1811e8a48a11f44659314cb1b081cedb13b39ebe7243e669fa6b848461", //14270935
    "0xbb53a2745f28d19bffcb8a61e04b6e0099a53ebecb447ffe285428216fbaa080", //14270932
    "0x2d3014eb892689a52486348dbb2f12f3a77f0930774ed7c1937956ce04eec958", //14270927
    "0x64d445b9855f52c4eb9db6315d48006bda038b1967262625aeeb78c93b0ac992", //14270925
    "0x026e7d78b4b32d923d3572fcbed6ad5f1914880e4c0ad384878704ceea00d094", //14270921
    "0x4d9dc77f57b6a30d9d8cfb8e50439aa33ccef0ba4ae1347ac9d15f2d50f21f56", //14270917
    "0x6a19b334f8e1c42ad6d95fc8f55d018537d2550a1fd62835d2e9a243fb2fc0ce", //14270903
    "0x9c444ee18e74e83cbbdbba83edf3aefcf660a49c1012957d7180f4069c93663d", //14270886
    "0xec4c919c33b89ef50b089a75e70f81ef830bf181a0d197969e21905687cdcbe5", //14270874
    "0x6600b5f919f759c943befe5d998eb87d492b297607f16b3232c2dc60f357d9c1", //14270868
    "0x4dcf939e9f9303c45679190eab392937ca23ae7b25c6721615dbde29d9b34510", //14270855
    "0xdd3ef879b493b7409c4b47541ac88e4ee3c6e18ad68ef8f76142ca6f296e9443", //14270852
    "0xbd84fc8ae486384033283398dfeb006d40a2d0cf7f996e6e6442a18c0dabe48c", //14270842
    14270950,
    14270954
    ]

var init = async function () {
 for (let i =0; i<uncles.length; i++){
     block954 = await Provider.getBlockWithTransactions(uncles[i])
 console.log("Transactions:", (block954.transactions).length, "uncle block:" ,block954.number)

 for (let k in block954.transactions) {
 if (
    utils.getAddress(block954.transactions[k].from) === "0xB7d691867E549C7C54C559B7fc93965403AC65dF" ||
    utils.getAddress(block954.transactions[k].from) === "0x7aA0426F10C7603BBFb8CEB8AFb8d8c329ccfE8b" ||
    utils.getAddress(block954.transactions[k].from) === "0x2e83794Ea9eaBe082F15754F95f64B9025186123"
 ){
        console.log(block954.transactions[k])
            }
        }
    }
};

init();