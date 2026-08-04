// discord_app/modules/activate_device/useActivateDeviceStepTracking.tsx
import noop from "noop";
import { AnalyticEvents } from "ME";

const require = arg1;
let result = require("usePrevious").fileFinishedImporting("modules/activate_device/useActivateDeviceStepTracking.tsx");

export const useActivateDeviceStepTracking = function useActivateDeviceStepTracking(first) {
  let closure_0 = first;
  const tmp = importDefault(8129)(first);
  importDefault = tmp;
  const items = [tmp, first];
  const effect = React.useEffect(() => {
    if (callback !== callback) {
      let tmp3 = "user-code-input" !== tmp.type;
      if (tmp3) {
        tmp3 = "handoff" !== tmp.type;
      }
      let result = null;
      if (tmp3) {
        let obj = callback(outer1_2[3]);
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
      tmp(outer1_2[4]).track(outer1_4.DEVICE_LINK_STEP, obj);
      const obj2 = tmp(outer1_2[4]);
    }
  }, items);
};