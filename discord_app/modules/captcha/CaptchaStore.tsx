// === Module 10479: useCaptchaStore ===

// Module 10479 (useCaptchaStore)
import batchUpdates from "batchUpdates" /* 705 */;
import setDefault from "set" /* 5006 */;
import set from "set" /* 5011 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import keys from "keys" /* 644 */;

require = fn;
keys = keys.create(() => ({ captchaServeVolume: {} }));
const result = require("obj132").fileFinishedImporting("modules/captcha/CaptchaStore.tsx");

export const useCaptchaStore = keys;
export const isCaptchaStoreVolumeEmpty = function isCaptchaStoreVolumeEmpty() {
  return 0 === Object.keys(keys.getState().captchaServeVolume).length;
};
export const incrementCaptchaServeVolume = function incrementCaptchaServeVolume(arg0) {
  const _require = arg0;
  _require(705).batchUpdates(() => {
    keys.setState((arg0) => {
      let sum = arg0;
      if (null == closure_0) {
        return sum;
      } else {
        const obj = {};
        const merged = Object.assign(sum.captchaServeVolume);
        if (tmp3) {
          sum = sum.captchaServeVolume[closure_0] + 1;
          obj[closure_0] = sum;
          obj[0] = obj;
        } else {
          obj[closure_0] = 1;
          obj[0] = obj;
        }
        tmp3 = closure_0 in sum.captchaServeVolume;
      }
    });
  });
};
export const flushCaptchaServeVolume = function flushCaptchaServeVolume() {
  const entries = Object.entries(keys.getState().captchaServeVolume);
  while (tmp2 !== undefined) {
    let tmp5 = callback(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let obj = { name: null, tags: null };
    obj[0] = set.MetricEvents.CAPTCHA_SERVE_VOLUME_DISTRIBUTION;
    let _HermesInternal = HermesInternal;
    let items = ["user_flow:" + tmp6];
    obj[1] = items;
    let distributionResult = obj.distribution(obj, tmp7, true);
    continue;
  }
  tmp2 = entries[Symbol.iterator]();
  batchUpdates.batchUpdates(() => state.setState({ captchaServeVolume: {} }));
};