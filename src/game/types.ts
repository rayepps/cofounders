//
//  ID
//

export type Model = 'card' | 'player' | 'location' | 'panel'
export type Id<TModel extends Model = Model> = `cf.${TModel}.${string}`

//
// CARDS
//

export type CardType = 'company' | 'person' | 'action' | 'income'

export type Card = {
  id: Id<'card'>
  type: CardType
  title: string
  subtitle: string | null
}

export type CompanyCard = Card & {
  type: 'company'
  value: {
    num: number
    unit: 'K' | 'M' | 'B' | 'T'
  }
}

export type PersonCard = Card & {
  type: 'person'
}

export type ActionCard = Card & {
  type: 'action'
}

export type IncomeCard = Card & {
  type: 'income'
}

//
//  BOARD
//

export type BoardLocation = {
  name: string
  cost: {
    num: number
    unit: 'K' | 'M' | 'B' | 'T'
  }
  style: null | BoardLocationStyle
}

export type BoardLocationStyle = {}

export type BoardPanelStyle = {}

export type BoardPanel = {
  id: Id<'panel'>
  name: string
  style: null | BoardPanelStyle
  locations: BoardLocation[]
}

export type Board = {
  panels: {
    /**
     * Player id
     */
    player: string
    order: number
    panel: BoardPanel
  }[]
}

//
//  PLAYER
//

export type Player = {
  id: Id<'player'>
}

//
//  GAME
//

export type Game = {
  board: Board
  players: Player[]
  state: GameState
}

export type GameState = {
  /**
   * Map of players and their current
   * position on the board.
   */
  positions: Record<
    Id<'player'>,
    {
      player: Id<'player'>
      location: Id<'location'>
    }
  >
  /**
   * Map of board locations and the
   * current cards on each location.
   */
  locations: Record<
    Id<'location'>,
    {
      location: Id<'location'>
      /**
       * A list of cards including the player
       * that owns the card
       */
      cards: {
        order: number
        card: Id<'card'>[]
        player: Id<'player'>
      }[]
    }
  >
  /**
   * Data about the current turn, the player
   * who's turn it is and what options they
   * have completed
   */
  turn: {
    player: Id<'player'>
    options: {
      move: boolean
      draw: boolean
    }
  }
}
