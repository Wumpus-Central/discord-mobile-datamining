// === Module 7384: AppStartInfo ===

// Module 7384 (AppStartInfo)
import enforcingDefault from "enforcing" /* 7385 */;
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;

let closure_4 = {};
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
      let obj5 = closure_1_0(closure_1_1[3]);
      callback = yield obj5.getAppStartedTimestamp();
      if (callback <= 0) {
        const _Error = Error;
        error = new Error("NativeTTIManager.getAppStartedTimestamp() returned an invalid timestamp. That's unexpected!");
        throw error;
      }
      const items = [callback(4309).getAppStartType(), , ];
      const obj12 = callback(4309);
      items[1] = callback(4309).getLaunchScenario();
      const obj13 = callback(4309);
      items[2] = callback(4309).getAppFirstVisibleTimestamp();
      dependencyMap = yield Promise.all(items);
      closure_4 = 5;
      closure_5 = 7385;
      obj5 = { app_start_type: null, app_launch_scenario: null };
      obj5[0] = c3;
      obj5[1] = closure_4;
      const mainActivityCreationTime = callback(7385).getMainActivityCreationTime();
      if (null != mainActivityCreationTime) {
        obj5.android_time_creation_to_create_main_activity = mainActivityCreationTime - callback;
      }
      const obj = { appCreatedTime: null, appFirstVisibleTime: null, extraProperties: null };
      obj[0] = callback;
      obj[1] = closure_5;
      obj[2] = obj5;
      return obj;
    })();
  }
};