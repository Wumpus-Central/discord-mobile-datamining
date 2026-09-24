// === Module 14923: TouchEventAnalyticsManager ===

// Module 14923 (TouchEventAnalyticsManager)
import ZoomedInAnalyticsExperiment from "ZoomedInAnalyticsExperiment" /* 1984 */;
import NativeTouchEventAnalyticsModuleDefault from "NativeTouchEventAnalyticsModule" /* 14924 */;
import UserStore from "UserStore" /* 1372 */;
import LifecycleManager from "LifecycleManager" /* 1982 */;

require = fn;
function updateEnabledState() {
  const currentUser = UserStore.getCurrentUser();
  let isStaffResult;
  if (currentUser != null) {
    isStaffResult = currentUser.isStaff();
  }
  let result = true === isStaffResult;
  if (!result) {
    result = ZoomedInAnalyticsExperiment.isZoomedExperimentEnabled();
  }
  if (result) {
    if (!c4) {
      try {
        NativeTouchEventAnalyticsModuleDefault.enableTouchLogging();
        c4 = true;
      } catch (err) {
        c4 = false;
      }
    }
  }
  if (!result) {
    if (c4) {
      try {
        NativeTouchEventAnalyticsModuleDefault.disableTouchLogging();
        c4 = false;
      } catch (err) {
      }
    }
  }
}
let c4 = false;
class TouchEventAnalyticsManager extends tmp2 {
}
const prototype = TouchEventAnalyticsManager.prototype;
prototype["_initialize"] = function _initialize() {
  updateEnabledState();
  UserStore.addChangeListener(updateEnabledState);
};
prototype["_terminate"] = function _terminate() {
  UserStore.removeChangeListener(updateEnabledState);
  if (c4) {
    try {
      NativeTouchEventAnalyticsModuleDefault.disableTouchLogging();
      c4 = false;
    } catch (err) {
    }
  }
};
const touchEventAnalyticsManager = new TouchEventAnalyticsManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/touch_analytics/TouchEventAnalyticsManager.android.tsx");

export default touchEventAnalyticsManager;