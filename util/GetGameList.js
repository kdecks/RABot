/*
ADD SOME STUFF
*/

async function populateGameList() {
    /*
    - loop through a list of valid console IDs
      - get all games (I <3 cheerio)
        - IMPORTANT: parse data and save them like cheerio-tableparser!
    */

    const   title = 0,
            achievements = 1,
            points = 2,
            leaderboards = 3,
            gameid = 4;

    // TODO:    analisar se esta lógica pode ficar no mesmo loop onde estou
    //          obtendo os dados do site.
    let systemIndex = {};
    let gamesData = [
        [], // title
        [], // achievements
        [], // points
        [], // leaderboards
        // TODO: [], // gameid
    ];

    let tmpIndex = 0;
    for(let system in inputData) {
        let tmpData = inputData[system];
        let entriesAmount = tmpData[0].length - 2; // -2 = -1 (header) -1 (footer) [see for loop below]
        systemIndex[system] = [tmpIndex, entriesAmount];
        tmpIndex += entriesAmount;

        // getting rid of the table header and "footer"
        // and concatenating on gamesData array
        for(let i = tmpData.length - 1; i >= 0; i--)
            gamesData[i] = gamesData[i].concat(tmpData[i].slice(1, tmpData[i].length - 1));

    }

    let outputData = {
        systemIndex: systemIndex,
        gamesData: gamesData,
    }

    // TODO: save this json at 'assets/json/gamelist.json'
    //console.log(JSON.stringify(outputData));
}

module.exports = () => {
    populateGameList();
    setInterval( populateGameList, 1000 * 3600 * 24 );
}
