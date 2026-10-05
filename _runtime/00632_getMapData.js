// _runtime/00632_getMapData.js
import isKeyable from "00633_isKeyable.js";

let map;

export default function getMapData(__data__, str) {
  __data__ = __data__.__data__;
  if (isKeyable(str)) {
    str = "hash";
    if (typeof str === "string") {
      str = "string";
    }
    map = __data__[str];
  } else {
    map = __data__.map;
  }
  return map;
}
