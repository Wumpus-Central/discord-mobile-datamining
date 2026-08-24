// === Module 1028: ignoreNextOnError ===

// Module 1028 (ignoreNextOnError)
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation" /* 817 */;

function ignoreNextOnError() {
  closure_2 = closure_2 + 1;
  const timerId = setTimeout(() => {
    closure_2 = closure_2 - 1;
  });
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let c2 = 0;
function wrap(__sentry_wrapped__) {
  const _require = __sentry_wrapped__;
  let obj = arg1;
  let tmp2;
  if (arg1 === undefined) {
    obj = {};
  }
  if ((function isFunction(fn) {
    return typeof fn === "function";
  })(__sentry_wrapped__)) {
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
              return items.apply(this, items.map((arg0) => closure_1_4(arg0, closure_1)));
            } catch (tmp2) {
              obj = tmp2;
              closure_1_3();
              obj = __sentry_wrapped__(obj[0]);
              obj.withScope((addEventProcessor) => {
                addEventProcessor.addEventProcessor((extra) => {
                  if (closure_1_1.mechanism) {
                    obj = items(817);
                    const result = obj.addExceptionTypeValue(extra, undefined, undefined);
                    const result1 = items(817).addExceptionMechanism(extra, tmp.mechanism);
                    const obj2 = items(817);
                  }
                  obj = {};
                  const merged = Object.assign(extra.extra);
                  obj.arguments = closure_0;
                  extra.extra = obj;
                  return extra;
                });
                obj = items(obj[0]);
                obj.captureException(closure_1);
              });
              throw tmp2;
            }
          }
          try {
            for (const key10019 in arg0) {
              let tmp17 = key10019;
              let _Object = Object;
              let call = hasOwnProperty.call;
              let tmp16 = key10019;
              if (typeof call === "unknown") {
                let hasOwnPropertyResult = hasOwnProperty(key10019);
              } else {
                hasOwnPropertyResult = call(arg0, key10019);
              }
              if (!hasOwnPropertyResult) {
                continue;
              } else {
                let tmp9 = tmp16;
                sentryWrapped[tmp17] = arg0[tmp17];
                continue;
              }
              continue;
            }
            _require(obj[0]).markFunctionWrapped(sentryWrapped, __sentry_wrapped__);
            tmp2 = _require(obj[0]);
            let result = tmp2.addNonEnumerableProperty(__sentry_wrapped__, "__sentry_wrapped__", sentryWrapped);
            const obj3 = _require(obj[0]);
          } catch (err) {
          }
        }
        obj2 = _require(obj[0]);
      }
    } catch (err) {
      return tmp;
    }
  } else {
    return __sentry_wrapped__;
  }
}

export const WINDOW = registerSpanErrorInstrumentation.GLOBAL_OBJ;
export const getHttpRequestData = function getHttpRequestData() {
  let obj = registerSpanErrorInstrumentation;
  const locationHref = obj.getLocationHref();
  const referrer = registerSpanErrorInstrumentation.GLOBAL_OBJ.document || {}.referrer;
  const tmp = require;
  const tmp4 = registerSpanErrorInstrumentation.GLOBAL_OBJ.document || {};
  const userAgent = registerSpanErrorInstrumentation.GLOBAL_OBJ.navigator || {}.userAgent;
  obj = { url: locationHref, headers: null };
  let tmp6 = referrer;
  if (referrer) {
    obj = { Referer: null };
    obj[0] = referrer;
    tmp6 = obj;
  }
  const merged = Object.assign(tmp6);
  let tmp8 = userAgent;
  if (userAgent) {
    const obj2 = { "User-Agent": null };
    obj2[0] = userAgent;
    tmp8 = obj2;
  }
  const merged1 = Object.assign(tmp8);
  obj[1] = {};
  return obj;
};
export { ignoreNextOnError };
export function shouldIgnoreOnError() {
  return c2 > 0;
}
export { wrap };