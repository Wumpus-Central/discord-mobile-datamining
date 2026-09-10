// === Module 7401: VoiceChannelEffectsUtils ===

// Module 7401 (VoiceChannelEffectsUtils)
import util from "util" /* 1114 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import ImageLoaderUtils from "ImageLoaderUtils" /* 1430 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4257 */;
import EmojiUtilsDefault from "EmojiUtils" /* 4261 */;
import _modDef7402 from "module_7402" /* 7402 */;
import _modDef7403 from "module_7403" /* 7403 */;
import _modDef7404 from "module_7404" /* 7404 */;
import _modDef7405 from "module_7405" /* 7405 */;
import _modDef7406 from "module_7406" /* 7406 */;
import _modDef7407 from "module_7407" /* 7407 */;
import _modDef7408 from "module_7408" /* 7408 */;
import _modDef7409 from "module_7409" /* 7409 */;
import _modDef7410 from "module_7410" /* 7410 */;
import _modDef7411 from "module_7411" /* 7411 */;
import _modDef7412 from "module_7412" /* 7412 */;
import _modDef7413 from "module_7413" /* 7413 */;
import _modDef7414 from "module_7414" /* 7414 */;
import _modDef7415 from "module_7415" /* 7415 */;
import _modDef7416 from "module_7416" /* 7416 */;
import _modDef7417 from "module_7417" /* 7417 */;
import _modDef7418 from "module_7418" /* 7418 */;
import _modDef7419 from "module_7419" /* 7419 */;
import _modDef7420 from "module_7420" /* 7420 */;
import _modDef7421 from "module_7421" /* 7421 */;
import _modDef7422 from "module_7422" /* 7422 */;
import _modDef7423 from "module_7423" /* 7423 */;
import UserStore from "UserStore" /* 1371 */;
import apply from "module_12" /* 12 */;

require = fn;
const VoiceChannelEffectsConstants = fn(7400);
({ EMOJI_SIZE: closure_4, VoiceChannelEffectAnimationType } = VoiceChannelEffectsConstants);
const items = [_modDef7402];
const items1 = [_modDef7403, _modDef7404, _modDef7405, _modDef7406, _modDef7407, _modDef7408, _modDef7409, _modDef7410, _modDef7411, _modDef7412, _modDef7413, _modDef7414, _modDef7415, _modDef7416, _modDef7417, _modDef7418, _modDef7419, _modDef7420, _modDef7421, _modDef7422, _modDef7423];
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