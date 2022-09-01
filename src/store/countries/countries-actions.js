export const SET_COUNTRIES = '@@country/SET_COUNTRIES';
export const SET_LOADING = '@@country/SET_LOADING';
export const SET_ERROR = '@@country/ERROR';

export const setCountries = (countries) => ({
  type: SET_COUNTRIES,
  payload: countries,
})

// экшин сработываает при загрузке
export const setLoading = () => ({
  type: SET_LOADING
})

export const setError = (err) => ({
  type: SET_ERROR,
  payload: err
})


// создадим санк (асинхронный)
export const loadCountries = () => (dispatch, _, {client, api}) => {
  // клиента и апи достанем из переданого экстраАргумента 
  // второй параметр гетСтейт оставим пустуй
  console.log(loadCountries)
  // до похода на сервер за списком стран, запускаем загрузку
  dispatch(setLoading());

  client.get(api.ALL_COUNTRIES)
  // получаем список стран
    .then(({data}) => dispatch(setCountries(data)))
    .catch((err) => dispatch(setError(err.message)));
}
