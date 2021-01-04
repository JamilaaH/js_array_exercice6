// exo 1
let monTab = ['pomme', 'fraise', 'melon', 'citron'];

monTab.shift(); //supp 1er élément

monTab.push("orange"); //ajout element fin

monTab.unshift("cerise"); //ajout element début
monTab.splice(1, 1, monTab[1].toUpperCase()); //2e element en maj

monTab.reverse();
console.log(monTab);

// exo 2 
let chiffres = [4, 5, 2, 1, 3];
chiffres.sort();

chiffres = chiffres.join(" - ");
console.log(chiffres);

chiffres = chiffres.split([" - "]);
console.log(chiffres);

// exo 3 
let tab = [1, 2, 3, 4, 5 , 6, 7, 8, 9, 10];
console.log(tab);
console.log(tab.length);

console.log(tab.indexOf(1));
console.log(tab.indexOf(2));
console.log(tab.indexOf(3));
console.log(tab.indexOf(4));
console.log(tab.indexOf(5));
console.log(tab.indexOf(6));
console.log(tab.indexOf(7));
console.log(tab.indexOf(8));
console.log(tab.indexOf(9));
console.log(tab.indexOf(10));


let valentin = ['objet 1', 'objet 2', 'objet 3', 'objet 4', 'objet 5'];
valentin.splice(valentin.indexOf(1));
console.log(valentin);
