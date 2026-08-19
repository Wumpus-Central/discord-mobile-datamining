// discord_app/modules/activate_device/useActivateDeviceStepTracking.tsx
import usePreviousDefault from "../../hooks/usePrevious.tsx";
import noop from "../../../_runtime/00019_noop.js";
import { AnalyticEvents } from "../../Constants.tsx";

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/activate_device/useActivateDeviceStepTracking.tsx");

export const useActivateDeviceStepTracking = function useActivateDeviceStepTracking(arg0) {
  closure_0 = arg0;
  const tmp = usePreviousDefault(arg0);
  importDefault = tmp;
  const items = [tmp, arg0];
  const effect = React.useEffect(() => {
    if (callback !== callback2) {
      let tmp3 = "user-code-input" !== callback.type;
      if (tmp3) {
        tmp3 = "handoff" !== callback.type;
      }
      let result = null;
      if (tmp3) {
        let obj = callback(dependencyMap[3]);
        result = obj.clientIdToActivateDevicePlatform(callback.userCodeData.clientId);
      }
      let type;
      if (callback2 != null) {
        type = callback2.type;
      }
      obj = { previous_step: null, current_step: null, platform_type: null };
      obj[0] = type;
      obj[1] = callback.type;
      obj[2] = result;
      callback2(dependencyMap[4]).track(AnalyticEvents.DEVICE_LINK_STEP, obj);
      const obj2 = callback2(dependencyMap[4]);
    }
  }, items);
};