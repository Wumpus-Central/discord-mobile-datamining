// === Module 19546: shouldExcludeSafeAreaForModalKey ===

// Module 19546 (shouldExcludeSafeAreaForModalKey)
import Constants2 from "Constants" /* 1072 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 6837 */;
import SharePreparingModalConstants from "SharePreparingModalConstants" /* 10164 */;
import CheckpointModalConstants from "CheckpointModalConstants" /* 14149 */;
import Constants from "Constants" /* 12669 */;
import size from "module_2" /* 2 */;

({ CHECKPOINT_MODAL_KEY, CHECKPOINT_UNAVAILABLE_MODAL_KEY } = CheckpointModalConstants);
({ OAUTH2_AUTHORIZE_MODAL_KEY, OAUTH2_ERROR_RESULT_MODAL_KEY, OAUTH2_SUCCESS_RESULT_MODAL_KEY } = Constants);
const items = [CHECKPOINT_MODAL_KEY, CHECKPOINT_UNAVAILABLE_MODAL_KEY, Constants2.MEDIA_MODAL_KEY, OAUTH2_AUTHORIZE_MODAL_KEY, OAUTH2_SUCCESS_RESULT_MODAL_KEY, OAUTH2_ERROR_RESULT_MODAL_KEY, SharePreparingModalConstants.SHARE_PREPARING_MODAL_KEY];
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