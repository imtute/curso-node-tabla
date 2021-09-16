const { number } = require('yargs');

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })


.option('l', {
    alias: 'listar',
    type: "boolean",
    default: false,
    describe: 'Con este script enlistas la tabla'
})


.option('h', {
    alias: 'hasta',
    type: 'number',
    default: 10,
    describe: 'Se utiliza para indicar hasta que base multiplicar'
})

.check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un numero'
        }
        return true;
    })
    .argv;

module.exports = argv;