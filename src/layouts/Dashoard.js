import React from 'react'
import ProductList from '../pages/ProductList';
import Categories from './Categories';
import Navi from "./Navi"
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import { Route, Routes } from 'react-router-dom';
import ProductDetail from '../pages/ProductDetail';
import CartDetail from '../pages/CartDetail';
import { ToastContainer } from 'react-toastify';
import ProductAdd from '../pages/ProductAdd';
export default function Dashoard() {
    return (
        <div>
            <ToastContainer position='bottom-right' />
            <Grid>
                <GridRow>

                    <GridColumn width={4}>
                        <Categories />
                    </GridColumn>

                    <GridColumn width={12}>
                        <Routes>
                            <Route exact path='/' element={<ProductList />} />
                            <Route exact path='/products' element={<ProductList />} />
                            <Route exact path='/products/:name' element ={<ProductDetail />}/>
                            <Route exact path='/cart' element ={<CartDetail />}/>
                            <Route exact path='/product/add' element ={<ProductAdd />}/>
                        </Routes>

                    </GridColumn>
                </GridRow>
            </Grid>


        </div>
    )
}
