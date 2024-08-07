import React from 'react'

const Products = ({ state, dispatch }) => {
    const { products, cart } = state;
    return (
        <>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-evenly',
                width: '100%',
            }}>
                {products.map((val, index) => (
                    <div key={index} style={{
                        padding: '20px',
                        border: '1px solid gray',
                        margin: '10px 0px'
                    }}>
                        <div>
                            <img src={val.thumbnail} width='100%' />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p>{val.title.slice(0, 15)}</p>
                            <h6>${val.price}</h6>
                        </div>

                        <div>
                            {
                                cart.some(va => va.id === val.id) ? (
                                    <button style={{
                                        padding: '6px',
                                        border: 'none',
                                        borderRadius: '10px',
                                        backgroundColor: 'red',
                                        color: 'white',
                                        width: '100%'
                                    }}
                                        onClick={() => dispatch({
                                            type: "REMOVE_FROM_CART",
                                            payload: val.id
                                        })}
                                    >
                                        Remove From cart
                                    </button>
                                ) : (
                                    <button style={{
                                        padding: '6px',
                                        border: 'none',
                                        borderRadius: '10px',
                                        backgroundColor: 'lightgreen',
                                        color: 'black',
                                        width: '100%',
                                        marginBottom: '10px',
                                    }}

                                        onClick={() => dispatch({
                                            type: "ADD_TO_CART",
                                            payload: {
                                                id: val.id,
                                                title: val.title,
                                                quantity: 1,
                                                price: val.price,
                                            }
                                        })}
                                    >
                                        Add To cart
                                    </button>
                                )
                            }


                        </div>
                    </div>
                ))}

            </div>
        </>

    )
}

export default Products
