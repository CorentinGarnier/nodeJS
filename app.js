const randomnumber = Math.floor(Math.random() * 1000);

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var count = 0;

function moreorless(){
    rl.question('Choisissez un nombre entre 0 et 999 ? ', (answer) => {
        answer = parseInt(answer);
        if (answer > randomnumber) {
            console.log(`Plus petit que ${answer}`);
        } else if (answer < randomnumber) {
            console.log(`Plus grand que ${answer}`);
        } else {
            console.log(`\nFélicitation, le chiffre était ${answer} !`);
            console.log(`Tu as réussi en ${count+1} coups !`);
            process.exit();
        }
        count ++;
        moreorless();
    });
};

moreorless();