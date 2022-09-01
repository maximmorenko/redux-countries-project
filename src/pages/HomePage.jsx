import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react'

import { List } from '../components/List';
import { Card } from '../components/Card';
import { Controls } from '../components/Controls';
import { selectAllCountries, selectCountriesInfo } from '../store/countries/countries-selectors';
import { loadCountries } from '../store/countries/countries-actions';

export const HomePage = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const countries = useSelector(selectAllCountries);
  const {status, error, qty} = useSelector(selectCountriesInfo);

  useEffect(() => {
    // после монтирования выполняем диспатч санка
    if (!qty) {
      // проверяем есть ли длина масива , если нет то идем на сервер за странами (вызываем санк)
      dispatch(loadCountries());
    }
  }, [qty, dispatch]);


  return (
    <>
      <Controls />

      {/* если есть ошибка то выведем в UI строку, что не можем получить данные*/}
      {error && <h2>Can't fetch data</h2>}
      {/* если статус лоадин то покажем строку заграузка, обойдемся без прелоудера */}
      {status === 'loading' && <h2>Loading...</h2>}

      {/* Список будем печатать только если статус ресивд, т.е данные получены, сделаем проверку */}
      {status === 'received' && (
        <List>
        {countries.map((c) => {
          const countryInfo = {
            img: c.flags.png,
            name: c.name,
            info: [
              {
                title: 'Population',
                description: c.population.toLocaleString(),
              },
              {
                title: 'Region',
                description: c.region,
              },
              {
                title: 'Capital',
                description: c.capital,
              },
            ],
          };

          return (
            <Card
              key={c.name}
              onClick={() => navigate(`/country/${c.name}`)}
              {...countryInfo}
            />
          );
        })}
      </List>
      )}
    </>
  );
};
