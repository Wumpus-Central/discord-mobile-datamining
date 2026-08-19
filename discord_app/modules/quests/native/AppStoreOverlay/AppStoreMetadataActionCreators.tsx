// === Module 10694: clearRetryState ===

// Module 10694 (clearRetryState)
import obj132Default from "obj132" /* 687 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import { Endpoints } from "ME" /* 676 */;
import importDefaultResult from "dispatcher" /* 709 */;

const require = fn;
function clearRetryState(arg0) {
  map2.delete(arg0);
  map3.delete(arg0);
}
let closure_5 = 10 * obj132Default.Millis.SECOND;
let closure_6 = 5 * obj132Default.Millis.MINUTE;
const map = new Map();
const map1 = new Map();
const map2 = new Map();
const map3 = new Map();
const subscription = importDefaultResult.subscribe("LOGOUT", () => {
  map.clear();
  map1.clear();
  map3.clear();
});
let result = require("obj132").fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreMetadataActionCreators.tsx");

export const getAppStoreMetadataCacheKey = function getAppStoreMetadataCacheKey(os) {
  return "" + os.os + "#" + os.storeAppId;
};
export const fetchAppStoreMetadata = function fetchAppStoreMetadata(closure_0) {
  const os = _require.os;
  const storeAppId = _require.storeAppId;
  const combined = "" + os + "#" + storeAppId;
  if (map.has(combined)) {
    let value = map.get(combined);
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
            c5 = 2;
            if (0 === constants) {
              if (arg0 === 1) {
                c5 = 3;
                throw body;
              } else if (arg0 === 2) {
                c5 = 3;
                obj = { value: null, done: true };
                obj[0] = body;
                return obj;
              } else {
                closure_1 = tmp4;
                body = tmp8;
                body = undefined;
                closure_1 = undefined;
                c3 = 2;
                const HTTP = os(combined[4]).HTTP;
                obj1 = { url: null, query: null, rejectWithError: true };
                obj1[0] = constants.QUESTS_APP_STORE_METADATA;
                const obj2 = { os: null, app_id: null };
                obj2[0] = os;
                obj2[1] = storeAppId;
                obj1[1] = obj2;
                constants = 3;
                c5 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = HTTP.get(obj1);
                return obj3;
              }
            } else if (1 === tmp8) {
              c3 = 0;
              closure_1_8.delete(combined);
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
                closure_1 = closure_1_9.get(combined);
                if (null == closure_1) {
                  const tmp39 = new storeAppId(combined[5])(c5, closure_1_6);
                  closure_1 = tmp39;
                  const result1 = closure_1_9.set(combined, closure_1);
                }
                const obj4 = { retryAt: null, error: null };
                const _Date = Date;
                const timestamp = Date.now();
                obj4[0] = timestamp + closure_1.fail();
                obj4[1] = status;
                const result2 = closure_1_10.set(combined, obj4);
                throw status;
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw body;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_1_8.delete(status);
              c5 = 3;
              const obj5 = { value: null, done: true };
              obj5[0] = body;
              return obj5;
            } else {
              body = body.body;
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
      let result = map1.set(combined, tmp7);
      return tmp7;
    }
  }
};