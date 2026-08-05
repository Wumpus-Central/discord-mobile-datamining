import { getNative } from "00736_getNative.js";
// _runtime/00735_hashClear.js

export default function hashClear() {
  let obj = {};
  if (getNative /* getNative */) {
    obj = getNative /* getNative */(null);
  } else {
    obj = {};
  }
  obj.__data__ = obj;
  obj.size = 0;
};