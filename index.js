const fastify = require('fastify')({ logger: true });
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => fastify.log.info('MongoDB connected'))
.catch((err) => fastify.log.error(err));

fastify.get('/', (request, reply) => {
    reply.status(200).send({ hello: 'world', name: 'Frank Mutabazi' });
});

const start = async () => {
    try {
        await fastify.listen(9000, '0.0.0.0')
        fastify.log.info(`el servidor esta eschundando en el puerto ${fastify.server.address().port}`)
    } catch (error) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start();