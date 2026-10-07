// _runtime/metro/00632__.js
import _mod633 from "00633__.js";

export default function getMapData(__data__, str) {
  __data__ = __data__.__data__;
  if (_mod633(str)) {
    str = "hash";
    if (typeof str === "string") {
      str = "string";
    }
    let map = __data__[str];
  } else {
    map = __data__.map;
  }
  return map;
}
