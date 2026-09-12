// discord_app/modules/voice_channel_effects/VoiceChannelEffectsUtils.tsx
import util from "../../intl/index.native.tsx";
import AvatarUtilsDefault from "../../utils/AvatarUtils.tsx";
import ImageLoaderUtils from "../image_upload/ImageLoaderUtils.tsx";
import UnicodeEmojisDefault from "../emojis/UnicodeEmojis.tsx";
import EmojiUtilsDefault from "../../utils/EmojiUtils.tsx";
import _modDef7453 from "../../../_runtime/metro/07453__.js";
import _modDef7454 from "../../../_runtime/metro/07454__.js";
import _modDef7455 from "../../../_runtime/metro/07455__.js";
import _modDef7456 from "../../../_runtime/metro/07456__.js";
import _modDef7457 from "../../../_runtime/metro/07457__.js";
import _modDef7458 from "../../../_runtime/metro/07458__.js";
import _modDef7459 from "../../../_runtime/metro/07459__.js";
import _modDef7460 from "../../../_runtime/metro/07460__.js";
import _modDef7461 from "../../../_runtime/metro/07461__.js";
import _modDef7462 from "../../../_runtime/metro/07462__.js";
import _modDef7463 from "../../../_runtime/metro/07463__.js";
import _modDef7464 from "../../../_runtime/metro/07464__.js";
import _modDef7465 from "../../../_runtime/metro/07465__.js";
import _modDef7466 from "../../../_runtime/metro/07466__.js";
import _modDef7467 from "../../../_runtime/metro/07467__.js";
import _modDef7468 from "../../../_runtime/metro/07468__.js";
import _modDef7469 from "../../../_runtime/metro/07469__.js";
import _modDef7470 from "../../../_runtime/metro/07470__.js";
import _modDef7471 from "../../../_runtime/metro/07471__.js";
import _modDef7472 from "../../../_runtime/metro/07472__.js";
import _modDef7473 from "../../../_runtime/metro/07473__.js";
import _modDef7474 from "../../../_runtime/metro/07474__.js";
import UserStore from "../../stores/UserStore.tsx";
import apply from "../../../_runtime/metro/00012__.js";

require = fn;
const VoiceChannelEffectsConstants = fn(7451);
({ EMOJI_SIZE: closure_4, VoiceChannelEffectAnimationType } = VoiceChannelEffectsConstants);
const items = [_modDef7453];
const items1 = [
  _modDef7454,
  _modDef7455,
  _modDef7456,
  _modDef7457,
  _modDef7458,
  _modDef7459,
  _modDef7460,
  _modDef7461,
  _modDef7462,
  _modDef7463,
  _modDef7464,
  _modDef7465,
  _modDef7466,
  _modDef7467,
  _modDef7468,
  _modDef7469,
  _modDef7470,
  _modDef7471,
  _modDef7472,
  _modDef7473,
  _modDef7474,
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
