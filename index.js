import inquirer from "inquirer";
class Person {
    personality;
    constructor() {
        this.personality = "";
    }
    knowPersonality(anwser) {
        this.personality = anwser === 1 ? 'Extrovert' : 'Introvert';
    }
    getPersonality() {
        return this.personality;
    }
}
class Student extends Person {
    _name;
    constructor(name) {
        super();
        this._name = name;
    }
    getName() {
        return this._name;
    }
    changeName(name) {
        this._name = name;
    }
}
class Program {
    async start() {
        const res = await inquirer.prompt([{
                type: 'list',
                name: 'answer',
                message: "Type 1 If you like to talk to others and type 2 if you want to keep it to yourself.",
                choices: [1, 2]
            },
            {
                type: 'input',
                name: "name",
                message: "What's your name?"
            }]);
        const newStudent = new Student(res.name);
        newStudent.knowPersonality(res.answer);
        console.log(`${newStudent.getName()}, You are ${newStudent.getPersonality()}`);
    }
}
const program = new Program();
program.start();
