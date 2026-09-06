// _runtime/00933_instrumentXHR.js
import registerSpanErrorInstrumentation from "00682_registerSpanErrorInstrumentation.js";
import WINDOW from "00904_WINDOW.js";
import closure_2 from "metro/00032__slicedToArray.js";

function instrumentXHR() {
  if (WINDOW.WINDOW.XMLHttpRequest) {
    const _XMLHttpRequest = XMLHttpRequest;
    let _Proxy = Proxy;
    let obj = { apply: null };
    obj[0] = function apply(apply, onreadystatechange) {
      const callback = onreadystatechange;
      error = new Error();
      let obj = callback(error[1]);
      closure_2 = 1000 * obj.timestampInSeconds();
      obj1 = callback(error[1]);
      let formatted;
      if (obj1.isString(arg2[0])) {
        formatted = arg2[0].toUpperCase();
        const str = arg2[0];
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
          obj = { method: null, url: null, request_headers: null };
          obj[0] = formatted;
          obj[1] = str2;
          obj[2] = {};
          onreadystatechange[onreadystatechangeHandler] = obj;
          if (tmp4) {
            onreadystatechange.__sentry_own_request__ = true;
          }
          onreadystatechangeHandler = function onreadystatechangeHandler() {
            if (onreadystatechange[onreadystatechangeHandler]) {
              if (4 === tmp.readyState) {
                try {
                  tmp2.status_code = tmp.status;
                  const obj = { endTimestamp: null, startTimestamp: null, xhr: null, virtualError: null };
                  obj[0] = 1000 * onreadystatechange(error[1]).timestampInSeconds();
                  obj[1] = closure_2;
                  obj[2] = tmp;
                  obj[3] = error;
                  const obj2 = onreadystatechange(error[1]);
                  onreadystatechange(error[1]).triggerHandlers("xhr", obj);
                  const obj3 = onreadystatechange(error[1]);
                } catch (err) {}
              }
            }
          };
          if ("onreadystatechange" in onreadystatechange) {
            if (typeof onreadystatechange.onreadystatechange === "function") {
              const _Proxy = Proxy;
              obj = { apply: null };
              obj[0] = function apply(apply) {
                onreadystatechangeHandler();
                return apply.apply(arg1, arg2);
              };
              const proxy = new Proxy(onreadystatechange.onreadystatechange, obj);
              onreadystatechange.onreadystatechange = proxy;
            }
            const _Proxy2 = Proxy;
            obj1 = { apply: null };
            obj1[0] = function apply(apply) {
              [str, tmp2] = callback(arg2, 2);
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
            };
            const proxy1 = new Proxy(onreadystatechange.setRequestHeader, obj1);
            onreadystatechange.setRequestHeader = proxy1;
            return apply.apply(onreadystatechange, arg2);
          }
          const listener = onreadystatechange.addEventListener("readystatechange", onreadystatechangeHandler);
          tmp4 = "POST" === formatted && str2.match(/sentry_key/);
        }
      }
      return apply.apply(onreadystatechange, arg2);
    };
    let proxy = new Proxy(prototype.open, obj);
    prototype.open = proxy;
    let _Proxy2 = Proxy;
    obj = { apply: null };
    obj[0] = function apply(apply) {
      if (arg1[closure_3]) {
        if (undefined !== arg2[0]) {
          tmp.body = arg2[0];
        }
        const obj = { startTimestamp: null, xhr: null };
        obj[0] = 1000 * callback(682).timestampInSeconds();
        obj[1] = arg1;
        const obj2 = callback(682);
        callback(682).triggerHandlers("xhr", obj);
        return apply.apply(arg1, arg2);
      } else {
        return apply.apply(arg1, arg2);
      }
    };
    let proxy1 = new Proxy(prototype.send, obj);
    prototype.send = proxy1;
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const __sentry_xhr_v3__ = "__sentry_xhr_v3__";

export const SENTRY_XHR_DATA_KEY = "__sentry_xhr_v3__";
export const addXhrInstrumentationHandler = function addXhrInstrumentationHandler(arg0) {
  registerSpanErrorInstrumentation.addHandler("xhr", arg0);
  const obj = registerSpanErrorInstrumentation;
  registerSpanErrorInstrumentation.maybeInstrument("xhr", instrumentXHR);
};
export { instrumentXHR };
