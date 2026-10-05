// === Module 1460: ? ===

// Module 1460
let toString;

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
  let tmp2;
  const _Object3 = Object;
  if (typeof Object.defineProperty === "function") {
    let tmp;
    try {
      const _Object = Object;
      let obj = {
        get() {
                throw obj2;
              }
      };
      const definePropertyResult = Object.defineProperty({}, "length", obj);
      const _window = definePropertyResult;
      const obj2 = {};
      let tmp4 = null;
      apply(() => {
        throw 42;
      }, null, definePropertyResult);
      tmp2 = apply;
      tmp = obj2;
    } catch (tmp6) {
      tmp2 = apply;
      if (tmp6 !== tmp) {
        c3 = null;
        tmp2 = null;
      }
    }
  }
  const re4 = /^\s*class\b/;
  function isES6ClassFunction(fn) {
    try {
      return re4.test(toString.call(fn));
    } catch (err) {
      return false;
    }
  }
  function tryFunctionToStr(fn) {
    try {
      let flag = !isES6ClassFunction(fn);
      const tmp3 = isES6ClassFunction(fn);
      if (flag) {
        toString.call(fn);
        flag = true;
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
    const _document2 = document;
    let callResult = toString.call(document.all);
    if (callResult === toString.call(document.all)) {
      isDocumentDotAll = function isDocumentDotAll(fn) {
        if (closure_9) {
          try {
            const callResult = toString.call(fn);
            const tmp4 = ("[object HTMLAllCollection]" === callResult || "[object HTML document.all class]" === tmp3 || "[object HTMLCollection]" === tmp3 || "[object Object]" === tmp3) && null == fn("");
            return tmp4;
          } catch (err) {
          }
        }
        return false;
      };
    }
  }
  module.exports = tmp2 ? (function isCallable(fn) {
    if (isDocumentDotAll(fn)) {
      return true;
    } else if (fn) {
      if (typeof fn !== "function") {
        if (typeof fn !== "object") {
          return false;
        }
      }
      try {
        _null(fn, null, _window);
      } catch (tmp5) {
        if (tmp5 !== obj2) {
          return false;
        }
      }
      let tmp9 = !isES6ClassFunction(fn);
      isES6ClassFunction(fn);
      if (tmp9) {
        tmp9 = tryFunctionToStr(fn);
      }
      return tmp9;
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
        const callResult = toString.call(fn);
        let tmp4 = "[object Function]" !== callResult && "[object GeneratorFunction]" !== callResult;
        if (tmp4) {
          const obj = /^\[object HTML/;
          tmp4 = !obj.test(callResult);
        }
        const tmp5 = !tmp4 && tryFunctionToStr(fn);
        return tmp5;
      }
    } else {
      return false;
    }
  });
}
tmp2 = null;
c3 = null;