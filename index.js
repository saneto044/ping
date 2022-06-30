const express = require('express');
const app = express()

const util = require('util')
const exec = util.promisify(require('child_process').exec);

const ping = async (host) => {
    const { stdout,stderr } = await exec(`ping -c 5 ${host}`);
    console.log(stdout)
    console.log(stderr) 
}
//aqui so precisa mudar o local entre as aspas simples 
ping('www.google.com')

const port = 5000
app.listen(port,() => console.log(port))