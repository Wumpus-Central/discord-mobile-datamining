// discord_app/modules/voice_channel_effects/VoiceChannelEffectsUtils.tsx
import getAvatarURLDefault from "../../utils/AvatarUtils.tsx";
import parseRawEmojiObjectDefault from "../emojis/UnicodeEmojis.tsx";
import getEmojiUnavailableReasonDefault from "../../utils/EmojiUtils.tsx";
import _modDef7310 from "../../../_runtime/metro/07310__.js";
import _modDef7311 from "../../../_runtime/metro/07311__.js";
import _modDef7312 from "../../../_runtime/metro/07312__.js";
import _modDef7313 from "../../../_runtime/metro/07313__.js";
import _modDef7314 from "../../../_runtime/metro/07314__.js";
import _modDef7315 from "../../../_runtime/metro/07315__.js";
import _modDef7316 from "../../../_runtime/metro/07316__.js";
import _modDef7317 from "../../../_runtime/metro/07317__.js";
import _modDef7318 from "../../../_runtime/metro/07318__.js";
import _modDef7319 from "../../../_runtime/metro/07319__.js";
import _modDef7320 from "../../../_runtime/metro/07320__.js";
import _modDef7321 from "../../../_runtime/metro/07321__.js";
import _modDef7322 from "../../../_runtime/metro/07322__.js";
import _modDef7323 from "../../../_runtime/metro/07323__.js";
import _modDef7324 from "../../../_runtime/metro/07324__.js";
import _modDef7325 from "../../../_runtime/metro/07325__.js";
import _modDef7326 from "../../../_runtime/metro/07326__.js";
import _modDef7327 from "../../../_runtime/metro/07327__.js";
import _modDef7328 from "../../../_runtime/metro/07328__.js";
import _modDef7329 from "../../../_runtime/metro/07329__.js";
import _modDef7330 from "../../../_runtime/metro/07330__.js";
import _modDef7331 from "../../../_runtime/metro/07331__.js";
import mergeGuildAvatar from "../../stores/UserStore.tsx";
import VoiceChannelEffectAnimationType from "VoiceChannelEffectsConstants.tsx";
import importDefaultResult from "../../../_runtime/00012_apply.js";

const require = fn;
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
      const result = closure_2_4 * callback(dependencyMap[25]).getDevicePixelRatio();
      if (image.width === result) {
        if (image.height === result) {
          callback(callback);
        }
      }
      const element = <canvas />;
      element.width = result;
      element.height = result;
      const context = element.getContext("2d");
      if (context != null) {
        context.drawImage(image, 0, 0);
      }
      callback(element.toDataURL("image/png"));
      obj = callback(dependencyMap[25]);
    };
  });
});
let result = require("obj132").fileFinishedImporting("modules/voice_channel_effects/VoiceChannelEffectsUtils.tsx");

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
  if (length.length < 1) {
    return "";
  } else {
    let yZYxzF = dependencyMap;
    const mapped = importDefaultResult(length).map((item, index) => {
      let tmp = item[emojiName];
      if (tmp == null) {
        tmp = null;
      }
      return tmp;
    });
    const found = mapped.filter((item, index) => null != item);
    const arr = importDefaultResult(length);
    obj = found.uniq().value();
    const emojiName = "emojiName";
    const iter = found.uniq();
    const mapped1 = importDefaultResult(length).map((item, index) => {
      let tmp = item[emojiName];
      if (tmp == null) {
        tmp = null;
      }
      return tmp;
    });
    const found1 = mapped1.filter((item, index) => null != item);
    const arr3 = importDefaultResult(length);
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
    }
    const iter2 = found1.uniq();
  }
};