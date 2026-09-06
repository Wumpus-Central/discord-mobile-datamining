// discord_app/modules/tti_analytics/native/AppStartInfo.android.tsx
import enforcingDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeTTIModule.tsx";
import closure_2 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";

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
    return callback(function* () {
      let callback = 0;
      let obj5 = closure_1_0(closure_1_1[3]);
      callback = yield obj5.getAppStartedTimestamp();
      if (callback <= 0) {
        const _Error = Error;
        error = new Error(
          "NativeTTIManager.getAppStartedTimestamp() returned an invalid timestamp. That's unexpected!",
        );
        throw error;
      }
      const items = [callback(4424).getAppStartType(), ,];
      const obj12 = callback(4424);
      items[1] = callback(4424).getLaunchScenario();
      const obj13 = callback(4424);
      items[2] = callback(4424).getAppFirstVisibleTimestamp();
      dependencyMap = yield Promise.all(items);
      closure_4 = 5;
      closure_5 = 7674;
      obj5 = { app_start_type: null, app_launch_scenario: null };
      obj5[0] = c3;
      obj5[1] = closure_4;
      const mainActivityCreationTime = callback(7674).getMainActivityCreationTime();
      if (null != mainActivityCreationTime) {
        obj5.android_time_creation_to_create_main_activity = mainActivityCreationTime - callback;
      }
      const obj = { appCreatedTime: null, appFirstVisibleTime: null, extraProperties: null };
      obj[0] = callback;
      obj[1] = closure_5;
      obj[2] = obj5;
      return obj;
    })();
  },
};
