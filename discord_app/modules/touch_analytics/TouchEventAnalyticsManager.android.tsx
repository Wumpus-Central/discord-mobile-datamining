// === Module 13913: updateEnabledState ===

// Module 13913 (updateEnabledState)
import initializeDefault from "initialize" /* 4720 */;
import apexExperiment from "apexExperiment" /* 13559 */;
import enforcingDefault from "enforcing" /* 13914 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;

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