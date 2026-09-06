// === Module 16872: shouldExcludeSafeAreaForModalKey ===

// Module 16872 (shouldExcludeSafeAreaForModalKey)
import Constants2 from "Constants" /* 1074 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 4767 */;
import SharePreparingModalConstants from "SharePreparingModalConstants" /* 8364 */;
import Constants from "Constants" /* 9574 */;
import size from "module_2" /* 2 */;

({ OAUTH2_AUTHORIZE_MODAL_KEY, OAUTH2_ERROR_RESULT_MODAL_KEY, OAUTH2_SUCCESS_RESULT_MODAL_KEY } = Constants);
const items = [Constants2.MEDIA_MODAL_KEY, OAUTH2_AUTHORIZE_MODAL_KEY, OAUTH2_SUCCESS_RESULT_MODAL_KEY, OAUTH2_ERROR_RESULT_MODAL_KEY, SharePreparingModalConstants.SHARE_PREPARING_MODAL_KEY];
const set = new Set(items);
const result = size.fileFinishedImporting("modules/safe_area/shouldExcludeSafeAreaForModalKey.native.tsx");

export const shouldExcludeSafeAreaForModalKey = function shouldExcludeSafeAreaForModalKey(key) {
  let tmp = null != key;
  if (tmp) {
    let hasItem = PrivateChannelCallUtils.isVoiceChannelModalKey(key);
    if (!hasItem) {
      hasItem = set.has(key);
    }
    tmp = hasItem;
  }
  return tmp;
};