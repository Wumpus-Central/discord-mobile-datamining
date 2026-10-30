// _runtime/metro/05813__.js
import arrayPush from "../00657_arrayPush.js";
import stubArray from "../00658_stubArray.js";
import _mod659 from "00659__.js";
import _mod5809 from "05809__.js";

if (Object.getOwnPropertySymbols) {
  let fn = (arg0) => {
    let tmp = arg0;
    const items = [];
    if (arg0) {
      do {
        let tmp4 = arrayPush;
        let tmp4Result = tmp4(items, stubArray(tmp));
        tmp = _mod5809(tmp);
      } while (tmp);
    }
    return items;
  };
} else {
  fn = _mod659;
}

export default fn;
