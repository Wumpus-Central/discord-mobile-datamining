// === Module 6963: VoiceChannelEffectsUtils ===

// Module 6963 (VoiceChannelEffectsUtils)
import util from "util" /* 1115 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import ImageLoaderUtils from "ImageLoaderUtils" /* 1432 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4513 */;
import EmojiUtilsDefault from "EmojiUtils" /* 4517 */;
import _modDef6964 from "module_6964" /* 6964 */;
import _modDef6965 from "module_6965" /* 6965 */;
import _modDef6966 from "module_6966" /* 6966 */;
import _modDef6967 from "module_6967" /* 6967 */;
import _modDef6968 from "module_6968" /* 6968 */;
import _modDef6969 from "module_6969" /* 6969 */;
import _modDef6970 from "module_6970" /* 6970 */;
import _modDef6971 from "module_6971" /* 6971 */;
import _modDef6972 from "module_6972" /* 6972 */;
import _modDef6973 from "module_6973" /* 6973 */;
import _modDef6974 from "module_6974" /* 6974 */;
import _modDef6975 from "module_6975" /* 6975 */;
import _modDef6976 from "module_6976" /* 6976 */;
import _modDef6977 from "module_6977" /* 6977 */;
import _modDef6978 from "module_6978" /* 6978 */;
import _modDef6979 from "module_6979" /* 6979 */;
import _modDef6980 from "module_6980" /* 6980 */;
import _modDef6981 from "module_6981" /* 6981 */;
import _modDef6982 from "module_6982" /* 6982 */;
import _modDef6983 from "module_6983" /* 6983 */;
import _modDef6984 from "module_6984" /* 6984 */;
import _modDef6985 from "module_6985" /* 6985 */;
import UserStore from "UserStore" /* 1372 */;
import apply from "module_12" /* 12 */;

require = fn;
const VoiceChannelEffectsConstants = fn(6962);
({ EMOJI_SIZE: closure_4, VoiceChannelEffectAnimationType } = VoiceChannelEffectsConstants);
const items = [_modDef6964];
const items1 = [_modDef6965, _modDef6966, _modDef6967, _modDef6968, _modDef6969, _modDef6970, _modDef6971, _modDef6972, _modDef6973, _modDef6974, _modDef6975, _modDef6976, _modDef6977, _modDef6978, _modDef6979, _modDef6980, _modDef6981, _modDef6982, _modDef6983, _modDef6984, _modDef6985];
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