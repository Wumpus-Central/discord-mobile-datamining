import mergeGuildAvatar from "mergeGuildAvatar";
import VoiceChannelEffectAnimationType from "VoiceChannelEffectAnimationType";
import importDefaultResult from "module_5874";

let VoiceChannelEffectAnimationType;
let c4;
const require = arg1;
({ EMOJI_SIZE: c4, VoiceChannelEffectAnimationType } = VoiceChannelEffectAnimationType);
const items = [require("module_5864")];
const items1 = [require("module_5865"), require("module_5866"), require("module_5867"), require("module_5868"), require("module_5869"), require("module_5870"), require("module_5871"), require("module_5872"), require("module_5873"), require("module_5874"), require("module_5875"), require("module_5876"), require("module_5877"), require("module_5878"), require("module_5879"), require("module_5880"), require("module_5881"), require("module_5882"), require("module_5883"), require("module_5884"), require("module_5885")];
let obj = { [VoiceChannelEffectAnimationType.BASIC]: items, [VoiceChannelEffectAnimationType.PREMIUM]: items1 };
const memoizeResult = require("module_5874").memoize((arg0) => {
  let closure_0 = arg0;
  return new Promise((arg0) => {
    let closure_0 = arg0;
    const image = new globalThis.Image();
    image.src = closure_0;
    image.crossOrigin = "Anonymous";
    image.onload = () => {
      const result = outer2_4 * callback(outer2_2[25]).getDevicePixelRatio();
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
let result = require("module_5864").fileFinishedImporting("modules/voice_channel_effects/VoiceChannelEffectsUtils.tsx");

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
  let animated;
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = closure_4;
  }
  if (null != emoji.id) {
    let obj = { id: null, animated: null, size: null };
    ({ id: obj5[0], animated } = emoji);
    if (animated == null) {
      animated = false;
    }
    obj[1] = animated;
    obj[2] = tmp;
    return importDefault(1416).getEmojiURL(obj);
  } else {
    obj = importDefault(3896);
    const result = obj.convertSurrogateToName(emoji.name, false);
    const byName = importDefault(3896).getByName(result);
    let str = "";
    if (null != byName) {
      str = importDefault(3900).getURL(byName.surrogates);
      const tmp2Result = importDefault(3900);
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
    const mapped = importDefault(12)(closure_7).map((arg0) => {
      let tmp = arg0[emojiName];
      if (tmp == null) {
        tmp = null;
      }
      return tmp;
    });
    const found = mapped.filter((arg0) => null != arg0);
    const arr = importDefault(12)(closure_7);
    let obj = found.uniq().value();
    emojiName = "emojiName";
    const iter = found.uniq();
    const mapped1 = importDefault(12)(closure_7).map((arg0) => {
      let tmp = arg0[emojiName];
      if (tmp == null) {
        tmp = null;
      }
      return tmp;
    });
    const found1 = mapped1.filter((arg0) => null != arg0);
    const arr3 = importDefault(12)(closure_7);
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