// === Module 632: ? ===

// Module 632
import _mod633 from "module_633" /* 633 */;


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
};