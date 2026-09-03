// === Module 16707: OAUTH2_AUTHORIZE_MODAL_KEY ===

// Module 16707 (OAUTH2_AUTHORIZE_MODAL_KEY)
import ME from "ME" /* 673 */;
import openChannelCallModal from "openChannelCallModal" /* 4728 */;
import SHARE_PREPARING_MODAL_KEY from "SHARE_PREPARING_MODAL_KEY" /* 8654 */;
import OAUTH2_AUTHORIZE_MODAL_KEY from "OAUTH2_AUTHORIZE_MODAL_KEY" /* 9295 */;
import set from "set" /* 2 */;

({ OAUTH2_AUTHORIZE_MODAL_KEY, OAUTH2_ERROR_RESULT_MODAL_KEY, OAUTH2_SUCCESS_RESULT_MODAL_KEY } = OAUTH2_AUTHORIZE_MODAL_KEY);
const items = [ME.MEDIA_MODAL_KEY, OAUTH2_AUTHORIZE_MODAL_KEY, OAUTH2_SUCCESS_RESULT_MODAL_KEY, OAUTH2_ERROR_RESULT_MODAL_KEY, SHARE_PREPARING_MODAL_KEY.SHARE_PREPARING_MODAL_KEY];
let set = new Set(items);
const result = set.fileFinishedImporting("modules/safe_area/shouldExcludeSafeAreaForModalKey.native.tsx");

export const shouldExcludeSafeAreaForModalKey = function shouldExcludeSafeAreaForModalKey(key) {
  let tmp = null != key;
  if (tmp) {
    let hasItem = openChannelCallModal.isVoiceChannelModalKey(key);
    if (!hasItem) {
      hasItem = set.has(key);
    }
    tmp = hasItem;
    const obj = openChannelCallModal;
  }
  return tmp;
};