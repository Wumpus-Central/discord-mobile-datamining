// _runtime/03915_isIterable.js
import _slicedToArray from "_slicedToArray";

function isIterable(arg0) {

}
function hasIterableEntries(arg0) {

}
function compareEntries(arr, arr2) {
  let tmp12;
  let tmp14;
  let map = arr;
  if (!(arr instanceof Map)) {
    const _Map = Map;
    map = new Map(arr.entries());
  }
  let map1 = arr2;
  if (!(arr2 instanceof Map)) {
    const _Map2 = Map;
    map1 = new Map(arr2.entries());
  }
  if (map.size !== map1.size) {
    return false;
  } else {
    const obj2 = map[Symbol.iterator]();
    while (obj2 !== undefined) {
      let tmp10 = _slicedToArray;
      let tmp11 = _slicedToArray(tmp8, 2);
      [tmp12, tmp14] = tmp11;
      let tmp13 = tmp12;
      if (map1.has(tmp12)) {
        let _Object = Object;
        let tmp15 = tmp14;
        let tmp16 = tmp12;
      }
      let tmp17 = obj2;
      obj2.return();
      let flag = false;
      return false;
    }
    return true;
  }
}

export const shallow = function shallow(current, current2) {
  let closure_0 = current;
  let closure_1 = current2;
  let isResult = Object.is(current, current2);
  if (!isResult) {
    let tmp2 = typeof current === "object";
    if (typeof current === "object") {
      tmp2 = null !== current;
    }
    if (tmp2) {
      tmp2 = typeof current2 === "object";
    }
    if (tmp2) {
      tmp2 = null !== current2;
    }
    if (tmp2) {
      const _Object = Object;
      const _Object2 = Object;
      const prototypeOf = Object.getPrototypeOf(current);
      const tmp5 = prototypeOf === Object.getPrototypeOf(current2);
      if (!tmp5) {
        tmp2 = tmp5;
      } else {
        if (typeof closure_1 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        const _Symbol = Symbol;
        if (!(Symbol.iterator in current)) {
          let obj = { entries: null };
          obj[0] = function entries() {
            return Object.entries(closure_0);
          };
          obj = { entries: null };
          obj[0] = function entries() {
            return Object.entries(closure_1);
          };
          compareEntries(obj, obj);
        } else {
          if (typeof tmp6 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const _Symbol2 = Symbol;
        }
        if (typeof hasIterableEntries !== "function") {
          HermesBuiltin.throwTypeError();
        }
        if (!("entries" in current)) {
          const _Symbol3 = Symbol;
          const iter = current[Symbol.iterator]();
          const _Symbol4 = Symbol;
          const iter2 = current2[Symbol.iterator]();
          const iter3 = iter.next();
          const iter4 = iter2.next();
          let iter5 = iter4;
          let iter6 = iter3;
          if (!iter3.done) {
            let iter7 = iter4;
            let iter8 = iter3;
            iter5 = iter4;
            iter6 = iter3;
            if (!iter4.done) {
              const _Object3 = Object;
              let flag = false;
              while (Object.is(iter8.value, iter7.value)) {
                let iter9 = iter.next();
                let iter10 = iter2.next();
                iter5 = iter10;
                iter6 = iter9;
                if (!iter9.done) {
                  iter7 = iter10;
                  iter8 = iter9;
                  iter5 = iter10;
                  iter6 = iter9;
                }
              }
            }
          }
          flag = iter6.done && iter5.done;
          const tmp9 = iter6.done && iter5.done;
        } else if (typeof tmp8 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        flag = compareEntries(current, current2);
        tmp6 = closure_1;
        tmp8 = hasIterableEntries;
      }
    }
    isResult = tmp2;
  }
  return isResult;
};