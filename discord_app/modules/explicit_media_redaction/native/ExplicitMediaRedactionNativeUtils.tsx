// === Module 15093: ExplicitMediaRedactionNativeUtils ===

// Module 15093 (ExplicitMediaRedactionNativeUtils)
import util from "util" /* 1115 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1186 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import ObscuredMediaUtils from "ObscuredMediaUtils" /* 7532 */;
import ExplicitMediaRedactionModels from "ExplicitMediaRedactionModels" /* 7537 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 7840 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8681 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8683 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
let closure_4 = fn(7841).EXPLICIT_MEDIA_SETTINGS_ACTION_SHEET_KEY;
const SearchMediaTypes = fn(8121).SearchMediaTypes;
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
      if (obj.shouldAgeVerifyForExplicitMedia()) {
        const obj3 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.OBSCURED_MEDIA };
        const result = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal(obj3);
      } else {
        closure_1_0(preloaded_user_settings.ExplicitContentRedaction.SHOW);
      }
      obj = ExplicitMediaRedactionUtils;
    };
    items.push(obj);
  }
  let hasItem1;
  if (excluded != null) {
    hasItem1 = excluded.includes(preloaded_user_settings.ExplicitContentRedaction.BLUR);
  }
  if (!hasItem1) {
    let obj2 = { value: preloaded_user_settings.ExplicitContentRedaction.BLUR, label: null, onPress: null };
    const intl2 = util.intl;
    obj2.label = intl2.string(util.t.S49Uad);
    obj2.onPress = function onPress() {
      closure_1_0(preloaded_user_settings.ExplicitContentRedaction.BLUR);
    };
    items.push(obj2);
  }
  let hasItem2;
  if (excluded != null) {
    hasItem2 = excluded.includes(preloaded_user_settings.ExplicitContentRedaction.BLOCK);
  }
  if (!hasItem2) {
    let obj3 = { value: preloaded_user_settings.ExplicitContentRedaction.BLOCK, label: null, onPress: null };
    const intl3 = util.intl;
    obj3.label = intl3.string(util.t["D/157Y"]);
    obj3.onPress = function onPress() {
      closure_1_0(preloaded_user_settings.ExplicitContentRedaction.BLOCK);
    };
    items.push(obj3);
  }
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(15094, dependencyMap.paths), closure_4, { title, subtitle, options: items, currentValue });
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
        const obj2 = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Attachment, media: media.attachment };
        let tmp = obj2;
      } else if (media.type === SearchMediaTypes.EMBED) {
        const obj = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed, media: media.embed };
        tmp = obj;
      } else {
        tmp = null;
        if (media.type === SearchMediaTypes.COMPONENT) {
          const obj3 = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.GenericMedia, media: media.unfurledMediaItem };
          tmp = obj3;
        }
      }
      let tmp2 = null != tmp;
      if (tmp2) {
        let result = ObscuredMediaUtils.isMediaObscuredForHarmTypes(tmp, enabledHarmTypesForMessage);
        if (result) {
          result = ExplicitMediaRedactionUtils.shouldAgeVerifyForExplicitMedia();
          const tmp4Result2 = ExplicitMediaRedactionUtils;
        }
        tmp2 = result;
        const tmp4Result = ObscuredMediaUtils;
      }
      return tmp2;
    }
  }
};