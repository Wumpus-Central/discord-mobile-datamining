// discord_app/modules/touch_analytics/TouchEventAnalyticsManager.android.tsx
import initializeDefault from "../../lib/LifecycleManager.tsx";
import apexExperiment from "../telemetry_ring/native/ZoomedInAnalyticsExperiment.tsx";
import enforcingDefault from "../../../discord_common/js/packages/rtn-codegen/js/NativeTouchEventAnalyticsModule.tsx";
import mergeGuildAvatar from "../../stores/UserStore.tsx";

require = fn;
function updateEnabledState() {
  const currentUser = closure_3.getCurrentUser();
  let isStaffResult;
  if (currentUser != null) {
    isStaffResult = currentUser.isStaff();
  }
  let result = true === isStaffResult;
  if (!result) {
    result = apexExperiment.isZoomedExperimentEnabled();
  }
  if (result) {
    if (!c4) {
      try {
        enforcingDefault.enableTouchLogging();
        c4 = true;
      } catch (err) {
        c4 = false;
      }
    }
  }
  if (!result) {
    if (c4) {
      try {
        enforcingDefault.disableTouchLogging();
        c4 = false;
      } catch (err) {
      }
    }
  }
}
let c4 = false;
initializeDefault;
class TouchEventAnalyticsManager extends tmp2 {
}
const prototype = TouchEventAnalyticsManager.prototype;
prototype["_initialize"] = function _initialize() {
  updateEnabledState();
  closure_3.addChangeListener(updateEnabledState);
};
prototype["_terminate"] = function _terminate() {
  closure_3.removeChangeListener(updateEnabledState);
  if (c4) {
    try {
      enforcingDefault.disableTouchLogging();
      c4 = false;
    } catch (err) {
    }
  }
};
const touchEventAnalyticsManager = new TouchEventAnalyticsManager();
let result = require("obj132").fileFinishedImporting("modules/touch_analytics/TouchEventAnalyticsManager.android.tsx");

export default touchEventAnalyticsManager;