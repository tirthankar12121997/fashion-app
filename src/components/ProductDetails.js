import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import {
    Col,
    Row,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Input,
    Button,
    Toast,
    ToastHeader,
    ToastBody
} from 'reactstrap';

function ProductImageCarousel({ images }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = images.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img style={{ width: '100%' }} src={item.src} alt={item.altText} />
                {/* <CarouselCaption captionText={item.caption} captionHeader={item.caption} /> */}
            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            style={{ width: '100%' }}
        >
            <CarouselIndicators items={images} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
}

function ProductDetails({ productInfo }) {
    const itemsInCart = useSelector(state => state.cart.items);
    const itemInCart = itemsInCart.find(item => item['id'] === productInfo['id'])
    const dispatch = useDispatch();
    const history = useHistory();

    const [color, setColor] = React.useState('');
    const [size, setSize] = React.useState('');
    const [showToast, setShowToast] = React.useState(false);

    function addToCart(id, name, color, size, image, price) {
        console.log(`${id}-${name}-${color}-${size}-${image}-${price}`)
        dispatch({ type: 'CART_ADD_TO_BAG', id, name, color, size, image, price })
    }

    function handleColorChange(e) {
        const currentValue = e.target.value;
        setColor(currentValue)
    }

    function handleSizeChange(e) {
        const currentValue = e.target.value;
        setSize(currentValue)
    }

    function handleAddToCartClick(e) {
        if (color !== "" && size !== "") {
            setShowToast(false);
            addToCart(productInfo['id'], productInfo['name'], color, size, productInfo['image'], productInfo['price']);
        } else {
            setShowToast(true);
            setTimeout(() => { setShowToast(false) }, 2000);
        }
    }

    return (
        <Row style={{ paddingLeft: 15 }}>
            <Col sm={12} md={6}>
                <div style={{ paddingRight: 20 }}>
                    <ProductImageCarousel images={productInfo['images']} />
                </div>
            </Col>
            <Col sm={12} md={6}>
                <div>
                    <h3>{productInfo['name']}</h3>
                    <br />
                    <h3>₹{productInfo['price']}</h3>
                    <h5 style={{ color: 'grey' }}>INCLUSIVE OF ALL TAXES</h5>
                    <br />
                    <div>
                        <h5 style={{ color: 'grey' }}>Select Color</h5>
                        <Input onChange={handleColorChange} value={color} placeholder="Color" type="select" name="select" id="exampleSelect">
                            <option value="" selected disabled>Please select Color</option>
                            {productInfo['available_colors'].map(color => {
                                return (<option key={color}>{color}</option>)
                            })}
                        </Input>
                    </div>
                    <br />
                    <div>
                        <h5 style={{ color: 'grey' }}>Select Size</h5>
                        <Input onChange={handleSizeChange} value={size} placeholder="Size" type="select" name="select" id="exampleSelect">
                            <option value="" selected disabled>Please select Size</option>
                            {productInfo['available_sizes'].map(size => {
                                return (<option key={size}>{size}</option>)
                            })}
                        </Input>
                    </div>
                    <br />
                    <div>
                        {itemInCart ? (
                            <Button onClick={() => history.push('/ui/cart')} color="success">Go To Bag</Button>
                        ) : (
                            <Button onClick={handleAddToCartClick} color="primary">Add to Bag</Button>
                        )}
                    </div>
                    <br/>
                    {showToast ? (
                        <Toast>
                            <ToastHeader icon="warning">
                                Oops!
                        </ToastHeader>
                            <ToastBody>
                                Please Select Color and Size
                        </ToastBody>
                        </Toast>
                    ) : <></>}
                </div>
            </Col>
        </Row>
    );
}

export default ProductDetails;