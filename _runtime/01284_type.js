// _runtime/01284_type.js
let hasOwnProperty;

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
  if (prop) {
    let done = true;
    let c5 = false;
    return {
      s() {
        prop = prop.call(length);
      },
      n() {
        const iter = prop.next();
        done = iter.done;
        return iter;
      },
      e(arg0) {
        c5 = true;
        let closure_1_3 = arg0;
      },
      f() {
        try {
          const tmp = done || null == prop.return;
          if (!tmp) {
            prop.return();
          }
          if (c5) {
            throw closure_1_3;
          }
        } catch (tmp8) {
          if (c5) {
            throw closure_1_3;
          } else {
            throw tmp8;
          }
        }
      },
    };
  } else {
    const _Array = Array;
    if (!Array.isArray(iterable)) {
      let arr;
      if (iterable) {
        if (typeof iterable === "string") {
          const _Array4 = Array;
          const self3 = this;
          const self4 = this;
          const array = new Array(length2);
          class F {
            constructor() {}
          }
          let num5 = 0;
          arr = array;
          if (0 < iterable.length) {
            do {
              array[num5] = iterable[num5];
              num5 = num5 + 1;
              arr = array;
            } while (num5 < iterable.length);
          }
        } else {
          const _Object = Object;
          const callResult = toString.call(iterable);
          const substr = callResult.slice(8, -1);
          class F {
            constructor() {}
          }
          let name = substr;
          const tmp4 = "Object" === substr && iterable.constructor;
          if (tmp4) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                length = iterable.length;
                const _Array2 = Array;
                const self = this;
                const self2 = this;
                const array2 = new Array(length);
                class F {
                  constructor() {}
                }
                let num3 = 0;
                arr = array2;
                if (0 < length) {
                  do {
                    array2[num3] = iterable[num3];
                    num3 = num3 + 1;
                    arr = array2;
                  } while (num3 < length);
                }
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
          }
          const _Array3 = Array;
          arr = Array.from(iterable);
        }
      }
      prop = arr;
      if (!prop) {
        const _TypeError = TypeError;
        const self5 = this;
        const self6 = this;
        const typeError = new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
        class F {
          constructor() {}
        }
      }
    }
    if (prop) {
      length = prop;
    }
    let closure_2 = 0;
    class F {
      constructor() {}
    }
    return {
      s: F,
      n() {
        let obj;
        if (closure_2 >= length.length) {
          obj = { done: true };
        } else {
          obj = { done: false, value: tmp[+closure_2] };
          closure_2 = tmp3 + 1;
        }
        return obj;
      },
      e(arg0) {
        throw arg0;
      },
      f: F,
    };
  }
}

export const type = (str) => {
  const parts = str.split(/ *; */);
  return parts.shift();
};
export const params = (str) => {
  let iter3;
  const obj = _createForOfIteratorHelper(str.split(/ *; */));
  try {
    const obj2 = {};
    try {
      obj.s();
      const iter = obj.n();
      let iter2 = iter;
      if (!iter.done) {
        do {
          str = iter2.value;
          let parts = str.split(/ *= */);
          let arr = parts.shift();
          let tmp4 = arr;
          let arr3 = parts.shift();
          if (arr) {
            arr = arr3;
          }
          if (arr) {
            obj2[tmp4] = arr3;
          }
          iter3 = obj.n();
          iter2 = iter3;
        } while (!iter3.done);
      }
    } catch (tmp8) {
      obj.e(tmp8);
    }
    obj.f();
    return obj2;
  } catch (tmp11) {
    obj.f();
    throw tmp11;
  }
};
export const parseLinks = (link) => {
  let done;
  const obj = _createForOfIteratorHelper(link.split(/ *, */));
  try {
    const obj2 = {};
    try {
      obj.s();
      const iter = obj.n();
      let iter2 = iter;
      if (!iter.done) {
        do {
          let str = iter2.value;
          let parts = str.split(/ *; */);
          let first = parts[0];
          let str2 = parts[1];
          let substr = first.slice(1, -1);
          let arr2 = str2.split(/ *= */)[1];
          obj2[arr2.slice(1, -1)] = substr;
          let iter3 = obj.n();
          iter2 = iter3;
          done = iter3.done;
        } while (!done);
      }
    } catch (tmp5) {
      obj.e(tmp5);
    }
    obj.f();
    return obj2;
  } catch (tmp8) {
    obj.f();
    throw tmp8;
  }
};
export const cleanHeader = (arg0, arg1) => {
  delete arg0["content-type"];
  delete arg0["content-length"];
  delete arg0["transfer-encoding"];
  delete arg0["host"];
  const tmp2 = arg1;
  if (tmp2) {
    delete arg0["authorization"];
    delete arg0["cookie"];
  }
  return arg0;
};
export const isObject = (_data) => null !== _data && typeof _data === "object";
export const hasOwn =
  Object.hasOwn ||
  function (arg0, arg1) {
    if (null == arg0) {
      const _TypeError = TypeError;
      const self3 = this;
      const self4 = this;
      const typeError = new TypeError("Cannot convert undefined or null to object");
      throw typeError;
    } else {
      const _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      const _Object2 = Object;
      const self = this;
      const self2 = this;
      const call = hasOwnProperty.call;
      const object = new Object(arg0);
      return call(object, arg1);
    }
  };
export const mixin = (prototype, prototype2) => {
  for (const key10004 in prototype2) {
    if (!exports.hasOwn(prototype2, key10004)) {
      continue;
    } else {
      prototype[key10004] = prototype2[key10004];
      continue;
    }
    continue;
  }
};
