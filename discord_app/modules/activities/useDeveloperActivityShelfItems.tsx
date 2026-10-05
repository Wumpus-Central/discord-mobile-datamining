// discord_app/modules/activities/useDeveloperActivityShelfItems.tsx
import Constants from "Constants.tsx";
import react from "../../../_runtime/00019_react.js";
import DeveloperActivityShelfStore from "DeveloperActivityShelfStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_4 = Constants.DEFAULT_EMBEDDED_ACTIVITY_CONFIG;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let lastUsedObject;
      let tmp10;
      let tmp11;
      let tmp13;
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp9;
      const tmp = lastUsedObject;
      let obj = lastUsedObject(576);
      const cResult = obj.c(13);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [DeveloperActivityShelfStore];
        const fn = function s() {
          const obj = {
            isEnabled: DeveloperActivityShelfStore.getIsEnabled(),
            lastUsedObject: DeveloperActivityShelfStore.getLastUsedObject(),
          };
          return obj;
        };
        const items1 = [];
        let num = 0;
        cResult[0] = items;
        let num2 = 1;
        cResult[1] = fn;
        cResult[2] = items1;
        tmp4 = items;
        tmp5 = fn;
        tmp6 = items1;
      } else {
        [tmp4, tmp5, tmp6] = cResult;
      }
      const tmpResult = tmp(504);
      const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp4, tmp5, tmp6);
      lastUsedObject = stateFromStoresObject.lastUsedObject;
      const isEnabled = stateFromStoresObject.isEnabled;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [DeveloperActivityShelfStore];
        const fn2 = function p() {
          return DeveloperActivityShelfStore.getDeveloperShelfItems();
        };
        const items3 = [];
        cResult[3] = items2;
        cResult[4] = fn2;
        cResult[5] = items3;
        tmp11 = items3;
        tmp10 = fn2;
        tmp9 = items2;
      } else {
        tmp9 = cResult[3];
        tmp10 = cResult[4];
        tmp11 = cResult[5];
      }
      const tmpResult2 = tmp(504);
      const stateFromStoresArray = tmpResult2.useStateFromStoresArray(tmp9, tmp10, tmp11);
      if (isEnabled) {
        if (cResult[7] === stateFromStoresArray) {
          let tmp15;
          if (cResult[8] === lastUsedObject) {
            tmp15 = cResult[9];
          }
          tmp13 = tmp15;
        }
        const _Symbol = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          class E {
            constructor(application) {
              let obj2;
              const obj = { application, activity: obj2 };
              obj2 = { application_id: application.id };
              const merged = Object.assign(closure_1_4);
              const merged1 = Object.assign(application.embeddedActivityConfig);
              return obj;
            }
          }
          cResult[10] = E;
        } else {
          class E {
            constructor(application) {
              let obj2;
              const obj = { application, activity: obj2 };
              obj2 = { application_id: application.id };
              const merged = Object.assign(closure_1_4);
              const merged1 = Object.assign(application.embeddedActivityConfig);
              return obj;
            }
          }
        }
        if (cResult[11] !== lastUsedObject) {
          class I {
            constructor(arg0, arg1) {
              let num = 1;
              if (null != lastUsedObject[arg0.application.id]) {
                let num2 = -1;
                if (null != lastUsedObject[arg1.application.id]) {
                  num2 = tmp2 - tmp;
                }
                num = num2;
              }
              return num;
            }
          }
          cResult[11] = lastUsedObject;
          cResult[12] = I;
        } else {
          class I {
            constructor(arg0, arg1) {
              let num = 1;
              if (null != lastUsedObject[arg0.application.id]) {
                let num2 = -1;
                if (null != lastUsedObject[arg1.application.id]) {
                  num2 = tmp2 - tmp;
                }
                num = num2;
              }
              return num;
            }
          }
        }
        const mapped = stateFromStoresArray.map(E);
        const sorted = mapped.sort(I);
        cResult[7] = stateFromStoresArray;
        cResult[8] = lastUsedObject;
        cResult[9] = sorted;
        tmp15 = sorted;
      } else {
        class I {
          constructor(arg0, arg1) {
            let num = 1;
            if (null != lastUsedObject[arg0.application.id]) {
              let num2 = -1;
              if (null != lastUsedObject[arg1.application.id]) {
                num2 = tmp2 - tmp;
              }
              num = num2;
            }
            return num;
          }
        }
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          class I {
            constructor(arg0, arg1) {
              let num = 1;
              if (null != lastUsedObject[arg0.application.id]) {
                let num2 = -1;
                if (null != lastUsedObject[arg1.application.id]) {
                  num2 = tmp2 - tmp;
                }
                num = num2;
              }
              return num;
            }
          }
          cResult[6] = tmp14;
          tmp13 = tmp14;
        } else {
          class I {
            constructor(arg0, arg1) {
              let num = 1;
              if (null != lastUsedObject[arg0.application.id]) {
                let num2 = -1;
                if (null != lastUsedObject[arg1.application.id]) {
                  num2 = tmp2 - tmp;
                }
                num = num2;
              }
              return num;
            }
          }
        }
      }
      return tmp13;
    }
  : () => {
      let isEnabled;
      let lastUsedObject;
      let obj = isEnabled(lastUsedObject[5]);
      const items = [DeveloperActivityShelfStore];
      const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
        const obj = {
          isEnabled: DeveloperActivityShelfStore.getIsEnabled(),
          lastUsedObject: DeveloperActivityShelfStore.getLastUsedObject(),
        };
        return obj;
      }, []);
      isEnabled = stateFromStoresObject.isEnabled;
      lastUsedObject = stateFromStoresObject.lastUsedObject;
      let obj2 = isEnabled(lastUsedObject[5]);
      const items1 = [DeveloperActivityShelfStore];
      const stateFromStoresArray = obj2.useStateFromStoresArray(
        items1,
        () => DeveloperActivityShelfStore.getDeveloperShelfItems(),
        [],
      );
      const items2 = [stateFromStoresArray, isEnabled, lastUsedObject];
      return stateFromStoresArray.useMemo(() => {
        let sorted;
        if (isEnabled) {
          const mapped = stateFromStoresArray.map((application) => {
            let obj2;
            const obj = { application, activity: obj2 };
            obj2 = { application_id: application.id };
            const merged = Object.assign(closure_1_4);
            const merged1 = Object.assign(application.embeddedActivityConfig);
            return obj;
          });
          sorted = mapped.sort((arg0, arg1) => {
            let num = 1;
            if (null != lastUsedObject[arg0.application.id]) {
              let num2 = -1;
              if (null != lastUsedObject[arg1.application.id]) {
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
const result = size.fileFinishedImporting("modules/activities/useDeveloperActivityShelfItems.tsx");

export const useDeveloperActivityShelfItems = tmp2;
