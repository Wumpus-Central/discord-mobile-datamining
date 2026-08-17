// _runtime/00532__createForOfIteratorHelper.js
const exports = arg5;
function _createForOfIteratorHelper(iterable) {
  closure_0 = iterable;
  iterable = typeof Symbol !== "undefined";
  if (typeof Symbol !== "undefined") {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  let arr = iterable;
  if (iterable) {
    c4 = true;
    c5 = false;
    let obj = { s: null, n: null, e: null, f: null };
    obj[0] = function s() {
      const call = closure_1.call;
      closure_1 = typeof call === "unknown" ? closure_1() : call(closure_0);
    };
    obj[1] = function n() {
      const iter = arr.next();
      const done = iter.done;
      return iter;
    };
    obj[2] = function e(arg0) {
      c5 = true;
      closure_3 = arg0;
    };
    obj[3] = function f() {
      try {
        let tmp = c4;
        if (!c4) {
          tmp = null == arr.return;
        }
        if (!tmp) {
          arr.return();
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
    };
    return obj;
  } else {
    const _Array = Array;
    if (!Array.isArray(iterable)) {
      arr = undefined;
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
          let name = tmp3;
          if (tmp4) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                const _Array2 = Array;
                array = new Array(length);
                class F {
                  constructor() {
                    return;
                  }
                }
                let num3 = 0;
                arr = array;
                if (0 < iterable.length) {
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
          tmp4 = "Object" === tmp3 && iterable.constructor;
        }
      }
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
    if (arr) {
      closure_0 = arr;
    }
    c2 = 0;
    class F {
      constructor() {
        return;
      }
    }
    obj = { s: null, n: null, e: null, f: null };
    obj[0] = F;
    obj[1] = function n() {
      if (closure_2 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false, value: null };
        closure_2 = tmp3 + 1;
        obj[1] = tmp[+closure_2];
      }
      return obj;
    };
    obj[2] = function e(arg0) {
      throw arg0;
    };
    obj[3] = F;
    return obj;
  }
}
arg5.type = (str) => {
  const parts = str.split(/ *; */);
  return parts.shift();
};
arg5.params = (str) => {
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
          let tmp2 = iter2;
          str = iter2.value;
          let parts = str.split(/ *= */);
          let arr = parts.shift();
          let tmp4 = arr;
          arr = parts.shift();
          if (arr) {
            let tmp6 = tmp4;
            let tmp7 = arr;
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
arg5.parseLinks = (str) => {
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
          let tmp2 = iter2;
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
arg5.cleanHeader = (arg0, arg1) => {
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
arg5.isObject = (obj) => null !== obj && typeof obj === "object";
arg5.hasOwn = Object.hasOwn || ((arg0, key10009) => {
  if (null == arg0) {
    const _TypeError = TypeError;
    const typeError = new TypeError("Cannot convert undefined or null to object");
    throw typeError;
  } else {
    const _Object = Object;
    const call = hasOwnProperty.call;
    const _Object2 = Object;
    const object = new Object(arg0);
    return typeof call === "unknown" ? hasOwnProperty(key10009) : call(object, key10009);
  }
});
arg5.mixin = (arg0, obj) => {
  for (const key10004 in arg1) {
    let tmp = key10004;
    let tmp2 = exports;
    if (!exports.hasOwn(arg1, key10004)) {
      continue;
    } else {
      arg0[key10004] = arg1[key10004];
      continue;
    }
    continue;
  }
};