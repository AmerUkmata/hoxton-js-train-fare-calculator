let priceofkm=0.21

let discount18=0.2

let discount65=0.4



let myname= prompt('what is your name')

let myage= prompt('what is your age')

let mydistance= prompt('how long is your distance')

let place= prompt('what place')

let turkey=0.35
let us=0.60
let uk=0.15
let kosovo=0.44

let country=('turkey', 'us', 'uk', 'kosovo')

if (myage<18){
    console.log (myname + ' ' + 'you will pay' + ' ' + (mydistance + priceofkm)*discount18)
}
else if(myage>65){
    console.log (myname + ' ' + 'you will pay' + ' ' + (mydistance + priceofkm)*discount65)
}
else if(place=country){
    console.log (myname + ' ' + 'you will pay' + ' ' + (mydistance + turkey))
}
else if(place=country){
    console.log (myname + ' ' + 'you will pay' + ' ' + (mydistance + us))
}
else if(place=country){
    console.log (myname + ' ' + 'you will pay' + ' ' + (mydistance + uk))
}
else if(place=country){
    console.log (myname + ' ' + 'you will pay' + ' ' + (mydistance + kosovo))
}