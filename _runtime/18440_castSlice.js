// === Module 18440: castSlice ===

// Module 18440 (castSlice)
import baseSlice from "baseSlice" /* 9559 */;


export default function castSlice(arg0, arg1, arg2) {
  let tmp = arg2;
  if (undefined === arg2) {
    tmp = length;
  }
  if (arg1) {
    let tmp2 = baseSlice(arg0, arg1, tmp);
  } else {
    tmp2 = arg0;
  }
  return tmp2;
};