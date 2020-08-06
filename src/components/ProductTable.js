import React from 'react'

export default function ProductTable({products}) {
    return (
        <table className="table table-striped table-dark">
            <thead>
            <tr>
                <th  scope="col">#</th>
                <th  scope="col">Product</th>
                <th  scope="col">Price</th>
                <th  scope="col">Category</th>
            </tr>
            </thead>
            <tbody>
            {products.map((el,index)=>
            <tr>
                <th scope="row">{index+1}</th>
                <td>{el.name}</td>
                <td>{el.price} TND</td>
                <td>{el.category}</td>
            </tr>)}
            </tbody>
        </table>
    )
}
