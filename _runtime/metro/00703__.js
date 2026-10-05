// _runtime/metro/00703__.js
function isInstanceOf(arg0, arg1) {
  try {
    return arg0 instanceof arg1;
  } catch (err) {
    return false;
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const isDOMError = function isDOMError(arg0) {
  const callResult = toString.call(arg0);
  return callResult === "[object " + "DOMError" + "]";
};
export const isDOMException = function isDOMException(arg0) {
  const callResult = toString.call(arg0);
  return callResult === "[object " + "DOMException" + "]";
};
export const isElement = function isElement(arg0) {
  let tmp = typeof globalThis.Element !== "undefined";
  if (typeof globalThis.Element !== "undefined") {
    tmp = isInstanceOf(arg0, globalThis.Element);
  }
  return tmp;
};
export const isError = function isError(cause) {
  const callResult = toString.call(cause);
  if ("[object Error]" !== callResult) {
    if ("[object Exception]" !== callResult) {
      if ("[object DOMException]" !== callResult) {
        if ("[object WebAssembly.Exception]" !== callResult) {
          const _Error = Error;
          return isInstanceOf(cause, Error);
        }
      }
    }
  }
  return true;
};
export const isErrorEvent = function isErrorEvent(name) {
  const callResult = toString.call(name);
  return callResult === "[object " + "ErrorEvent" + "]";
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
export const isParameterizedString = function isParameterizedString(message) {
  let tmp = typeof message === "object";
  if (typeof message === "object") {
    tmp = null !== message;
  }
  if (tmp) {
    tmp = "__sentry_template_string__" in message;
  }
  if (tmp) {
    tmp = "__sentry_template_values__" in message;
  }
  return tmp;
};
export const isPlainObject = function isPlainObject(normalizeResult) {
  const callResult = toString.call(normalizeResult);
  return callResult === "[object " + "Object" + "]";
};
export const isPrimitive = function isPrimitive(item) {
  let tmp = null === item;
  if (!tmp) {
    let tmp2 = typeof item === "object";
    if (typeof item === "object") {
      tmp2 = null !== item;
    }
    if (tmp2) {
      tmp2 = "__sentry_template_string__" in item;
    }
    if (tmp2) {
      tmp2 = "__sentry_template_values__" in item;
    }
    tmp = tmp2;
  }
  if (!tmp) {
    let tmp3 = typeof item !== "object";
    if (typeof item !== "object") {
      tmp3 = typeof item !== "function";
    }
    tmp = tmp3;
  }
  return tmp;
};
export const isRegExp = function isRegExp(test) {
  const callResult = toString.call(test);
  return callResult === "[object " + "RegExp" + "]";
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
  const callResult = toString.call(className);
  return callResult === "[object " + "String" + "]";
};
export const isSyntheticEvent = function isSyntheticEvent(arg0) {
  const callResult = toString.call(arg0);
  const tmp2 =
    callResult === "[object " + "Object" + "]" &&
    "nativeEvent" in arg0 &&
    "preventDefault" in arg0 &&
    "stopPropagation" in arg0;
  return tmp2;
};
export const isThenable = function isThenable(promise) {
  let then;
  const _Boolean = Boolean;
  if (promise != null) {
    then = promise.then;
  }
  if (then) {
    then = typeof promise.then === "function";
  }
  return _Boolean(then);
};
export const isVueViewModel = function isVueViewModel(__isVue) {
  let tmp = typeof __isVue !== "object" || null === __isVue;
  if (!tmp) {
    tmp = !(__isVue.__isVue || __isVue._isVue || __isVue.__v_isVNode);
  }
  return !tmp;
};
