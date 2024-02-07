const API_KEY="c6eb1f762f02963f22e14f83d83350ed";

const requests={
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-Us`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchMysteryMovies:`/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    fetchScifiMovies:`/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchThriller:`/discover/movie?api_key=${API_KEY}&with_genres=80`,
    fetchFantasy:`/discover/movie?api_key=${API_KEY}&with_genres=14`,
    fetchWar:`/discover/movie?api_key=${API_KEY}&with_genres=10752`,

}

export default requests;