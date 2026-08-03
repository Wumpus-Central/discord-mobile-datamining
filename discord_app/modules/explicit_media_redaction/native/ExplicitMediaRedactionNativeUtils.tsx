import mergeGuildAvatar from "mergeGuildAvatar";
import { EXPLICIT_MEDIA_SETTINGS_ACTION_SHEET_KEY as closure_4 } from "USER_SETTING_ACTION_SHEET_KEY";
import { SearchMediaTypes } from "MessageEmbedTypes";

const require = arg1;
let result = require("MessageEmbedTypes").fileFinishedImporting("modules/explicit_media_redaction/native/ExplicitMediaRedactionNativeUtils.tsx");

export const handleSensitiveMediaFilterPress = function handleSensitiveMediaFilterPress(arg0) {
  let currentValue;
  let excluded;
  let require;
  let subtitle;
  let title;
  ({ handlePress: require, excluded } = arg0);
  ({ title, subtitle, currentValue } = arg0);
  currentUser = currentUser.getCurrentUser();
  if (currentUser != null) {
    const nsfwAllowed = currentUser.nsfwAllowed;
  }
  let hasItem;
  if (excluded != null) {
    hasItem = excluded.includes(require(1306) /* create */.ExplicitContentRedaction.SHOW);
  }
  let tmp5 = !hasItem;
  if (!hasItem) {
    tmp5 = nsfwAllowed;
  }
  const items = [];
  if (tmp5) {
    let obj = { value: null, label: null, onPress: null };
    obj[0] = require(1306) /* create */.ExplicitContentRedaction.SHOW;
    const intl = require(1236) /* getSystemLocale */.intl;
    obj[1] = intl.string(require(1236) /* getSystemLocale */.t["5k5OFp"]);
    obj[2] = function onPress() {
      let obj = outer1_0(outer1_2[5]);
      if (obj.shouldAgeVerifyForExplicitMedia()) {
        obj = { entryPoint: null };
        obj[0] = tmp(tmp2[7]).AgeVerificationModalEntryPoint.OBSCURED_MEDIA;
        const result = outer1_1(tmp2[6]).showAgeVerificationGetStartedModal(obj);
        const obj2 = outer1_1(tmp2[6]);
      } else {
        callback(tmp(tmp2[3]).ExplicitContentRedaction.SHOW);
      }
    };
    items.push(obj);
  }
  let hasItem1;
  if (excluded != null) {
    hasItem1 = excluded.includes(require(1306) /* create */.ExplicitContentRedaction.BLUR);
  }
  if (!hasItem1) {
    obj = { value: null, label: null, onPress: null };
    obj[0] = require(1306) /* create */.ExplicitContentRedaction.BLUR;
    const intl2 = require(1236) /* getSystemLocale */.intl;
    obj[1] = intl2.string(require(1236) /* getSystemLocale */.t.S49Uad);
    obj[2] = function onPress() {
      callback(outer1_0(outer1_2[3]).ExplicitContentRedaction.BLUR);
    };
    items.push(obj);
  }
  let hasItem2;
  if (excluded != null) {
    hasItem2 = excluded.includes(require(1306) /* create */.ExplicitContentRedaction.BLOCK);
  }
  if (!hasItem2) {
    obj = { value: null, label: null, onPress: null };
    obj[0] = require(1306) /* create */.ExplicitContentRedaction.BLOCK;
    const intl3 = require(1236) /* getSystemLocale */.intl;
    obj[1] = intl3.string(require(1236) /* getSystemLocale */.t["D/157Y"]);
    obj[2] = function onPress() {
      callback(outer1_0(outer1_2[3]).ExplicitContentRedaction.BLOCK);
    };
    items.push(obj);
  }
  importDefault(4223).openLazy(require(1959) /* asyncRequireImpl */(13939, dependencyMap.paths), closure_4, { title, subtitle, options: items, currentValue });
};
export const shouldAgeVerifyForSearchMedia = function shouldAgeVerifyForSearchMedia(media, found) {
  if (null == found) {
    return false;
  } else {
    const enabledHarmTypesForMessage = require(5789) /* getEligibleHarmTypesConfigsForContext */.getEnabledHarmTypesForMessage(found);
    if (0 === enabledHarmTypesForMessage) {
      return false;
    } else {
      if (media.type === SearchMediaTypes.ATTACHMENT) {
        let obj = { type: null, media: null };
        obj[0] = tmp4(5794).ObscuredMediaTypes.Attachment;
        obj[1] = media.attachment;
        let tmp = obj;
      } else if (media.type === tmp8.EMBED) {
        obj = { type: null, media: null };
        obj[0] = tmp4(5794).ObscuredMediaTypes.Embed;
        obj[1] = media.embed;
        tmp = obj;
      } else {
        tmp = null;
        if (media.type === tmp8.COMPONENT) {
          obj = { type: null, media: null };
          obj[0] = tmp4(5794).ObscuredMediaTypes.GenericMedia;
          obj[1] = media.unfurledMediaItem;
          tmp = obj;
        }
      }
      let tmp2 = null != tmp;
      if (tmp2) {
        let tmp4Result = tmp4(5789);
        let result = tmp4Result.isMediaObscuredForHarmTypes(tmp, enabledHarmTypesForMessage);
        if (result) {
          tmp4Result = tmp4(6956);
          result = tmp4Result.shouldAgeVerifyForExplicitMedia();
        }
        tmp2 = result;
      }
      return tmp2;
    }
    const obj5 = require(5789) /* getEligibleHarmTypesConfigsForContext */;
  }
};