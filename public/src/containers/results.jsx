import React from 'react';
import ResultsBody from '../components/resultsBody.jsx';
import ResultsTileBar from '../components/resultsTileBar.jsx';
import { connect } from 'react-redux';
import axios from 'axios';

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMovie: null,
      tileMovies: []
    };
    this.getUserMovies();
    this.selectSmallTile = this.selectSmallTile.bind(this);
    this.handleSeeMovieClick = this.handleSeeMovieClick.bind(this);
  }

  getUserMovies() {
    // If no user is logged in, get top result (e.g. most liked)
    const getUrl = this.props.isLoggedIn ? '/api/results/user' : '/api/results/top';
    axios.get(getUrl)
      .then((results) => {
        this.setState({
          selectedMovie: results.data[0],
          tileMovies: results.data
        });
        this.loadTrailer(results.data[0]);
      })
      .catch(err => console.error('Error retrieving movies: ', err));
  }

  selectSmallTile(e, evt, movie) {
    this.loadTrailer(movie);
    this.setState({
      selectedMovie: movie
    });
  }

  loadTrailer(movie) {
    axios.post('/api/trailer', { movie })
      .then((results) => {
        this.setState({
          trailer: results.data
        });
      });
  }

  handleSeeMovieClick() {
    // if (!this.props.isLoggedIn) return;
    axios.post('/api/user/watched', {
      userId: this.props.user.id,
      watchedMovieId: this.state.selectedMovie.id,
      watchedMovieTitle: this.state.selectedMovie.title
    });
  }

  render() {
    return (
      <div className="fadeIn">
        <div>
          <ResultsBody
            handleSeeMovieClick={this.handleSeeMovieClick}
            trailer={this.state.trailer}
            movie={this.state.selectedMovie}
          />
        </div>
        <ResultsTileBar
          movies={this.state.tileMovies}
          selectSmallTile={this.selectSmallTile}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  null
)(Results);
