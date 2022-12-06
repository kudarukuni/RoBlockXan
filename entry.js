const bcrypt = require('bcrypt')

class Block{
    constructor(blockid,  previousHash, data){
        this.blockid = blockid;
        this.timestamp = Date.now();
        this.blockhash = this.getHash();
        this.prevHash = previousHash;
        this.data = data;
    }
    getHash(){
        return bcrypt.hashSync(String(this.blockid + this.timestamp + this.blockhash + this.previousHash + JSON.stringify(this.data)) , 10)
    };
}

class BlockChain{
    constructor(){
        this.chain = [];
    }
    addBlock(data){
        let blockid = this.chain.length;
        let previousHash = this.chain.length !== 0 ? this.chain[this.chain.length - 1].blockhash : '';
        let block = new Block(blockid, previousHash, data);
        this.chain.push(block);
    }
}

const Myfirstblockchain = new BlockChain();

Myfirstblockchain.addBlock({sender: "Kuda Rukuni", receiver: "Valeny Rukuni", amount: 24034});
Myfirstblockchain.addBlock({sender: "Valeny Rukuni", receiver: "Kuda Rukuni", amount: 22032});
Myfirstblockchain.addBlock({sender: "Kuda Rukuni", receiver: "Progress Chipadza", amount: 20993});
console.log(JSON.stringify(Myfirstblockchain, null, 6));
