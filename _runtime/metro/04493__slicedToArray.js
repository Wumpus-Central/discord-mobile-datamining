// === Module 4493: _slicedToArray ===

// Module 4493 (_slicedToArray)
import _slicedToArray from "_slicedToArray" /* 32 */;

let map, map1;

function isIterable(arg0) {

}
function hasIterableEntries(arg0) {

}
function compareEntries(arr, arr2) {
  let tmp10;
  let tmp8;
  map = arr;
  if (!(arr instanceof Map)) {
    const _Map = Map;
    const self = this;
    const self2 = this;
    map = new Map(arr.entries());
  }
  map1 = arr2;
  if (!(arr2 instanceof Map)) {
    const _Map2 = Map;
    const self3 = this;
    const self4 = this;
    map1 = new Map(arr2.entries());
  }
  if (map.size !== map1.size) {
    return false;
  } else {
    const obj2 = map[Symbol.iterator]();
    while (obj2 !== undefined) {
      let tmp7 = _slicedToArray(tmp4, 2);
      [tmp8, tmp10] = tmp7;
      if (map1.has(tmp8)) {
        let _Object = Object;
      }
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
      let tmp5 = prototypeOf === Object.getPrototypeOf(current2);
      if (tmp5) {
        if (typeof isIterable === "function") {
          const _Symbol = Symbol;
          if (Symbol.iterator in current) {
            if (typeof tmp6 === "function") {
              let tmp8;
              const _Symbol2 = Symbol;
              if (Symbol.iterator in current2) {
                if (typeof hasIterableEntries === "function") {
                  let flag;
                  if ("entries" in current) {
                    if (typeof tmp9 === "function") {
                      if ("entries" in current2) {
                        flag = compareEntries(current, current2);
                      }
                      tmp8 = flag;
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  }
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
                      flag = false;
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
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              }
              tmp5 = tmp8;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
          const obj = {
            entries() {
                      return Object.entries(closure_0);
                    }
          };
          const obj2 = {
            entries() {
                      return Object.entries(closure_1);
                    }
          };
          tmp8 = compareEntries(obj, obj2);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      tmp2 = tmp5;
    }
    isResult = tmp2;
  }
  return isResult;
};