import React from 'react';
import { Link } from 'react-router-dom';
import { productArr,ProductType } from './Array';

// interface ProductType {
//   id: number;
//   name: string;
//   description: string;
//   price: number;
//   image?: string;
// }

const arr:ProductType[] = productArr;


const Products = ()=> {
  return (
   <>
   <table border={1} style={{alignItems:"center",textAlign:"center",margin:"0 auto"}} cellPadding={5} cellSpacing={3}>
    <thead>
      <tr>
        <td>Image</td>
        <td>Product name</td>
        <td>Product Price(Inr)</td>
        <td>Details</td>
      </tr>
    </thead>

    <tbody>
      {arr.map((items,index) =>(
        <tr key={index}>
        <td> <img src={items.image} alt='product_image' height={100} width={100}/> </td>
        <td>{items.name}</td>
        <td>{items.price}</td>
        <td> <Link to={`/${items.id}`}>View</Link> </td>
        </tr>
      ))}
    </tbody>
   </table>
   </>
  );
}

export default Products;
