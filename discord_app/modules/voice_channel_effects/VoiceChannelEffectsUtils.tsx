// === Module 7051: VoiceChannelEffectsUtils ===

// Module 7051 (VoiceChannelEffectsUtils)
import util from "util" /* 1126 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1414 */;
import ImageLoaderUtils from "ImageLoaderUtils" /* 1449 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4721 */;
import EmojiUtilsDefault from "EmojiUtils" /* 4725 */;
import _modDef7052 from "module_7052" /* 7052 */;
import _modDef7053 from "module_7053" /* 7053 */;
import _modDef7054 from "module_7054" /* 7054 */;
import _modDef7055 from "module_7055" /* 7055 */;
import _modDef7056 from "module_7056" /* 7056 */;
import _modDef7057 from "module_7057" /* 7057 */;
import _modDef7058 from "module_7058" /* 7058 */;
import _modDef7059 from "module_7059" /* 7059 */;
import _modDef7060 from "module_7060" /* 7060 */;
import _modDef7061 from "module_7061" /* 7061 */;
import _modDef7062 from "module_7062" /* 7062 */;
import _modDef7063 from "module_7063" /* 7063 */;
import _modDef7064 from "module_7064" /* 7064 */;
import _modDef7065 from "module_7065" /* 7065 */;
import _modDef7066 from "module_7066" /* 7066 */;
import _modDef7067 from "module_7067" /* 7067 */;
import _modDef7068 from "module_7068" /* 7068 */;
import _modDef7069 from "module_7069" /* 7069 */;
import _modDef7070 from "module_7070" /* 7070 */;
import _modDef7071 from "module_7071" /* 7071 */;
import _modDef7072 from "module_7072" /* 7072 */;
import _modDef7073 from "module_7073" /* 7073 */;
import UserStore from "UserStore" /* 1389 */;
import apply from "module_12" /* 12 */;

require = fn;
const VoiceChannelEffectsConstants = fn(7050);
({ EMOJI_SIZE: closure_4, VoiceChannelEffectAnimationType } = VoiceChannelEffectsConstants);
const items = [_modDef7052];
const items1 = [_modDef7053, _modDef7054, _modDef7055, _modDef7056, _modDef7057, _modDef7058, _modDef7059, _modDef7060, _modDef7061, _modDef7062, _modDef7063, _modDef7064, _modDef7065, _modDef7066, _modDef7067, _modDef7068, _modDef7069, _modDef7070, _modDef7071, _modDef7072, _modDef7073];
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
    const obj3 = { id: null, animated: null, size: null };
    ({ id: obj5.id, animated } = emoji);
    if (animated == null) {
      animated = false;
    }
    obj3.animated = animated;
    obj3.size = tmp;
    return AvatarUtilsDefault.getEmojiURL(obj3);
  } else {
    const result = UnicodeEmojisDefault.convertSurrogateToName(emoji.name, false);
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
    let obj3 = found.uniq().value();
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
    const valueResult2 = found1.uniq().value();
    if (valueResult2.length < 2) {
      let str2;
      if (valueResult2 != null) {
        str2 = valueResult2[0];
      }
      if (str2 == null) {
        str2 = "";
      }
      let joined = str2;
    } else {
      joined = valueResult2.join(", ");
    }
    if (obj3.length < 1) {
      return "";
    } else if (1 === obj3.length) {
      const intl2 = util.intl;
      yZYxzF = util.t.yZYxzF;
      const user = UserStore.getUser(obj3[0]);
      let username;
      if (user != null) {
        username = user.username;
      }
      obj3 = { firstUsername: username, emojiNames: joined };
      let formatToPlainStringResult = intl2.formatToPlainString(yZYxzF, obj3);
    } else if (2 === obj3.length) {
      const intl = util.intl;
      const user1 = UserStore.getUser(obj3[0]);
      let username1;
      if (user1 != null) {
        username1 = user1.username;
      }
      const obj4 = { firstUsername: username1, secondUsername: null, emojiNames: null };
      const user2 = UserStore.getUser(obj3[1]);
      let username2;
      if (user2 != null) {
        username2 = user2.username;
      }
      obj4.secondUsername = username2;
      obj4.emojiNames = joined;
      formatToPlainStringResult = intl.formatToPlainString(util.t["8rmtbd"], obj4);
    } else {
      const intl3 = util.intl;
      const user3 = UserStore.getUser(obj3[0]);
      let username3;
      if (user3 != null) {
        username3 = user3.username;
      }
      const obj = { firstUsername: username3, secondUsername: null, count: null, emojiNames: null };
      const user4 = UserStore.getUser(obj3[1]);
      let username4;
      if (user4 != null) {
        username4 = user4.username;
      }
      obj.secondUsername = username4;
      obj.count = obj3.length - 2;
      obj.emojiNames = joined;
      formatToPlainStringResult = intl3.formatToPlainString(util.t["/okjv0"], obj);
    }
    const iter2 = found1.uniq();
  }
};