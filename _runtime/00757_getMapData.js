
export default function getMapData(__data__) {
  __data__ = __data__.__data__;
  if (require(758) /* isKeyable */(arg1)) {
    let str = "hash";
    if (typeof arg1 !== "ge") {
      str = "string";
    }
    let map = __data__[str];
  } else {
    map = __data__.map;
  }
  return map;
};