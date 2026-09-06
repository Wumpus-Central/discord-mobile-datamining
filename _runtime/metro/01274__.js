// _runtime/metro/01274__.js
const exports = arg5;
function _createForOfIteratorHelper(iterable, arg1) {
  let length = iterable;
  let prop = typeof Symbol !== "undefined";
  if (typeof Symbol !== "undefined") {
    const _Symbol = Symbol;
    prop = iterable[Symbol.iterator];
  }
  if (!prop) {
    prop = iterable[Symbol.iterator];
  }
  closure_1 = prop;
  if (prop) {
    let done = true;
    c5 = false;
    let obj = {
      s() {
          const call = closure_1.call;
          closure_1 = typeof call === "unknown" ? closure_1() : call(closure_0);
        },
      n() {
          const iter = closure_1.next();
          done = iter.done;
          return iter;
        },
      e(arg0) {
          c5 = true;
          closure_3 = arg0;
        },
      f() {
          try {
            let tmp = done;
            if (!done) {
              tmp = null == closure_1.return;
            }
            if (!tmp) {
              closure_1.return();
            }
            if (c5) {
              throw closure_3;
            }
          } catch (tmp8) {
            if (c5) {
              throw closure_3;
            } else {
              throw tmp8;
            }
          }
        }
    };
    return obj;
  } else {
    const _Array = Array;
    if (!Array.isArray(iterable)) {
      let arr;
      if (iterable) {
        if (typeof iterable === "string") {
          const _Array4 = Array;
          let array = new Array(length2);
          class F {
            constructor() {
              return;
            }
          }
          let num5 = 0;
          arr = array;
          if (0 < iterable.length) {
            do {
              array[num5] = iterable[num5];
              num5 = num5 + 1;
              arr = array;
            } while (num5 < length2);
          }
        } else {
          const _Object = Object;
          let call = toString.call;
          typeof call === "unknown" ? toString() : call(iterable);
          class F {
            constructor() {
              return;
            }
          }
          let name = tmp4;
          if (tmp5) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                length = iterable.length;
                const _Array2 = Array;
                array = new Array(length);
                class F {
                  constructor() {
                    return;
                  }
                }
                let num3 = 0;
                arr = array;
                if (0 < length) {
                  do {
                    array[num3] = iterable[num3];
                    num3 = num3 + 1;
                    arr = array;
                  } while (num3 < length);
                }
              } else {
                obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
          }
          const _Array3 = Array;
          arr = Array.from(iterable);
          tmp5 = "Object" === tmp4 && iterable.constructor;
        }
      }
      closure_1 = arr;
      if (!arr) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        class F {
          constructor() {
            return;
          }
        }
      }
    }
    if (closure_1) {
      length = closure_1;
    }
    closure_2 = 0;
    class F {
      constructor() {
        return;
      }
    }
    obj = {
      s: F,
      n() {
          if (closure_2 >= length.length) {
            let obj = { done: true };
          } else {
            obj = { done: false, value: null };
            closure_2 = tmp3 + 1;
            obj.value = tmp[+closure_2];
          }
          return obj;
        },
      e(arg0) {
          throw arg0;
        },
      f: F
    };
    return obj;
  }
}

export const type = (str) => {
  const parts = str.split(/ *; */);
  return parts.shift();
};
export const params = (str) => {
  let iter3;
  const obj2 = _createForOfIteratorHelper(str.split(/ *; */));
  try {
    const obj = {};
    try {
      obj2.s();
      const iter = obj2.n();
      let iter2 = iter;
      if (!iter.done) {
        do {
          str = iter2.value;
          let parts = str.split(/ *= */);
          let arr = parts.shift();
          let tmp4 = arr;
          arr = parts.shift();
          if (arr) {
            obj[tmp4] = arr;
          }
          iter3 = obj2.n();
          iter2 = iter3;
        } while (!iter3.done);
      }
      obj2.f();
      return obj;
    } catch (tmp8) {
      obj.e(tmp8);
    }
  } catch (tmp11) {
    obj.f();
    throw tmp11;
  }
};
export const parseLinks = (str) => {
  let done;
  const obj2 = _createForOfIteratorHelper(str.split(/ *, */));
  try {
    const obj = {};
    try {
      obj2.s();
      const iter = obj2.n();
      let iter2 = iter;
      if (!iter.done) {
        do {
          str = iter2.value;
          let parts = str.split(/ *; */);
          let first = parts[0];
          let str2 = parts[1];
          let substr = first.slice(1, -1);
          let arr2 = str2.split(/ *= */)[1];
          obj[arr2.slice(1, -1)] = substr;
          let iter3 = obj2.n();
          iter2 = iter3;
          done = iter3.done;
        } while (!done);
      }
      obj2.f();
      return obj;
    } catch (tmp5) {
      obj.e(tmp5);
    }
  } catch (tmp8) {
    obj.f();
    throw tmp8;
  }
};
export const cleanHeader = (arg0, arg1) => {
  delete tmp[tmp2];
  delete tmp[tmp2];
  delete tmp[tmp2];
  delete tmp[tmp2];
  if (arg1) {
    delete tmp[tmp2];
    delete tmp[tmp2];
  }
  return arg0;
};
export (obj) => null !== obj && typeof obj === "object"
export const hasOwn = Object.hasOwn || ((arg0, key10009) => {
  if (null == arg0) {
    const _TypeError = TypeError;
    const typeError = new TypeError("Cannot convert undefined or null to object");
    throw typeError;
  } else {
    const _Object = Object;
    hasOwnProperty = Object.prototype.hasOwnProperty;
    const call = hasOwnProperty.call;
    const _Object2 = Object;
    const object = new Object(arg0);
    return typeof call === "unknown" ? hasOwnProperty(key10009) : call(object, key10009);
  }
});
export const mixin = (arg0, obj) => {
  for (const key10004 in arg1) {
    if (!exports.hasOwn(arg1, key10004)) {
      continue;
    } else {
      arg0[key10004] = arg1[key10004];
      continue;
    }
    continue;
  }
};