const EventEmitter =   require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', (num1,num2) => {
    console.log(num1 + num2);
});

eventEmitter.emit('tutorial',1,2);
// .on and .emit are both methods :)


class Person extends EventEmitter {
    constructor(name){
        super();
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

let pedro = new Person('Pedro'); // this instantiates in the class
let chris = new Person ('chris');

chris.on('name', ()=>{
    console.log(`my name is ${chris.name}`)
})
chris.emit('name')

pedro.on('name', ()=>{                          // this sets up the events listener
    console.log(`my name is ${pedro.name}`);
});

pedro.emit('name');
console.log(pedro );
                             //this listens to the event listner and emits it
// class EventEmitter{
//     constructor(){

//         on(){

//         }
//     }
// }

//creating custom event listener

// var header = document.querySelector('body');
// header.addEventListener('numberChanged', (e) => {
//     header.textContent = e.detail.number;
//     header.style.color = e.detail.textColor;
// });

// function changeNumber(n, c) {
//     const event = new CustomEvent('numberChanged', {
//         detail:{
//             number: n,
//             textColor: c
//         }
//     });
//     header.dispatchEvent(event);
// }