// === Module 6158: VoiceChannelEffectAnimationType ===

// Module 6158 (VoiceChannelEffectAnimationType)
import getAvatarURLDefault from "getAvatarURL" /* 1435 */;
import parseRawEmojiObjectDefault from "parseRawEmojiObject" /* 4103 */;
import getEmojiUnavailableReasonDefault from "getEmojiUnavailableReason" /* 4107 */;
import _modDef6159 from "module_6159" /* 6159 */;
import _modDef6160 from "module_6160" /* 6160 */;
import _modDef6161 from "module_6161" /* 6161 */;
import _modDef6162 from "module_6162" /* 6162 */;
import _modDef6163 from "module_6163" /* 6163 */;
import _modDef6164 from "module_6164" /* 6164 */;
import _modDef6165 from "module_6165" /* 6165 */;
import _modDef6166 from "module_6166" /* 6166 */;
import _modDef6167 from "module_6167" /* 6167 */;
import _modDef6168 from "module_6168" /* 6168 */;
import _modDef6169 from "module_6169" /* 6169 */;
import _modDef6170 from "module_6170" /* 6170 */;
import _modDef6171 from "module_6171" /* 6171 */;
import _modDef6172 from "module_6172" /* 6172 */;
import _modDef6173 from "module_6173" /* 6173 */;
import _modDef6174 from "module_6174" /* 6174 */;
import _modDef6175 from "module_6175" /* 6175 */;
import _modDef6176 from "module_6176" /* 6176 */;
import _modDef6177 from "module_6177" /* 6177 */;
import _modDef6178 from "module_6178" /* 6178 */;
import _modDef6179 from "module_6179" /* 6179 */;
import _modDef6180 from "module_6180" /* 6180 */;
import closure_3 from "mergeGuildAvatar" /* 1923 */;
import VoiceChannelEffectAnimationType from "VoiceChannelEffectAnimationType" /* 6157 */;
import importDefaultResult from "apply" /* 12 */;

const require = arg1;
({ EMOJI_SIZE: c4, VoiceChannelEffectAnimationType } = VoiceChannelEffectAnimationType);
const items = [_modDef6159];
const items1 = [_modDef6160, _modDef6161, _modDef6162, _modDef6163, _modDef6164, _modDef6165, _modDef6166, _modDef6167, _modDef6168, _modDef6169, _modDef6170, _modDef6171, _modDef6172, _modDef6173, _modDef6174, _modDef6175, _modDef6176, _modDef6177, _modDef6178, _modDef6179, _modDef6180];
let obj = { [VoiceChannelEffectAnimationType.BASIC]: items, [VoiceChannelEffectAnimationType.PREMIUM]: items1 };
const memoizeResult = importDefaultResult.memoize((arg0) => {
  closure_0 = arg0;
  return new Promise((arg0) => {
    closure_0 = arg0;
    const image = new globalThis.Image();
    image.src = closure_0;
    image.crossOrigin = "Anonymous";
    image.onload = () => {
      const result = closure_2_4 * callback(closure_2_2[25]).getDevicePixelRatio();
      if (image.width === result) {
        if (tmp2.height === result) {
          callback(callback);
        }
      }
      const element = <canvas />;
      element.width = result;
      element.height = result;
      const context = element.getContext("2d");
      if (context != null) {
        context.drawImage(tmp2, 0, 0);
      }
      callback(element.toDataURL("image/png"));
    };
  });
});
let result = require("set").fileFinishedImporting("modules/voice_channel_effects/VoiceChannelEffectsUtils.tsx");

export const CUSTOM_CALL_SOUND_ANIMATION_RANGE = { start: 10, end: 15 };
export const AnimationTypeToAnimations = obj;
export const getResizedEmojiData = memoizeResult;
export const sampleAnimationId = function sampleAnimationId(BASIC, CUSTOM_CALL_SOUND_ANIMATION_RANGE) {
  if (null != CUSTOM_CALL_SOUND_ANIMATION_RANGE) {
    if (BASIC === VoiceChannelEffectAnimationType.PREMIUM) {
      const sum = CUSTOM_CALL_SOUND_ANIMATION_RANGE.end + 1;
      const _Math = Math;
      const _Math2 = Math;
      return Math.floor(Math.random() * (CUSTOM_CALL_SOUND_ANIMATION_RANGE.start - sum) + sum);
    }
  }
  return Math.floor(Math.random() * obj[BASIC].length);
};
export const getEffectUrl = function getEffectUrl(emoji) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = closure_4;
  }
  if (null != emoji.id) {
    obj = { id: null, animated: null, size: null };
    ({ id: obj5[0], animated } = emoji);
    if (animated == null) {
      animated = false;
    }
    obj[1] = animated;
    obj[2] = tmp;
    return getAvatarURLDefault.getEmojiURL(obj);
  } else {
    obj = parseRawEmojiObjectDefault;
    const result = obj.convertSurrogateToName(emoji.name, false);
    const byName = parseRawEmojiObjectDefault.getByName(result);
    let str = "";
    if (null != byName) {
      str = getEmojiUnavailableReasonDefault.getURL(byName.surrogates);
      const tmp2Result = getEmojiUnavailableReasonDefault;
    }
    return str;
  }
};
export const getEffectAnnouncement = function getEffectAnnouncement(closure_7) {
  if (closure_7.length < 1) {
    return "";
  } else {
    let emojiName = "userId";
    let yZYxzF = dependencyMap;
    const mapped = importDefaultResult(closure_7).map((arg0) => {
      let tmp = arg0[emojiName];
      if (tmp == null) {
        tmp = null;
      }
      return tmp;
    });
    const found = mapped.filter((arg0) => null != arg0);
    const arr = importDefaultResult(closure_7);
    obj = found.uniq().value();
    emojiName = "emojiName";
    const iter = found.uniq();
    const mapped1 = importDefaultResult(closure_7).map((arg0) => {
      let tmp = arg0[emojiName];
      if (tmp == null) {
        tmp = null;
      }
      return tmp;
    });
    const found1 = mapped1.filter((arg0) => null != arg0);
    const arr3 = importDefaultResult(closure_7);
    const valueResult = found1.uniq().value();
    if (valueResult.length < 2) {
      let str2;
      if (valueResult != null) {
        str2 = valueResult[0];
      }
      if (str2 == null) {
        str2 = "";
      }
      let joined = str2;
    } else {
      joined = valueResult.join(", ");
    }
    if (obj.length < 1) {
      return "";
    } else if (1 === obj.length) {
      const intl2 = emojiName(1236).intl;
      yZYxzF = emojiName(1236).t.yZYxzF;
      const user = authStore.getUser(obj[0]);
      let username;
      if (user != null) {
        username = user.username;
      }
      obj = { firstUsername: null, emojiNames: null };
      obj[0] = username;
      obj[1] = joined;
      let formatToPlainStringResult = intl2.formatToPlainString(yZYxzF, obj);
    } else if (2 === obj.length) {
      const intl = emojiName(1236).intl;
      const user1 = authStore.getUser(obj[0]);
      let username1;
      if (user1 != null) {
        username1 = user1.username;
      }
      obj = { firstUsername: null, secondUsername: null, emojiNames: null };
      obj[0] = username1;
      const user2 = authStore.getUser(obj[1]);
      let username2;
      if (user2 != null) {
        username2 = user2.username;
      }
      obj[1] = username2;
      obj[2] = joined;
      formatToPlainStringResult = intl.formatToPlainString(emojiName(1236).t["8rmtbd"], obj);
      const obj2 = authStore;
    } else {
      const intl3 = emojiName(1236).intl;
      const user3 = authStore.getUser(obj[0]);
      let username3;
      if (user3 != null) {
        username3 = user3.username;
      }
      obj = { firstUsername: null, secondUsername: null, count: null, emojiNames: null };
      obj[0] = username3;
      const user4 = authStore.getUser(obj[1]);
      let username4;
      if (user4 != null) {
        username4 = user4.username;
      }
      obj[1] = username4;
      obj[2] = obj.length - 2;
      obj[3] = joined;
      formatToPlainStringResult = intl3.formatToPlainString(emojiName(1236).t["/okjv0"], obj);
      const obj7 = authStore;
    }
    const iter2 = found1.uniq();
  }
};