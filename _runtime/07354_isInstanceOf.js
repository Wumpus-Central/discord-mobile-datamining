// _runtime/07354_isInstanceOf.js
function isInstanceOf(arg0, arg1) {
  try {
    return arg0 instanceof arg1;
  } catch (err) {
    return false;
  }
}
arg5.isDOMError = function isDOMError(arg0) {
  const call = toString.call;
  return (typeof call === "unknown" ? toString() : call(arg0)) === "[object " + "DOMError" + "]";
};
arg5.isDOMException = function isDOMException(arg0) {
  const call = toString.call;
  return (typeof call === "unknown" ? toString() : call(arg0)) === "[object " + "DOMException" + "]";
};
arg5.isElement = function isElement(arg0) {
  let tmp = typeof globalThis.Element !== "undefined";
  if (typeof globalThis.Element !== "undefined") {
    tmp = isInstanceOf(arg0, globalThis.Element);
  }
  return tmp;
};
arg5.isError = function isError(arg0) {
  const call = toString.call;
  const tmp2 = typeof call === "unknown" ? toString() : call(arg0);
  if ("[object Error]" !== tmp2) {
    if ("[object Exception]" !== tmp2) {
      if ("[object DOMException]" !== tmp2) {
        if ("[object WebAssembly.Exception]" !== tmp2) {
          const _Error = Error;
          return isInstanceOf(arg0, Error);
        }
      }
    }
  }
  return true;
};
arg5.isErrorEvent = function isErrorEvent(arg0) {
  const call = toString.call;
  return (typeof call === "unknown" ? toString() : call(arg0)) === "[object " + "ErrorEvent" + "]";
};
arg5.isEvent = function isEvent(arg0) {
  let tmp = typeof Event !== "undefined";
  if (typeof Event !== "undefined") {
    const _Event = Event;
    tmp = isInstanceOf(arg0, Event);
  }
  return tmp;
};
arg5.isInstanceOf = isInstanceOf;
arg5.isParameterizedString = function isParameterizedString(obj) {
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
arg5.isPlainObject = function isPlainObject(arg0) {
  const call = toString.call;
  return (typeof call === "unknown" ? toString() : call(arg0)) === "[object " + "Object" + "]";
};
arg5.isPrimitive = function isPrimitive(obj) {
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
arg5.isRegExp = function isRegExp(arg0) {
  const call = toString.call;
  return (typeof call === "unknown" ? toString() : call(arg0)) === "[object " + "RegExp" + "]";
};
arg5.isString = function isString(arg0) {
  const call = toString.call;
  return (typeof call === "unknown" ? toString() : call(arg0)) === "[object " + "String" + "]";
};
arg5.isSyntheticEvent = function isSyntheticEvent(arg0) {
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
arg5.isThenable = function isThenable(arg0) {
  let then = arg0;
  if (arg0) {
    then = arg0.then;
  }
  if (then) {
    then = typeof arg0.then === "function";
  }
  return Boolean(then);
};
arg5.isVueViewModel = function isVueViewModel(obj) {
  let tmp = typeof obj !== "object";
  if (typeof obj === "object") {
    tmp = null === obj;
  }
  if (!tmp) {
    const __isVue = obj.__isVue;
    let tmp2 = !__isVue;
    if (!__isVue) {
      tmp2 = !obj._isVue;
    }
    tmp = tmp2;
  }
  return !tmp;
};