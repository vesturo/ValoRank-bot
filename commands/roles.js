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
        guild.roles.create({ name: 'Radiant', color: '#fefeb1', });
        guild.roles.create({ name: 'Immortal 3', color: '#be334d', });
        guild.roles.create({ name: 'Immortal 2', color: '#be334d', });
        guild.roles.create({ name: 'Immortal 1', color: '#be334d', });
        guild.roles.create({ name: 'Diamond 3', color: '#c587f4', });
        guild.roles.create({ name: 'Diamond 2', color: '#c587f4', });
        guild.roles.create({ name: 'Diamond 1', color: '#c587f4', });
        guild.roles.create({ name: 'Platinum 3', color: '#52d1df', });
        guild.roles.create({ name: 'Platinum 2', color: '#52d1df', });
        guild.roles.create({ name: 'Platinum 1', color: '#52d1df', });
        guild.roles.create({ name: 'Gold 3', color: '#d98d20', });
        guild.roles.create({ name: 'Gold 2', color: '#d98d20', });
        guild.roles.create({ name: 'Gold 1', color: '#d98d20', });
        guild.roles.create({ name: 'Silver 3', color: '#c6cdcb', });
        guild.roles.create({ name: 'Silver 2', color: '#c6cdcb', });
        guild.roles.create({ name: 'Silver 1', color: '#c6cdcb', });
        guild.roles.create({ name: 'Bronce 3', color: '#865801', });
        guild.roles.create({ name: 'Bronce 2', color: '#865801', });
        guild.roles.create({ name: 'Bronce 1', color: '#865801', });
        guild.roles.create({ name: 'Iron 3', color: '#5e5e5e', });
        guild.roles.create({ name: 'Iron 2', color: '#5e5e5e', });
        guild.roles.create({ name: 'Iron 1', color: '#5e5e5e', });
        guild.roles.create({ name: 'Unranked', color: '#5f9695', });
        
    }
}