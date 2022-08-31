import axios from 'axios';
import {createStore, compose, applyMiddleware} from 'redux';
// compose для подключения dewtools
import thunk from 'redux-thunk';

import {rootReducer} from './root-reducer';
import * as api from '../config'; //импортировать всё как api из конфига

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ строка берется благодаря установленному расширению браузера,
// если расширение активно, то наш глобальный объект window получает эту строку, если нет, то получаем композицию
// || - остановится на первой правде и вернет ее значение, если все фолс то вернет значение последнего операнда т.е compose

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(
      thunk.withExtraArgument({
        // чтобы не импортировать везде клиенат и апи из конфига, воспользуемся екстра аргументом
        client: axios,
        api,
        // дальше будем доставать их из параметров
      })
    )
  ))
  
  export {store};
  