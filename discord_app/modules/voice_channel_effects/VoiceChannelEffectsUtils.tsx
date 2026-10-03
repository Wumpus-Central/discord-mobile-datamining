// === Module 6852: VoiceChannelEffectsUtils ===

// Module 6852 (VoiceChannelEffectsUtils)
import util from "util" /* 1126 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import ImageLoaderUtils from "ImageLoaderUtils" /* 1437 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4523 */;
import EmojiUtilsDefault from "EmojiUtils" /* 4527 */;
import _modDef6853 from "module_6853" /* 6853 */;
import _modDef6854 from "module_6854" /* 6854 */;
import _modDef6855 from "module_6855" /* 6855 */;
import _modDef6856 from "module_6856" /* 6856 */;
import _modDef6857 from "module_6857" /* 6857 */;
import _modDef6858 from "module_6858" /* 6858 */;
import _modDef6859 from "module_6859" /* 6859 */;
import _modDef6860 from "module_6860" /* 6860 */;
import _modDef6861 from "module_6861" /* 6861 */;
import _modDef6862 from "module_6862" /* 6862 */;
import _modDef6863 from "module_6863" /* 6863 */;
import _modDef6864 from "module_6864" /* 6864 */;
import _modDef6865 from "module_6865" /* 6865 */;
import _modDef6866 from "module_6866" /* 6866 */;
import _modDef6867 from "module_6867" /* 6867 */;
import _modDef6868 from "module_6868" /* 6868 */;
import _modDef6869 from "module_6869" /* 6869 */;
import _modDef6870 from "module_6870" /* 6870 */;
import _modDef6871 from "module_6871" /* 6871 */;
import _modDef6872 from "module_6872" /* 6872 */;
import _modDef6873 from "module_6873" /* 6873 */;
import _modDef6874 from "module_6874" /* 6874 */;
import UserStore from "UserStore" /* 1377 */;
import apply from "module_12" /* 12 */;

require = fn;
const VoiceChannelEffectsConstants = fn(6851);
({ EMOJI_SIZE: closure_4, VoiceChannelEffectAnimationType } = VoiceChannelEffectsConstants);
const items = [_modDef6853];
const items1 = [_modDef6854, _modDef6855, _modDef6856, _modDef6857, _modDef6858, _modDef6859, _modDef6860, _modDef6861, _modDef6862, _modDef6863, _modDef6864, _modDef6865, _modDef6866, _modDef6867, _modDef6868, _modDef6869, _modDef6870, _modDef6871, _modDef6872, _modDef6873, _modDef6874];
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