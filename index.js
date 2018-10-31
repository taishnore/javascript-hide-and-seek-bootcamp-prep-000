function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
    const here = document
		.getElementById("grand-node")
		.querySelectorAll("div");
    for (let i = 0; i < here.length; i++) {
        if (i === here.length-1) {
            return here[i]
        }
    }
}

function increaseRankBy(n) {
    let tab = document
		.getElementById("app")
		.querySelectorAll("ul.ranked-list li");
	for (let i = 0; i < tab.length; i++) {
        tab[i].innerHTML = (parseInt(tab[i].innerHTML) + n)
    }
}





