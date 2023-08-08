// run immediately on page load
registerHandlers();

//functions run when called
function registerHandlers() {
	// Detect selection of hero and villain
	document.querySelector("#heroSelect").addEventListener("change", selectionChanged);
	document.querySelector("#villainSelect").addEventListener("change", selectionChanged);

	selectionChanged();
}

function selectionChanged() {
	// Get hero and villain selected
	const selectedHero = document.querySelector("#heroSelect").value;
	const selectedVillain = document.querySelector("#villainSelect").value;
	
	// assign random number for the attack power for each fighter
	min = 1;
	max = 10;
    try{
	attackPowerHero = Math.floor( Math.random() * (max - min + 1) + min );
	attackPowerVillian = Math.floor( Math.random() * (max - min + 1) + min );
    }
    catch {
        alert("Calculations incorrect");
    }
	
	alert("Hero power: " + attackPowerHero + ", Villain power: " + attackPowerVillian);
	
	// determine who wins!
	let winner;
	
	if( attackPowerHero > attackPowerVillian )
		winner = selectedHero;
	else if( attackPowerVillian > attackPowerHero )
		winner = selectedVillain;
	else
		winner = "Draw! Both fighters retreat!";

	document.querySelector("#winner").innerHTML = `Winner: ${winner}!`;
}

