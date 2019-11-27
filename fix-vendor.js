const fs = require('fs')

const pathVuex = './node_modules/vuex/types/index.d.ts'
const pathVue = './node_modules/vuex/types/vue.d.ts'

function exitIfErr(err) {
    if (err) {
        process.exit(1)
    }
}

fs.readFile(pathVuex, 'utf8', (err, data) => {
    exitIfErr(err)

    const res = data
        .replace(/(\(type: string, payload\?: any, options\?)/g, '// $1')
        .replace(/(<P extends Payload>\(payloadWithType: P)/g, '// $1')

    fs.writeFile(pathVuex, res, exitIfErr)
})

fs.readFile(pathVue, 'utf8', (err, data) => {
    exitIfErr(err)

    const res = data.replace(/(\$store: Store<any>)/g, '// $1')

    fs.writeFile(pathVue, res, exitIfErr)
})
