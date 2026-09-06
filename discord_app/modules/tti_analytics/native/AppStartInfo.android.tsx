// discord_app/modules/tti_analytics/native/AppStartInfo.android.tsx
import NativeTTIManagerModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeTTIManagerModule.tsx";
import NativeTTIModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeTTIModule.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

let closure_4 = {};
const size = fn(2);
const result = size.fileFinishedImporting("modules/tti_analytics/native/AppStartInfo.android.tsx");

export const AppStartInfo = {
  getAppUIViewed() {
    const mainActivityCreationTime = NativeTTIModuleDefault.getMainActivityCreationTime();
    let tmp2 = null != mainActivityCreationTime;
    if (tmp2) {
      let flag = closure_4[mainActivityCreationTime];
      if (!flag) {
        tmp3[mainActivityCreationTime] = true;
        flag = false;
      }
      tmp2 = flag;
    }
    return tmp2;
  },
  getAppStartInfo() {
    return (async () => {
      let obj5 = NativeTTIManagerModuleDefault;
      await obj5.getAppStartedTimestamp();
      closure_128_0 = value;
      if (closure_128_0 <= 0) {
        const _Error = Error;
        const error = new Error(
          "NativeTTIManager.getAppStartedTimestamp() returned an invalid timestamp. That's unexpected!",
        );
        throw error;
      }
      const items = [closure_129_0(closure_129_1[3]).getAppStartType(), ,];
      closure_129_0(closure_129_1[3]);
      items[1] = closure_129_0(closure_129_1[3]).getLaunchScenario();
      closure_129_0(closure_129_1[3]);
      items[2] = closure_129_0(closure_129_1[3]).getAppFirstVisibleTimestamp();
      await Promise.all(items);
      closure_128_1 = value;
      closure_128_2 = closure_129_2(closure_128_1, 3);
      closure_128_3 = closure_128_2[0];
      closure_128_4 = closure_128_2[1];
      closure_128_5 = closure_128_2[2];
      obj5 = { app_start_type: closure_128_3, app_launch_scenario: closure_128_4 };
      closure_128_6 = obj5;
      const mainActivityCreationTime = closure_129_0(closure_129_1[2]).getMainActivityCreationTime();
      if (null != mainActivityCreationTime) {
        closure_128_6.android_time_creation_to_create_main_activity = mainActivityCreationTime - closure_128_0;
      }
      return { appCreatedTime: closure_128_0, appFirstVisibleTime: closure_128_5, extraProperties: closure_128_6 };
    })();
  },
};
