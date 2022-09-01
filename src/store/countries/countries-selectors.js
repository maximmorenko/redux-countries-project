export const selectCountriesInfo = (state) => ({
  status: state.countries.status,
  error: state.countries.error,
  qty: state.countries.list.length
})

export const selectAllCountries = (state) => state.countries.list;
export const selectVisibleCountries = (state, {search = ''}) => {
  // кроме стейта на входе ждем информацюч о том что в поиске
  return state.countries.list.filter(
    country => (
      // отфильтруем страны, оставим только ту страну которая содержит строку поисака
      country.name.toLowerCase().includes(search.toLowerCase())
    )
  )
}
