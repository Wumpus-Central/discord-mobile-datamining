// === Module 13688: useActivateDeviceStepTracking ===

// Module 13688 (useActivateDeviceStepTracking)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import usePreviousDefault from "usePrevious" /* 7946 */;
import ActivateDeviceUtils from "ActivateDeviceUtils" /* 13689 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const AnalyticEvents = fn(1085).AnalyticEvents;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/activate_device/useActivateDeviceStepTracking.tsx");

export const useActivateDeviceStepTracking = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  const tmp2 = usePreviousDefault(arg0);
  importDefault = tmp2;
  if (cResult[0] === tmp2) {
    if (cResult[1] === arg0) {
      let tmp3 = cResult[2];
      let tmp4 = cResult[3];
    }
    const effect = noop.useEffect(tmp3, tmp4);
  }
  const fn = function p() {
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
  };
  const items = [tmp2, arg0];
  cResult[0] = tmp2;
  cResult[1] = arg0;
  cResult[2] = fn;
  cResult[3] = items;
  tmp4 = items;
  tmp3 = fn;
  let obj = require("c");
}) : ((arg0) => {
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
});