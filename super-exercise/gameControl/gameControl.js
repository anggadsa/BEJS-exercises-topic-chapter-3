function gameControl(board, gameControl){
    let l = board.length
    for(let i=0; i <= l-1; i++){

        for(let j=0; j <= board[i].length-1; j++){

            if(board[i][j] === "*"){
                // return `${i},${j}` //check position
                let path = [i, j] //for container path of position "*"
                
                for(let k=0; k <= gameControl.length-1; k++){

                    switch (gameControl[k]){
                        case '↑':
                            board[path[0]][path[1]] = ''
                            board[path[0]-1][path[1]] = '*'
                            path[0]--
                            break
                        case '←':
                            board[path[0]][path[1]] = ''
                            board[path[0]][path[1]-1] = '*'
                            path[1]--
                            break
                        case '→':
                            board[path[0]][path[1]] = ''
                            board[path[0]][path[1]+1] = '*'
                            path[1]++
                            break
                        case '↓':
                            board[path[0]][path[1]] = ''
                            board[path[0]+1][path[1]] = '*'
                            path[0]++
                            break
                        default:
                            console.log(`Error`)
                    }
                    if(k === gameControl.length-1){
                        break
                    }

                }
            }
        }
    }
    return board
}


let board1 = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '*', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
  ]
console.log(gameControl(board1, ['↑', '←', '↑', '→']))
// output

// [
//   ['', '', '*', '', ''],
//   ['', '', '', '', ''],
//   ['', '', '', '', ''],
//   ['', '', '', '', ''],
//   ['', '', '', '', '']
// ]

let board2 = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '*', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
  ]
console.log(gameControl(board2, ['↓', '←', '↑', '→', '→', '↑', '→']))
//output

// [
//   ['', '', '', '', ''],
//   ['', '', '', '', '*'],
//   ['', '', '', '', ''],
//   ['', '', '', '', ''],
//   ['', '', '', '', '']
// ]