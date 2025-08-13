import { useEffect, useState } from 'react'
import './App.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header'
import RouterConfig from './config/RouterConfig'
import Loading from './components/Loading'
import Drawer from '@mui/material/Drawer';
import { useSelector } from 'react-redux';
import { calculateBasket, setDrawer, removeFromBasket } from './redux/slices/basketSlice'
import { useDispatch } from 'react-redux';

function App() {



  const [count, setCount] = useState(0)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateBasket());
  }, [])

  const { products, drawer, totalAmount, } = useSelector((store) => store.basket);

  return (
    <div>
      <PageContainer>
        <Header />
        <RouterConfig />
        <Loading />
        <Drawer anchor='right' open={drawer} onClose={() => dispatch(setDrawer())} >
          {
            products && products.map((product) => {
              return (
                <div key={product.id} className='flex-row' style={{ padding: '20px' }}>
                  <img className='img-app' src={product.image} />
                  <p className='product-app-title'>{product.title}({product.count})</p>
                  <p className='product-app-price'>{product.price}$</p>
                  <button
                    className='product-app-sil'
                    onClick={() => {
                      dispatch(removeFromBasket(product.id));
                      dispatch(calculateBasket());
                    }}
                  >Sil</button>
                </div>
              )
            })
          }
          <div>
            <p className='totalAmount'>Toplam Tutar : {totalAmount}$</p>
          </div>
        </Drawer>
      </PageContainer>
    </div>
  )
}

export default App
