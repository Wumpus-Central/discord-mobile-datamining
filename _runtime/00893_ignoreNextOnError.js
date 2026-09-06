// _runtime/00893_ignoreNextOnError.js
import _mod682 from "metro/00682__.js";

function ignoreNextOnError() {
  closure_2 = closure_2 + 1;
  const timerId = setTimeout(() => {
    closure_2 = closure_2 - 1;
  });
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_2 = 0;
function wrap(__sentry_wrapped__) {
  _require = __sentry_wrapped__;
  let tmp2;
  if (extra === undefined) {
    extra = {};
  }
  if (
    (function isFunction(fn) {
      return typeof fn === "function";
    })(__sentry_wrapped__)
  ) {
    try {
      __sentry_wrapped__ = __sentry_wrapped__.__sentry_wrapped__;
      if (__sentry_wrapped__) {
        let tmp15 = __sentry_wrapped__;
        if (typeof tmp3 === "function") {
          tmp15 = __sentry_wrapped__;
        }
        return tmp15;
      } else {
        if (obj2.getOriginalFunction(__sentry_wrapped__)) {
          return __sentry_wrapped__;
        } else {
          function sentryWrapped() {
            const items = [...arguments];
            try {
              const self = this;
              return items.apply(
                this,
                items.map((item) => wrap(item, closure_1)),
              );
            } catch (tmp2) {
              let obj = tmp2;
              ignoreNextOnError();
              obj = __sentry_wrapped__(obj[0]);
              obj.withScope((addEventProcessor) => {
                addEventProcessor.addEventProcessor((extra) => {
                  if (mechanism.mechanism) {
                    extra = _arguments(extra[0]);
                    const result = extra.addExceptionTypeValue(extra, undefined, undefined);
                    const result1 = _arguments(extra[0]).addExceptionMechanism(extra, tmp.mechanism);
                    const obj2 = _arguments(extra[0]);
                  }
                  extra = {};
                  const merged = Object.assign(extra.extra);
                  extra.arguments = _arguments;
                  extra.extra = extra;
                  return extra;
                });
                _mod682.captureException(mechanism);
              });
              throw tmp2;
            }
          }
          try {
            for (const key10019 in arg0) {
              let _Object = Object;
              hasOwnProperty = Object.prototype.hasOwnProperty;
              let call = hasOwnProperty.call;
              if (typeof call === "unknown") {
                let hasOwnPropertyResult = hasOwnProperty(key10019);
              } else {
                hasOwnPropertyResult = call(arg0, key10019);
              }
              if (!hasOwnPropertyResult) {
                continue;
              } else {
                sentryWrapped[key10019] = arg0[key10019];
                continue;
              }
              continue;
            }
            require("metro/00682__.js").markFunctionWrapped(sentryWrapped, __sentry_wrapped__);
            tmp2 = require("metro/00682__.js");
            let result = tmp2.addNonEnumerableProperty(__sentry_wrapped__, "__sentry_wrapped__", sentryWrapped);
            const obj3 = require("metro/00682__.js");
          } catch (err) {}
        }
        obj2 = require("metro/00682__.js");
      }
    } catch (err) {
      return tmp;
    }
  } else {
    return __sentry_wrapped__;
  }
}

export const WINDOW = _mod682.GLOBAL_OBJ;
export const getHttpRequestData = function getHttpRequestData() {
  let obj = _mod682;
  const locationHref = obj.getLocationHref();
  const referrer = _mod682.GLOBAL_OBJ.document || {}.referrer;
  const tmp4 = _mod682.GLOBAL_OBJ.document || {};
  const userAgent = _mod682.GLOBAL_OBJ.navigator || {}.userAgent;
  obj = { url: locationHref, headers: null };
  let tmp6 = referrer;
  if (referrer) {
    obj = { Referer: referrer };
    tmp6 = obj;
  }
  const merged = Object.assign(tmp6);
  let tmp8 = userAgent;
  if (userAgent) {
    const obj2 = { "User-Agent": userAgent };
    tmp8 = obj2;
  }
  const merged1 = Object.assign(tmp8);
  obj.headers = {};
  return obj;
};
export { ignoreNextOnError };
export function shouldIgnoreOnError() {
  return closure_2 > 0;
}
export { wrap };
