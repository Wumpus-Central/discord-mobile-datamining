// discord_app/modules/safe_area/shouldExcludeSafeAreaForModalKey.native.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import ME from "../../Constants.tsx";
import openChannelCallModal from "../../utils/native/PrivateChannelCallUtils.tsx";
import SHARE_PREPARING_MODAL_KEY from "../share/native/SharePreparingModalConstants.tsx";
import OAUTH2_AUTHORIZE_MODAL_KEY from "../oauth2/native/Constants.tsx";

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