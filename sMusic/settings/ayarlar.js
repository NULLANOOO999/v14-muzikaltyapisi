require("dotenv").config();

module.exports = {
    TOKEN: process.env.TOKEN || "TOKEN GİR",  // botunuzun tokenini girin
    PREFIX: process.env.PREFIX || "!", // botun prefixini girin
    SAHİP: process.env.SAHİP || "SAHİP İD", //botun sahibinin discord id sini girin.
}