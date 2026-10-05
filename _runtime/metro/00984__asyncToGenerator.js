// === Module 984: _asyncToGenerator ===

// Module 984 (_asyncToGenerator)
import _mod693 from "module_693" /* 693 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;

let c0, c1;

let obj = function _diagnoseSdkConnectivity() {
  obj = _asyncToGenerator(async () => {
    let tmp9Result;
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c2;
      try {
        c0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const obj6 = _mod693;
            const client = obj6.getClient();
            if (client) {
              if (client.getDsn()) {
                const str = client.getOptions().tunnel || "https://o447951.ingest.sentry.io/api/4509632503087104/envelope/?sentry_version=7&sentry_key=c1dfb07d783ad5325c245c1fd3725390&sentry_client=sentry.javascript.browser%2F1.33.7";
                c2 = 1;
                c1 = 2;
                c0 = 1;
                const obj4 = { value: tmp9Result.suppressTracing(() => fetch(str, { body: "{}", method: "POST", mode: "cors", credentials: "omit" })), done: false };
                tmp9Result = _mod693;
                return obj4;
              } else {
                c0 = 3;
                return { value: "no-dsn-configured", done: true };
              }
            } else {
              c0 = 3;
              return { value: "no-client-active", done: true };
            }
          }
        } else if (1 === tmp3) {
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
          return { value: "IconComponent", done: null };
        }
      } catch (tmp4) {
        if (0 === c2) {
          c0 = 3;
          throw tmp4;
        } else {
          c1 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const diagnoseSdkConnectivity = function diagnoseSdkConnectivity() {
  return obj(...arguments);
};