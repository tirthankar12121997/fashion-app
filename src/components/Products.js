import React from 'react'
import ProductCard from './ProductCard';
import { Row, Col } from 'reactstrap';

function Products({ products }) {
    return (
        <Row style={{ paddingLeft: 18 }}>
            {products.map(product => {
                return (
                    <Col key={product.id} style={{ padding: 10 }} sm="12" md="6" lg="4" xl="3">
                        <div>
                            <ProductCard product={product} />
                        </div>
                    </Col>
                )
            })}
        </Row>
    )
}

export default Products;