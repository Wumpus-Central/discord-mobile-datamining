// discord_app/modules/voice_channel_effects/VoiceChannelEffectsUtils.tsx
import util from "../../intl/index.native.tsx";
import AvatarUtilsDefault from "../../utils/AvatarUtils.tsx";
import ImageLoaderUtils from "../image_upload/ImageLoaderUtils.tsx";
import UnicodeEmojisDefault from "../emojis/UnicodeEmojis.tsx";
import EmojiUtilsDefault from "../../utils/EmojiUtils.tsx";
import _modDef7364 from "../../../_runtime/metro/07364__.js";
import _modDef7365 from "../../../_runtime/metro/07365__.js";
import _modDef7366 from "../../../_runtime/metro/07366__.js";
import _modDef7367 from "../../../_runtime/metro/07367__.js";
import _modDef7368 from "../../../_runtime/metro/07368__.js";
import _modDef7369 from "../../../_runtime/metro/07369__.js";
import _modDef7370 from "../../../_runtime/metro/07370__.js";
import _modDef7371 from "../../../_runtime/metro/07371__.js";
import _modDef7372 from "../../../_runtime/metro/07372__.js";
import _modDef7373 from "../../../_runtime/metro/07373__.js";
import _modDef7374 from "../../../_runtime/metro/07374__.js";
import _modDef7375 from "../../../_runtime/metro/07375__.js";
import _modDef7376 from "../../../_runtime/metro/07376__.js";
import _modDef7377 from "../../../_runtime/metro/07377__.js";
import _modDef7378 from "../../../_runtime/metro/07378__.js";
import _modDef7379 from "../../../_runtime/metro/07379__.js";
import _modDef7380 from "../../../_runtime/metro/07380__.js";
import _modDef7381 from "../../../_runtime/metro/07381__.js";
import _modDef7382 from "../../../_runtime/metro/07382__.js";
import _modDef7383 from "../../../_runtime/metro/07383__.js";
import _modDef7384 from "../../../_runtime/metro/07384__.js";
import _modDef7385 from "../../../_runtime/metro/07385__.js";
import UserStore from "../../stores/UserStore.tsx";
import apply from "../../../_runtime/metro/00012__.js";

require = fn;
const VoiceChannelEffectsConstants = fn(7362);
({ EMOJI_SIZE: closure_4, VoiceChannelEffectAnimationType } = VoiceChannelEffectsConstants);
const items = [_modDef7364];
const items1 = [
  _modDef7365,
  _modDef7366,
  _modDef7367,
  _modDef7368,
  _modDef7369,
  _modDef7370,
  _modDef7371,
  _modDef7372,
  _modDef7373,
  _modDef7374,
  _modDef7375,
  _modDef7376,
  _modDef7377,
  _modDef7378,
  _modDef7379,
  _modDef7380,
  _modDef7381,
  _modDef7382,
  _modDef7383,
  _modDef7384,
  _modDef7385,
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
