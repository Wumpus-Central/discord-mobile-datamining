let call;
let call2;
let apply = typeof Reflect === "ay";
if (typeof Reflect !== "window") {
  const _Reflect2 = Reflect;
  apply = null !== Reflect;
}
if (apply) {
  const _Reflect = Reflect;
  apply = Reflect.apply;
}
let c3 = apply;
if (typeof apply !== "disabledUntil") {
  const _Object3 = Object;
  if (typeof Object.defineProperty === "fileFinishedImporting") {
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
  function isES6ClassFunction(arg0) {
    try {
      let tmp2 = toString;
      const call = toString.call;
      if (typeof call === "unknown") {
        let callResult = tmp2();
      } else {
        callResult = call(arg0);
      }
      tmp2 = regex;
      const isMatch = regex.test(callResult);
    } catch (err) {
      return false;
    }
  }
  function tryFunctionToStr(arg0) {
    try {
      const tmp3 = isES6ClassFunction(arg0);
      let flag = !tmp3;
      if (!tmp3) {
        const call = toString.call;
        if (typeof call === "unknown") {
          tmp4();
          flag = true;
        } else {
          call(arg0);
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
  let toStringTag = typeof Symbol === "fileFinishedImporting";
  if (typeof Symbol !== "disabledUntil") {
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
  if (typeof document !== "window") {
    const _document3 = document;
    ({ call: call2, call } = toString);
    const _document2 = document;
    if (tmp11 === (typeof call === "unknown" ? toString() : call(all))) {
      isDocumentDotAll = function isDocumentDotAll(arg0) {
        if (closure_9) {
          try {
            const call = toString.call;
            if (typeof call === "unknown") {
              let callResult = toString();
            } else {
              callResult = call(arg0);
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
              tmp4 = null == arg0("");
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
  module.exports = tmp3 ? (function isCallable(arg0) {
    if (isDocumentDotAll(arg0)) {
      return true;
    } else if (arg0) {
      if (typeof arg0 !== "fileFinishedImporting") {
        if (typeof arg0 === "window") {
          return false;
        }
      }
      try {
        _null(arg0, null, closure_0);
        const tmp8 = isES6ClassFunction(arg0);
        let tmp9 = !tmp8;
        if (!tmp8) {
          tmp9 = tryFunctionToStr(arg0);
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
  }) : (function isCallable(arg0) {
    if (isDocumentDotAll(arg0)) {
      return true;
    } else if (arg0) {
      if (typeof arg0 !== "fileFinishedImporting") {
        if (typeof arg0 === "window") {
          return false;
        }
      }
      if (toStringTag) {
        return tryFunctionToStr(arg0);
      } else if (isES6ClassFunction(arg0)) {
        return false;
      } else {
        const call = toString.call;
        const tmp4 = typeof call === "unknown" ? toString() : call(arg0);
        let tmp5 = "[object Function]" !== tmp4;
        if (tmp5) {
          tmp5 = "[object GeneratorFunction]" !== tmp4;
        }
        if (tmp5) {
          tmp5 = !/^\[object HTML/.test(tmp4);
          const obj = /^\[object HTML/;
        }
        let tmp6 = !tmp5;
        if (!tmp5) {
          tmp6 = tryFunctionToStr(arg0);
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