// discord_app/modules/voice_channel_effects/VoiceChannelEffectsUtils.tsx
import util from "../../intl/index.native.tsx";
import AvatarUtilsDefault from "../../utils/AvatarUtils.tsx";
import ImageLoaderUtils from "../image_upload/ImageLoaderUtils.tsx";
import UnicodeEmojisDefault from "../emojis/UnicodeEmojis.tsx";
import EmojiUtilsDefault from "../../utils/EmojiUtils.tsx";
import _modDef10119 from "../../../_runtime/metro/10119__.js";
import _modDef10120 from "../../../_runtime/metro/10120__.js";
import _modDef10121 from "../../../_runtime/metro/10121__.js";
import _modDef10122 from "../../../_runtime/metro/10122__.js";
import _modDef10123 from "../../../_runtime/metro/10123__.js";
import _modDef10124 from "../../../_runtime/metro/10124__.js";
import _modDef10125 from "../../../_runtime/metro/10125__.js";
import _modDef10126 from "../../../_runtime/metro/10126__.js";
import _modDef10127 from "../../../_runtime/metro/10127__.js";
import _modDef10128 from "../../../_runtime/metro/10128__.js";
import _modDef10129 from "../../../_runtime/metro/10129__.js";
import _modDef10130 from "../../../_runtime/metro/10130__.js";
import _modDef10131 from "../../../_runtime/metro/10131__.js";
import _modDef10132 from "../../../_runtime/metro/10132__.js";
import _modDef10133 from "../../../_runtime/metro/10133__.js";
import _modDef10134 from "../../../_runtime/metro/10134__.js";
import _modDef10135 from "../../../_runtime/metro/10135__.js";
import _modDef10136 from "../../../_runtime/metro/10136__.js";
import _modDef10137 from "../../../_runtime/metro/10137__.js";
import _modDef10138 from "../../../_runtime/metro/10138__.js";
import _modDef10139 from "../../../_runtime/metro/10139__.js";
import _modDef10140 from "../../../_runtime/metro/10140__.js";
import UserStore from "../../stores/UserStore.tsx";
import apply from "../../../_runtime/00012_apply.js";

require = fn;
const VoiceChannelEffectsConstants = fn(10118);
({ EMOJI_SIZE: closure_4, VoiceChannelEffectAnimationType } = VoiceChannelEffectsConstants);
const items = [_modDef10119];
const items1 = [
  _modDef10120,
  _modDef10121,
  _modDef10122,
  _modDef10123,
  _modDef10124,
  _modDef10125,
  _modDef10126,
  _modDef10127,
  _modDef10128,
  _modDef10129,
  _modDef10130,
  _modDef10131,
  _modDef10132,
  _modDef10133,
  _modDef10134,
  _modDef10135,
  _modDef10136,
  _modDef10137,
  _modDef10138,
  _modDef10139,
  _modDef10140,
];
const AnimationTypeToAnimations = {
  [VoiceChannelEffectAnimationType.BASIC]: items,
  [VoiceChannelEffectAnimationType.PREMIUM]: items1,
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_channel_effects/VoiceChannelEffectsUtils.tsx");

export const CUSTOM_CALL_SOUND_ANIMATION_RANGE = { start: 10, end: 15 };
export { AnimationTypeToAnimations };
export const getResizedEmojiData = apply.memoize(
  (src) =>
    new Promise((arg0) => {
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
    }),
);
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
