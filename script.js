//variables
let colors = ['yellow', 'blue', 'red', 'orange'];
let i=0;

//while loop
while (i < colors.length){
    console.log(colors[i]);
    i++;
}

//for loop
for (i=0; i < colors.length; i++){
    console.log(colors[i]);
}

//forEach
colors.forEach(function(kleur){console.log(kleur)});

/*
Hoeveel regels neemt mijn for loop en mijn while loop in beslag?
    while: 3; for: 2;
Hoeveel regels neemt mijn forEach method in beslag?
    Alleen 1
Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop? Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom?
    Minder mogelijkheid om fouten te maken, en makkelijker leesbaar code. Ik hou van array methods, ik vind ze 'natural' omdat ze slechts een functie roep zijn ipv schrijven van code stap voor stap
Kun je een array method gebruiken op een object? Het antwoord is nee.
Stel je hebt een object met 45 properties. Probeer eens uit te zoeken (gebruik Google) hoe je tóch die 45 properties kunt console.loggen met een loop: Looping through the properties of an object.
*/

const movie =
    {
    title: 'Puff the Magic Dragon',
    duration: 30,
    stars: ['Puff', 'Jackie', 'Living Sneezes']
    }

    for (anything in movie){
        console.log(anything, movie[anything]);
    }

//'in' controleert of the object iets bevat (typeOf property), en we roepen de property met [] call;