// _runtime/metro/05769__.js
import arrayPush from "../00669_arrayPush.js";
import stubArray from "../00670_stubArray.js";
import _mod671 from "00671__.js";
import _mod5765 from "05765__.js";

if (Object.getOwnPropertySymbols) {
  let fn = (arg0) => {
    let tmp = arg0;
    const items = [];
    if (arg0) {
      do {
        let tmp4 = arrayPush;
        let tmp4Result = tmp4(items, stubArray(tmp));
        tmp = _mod5765(tmp);
      } while (tmp);
    }
    return items;
  };
} else {
  fn = _mod671;
}

export default fn;
