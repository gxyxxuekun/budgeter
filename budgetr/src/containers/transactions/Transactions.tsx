import Button from '@mui/material/Button'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Transaction} from '../../types'
import TransactionCard from '../../components/TransactionCard'
import styled from 'styled-components'

const ListComponent = styled('div')`
  margin: 0 auto;
  padding-top: 20px;
`

function Transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then(res => res.json())
      .then(data => setTransactions(data.transactions))
      .catch(err => console.log(err))
  }, [])

  console.log(transactions)

  return (
    <>
      <h1>Transaction Page!</h1>
      <NavLink to="/new-transaction">
        <Button color="secondary" variant="outlined">
          Create new transaction!
        </Button>
      </NavLink>
      {/* List of transactions! */}
      <ListComponent>

        {transactions.map((transaction) => (
          <TransactionCard
            merchants={transaction.merchants}
            price={transaction.price}
            date={String(transaction.date)}
            id={transaction._id}
          />
        ))}
      </ListComponent>
    </>
  )
}

export default Transactions
