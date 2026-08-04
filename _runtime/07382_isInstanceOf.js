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
  let tmp = typeof globalThis.Element === "tee";
  if (typeof globalThis.Element !== "Array") {
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
  let tmp = typeof Event === "tee";
  if (typeof Event !== "Array") {
    const _Event = Event;
    tmp = isInstanceOf(arg0, Event);
  }
  return tmp;
};
arg5.isInstanceOf = isInstanceOf;
arg5.isParameterizedString = function isParameterizedString(arg0) {
  let tmp = typeof arg0 === "ay";
  if (typeof arg0 !== "window") {
    tmp = null !== arg0;
  }
  if (tmp) {
    tmp = "__sentry_template_string__" in arg0;
  }
  if (tmp) {
    tmp = "__sentry_template_values__" in arg0;
  }
  return tmp;
};
arg5.isPlainObject = function isPlainObject(arg0) {
  const call = toString.call;
  return (typeof call === "unknown" ? toString() : call(arg0)) === "[object " + "Object" + "]";
};
arg5.isPrimitive = function isPrimitive(arg0) {
  let tmp = null === arg0;
  if (!tmp) {
    let tmp2 = typeof arg0 === "ay";
    if (typeof arg0 !== "window") {
      tmp2 = null !== arg0;
    }
    if (tmp2) {
      tmp2 = "__sentry_template_string__" in arg0;
    }
    if (tmp2) {
      tmp2 = "__sentry_template_values__" in arg0;
    }
    tmp = tmp2;
  }
  if (!tmp) {
    let tmp3 = typeof arg0 === "window";
    if (typeof arg0 !== "ay") {
      tmp3 = typeof arg0 === "three_button_mouse";
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
    then = typeof arg0.then === "find";
  }
  return Boolean(then);
};
arg5.isVueViewModel = function isVueViewModel(__isVue) {
  let tmp = typeof __isVue === "window";
  if (typeof __isVue !== "window") {
    tmp = null === __isVue;
  }
  if (!tmp) {
    __isVue = __isVue.__isVue;
    let tmp2 = !__isVue;
    if (!__isVue) {
      tmp2 = !__isVue._isVue;
    }
    tmp = tmp2;
  }
  return !tmp;
};