import { MISSMATCH, RESET, SHUFFLE, START } from "../constants/constants";

export function startGame(luckyNumber: string) {
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
