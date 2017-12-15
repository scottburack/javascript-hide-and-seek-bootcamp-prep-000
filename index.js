
function getFirstSelector(selector) {
  return document.querySelector(selector);
}


function nestedTarget() {
  return document.getElementById('nested')
}


function increaseRankBy(n) {
  const list = document.getElementById('app').querySelectorAll('ul.ranked-list li')


  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = (Number(list[i].innerHTML) + n).toString()
  }
  return list;
}

function deepestChild() {
  const divs = document.getElementById('grand-node').querySelectorAll('div')

  for (let i = 0; i < divs.length; i++) {
    if (i === divs.length - 1) {
      return divs[i];
    }

  }
}
