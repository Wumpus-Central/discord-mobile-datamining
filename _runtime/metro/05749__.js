// _runtime/metro/05749__.js
import arrayPush from "../00669_arrayPush.js";
import stubArray from "../00670_stubArray.js";
import _mod671 from "00671__.js";
import _mod5745 from "05745__.js";

if (Object.getOwnPropertySymbols) {
  let fn = (arg0) => {
    let tmp = arg0;
    const items = [];
    if (arg0) {
      do {
        let tmp4 = arrayPush;
        let tmp4Result = tmp4(items, stubArray(tmp));
        tmp = _mod5745(tmp);
      } while (tmp);
    }
    return items;
  };
} else {
  fn = _mod671;
}

export default fn;
