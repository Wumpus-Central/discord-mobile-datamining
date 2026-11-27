// === Module 19229: shouldExcludeSafeAreaForModalKey ===

// Module 19229 (shouldExcludeSafeAreaForModalKey)
import Constants2 from "Constants" /* 1071 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 8450 */;
import SharePreparingModalConstants from "SharePreparingModalConstants" /* 8694 */;
import CheckpointModalConstants from "CheckpointModalConstants" /* 12634 */;
import Constants from "Constants" /* 10113 */;
import size from "module_2" /* 2 */;

({ OAUTH2_AUTHORIZE_MODAL_KEY, OAUTH2_ERROR_RESULT_MODAL_KEY, OAUTH2_SUCCESS_RESULT_MODAL_KEY } = Constants);
const items = [CheckpointModalConstants.CHECKPOINT_MODAL_KEY, Constants2.MEDIA_MODAL_KEY, OAUTH2_AUTHORIZE_MODAL_KEY, OAUTH2_SUCCESS_RESULT_MODAL_KEY, OAUTH2_ERROR_RESULT_MODAL_KEY, SharePreparingModalConstants.SHARE_PREPARING_MODAL_KEY];
const set = new Set(items);
const result = size.fileFinishedImporting("modules/safe_area/shouldExcludeSafeAreaForModalKey.native.tsx");

export function shouldExcludeSafeAreaForModalKey(key) {
  let tmp = null != key;
  if (tmp) {
    let hasItem = PrivateChannelCallUtils.isVoiceChannelModalKey(key);
    if (!hasItem) {
      hasItem = set.has(key);
    }
    tmp = hasItem;
  }
  return tmp;
}