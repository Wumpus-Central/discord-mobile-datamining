// === Module 13876: useActivateDeviceStepTracking ===

// Module 13876 (useActivateDeviceStepTracking)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import usePreviousDefault from "usePrevious" /* 8272 */;
import ActivateDeviceUtils from "ActivateDeviceUtils" /* 13877 */;
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
    if (closure_0 !== closure_1) {
      let tmp3 = "user-code-input" !== tmp.type;
      if (tmp3) {
        tmp3 = "handoff" !== tmp.type;
      }
      let result = null;
      if (tmp3) {
        let obj = ActivateDeviceUtils;
        result = obj.clientIdToActivateDevicePlatform(tmp.userCodeData.clientId);
      }
      let type;
      if (tmp2 != null) {
        type = tmp2.type;
      }
      obj = { previous_step: type, current_step: tmp.type, platform_type: result };
      AnalyticsUtilsDefault.track(AnalyticEvents.DEVICE_LINK_STEP, obj);
    }
  }, items);
};