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

