const Command = require('../../structures/Command.js');
const gamelist = require('../../assets/json/gamelist.json');
// TODO: a command for owners only where the gamelist can be updated.

module.exports = class WhatGameCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'whatgame',
            aliases: ['wgame', 'wg'],
            group: 'rautil',
            memberName: 'whatgame',
            description: 'Responds with a random game that has achievements.',
            examples: ['`whatgame`', '`whatgame nes`', '`whatgame "street fighter"`, '`whatgame megadrive sonic`'],
            args: [
                {
                    key: 'terms',
                    prompt: '',
                    type: 'string',
                    infinite: true,
                },
            ]
        });
    }

    run(msg, { terms }) {
/* LOGIC FOR THE whatgame COMMAND:

let offset = outputData.systemIndex.nes[0];
let random = Math.floor(Math.random() * outputData.systemIndex.nes[1])

console.log(`__**Chosen game**__
Title: ${outputData.gamesData[title][offset + random]}
Achievements: ${outputData.gamesData[achievements][offset + random]}
Points: ${outputData.gamesData[points][offset + random]}
Leaderboards: ${outputData.gamesData[leaderboards][offset + random]}
`);
*/
    }
};
