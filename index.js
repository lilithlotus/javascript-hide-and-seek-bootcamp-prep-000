function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
   return nested.querySelector(".target");
}

function increaseRankBy(n) {
  var lis = document.querySelectorAll("ul.ranked-list li");

  for(var i = 0; i < lis.length; i++)
  lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
}

function deepestChild() {
  var lis = document.getElementById("grand-node").querySelectorAll("div");
  return lis[lis.length - 1].innerHTML;
}
