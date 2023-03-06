import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      products: [{
    "id": 1,
    "name": "Футболка",
    "colors": [
      {
        "id": 1,
        "name": "черный",
        "images": ["/images/1/black_front.png", "/images/1/black_back.png"],
        "price": "123.00",
        "description": "Описание для Футболка черный",
        "sizes": [1, 2, 3]
      },
      {
        "id": 2,
        "name": "белый",
        "images": ["/images/1/white_front.png", "/images/1/white_back.png"],
        "price": "125.00",
        "description": "Описание для Футболка белый",
        "sizes": [1, 2, 3, 4, 5]
      },
      {
        "id": 3,
        "name": "серый",
        "images": ["/images/1/gray_front.png", "/images/1/gray_back.png"],
        "price": "120.00",
        "description": "Описание для Футболка серый",
        "sizes": []
      }
    ]
  },

  {
    "id": 2,
    "name": "Майка",
    "colors": [
      {
        "id": 1,
        "name": "желтый",
        "images": ["/images/2/yellow_front.png", "/images/2/yellow_back.png"],
        "price": "88.00",
        "description": "Описание для Майка желтый",
        "sizes": [1, 2, 3, 4, 5]
      },
      {
        "id": 2,
        "name": "синий",
        "images": ["/images/2/blue_front.png", "/images/2/blue_back.png"],
        "price": "89.00",
        "description": "Описание для Майка синий",
        "sizes": [2]
      },
      {
        "id": 3,
        "name": "черный",
        "images": ["/images/2/black_front.png", "/images/2/black_back.png"],
        "price": "90.00",
        "description": "Описание для Майка черный",
        "sizes": []
      }
    ]
  }]
    };
  }
  


  componentDidMount() {
    fetch("http://localhost:3000/products")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            products: result.products
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  render() {
    const { error, isLoaded, products } = this.state;
    if (error) {
      return <div>Mistake: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {products.map(product => (
            <li key={product.id}>{product.name} </li>
          ))}
        </ul>
      )
    }
  }
}
// import { Route, Routes } from 'react-router-dom';

// const CatalogPage = lazy(() =>
//   import(
//     './views/CatalogPage/CatalogPage.js' /* webpackChunkName: "catalog-page" */
//   ),
// );
// const ProductPage = lazy(() =>
//   import(
//     './views/ProductPage/ProductPage.js' /* webpackChunkName: "product-page" */
//   ),
// );

// const App = () => {
//   return (
//     <>
//       <Suspense fallback={<h2>Loading...</h2>}>
//         <Routes>
//           <Route exact="true" path="/" element={<CatalogPage/>} />
//           <Route path='/:productId' element={<MovieDetailsPage/>} />
//         </Routes>
//       </Suspense>
//     </>
//   );
// };

export default App;