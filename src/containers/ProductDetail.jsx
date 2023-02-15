import React from 'react';
import ProductInfo from '../components/ProductInfo';
import '@styles/ProductDetail.scss';

import close from "@icons/icon_close.png";

const ProductDetail = ({handleToggleClose}) => {
	
	return (
		<aside className="ProductDetail">
			<div className="ProductDetail-close">
				<img src={close} alt="close" onClick={() => handleToggleClose()}/>
			</div>
			<ProductInfo />
		</aside>
	);
}

export default ProductDetail;
