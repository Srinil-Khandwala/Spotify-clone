import './App.css';
//login
import Login from './Login.js';
import { useEffect, useState } from 'react';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { UseDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = UseDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {
      dispatch({ type: 'SET_TOKEN', token: _token });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({ type: 'SET_USER', user: user });
      });

      spotify
        .getUserPlaylists()
        .then((playlists) =>
          dispatch({ type: 'SET_PLAYLISTS', playlists: playlists })
        );

      spotify
        .getPlaylist('37i9dQZEVXcEJNKFzee5I1')
        .then((reposnse) =>
          dispatch({ type: 'SET_DISCOVER_WEEKLY', discover_weekly: reposnse })
        );

      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: 'SET_TOP_ARTISTS',
          top_artists: response,
        })
      );
    }
  }, [dispatch, token]);

  return (
    <div className='app'>
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
