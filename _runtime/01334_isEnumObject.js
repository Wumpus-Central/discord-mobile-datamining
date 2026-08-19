// === Module 1334: isEnumObject ===

// Module 1334 (isEnumObject)
import _slicedToArray from "_slicedToArray" /* 32 */;

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
            let tmp16 = arg0[item10014];
            let tmp17 = tmp16;
            if (undefined === tmp16) {
              obj.return();
              let flag6 = false;
              return false;
            } else if (typeof tmp17 !== "number") {
              obj.return();
              let flag5 = false;
              return false;
            } else if (undefined === arg0[tmp17]) {
              obj.return();
              let flag4 = false;
              return false;
            }
          } else {
            let tmp9 = arg0[tmp7];
            if (undefined === tmp9) {
              obj.return();
              let flag3 = false;
              return false;
            } else if (arg0[tmp10] !== tmp7) {
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
  if (isEnumObject(arg0)) {
    const items = [];
    const _Object = Object;
    const entries = Object.entries(arg0);
    const tmp7 = entries[Symbol.iterator]();
    while (tmp7 !== undefined) {
      let tmp12 = _slicedToArray(tmp9, 2);
      [tmp13, tmp14] = tmp12;
      if (typeof tmp14 === "number") {
        let obj = { name: null, number: null };
        obj[0] = tmp13;
        obj[1] = tmp15;
        let arr = items.push(obj);
      }
      continue;
    }
    return items;
  } else {
    const _Error = Error;
    error = new Error("not a typescript enum object");
    throw error;
  }
}

export { isEnumObject };
export { listEnumValues };
export const listEnumNames = function listEnumNames(arg0) {
  return listEnumValues(arg0).map((item, index) => item.name);
};
export const listEnumNumbers = function listEnumNumbers(arg0) {
  const mapped = listEnumValues(arg0).map((item, index) => item.number);
  return mapped.filter((item, index, arr) => arr.indexOf(item) == index);
};