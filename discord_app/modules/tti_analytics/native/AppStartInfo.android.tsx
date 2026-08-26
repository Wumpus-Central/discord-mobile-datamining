// === Module 7343: AppStartInfo ===

// Module 7343 (AppStartInfo)
import enforcingDefault from "enforcing" /* 7344 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "asyncGeneratorStep" /* 5 */;

const require = arg1;
const UNKNOWN_STATUS = "UNKNOWN_STATUS";
let closure_6 = {};
const result = require("set").fileFinishedImporting("modules/tti_analytics/native/AppStartInfo.android.tsx");

export const AppStartInfo = {
  getAppUIViewed() {
    const mainActivityCreationTime = enforcingDefault.getMainActivityCreationTime();
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
      let callback = 0;
      let obj5 = closure_1_1(4305);
      callback = yield obj5.getAppStartedTimestamp();
      if (callback <= 0) {
        const _Error = Error;
        error = new Error("NativeTTIManager.getAppStartedTimestamp() returned an invalid timestamp. That's unexpected!");
        throw error;
      }
      const items = [callback2(4305).getAppStartType(), , , ];
      const obj12 = callback2(4305);
      items[1] = callback2(4305).getLaunchScenario();
      const obj13 = callback2(4305);
      items[2] = callback2(4305).getAppFirstVisibleTimestamp();
      const obj14 = callback2(4305);
      const javaBaselineProfileCompilationStatus = callback2(7344).getJavaBaselineProfileCompilationStatus();
      callback2 = javaBaselineProfileCompilationStatus.catch(() => closure_5);
      const obj15 = callback2(7344);
      const obj16 = callback(4328);
      const items1 = [callback2, dependencyMap];
      items[3] = Promise.race(items1);
      const v0 = yield Promise.all(items);
      const dependencyMap2 = v0(v0, 4);
      closure_5 = 32;
      closure_6 = 5;
      closure_7 = 7344;
      obj5 = { app_start_type: null, app_launch_scenario: null, java_baseline_profile_compilation_status: null };
      obj5[0] = closure_5;
      obj5[1] = closure_6;
      obj5[2] = 4328;
      const mainActivityCreationTime = callback2(7344).getMainActivityCreationTime();
      if (null != mainActivityCreationTime) {
        obj5.android_time_creation_to_create_main_activity = mainActivityCreationTime - callback;
      }
      const obj = { appCreatedTime: null, appFirstVisibleTime: null, extraProperties: null };
      obj[0] = callback;
      obj[1] = closure_7;
      obj[2] = obj5;
      return obj;
    })();
  }
};