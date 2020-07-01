export interface IMessage {
  type: string,
  payload?: any,
  status: 'success' | 'error'
}

export interface ITransaction {
  direction: 'incoming' | 'outgoing',
  txhash: string,
  status: 'Pending' | 'Confirmed',
  sender: string,
  recipient: string,
  amount: any,
  currency: string,
  symbol: string,
  decimals: number,
  timestamp: number
}

export interface ISubReddit {
  token: string,
  name: string,
  symbol: string,
  decimals: number
}

export interface ISession {
  account: string,
  balance: string,
  subReddit: ISubReddit
}