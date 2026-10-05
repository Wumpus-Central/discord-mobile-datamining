// discord_app/modules/touch_analytics/TouchEventAnalyticsManager.android.tsx
import ZoomedInAnalyticsExperiment from "../telemetry_ring/native/ZoomedInAnalyticsExperiment.tsx";
import react_nativeDefault from "../../../discord_common/js/packages/rtn-codegen/js/NativeTouchEventAnalyticsModule.tsx";
import UserStore from "../../stores/UserStore.tsx";
import LifecycleManager from "../../lib/LifecycleManager.tsx";
import size from "../../../_runtime/metro/00002__.js";

function updateEnabledState() {
  const currentUser = UserStore.getCurrentUser();
  let isStaffResult;
  if (currentUser != null) {
    isStaffResult = currentUser.isStaff();
  }
  let result = true === isStaffResult;
  if (!result) {
    const obj2 = ZoomedInAnalyticsExperiment;
    result = obj2.isZoomedExperimentEnabled();
  }
  if (result) {
    const tmp5 = c4;
    if (!tmp5) {
      try {
        const obj3 = react_nativeDefault;
        obj3.enableTouchLogging();
        c4 = true;
      } catch (err) {
        c4 = false;
      }
    }
  }
  if (!result) {
    const tmp9 = c4;
    if (tmp9) {
      try {
        const obj4 = react_nativeDefault;
        obj4.disableTouchLogging();
      } catch (err) {}
      c4 = false;
    }
  }
}
let c4 = false;
class TouchEventAnalyticsManager extends LifecycleManager {
  _initialize() {
    updateEnabledState();
    UserStore.addChangeListener(updateEnabledState);
  }
  _terminate() {
    UserStore.removeChangeListener(updateEnabledState);
    const tmp2 = c4;
    if (tmp2) {
      try {
        const obj = react_nativeDefault;
        obj.disableTouchLogging();
      } catch (err) {}
      c4 = false;
    }
  }
}
const prototype = TouchEventAnalyticsManager.prototype;
const touchEventAnalyticsManager = new TouchEventAnalyticsManager();
let result = size.fileFinishedImporting("modules/touch_analytics/TouchEventAnalyticsManager.android.tsx");

export default touchEventAnalyticsManager;
