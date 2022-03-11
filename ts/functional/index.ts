let a = 3;

class School {
    name: string;
}

let list = [];
for (let i = 0; i < 20; i++) {
    list.push(new School());
}


for (let i = a; i < list.length - 3; i++) {
    const item = list[i];
    // body
    console.log(item);
}
