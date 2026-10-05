// discord_app/modules/safe_area/shouldExcludeSafeAreaForModalKey.native.tsx
import Constants2 from "../../Constants.tsx";
import PrivateChannelCallUtils from "../../utils/native/PrivateChannelCallUtils.tsx";
import SharePreparingModalConstants from "../share/native/SharePreparingModalConstants.tsx";
import Constants from "../oauth2/native/Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let OAUTH2_AUTHORIZE_MODAL_KEY;
let OAUTH2_ERROR_RESULT_MODAL_KEY;
let OAUTH2_SUCCESS_RESULT_MODAL_KEY;
const MEDIA_MODAL_KEY = Constants2.MEDIA_MODAL_KEY;
({ OAUTH2_AUTHORIZE_MODAL_KEY, OAUTH2_ERROR_RESULT_MODAL_KEY, OAUTH2_SUCCESS_RESULT_MODAL_KEY } = Constants);
const items = [
  MEDIA_MODAL_KEY,
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
    const obj = PrivateChannelCallUtils;
    const hasItem = obj.isVoiceChannelModalKey(key) || set.has(key);
    tmp = hasItem;
  }
  return tmp;
};
