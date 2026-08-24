// === Module 13394: useActivateDeviceStepTracking ===

// Module 13394 (useActivateDeviceStepTracking)
import usePreviousDefault from "usePrevious" /* 6738 */;
import closure_3 from "noop" /* 19 */;
import { AnalyticEvents } from "ME" /* 676 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/activate_device/useActivateDeviceStepTracking.tsx");

export const useActivateDeviceStepTracking = function useActivateDeviceStepTracking(first) {
  closure_0 = first;
  const tmp = usePreviousDefault(first);
  importDefault = tmp;
  const items = [tmp, first];
  const effect = React.useEffect(() => {
    if (callback !== callback2) {
      let tmp3 = "user-code-input" !== tmp.type;
      if (tmp3) {
        tmp3 = "handoff" !== tmp.type;
      }
      let result = null;
      if (tmp3) {
        let obj = callback(closure_1_2[3]);
        result = obj.clientIdToActivateDevicePlatform(tmp.userCodeData.clientId);
      }
      let type;
      if (tmp2 != null) {
        type = tmp2.type;
      }
      obj = { previous_step: null, current_step: null, platform_type: null };
      obj[0] = type;
      obj[1] = tmp.type;
      obj[2] = result;
      callback2(closure_1_2[4]).track(closure_1_4.DEVICE_LINK_STEP, obj);
      const obj2 = callback2(closure_1_2[4]);
    }
  }, items);
};