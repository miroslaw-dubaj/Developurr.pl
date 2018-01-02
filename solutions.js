//Zmienne - zadanie 1
function solZad1() {
  document.getElementById("sol-zad-1").innerHTML = "It Works!";
  console.log('It works!');
}

//Zmienne - zadanie 2
function solZad2() {
    let x = document.getElementById("l_1");
    let y = document.getElementById("l_2");
    let xliczba = Number(x.value);
    let yliczba = Number(y.value);
  let suma = x.value + y.value;
  document.getElementById("sol-zad-2").innerHTML = suma;
}

//Zmienne - zadanie 3
function solZad3() {
  let x = document.getElementById("l_3");
  let y = document.getElementById("l_4");
  let xliczba = Number(x.value);
  let yliczba = Number(y.value);
  let modulo = xliczba % yliczba;
  document.getElementById("sol-zad-3").innerHTML = modulo;
}

//Zmienne - zadanie 4
function solZad4() {
  let yearIn = document.getElementById("l_year");
  let year = Number(yearIn.value);
  let przest = "";
  let war1 = ((year % 4 === 0) && (year % 100 !== 0));
  let war2 = ((year % 400) === 0);
  if ( war1 || war2 ) {
    przest = "Rok przestępny";
  } else  {
    przest = "Rok nieprzestępny";
  }
document.getElementById("sol-zad-4").innerHTML = przest;
}

//Zmienne - zadanie 5
function solZad5() {
  let num = document.getElementById("l_5");
  let number = Number(num.value);
  let last = number % 10;
  let first = (number - last) / 10;
  document.getElementById("sol-zad-5").innerHTML = ("Pierwsza cyfra to " + first + " a druga to " + last + ".");
}

//Zmienne - zadanie 6
function solZad6() {
  let msFromForm = document.getElementById("l_6");
  let ms = Number(msFromForm.value);
  let H;
  let M;
  let S;
  H = Math.floor(ms / 3600000);
  M = (ms - (H * 3600000));
  M = Math.floor(M / 60000);
  S = (ms - ((H *3600000) + (M * 60000)));
  S = Math.floor(S / 1000);

document.getElementById("sol-zad-6").innerHTML = ("Zostało " + H + " godzin, " + M + " minut i " + S + " sekund." );
}

//Zmienne - zadanie 7
function solZad7() {
  let x = document.getElementById('l_7');
  let y = document.getElementById('l_8');
 document.getElementById("sol-zad-6").innerHTML = ("Dla X podano: " + x + " a dla Y: " + y)
}
