// === Module 944: SENTRY_XHR_DATA_KEY ===

// Module 944 (SENTRY_XHR_DATA_KEY)
import _mod693 from "module_693" /* 693 */;
import _mod915 from "module_915" /* 915 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

function instrumentXHR() {
  if (_mod915.WINDOW.XMLHttpRequest) {
    const tmp = globalThis;
    const _XMLHttpRequest = XMLHttpRequest;
    let _Proxy = Proxy;
    let obj = {
      apply(apply, onreadystatechange, arg2) {
          let onreadystatechangeHandler;
          function parseXhrUrlArg(arg0) {
            const obj = onreadystatechange(error[1]);
            if (obj.isString(arg0)) {
              return arg0;
            } else {
              try {
                return arg0.toString();
              } catch (err) {
              }
            }
          }
          const error = new Error();
          let obj = onreadystatechange(error[1]);
          const startTimestamp = 1000 * obj.timestampInSeconds();
          let obj2 = onreadystatechange(error[1]);
          let formatted;
          if (obj2.isString(arg2[0])) {
            const str = arg2[0];
            formatted = str.toUpperCase();
          }
          const str2 = parseXhrUrlArg(arg2[1]);
          if (formatted) {
            if (str2) {
              const tmp3 = onreadystatechangeHandler;
              const request = { method: formatted, url: str2, request_headers: {} };
              onreadystatechange[onreadystatechangeHandler] = request;
              const tmp4 = "POST" === formatted && str2.match(/sentry_key/);
              if (tmp4) {
                onreadystatechange.__sentry_own_request__ = true;
              }
              onreadystatechangeHandler = function onreadystatechangeHandler() {
                let obj2;
                if (onreadystatechange[__sentry_xhr_v3__]) {
                  if (4 === onreadystatechange.readyState) {
                    try {
                      onreadystatechange[__sentry_xhr_v3__].status_code = onreadystatechange.status;
                    } catch (err) {
                    }
                    const obj = { endTimestamp: 1000 * obj2.timestampInSeconds(), startTimestamp, xhr: onreadystatechange, virtualError: error };
                    obj2 = _mod693;
                    const obj3 = _mod693;
                    obj3.triggerHandlers("xhr", obj);
                  }
                }
              };
              if ("onreadystatechange" in onreadystatechange) {
                if (typeof onreadystatechange.onreadystatechange === "function") {
                  const _Proxy = Proxy;
                  let obj3 = {
                    apply(apply, arg1, arg2) {
                              onreadystatechangeHandler();
                              return apply.apply(arg1, arg2);
                            }
                  };
                  const self = this;
                  const self2 = this;
                  const proxy = new Proxy(onreadystatechange.onreadystatechange, obj3);
                  onreadystatechange.onreadystatechange = proxy;
                }
                const _Proxy2 = Proxy;
                const self3 = this;
                const self4 = this;
                const obj4 = {
                  apply(apply, arg1, arg2) {
                          let str;
                          let tmp2;
                          [str, tmp2] = startTimestamp(arg2, 2);
                          let isStringResult = tmp3;
                          startTimestamp(arg2, 2);
                          if (isStringResult) {
                            const obj = onreadystatechange(error[1]);
                            isStringResult = obj.isString(str);
                          }
                          if (isStringResult) {
                            const obj2 = onreadystatechange(error[1]);
                            isStringResult = obj2.isString(tmp2);
                          }
                          if (isStringResult) {
                            arg1[onreadystatechangeHandler].request_headers[str.toLowerCase()] = tmp2;
                          }
                          return apply.apply(arg1, arg2);
                        }
                };
                const proxy1 = new Proxy(onreadystatechange.setRequestHeader, obj4);
                onreadystatechange.setRequestHeader = proxy1;
                return apply.apply(onreadystatechange, arg2);
              }
              const listener = onreadystatechange.addEventListener("readystatechange", onreadystatechangeHandler);
            }
          }
          return apply.apply(onreadystatechange, arg2);
        }
    };
    let self = this;
    let self2 = this;
    const tmp2 = obj;
    let proxy = new Proxy(prototype.open, obj);
    let tmp4 = proxy;
    prototype.open = proxy;
    let _Proxy2 = Proxy;
    let obj2 = {
      apply(apply, xhr, arg2) {
          let obj2;
          if (xhr[__sentry_xhr_v3__]) {
            if (undefined !== arg2[0]) {
              xhr[__sentry_xhr_v3__].body = arg2[0];
            }
            const obj = { startTimestamp: 1000 * obj2.timestampInSeconds(), xhr };
            obj2 = _mod693;
            const obj3 = _mod693;
            obj3.triggerHandlers("xhr", obj);
            return apply.apply(xhr, arg2);
          } else {
            return apply.apply(xhr, arg2);
          }
        }
    };
    let self3 = this;
    let self4 = this;
    let proxy1 = new Proxy(prototype.send, obj2);
    prototype.send = proxy1;
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const __sentry_xhr_v3__ = "__sentry_xhr_v3__";

export const SENTRY_XHR_DATA_KEY = "__sentry_xhr_v3__";
export const addXhrInstrumentationHandler = function addXhrInstrumentationHandler(arg0) {
  const obj = _mod693;
  obj.addHandler("xhr", arg0);
  const obj2 = _mod693;
  obj2.maybeInstrument("xhr", instrumentXHR);
};
export { instrumentXHR };