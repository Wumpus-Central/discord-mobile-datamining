// === Module 13981: updateEnabledState ===

// Module 13981 (updateEnabledState)
import initializeDefault from "initialize" /* 4726 */;
import apexExperiment from "apexExperiment" /* 13617 */;
import enforcingDefault from "enforcing" /* 13982 */;
import closure_3 from "mergeGuildAvatar" /* 1922 */;

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