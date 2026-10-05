// === Module 13688: useActivateDeviceStepTracking ===

// Module 13688 (useActivateDeviceStepTracking)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import usePreviousDefault from "usePrevious" /* 7946 */;
import ActivateDeviceUtils from "ActivateDeviceUtils" /* 13689 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, type;

const AnalyticEvents = Constants.AnalyticEvents;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(4);
  const tmp2 = usePreviousDefault(arg0);
  importDefault = tmp2;
  if (cResult[0] === tmp2) {
    let tmp3;
    let tmp4;
    if (cResult[1] === arg0) {
      tmp3 = cResult[2];
      tmp4 = cResult[3];
    }
    const effect = react.useEffect(tmp3, tmp4);
  }
  const fn = function p() {
    if (closure_0 !== type) {
      let result = null;
      const tmp3 = "user-code-input" !== closure_0.type && "handoff" !== closure_0.type;
      if (tmp3) {
        const obj = ActivateDeviceUtils;
        result = obj.clientIdToActivateDevicePlatform(closure_0.userCodeData.clientId);
      }
      type = undefined;
      const track = AnalyticsUtilsDefault.track;
      const DEVICE_LINK_STEP = AnalyticEvents.DEVICE_LINK_STEP;
      AnalyticsUtilsDefault;
      if (type != null) {
        type = type.type;
      }
      const obj2 = { previous_step: type, current_step: closure_0.type, platform_type: result };
      track(DEVICE_LINK_STEP, obj2);
    }
  };
  const items = [tmp2, arg0];
  cResult[0] = tmp2;
  cResult[1] = arg0;
  cResult[2] = fn;
  cResult[3] = items;
  tmp4 = items;
  tmp3 = fn;
}) : ((arg0) => {
  let closure_0 = arg0;
  const tmp = usePreviousDefault(arg0);
  importDefault = tmp;
  const items = [tmp, arg0];
  const effect = react.useEffect(() => {
    if (closure_0 !== type) {
      let result = null;
      const tmp3 = "user-code-input" !== closure_0.type && "handoff" !== closure_0.type;
      if (tmp3) {
        const obj = ActivateDeviceUtils;
        result = obj.clientIdToActivateDevicePlatform(closure_0.userCodeData.clientId);
      }
      type = undefined;
      const track = AnalyticsUtilsDefault.track;
      const DEVICE_LINK_STEP = AnalyticEvents.DEVICE_LINK_STEP;
      AnalyticsUtilsDefault;
      if (type != null) {
        type = type.type;
      }
      const obj2 = { previous_step: type, current_step: closure_0.type, platform_type: result };
      track(DEVICE_LINK_STEP, obj2);
    }
  }, items);
});
let result = size.fileFinishedImporting("modules/activate_device/useActivateDeviceStepTracking.tsx");

export const useActivateDeviceStepTracking = tmp2;