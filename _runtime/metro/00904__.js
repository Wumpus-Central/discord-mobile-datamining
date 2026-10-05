// _runtime/metro/00904__.js
import _mod693 from "00693__.js";

const require = globalThis.__r;
let _require, hasOwnProperty;

function ignoreNextOnError() {
  closure_2 = closure_2 + 1;
  const timerId = setTimeout(() => {
    closure_2 = closure_2 - 1;
  });
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_2 = 0;
function wrap(__sentry_wrapped__) {
  let tmp;
  function isFunction(fn) {
    return typeof fn === "function";
  }
  _require = __sentry_wrapped__;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  if (isFunction(__sentry_wrapped__)) {
    try {
      __sentry_wrapped__ = __sentry_wrapped__.__sentry_wrapped__;
      if (__sentry_wrapped__) {
        let tmp14 = __sentry_wrapped__;
        if (typeof tmp === "function") {
          tmp14 = __sentry_wrapped__;
        }
        return tmp14;
      } else {
        const tmp2 = _require;
        let obj2 = require("00693__.js");
        if (obj2.getOriginalFunction(__sentry_wrapped__)) {
          return __sentry_wrapped__;
        } else {
          function sentryWrapped() {
            let closure_1;
            const items = [...arguments];
            try {
              const self = this;
              const tmp = items;
              return items.apply(
                this,
                items.map((item) => wrap(item, obj)),
              );
            } catch (tmp2) {
              obj = tmp2;
              ignoreNextOnError();
              obj = __sentry_wrapped__(obj[0]);
              obj.withScope((addEventProcessor) => {
                let _arguments;
                addEventProcessor.addEventProcessor((extra) => {
                  if (mechanism.mechanism) {
                    obj = _arguments(obj[0]);
                    const result = obj.addExceptionTypeValue(extra, undefined, undefined);
                    const obj2 = _arguments(obj[0]);
                    const result1 = obj2.addExceptionMechanism(extra, tmp.mechanism);
                  }
                  const obj3 = { arguments: _arguments };
                  const merged = Object.assign(extra.extra);
                  extra.extra = obj3;
                  return extra;
                });
                obj = _mod693;
                obj.captureException(mechanism);
              });
              throw tmp2;
            }
          }
          try {
            for (const key10019 in __sentry_wrapped__) {
              let _Object3 = Object;
              hasOwnProperty = Object.prototype.hasOwnProperty;
              if (!hasOwnProperty.call(__sentry_wrapped__, key10019)) {
                continue;
              } else {
                sentryWrapped[key10019] = __sentry_wrapped__[key10019];
                continue;
              }
              continue;
            }
            let obj3 = require("00693__.js");
            obj3.markFunctionWrapped(sentryWrapped, __sentry_wrapped__);
            const obj4 = require("00693__.js");
            let result = obj4.addNonEnumerableProperty(__sentry_wrapped__, "__sentry_wrapped__", sentryWrapped);
            try {
              const _Object = Object;
              if (Object.getOwnPropertyDescriptor(sentryWrapped, "name").configurable) {
                const _Object2 = Object;
                const obj5 = {
                  get() {
                    return __sentry_wrapped__.name;
                  },
                };
                Object.defineProperty(sentryWrapped, "name", obj5);
              }
            } catch (err) {}
            return sentryWrapped;
          } catch (err) {}
        }
      }
    } catch (err) {
      return __sentry_wrapped__;
    }
  } else {
    return __sentry_wrapped__;
  }
}

export const WINDOW = _mod693.GLOBAL_OBJ;
export const getHttpRequestData = function getHttpRequestData() {
  let obj4;
  const obj = _mod693;
  const locationHref = obj.getLocationHref();
  const referrer = (_mod693.GLOBAL_OBJ.document || {}).referrer;
  _mod693.GLOBAL_OBJ.document || {};
  const userAgent = (_mod693.GLOBAL_OBJ.navigator || {}).userAgent;
  let tmp6 = referrer;
  const obj2 = { url: locationHref, headers: obj4 };
  _mod693.GLOBAL_OBJ.navigator || {};
  if (tmp6) {
    tmp6 = { Referer: referrer };
    const obj3 = { Referer: referrer };
  }
  obj4 = {};
  const merged = Object.assign(tmp6);
  let tmp8 = userAgent;
  if (tmp8) {
    tmp8 = { "User-Agent": userAgent };
    const obj5 = { "User-Agent": userAgent };
  }
  const merged1 = Object.assign(tmp8);
  return obj2;
};
export { ignoreNextOnError };
export function shouldIgnoreOnError() {
  return closure_2 > 0;
}
export { wrap };
