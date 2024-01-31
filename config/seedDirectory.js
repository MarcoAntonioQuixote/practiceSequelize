const {User,Shipment,Company} = require("../models/associations");
const { sequelize } = require("./connection");

const shipments = [
  {
    address: '123 Main St, Cityville, USA',
    status: 'Pending',
    price: 50,
  },
  {
    address: '456 Oak Ln, Townsville, USA',
    status: 'In Transit',
    price: 75,
  },
  {
    address: '789 Pine Ave, Villagetown, USA',
    status: 'Delivered',
    price: 100,
  },
  {
    address: '101 Elm Dr, Hamletsville, USA',
    status: 'Pending',
    price: 60,
  },
  {
    address: '202 Maple Ct, Suburbia, USA',
    status: 'In Transit',
    price: 80,
  },
];

const companies = [
    {
      name: "TechNova Solutions",
      address: "123 Main Street, Suite 456, Cyber City, Digitaland"
    },
    {
      name: "GreenGrove EcoTech",
      address: "789 Green Avenue, Sustainability Plaza, Ecotopia"
    },
    {
      name: "ByteCraft Innovations",
      address: "456 Tech Lane, Silicon Valley, Circuit City"
    },
    {
      name: "Skyline Dynamics",
      address: "101 Cloud Boulevard, Sky High Tower, Datacenter City"
    },
    {
      name: "Fusion Innovators Inc.",
      address: "555 Quantum Street, Fusion Park, Innovationville"
    }
  ];  

const users = [
    {
      name: 'John Doe',
      email: 'johndoe@email.com'
    },
    {
      name: 'Jane Smith',
      email: 'janesmith@email.com'
    },
    {
      name: 'Robert Johnson',
      email: 'rjohnson@email.com'
    },
    {
      name: 'Emily Davis',
      email: 'emilydavis@email.com'
    },
    {
      name: 'David Williams',
      email: 'davidwilliams@email.com'
    },
    {
      name: 'Sarah Brown',
      email: 'sarahbrown@email.com'
    },
    {
      name: 'Michael Green',
      email: 'michaelgreen@email.com'
    },
    {
      name: 'Jessica Johnson',
      email: 'jessicajohnson@email.com'
    },
    {
      name: 'William Taylor',
      email: 'williamtaylor@email.com'
    },
    {
      name: 'Samantha Lee',
      email: 'samanthalee@email.com'
    }
  ];

const seedDatabase = async () => {

    // try {
    //     await Company.bulkCreate(companies);
    //     console.log('Able to create company data');
    // } catch (err) {
    //     console.log('Unable to add companies', err);
    // }

    const models = [Company,Shipment,User];
    const data = [companies,shipments,users];

    for (let x = 0; x < models.length; x++) {
        try {
            await models[x].bulkCreate(data[x]);
            console.log('Added data for ', models[x])
        } catch (error) {
            console.log('Data', error);
        }
    }

    sequelize.sync({alter: true})
}

module.exports = seedDatabase;