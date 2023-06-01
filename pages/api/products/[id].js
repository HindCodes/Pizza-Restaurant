import dbConnect from "../../../utilities/mongo.js"
import Product from "../../../models/product"

export default async function handler(req, res) {
    const {
        method, 
        query: {id},
    } = req;

    dbConnect();

    if(method === "GET") {
        try {
            const product = await Product.findById(id);
            res.status(200).json(product);

        } catch (err) {
            res.status(500).json(err);
        }
    }

    if(method === "PUT") {
        try {
            const prodcut = await Product.create(req.body);
            res.status(201).json()

        } catch (err) {
            res.status(500).json(err);
        }
    }

    
    if(method === "DELETE") {
        try {
            const prodcut = await Product.create(req.body);
            res.status(201).json()

        } catch (err) {
            res.status(500).json(err);
        }
    }
}