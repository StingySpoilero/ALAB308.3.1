// Feeling Loopy

// ID,Name,Occupation,Age
//42,Bruce,Knight,41
//57,Bob,Fry Cook,19
//63,Blaine,Quiz Master,58
//98,Bill,Doctor’s Assistant,26

//Loop through the characters of a given CSV string.
//Store each “cell” of data in a variable.
//When you encounter a comma, move to the next cell.
//When you encounter the “\r\n” sequence, move to the next “row.”
//Log each row of data.
//You do not need to format the data, the following works well.
//console.log(cell1, cell2, cell3, cell4);

//What do we know?
// There is only four cells per row
// Only "\n" escape character
//commas separate the cells
//"\n" indicates a new line
//has to be done in a loop
// oir input is a string, strings are iterable
// the last row has no `\n`

//Variables 
let string =`ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`

let cell = ``;

for (let i in string){
    switch(string[i]){
        case ",":
             row = row + cell + ' ';
                cell = ``;
            break;
            case "\n":
                row += cell +``;
                cell = ``;
                console.log(row)
                row = ``;
                break;
                default: 
                cell += string[i];
                break;
    }
    if(i == string.length - 1){
        row += cell 
        console.log(row)
    }
}