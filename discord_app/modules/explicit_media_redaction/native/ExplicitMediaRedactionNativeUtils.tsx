// discord_app/modules/explicit_media_redaction/native/ExplicitMediaRedactionNativeUtils.tsx
import getSystemLocale from "../../../intl/index.native.tsx";
import create from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import asyncRequireImpl from "../../../../_runtime/02007_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import redactionSettingToRenderedString from "../ExplicitMediaRedactionUtils.tsx";
import getEligibleHarmTypesConfigsForContext from "../ObscuredMediaUtils.tsx";
import ContentHarmTypeChannel from "../ExplicitMediaRedactionModels.tsx";
import AgeVerificationModalEntryPoint from "../../age_assurance/AgeVerificationAnalyticsUtils.tsx";
import openIncodeAgeVerificationModalDefault from "../../age_assurance/AgeVerificationActionCreators.native.tsx";
import mergeGuildAvatar from "../../../stores/UserStore.tsx";
import { EXPLICIT_MEDIA_SETTINGS_ACTION_SHEET_KEY as closure_4 } from "../ExplicitMediaRedactionConstants.tsx";
import { SearchMediaTypes } from "../../search/SearchConstants.tsx";

require = fn;
let result = require("obj132").fileFinishedImporting("modules/explicit_media_redaction/native/ExplicitMediaRedactionNativeUtils.tsx");

export const handleSensitiveMediaFilterPress = function handleSensitiveMediaFilterPress(arg0) {
  ({ handlePress: require, excluded } = arg0);
  ({ title, subtitle, currentValue } = arg0);
  currentUser = currentUser.getCurrentUser();
  if (currentUser != null) {
    const nsfwAllowed = currentUser.nsfwAllowed;
  }
  let hasItem;
  if (excluded != null) {
    hasItem = excluded.includes(create.ExplicitContentRedaction.SHOW);
  }
  let tmp5 = !hasItem;
  if (!hasItem) {
    tmp5 = nsfwAllowed;
  }
  const items = [];
  if (tmp5) {
    let obj = { value: null, label: null, onPress: null };
    obj[0] = create.ExplicitContentRedaction.SHOW;
    const intl = getSystemLocale.intl;
    obj[1] = intl.string(getSystemLocale.t["5k5OFp"]);
    obj[2] = function onPress() {
      let obj = redactionSettingToRenderedString;
      if (obj.shouldAgeVerifyForExplicitMedia()) {
        obj = { entryPoint: null };
        obj[0] = AgeVerificationModalEntryPoint.AgeVerificationModalEntryPoint.OBSCURED_MEDIA;
        const result = openIncodeAgeVerificationModalDefault.showAgeVerificationGetStartedModal(obj);
      } else {
        callback(create.ExplicitContentRedaction.SHOW);
      }
    };
    items.push(obj);
  }
  let hasItem1;
  if (excluded != null) {
    hasItem1 = excluded.includes(create.ExplicitContentRedaction.BLUR);
  }
  if (!hasItem1) {
    obj = { value: null, label: null, onPress: null };
    obj[0] = create.ExplicitContentRedaction.BLUR;
    const intl2 = getSystemLocale.intl;
    obj[1] = intl2.string(getSystemLocale.t.S49Uad);
    obj[2] = function onPress() {
      callback(create.ExplicitContentRedaction.BLUR);
    };
    items.push(obj);
  }
  let hasItem2;
  if (excluded != null) {
    hasItem2 = excluded.includes(create.ExplicitContentRedaction.BLOCK);
  }
  if (!hasItem2) {
    obj = { value: null, label: null, onPress: null };
    obj[0] = create.ExplicitContentRedaction.BLOCK;
    const intl3 = getSystemLocale.intl;
    obj[1] = intl3.string(getSystemLocale.t["D/157Y"]);
    obj[2] = function onPress() {
      callback(create.ExplicitContentRedaction.BLOCK);
    };
    items.push(obj);
  }
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(14179, dependencyMap.paths), closure_4, { title, subtitle, options: items, currentValue });
};
export const shouldAgeVerifyForSearchMedia = function shouldAgeVerifyForSearchMedia(media, found) {
  if (null == found) {
    return false;
  } else {
    const enabledHarmTypesForMessage = getEligibleHarmTypesConfigsForContext.getEnabledHarmTypesForMessage(found);
    if (0 === enabledHarmTypesForMessage) {
      return false;
    } else {
      if (media.type === SearchMediaTypes.ATTACHMENT) {
        let obj = { type: null, media: null };
        obj[0] = ContentHarmTypeChannel.ObscuredMediaTypes.Attachment;
        obj[1] = media.attachment;
        let tmp = obj;
      } else if (media.type === SearchMediaTypes.EMBED) {
        obj = { type: null, media: null };
        obj[0] = ContentHarmTypeChannel.ObscuredMediaTypes.Embed;
        obj[1] = media.embed;
        tmp = obj;
      } else {
        tmp = null;
        if (media.type === SearchMediaTypes.COMPONENT) {
          obj = { type: null, media: null };
          obj[0] = ContentHarmTypeChannel.ObscuredMediaTypes.GenericMedia;
          obj[1] = media.unfurledMediaItem;
          tmp = obj;
        }
      }
      let tmp2 = null != tmp;
      if (tmp2) {
        let tmp4Result = getEligibleHarmTypesConfigsForContext;
        let result = tmp4Result.isMediaObscuredForHarmTypes(tmp, enabledHarmTypesForMessage);
        if (result) {
          tmp4Result = redactionSettingToRenderedString;
          result = tmp4Result.shouldAgeVerifyForExplicitMedia();
        }
        tmp2 = result;
      }
      return tmp2;
    }
  }
};