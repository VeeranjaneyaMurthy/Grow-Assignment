import { MISSMATCH, RESET, SHUFFLE, START } from "../constants/constants"; 
import { ACTION, GAME_STATE, NUMBER_LIST } from "../constants/Types";

const initialState = {
  luckyNumber: "",
  numberList: [
    {
      key: `1`,
    },
    {
      key: `2`,
    },
    {
      key: `3`,
    },
    {
      key: `4`,
    },
    {
      key: `5`,
    },
    {
      key: `6`,
    },
    {
      key: `7`,
    },
    {
      key: `8`,
    },
    {
      key: `9`,
    },
  ],
  numberOfChances: 3,
  isGameStarted: false,
};

const shuffleArray = (array: []) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const suffleTiles = (prevList: NUMBER_LIST) => {
  const numberList = prevList.map((item)=>item.key)
  shuffleArray(numberList)
  let resultList = []
  resultList = numberList.map(num => { return { key: num} } )
  return resultList
}

export const reducer = (state = initialState, action: ACTION ) => {
  const { type, payload } = action;
  switch (type) {
    case START: {
      return {
        ...state,
        isGameStarted: true,
        luckyNumber: payload.luckyNumber,
      };
    }
    case SHUFFLE : {
      const udpatedNumberList = suffleTiles(state.numberList)
      return {
        ...state,
        numberList: udpatedNumberList
      };
    }
    case RESET: {
      return {
        ...state,
        isGameStarted: false,
        numberOfChances: 3,
        luckyNumber: "",
      };
    }
    case MISSMATCH: {
      return {
        ...state,
        numberOfChances: state.numberOfChances - 1,
      };
    }
    default:
      return state;
  }
};
