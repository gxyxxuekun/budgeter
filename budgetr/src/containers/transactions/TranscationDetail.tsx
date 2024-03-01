import { Transaction } from "../../types"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function TransactionDetail() {
const params = useParams()
const [transaction,setTransaction] = useState<Transaction>()
const [hasError, setHasError] = useState<boolean>(false)
useEffect(() => {
  fetch(`http://localhost:3000/transaction/`)
  .then(res => res.json())
  .then(data => setTransaction(data.transcationDetails))
  .catch(() => setHasError(true))
  }, [params.transactionId])

  if(!transaction){
    return (
      <>loading...</>
    )
  }

  if(hasError){
    return (
      <>error loading transaction: {params.transactionId}</>
    )
  }
  return (
    <>
      <h1>{transaction.merchants}</h1>
      <h3>{transaction.price}</h3>
      <h3>{transaction.date}</h3>


    </>
  )
}

export default TransactionDetail
