export interface ProductType {
    id: number;
    name: string;
    description: string;
    price: number;
    image?: string;
  }
  
//   export const products: ProductType[] = [
//     { id: 1, name: 'Mouse', description: 'Description 1', price: 650.0, image:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51NCvJQ2tVL._SY450_.jpg" },
//     { id: 2, name: 'Keyboard', description: 'Description 2', price: 1500.0, image:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61Az2uOUbqL._SL1500_.jpg" },
//     { id: 3, name: 'Web Cam', description: 'Description 3', price: 2500.0, image:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71Kvo0bAI0L._AC_SS450_.jpg" }
//   ];
  
  export const productArr: ProductType[] = [
    { id: 1, name: 'Mouse', description: 'This is a mouse used for pointing things.', price: 650.0, image:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51NCvJQ2tVL._SY450_.jpg" },
    { id: 2, name: 'Keyboard', description: 'This is keyboard used for typing.', price: 1500.0, image:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61Az2uOUbqL._SL1500_.jpg" },
    { id: 3, name: 'Web Cam', description: 'This is a web cam used for recording or video calling.', price: 2500.0, image:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71Kvo0bAI0L._AC_SS450_.jpg" },
    { id: 4, name: 'Controller', description: 'This is a controller used to control the character of your game.', price: 3000.0, image:"https://www.reliancedigital.in/medias/Microsoft-QAT-00006-Gaming-Accessories-491936076-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0NzMxN3xpbWFnZS9qcGVnfGltYWdlcy9oMjQvaGU0Lzk0MjA1NjQ0OTY0MTQuanBnfDQzNzc2Yzk0YjJlYWNjYzJkOTFmZjJlNjg4ZWRlMWZlYmFlM2RmNDQxNmNiNDZmYjE5NmJiZGEwNGJjMzJhYWU" }
  ];