// === Module 7422: VoiceChannelEffectsUtils ===

// Module 7422 (VoiceChannelEffectsUtils)
import util from "util" /* 1114 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import ImageLoaderUtils from "ImageLoaderUtils" /* 1430 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4259 */;
import EmojiUtilsDefault from "EmojiUtils" /* 4263 */;
import _modDef7423 from "module_7423" /* 7423 */;
import _modDef7424 from "module_7424" /* 7424 */;
import _modDef7425 from "module_7425" /* 7425 */;
import _modDef7426 from "module_7426" /* 7426 */;
import _modDef7427 from "module_7427" /* 7427 */;
import _modDef7428 from "module_7428" /* 7428 */;
import _modDef7429 from "module_7429" /* 7429 */;
import _modDef7430 from "module_7430" /* 7430 */;
import _modDef7431 from "module_7431" /* 7431 */;
import _modDef7432 from "module_7432" /* 7432 */;
import _modDef7433 from "module_7433" /* 7433 */;
import _modDef7434 from "module_7434" /* 7434 */;
import _modDef7435 from "module_7435" /* 7435 */;
import _modDef7436 from "module_7436" /* 7436 */;
import _modDef7437 from "module_7437" /* 7437 */;
import _modDef7438 from "module_7438" /* 7438 */;
import _modDef7439 from "module_7439" /* 7439 */;
import _modDef7440 from "module_7440" /* 7440 */;
import _modDef7441 from "module_7441" /* 7441 */;
import _modDef7442 from "module_7442" /* 7442 */;
import _modDef7443 from "module_7443" /* 7443 */;
import _modDef7444 from "module_7444" /* 7444 */;
import UserStore from "UserStore" /* 1371 */;
import apply from "module_12" /* 12 */;

require = fn;
const VoiceChannelEffectsConstants = fn(7421);
({ EMOJI_SIZE: closure_4, VoiceChannelEffectAnimationType } = VoiceChannelEffectsConstants);
const items = [_modDef7423];
const items1 = [_modDef7424, _modDef7425, _modDef7426, _modDef7427, _modDef7428, _modDef7429, _modDef7430, _modDef7431, _modDef7432, _modDef7433, _modDef7434, _modDef7435, _modDef7436, _modDef7437, _modDef7438, _modDef7439, _modDef7440, _modDef7441, _modDef7442, _modDef7443, _modDef7444];
const AnimationTypeToAnimations = { [VoiceChannelEffectAnimationType.BASIC]: items, [VoiceChannelEffectAnimationType.PREMIUM]: items1 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_channel_effects/VoiceChannelEffectsUtils.tsx");

export const CUSTOM_CALL_SOUND_ANIMATION_RANGE = { start: 10, end: 15 };
export { AnimationTypeToAnimations };
export const getResizedEmojiData = apply.memoize((src) => new Promise((arg0) => {
  src = arg0;
  const image = new globalThis.Image();
  image.src = src;
  image.crossOrigin = "Anonymous";
  image.onload = () => {
    const result = React4 * ImageLoaderUtils.getDevicePixelRatio();
    if (image.width === result) {
      if (image.height === result) {
        closure_0(closure_0);
      }
    }
    const element = <canvas />;
    element.width = result;
    element.height = result;
    const context = element.getContext("2d");
    if (context != null) {
      context.drawImage(image, 0, 0);
    }
    closure_0(element.toDataURL("image/png"));
  };
}));
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
    tmp = React4;
  }
  if (null != emoji.id) {
    let obj = { id: null, animated: null, size: null };
    ({ id: obj5.id, animated } = emoji);
    if (animated == null) {
      animated = false;
    }
    obj.animated = animated;
    obj.size = tmp;
    return AvatarUtilsDefault.getEmojiURL(obj);
  } else {
    obj = UnicodeEmojisDefault;
    const result = obj.convertSurrogateToName(emoji.name, false);
    const byName = UnicodeEmojisDefault.getByName(result);
    let str = "";
    if (null != byName) {
      str = EmojiUtilsDefault.getURL(byName.surrogates);
      const tmp2Result = EmojiUtilsDefault;
    }
    return str;
  }
};
export const getEffectAnnouncement = function getEffectAnnouncement(items) {
  if (items.length < 1) {
    return "";
  } else {
    let emojiName = "userId";
    let yZYxzF = dependencyMap;
    const mapped = apply(items).map((item) => {
      let tmp = item[emojiName];
      if (tmp == null) {
        tmp = null;
      }
      return tmp;
    });
    const found = mapped.filter((item) => null != item);
    const arr = apply(items);
    let obj = found.uniq().value();
    emojiName = "emojiName";
    const iter = found.uniq();
    const mapped1 = apply(items).map((item) => {
      let tmp = item[emojiName];
      if (tmp == null) {
        tmp = null;
      }
      return tmp;
    });
    const found1 = mapped1.filter((item) => null != item);
    const arr3 = apply(items);
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
      const intl2 = util.intl;
      yZYxzF = util.t.yZYxzF;
      const user = UserStore.getUser(obj[0]);
      let username;
      if (user != null) {
        username = user.username;
      }
      obj = { firstUsername: username, emojiNames: joined };
      let formatToPlainStringResult = intl2.formatToPlainString(yZYxzF, obj);
    } else if (2 === obj.length) {
      const intl = util.intl;
      const user1 = UserStore.getUser(obj[0]);
      let username1;
      if (user1 != null) {
        username1 = user1.username;
      }
      obj = { firstUsername: username1, secondUsername: null, emojiNames: null };
      const user2 = UserStore.getUser(obj[1]);
      let username2;
      if (user2 != null) {
        username2 = user2.username;
      }
      obj.secondUsername = username2;
      obj.emojiNames = joined;
      formatToPlainStringResult = intl.formatToPlainString(util.t["8rmtbd"], obj);
    } else {
      const intl3 = util.intl;
      const user3 = UserStore.getUser(obj[0]);
      let username3;
      if (user3 != null) {
        username3 = user3.username;
      }
      obj = { firstUsername: username3, secondUsername: null, count: null, emojiNames: null };
      const user4 = UserStore.getUser(obj[1]);
      let username4;
      if (user4 != null) {
        username4 = user4.username;
      }
      obj.secondUsername = username4;
      obj.count = obj.length - 2;
      obj.emojiNames = joined;
      formatToPlainStringResult = intl3.formatToPlainString(util.t["/okjv0"], obj);
    }
    const iter2 = found1.uniq();
  }
};