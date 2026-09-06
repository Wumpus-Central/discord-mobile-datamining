// === Module 692: ? ===

// Module 692
function isInstanceOf(arg0, arg1) {
  try {
    return arg0 instanceof arg1;
  } catch (err) {
    return false;
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const isDOMError = function isDOMError(arg0) {
  const call = toString.call;
  return (typeof call === "unknown" ? toString() : call(arg0)) === "[object " + "DOMError" + "]";
};
export const isDOMException = function isDOMException(arg0) {
  const call = toString.call;
  return (typeof call === "unknown" ? toString() : call(arg0)) === "[object " + "DOMException" + "]";
};
export const isElement = function isElement(arg0) {
  let tmp = typeof globalThis.Element !== "undefined";
  if (typeof globalThis.Element !== "undefined") {
    tmp = isInstanceOf(arg0, globalThis.Element);
  }
  return tmp;
};
export const isError = function isError(originalException) {
  const call = toString.call;
  const tmp2 = typeof call === "unknown" ? toString() : call(originalException);
  if ("[object Error]" !== tmp2) {
    if ("[object Exception]" !== tmp2) {
      if ("[object DOMException]" !== tmp2) {
        if ("[object WebAssembly.Exception]" !== tmp2) {
          const _Error = Error;
          return isInstanceOf(originalException, Error);
        }
      }
    }
  }
  return true;
};
export const isErrorEvent = function isErrorEvent(name) {
  const call = toString.call;
  return (typeof call === "unknown" ? toString() : call(name)) === "[object " + "ErrorEvent" + "]";
};
export const isEvent = function isEvent(type) {
  let tmp = typeof Event !== "undefined";
  if (typeof Event !== "undefined") {
    const _Event = Event;
    tmp = isInstanceOf(type, Event);
  }
  return tmp;
};
export { isInstanceOf };
export const isParameterizedString = function isParameterizedString(obj) {
  let tmp = typeof obj === "object";
  if (typeof obj === "object") {
    tmp = null !== obj;
  }
  if (tmp) {
    tmp = "__sentry_template_string__" in obj;
  }
  if (tmp) {
    tmp = "__sentry_template_values__" in obj;
  }
  return tmp;
};
export const isPlainObject = function isPlainObject(arg0) {
  const call = toString.call;
  return (typeof call === "unknown" ? toString() : call(arg0)) === "[object " + "Object" + "]";
};
export const isPrimitive = function isPrimitive(obj) {
  let tmp = null === obj;
  if (!tmp) {
    let tmp2 = typeof obj === "object";
    if (typeof obj === "object") {
      tmp2 = null !== obj;
    }
    if (tmp2) {
      tmp2 = "__sentry_template_string__" in obj;
    }
    if (tmp2) {
      tmp2 = "__sentry_template_values__" in obj;
    }
    tmp = tmp2;
  }
  if (!tmp) {
    let tmp3 = typeof obj !== "object";
    if (typeof obj !== "object") {
      tmp3 = typeof obj !== "function";
    }
    tmp = tmp3;
  }
  return tmp;
};
export const isRegExp = function isRegExp(test) {
  const call = toString.call;
  return (typeof call === "unknown" ? toString() : call(test)) === "[object " + "RegExp" + "]";
};
export const isRequest = function isRequest(headers) {
  let tmp = typeof Request !== "undefined";
  if (typeof Request !== "undefined") {
    const _Request = Request;
    tmp = isInstanceOf(headers, Request);
  }
  return tmp;
};
export const isString = function isString(className) {
  const call = toString.call;
  return (typeof call === "unknown" ? toString() : call(className)) === "[object " + "String" + "]";
};
export const isSyntheticEvent = function isSyntheticEvent(arg0) {
  const call = toString.call;
  let tmp3 = (typeof call === "unknown" ? toString() : call(arg0)) === "[object " + "Object" + "]";
  if (tmp3) {
    tmp3 = "nativeEvent" in arg0;
  }
  if (tmp3) {
    tmp3 = "preventDefault" in arg0;
  }
  if (tmp3) {
    tmp3 = "stopPropagation" in arg0;
  }
  return tmp3;
};
export const isThenable = function isThenable(tmpResult) {
  let then;
  if (tmpResult != null) {
    then = tmpResult.then;
  }
  if (then) {
    then = typeof tmpResult.then === "function";
  }
  return Boolean(then);
};
export const isVueViewModel = function isVueViewModel(__isVue) {
  let tmp = typeof __isVue !== "object";
  if (typeof __isVue === "object") {
    tmp = null === __isVue;
  }
  if (!tmp) {
    tmp = !(__isVue.__isVue || __isVue._isVue || __isVue.__v_isVNode);
    const tmp2 = __isVue.__isVue || __isVue._isVue || __isVue.__v_isVNode;
  }
  return !tmp;
};