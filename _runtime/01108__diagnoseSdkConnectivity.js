// _runtime/01108__diagnoseSdkConnectivity.js
import closure_2 from "00005_asyncGeneratorStep.js";

function _diagnoseSdkConnectivity() {
  const self = this;
  const tmp = callback(function*() {
    if (v0 === 2) {
      v0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        v0 = 2;
        if (0 === table) {
          if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const client = v0(table[1]).getClient();
            if (client) {
              if (client.getDsn()) {
                let str = client.getOptions().tunnel;
                if (!str) {
                  str = "https://o447951.ingest.sentry.io/api/4509632503087104/envelope/?sentry_version=7&sentry_key=c1dfb07d783ad5325c245c1fd3725390&sentry_client=sentry.javascript.browser%2F1.33.7";
                }
                v0 = str;
                c2 = 1;
                table = 2;
                v0 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = tmp14(tmp15[1]).suppressTracing(() => fetch(c0, { body: "{}", method: "POST", mode: "cors", credentials: "omit" }));
                return obj1;
              } else {
                v0 = 3;
                return { value: "no-dsn-configured", done: true };
              }
            } else {
              v0 = 3;
              return { value: "no-client-active", done: true };
            }
            const obj6 = v0(table[1]);
            tmp14 = v0;
            tmp15 = table;
          }
        } else if (1 === tmp6) {
          c2 = 0;
          v0 = 3;
          return { value: "sentry-unreachable", done: true };
        } else if (arg0 === 1) {
          v0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c2 = 0;
          v0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          c2 = 0;
          v0 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp7) {
        if (tmp3 === c2) {
          v0 = tmp2;
          throw tmp7;
        } else {
          table = tmp;
        }
      }
    }
  });
  closure_3 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const diagnoseSdkConnectivity = function diagnoseSdkConnectivity() {
  const self = this;
  const apply = _diagnoseSdkConnectivity.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};