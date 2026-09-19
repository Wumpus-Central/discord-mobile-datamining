// === Module 5083: CaptchaStore ===

// Module 5083 (CaptchaStore)
import ReactBatchUpdates from "ReactBatchUpdates" /* 1248 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 5084 */;
import MetricEvents from "MetricEvents" /* 5089 */;
import _slicedToArray from "module_32" /* 32 */;

const require = globalThis.__r;

require = fn;
const module_560 = fn(560);
let obj3 = module_560.create(() => ({ captchaServeVolume: {} }));
const size = fn(2);
const result = size.fileFinishedImporting("modules/captcha/CaptchaStore.tsx");

export const useCaptchaStore = obj3;
export const isCaptchaStoreVolumeEmpty = function isCaptchaStoreVolumeEmpty() {
  return 0 === Object.keys(obj3.getState().captchaServeVolume).length;
};
export const incrementCaptchaServeVolume = function incrementCaptchaServeVolume(arg0) {
  _require = arg0;
  require("ReactBatchUpdates").batchUpdates(() => {
    obj3.setState((arg0) => {
      let sum = arg0;
      if (null == closure_1_0) {
        return sum;
      } else {
        const obj = { captchaServeVolume: null };
        const obj2 = {};
        const merged = Object.assign(sum.captchaServeVolume);
        if (tmp3) {
          sum = sum.captchaServeVolume[closure_1_0] + 1;
          obj2[closure_1_0] = sum;
          obj.captchaServeVolume = obj2;
        } else {
          obj2[closure_1_0] = 1;
          obj.captchaServeVolume = obj2;
        }
        tmp3 = closure_1_0 in sum.captchaServeVolume;
      }
    });
  });
};
export const flushCaptchaServeVolume = function flushCaptchaServeVolume() {
  const entries = Object.entries(obj3.getState().captchaServeVolume);
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let obj = MonitoringAgentDefault;
    let obj2 = { name: MetricEvents.MetricEvents.CAPTCHA_SERVE_VOLUME_DISTRIBUTION, tags: null };
    let _HermesInternal = HermesInternal;
    let items = ["user_flow:" + tmp6];
    obj2.tags = items;
    let distributionResult = obj.distribution(obj2, tmp7, true);
    continue;
  }
  obj3 = ReactBatchUpdates;
  obj3.batchUpdates(() => state.setState({ captchaServeVolume: {} }));
  tmp2 = entries[Symbol.iterator]();
};