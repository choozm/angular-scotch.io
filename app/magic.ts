const message = 'hello';

function saysomething(message: string = 'whatsup') {
    console.log(message);
}

saysomething('ddd');

class Greeter {
    saySomething(message: string = 'whatsup') {
        return message + ' thanks';
    }
}

var greeter = new Greeter();
greeter.saySomething('hello');
