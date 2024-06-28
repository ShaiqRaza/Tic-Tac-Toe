// all main variables Declaration
let body = document.querySelector('body')
let content = document.querySelector('#content-box')
let boxes = document.querySelectorAll('.inner-box')
let reset = document.querySelector('#reset')
let replay = document.querySelector('#replay')
let winningHeading = document.querySelector( '#winningHeading')
let currPlayer = 'o';
let winner = 0
let winningArray = 
[
    [0,1,2],
    [2,5,8],
    [0,4,8],
    [0,3,6],
    [6,7,8],
    [6,4,2],
    [3,4,5],
    [1,4,7]    
]
let count = 0; // count for how many boxes are pressed

//functions

let disableAll = () =>
    {
        boxes.forEach( (box) => 
        {
            box.disabled = true;
        })
    }
let enableAll = () =>
    {
        boxes.forEach( (box) => 
            {
                box.disabled = false;
            })
    }

let showWinner = () =>
{
    winningHeading.innerText = ` Winner is ${winner}`
    winningHeading.classList.remove('hide')
    replay.classList.remove('hide')
}

let checkWinner = () =>
{
    winningArray.forEach( (condition)=>
    {
        let val1 = boxes[ condition[0] ].innerText
        let val2 = boxes[ condition[1] ].innerText
        let val3 = boxes[ condition[2] ].innerText

        if ( val1!='' && val2!='' && val3!='')
            if ( val1 === val2 && val2 === val3)
                if( val1 == 'X')
                {
                    disableAll()
                    winner = 'x'
                }
                else
                {
                    disableAll()
                    winner = 'o'
                }
    })
}

// main program
boxes.forEach( (box) =>
    {
        box.addEventListener( 'click', ()=>
        {
            if( currPlayer === 'o')
            {
                box.innerText = 'O'
                box.style.color = '#226F54'
                currPlayer = 'x'
            }
            else
            {
                box.innerText = 'X'
                box.style.color = '#DA2C38'
                currPlayer = 'o'
            }
            box.disabled = true;
            count++;
            checkWinner();

            if(winner)
                    showWinner()
     
            if ( count === 9 && winner === 0)
                {
                    winningHeading.innerText = 'Draw!';
                    winningHeading.classList.remove('hide')
                    replay.classList.remove('hide')
                }
        })
    })

reset.addEventListener( 'click', () => { location.reload()})
replay.addEventListener ( 'click', ()=>
{
    location.reload()
})
