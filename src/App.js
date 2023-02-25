import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      products: []
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