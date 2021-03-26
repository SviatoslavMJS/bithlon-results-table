/* ----------- INITIAL STATE ------------ */

let players = [
    {
        id: 1,
        name: "Artem Pryma",
        result: "26:07:001",
        flag: "./flags/64/Ukraine.png",
        fireTime: "15:243",
        hits: 5
    },
    {
        id: 2,
        name: "Johannes Dale",
        result: "29:02:051",
        flag: "./flags/64/Turkey.png",
        fireTime: "19:032",
        hits: 2
    },
    {
        id: 3,
        name: "Lukas Hofer",
        result: "26:37:051",
        flag: "./flags/64/Vietnam.png",
        fireTime: "14:034",
        hits: 5
    },
    {
        id: 4,
        name: "Tarjei Bø",
        result: "40:17:301",
        flag: "./flags/64/United-States.png",
        fireTime: "10:534",
        hits: 3
    },
    {
        id: 5,
        name: "Arnd Peiffer",
        result: "33:47:823",
        flag: "./flags/64/Iraq.png",
        fireTime: "19:837",
        hits: 1
    },
    {
        id: 6,
        name: "Erik Lesser",
        result: "30:17:008",
        flag: "./flags/64/Hong-Kong.png",
        fireTime: "11:504",
        hits: 2
    },
    {
        id: 7,
        name: "Anton Smolski",
        result: "28:07:001",
        flag: "./flags/64/France.png",
        fireTime: "18:468",
        hits: 4
    },
];

/* -------- SORTING FUNCTIONS ------- */

function sortByResult(players) {
    players.sort((a, b) => {
        return (a.result.split(":").join("")) - (b.result.split(":").join(""));
    });
}

function sortByFire(players) {
    players.sort((a, b) => {
        return (a.fireTime.split(":").join("")) - (b.fireTime.split(":").join(""));
    });
}

function sortByName(players) {
    players.sort((a, b) => {
        if (a.name > b.name) return 1;
        if (a.name == b.name) return 0;
        if (a.name < b.name) return -1;
    });
}

function sortByHits(players) {
    players.sort((a, b) => {
        return b.hits - a.hits;
    });
}

/*------ SEARCHING FUNCTION  -------- */


function searchPlayer(value) {
    let obj = players.filter(item => item.name.match(value));
    return obj;
}

/* ---------  CREATE TABLE  --------- */

function createTable(players) {

    document.querySelector(".container").innerHTML = "";

    let content = `<div class="player header">
    <div class="col position">Pos.</div>
    <div class="col name">Name</div>
    <div class="col flag">State</div>
    <div class="col time">Time</div>
    <div class="col shooting-time">Fire Rate</div>
    <div class="col hits">Hits</div>
    <div class="clearfix"></div>
   </div>`;

    players.map((item, index) => {
        content += `<div class="player">
        <div class="col position">${index + 1}</div>
        <div class="col name">${item.name}</div>
        <div class="col flag"><img src=${item.flag} alt="flag"></div>
        <div class="col time">${item.result}</div>
        <div class="col shooting-time">${item.fireTime}</div>
        <div class="col hits"><img src="./hits/${item.hits}.png" alt=""></div>
        <div class="clearfix"></div>
    </div>`;
    });

    document.querySelector(".container").insertAdjacentHTML("beforeend", content)

}


/*------- LISTENERS-------*/

document.querySelector(".btn-name").addEventListener('click', () => {
    sortByName(players);
    createTable(players);
});

document.querySelector(".btn-result").addEventListener('click', () => {
    sortByResult(players);
    createTable(players);

});

document.querySelector(".btn-fire").addEventListener('click', () => {
    sortByFire(players);
    createTable(players);
})

document.querySelector(".btn-hits").addEventListener('click', () => {
    sortByHits(players);
    createTable(players);
})

document.querySelector(".sub").addEventListener("click", () => {
    let value = document.querySelector(".input").value;
    let player = searchPlayer(value);
    if (player.length !== 0) createTable(player);

})


sortByResult(players);
createTable(players);

