// === Module 10159: VoiceChannelEffectsUtils ===

// Module 10159 (VoiceChannelEffectsUtils)
import util from "util" /* 1112 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1413 */;
import ImageLoaderUtils from "ImageLoaderUtils" /* 1448 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4989 */;
import EmojiUtilsDefault from "EmojiUtils" /* 4993 */;
import _modDef10161 from "module_10161" /* 10161 */;
import _modDef10162 from "module_10162" /* 10162 */;
import _modDef10163 from "module_10163" /* 10163 */;
import _modDef10164 from "module_10164" /* 10164 */;
import _modDef10165 from "module_10165" /* 10165 */;
import _modDef10166 from "module_10166" /* 10166 */;
import _modDef10167 from "module_10167" /* 10167 */;
import _modDef10168 from "module_10168" /* 10168 */;
import _modDef10169 from "module_10169" /* 10169 */;
import _modDef10170 from "module_10170" /* 10170 */;
import _modDef10171 from "module_10171" /* 10171 */;
import _modDef10172 from "module_10172" /* 10172 */;
import _modDef10173 from "module_10173" /* 10173 */;
import _modDef10174 from "module_10174" /* 10174 */;
import _modDef10175 from "module_10175" /* 10175 */;
import _modDef10176 from "module_10176" /* 10176 */;
import _modDef10177 from "module_10177" /* 10177 */;
import _modDef10178 from "module_10178" /* 10178 */;
import _modDef10179 from "module_10179" /* 10179 */;
import _modDef10180 from "module_10180" /* 10180 */;
import _modDef10181 from "module_10181" /* 10181 */;
import _modDef10182 from "module_10182" /* 10182 */;
import UserStore from "UserStore" /* 1387 */;
import apply from "apply" /* 12 */;

require = fn;
const VoiceChannelEffectsConstants = fn(10160);
({ EMOJI_SIZE: closure_4, VoiceChannelEffectAnimationType } = VoiceChannelEffectsConstants);
const items = [_modDef10161];
const items1 = [_modDef10162, _modDef10163, _modDef10164, _modDef10165, _modDef10166, _modDef10167, _modDef10168, _modDef10169, _modDef10170, _modDef10171, _modDef10172, _modDef10173, _modDef10174, _modDef10175, _modDef10176, _modDef10177, _modDef10178, _modDef10179, _modDef10180, _modDef10181, _modDef10182];
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
export function sampleAnimationId(BASIC, CUSTOM_CALL_SOUND_ANIMATION_RANGE) {
  if (null != CUSTOM_CALL_SOUND_ANIMATION_RANGE) {
    if (BASIC === VoiceChannelEffectAnimationType.PREMIUM) {
      const sum = CUSTOM_CALL_SOUND_ANIMATION_RANGE.end + 1;
      const _Math = Math;
      const _Math2 = Math;
      return Math.floor(Math.random() * (CUSTOM_CALL_SOUND_ANIMATION_RANGE.start - sum) + sum);
    }
  }
  return Math.floor(Math.random() * obj[BASIC].length);
}
export function getEffectUrl(emoji) {
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
}
export function getEffectAnnouncement(items) {
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
}