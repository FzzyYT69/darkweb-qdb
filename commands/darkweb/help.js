const { MessageButton, MessageActionRow, MessageEmbed } = require('discord.js');

module.exports = {
    name: "help",
    // aliases: ["create"],
    description: "shows the help menu of the bot",
    category: "help",
    usage: "help",
    botPermissions: ["EMBED_LINKS"],
    userPermissions: [],

    async run(client, message, args) {

        setTimeout(() => message.delete().catch(() => null), 5000);

        let embed = new MessageEmbed()
            .setTitle(`${client.user.username} Help Menu`);

        if (message.member.roles.cache.get(client.config.adminrole)) {
            embed.addField(
                "Admin Commands",
                client.config.prefix + "block `user_tag`\n" +
                client.config.prefix + "unblock `user_tag`\n" +
                client.config.prefix + "warn `user_tag`\n" +
                client.config.prefix + "clearwarn `user_tag`"
            )
                .addField(
                    "Switch Commands",
                    client.config.prefix + "lock - to lock the darkweb\n" +
                    client.config.prefix + "unlock - to unlock the darkweb"
                );
        };

        embed.addField(
            'User Commands',
            client.config.prefix + "create `tag_here`\n" +
            client.config.prefix + "delete `tag_here`"
        )
            .setFooter({
                text: 'DM ME TO SEND POST ON DARK WEB',
                iconURL: client.user.displayAvatarURL({ dynamic: true })
            });

        return message.reply({ embeds: [embed] })
            .then(m => setTimeout(() => m.delete().catch(() => null), 15000));
    },
};