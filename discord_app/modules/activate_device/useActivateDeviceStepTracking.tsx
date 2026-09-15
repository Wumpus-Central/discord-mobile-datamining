// === Module 13969: useActivateDeviceStepTracking ===

// Module 13969 (useActivateDeviceStepTracking)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import usePreviousDefault from "usePrevious" /* 8393 */;
import ActivateDeviceUtils from "ActivateDeviceUtils" /* 13970 */;
import noop from "module_19" /* 19 */;

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
let result = size.fileFinishedImporting("modules/activate_device/useActivateDeviceStepTracking.tsx");

export const useActivateDeviceStepTracking = function useActivateDeviceStepTracking(arg0) {
  closure_0 = arg0;
  const tmp = usePreviousDefault(arg0);
  importDefault = tmp;
  const items = [tmp, arg0];
  const effect = noop.useEffect(() => {
    if (closure_0 !== type) {
      let tmp3 = "user-code-input" !== closure_0.type;
      if (tmp3) {
        tmp3 = "handoff" !== closure_0.type;
      }
      let result = null;
      if (tmp3) {
        result = ActivateDeviceUtils.clientIdToActivateDevicePlatform(closure_0.userCodeData.clientId);
      }
      type = undefined;
      if (type != null) {
        type = type.type;
      }
      const obj3 = { previous_step: type, current_step: closure_0.type, platform_type: result };
      AnalyticsUtilsDefault.track(AnalyticEvents.DEVICE_LINK_STEP, obj3);
    }
  }, items);
};