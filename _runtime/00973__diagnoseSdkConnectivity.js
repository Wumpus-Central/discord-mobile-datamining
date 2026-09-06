// === Module 973: _diagnoseSdkConnectivity ===

// Module 973 (_diagnoseSdkConnectivity)
import _mod682 from "module_682" /* 682 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

let closure_3 = async function _diagnoseSdkConnectivity(arg0, value) {
  if (c0 === 2) {
    c0 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
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
      c0 = 2;
      if (0 === c1) {
        if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          const client = _mod682.getClient();
          if (client) {
            if (client.getDsn()) {
              let str = client.getOptions().tunnel;
              if (!str) {
                str = "https://o447951.ingest.sentry.io/api/4509632503087104/envelope/?sentry_version=7&sentry_key=c1dfb07d783ad5325c245c1fd3725390&sentry_client=sentry.javascript.browser%2F1.33.7";
              }
              c2 = 1;
              c1 = 2;
              c0 = 1;
              const obj1 = { value: tmp13(tmp14[1]).suppressTracing(() => fetch(str, { body: "{}", method: "POST", mode: "cors", credentials: "omit" })), done: false };
              return obj1;
            } else {
              c0 = 3;
              return { value: "no-dsn-configured", done: true };
            }
          } else {
            c0 = 3;
            return { value: "no-client-active", done: true };
          }
          tmp13 = require;
          tmp14 = dependencyMap;
        }
      } else if (1 === tmp6) {
        c2 = 0;
        c0 = 3;
        return { value: "sentry-unreachable", done: true };
      } else if (arg0 === 1) {
        c0 = 3;
        throw value;
      } else if (arg0 === 2) {
        c2 = 0;
        c0 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        c2 = 0;
        c0 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp7) {
      if (tmp3 === c2) {
        c0 = tmp2;
        throw tmp7;
      } else {
        c1 = tmp;
      }
    }
  }
};
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const diagnoseSdkConnectivity = function diagnoseSdkConnectivity() {
  const self = this;
  const apply = closure_3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};