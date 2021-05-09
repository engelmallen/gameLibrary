let searchBar = document.getElementById('searchBar')
let searchBtn = document.getElementById('searchBtn')
let info = document.getElementById('info')

let systems = null;
let games = null;

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

let makeBlocks = (block) => {
	let createIt =
		`<div id="info" class="border w-100 rounded ">
		<div class="card" style="width: 18rem;">
			<img src="${block.background_image}" class="card-img-top" alt="...">
			<div class="card-body">
			<h5 class="card-title">${block.name}</h5>
			<p class="card-text">${block.rating}</p>
			<a href="#" class="btn btn-primary">Go somewhere</a>
			</div>
		</div>
	</div>`;
	return createIt
}

getGames()
getSystems()

searchBtn.addEventListener('click', function(){
	let makeGames = games.results.filter((i)=>{
		return i.name === searchBar.value
		
	})
	console.log(makeGames);
})




/*
GET https://api.rawg.io/api/platforms?key=24c80e1f2a1345e09c8964b0e655605a
GET https://api.rawg.io/api/games?key=24c80e1f2a1345e09c8964b0e655605a&dates=2019-09-01,2019-09-30&platforms=18,1,7*/
