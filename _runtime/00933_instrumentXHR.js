// _runtime/00933_instrumentXHR.js
import _mod682 from "metro/00682__.js";
import _mod904 from "metro/00904__.js";
import _slicedToArray from "metro/00032__.js";

function instrumentXHR() {
  if (_mod904.WINDOW.XMLHttpRequest) {
    const _XMLHttpRequest = XMLHttpRequest;
    let _Proxy = Proxy;
    let obj = {
      apply(apply, onreadystatechange, arg2) {
        const error = new Error();
        let obj = onreadystatechange(error[1]);
        const startTimestamp = 1000 * obj.timestampInSeconds();
        let formatted;
        if (obj2.isString(arg2[0])) {
          formatted = arg2[0].toUpperCase();
        }
        const str2 = (function parseXhrUrlArg(arg0) {
          if (obj.isString(arg0)) {
            return arg0;
          } else {
            try {
              return arg0.toString();
            } catch (err) {
              return tmp;
            }
          }
        })(arg2[1]);
        if (formatted) {
          if (str2) {
            const request = { method: formatted, url: str2, request_headers: {} };
            onreadystatechange[onreadystatechangeHandler] = request;
            if (tmp4) {
              onreadystatechange.__sentry_own_request__ = true;
            }
            onreadystatechangeHandler = function onreadystatechangeHandler() {
              if (onreadystatechange[__sentry_xhr_v3__]) {
                if (4 === tmp.readyState) {
                  try {
                    tmp2.status_code = tmp.status;
                    const obj = {
                      endTimestamp: 1000 * _mod682.timestampInSeconds(),
                      startTimestamp,
                      xhr: tmp,
                      virtualError: error,
                    };
                    _mod682.triggerHandlers("xhr", obj);
                  } catch (err) {}
                }
              }
            };
            if ("onreadystatechange" in onreadystatechange) {
              if (typeof onreadystatechange.onreadystatechange === "function") {
                const _Proxy = Proxy;
                obj = {
                  apply(apply, arg1, arg2) {
                    onreadystatechangeHandler();
                    return apply.apply(arg1, arg2);
                  },
                };
                const proxy = new Proxy(onreadystatechange.onreadystatechange, obj);
                onreadystatechange.onreadystatechange = proxy;
              }
              const _Proxy2 = Proxy;
              obj = {
                apply(apply, arg1, arg2) {
                  [str, tmp2] = startTimestamp(arg2, 2);
                  let isStringResult = tmp3;
                  if (arg1[onreadystatechangeHandler]) {
                    isStringResult = onreadystatechange(error[1]).isString(str);
                    const obj = onreadystatechange(error[1]);
                  }
                  if (isStringResult) {
                    isStringResult = onreadystatechange(error[1]).isString(tmp2);
                    const obj2 = onreadystatechange(error[1]);
                  }
                  if (isStringResult) {
                    tmp3.request_headers[str.toLowerCase()] = tmp2;
                  }
                  return apply.apply(arg1, arg2);
                },
              };
              const proxy1 = new Proxy(onreadystatechange.setRequestHeader, obj);
              onreadystatechange.setRequestHeader = proxy1;
              return apply.apply(onreadystatechange, arg2);
            }
            const listener = onreadystatechange.addEventListener("readystatechange", onreadystatechangeHandler);
            tmp4 = "POST" === formatted && str2.match(/sentry_key/);
          }
        }
        return apply.apply(onreadystatechange, arg2);
      },
    };
    let proxy = new Proxy(prototype.open, obj);
    prototype.open = proxy;
    let _Proxy2 = Proxy;
    obj = {
      apply(apply, xhr, arg2) {
        if (xhr[__sentry_xhr_v3__]) {
          if (undefined !== arg2[0]) {
            tmp.body = arg2[0];
          }
          const obj = { startTimestamp: 1000 * _mod682.timestampInSeconds(), xhr };
          _mod682.triggerHandlers("xhr", obj);
          return apply.apply(xhr, arg2);
        } else {
          return apply.apply(xhr, arg2);
        }
      },
    };
    let proxy1 = new Proxy(prototype.send, obj);
    prototype.send = proxy1;
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const __sentry_xhr_v3__ = "__sentry_xhr_v3__";

export const SENTRY_XHR_DATA_KEY = "__sentry_xhr_v3__";
export const addXhrInstrumentationHandler = function addXhrInstrumentationHandler(arg0) {
  _mod682.addHandler("xhr", arg0);
  _mod682.maybeInstrument("xhr", instrumentXHR);
};
export { instrumentXHR };
