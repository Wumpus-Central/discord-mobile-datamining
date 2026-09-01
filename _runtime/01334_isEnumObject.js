// _runtime/01334_isEnumObject.js
import closure_0 from "metro/00032__slicedToArray.js";

function isEnumObject(obj) {
  if (typeof obj === "object") {
    if (null !== obj) {
      if (obj.hasOwnProperty(0)) {
        const _Object = Object;
        const keys = Object.keys(obj);
        for (const item10014 of keys) {
          let _parseInt = parseInt;
          let tmp5 = item10014;
          let parsed = parseInt(item10014);
          let tmp7 = parsed;
          let _Number = Number;
          if (Number.isNaN(parsed)) {
            let tmp15 = item10014;
            let tmp16 = arg0[tmp5];
            let tmp17 = tmp16;
            if (undefined === tmp16) {
              let tmp21 = obj;
              obj.return();
              let flag6 = false;
              return false;
            } else {
              let tmp18 = tmp16;
              if (typeof tmp17 !== "number") {
                let tmp20 = obj;
                obj.return();
                let flag5 = false;
                return false;
              } else {
                let tmp23 = tmp16;
                if (undefined === arg0[tmp17]) {
                  let tmp19 = obj;
                  obj.return();
                  let flag4 = false;
                  return false;
                }
              }
            }
          } else {
            let tmp8 = parsed;
            let tmp9 = arg0[tmp7];
            if (undefined === tmp9) {
              let tmp14 = obj;
              obj.return();
              let flag3 = false;
              return false;
            } else {
              let tmp11 = tmp9;
              let tmp12 = parsed;
              if (arg0[tmp10] !== tmp7) {
                let tmp13 = obj;
                obj.return();
                let flag2 = false;
                return false;
              }
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
      let tmp11 = callback;
      let tmp12 = callback(tmp9, 2);
      [tmp13, tmp14] = tmp12;
      if (typeof tmp14 === "number") {
        let obj = { name: null, number: null };
        let tmp16 = tmp13;
        obj[0] = tmp13;
        let tmp17 = tmp14;
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
  return listEnumValues(arg0).map((name) => name.name);
};
export const listEnumNumbers = function listEnumNumbers(arg0) {
  const mapped = listEnumValues(arg0).map((number) => number.number);
  return mapped.filter((arg0, arg1, arr) => arr.indexOf(arg0) == arg1);
};
