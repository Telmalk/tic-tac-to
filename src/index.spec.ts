import { Board, Game, generateEmptyBoard, play, Position } from "./index";

test("A player can put pawn on cell", function() {
  const board: Board =  [
    {x: 0, y: 0, content: ""},
    {x: 0, y: 1, content: ""},
    {x: 0, y: 2, content: ""},
    {x: 1, y: 0, content: "X"},
    {x: 1, y: 1, content: ""},
    {x: 1, y: 2, content: ""},
    {x: 2, y: 0, content: ""},
    {x: 2, y: 1, content: ""},
    {x: 2, y: 2, content: ""},
  ]
  const expectedBoard: Board = [
    {x: 0, y: 0, content: "O"},
    {x: 0, y: 1, content: ""},
    {x: 0, y: 2, content: ""},
    {x: 1, y: 0, content: "X"},
    {x: 1, y: 1, content: ""},
    {x: 1, y: 2, content: ""},
    {x: 2, y: 0, content: ""},
    {x: 2, y: 1, content: ""},
    {x: 2, y: 2, content: ""},
  ]
  const position: Position = {
    x: 0,
    y: 0
  }
  expect(play(board, position, "O")).toEqual(expectedBoard)
})
/*
test("A player can't put pawn on first cell", function() {
  const board: Board =  [
    {x: 0, y: 0, content: "O"},
    {x: 0, y: 1, content: ""},
    {x: 0, y: 2, content: ""},
    {x: 1, y: 0, content: ""},
    {x: 1, y: 1, content: ""},
    {x: 1, y: 2, content: ""},
    {x: 2, y: 0, content: ""},
    {x: 2, y: 1, content: ""},
    {x: 2, y: 2, content: ""},
  ]
  expect(play(board)).toThrow("Can't put pawn here")
})
*/
/*
test("is game finished", function() {
  const expectedBoard: Board = [
    {x: 0, y: 0, content: "X"},
    {x: 0, y: 1, content: "O"},
    {x: 0, y: 2, content: "X"},
    {x: 1, y: 0, content: "O"},
    {x: 1, y: 1, content: "X"},
    {x: 1, y: 2, content: "O"},
    {x: 2, y: 0, content: "X"},
    {x: 2, y: 1, content: "O"},
    {x: 2, y: 2, content: "X"},
  ]

  const expectGame: Game = {
    status: "Finish",
    board: expectedBoard,
  }
  expect(finishedGame(game)).toEqual()
})*/