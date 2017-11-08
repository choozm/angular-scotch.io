var message = 'hello';
function saysomething(message) {
    if (message === void 0) { message = 'whatsup'; }
    console.log(message);
}
saysomething('ddd');
var Greeter = /** @class */ (function () {
    function Greeter() {
    }
    Greeter.prototype.saySomething = function (message) {
        if (message === void 0) { message = 'whatsup'; }
        return message + ' thanks';
    };
    return Greeter;
}());
var greeter = new Greeter();
greeter.saySomething('hello');
//# sourceMappingURL=magic.js.map