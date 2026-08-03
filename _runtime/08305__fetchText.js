// === Module 8305: _fetchText ===

// Module 8305 (_fetchText)
import asyncGeneratorStep from "asyncGeneratorStep";
import { Platform } from "get ActivityIndicator";

const require = arg1;
function _fetchText() {
  let self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c1 = 0;
    return (function*(arg0) {
      if (c1 === 2) {
        c1 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
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
          c1 = 2;
          if (arg0 === 1) {
            c1 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c1 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else if (!closure_0) {
            c1 = 3;
            obj = { value: null, done: true };
            obj[0] = null;
            return obj;
          } else if (obj4.startsWith("data:image/svg+xml;utf8")) {
            let tmp4 = (function dataUriToXml(arg0) {
              try {
                const _decodeURIComponent = decodeURIComponent;
                const parts = decodeURIComponent(arg0).split(",");
                const substr = parts.slice(1);
                return substr.join(",");
              } catch (tmp3) {
                const _Error = Error;
                const _HermesInternal = HermesInternal;
                const error = new Error("Decoding " + tmp + " failed with error: " + tmp3);
                throw error;
              }
            })(obj4);
          } else if (obj4.startsWith("data:image/svg+xml;base64")) {
            tmp4 = outer1_4(obj4);
          } else {
            tmp4 = (function fetchUriData(arg0) {
              const self = this;
              const apply = closure_5.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            })(obj4);
          }
        } catch (tmp7) {
          c1 = tmp;
          throw tmp7;
        }
      }
    })();
  });
  const _fetchText = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchUriData() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c3 = 0;
    return (function*(arg0) {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
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
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_1 = tmp4;
              closure_1 = undefined;
              const _fetch = fetch;
              c2 = 1;
              c3 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = fetch(closure_0);
              return obj1;
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              closure_1 = arg1;
              if (!closure_1.ok) {
                const _Error = Error;
                const _HermesInternal = HermesInternal;
                const error = new Error("Fetching " + closure_0 + " failed with status " + closure_1.status);
                throw error;
              }
              c2 = 2;
              c3 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = closure_1.text();
              return obj3;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp21) {
          c3 = tmp;
          throw tmp21;
        }
      }
    })();
  });
  const _fetchUriData = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function decodeBase64Image(arg0) {
  const str = decodeURIComponent(arg0);
  const parts = decodeURIComponent(arg0).split(";")[1].split(",");
  const substr = parts.slice(1);
  const joined = substr.join(",");
  const _Buffer = require(511) /* Buffer */.Buffer;
  const str2 = decodeURIComponent(arg0).split(";")[1];
  return _Buffer.from(joined, parts[0]).toString("utf-8");
}

export const fetchText = function fetchText(arg0) {
  const self = this;
  const apply = _fetchText.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};