type Token = "" | "X" | "O"

interface Cell {
  x: 0 | 1 | 2
  y: 0 | 1 | 2
  content: Token
}

export type Board = Cell[]

export type Game = {
  status: string
  board: Board
}

export type Position = {
  x: 0 | 1 | 2
  y: 0 | 1 | 2
}
export type PositionUseless = {
  x: 0 | 1 | 2
  y: 0 | 1 | 2
}

export function generateEmptyBoard(): Board {
  return [
    {x: 0, y: 0, content: ""},
    {x: 0, y: 1, content: ""},
    {x: 0, y: 2, content: ""},
    {x: 1, y: 0, content: ""},
    {x: 1, y: 1, content: ""},
    {x: 1, y: 2, content: ""},
    {x: 2, y: 0, content: ""},
    {x: 2, y: 1, content: ""},
    {x: 2, y: 2, content: ""},
  ]
}

/*
Allo ? Allo?
 */
/*
export function play(board: Board, {x, y}: Position, playerToken: Token ): Board {
  const newBoard = board.map((cell) => {
    if (cell.x === x && cell.y === y) {
      cell.content = playerToken
    }
    return cell
  })
  console.log(newBoard)
  return newBoard
}
