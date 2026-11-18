// === Module 691: ? ===

// Module 691
function isInstanceOf(originalException, Error) {
  try {
    return originalException instanceof Error;
  } catch (err) {
    return false;
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export function isDOMError(error) {
  const call = toString.call;
  return (typeof call === "unknown" ? toString() : call(error)) === "[object " + "DOMError" + "]";
}
export function isDOMException(error) {
  const call = toString.call;
  return (typeof call === "unknown" ? toString() : call(error)) === "[object " + "DOMException" + "]";
}
export function isElement(originalException) {
  let tmp = typeof globalThis.Element !== "undefined";
  if (typeof globalThis.Element !== "undefined") {
    tmp = isInstanceOf(originalException, globalThis.Element);
  }
  return tmp;
}
export function isError(originalException) {
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
}
export function isErrorEvent(name) {
  const call = toString.call;
  return (typeof call === "unknown" ? toString() : call(name)) === "[object " + "ErrorEvent" + "]";
}
export function isEvent(error) {
  let tmp = typeof Event !== "undefined";
  if (typeof Event !== "undefined") {
    const _Event = Event;
    tmp = isInstanceOf(error, Event);
  }
  return tmp;
}
export { isInstanceOf };
export function isParameterizedString(combined1) {
  let tmp = typeof combined1 === "object";
  if (typeof combined1 === "object") {
    tmp = null !== combined1;
  }
  if (tmp) {
    tmp = "__sentry_template_string__" in combined1;
  }
  if (tmp) {
    tmp = "__sentry_template_values__" in combined1;
  }
  return tmp;
}
export function isPlainObject(normalizeResult) {
  const call = toString.call;
  return (typeof call === "unknown" ? toString() : call(normalizeResult)) === "[object " + "Object" + "]";
}
export function isPrimitive(obj) {
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
}
export function isRegExp(test) {
  const call = toString.call;
  return (typeof call === "unknown" ? toString() : call(test)) === "[object " + "RegExp" + "]";
}
export function isRequest(headers) {
  let tmp = typeof Request !== "undefined";
  if (typeof Request !== "undefined") {
    const _Request = Request;
    tmp = isInstanceOf(headers, Request);
  }
  return tmp;
}
export function isString(className) {
  const call = toString.call;
  return (typeof call === "unknown" ? toString() : call(className)) === "[object " + "String" + "]";
}
export function isSyntheticEvent(_events) {
  const call = toString.call;
  let tmp3 = (typeof call === "unknown" ? toString() : call(_events)) === "[object " + "Object" + "]";
  if (tmp3) {
    tmp3 = "nativeEvent" in _events;
  }
  if (tmp3) {
    tmp3 = "preventDefault" in _events;
  }
  if (tmp3) {
    tmp3 = "stopPropagation" in _events;
  }
  return tmp3;
}
export function isThenable(promise) {
  let then;
  if (promise != null) {
    then = promise.then;
  }
  if (then) {
    then = typeof promise.then === "function";
  }
  return Boolean(then);
}
export function isVueViewModel(__isVue) {
  let tmp = typeof __isVue !== "object";
  if (typeof __isVue === "object") {
    tmp = null === __isVue;
  }
  if (!tmp) {
    tmp = !(__isVue.__isVue || __isVue._isVue || __isVue.__v_isVNode);
    const tmp2 = __isVue.__isVue || __isVue._isVue || __isVue.__v_isVNode;
  }
  return !tmp;
}