let getSystems = async () => {
	const response = await fetch("https://api.rawg.io/api/platforms?key=24c80e1f2a1345e09c8964b0e655605a")
	
	systems = await response.json();
	 console.log(systems)
}

let getGames = async () => {
	const response = await fetch("https://api.rawg.io/api/games?key=24c80e1f2a1345e09c8964b0e655605a&dates=2019-09-01,2019-09-30&platforms=18,1,7")
	
	games = await response.json();
	 console.log(games)
}



getGames()
getSystems()

/*
GET https://api.rawg.io/api/platforms?key=24c80e1f2a1345e09c8964b0e655605a
GET https://api.rawg.io/api/games?key=24c80e1f2a1345e09c8964b0e655605a&dates=2019-09-01,2019-09-30&platforms=18,1,7*/
