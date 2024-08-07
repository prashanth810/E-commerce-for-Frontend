import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbarheader from '../Nav/Navbarheader';

function Cart({ state, dispatch }) {
    const { cart } = state;
    const [total, setTotal] = useState(0);
    const [show, setShow] = useState(false);

    const changequantity = (id, quantity) => {
        dispatch({
            type: "CHANGE_CART_QUANTITY",
            payload: {
                id, quantity,
            }
        });
    }

    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.price) * curr.quantity, 0))
    }, [cart]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div style={{ fontFamily: 'monospace' }}>
            {/* <Navbarheader handleShow={handleShow} /> */}
            <Button variant="primary" onClick={handleShow} style={{ width: '100%' }}>
                Cart
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement="end" style={{
                backgroundColor: "rgb(231 231 231)",
            }}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title> <h2>Cart</h2></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '10px',
                    }}>

                        <p>SubTotal : ${Math.round(total)}</p>

                        <div>
                            {cart.length > 0 ? (
                                cart.map((val, i) => {
                                    return (
                                        <div key={i} style={{
                                            display: 'flex',
                                            padding: '10px',
                                            border: '1px solid gray',
                                            margin: '5px',
                                            justifyContent: 'space-between',
                                        }}>

                                            <div style={{ display: 'flex', gap: '10px' }}>

                                                <img src={val.thumbnail} style={{ width: '70%', objectFit: 'cover' }} alt={val.title} />

                                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                                                    <p>{val.title}</p>
                                                    <p>Price : ${val.price}</p>
                                                </div>

                                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                    <button onClick={() => changequantity(val.id, val.quantity - 1)}> - </button>
                                                    <span>{val.quantity}</span>
                                                    <button onClick={() => changequantity(val.id, val.quantity + 1)}> + </button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            ) : (
                                <div>

                                    <img src='https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-5521508-4610092.png?f=webp' width={'100%'} />
                                    <h4 style={{ textAlign: 'center', padding: '10px' }}> Cart Is Empty  </h4>
                                </div>
                            )}
                        </div>
                    </div>


                </Offcanvas.Body>
            </Offcanvas >
        </div>
    );
}

export default Cart;
