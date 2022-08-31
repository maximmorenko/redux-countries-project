const BASE_URL = 'https://restcountries.com/v2/';

// получаем все страны по конкретным полям
export const ALL_COUNTRIES = BASE_URL + 'all?fields=name,capital,flags,population,region';

// поиск по конкретной стране
export const searchByCountry = (name) => BASE_URL + 'name/' + name;

// фильтрация по коду
export const filterByCode = (codes) => BASE_URL + 'alpha?codes=' + codes.join(',');
