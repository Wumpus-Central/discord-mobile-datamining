// _runtime/17917_castSlice.js
import baseSlice from "09965_baseSlice.js";

export default function castSlice(arg0, arg1, arg2) {
  let tmp3;
  let tmp = arg2;
  const length = arg0.length;
  if (undefined === arg2) {
    tmp = length;
  }
  const tmp2 = arg1;
  if (tmp2) {
    tmp3 = baseSlice(arg0, arg1, tmp);
  } else {
    tmp3 = arg0;
  }
  return tmp3;
}
