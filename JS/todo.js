let colorTurn = document.querySelector("#colorTurn");
//var Users = document.querySelector("#apps")

/*var appI = new Vue({
    el: "#app",
    data: {
        title: 'Connect 4',
        Player1: "Lucky",
        Player2: "Victor",
    },
  
    methods: {
      change1: function (event) {
        console.log("change1")
        this.Player1 = "Bob"
        setData(DB_PATH + "appI", appI.data.Player1)
      },
  
      change2: function (event) {
        this.Player2 = event.target.value
        setData(DB_PATH + "appI", appI.data)
      },
    }
  
    });
*/

/*function displayName(){
    //let div = document.getElementById('mydiv');
    let h = '';
        h += '<p>' + "Change Red Name to" + '</p>' +
            '<input type="text" v-on:input="change1">' +
            '<p>' + "Change Orange Name to" + '</p>' +
            '<input type="text" v-on:input="change2">' + '</input>';
        

    playerDisplay.innerText = "Red is " + "Player1" + " and Orange is " + "Player2";
        //h += '<span = "lisChild">' 
          //          + '<img src="images/Orange.png">' + " " 
            //        + '</span>';
}*/


// TEST FIXME

function save(){
    setData(DB_PATH + DEFAULT_TODO, boardPiece);
    setData(DB_PATH + "myLine", myLine);
    setData(DB_PATH + "Users", Users)
}

var flag = false;

function load() {
    if (!flag) {
        flag = true;
        watchData(DB_PATH + "myLine", data => {
            myLine = data;
        });
        watchData(DB_PATH + "Users", data => {
            Users = data;
        });
        watchData(DB_PATH + DEFAULT_TODO, data => {
            //if (data != boardPiece){
            boardPiece = data;
            //}
            

            let redTurn = 0;
            let orangeTurn = 0;
            for(let i = 0; i < 6; i++) {
                for(let j = 0; j < 7; j++) {
                    if(boardPiece[i][j] == "Red"){
                        //myLine[j]--;
                        redTurn++
                    }

                    else if(boardPiece[i][j] == "Orange"){
                        //myLine[j]--;
                        orangeTurn++
                    }
                }
            }

            if(redTurn <= orangeTurn){
                colorTurn.innerText = "{{Player1}} Turn";
                changeColor = 1;
            }
            else if(redTurn >= orangeTurn){
                colorTurn.innerText = "{{Player2}} Turn";
                changeColor = 2;
            }

            //counterDoneList = counterCheck;
            //counterDone.innerText = counterDoneList;
            displayList();
        });
    }

}


let board = [ [1, 2, 3, 4, 5, 6, 7], [8, 9, 10, 11, 12, 13, 14], 
[15, 16, 17, 18, 19, 20, 21], [22, 23, 24, 25, 26, 27, 28], [29, 30, 31, 32, 33, 34, 35], [26, 37, 38, 39, 40, 41, 42] ]
let boardPiece = [     ["Blank", "Blank", "Blank", "Blank", "Blank", "Blank", "Blank"], 
    ["Blank", "Blank", "Blank", "Blank", "Blank", "Blank", "Blank"],
    ["Blank", "Blank", "Blank", "Blank", "Blank", "Blank", "Blank"],
    ["Blank", "Blank", "Blank", "Blank", "Blank", "Blank", "Blank"],
    ["Blank", "Blank", "Blank", "Blank", "Blank", "Blank", "Blank"],
    ["Blank", "Blank", "Blank", "Blank", "Blank", "Blank", "Blank"]
];

//let myLine = [[5], [5], [5], [5], [5], [5], [5]];


/*let boardPiece = [     [], 
    [],
    [],
    [],
    [],
    []
];*/

let vicCheckRow = 0;
let vicCheckCol = 0;
let vicCheckHei = 0;
let redVic1 = 0;
let oranVic1 = 0;
let redVic2 = 0;
let oranVic2 = 0;
let upDate = 0;
let win = 0;

function checkRow(){
    if(vicCheckCol < 7){
        upDate = vicCheckCol + 1;
        if (boardPiece[vicCheckRow][vicCheckCol] == boardPiece[vicCheckRow][upDate]){
            if(boardPiece[vicCheckRow][vicCheckCol] == "Red"){
                redVic1++;
                if(redVic1 == 3){
                    win = 1;
                }
            }
            else if(boardPiece[vicCheckRow][vicCheckCol] == "Orange"){
                oranVic1++;
                if(oranVic1 == 3){
                    win = 2;
                }
            }
        }

        else{
            upDate = 0;
            redVic1 = 0;
            oranVic1 = 0;
            return;
        }
    }

    else{
        return;
    }
}

function checkHeight(let){
    for(let j = 0; j < 5; j++){
        upDate = j + 1;
        if(boardPiece[j][let] == boardPiece[upDate][let]){
            if(boardPiece[j][let] == "Red"){
                redVic2++;
                if(redVic2 == 3){
                    win = 1;
                }
            }
            else if(boardPiece[j][let] == "Orange"){
                oranVic2++;
                if(oranVic2 == 3){
                    win = 2;
                }
            }
        }
        else{
            upDate = 0;
            redVic2 = 0;
            oranVic2 = 0;
        }
    }

    /*if(upDate < 6){
        if (boardPiece[vicCheckHei][let] == boardPiece[upDate][let]){
            if(boardPiece[vicCheckHei][let] == "Red"){
                redVic2++;
                if(redVic2 == 3){
                    win = 1;
                }
            }
            else if(boardPiece[vicCheckHei][let] == "Orange"){
                oranVic2++;
                if(oranVic2 == 3){
                    win = 2;
                }
            }
        }

        else{
            upDate = 0;
            redVic2 = 0;
            oranVic2 = 0;
            return;
        }
    }*/

    /*else{
        return;
    }*/
}

function displayList(){
    let div = document.getElementById('mydiv');
    let h = '';
    let countLoop = 1;
    console.log(boardPiece);

    for(let i = -1; i < 6; i++) {
        if(i == -1){
            h += '<div = "buttonDiv">';
        }
        else{
            h += '<div = "lisDiv">';
            vicCheckRow = i;
        }

        for(let j = 0; j < 7; j++) {
            if(i == -1){
                h += '<button onclick="changeItem(' + j + ')">X</button>';
            }

            else{
                console.log(boardPiece[i][j]);
                vicCheckCol = j;
                if(boardPiece[i][j] == "Red"){
                //Make as a flag
                    h += '<span = "lisChild">' 
                    + '<img src="images/Red.png">' + " " 
                    + '</span>';
                    checkRow();
                }

                else if(boardPiece[i][j] == "Orange"){
                    //Make as a flag
                    h += '<span = "lisChild">' 
                    + '<img src="images/Orange.png">' + " " 
                    + '</span>';
                    checkRow();
                }

                else{
                    h += '<span = "lisChild">' 
                    +  '<img src="images/Black.png" >' + " "
                    + '</span>';
                }
                countLoop++;
            }
        }
        h += '</div>\r\n';
            
    }
    countLoop = 0;
    div.innerHTML =  h;
    vicCheckCol = 0;
    vicCheckRow = 0;
    for(let i = 0; i < 7; i++){
        checkHeight(i);
    }
    console.log("Here is the html: ", h)
}

let myLine = [[5], [5], [5], [5], [5], [5], [5]];
let changeColor = 1;

function changeItem(let){
    if(myLine[let] >= 0 && changeColor == 1){
        let numb = myLine[let];
        boardPiece[numb][let] = "Red"; 
        changeColor = 2;
        colorTurn.innerText = "{{Player2}} Turn";
        boardPiece.push();
        myLine[let]--;
    }

    else if(myLine[let] >= 0 && changeColor == 2){
        let numb = myLine[let];
        boardPiece[numb][let] = "Orange"; 
        changeColor = 1;
        colorTurn.innerText = "{{Player1}} Turn";
        boardPiece.push();
        myLine[let]--;
    }
    save();
    displayList();
    //boardPiece.reduce;
    if(win == 1){
        gameOverAlertRed();
    }
    else if(win == 2){
        gameOverAlertOrange();
    }

}

function gameOverAlertRed(){
    setTimeout(() => {
        if(confirm("{{Player1}} Wins!!!")){
            reStart();
        }
        else{
        }
    }, 1000);

}

function gameOverAlertOrange(){
    setTimeout(() => {
        if(confirm("{{Player2}} Wins!!!")){
            reStart();
        }
        else{
        }
    }, 1000);
}

function reStart(){
    boardPiece = [     ["Blank", "Blank", "Blank", "Blank", "Blank", "Blank", "Blank"], 
    ["Blank", "Blank", "Blank", "Blank", "Blank", "Blank", "Blank"],
    ["Blank", "Blank", "Blank", "Blank", "Blank", "Blank", "Blank"],
    ["Blank", "Blank", "Blank", "Blank", "Blank", "Blank", "Blank"],
    ["Blank", "Blank", "Blank", "Blank", "Blank", "Blank", "Blank"],
    ["Blank", "Blank", "Blank", "Blank", "Blank", "Blank", "Blank"] ];
    myLine = [[5], [5], [5], [5], [5], [5], [5]];

    win = 0;
    changeColor = 1;
    colorTurn.innerText = "{{Player1}} Turn";
    save();
    displayList();

}


this.document.onload = load();
