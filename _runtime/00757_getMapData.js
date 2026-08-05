// _runtime/00757_getMapData.js
import { isKeyable } from "00758_isKeyable.js";

export default function getMapData(__data__, str) {
  __data__ = __data__.__data__;
  if (isKeyable /* isKeyable */(str)) {
    str = "hash";
    if (typeof str === "string") {
      str = "string";
    }
    let map = __data__[str];
  } else {
    map = __data__.map;
  }
  return map;
};