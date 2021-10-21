// required dependencies
const Discord = require('discord.js');

module.exports = {
    name: "roles",
    description: "Setup the Roles needed for sync",
    category: "owner",
    slash: "both",
    global: true,
    hidden: true,
    ownerOnly: true,
    permission: [],
    /**
     * 
     * @param {Discord.Client} param0.client  
     */

     run: async ({ guild,client }) => {
        guild.roles.create({ name: 'Radiant', color: 'TOMATO', });
        guild.roles.create({ name: 'Immortal 3', color: 'RED', });
        guild.roles.create({ name: 'Immortal 2', color: 'RED', });
        guild.roles.create({ name: 'Immortal 1', color: 'RED', });
        guild.roles.create({ name: 'Diamond 3', color: 'AQUA', });
        guild.roles.create({ name: 'Diamond 2', color: 'AQUA', });
        guild.roles.create({ name: 'Diamond 1', color: 'AQUA', });
        guild.roles.create({ name: 'Platinum 3', color: 'STEELBLUE', });
        guild.roles.create({ name: 'Platinum 2', color: 'STEELBLUE', });
        guild.roles.create({ name: 'Platinum 1', color: 'STEELBLUE', });
        guild.roles.create({ name: 'Gold 3', color: 'GOLD', });
        guild.roles.create({ name: 'Gold 2', color: 'GOLD', });
        guild.roles.create({ name: 'Gold 1', color: 'GOLD', });
        guild.roles.create({ name: 'Silver 3', color: 'FULL_WHITE', });
        guild.roles.create({ name: 'Silver 2', color: 'FULL_WHITE', });
        guild.roles.create({ name: 'Silver 1', color: 'FULL_WHITE', });
        guild.roles.create({ name: 'Bronce 3', color: 'CHOCOLATE', });
        guild.roles.create({ name: 'Bronce 2', color: 'CHOCOLATE', });
        guild.roles.create({ name: 'Bronce 1', color: 'CHOCOLATE', });
        guild.roles.create({ name: 'Iron 3', color: 'PAPAYAWHIP', });
        guild.roles.create({ name: 'Iron 2', color: 'PAPAYAWHIP', });
        guild.roles.create({ name: 'Iron 1', color: 'PAPAYAWHIP', });
    }
}