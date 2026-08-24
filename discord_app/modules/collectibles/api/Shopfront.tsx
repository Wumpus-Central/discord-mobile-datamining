// === Module 14424: _search ===

// Module 14424 (_search)
import closure_2 from "asyncGeneratorStep" /* 5 */;
import { Endpoints } from "ME" /* 676 */;

const require = arg1;
function _search() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    const iter = (function*(arg0, body) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw body;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              let constants = tmp3;
              let aPIError = tmp7;
              let timeout;
              obj1 = timeout;
              if (timeout === undefined) {
                obj1 = {};
              }
              timeout = obj1.timeout;
              aPIError = undefined;
              c6 = 1;
              c7 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c7 = 3;
              throw body;
            } else if (arg0 === 2) {
              c7 = 3;
              let obj2 = { value: null, done: true };
              obj2[0] = body;
              return obj2;
            } else {
              c5 = 1;
              const HTTP = callback(timeout[2]).HTTP;
              const obj3 = { url: null, query: null, rejectWithError: true, timeout: null };
              obj3[0] = constants.COLLECTIBLES_SEARCH;
              obj3[1] = callback;
              obj3[3] = timeout;
              c6 = 3;
              c7 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = HTTP.get(obj3);
              return obj4;
            }
          } else if (2 === tmp7) {
            c5 = 0;
            constants = closure_4;
            aPIError = new callback(timeout[3]).APIError(constants);
            obj2 = callback(timeout[4]);
            const result = obj2.captureOrIgnoreApiError(aPIError);
            throw aPIError;
          } else if (arg0 === 1) {
            c7 = 3;
            throw body;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = body;
            return obj5;
          } else {
            c5 = 0;
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = body.body;
            return obj;
          }
        } catch (tmp32) {
          closure_4 = tmp32;
          if (tmp4 === c5) {
            c7 = tmp2;
            throw tmp32;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
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
let result = require("set").fileFinishedImporting("modules/collectibles/api/Shopfront.tsx");

export const search = function search() {
  const self = this;
  const apply = _search.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};