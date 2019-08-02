
class Person {
constructor (name = "Anonymous", age = "")
{
    this.name = name;
    this.age = age;
}

getDescription ()
{
    return `${this.name} is ${this.age} year(s) old.`;

}

}

class Traveler extends Person
{
    constructor(name, age, location = "")
    {
        super(name,age);
        this.location = location;
        
    }
    getGreeting ()
    {
       // if(this.location())
       //     {
                return `Hi. I am ${this.name}. I am visiting from ${this.location}.`;
       //     }
        
    }
}


const me = new Traveler ("Carlos Amorim", 41, "Barcelos");

console.log(me.getGreeting());
