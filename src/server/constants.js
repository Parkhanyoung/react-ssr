export const TMDB_BANNER_URL = "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/";

export const BASE_URL = "https://api.themoviedb.org/3/movie";
export const TMDB_MOVIE_LISTS = {
  nowPlaying: BASE_URL + "/now_playing?language=ko-KR&page=1",
};

export const FETCH_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.TMDB_ACCESS_TOKEN,
  },
};
