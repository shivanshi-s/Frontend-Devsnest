
var outputDiv = document.getElementById("cat-output");
var btnGenerate = document.querySelector("#generate-cat");

btnGenerate.addEventListener("click",getRandomCat);

var serverURL = "https://thatcopy.pw/catapi/rest/";
function getRandomCat() {
	fetch(serverURL)
		.then(res => res.json())
		.then(data => {
			outputDiv.innerHTML = `<img src=${data.url} alt="cat" />`
		});
}

