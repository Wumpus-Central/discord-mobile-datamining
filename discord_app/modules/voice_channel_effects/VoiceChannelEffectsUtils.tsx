// discord_app/modules/voice_channel_effects/VoiceChannelEffectsUtils.tsx
import getAvatarURLDefault from "../../utils/AvatarUtils.tsx";
import parseRawEmojiObjectDefault from "../emojis/UnicodeEmojis.tsx";
import getEmojiUnavailableReasonDefault from "../../utils/EmojiUtils.tsx";
import _modDef6203 from "../../../_runtime/metro/06203__.js";
import _modDef6204 from "../../../_runtime/metro/06204__.js";
import _modDef6205 from "../../../_runtime/metro/06205__.js";
import _modDef6206 from "../../../_runtime/metro/06206__.js";
import _modDef6207 from "../../../_runtime/metro/06207__.js";
import _modDef6208 from "../../../_runtime/metro/06208__.js";
import _modDef6209 from "../../../_runtime/metro/06209__.js";
import _modDef6210 from "../../../_runtime/metro/06210__.js";
import _modDef6211 from "../../../_runtime/metro/06211__.js";
import _modDef6212 from "../../../_runtime/metro/06212__.js";
import _modDef6213 from "../../../_runtime/metro/06213__.js";
import _modDef6214 from "../../../_runtime/metro/06214__.js";
import _modDef6215 from "../../../_runtime/metro/06215__.js";
import _modDef6216 from "../../../_runtime/metro/06216__.js";
import _modDef6217 from "../../../_runtime/metro/06217__.js";
import _modDef6218 from "../../../_runtime/metro/06218__.js";
import _modDef6219 from "../../../_runtime/metro/06219__.js";
import _modDef6220 from "../../../_runtime/metro/06220__.js";
import _modDef6221 from "../../../_runtime/metro/06221__.js";
import _modDef6222 from "../../../_runtime/metro/06222__.js";
import _modDef6223 from "../../../_runtime/metro/06223__.js";
import _modDef6224 from "../../../_runtime/metro/06224__.js";
import closure_3 from "../../stores/UserStore.tsx";
import VoiceChannelEffectAnimationType from "VoiceChannelEffectsConstants.tsx";
import importDefaultResult from "../../../_runtime/00012_apply.js";

const require = arg1;
({ EMOJI_SIZE: c4, VoiceChannelEffectAnimationType } = VoiceChannelEffectAnimationType);
const items = [_modDef6203];
const items1 = [
  _modDef6204,
  _modDef6205,
  _modDef6206,
  _modDef6207,
  _modDef6208,
  _modDef6209,
  _modDef6210,
  _modDef6211,
  _modDef6212,
  _modDef6213,
  _modDef6214,
  _modDef6215,
  _modDef6216,
  _modDef6217,
  _modDef6218,
  _modDef6219,
  _modDef6220,
  _modDef6221,
  _modDef6222,
  _modDef6223,
  _modDef6224,
];
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
      const intl2 = emojiName(1233).intl;
      yZYxzF = emojiName(1233).t.yZYxzF;
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
      const intl = emojiName(1233).intl;
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
      formatToPlainStringResult = intl.formatToPlainString(emojiName(1233).t["8rmtbd"], obj);
      const obj2 = authStore;
    } else {
      const intl3 = emojiName(1233).intl;
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
      formatToPlainStringResult = intl3.formatToPlainString(emojiName(1233).t["/okjv0"], obj);
      const obj7 = authStore;
    }
    const iter2 = found1.uniq();
  }
};
