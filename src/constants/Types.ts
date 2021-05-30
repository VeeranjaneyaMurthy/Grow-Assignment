
export type NUMBER_LIST = {
    numberList: Array<LIST_ITEM>

}
export type GAME_STATE = {
    luckyNumber : string,
    numberList: NUMBER_LIST  ,
    numberOfChanes: string,
    isGameStarted: boolean,
    numberOfChances : number
  }

export type LIST_ITEM = {
     key: string
}

export type ACTION ={
    type: string,
    payload: object
}