import _slicedToArray from "_slicedToArray";
import asyncGeneratorStep from "asyncGeneratorStep";

let closure_4 = {};
const result = require("enforcing").fileFinishedImporting("modules/tti_analytics/native/AppStartInfo.android.tsx");

export const AppStartInfo = {
  getAppUIViewed() {
    const mainActivityCreationTime = importDefault(7053).getMainActivityCreationTime();
    let tmp2 = null != mainActivityCreationTime;
    if (tmp2) {
      let flag = table[mainActivityCreationTime];
      if (!flag) {
        tmp3[mainActivityCreationTime] = true;
        flag = false;
      }
      tmp2 = flag;
    }
    return tmp2;
  },
  getAppStartInfo() {
    return callback(function*() {
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
          if (0 === dependencyMap2) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let dependencyMap = tmp4;
              let callback = 0;
              callback = undefined;
              dependencyMap = undefined;
              dependencyMap2 = undefined;
              c3 = undefined;
              let closure_4;
              let closure_5;
              let obj5;
              let mainActivityCreationTime;
              obj5 = outer1_0(outer1_1[3]);
              dependencyMap2 = 1;
              c3 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = obj5.getAppStartedTimestamp();
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
              callback = arg1;
              if (callback <= 0) {
                const _Error = Error;
                const error = new Error("NativeTTIManager.getAppStartedTimestamp() returned an invalid timestamp. That's unexpected!");
                throw error;
              } else {
                const items = [callback(4143).getAppStartType(), , ];
                const obj12 = callback(4143);
                items[1] = callback(4143).getLaunchScenario();
                const obj13 = callback(4143);
                items[2] = callback(4143).getAppFirstVisibleTimestamp();
                dependencyMap2 = 2;
                c3 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = Promise.all(items);
                return obj3;
              }
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
            dependencyMap = arg1;
            dependencyMap2 = dependencyMap2(dependencyMap, 3);
            c3 = 32;
            closure_4 = 5;
            closure_5 = 7053;
            obj5 = { app_start_type: null, app_launch_scenario: null };
            obj5[0] = c3;
            obj5[1] = closure_4;
            mainActivityCreationTime = callback(7053).getMainActivityCreationTime();
            if (null != mainActivityCreationTime) {
              obj5.android_time_creation_to_create_main_activity = mainActivityCreationTime - callback;
            }
            obj = { appCreatedTime: null, appFirstVisibleTime: null, extraProperties: null };
            obj[0] = callback;
            obj[1] = closure_5;
            obj[2] = obj5;
            c3 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = obj;
            return obj6;
          }
        } catch (tmp20) {
          c3 = tmp;
          throw tmp20;
        }
      }
    })();
  }
};