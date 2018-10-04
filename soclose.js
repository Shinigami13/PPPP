list = [];
count = {};



v = document.querySelector('#tab-moves-16').querySelectorAll('td.cell-name a');

var times = 0;
undefined
while(times < v.length) {

    (v[times].innerText);

    times = times+1;

test = document.querySelector('#tab-moves-16').querySelectorAll('td.cell-name a')[times].innerText;

list.push(test);
console.log(list)

}

function Counter(Str) {
  var count = {};
  Str.forEach(val => count[val] = (count[val] || 0) + 1);
  return count;
}

exp = JSON.stringify(Counter(list), null, 2);
final_list = Counter(list);

other_list = exp;
pxe = JSON.parse(Counter(list), null, 2);

var someStr = exp;
console.log(someStr.replace(/['"]+/g, ''));
var someBlg = someStr;
console.log(someBlg.replace(/\"/g, ""));
Blg = (someBlg.replace(/\"/g, ""));
Str = (someStr.replace(/['"]+/g, ''));
  for( i = 0; i < someBlg.length; i++){
    console.log(someBlg[i]);
  };

var counts = {};
exp.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
