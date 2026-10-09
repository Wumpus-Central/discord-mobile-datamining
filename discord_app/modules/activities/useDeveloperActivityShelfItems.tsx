// discord_app/modules/activities/useDeveloperActivityShelfItems.tsx
import noop from "../../../_runtime/metro/00019__.js";
import DeveloperActivityShelfStore from "DeveloperActivityShelfStore.tsx";

const require = fn;
let closure_4 = fn(2024).DEFAULT_EMBEDDED_ACTIVITY_CONFIG;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/useDeveloperActivityShelfItems.tsx");

export const useDeveloperActivityShelfItems = ReactCompilerGating.isReactCompilerEnabled()
  ? function useDeveloperActivityShelfItems() {
      const cResult = lastUsedObject(576).c(13);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [DeveloperActivityShelfStore];
        const fn = function s() {
          return {
            isEnabled: DeveloperActivityShelfStore.getIsEnabled(),
            lastUsedObject: DeveloperActivityShelfStore.getLastUsedObject(),
          };
        };
        const items1 = [];
        cResult[0] = items;
        cResult[1] = fn;
        cResult[2] = items1;
        tmp4 = items;
        tmp5 = fn;
        tmp6 = items1;
      } else {
        [tmp4, tmp5, tmp6] = cResult;
      }
      let obj = lastUsedObject(576);
      const stateFromStoresObject = lastUsedObject(504).useStateFromStoresObject(tmp4, tmp5, tmp6);
      lastUsedObject = stateFromStoresObject.lastUsedObject;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [DeveloperActivityShelfStore];
        const fn2 = function p() {
          return DeveloperActivityShelfStore.getDeveloperShelfItems();
        };
        const items3 = [];
        cResult[3] = items2;
        cResult[4] = fn2;
        cResult[5] = items3;
        let tmp11 = items3;
        let tmp10 = fn2;
        let tmp9 = items2;
      } else {
        tmp9 = cResult[3];
        tmp10 = cResult[4];
        tmp11 = cResult[5];
      }
      const tmpResult = lastUsedObject(504);
      const stateFromStoresArray = lastUsedObject(504).useStateFromStoresArray(tmp9, tmp10, tmp11);
      if (stateFromStoresObject.isEnabled) {
        const _Symbol = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          class I {
            constructor(arg0) {
              obj = { application: arg0, activity: null };
              obj1 = {};
              merged = Object.assign(closure_1_4);
              merged1 = Object.assign(arg0.embeddedActivityConfig);
              obj1.application_id = arg0.id;
              obj.activity = obj1;
              return obj;
            }
          }
          cResult[10] = I;
          let mapped = I;
        } else {
          class I {
            constructor(arg0) {
              obj = { application: arg0, activity: null };
              obj1 = {};
              merged = Object.assign(closure_1_4);
              merged1 = Object.assign(arg0.embeddedActivityConfig);
              obj1.application_id = arg0.id;
              obj.activity = obj1;
              return obj;
            }
          }
        }
        if (cResult[11] !== lastUsedObject) {
          class I {
            constructor(arg0) {
              obj = { application: arg0, activity: null };
              obj1 = {};
              merged = Object.assign(closure_1_4);
              merged1 = Object.assign(arg0.embeddedActivityConfig);
              obj1.application_id = arg0.id;
              obj.activity = obj1;
              return obj;
            }
          }
          cResult[11] = lastUsedObject;
          cResult[12] = tmp16;
        } else {
          class I {
            constructor(arg0) {
              obj = { application: arg0, activity: null };
              obj1 = {};
              merged = Object.assign(closure_1_4);
              merged1 = Object.assign(arg0.embeddedActivityConfig);
              obj1.application_id = arg0.id;
              obj.activity = obj1;
              return obj;
            }
          }
        }
        mapped = stateFromStoresArray.map(mapped);
        const sorted = mapped.sort(tmp16);
        cResult[7] = stateFromStoresArray;
        cResult[8] = lastUsedObject;
        cResult[9] = sorted;
      } else {
        class I {
          constructor(arg0) {
            obj = { application: arg0, activity: null };
            obj1 = {};
            merged = Object.assign(closure_1_4);
            merged1 = Object.assign(arg0.embeddedActivityConfig);
            obj1.application_id = arg0.id;
            obj.activity = obj1;
            return obj;
          }
        }
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          class I {
            constructor(arg0) {
              obj = { application: arg0, activity: null };
              obj1 = {};
              merged = Object.assign(closure_1_4);
              merged1 = Object.assign(arg0.embeddedActivityConfig);
              obj1.application_id = arg0.id;
              obj.activity = obj1;
              return obj;
            }
          }
          cResult[6] = tmp14;
        } else {
          class I {
            constructor(arg0) {
              obj = { application: arg0, activity: null };
              obj1 = {};
              merged = Object.assign(closure_1_4);
              merged1 = Object.assign(arg0.embeddedActivityConfig);
              obj1.application_id = arg0.id;
              obj.activity = obj1;
              return obj;
            }
          }
        }
        return tmp14;
      }
      const tmpResult2 = lastUsedObject(504);
    }
  : function useDeveloperActivityShelfItems() {
      const items = [DeveloperActivityShelfStore];
      const stateFromStoresObject = isEnabled(lastUsedObject[5]).useStateFromStoresObject(
        items,
        () => ({
          isEnabled: DeveloperActivityShelfStore.getIsEnabled(),
          lastUsedObject: DeveloperActivityShelfStore.getLastUsedObject(),
        }),
        [],
      );
      isEnabled = stateFromStoresObject.isEnabled;
      lastUsedObject = stateFromStoresObject.lastUsedObject;
      let obj = isEnabled(lastUsedObject[5]);
      const items1 = [DeveloperActivityShelfStore];
      const stateFromStoresArray = isEnabled(lastUsedObject[5]).useStateFromStoresArray(
        items1,
        () => DeveloperActivityShelfStore.getDeveloperShelfItems(),
        [],
      );
      const items2 = [stateFromStoresArray, isEnabled, lastUsedObject];
      return stateFromStoresArray.useMemo(() => {
        if (isEnabled) {
          const mapped = stateFromStoresArray.map((application) => {
            const obj = { application, activity: null };
            const obj2 = {};
            const merged = Object.assign(closure_1_4);
            const merged1 = Object.assign(application.embeddedActivityConfig);
            obj2.application_id = application.id;
            obj.activity = obj2;
            return obj;
          });
          let sorted = mapped.sort((arg0, arg1) => {
            let num = 1;
            if (null != dependencyMap[arg0.application.id]) {
              let num2 = -1;
              if (null != tmp2) {
                num2 = tmp2 - tmp;
              }
              num = num2;
            }
            return num;
          });
        } else {
          sorted = [];
        }
        return sorted;
      }, items2);
    };
