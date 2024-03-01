// import { useEffect, useState } from 'react'


// function CreateTransaction() {
//   const [date, setDate] = useState("")
//   const [merchants, setMerchants] = useState("")
//   const [price, setPrice] = useState(0)
//   const [merchant, setMerchant] = useState([])
//   const [selectedMerchant, setSelectedMerchant] = useState("")

//   useEffect(() => {
//     fetch("http://localhost:3000/merchants")
//       .then(res => res.json())
//       .then(data => setMerchant(data))
//       .catch(err => console.log(err))
//   }, [])

//   async function handleCreateTransaction() {

//     try {
//       const response = await fetch("http://localhost:3000/transactions", {
//         method: "POST",
//         body: JSON.stringify({ date, merchants, price }),
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       })
//       const data = await response.json()
//       console.log(data)
//     } catch (err) {
//       alert(err)
//     }
//   }

//   return (
//     <>
//       <div style={{ display: 'flex', flexDirection: 'column' }}>
//         <h1>Create a transaction!</h1>
//         <input
//           onChange={(e) => setDate(e.target.value)}
//           placeholder="Title"
//           type="text"
//         />
//         <input
//           onChange={(e) => setMerchants(e.target.value)}
//           placeholder="description"
//           type="text"
//         />
//         <input
//           onChange={(e) => setPrice(Number(e.target.value))}
//           placeholder="rating"
//           type="number"
//         />
//         {/* <select name="" id="" onChange={
//           (e) => setSelectedSeller(e.target.value)
//         }>
//           {seller.map((seller: Seller) =>
//             <option
//               key={String(seller._id)}
//               value={String(seller._id)}
//             >
//               {seller.name}
//             </option>
//           )}
//         </select> */}
//         <button onClick={handleCreateTransaction}>Create!</button>
//       </div>
//     </>
//   )
//   return (
//     <>
//       <h1>Create Transaction Page!</h1>
//     </>
//   )
// }

// export default CreateTransaction


import { useState } from 'react';

function CreateTransaction() {
  const [date, setDate] = useState('');
  const [merchants, setMerchants] = useState('');
  const [price, setPrice] = useState(0);

  async function handleCreateTransaction() {
    try {
      const response = await fetch('http://localhost:3000/transactions', {
        method: 'POST',
        body: JSON.stringify({ date, merchants, price }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      alert(err);
    }
  }

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h1>Create a transaction!</h1>
        <label>Date:</label>
        <input
          onChange={(e) => setDate(e.target.value)}
          placeholder="Date"
          type="date"
          value={date}
        />
        <label>Merchant:</label>
        <input
          onChange={(e) => setMerchants(e.target.value)}
          placeholder="Merchants"
          type="text"
          value={merchants}
        />
        <label>Price:</label>
        <input
          onChange={(e) => setPrice(Number(e.target.value))}
          placeholder="Price"
          type="number"
          value={price}
        />
        <button onClick={handleCreateTransaction}>Create!</button>
      </div>
    </>
  );
}

export default CreateTransaction;
