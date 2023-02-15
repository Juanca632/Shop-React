import React, {useState, useContext, Component} from 'react';
import useGetProducts from '@hooks/useGetProducts';
import ProductItem from '@components/ProductItem';
import ProductDetail from './ProductDetail';
import '@styles/ProductList.scss';
import AppContext from '../context/AppContext';


const API = "http://api.escuelajs.co/api/v1/products";

const ProductList = () => {

	const products = useGetProducts(API);

	const [toggle, setToggle] = useState(false);


	const handleToggleOpen = (id) => {
		setToggle(true);
	}
	const handleToggleClose = () => {
		setToggle(false);
	}

	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(product => (
					<ProductItem product={product} key={product.id} handleToggleOpen={(id) => handleToggleOpen(id)} />
				))}
			</div>
			{toggle && <ProductDetail handleToggleClose={() => handleToggleClose()}/>}
		</section>
	);
}

export default ProductList;
