import _slicedToArray from "_slicedToArray";
import keys from "keys";

const require = arg1;
keys = keys.create(() => ({ captchaServeVolume: {} }));
const result = require("batchUpdates").fileFinishedImporting("modules/captcha/CaptchaStore.tsx");

export const useCaptchaStore = keys;
export const isCaptchaStoreVolumeEmpty = function isCaptchaStoreVolumeEmpty() {
  return 0 === Object.keys(keys.getState().captchaServeVolume).length;
};
export const incrementCaptchaServeVolume = function incrementCaptchaServeVolume(arg0) {
  const _require = arg0;
  _require(705).batchUpdates(() => {
    outer1_4.setState((arg0) => {
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
  let tmp6;
  let tmp7;
  const entries = Object.entries(keys.getState().captchaServeVolume);
  while (tmp2 !== undefined) {
    let tmp4 = callback;
    let tmp5 = callback(tmp3, 2);
    let tmp8 = importDefault;
    let tmp9 = dependencyMap;
    [tmp6, tmp7] = tmp5;
    let obj = importDefault(5870);
    obj = { name: null, tags: null };
    let tmp10 = require;
    obj[0] = require(5875) /* set */.MetricEvents.CAPTCHA_SERVE_VOLUME_DISTRIBUTION;
    let _HermesInternal = HermesInternal;
    let items = ["user_flow:" + tmp6];
    obj[1] = items;
    let distributionResult = obj.distribution(obj, tmp7, true);
    continue;
  }
  tmp2 = entries[Symbol.iterator]();
  require(705) /* batchUpdates */.batchUpdates(() => state.setState({ captchaServeVolume: {} }));
};