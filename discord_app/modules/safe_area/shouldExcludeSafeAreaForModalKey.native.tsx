// === Module 16088: OAUTH2_AUTHORIZE_MODAL_KEY ===

// Module 16088 (OAUTH2_AUTHORIZE_MODAL_KEY)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import openChannelCallModal from "openChannelCallModal" /* 8663 */;
import SHARE_PREPARING_MODAL_KEY from "SHARE_PREPARING_MODAL_KEY" /* 9070 */;
import OAUTH2_AUTHORIZE_MODAL_KEY from "OAUTH2_AUTHORIZE_MODAL_KEY" /* 8774 */;

({ OAUTH2_AUTHORIZE_MODAL_KEY, OAUTH2_ERROR_RESULT_MODAL_KEY, OAUTH2_SUCCESS_RESULT_MODAL_KEY } = OAUTH2_AUTHORIZE_MODAL_KEY);
const items = [ME.MEDIA_MODAL_KEY, OAUTH2_AUTHORIZE_MODAL_KEY, OAUTH2_SUCCESS_RESULT_MODAL_KEY, OAUTH2_ERROR_RESULT_MODAL_KEY, SHARE_PREPARING_MODAL_KEY.SHARE_PREPARING_MODAL_KEY];
const set = new Set(items);
const result = obj132.fileFinishedImporting("modules/safe_area/shouldExcludeSafeAreaForModalKey.native.tsx");

export const shouldExcludeSafeAreaForModalKey = function shouldExcludeSafeAreaForModalKey(key) {
  let tmp = null != key;
  if (tmp) {
    let hasItem = openChannelCallModal.isVoiceChannelModalKey(key);
    if (!hasItem) {
      hasItem = set.has(key);
    }
    tmp = hasItem;
  }
  return tmp;
};