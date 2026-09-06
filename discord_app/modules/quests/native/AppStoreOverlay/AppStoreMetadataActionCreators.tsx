// discord_app/modules/quests/native/AppStoreOverlay/AppStoreMetadataActionCreators.tsx
import DurationsDefault from "../../../../utils/Durations.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import Dispatcher from "../../../../Dispatcher.tsx";

const require = fn;
function clearRetryState(arg0) {
  map2.delete(arg0);
  map3.delete(arg0);
}
const Endpoints = fn(1074).Endpoints;
let closure_5 = 10 * DurationsDefault.Millis.SECOND;
let closure_6 = 5 * DurationsDefault.Millis.MINUTE;
const map = new Map();
const map1 = new Map();
const map2 = new Map();
const map3 = new Map();
const subscription = Dispatcher.subscribe("LOGOUT", () => {
  map.clear();
  map1.clear();
  map3.clear();
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreMetadataActionCreators.tsx");

export const getAppStoreMetadataCacheKey = function getAppStoreMetadataCacheKey(os) {
  return "" + os.os + "#" + os.storeAppId;
};
export const fetchAppStoreMetadata = function fetchAppStoreMetadata(os) {
  os = os.os;
  const storeAppId = os.storeAppId;
  const combined = "" + os + "#" + storeAppId;
  if (map.has(combined)) {
    value = obj.get(combined);
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
      const tmp7 = (async (arg0, value) => {
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp7 === 3) {
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
            if (0 === constants) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                os = tmp8;
                let body;
                closure_128_1 = undefined;
                c3 = 2;
                const HTTP = os(tmp71[4]).HTTP;
                const request = { url: constants.QUESTS_APP_STORE_METADATA, query: null, rejectWithError: true };
                const obj1 = { os, app_id: storeAppId };
                request.query = obj1;
                constants = 3;
                c5 = 1;
                const obj2 = { value: HTTP.get(request), done: false };
                return obj2;
              }
            } else if (1 === tmp8) {
              c3 = 0;
              set.delete(closure_129_2);
              throw tmp71;
            } else if (2 === tmp8) {
              c3 = 1;
              closure_128_2 = tmp71;
              if (404 === closure_128_2.status) {
                const result = map.set(closure_129_2, null);
                clearRetryState(closure_129_2);
                c3 = 0;
                set.delete(closure_129_2);
                c5 = 3;
                return { value: null, done: true };
              } else {
                closure_128_1 = map2.get(closure_129_2);
                if (null == closure_128_1) {
                  const tmp39 = new tmp4(tmp71[5])(c5, closure_1_6);
                  closure_128_1 = tmp39;
                  const result1 = map2.set(closure_129_2, closure_128_1);
                }
                const obj3 = { retryAt: null, error: null };
                const _Date = Date;
                const timestamp = Date.now();
                obj3.retryAt = timestamp + closure_128_1.fail();
                obj3.error = closure_128_2;
                const result2 = map3.set(closure_129_2, obj3);
                throw closure_128_2;
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              set.delete(closure_129_2);
              c5 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              body = value.body;
              const result3 = map.set(closure_129_2, body);
              clearRetryState(closure_129_2);
              c3 = 0;
              set.delete(closure_129_2);
              c5 = 3;
              obj = { value: body, done: true };
              return obj;
            }
          } catch (tmp71) {
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
