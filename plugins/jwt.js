const fp = require('fastify-plugin');
const configuration = require('../config/configuration')

module.exports = fp(function (fastify, opts, done) {

    fastify.register(require('fastify-jwt'), {
        secret: configuration.secretKey
    })

    fastify.decorate("authenticate", async function (request, reply) {
        try {
            await request.jwtVerify()
        } catch (err) {
            reply.send(err)
        }
    })

    done()
})
