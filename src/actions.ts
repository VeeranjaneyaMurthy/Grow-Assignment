import { MISSMATCH, RESET, SHUFFLE, START } from "./constants";

export function startGame(luckyNumber) {
  return {
    type: START,
    payload: {
      luckyNumber,
    },
  };
}
export function missMatch() {
  return {
    type: MISSMATCH,
  };
}
export function shuffleTiles() {
  return {
    type: SHUFFLE ,
  };
}
export function resetGame() {
  return {
    type: RESET,
  };
}
