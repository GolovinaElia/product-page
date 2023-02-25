// import React, { Component } from 'react';
// import MovieList from '../../components/MovieList/MovieList';
// import products from '../../services/api';
// import style from './HomePage.module.css';

// class CatalogPage extends Component {
//   state = {
//     products: [],
//   };

//   componentDidMount() {
//     fetchMovies
//       .getPopularMovie()
//       .then(response => response.data.results)
//       .then(results => this.setState({ movies: results }))
//       .catch(error => console.log(error));
//   }
//   render() {
//     return (
//       <>
//         <h1 className={style.title}>Catalog product</h1>
//         <MovieList movies={this.state.movies} />
//       </>
//     );
//   }
// }
// export default CatalogPage;