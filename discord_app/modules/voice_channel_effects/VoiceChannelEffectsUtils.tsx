// === Module 6073: VoiceChannelEffectAnimationType ===

// Module 6073 (VoiceChannelEffectAnimationType)
import getAvatarURLDefault from "getAvatarURL" /* 1435 */;
import parseRawEmojiObjectDefault from "parseRawEmojiObject" /* 4038 */;
import getEmojiUnavailableReasonDefault from "getEmojiUnavailableReason" /* 4042 */;
import _modDef6074 from "module_6074" /* 6074 */;
import _modDef6075 from "module_6075" /* 6075 */;
import _modDef6076 from "module_6076" /* 6076 */;
import _modDef6077 from "module_6077" /* 6077 */;
import _modDef6078 from "module_6078" /* 6078 */;
import _modDef6079 from "module_6079" /* 6079 */;
import _modDef6080 from "module_6080" /* 6080 */;
import _modDef6081 from "module_6081" /* 6081 */;
import _modDef6082 from "module_6082" /* 6082 */;
import _modDef6083 from "module_6083" /* 6083 */;
import _modDef6084 from "module_6084" /* 6084 */;
import _modDef6085 from "module_6085" /* 6085 */;
import _modDef6086 from "module_6086" /* 6086 */;
import _modDef6087 from "module_6087" /* 6087 */;
import _modDef6088 from "module_6088" /* 6088 */;
import _modDef6089 from "module_6089" /* 6089 */;
import _modDef6090 from "module_6090" /* 6090 */;
import _modDef6091 from "module_6091" /* 6091 */;
import _modDef6092 from "module_6092" /* 6092 */;
import _modDef6093 from "module_6093" /* 6093 */;
import _modDef6094 from "module_6094" /* 6094 */;
import _modDef6095 from "module_6095" /* 6095 */;
import closure_3 from "mergeGuildAvatar" /* 1922 */;
import VoiceChannelEffectAnimationType from "VoiceChannelEffectAnimationType" /* 6072 */;
import importDefaultResult from "apply" /* 12 */;

const require = arg1;
({ EMOJI_SIZE: c4, VoiceChannelEffectAnimationType } = VoiceChannelEffectAnimationType);
const items = [_modDef6074];
const items1 = [_modDef6075, _modDef6076, _modDef6077, _modDef6078, _modDef6079, _modDef6080, _modDef6081, _modDef6082, _modDef6083, _modDef6084, _modDef6085, _modDef6086, _modDef6087, _modDef6088, _modDef6089, _modDef6090, _modDef6091, _modDef6092, _modDef6093, _modDef6094, _modDef6095];
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