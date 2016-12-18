let arr = [ "Apple DOS", "Mac", "Zeta", "AiS", "TOPS-20", "WAITS", "HP-UX", "ALCS", 
"PTS-DOS", "MSX-DOS", "MS-DOS", "Xenix", "Windows 7", "NetWare", "Solaris", "Idris", "OS-9", 
"Rhapsody", "Ultrix", "Linux", "Minix", "Haiku", "Venix", "Syllable", "CSI-DOS"];
console.log(arr);
console.log();


arr = arr.filter(x => x.lastIndexOf('-') == -1);
console.log("\nFilter array \n");
console.log(arr);


function compare(a, b) 
  {
    auc = a.toUpperCase();
    buc = b.toUpperCase();
    if (auc > buc) return 1
    else if (auc < buc) return -1
    else return 0;
  }

console.log("\nSort array \n");

arr = arr.sort(compare);
console.log(arr);

// diphthongs

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

console.log("\nDiphthongs \n");

arr.forEach(os => console.log(os + " includes " + diphths(os)));

// frequency

function frequency(item)
{
  let obj = {};
  let itemLC = item.toLowerCase();
  for (let i = 0; i < item.length; ++i)
  {
    if (obj[itemLC[i]] === undefined){
      obj[itemLC[i]] = 1;
    }
    else {
      ++obj[itemLC[i]];
    }
  }
  return obj;
}

console.log("\nFrequency \n");

arr.forEach(os => {console.log(os); console.log(frequency(os))});

// hash function

function hashFunc(item)
{
	let hash = 0;
	for(let i = 0; i < item.length; i++)
	{
		hash += item.charCodeAt(i);
		hash += ((hash & 0x001FFFFF) << 10);
		hash ^= (hash >> 6);
	}

	hash += ((hash & 0x0FFFFFFF) << 3);
	hash ^= (hash >> 11);
	hash += ((hash & 0x0000FFFF) << 15);

	return hash;
	
}

console.log("\nHash codes \n");

arr.forEach(os => {
	hash = hashFunc(os);
	strHash = "0000000000" + hash.toString();
	console.log("Hash: " + strHash.substring(strHash.length - 10) + "  String: " + os)});


// enciphering

function code(item, psw)
{
	codeItem = {
		value: "",
		pres : ""
	};
	
	for( let i = 0; i < item.length; i++)
	{
		let x = item.charCodeAt(i) ^ psw.charCodeAt(i % psw.length);
		codeItem.value += String.fromCharCode(x);
		if (31 < x && x < 128) codeItem.pres += String.fromCharCode(x)
			else codeItem.pres += "\\0x" + x.toString(16) + "\\";
		
				
			
	}
	return codeItem;
}

console.log("\nencryption and decryption \n")

psw = "ezra";
arr.forEach(os => 
{
	let coded = code(os, psw); 
	console.log("String:  \"" + os + "\"  Encoded: \"" + coded.pres + "\"  Decoded: \"" + code(coded.value, psw).value + "\"");
})






















