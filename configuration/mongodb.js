import { MongoClient } from "mongodb";

const connectionString = "mongodb+srv://abancpchengani:1%402%40Abancp@cartopedia.j9zt4kz.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(connectionString);

let connection;
export const connect = () => {
    return new Promise((resolve, reject) => {
        try {
            connection = client.connect();
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

export const db = connection.db("Cartopedia");