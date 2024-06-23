import fastify from "fastify";

const server = fastify();

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
