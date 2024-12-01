
// creating elements
let divContainer = document.createElement('div')
let divHead = document.createElement('div')
let divMsg = document.createElement('div')
let divGameBox = document.createElement('div')
let resetDiv = document.createElement('div')

let headTag = document.createElement('h1')
let resetBtn = document.createElement('button')
let msgText = document.createElement('h3')
resetBtn.textContent = 'Reset'
let btnCount = 9
let cells = []
for(let i=0;i<btnCount;i++){
    let cell=document.createElement('div')
    cell.style.width = '100px'; 
    cell.style.height = '100px'; 
    cell.style.border = '1px solid #333';
    cell.style.display = 'flex'; 
    cell.style.alignItems = 'center'; 
    cell.style.justifyContent = 'center'; 
    cell.style.fontSize = '36px'; 
    cell.style.cursor = 'pointer';
    divGameBox.appendChild(cell)
    cells.push(cell)
}

//style
let divConStyleProp = {
    display:"flex",
    // backgroundColor:"#899",
    'justify-content':'center',
    flexDirection:'column',
    alignItems:'center'

}
let divGameBoxStyle = {
    border:'2px solid black',
  
    width:'306px',
    display:'flex',
    flexWrap:'wrap',
    margin:'20px auto',

}

let resetBtnStyle ={
    'padding':'5px 20px',
    'innerText' : 'Reset',
    'border-radius': '10px'

}
for(let i in resetBtnStyle){
    resetBtn.style[i]=resetBtnStyle[i]
}

for(let i in divConStyleProp){
    divContainer.style[i] = divConStyleProp[i]
}
for(let i in divGameBoxStyle){
    divGameBox.style[i]=divGameBoxStyle[i]
}

divMsg.style.maxHeight = '40vmin'

// msgText.innerText = 'Player x turn'


document.body.style.backgroundColor="#8998"

//logics

let gameActive = true
let currentPlayer = 'x'
let tile = ["","","","","","","","",""]

let winningPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let textMessge = (win)=>{
    if(win === 'Draw'){
        msgText.innerText = "It's Draw"
        gameActive=false
    }else if(win){
        msgText.innerText = `${win} wins!`
        gameActive=false
    }else{
        msgText.innerText = `Player ${currentPlayer} Turn`
    }
}
let handleClick = (index)=>{
        if(!gameActive || tile[index] !== "") return

        tile[index] = currentPlayer
        cells[index].innerText = currentPlayer
      let winner =   isWinner()
      textMessge(winner)
      if(!winner){
       currentPlayer= currentPlayer==='x'?'o':'x'
      }
        
}
let isWinner = ()=>{
    for(let combo of winningPatterns){
        let [a,b,c] = combo
     if(tile[a]&& tile[a]===tile[b]&& tile[a]===tile[c]){
        return tile[a]
     }
    }
    return tile.includes("")? null :'Draw'
}

const restartGame = () =>{
   gameActive = true
 currentPlayer = 'x'
 tile = ["","","","","","","","",""]
 cells.forEach((e,i)=>(e.innerText=""))
 textMessge(null)

}



cells.forEach((e,i)=>{
    e.addEventListener('click',()=>handleClick(i))
})


resetBtn.addEventListener('click',restartGame)


















//


headTag.innerText='TIC-TAC-TOE'


//appen chlid to body
divHead.append(headTag)
divContainer.append(divHead)
divContainer.append(divMsg)
divMsg.appendChild(msgText)
divContainer.append(divGameBox)
resetDiv.appendChild(resetBtn)
divContainer.appendChild(resetDiv)





document.body.append(divContainer)
textMessge(null)