// === Module 5408: CaptchaStore ===

// Module 5408 (CaptchaStore)
import react_native from "react-native" /* 1259 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 5409 */;
import MetricEvents from "MetricEvents" /* 5414 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import module_570 from "module_570" /* 570 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const useCaptchaStore = module_570.create(() => ({ captchaServeVolume: {} }));
const result = size.fileFinishedImporting("modules/captcha/CaptchaStore.tsx");

export { useCaptchaStore };
export const isCaptchaStoreVolumeEmpty = function isCaptchaStoreVolumeEmpty() {
  return 0 === Object.keys(obj.getState().captchaServeVolume).length;
};
export const incrementCaptchaServeVolume = function incrementCaptchaServeVolume(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    let obj;
    obj.setState((captchaServeVolume) => {
      let tmp2 = captchaServeVolume;
      if (null != closure_1_0) {
        let tmp6;
        const obj = { captchaServeVolume: null };
        const obj2 = {};
        const tmp3 = closure_1_0 in captchaServeVolume.captchaServeVolume;
        const merged = Object.assign(captchaServeVolume.captchaServeVolume);
        if (tmp3) {
          obj2[closure_1_0] = captchaServeVolume.captchaServeVolume[closure_1_0] + 1;
          obj.captchaServeVolume = obj2;
          tmp6 = obj;
        } else {
          obj2[closure_1_0] = 1;
          obj.captchaServeVolume = obj2;
          tmp6 = obj;
        }
        tmp2 = tmp6;
      }
      return tmp2;
    });
  });
};
export const flushCaptchaServeVolume = function flushCaptchaServeVolume() {
  let items;
  let obj;
  let state;
  let tmp6;
  let tmp7;
  const entries = Object.entries(obj.getState().captchaServeVolume);
  const tmp2 = entries[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let tmp10 = MonitoringAgentDefault;
    obj = { name: MetricEvents.MetricEvents.CAPTCHA_SERVE_VOLUME_DISTRIBUTION, tags: items };
    let distribution = tmp10.distribution;
    let _HermesInternal = HermesInternal;
    items = ["user_flow:" + tmp6];
    let distributionResult = distribution(obj, tmp7, true);
    continue;
  }
  const obj2 = react_native;
  obj2.batchUpdates(() => state.setState({ captchaServeVolume: {} }));
};