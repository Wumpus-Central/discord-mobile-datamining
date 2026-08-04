
export default function getMapData(__data__, str) {
  __data__ = __data__.__data__;
  if (require(758) /* isKeyable */(str)) {
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