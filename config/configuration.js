function loadEnvironmentVariable(keyname) {
    const envVar = process.env[keyname];
    console.log(envVar)

    if (!envVar) {
        throw new Error(`Configuration must include ${keyname}`)
    }

    return envVar;
}

module.exports = {
    secretKey: loadEnvironmentVariable('SECRET_KEY'),
}