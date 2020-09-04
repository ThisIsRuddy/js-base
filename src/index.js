const execute = async () => {
    console.info(`Hello ${process.env.VARIABLE_1}`);
    return 'Finished!';
}

execute()
    .then(res => console.log(res))
    .catch(err => console.error(err));
