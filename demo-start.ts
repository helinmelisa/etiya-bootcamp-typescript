//type-safe
import {User} from "./user";

console.log("Typescript dosyasından merhaba");

function sayHello(name: string) {
	console.log(`Hello ${name}`);
}
sayHello("Helin");

let sumFunction = (a1: number, a2: number): number => {
	return a1 + a2;
};

let sumOfNumbers: number = sumFunction(5, 6);
console.log(sumOfNumbers);

class Greeter {
	private name: string;
	constructor(name: string) {
		this.name = name;
	}
	sayHi() {
		console.log(`Hello ${this.name}`);
		this.sayWhatsUp();
	}

	private sayWhatsUp() {
		console.log("What's up?");
	}
}

let greeter = new Greeter("Helin");
greeter.sayHi();

// userService class'ı oluşturalım
// string[] dönüş tipi olarak getUserNames fonksiyonu oluşturalım
// string name alan bir ekleme methodu
// classin içinde bir alanda array ile tutalım. Ancak bu arraya dışardan erişim yasak!!

class UserService {
    private users: User[] = [];
    
    add(user: User){
        this.users.push(user);
    }

    getUsers():User[] {
        return this.users;  
    }
}

let userService = new UserService();
userService.add({age: 22, name: "Helin", surname:"Ergezen"});
console.log(userService.getUsers());
