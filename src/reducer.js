export const initialState = {
  user: null,
  playlists: [],
  item: null,
  playing: false,
  discover_weekly: null,
  top_artists: null,

  // token: `BQAG5H99mUDaKbov5k79X82mWo2jxUavaR20eGljvenAF5FGhsPKLxtFaZM2NwawpZEkrS3FlXLdPg2nHlKsJmGncCsOyM25Ed81IZ_vcZnP -
  //   ZAUTxs1UDLgfv7QZpt1yjpgAoDyxLYFRuRKH2vCGil8Zq1eezVdUw5UdbKRjQ_m6Qsq`,
};

export const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };

    case 'SET_ITEM':
      return {
        ...state,
        item: action.item,
      };

    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };

    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };

    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case 'SET_TOP_ARTISTS':
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case 'SET_PLAYING':
      return {
        ...state,
        playing: action.playing,
      };

    default:
      return state;
  }
};
