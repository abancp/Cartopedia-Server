import {MongoClient} from "mongodb"
const state={
    db:null
};
const url = "mongodb+srv://abancpchengani@cartopedia.j9zt4kz.mongodb.net/?retryWrites=true&w=majority"
const dbName = "Cartopedia"
const client = new MongoClient(url);
const connect = async (cb) => {
    try {
        await client.connect();
        const db=client.db(dbName);
        state.db=db;
        return cb();
    }catch(err){
        return cb(err);
    }
};
const get=()=>state.db;
export default {
    connect,
    get,
};