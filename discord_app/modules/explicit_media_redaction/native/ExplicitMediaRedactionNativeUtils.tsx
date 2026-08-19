// === Module 14178: handleSensitiveMediaFilterPress ===

// Module 14178 (handleSensitiveMediaFilterPress)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import create from "create" /* 1306 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import redactionSettingToRenderedString from "redactionSettingToRenderedString" /* 5001 */;
import getEligibleHarmTypesConfigsForContext from "getEligibleHarmTypesConfigsForContext" /* 5019 */;
import ContentHarmTypeChannel from "ContentHarmTypeChannel" /* 5022 */;
import AgeVerificationModalEntryPoint from "AgeVerificationModalEntryPoint" /* 5254 */;
import openIncodeAgeVerificationModalDefault from "openIncodeAgeVerificationModal" /* 5428 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import { EXPLICIT_MEDIA_SETTINGS_ACTION_SHEET_KEY as closure_4 } from "USER_SETTING_ACTION_SHEET_KEY" /* 5004 */;
import { SearchMediaTypes } from "MessageEmbedTypes" /* 8507 */;

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