// _runtime/00757_getMapData.js

export default function getMapData(__data__, str) {
  __data__ = __data__.__data__;
  if (require("00758_isKeyable.js") /* isKeyable */(str)) {
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