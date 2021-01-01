import React from 'react';
import { Container, Breadcrumb, BreadcrumbItem, Jumbotron } from 'reactstrap';
import Products from './Products';

function Home() {
    const [products, setProducts] = React.useState([
        {
            id: 1,
            name: 'Peter England',
            description: 'SOmething about it!',
            price: 2000
        },
        {
            id: 2,
            name: 'Gucci',
            description: 'SOmething about it!',
            price: 5000
        }
    ]);

    return (
        <Jumbotron>
            <Container fluid>
                <Breadcrumb>
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem active>T-Shirts</BreadcrumbItem>
                </Breadcrumb>
                <Products products={products} />
            </Container>
        </Jumbotron>
    );
}

export default Home;