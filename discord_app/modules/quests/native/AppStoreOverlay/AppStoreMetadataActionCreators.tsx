// === Module 10729: clearRetryState ===

// Module 10729 (clearRetryState)
import setDefault from "set" /* 687 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import { Endpoints } from "ME" /* 676 */;
import importDefaultResult from "dispatcher" /* 709 */;

const require = arg1;
function clearRetryState(arg0) {
  map2.delete(arg0);
  map3.delete(arg0);
}
let closure_5 = 10 * setDefault.Millis.SECOND;
let closure_6 = 5 * setDefault.Millis.MINUTE;
const map = new Map();
const map1 = new Map();
const map2 = new Map();
const map3 = new Map();
const subscription = importDefaultResult.subscribe("LOGOUT", () => {
  map.clear();
  map1.clear();
  map3.clear();
});
let result = require("set").fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreMetadataActionCreators.tsx");

export const getAppStoreMetadataCacheKey = function getAppStoreMetadataCacheKey(os) {
  return "" + os.os + "#" + os.storeAppId;
};
export const fetchAppStoreMetadata = function fetchAppStoreMetadata(closure_0) {
  const os = closure_0.os;
  const storeAppId = closure_0.storeAppId;
  let combined;
  combined = "" + os + "#" + storeAppId;
  if (map.has(combined)) {
    let value = obj.get(combined);
    if (value == null) {
      value = null;
    }
    return Promise.resolve(value);
  } else {
    value = map1.get(combined);
    if (null != value) {
      return value;
    } else {
      const value1 = map3.get(combined);
      if (null != value1) {
        let _Date = Date;
        if (Date.now() < value1.retryAt) {
          return Promise.reject(value1.error);
        }
      }
      const tmp7 = callback(function*() {
        if (c5 === 2) {
          c5 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp7 === 3) {
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
            c5 = 2;
            if (0 === constants) {
              if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_1 = tmp4;
                let body = tmp8;
                body = undefined;
                closure_1 = undefined;
                c3 = 2;
                const HTTP = closure_1_0(closure_1_2[4]).HTTP;
                obj1 = { url: null, query: null, rejectWithError: true };
                obj1[0] = constants.QUESTS_APP_STORE_METADATA;
                const obj2 = { os: null, app_id: null };
                obj2[0] = closure_1_0;
                obj2[1] = closure_1_1;
                obj1[1] = obj2;
                constants = 3;
                c5 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = HTTP.get(obj1);
                return obj3;
              }
            } else if (1 === tmp8) {
              c3 = 0;
              closure_1_8.delete(closure_1_2);
              throw status;
            } else if (2 === tmp8) {
              c3 = 1;
              if (404 === status.status) {
                const result = closure_1_7.set(status, null);
                closure_1_11(status);
                c3 = 0;
                closure_1_8.delete(status);
                c5 = 3;
                return { value: null, done: true };
              } else {
                closure_1 = closure_1_9.get(closure_1_2);
                if (null == closure_1) {
                  const tmp39 = new closure_1_1(closure_1_2[5])(c5, closure_1_6);
                  closure_1 = tmp39;
                  const result1 = closure_1_9.set(closure_1_2, closure_1);
                }
                const obj4 = { retryAt: null, error: null };
                const _Date = Date;
                const timestamp = Date.now();
                obj4[0] = timestamp + closure_1.fail();
                obj4[1] = status;
                const result2 = closure_1_10.set(closure_1_2, obj4);
                throw status;
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_1_8.delete(status);
              c5 = 3;
              const obj5 = { value: null, done: true };
              obj5[0] = arg1;
              return obj5;
            } else {
              body = arg1.body;
              const result3 = closure_1_7.set(status, body);
              closure_1_11(status);
              c3 = 0;
              closure_1_8.delete(status);
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            }
          } catch (tmp71) {
            status = tmp71;
            if (tmp5 === c3) {
              c5 = tmp3;
              throw tmp71;
            } else if (tmp2 === tmp73) {
              constants = tmp2;
            } else {
              constants = tmp;
            }
          }
        }
      })();
      let result = obj2.set(combined, tmp7);
      return tmp7;
    }
    obj2 = map1;
  }
  obj = map;
};