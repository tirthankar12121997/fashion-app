import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Link, useHistory } from 'react-router-dom'; 

function ProductCard({ product }) {
    const history = useHistory();

    return (
        <Card>
            <CardImg top height="200px" width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6pWZxJM5UbxKKH6Q0XacKt77bhjgfqt1kBtcEp8F97c9TjfwXe7gYQ0-xnVQlr8Hu3jh7WX5n&usqp=CAc" alt="Card image cap" />
            <CardBody>
                <CardTitle tag="h5">{product.name}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{product.description}</CardSubtitle>
                <CardText>₹{product.price}</CardText>
                <Button onClick={() => history.push(`/ui/product/${product.id}`)} color="primary">View More</Button>
            </CardBody>
        </Card>
    );
}

export default ProductCard;