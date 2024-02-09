const {User,Shipment,Company} = require("../models/associations");
const { sequelize } = require("./connection");
const { companies, users, shipments } = require("./seedingData");

const seedDatabase = async () => {

    await sequelize.sync({force: true})

    const models = [Company,User,Shipment];
    const data = [companies,users,shipments];

    for (let x = 0; x < models.length; x++) {
        try {
            await models[x].bulkCreate(data[x]);
            console.log('Added data for ', models[x])
        } catch (error) {
            console.log('Data', error);
        }
    }

    // sequelize.sync({alter: true})
}

module.exports = seedDatabase;