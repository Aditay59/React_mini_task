import { useParams } from "react-router-dom";
import { productArr,ProductType } from "./Array";

// interface ProductType {
//     id: number;
//     name: string;
//     description: string;
//     price: number;
//     image?: string;
//   }

//   const productArr: ProductType[] = [
//     { id: 1, name: 'Mouse', description: 'This is a mouse used for pointing things.', price: 650.0, image:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51NCvJQ2tVL._SY450_.jpg" },
//     { id: 2, name: 'Keyboard', description: 'This is keyboard used for typing.', price: 1500.0, image:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61Az2uOUbqL._SL1500_.jpg" },
//     { id: 3, name: 'Web Cam', description: 'This is a web cam used for recording or video calling.', price: 2500.0, image:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71Kvo0bAI0L._AC_SS450_.jpg" }
//   ];

const arr:ProductType[] = productArr;

const Item = () =>{

    const {id} = useParams();
    const product = arr.find((item) => item.id === Number(id));

    return (
        <>
        {
            <table border={1} style={{alignItems:"center",textAlign:"center",margin:"0 auto"}} cellPadding={5} cellSpacing={3}>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price(in INR)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> <img src={product?.image} alt="product" height={100} width={100}/> </td>
                        <td>{product?.name}</td>
                        <td>{product?.description}</td>
                        <td>{product?.price}</td>
                    </tr>

            </tbody>
            </table>
        }
        </>
    )
}

export default Item;