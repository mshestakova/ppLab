let arr = [ "Apple DOS", "Mac", "Zeta", "AiS", "TOPS-20", "WAITS", "HP-UX", "ALCS", "PTS-DOS", "MSX-DOS", "MS-DOS", "Xenix", "Windows 7", "NetWare", "Solaris", "Idris", "OS-9", 
"Rhapsody", "Ultrix", "Linux", "Minix", "Haiku", "Venix", "Syllable", "CSI-DOS"];
console.log(arr);
console.log();


arr = arr.filter(x => x.lastIndexOf('-') == -1);
console.log("Filter array");
console.log(arr);


function compare(a, b) 
  {
    auc = a.toUpperCase();
    buc = b.toUpperCase();
    if (auc > buc) return 1
    else if (auc < buc) return -1
    else return 0;
  }

console.log();
console.log("Sort array");

arr = arr.sort(compare);
console.log(arr);



let diphthongs = ["ie", "ye", "uy", "eye", "igh", "oi", "oy", "ai", "ay", "ey", "ea", "ei", "ow", "ou", 
"oa", "old", "oll", "ear", "eer", "ere", "ier", "are", "air", "ue", "ure", "our"];

function diphths(item)
{
  let ilc = item.toLowerCase();
  let dinstr = [];
  for (let i = 0; i < diphthongs.length; i++) 
  {
     if (ilc.indexOf(diphthongs[i]) != -1) dinstr.push(diphthongs[i]);
  }
  if (dinstr.length == 0) return ("no diphthongs") 
  else return dinstr;
}

console.log();

arr.forEach(os => console.log(os + " includes " + diphths(os)));


let s0 = arr.join('');
s0 = s0.toLowerCase();
let s1 = "";
while (s0.length > 0)
{
  s1 += s0[0];
  s0 = s0.replace(new RegExp(s0[0], 'g'), "");
}

let arrofsym = Array.from(s1).sort();

let frec = new Array(arrofsym.length);
let n = 0;
for (let i = 0; i < arrofsym.length; i++)
{
  frec[i] = new Array(arr.length);
  for (let j = 0; j < arr.length; j++)
  {
    n = 0;
/*
    p = arr[j].indexOf(arrofsym[i]);
    while(p >= 0)
    {
    n++;
    p = arr[j].indexOf(arrofsym[i], p+1);
    }
*/
    for (p = 0; p < arr[j].length; p++) 
      if (arr[j][p].toLowerCase() == arrofsym[i]) n++;
    frec[i][j] = n;
  } 
}

for (i = 0; i < arrofsym.length; i++)
{
  smsg = " \'" + arrofsym[i] + "\'";
  for (j = 0; j < arr.length; j++)
      smsg += "  " + frec[i][j];
  console.log(smsg);
}
