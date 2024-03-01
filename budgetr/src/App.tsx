
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import CreateSeller from './containers/sellers/CreateSeller'
import CreateTransaction from './containers/transactions/CreateTranscation.tsx'
import Login from './containers/auth/Login.tsx'
import Dashboards from './containers/dashboards/Dashboards.tsx'
import Signup from './containers/auth/Signup.tsx'
import Transactions from './containers/transactions/Transactions.tsx'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import NavBar from './components/NavBar.tsx'
// import { Dashboard } from '@mui/icons-material'
// import ProductDetail from './containers/products/ProductDetail'
const theme = createTheme({
  palette: {
    mode: "light", // Set mode to light for white background
    primary: {
      main: '#008000', // Set primary color to green for green font
    },
    background: {
      default: '#ffffff', // Set default background color to white
    },
  },
});


  <ThemeProvider theme={theme}>...</ThemeProvider>;

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/">
        <NavBar />
        <div className="page=container">
        <Routes>
          {/* <Route path="/new-product" element={<CreateProduct />} />
          <Route path="/new-seller" element={<CreateSeller />} /> */}
          <Route path="/dashboards" element={<Dashboards />} />
          <Route path="/transactions" element={<Transactions/>} />
          <Route path="/new-transaction" element={<CreateTransaction />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        </div>
      </BrowserRouter>
      </ThemeProvider>
          </>
  )
}

export default App
