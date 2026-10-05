// _runtime/metro/12572__.js
function isInstanceOf(arg0, arg1) {
  try {
    return arg0 instanceof arg1;
  } catch (err) {
    return false;
  }
}

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
export const isError = function isError(originalException) {
  const callResult = toString.call(originalException);
  if ("[object Error]" !== callResult) {
    if ("[object Exception]" !== callResult) {
      if ("[object DOMException]" !== callResult) {
        if ("[object WebAssembly.Exception]" !== callResult) {
          const _Error = Error;
          return isInstanceOf(originalException, Error);
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
export const isParameterizedString = function isParameterizedString(value) {
  let tmp = typeof value === "object";
  if (typeof value === "object") {
    tmp = null !== value;
  }
  if (tmp) {
    tmp = "__sentry_template_string__" in value;
  }
  if (tmp) {
    tmp = "__sentry_template_values__" in value;
  }
  return tmp;
};
export const isPlainObject = function isPlainObject(user) {
  const callResult = toString.call(user);
  return callResult === "[object " + "Object" + "]";
};
export const isPrimitive = function isPrimitive(value) {
  let tmp = null === value;
  if (!tmp) {
    let tmp2 = typeof value === "object";
    if (typeof value === "object") {
      tmp2 = null !== value;
    }
    if (tmp2) {
      tmp2 = "__sentry_template_string__" in value;
    }
    if (tmp2) {
      tmp2 = "__sentry_template_values__" in value;
    }
    tmp = tmp2;
  }
  if (!tmp) {
    let tmp3 = typeof value !== "object";
    if (typeof value !== "object") {
      tmp3 = typeof value !== "function";
    }
    tmp = tmp3;
  }
  return tmp;
};
export const isRegExp = function isRegExp(test) {
  const callResult = toString.call(test);
  return callResult === "[object " + "RegExp" + "]";
};
export const isString = function isString(body) {
  const callResult = toString.call(body);
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
  let then = promise;
  const _Boolean = Boolean;
  if (promise) {
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
    tmp = !__isVue.__isVue && !__isVue._isVue;
  }
  return !tmp;
};
