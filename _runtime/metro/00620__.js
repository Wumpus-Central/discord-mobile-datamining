// === Module 620: ? ===

// Module 620
import _mod621 from "module_621" /* 621 */;


export default function getMapData(__data__, str) {
  __data__ = __data__.__data__;
  if (_mod621(str)) {
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