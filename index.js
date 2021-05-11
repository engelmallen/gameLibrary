let searchBar = document.getElementById('searchBar')
let searchBtn = document.getElementById('searchBtn')
let info = document.getElementById('info')

// let systems = "";
let games = ""; 

// let getSystems = async () => {
// 	const response = await fetch("https://api.rawg.io/api/platforms?key=24c80e1f2a1345e09c8964b0e655605a")
// 	systems = await response.json();
// 	 console.log(systems)
// }

// let response = ""

// let rollResponse = async (x) => {
// 	for (var i = 1; i <= 5; i++) {
// 		let response += await fetch(x+i)
// 		games += await response.json()
// 	}
// }



let getGames = async () => {
	
	let response = await fetch(`https://api.rawg.io/api/games?key=24c80e1f2a1345e09c8964b0e655605a&page?=3`)
	games = await response.json();

		// for (var i = 2; i <= 5; i++) {
		// 	let response = await fetch(`https://api.rawg.io/api/games?key=24c80e1f2a1345e09c8964b0e655605a&page?=${i}`)
		// 	games += await response.json().results
		// 	}
	console.log(games)

	// const responseNext += await fetch(games.next)
	// console.log(games)
}

// let getNextGames = async (x) => {
// 	const response = await fetch(x)
// 	games = await response.json();
// 	console.log(games)
// 	console.log(games.next)
// }

getGames()
// getGames(`https://api.rawg.io/api/games?key=24c80e1f2a1345e09c8964b0e655605a`)
// getGames(games.next)

// getSystems()

let makeBlocks = (block) => {
	block.map((a)=>{
	info.innerHTML +=
		`<div id="info" class="border rounded col-lg-4 text-center">
			<div class="card">
				<div class="cardImage" style="background-image: url('${a.background_image}')"></div>
				
				<div class="card-body">
					<h5 class="card-title">${a.name}</h5>
					<p class="card-text">${a.rating}</p>
					<a href="#" class="btn btn-primary">Go somewhere</a>
				</div>
			</div>
		</div>`;
	})
}

let makeGames = (a) =>{
	info.innerHTML =""
	let searchBarValue = searchBar.value.toLowerCase();
	let getNewGames = a.results.filter((i)=>{
			return i.name.toLowerCase().includes(searchBarValue)
	})	
	makeBlocks(getNewGames)  
}

searchBar.addEventListener('keyup', ()=>{makeGames(games)})

// let makeGames = (foundGame)=>{ 
// 	games.results.find((i)=>{
// 		return i.name.toLowerCase().includes(a)
// })}

// searchBar.addEventListener('keyup', function(a){
// 	info.innerHTML = makeBlocks(makeGames)
// 	console.log(makeGames);
// })
