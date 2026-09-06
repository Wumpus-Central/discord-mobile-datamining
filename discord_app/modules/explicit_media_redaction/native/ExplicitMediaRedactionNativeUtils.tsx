// === Module 14821: ExplicitMediaRedactionNativeUtils ===

// Module 14821 (ExplicitMediaRedactionNativeUtils)
import util from "util" /* 1114 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1187 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import ObscuredMediaUtils from "ObscuredMediaUtils" /* 7292 */;
import ExplicitMediaRedactionModels from "ExplicitMediaRedactionModels" /* 7297 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 7600 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8411 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8413 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
let closure_4 = fn(7601).EXPLICIT_MEDIA_SETTINGS_ACTION_SHEET_KEY;
const SearchMediaTypes = fn(7878).SearchMediaTypes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/explicit_media_redaction/native/ExplicitMediaRedactionNativeUtils.tsx");

export const handleSensitiveMediaFilterPress = function handleSensitiveMediaFilterPress(arg0) {
  ({ handlePress: require, excluded } = arg0);
  ({ title, subtitle, currentValue } = arg0);
  const currentUser = UserStore.getCurrentUser();
  if (currentUser != null) {
    const nsfwAllowed = currentUser.nsfwAllowed;
  }
  let hasItem;
  if (excluded != null) {
    hasItem = excluded.includes(preloaded_user_settings.ExplicitContentRedaction.SHOW);
  }
  let tmp5 = !hasItem;
  if (!hasItem) {
    tmp5 = nsfwAllowed;
  }
  const items = [];
  if (tmp5) {
    let obj = { value: preloaded_user_settings.ExplicitContentRedaction.SHOW, label: null, onPress: null };
    const intl = util.intl;
    obj.label = intl.string(util.t["5k5OFp"]);
    obj.onPress = function onPress() {
      let obj = ExplicitMediaRedactionUtils;
      if (obj.shouldAgeVerifyForExplicitMedia()) {
        obj = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.OBSCURED_MEDIA };
        const result = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal(obj);
      } else {
        closure_1_0(preloaded_user_settings.ExplicitContentRedaction.SHOW);
      }
    };
    items.push(obj);
  }
  let hasItem1;
  if (excluded != null) {
    hasItem1 = excluded.includes(preloaded_user_settings.ExplicitContentRedaction.BLUR);
  }
  if (!hasItem1) {
    obj = { value: preloaded_user_settings.ExplicitContentRedaction.BLUR, label: null, onPress: null };
    const intl2 = util.intl;
    obj.label = intl2.string(util.t.S49Uad);
    obj.onPress = function onPress() {
      closure_1_0(preloaded_user_settings.ExplicitContentRedaction.BLUR);
    };
    items.push(obj);
  }
  let hasItem2;
  if (excluded != null) {
    hasItem2 = excluded.includes(preloaded_user_settings.ExplicitContentRedaction.BLOCK);
  }
  if (!hasItem2) {
    obj = { value: preloaded_user_settings.ExplicitContentRedaction.BLOCK, label: null, onPress: null };
    const intl3 = util.intl;
    obj.label = intl3.string(util.t["D/157Y"]);
    obj.onPress = function onPress() {
      closure_1_0(preloaded_user_settings.ExplicitContentRedaction.BLOCK);
    };
    items.push(obj);
  }
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14822, dependencyMap.paths), closure_4, { title, subtitle, options: items, currentValue });
};
export const shouldAgeVerifyForSearchMedia = function shouldAgeVerifyForSearchMedia(media, found) {
  if (null == found) {
    return false;
  } else {
    const enabledHarmTypesForMessage = ObscuredMediaUtils.getEnabledHarmTypesForMessage(found);
    if (0 === enabledHarmTypesForMessage) {
      return false;
    } else {
      if (media.type === SearchMediaTypes.ATTACHMENT) {
        let obj = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Attachment, media: media.attachment };
        let tmp = obj;
      } else if (media.type === SearchMediaTypes.EMBED) {
        obj = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed, media: media.embed };
        tmp = obj;
      } else {
        tmp = null;
        if (media.type === SearchMediaTypes.COMPONENT) {
          obj = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.GenericMedia, media: media.unfurledMediaItem };
          tmp = obj;
        }
      }
      let tmp2 = null != tmp;
      if (tmp2) {
        let tmp4Result = ObscuredMediaUtils;
        let result = tmp4Result.isMediaObscuredForHarmTypes(tmp, enabledHarmTypesForMessage);
        if (result) {
          tmp4Result = ExplicitMediaRedactionUtils;
          result = tmp4Result.shouldAgeVerifyForExplicitMedia();
        }
        tmp2 = result;
      }
      return tmp2;
    }
  }
};