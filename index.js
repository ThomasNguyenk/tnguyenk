const http = require('http')
const hostname = '127.0.0.1'
const port = 8000

const server =
    http.createServer((requete, reponse) => {
        reponse.statusCode = 200
        reponse.setHeader = 'Content-Type','text/plain'
        reponse.end('Coucou la section SIO2')
    })

server.listen(port,hostname, () => {
    console.log(`Le serveur tourne sur mon poste : ${hostname} sur le port ${port}`)
})