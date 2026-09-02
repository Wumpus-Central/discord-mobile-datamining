// === Module 14425: updateEnabledState ===

// Module 14425 (updateEnabledState)
import initializeDefault from "initialize" /* 4662 */;
import apexExperiment from "apexExperiment" /* 14061 */;
import enforcingDefault from "enforcing" /* 14426 */;
import closure_3 from "mergeGuildAvatar" /* 1921 */;

require = arg1;
function updateEnabledState() {
  const currentUser = closure_3.getCurrentUser();
  let isStaffResult;
  if (currentUser != null) {
    isStaffResult = currentUser.isStaff();
  }
  let result = true === isStaffResult;
  if (!result) {
    result = apexExperiment.isZoomedExperimentEnabled();
    const obj2 = apexExperiment;
  }
  if (result) {
    if (!c4) {
      try {
        enforcingDefault.enableTouchLogging();
        c4 = true;
        const obj3 = enforcingDefault;
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
        const obj4 = enforcingDefault;
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
      const obj = enforcingDefault;
    } catch (err) {
    }
  }
};
const touchEventAnalyticsManager = new TouchEventAnalyticsManager();
let result = require("set").fileFinishedImporting("modules/touch_analytics/TouchEventAnalyticsManager.android.tsx");

export default touchEventAnalyticsManager;