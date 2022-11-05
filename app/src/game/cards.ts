import * as t from 'types'

const companies: t.CompanyCard[] = [
  {
    id: 'cf.card.company-uber',
    type: 'company',
    title: 'Uber',
    subtitle: '',
    value: {
      num: 2,
      unit: 'B'
    }
  }
]

const people: t.PersonCard[] = [
  {
    id: 'cf.card.person',
    type: 'person',
    title: 'Uber',
    subtitle: ''
  }
]

const actions: t.ActionCard[] = [
  {
    id: 'cf.card.action',
    type: 'action',
    title: 'Uber',
    subtitle: ''
  }
]

const incomes: t.IncomeCard[] = [
  {
    id: 'cf.card.income',
    type: 'income',
    title: 'Uber',
    subtitle: ''
  }
]

const cards: t.Card[] = [...companies, ...people, ...actions, ...incomes]

export default cards
