const teamName = process.env.KB_TEAMNAME;
exports.commands = ['adduser'];

exports['adduser'] = {
        re: /^!adduser @(?<username>\S+)\s*$/,
        description: "add a new member",
        usage: '[@username]',
        adminOnly: true,
        handle: async (msg, match, bot) => {
            await bot.team.addMembers({
                team: teamName,
                usernames: [{username: match.groups["username"], role: "reader"}]
            });
        }
    };
