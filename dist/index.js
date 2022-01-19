const axios = require('axios');

const getCityFromZipcode = async (zipcode) => {
    const city = new Promise(async (resolve, reject) => {
        try {
            if (!zipcode) {
                throw new Error('O Cep é obrigatório');
            }

            const { data: { localidade } } = await axios.get(`https://viacep.com.br/ws/${zipcode.replace(/[^0-9]/g, '')}/json/`);

            return resolve(localidade);
        } catch (error) {
            return reject(error);
        }
    });

    return city;
}

const getStateFromZipcode = async (zipcode) => {
    const city = new Promise(async (resolve, reject) => {
        try {
            if (!zipcode) {
                throw new Error('O Cep é obrigatório');
            }

            const { data: { uf } } = await axios.get(`https://viacep.com.br/ws/${zipcode.replace(/[^0-9]/g, '')}/json/`);

            return resolve(uf);
        } catch (error) {
            return reject(error);
        }
    });

    return city;
}

const getPackageDescriptionNpm = async (package) => {
    const description = new Promise(async (resolve, reject) => {
        try {
            if (!package) {
                throw new Error('O nome do pacote é obrigatório');
            }

            const { data: { description } } = await axios.get(`https://registry.npmjs.org/${package}`);

            return resolve(description);
        } catch (error) {
            return reject(error);
        }
    });

    return description;
}

module.exports = {
    getCityFromZipcode,
    getStateFromZipcode,
    getPackageDescriptionNpm
}