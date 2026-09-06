// === Module 1325: _createForOfIteratorHelper ===

// Module 1325 (_createForOfIteratorHelper)
let length;
let closure_0 = function _createForOfIteratorHelper(iterable) {
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
};
class Agent {
  constructor() {
    this._defaults = [];
    return;
  }
  _setDefaults(arg0) {
    obj2 = closure_0(this._defaults);
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
let items = ["use", "on", "once", "set", "query", "type", "accept", "auth", "withCredentials", "sortQuery", "retry", "ok", "redirects", "timeout", "buffer", "serialize", "parse", "ca", "key", "pfx", "cert", "disableTLSCerts"];
let num = 0;
let num2 = 0;
if (0 < items.length) {
  do {
    let tmp = items[num2];
    closure_0 = tmp;
    Agent.prototype[tmp] = function() {
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      this._defaults.push({ fn: closure_0, args: array });
      return this;
    };
    num2 = num + 1;
    num = num2;
    length = items.length;
  } while (num2 < length);
}

export default Agent;