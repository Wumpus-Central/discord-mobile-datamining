// _runtime/metro/01225__slicedToArray.js
import _slicedToArray from "00032__slicedToArray.js";

function isEnumObject(obj) {
  if (typeof obj === "object") {
    if (null !== obj) {
      if (obj.hasOwnProperty(0)) {
        const _Object = Object;
        const keys = Object.keys(obj);
        for (const item10014 of keys) {
          let _parseInt = parseInt;
          let parsed = parseInt(item10014);
          let tmp7 = parsed;
          let _Number = Number;
          if (Number.isNaN(parsed)) {
            let tmp16 = obj[item10014];
            let tmp17 = tmp16;
            if (undefined === tmp16) {
              obj.return();
              let flag6 = false;
              return false;
            } else if (typeof tmp17 !== "number") {
              obj.return();
              let flag5 = false;
              return false;
            } else if (undefined === obj[tmp17]) {
              obj.return();
              let flag4 = false;
              return false;
            }
          } else {
            let tmp9 = obj[tmp7];
            if (undefined === tmp9) {
              obj.return();
              let flag3 = false;
              return false;
            } else if (obj[tmp10] !== tmp7) {
              obj.return();
              let flag2 = false;
              return false;
            }
          }
          continue;
        }
        return true;
      } else {
        return false;
      }
    }
  }
  return false;
}
function listEnumValues(arg0) {
  let tmp11;
  let tmp12;
  if (isEnumObject(arg0)) {
    const items = [];
    const _Object = Object;
    const entries = Object.entries(arg0);
    const tmp5 = entries[Symbol.iterator]();
    while (tmp5 !== undefined) {
      let tmp10 = _slicedToArray(tmp7, 2);
      [tmp11, tmp12] = tmp10;
      if (typeof tmp12 === "number") {
        let obj = { name: tmp11, number: tmp13 };
        let arr = items.push(obj);
      }
      continue;
    }
    return items;
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("not a typescript enum object");
    throw error;
  }
}

export { isEnumObject };
export { listEnumValues };
export const listEnumNames = function listEnumNames(arg0) {
  const arr = listEnumValues(arg0);
  return arr.map((name) => name.name);
};
export const listEnumNumbers = function listEnumNumbers(arg0) {
  const arr = listEnumValues(arg0);
  const mapped = arr.map((number) => number.number);
  return mapped.filter((item, index, arr) => arr.indexOf(item) == index);
};
