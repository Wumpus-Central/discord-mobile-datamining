// discord_app/modules/touch_analytics/TouchEventAnalyticsManager.android.tsx
import mergeGuildAvatar from "mergeGuildAvatar";
import "initialize";

const require = arg1;
function updateEnabledState() {
  const currentUser = mergeGuildAvatar.getCurrentUser();
  let isStaffResult;
  if (currentUser != null) {
    isStaffResult = currentUser.isStaff();
  }
  let result = true === isStaffResult;
  if (!result) {
    result = require("../telemetry_ring/native/ZoomedInAnalyticsExperiment.tsx") /* apexExperiment */.isZoomedExperimentEnabled();
    const obj2 = require("../telemetry_ring/native/ZoomedInAnalyticsExperiment.tsx") /* apexExperiment */;
  }
  if (result) {
    if (!c4) {
      try {
        require("../../../discord_common/js/packages/rtn-codegen/js/NativeTouchEventAnalyticsModule.tsx").enableTouchLogging();
        c4 = true;
        const obj3 = require("../../../discord_common/js/packages/rtn-codegen/js/NativeTouchEventAnalyticsModule.tsx");
      } catch (err) {
        c4 = false;
      }
    }
  }
  if (!result) {
    if (c4) {
      try {
        require("../../../discord_common/js/packages/rtn-codegen/js/NativeTouchEventAnalyticsModule.tsx").disableTouchLogging();
        c4 = false;
        const obj4 = require("../../../discord_common/js/packages/rtn-codegen/js/NativeTouchEventAnalyticsModule.tsx");
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
  mergeGuildAvatar.addChangeListener(updateEnabledState);
};
prototype["_terminate"] = function _terminate() {
  mergeGuildAvatar.removeChangeListener(updateEnabledState);
  if (c4) {
    try {
      require("../../../discord_common/js/packages/rtn-codegen/js/NativeTouchEventAnalyticsModule.tsx").disableTouchLogging();
      c4 = false;
      const obj = require("../../../discord_common/js/packages/rtn-codegen/js/NativeTouchEventAnalyticsModule.tsx");
    } catch (err) {
    }
  }
};
const touchEventAnalyticsManager = new TouchEventAnalyticsManager();
let result = require("enforcing").fileFinishedImporting("modules/touch_analytics/TouchEventAnalyticsManager.android.tsx");

export default touchEventAnalyticsManager;