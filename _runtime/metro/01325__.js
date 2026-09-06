// _runtime/metro/01325__.js
let length;
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
      },
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
        const typeError = new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
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
      f: F,
    };
    return obj;
  }
}
class Agent {
  constructor() {
    this._defaults = [];
    return;
  }
  _setDefaults(arg0) {
    obj2 = _createForOfIteratorHelper(this._defaults);
    try {
      sResult = obj2.s();
      iter = obj2.n();
      iter2 = iter;
      if (iter.done) {
      } else {
        do {
          tmp2 = iter2;
          value = iter2.value;
          tmp3 = global[value.fn];
          items = [];
          tmp4 = items;
          num = 0;
          arraySpreadResult = HermesBuiltin.arraySpread(value.args, 0);
          tmp6 = tmp3;
          tmp7 = items;
          tmp8 = global;
          applyResult = HermesBuiltin.apply(items, global);
          iter3 = obj2.n();
          iter2 = iter3;
          done = iter3.done;
        } while (!done);
      }
      fResult = obj2.f();
      return;
    } catch (tmp11) {
      fResult1 = obj.f();
      throw tmp11;
    }
    return;
  }
}
let items = [
  "use",
  "on",
  "once",
  "set",
  "query",
  "type",
  "accept",
  "auth",
  "withCredentials",
  "sortQuery",
  "retry",
  "ok",
  "redirects",
  "timeout",
  "buffer",
  "serialize",
  "parse",
  "ca",
  "key",
  "pfx",
  "cert",
  "disableTLSCerts",
];
let num = 0;
let num2 = 0;
if (0 < items.length) {
  do {
    let tmp = items[num2];
    let closure_129_0 = tmp;
    Agent.prototype[tmp] = function () {
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      this._defaults.push({ fn: _createForOfIteratorHelper, args: array });
      return this;
    };
    num2 = num + 1;
    num = num2;
    length = items.length;
  } while (num2 < length);
}

export default Agent;
