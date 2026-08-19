// === Module 1421: apply ===

// Module 1421 (apply)
let apply = typeof Reflect === "object";
if (typeof Reflect === "object") {
  const _Reflect2 = Reflect;
  apply = null !== Reflect;
}
if (apply) {
  const _Reflect = Reflect;
  apply = Reflect.apply;
}
let c3 = apply;
if (typeof apply === "function") {
  const _Object3 = Object;
  if (typeof Object.defineProperty === "function") {
    try {
      const _Object = Object;
      let obj = { get: null };
      obj[0] = function get() {
        throw obj;
      };
      const definePropertyResult = Object.defineProperty({}, "length", obj);
      let c0 = definePropertyResult;
      obj = {};
      apply(() => {
        throw 42;
      }, null, definePropertyResult);
      let tmp3 = apply;
    } catch (tmp8) {
      tmp3 = tmp2;
      if (tmp8 !== tmp) {
        c3 = null;
        tmp3 = null;
      }
    }
  }
  const re4 = /^\s*class\b/;
  function isES6ClassFunction(fn) {
    try {
      let tmp2 = toString;
      const call = toString.call;
      if (typeof call === "unknown") {
        let callResult = tmp2();
      } else {
        callResult = call(fn);
      }
      tmp2 = regex;
      const isMatch = regex.test(callResult);
    } catch (err) {
      return false;
    }
  }
  function tryFunctionToStr(fn) {
    try {
      const tmp3 = isES6ClassFunction(fn);
      let flag = !tmp3;
      if (!tmp3) {
        const call = toString.call;
        if (typeof call === "unknown") {
          tmp4();
          flag = true;
        } else {
          call(fn);
          flag = true;
        }
        tmp4 = toString;
      }
      return flag;
    } catch (err) {
      return false;
    }
  }
  const _Object2 = Object;
  toString = Object.prototype.toString;
  const _Symbol = Symbol;
  let toStringTag = typeof Symbol === "function";
  if (typeof Symbol === "function") {
    const _Symbol2 = Symbol;
    toStringTag = Symbol.toStringTag;
  }
  const items = [];
  items.length = 1;
  let closure_9 = !(0 in items);
  function isDocumentDotAll() {
    return false;
  }
  const _document = document;
  if (typeof document === "object") {
    const _document3 = document;
    ({ call: call2, call } = toString);
    const _document2 = document;
    if (tmp11 === (typeof call === "unknown" ? toString() : call(all))) {
      isDocumentDotAll = function isDocumentDotAll(obj) {
        if (closure_9) {
          try {
            const call = toString.call;
            if (typeof call === "unknown") {
              let callResult = toString();
            } else {
              callResult = call(obj);
            }
            let tmp4 = "[object HTMLAllCollection]" === callResult;
            if (!tmp4) {
              tmp4 = "[object HTML document.all class]" === tmp3;
            }
            if (!tmp4) {
              tmp4 = "[object HTMLCollection]" === tmp3;
            }
            if (!tmp4) {
              tmp4 = "[object Object]" === tmp3;
            }
            if (tmp4) {
              tmp4 = null == obj("");
            }
            return tmp4;
          } catch (err) {
          }
        }
        return false;
      };
    }
    tmp11 = typeof call2 === "unknown" ? toString() : call2(all2);
  }
  module.exports = tmp3 ? (function isCallable(fn) {
    if (isDocumentDotAll(fn)) {
      return true;
    } else if (fn) {
      if (typeof fn !== "function") {
        if (typeof fn !== "object") {
          return false;
        }
      }
      try {
        _null(fn, null, closure_0);
        const tmp8 = isES6ClassFunction(fn);
        let tmp9 = !tmp8;
        if (!tmp8) {
          tmp9 = tryFunctionToStr(fn);
        }
        return tmp9;
      } catch (tmp5) {
        if (tmp5 !== obj) {
          return false;
        }
      }
    } else {
      return false;
    }
  }) : (function isCallable(fn) {
    if (isDocumentDotAll(fn)) {
      return true;
    } else if (fn) {
      if (typeof fn !== "function") {
        if (typeof fn !== "object") {
          return false;
        }
      }
      if (toStringTag) {
        return tryFunctionToStr(fn);
      } else if (isES6ClassFunction(fn)) {
        return false;
      } else {
        const call = toString.call;
        const tmp4 = typeof call === "unknown" ? toString() : call(fn);
        let tmp5 = "[object Function]" !== tmp4;
        if (tmp5) {
          tmp5 = "[object GeneratorFunction]" !== tmp4;
        }
        if (tmp5) {
          tmp5 = !/^\[object HTML/.test(tmp4);
          obj = /^\[object HTML/;
        }
        let tmp6 = !tmp5;
        if (!tmp5) {
          tmp6 = tryFunctionToStr(fn);
        }
        return tmp6;
      }
    } else {
      return false;
    }
  });
}
tmp3 = null;
c3 = null;