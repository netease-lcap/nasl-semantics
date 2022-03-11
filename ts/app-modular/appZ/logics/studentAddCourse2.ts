class Student {
    sex: string;
    name: string;
}

Number();

class Integer extends Number {
}

class Float extends Number {
}


let a = new Integer(1);
let b = new Float(2.3);


class Teacher {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

function SELECT<T>(param1: keyof T) {
    return {
        FROM<T>(param2: new (name: string) => T): () => Array<T> {
            // SQLBuilder(param2.name)
            console.log(param2.name);
            return () => [new param2(param2.name)];
        }
    }
}

FROM<Teacher>(Teacher).SELECT<Teacher>('name');
// // .forEach((item) => item.name);
