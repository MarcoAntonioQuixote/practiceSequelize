// Fake company data
const companies = [
    { name: 'Elysium Enterprises', address: '123 Skyline Blvd' },
    { name: 'Nebula Innovations', address: '456 Starlight Ave' },
    { name: 'Galactic Dynamics', address: '789 Comet Rd' },
    { name: 'Aurora Industries', address: '321 Moonlight Way' },
    { name: 'Stellar Solutions', address: '654 Solar St' },
    { name: 'Cosmic Creations', address: '987 Milky Way' },
    { name: 'Nova Ventures', address: '246 Eclipse Dr' },
    { name: 'Celestial Systems', address: '135 Asteroid Ln' },
    { name: 'Orbit Enterprises', address: '579 Black Hole Blvd' },
    { name: 'Supernova Technologies', address: '802 Nebula Ave' },
    { name: 'Lunar Logistics', address: '164 Solar System Rd' },
    { name: 'Saturn Solutions', address: '375 Galaxy Way' },
    { name: 'Interstellar Innovations', address: '882 Comet Rd' },
    { name: 'Cosmos Corporation', address: '419 Asteroid Dr' },
    { name: 'Infinity Industries', address: '736 Universe Blvd' },
    { name: 'Starlight Systems', address: '543 Andromeda Ave' },
    { name: 'Solar Solutions', address: '298 Supernova St' },
    { name: 'Nebula Networks', address: '651 Mercury Way' },
    { name: 'Galaxy Group', address: '954 Venus Rd' },
    { name: 'Astro Enterprises', address: '207 Jupiter Ave' }
  ];
  
  // Fake user data
  const users = [
    { name: 'Astrid Starlight', email: 'astrid@example.com', password: 'astrid123' },
    { name: 'Cosmo Nebula', email: 'cosmo@example.com', password: 'cosmo456' },
    { name: 'Stella Celestial', email: 'stella@example.com', password: 'stella789' },
    { name: 'Orion Galactic', email: 'orion@example.com', password: 'orion321' },
    { name: 'Luna Lunar', email: 'luna@example.com', password: 'luna654' },
    { name: 'Nova Solar', email: 'nova@example.com', password: 'nova987' },
    { name: 'Astra Aurora', email: 'astra@example.com', password: 'astra246' },
    { name: 'Sky Supernova', email: 'sky@example.com', password: 'sky135' },
    { name: 'Serenity Saturn', email: 'serenity@example.com', password: 'serenity579' },
    { name: 'Eclipse Interstellar', email: 'eclipse@example.com', password: 'eclipse802' },
    { name: 'Stellar Space', email: 'stellar@example.com', password: 'stellar164' },
    { name: 'Cosmic Saturn', email: 'cosmic@example.com', password: 'cosmic375' },
    { name: 'Celestial Cosmos', email: 'celestial@example.com', password: 'celestial882' },
    { name: 'Starlight Infinity', email: 'starlight@example.com', password: 'starlight419' },
    { name: 'Solar Universe', email: 'solar@example.com', password: 'solar736' },
    { name: 'Galactic Andromeda', email: 'galactic@example.com', password: 'galactic543' },
    { name: 'Supernova Mercury', email: 'supernova@example.com', password: 'supernova298' },
    { name: 'Nebula Venus', email: 'nebula@example.com', password: 'nebula651' },
    { name: 'Milky Way Jupiter', email: 'milkyway@example.com', password: 'milkyway954' },
    { name: 'Asteroid Astro', email: 'asteroid@example.com', password: 'asteroid207' }
  ];
  
  // Fake shipment data
  const shipments = [
    { address: '123 Space Blvd', status: 'Shipped', price: 100 , userId: 5, companyId: 9},
    { address: '456 Nebula Ave', status: 'In transit', price: 150 , userId: 9, companyId: 9},
    { address: '789 Starlight Rd', status: 'Delivered', price: 200 , userId: 8, companyId: 4},
    { address: '321 Celestial Way', status: 'Shipped', price: 120 , userId: 2, companyId: 1},
    { address: '654 Cosmic St', status: 'In transit', price: 170 , userId: 15, companyId: 16},
    { address: '987 Aurora Blvd', status: 'Delivered', price: 220 , userId: 13, companyId: 11},
    { address: '246 Solar System Ave', status: 'Shipped', price: 130 , userId: 5, companyId: 7},
    { address: '135 Lunar Rd', status: 'In transit', price: 180 , userId: 8, companyId: 11},
    { address: '579 Eclipse Way', status: 'Delivered', price: 240 , userId: 10, companyId: 11},
    { address: '802 Stellar Dr', status: 'Shipped', price: 140 , userId: 12, companyId: 5},
    { address: '164 Interstellar Ave', status: 'In transit', price: 190 , userId: 12, companyId: 12},
    { address: '375 Cosmic Rd', status: 'Delivered', price: 260 , userId: 10, companyId: 6},
    { address: '882 Celestial Way', status: 'Shipped', price: 150 , userId: 1, companyId: 6},
    { address: '419 Starlight Blvd', status: 'In transit', price: 200 , userId: 1, companyId: 11},
    { address: '736 Solar Dr', status: 'Delivered', price: 280 , userId: 8, companyId: 8},
    { address: '543 Galactic Ave', status: 'Shipped', price: 160 , userId: 9, companyId: 4},
    { address: '298 Supernova Rd', status: 'In transit', price: 210 , userId: 6, companyId: 5},
    { address: '651 Nebula Way', status: 'Delivered', price: 300 , userId: 7, companyId: 3},
    { address: '954 Milky Way Blvd', status: 'Shipped', price: 170 , userId: 7, companyId: 3},
    { address: '207 Asteroid Ave', status: 'In transit', price: 220, userId: 3, companyId: 5 }
  ];
  
  module.exports = { companies, users, shipments };
  