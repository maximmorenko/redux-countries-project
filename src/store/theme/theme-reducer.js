import {SET_THEME} from './theme-actions';

export const themeReducer = (state = 'light', {type, payload}) => {
  // задаем тему по умолчанию светтлую
  // вторым параметром ожидаем экшн, делаем мсразу деструктуризацию, type = action.type, payload = action.payload
  switch(type) {
    case SET_THEME:
      return payload; //если ключ сет_зим, то возвращаем пейлоад, в данном случае это конкретная тема
    default:
      return state;
  }
}
