// === Module 998: _symbolicateStackTrace ===

// Module 998 (_symbolicateStackTrace)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = arg1;
function _symbolicateStackTrace() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c4 = 0;
    c5 = 0;
    return (function*(arg0, arg1) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_3 = tmp4;
              closure_0 = undefined;
              const obj10 = callback(closure_1_2[1]);
              const tmp23 = closure_0;
              if (defaultResult.bundleLoadedFromServer) {
                const _fetch = closure_0.fetch;
                let fetch = _fetch;
                if (_fetch == null) {
                  fetch = callback(closure_1_2[2]).fetch;
                }
                obj1 = { method: "POST", headers: null, body: null };
                obj1[1] = { "Content-Type": "application/json" };
                const _JSON = JSON;
                const obj2 = { stack: null, extraData: null };
                obj2[0] = tmp23;
                obj2[1] = callback;
                const text = `${tmp27.url}symbolicate`;
                obj1[2] = JSON.stringify(obj2);
                c4 = 1;
                c5 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = fetch(`${tmp27.url}symbolicate`, obj1);
                return obj3;
              } else {
                const _Error = Error;
                error = new Error("Bundle was not loaded from Metro.");
                throw error;
              }
              defaultResult = callback(closure_1_2[1]).default();
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj4 = { value: null, done: true };
              obj4[0] = arg1;
              return obj4;
            } else {
              closure_0 = arg1;
              c4 = 2;
              c5 = 1;
              const obj5 = { value: null, done: false };
              obj5[0] = closure_0.json();
              return obj5;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = arg1;
            return obj6;
          } else {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp17) {
          c5 = tmp;
          throw tmp17;
        }
      }
    })();
  });
  closure_4 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}

export default function symbolicateStackTrace(arg0, arg1) {
  const self = this;
  const apply = _symbolicateStackTrace.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};