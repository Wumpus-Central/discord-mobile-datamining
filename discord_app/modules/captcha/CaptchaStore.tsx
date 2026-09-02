// === Module 11135: useCaptchaStore ===

// Module 11135 (useCaptchaStore)
import batchUpdates from "batchUpdates" /* 702 */;
import setDefault from "set" /* 7356 */;
import set from "set" /* 7361 */;
import closure_3 from "_slicedToArray" /* 32 */;
import keys from "keys" /* 641 */;

require = arg1;
keys = keys.create(() => ({ captchaServeVolume: {} }));
const result = require("set").fileFinishedImporting("modules/captcha/CaptchaStore.tsx");

export const useCaptchaStore = keys;
export const isCaptchaStoreVolumeEmpty = function isCaptchaStoreVolumeEmpty() {
  return 0 === Object.keys(keys.getState().captchaServeVolume).length;
};
export const incrementCaptchaServeVolume = function incrementCaptchaServeVolume(arg0) {
  const _require = arg0;
  _require(702).batchUpdates(() => {
    closure_1_4.setState((arg0) => {
      let sum = arg0;
      if (null == closure_0) {
        return sum;
      } else {
        let obj = { captchaServeVolume: null };
        obj = {};
        const merged = Object.assign(sum.captchaServeVolume);
        if (tmp3) {
          sum = sum.captchaServeVolume[tmp2] + 1;
          obj[tmp2] = sum;
          obj[0] = obj;
          let tmp6 = obj;
        } else {
          obj[tmp2] = 1;
          obj[0] = obj;
          tmp6 = obj;
        }
        tmp3 = tmp2 in sum.captchaServeVolume;
      }
    });
  });
};
export const flushCaptchaServeVolume = function flushCaptchaServeVolume() {
  const entries = Object.entries(keys.getState().captchaServeVolume);
  while (tmp2 !== undefined) {
    let tmp4 = callback;
    let tmp5 = callback(tmp3, 2);
    let tmp8 = importDefault;
    let tmp9 = dependencyMap;
    [tmp6, tmp7] = tmp5;
    let obj = setDefault;
    obj = { name: null, tags: null };
    let tmp10 = require;
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