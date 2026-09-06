// === Module 11278: CaptchaStore ===

// Module 11278 (CaptchaStore)
import ReactBatchUpdates from "ReactBatchUpdates" /* 1249 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 7602 */;
import MetricEvents from "MetricEvents" /* 7607 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
let module_560 = fn(560);
module_560 = module_560.create(() => ({ captchaServeVolume: {} }));
const size = fn(2);
const result = size.fileFinishedImporting("modules/captcha/CaptchaStore.tsx");

export const useCaptchaStore = module_560;
export const isCaptchaStoreVolumeEmpty = function isCaptchaStoreVolumeEmpty() {
  return 0 === Object.keys(module_560.getState().captchaServeVolume).length;
};
export const incrementCaptchaServeVolume = function incrementCaptchaServeVolume(arg0) {
  _require = arg0;
  require("ReactBatchUpdates").batchUpdates(() => {
    module_560.setState((arg0) => {
      let sum = arg0;
      if (null == closure_1_0) {
        return sum;
      } else {
        let obj = { captchaServeVolume: null };
        obj = {};
        const merged = Object.assign(sum.captchaServeVolume);
        if (tmp3) {
          sum = sum.captchaServeVolume[tmp2] + 1;
          obj[tmp2] = sum;
          obj.captchaServeVolume = obj;
        } else {
          obj[tmp2] = 1;
          obj.captchaServeVolume = obj;
        }
        tmp3 = tmp2 in sum.captchaServeVolume;
      }
    });
  });
};
export const flushCaptchaServeVolume = function flushCaptchaServeVolume() {
  const entries = Object.entries(module_560.getState().captchaServeVolume);
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let obj = { name: null, tags: null };
    obj.name = MetricEvents.MetricEvents.CAPTCHA_SERVE_VOLUME_DISTRIBUTION;
    let _HermesInternal = HermesInternal;
    let items = ["user_flow:" + tmp6];
    obj.tags = items;
    let distributionResult = obj.distribution(obj, tmp7, true);
    continue;
  }
  tmp2 = entries[Symbol.iterator]();
  ReactBatchUpdates.batchUpdates(() => state.setState({ captchaServeVolume: {} }));
};