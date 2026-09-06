// === Module 863: _symbolicateStackTrace ===

// Module 863 (_symbolicateStackTrace)
import _mod215 from "module_215" /* 215 */;
import _mod864 from "module_864" /* 864 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = arg1;
let closure_4 = async function _symbolicateStackTrace() {
  c4 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_3 = tmp4;
            closure_131_0 = undefined;
            if (defaultResult.bundleLoadedFromServer) {
              _fetch = _fetch.fetch;
              fetch = _fetch;
              if (_fetch == null) {
                fetch = _mod215.fetch;
              }
              const request = { method: "POST", headers: { "Content-Type": "application/json" }, body: null };
              const _JSON = JSON;
              const obj1 = { stack, extraData };
              const text = `${tmp26.url}symbolicate`;
              request.body = JSON.stringify(obj1);
              c4 = 1;
              c5 = 1;
              const obj2 = { value: fetch(`${tmp26.url}symbolicate`, request), done: false };
              return obj2;
            } else {
              const _Error = Error;
              const error = new Error("Bundle was not loaded from Metro.");
              throw error;
            }
            defaultResult = _mod864.default();
          }
        } else if (1 === tmp4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_131_0 = value;
            c4 = 2;
            c5 = 1;
            const obj4 = { value: closure_131_0.json(), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp17) {
        c5 = tmp;
        throw tmp17;
      }
    }
  })();
};

export default function symbolicateStackTrace(arg0, arg1) {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};