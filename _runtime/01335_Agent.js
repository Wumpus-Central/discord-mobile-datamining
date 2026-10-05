// === Module 1335: Agent ===

// Module 1335 (Agent)
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
        }
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
            constructor() {

            }
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
            constructor() {

            }
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
                  constructor() {

                  }
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
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        class F {
          constructor() {

          }
        }
      }
    }
    if (prop) {
      length = prop;
    }
    let closure_2 = 0;
    class F {
      constructor() {

      }
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
      f: F
    };
  }
}
class Agent {
  constructor() {
    this._defaults = [];
  }
  _setDefaults(arg0) {
    let done;
    const obj = _createForOfIteratorHelper(this._defaults);
    try {
      obj.s();
      const iter = obj.n();
      let iter2 = iter;
      if (!iter.done) {
        do {
          let value = iter2.value;
          let tmp4 = arg0[value.fn];
          let items = [];
          let arraySpreadResult = HermesBuiltin.arraySpread(items, value.args, 0);
          let applyResult = HermesBuiltin.apply(tmp4, items, arg0);
          let iter3 = obj.n();
          iter2 = iter3;
          done = iter3.done;
        } while (!done);
      }
      obj.f();
    } catch (tmp12) {
      obj.f();
      throw tmp12;
    }
  }
}
let items = ["use", "on", "once", "set", "query", "type", "accept", "auth", "withCredentials", "sortQuery", "retry", "ok", "redirects", "timeout", "buffer", "serialize", "parse", "ca", "key", "pfx", "cert", "disableTLSCerts"];
let num = 0;
let num2 = 0;
if (0 < items.length) {
  do {
    let tmp = items[num2];
    let closure_0 = tmp;
    Agent.prototype[tmp] = function() {
      let num;
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      const _defaults = this._defaults;
      const obj = { fn: closure_0, args: array };
      _defaults.push(obj);
      return this;
    };
    num2 = num + 1;
    num = num2;
    length = items.length;
  } while (num2 < length);
}

export default Agent;