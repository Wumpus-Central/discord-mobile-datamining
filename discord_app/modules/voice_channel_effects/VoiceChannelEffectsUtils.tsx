// discord_app/modules/voice_channel_effects/VoiceChannelEffectsUtils.tsx
import getAvatarURLDefault from "getAvatarURL" /* 1435 */;
import parseRawEmojiObjectDefault from "parseRawEmojiObject" /* 4034 */;
import getEmojiUnavailableReasonDefault from "getEmojiUnavailableReason" /* 4038 */;
import _modDef7310 from "module_7310" /* 7310 */;
import _modDef7311 from "module_7311" /* 7311 */;
import _modDef7312 from "module_7312" /* 7312 */;
import _modDef7313 from "module_7313" /* 7313 */;
import _modDef7314 from "module_7314" /* 7314 */;
import _modDef7315 from "module_7315" /* 7315 */;
import _modDef7316 from "module_7316" /* 7316 */;
import _modDef7317 from "module_7317" /* 7317 */;
import _modDef7318 from "module_7318" /* 7318 */;
import _modDef7319 from "module_7319" /* 7319 */;
import _modDef7320 from "module_7320" /* 7320 */;
import _modDef7321 from "module_7321" /* 7321 */;
import _modDef7322 from "module_7322" /* 7322 */;
import _modDef7323 from "module_7323" /* 7323 */;
import _modDef7324 from "module_7324" /* 7324 */;
import _modDef7325 from "module_7325" /* 7325 */;
import _modDef7326 from "module_7326" /* 7326 */;
import _modDef7327 from "module_7327" /* 7327 */;
import _modDef7328 from "module_7328" /* 7328 */;
import _modDef7329 from "module_7329" /* 7329 */;
import _modDef7330 from "module_7330" /* 7330 */;
import _modDef7331 from "module_7331" /* 7331 */;
import closure_3 from "mergeGuildAvatar" /* 1922 */;
import VoiceChannelEffectAnimationType from "VoiceChannelEffectAnimationType" /* 7308 */;
import importDefaultResult from "apply" /* 12 */;

const require = arg1;
({ EMOJI_SIZE: c4, VoiceChannelEffectAnimationType } = VoiceChannelEffectAnimationType);
const items = [_modDef7310];
const items1 = [_modDef7311, _modDef7312, _modDef7313, _modDef7314, _modDef7315, _modDef7316, _modDef7317, _modDef7318, _modDef7319, _modDef7320, _modDef7321, _modDef7322, _modDef7323, _modDef7324, _modDef7325, _modDef7326, _modDef7327, _modDef7328, _modDef7329, _modDef7330, _modDef7331];
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