// discord_app/modules/safe_area/shouldExcludeSafeAreaForModalKey.native.tsx
import Constants2 from "../../Constants.tsx";
import PrivateChannelCallUtils from "../../utils/native/PrivateChannelCallUtils.tsx";
import SharePreparingModalConstants from "../share/native/SharePreparingModalConstants.tsx";
import Constants from "../oauth2/native/Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

({ OAUTH2_AUTHORIZE_MODAL_KEY, OAUTH2_ERROR_RESULT_MODAL_KEY, OAUTH2_SUCCESS_RESULT_MODAL_KEY } = Constants);
const items = [
  Constants2.MEDIA_MODAL_KEY,
  OAUTH2_AUTHORIZE_MODAL_KEY,
  OAUTH2_SUCCESS_RESULT_MODAL_KEY,
  OAUTH2_ERROR_RESULT_MODAL_KEY,
  SharePreparingModalConstants.SHARE_PREPARING_MODAL_KEY,
];
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
