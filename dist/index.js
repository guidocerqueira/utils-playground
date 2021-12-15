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

            const { data: { estado } } = await axios.get(`https://viacep.com.br/ws/${zipcode.replace(/[^0-9]/g, '')}/json/`);

            return resolve(estado);
        } catch (error) {
            return reject(error);
        }
    });

    return await city;
}

module.exports = {
    getCityFromZipcode,
    getStateFromZipcode
}