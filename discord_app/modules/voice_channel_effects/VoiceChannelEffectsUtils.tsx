// === Module 10622: VoiceChannelEffectsUtils ===

// Module 10622 (VoiceChannelEffectsUtils)
import util from "util" /* 1112 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1412 */;
import ImageLoaderUtils from "ImageLoaderUtils" /* 1447 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4740 */;
import EmojiUtilsDefault from "EmojiUtils" /* 4744 */;
import _modDef10624 from "module_10624" /* 10624 */;
import _modDef10625 from "module_10625" /* 10625 */;
import _modDef10626 from "module_10626" /* 10626 */;
import _modDef10627 from "module_10627" /* 10627 */;
import _modDef10628 from "module_10628" /* 10628 */;
import _modDef10629 from "module_10629" /* 10629 */;
import _modDef10630 from "module_10630" /* 10630 */;
import _modDef10631 from "module_10631" /* 10631 */;
import _modDef10632 from "module_10632" /* 10632 */;
import _modDef10633 from "module_10633" /* 10633 */;
import _modDef10634 from "module_10634" /* 10634 */;
import _modDef10635 from "module_10635" /* 10635 */;
import _modDef10636 from "module_10636" /* 10636 */;
import _modDef10637 from "module_10637" /* 10637 */;
import _modDef10638 from "module_10638" /* 10638 */;
import _modDef10639 from "module_10639" /* 10639 */;
import _modDef10640 from "module_10640" /* 10640 */;
import _modDef10641 from "module_10641" /* 10641 */;
import _modDef10642 from "module_10642" /* 10642 */;
import _modDef10643 from "module_10643" /* 10643 */;
import _modDef10644 from "module_10644" /* 10644 */;
import _modDef10645 from "module_10645" /* 10645 */;
import UserStore from "UserStore" /* 1386 */;
import apply from "apply" /* 12 */;

require = fn;
const VoiceChannelEffectsConstants = fn(10623);
({ EMOJI_SIZE: closure_4, VoiceChannelEffectAnimationType } = VoiceChannelEffectsConstants);
const items = [_modDef10624];
const items1 = [_modDef10625, _modDef10626, _modDef10627, _modDef10628, _modDef10629, _modDef10630, _modDef10631, _modDef10632, _modDef10633, _modDef10634, _modDef10635, _modDef10636, _modDef10637, _modDef10638, _modDef10639, _modDef10640, _modDef10641, _modDef10642, _modDef10643, _modDef10644, _modDef10645];
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