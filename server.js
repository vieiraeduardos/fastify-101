"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const server = (0, fastify_1.default)();
server.get("/", (request, reply) => {
    reply.send({
        "message": "Hello World!"
    });
});
const port = process.env.PORT || 3000; // Default to 3000 if PORT environment variable is not set
const host = process.env.HOST || 'localhost'; // Default to localhost if HOST environment variable is not set
server.listen(port, host, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening on ${address}`);
});
