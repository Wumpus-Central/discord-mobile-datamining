// _runtime/metro/00621__.js
import _mod622 from "00622__.js";

export default function getMapData(__data__, str) {
  __data__ = __data__.__data__;
  if (_mod622(str)) {
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
