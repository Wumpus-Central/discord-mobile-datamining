// discord_app/modules/voice_channel_effects/VoiceChannelEffectsUtils.tsx
import util from "../../intl/index.native.tsx";
import AvatarUtilsDefault from "../../utils/AvatarUtils.tsx";
import ImageLoaderUtils from "../image_upload/ImageLoaderUtils.tsx";
import UnicodeEmojisDefault from "../emojis/UnicodeEmojis.tsx";
import EmojiUtilsDefault from "../../utils/EmojiUtils.tsx";
import _modDef12812 from "../../../_runtime/metro/12812__.js";
import _modDef12813 from "../../../_runtime/metro/12813__.js";
import _modDef12814 from "../../../_runtime/metro/12814__.js";
import _modDef12815 from "../../../_runtime/metro/12815__.js";
import _modDef12816 from "../../../_runtime/metro/12816__.js";
import _modDef12817 from "../../../_runtime/metro/12817__.js";
import _modDef12818 from "../../../_runtime/metro/12818__.js";
import _modDef12819 from "../../../_runtime/metro/12819__.js";
import _modDef12820 from "../../../_runtime/metro/12820__.js";
import _modDef12821 from "../../../_runtime/metro/12821__.js";
import _modDef12822 from "../../../_runtime/metro/12822__.js";
import _modDef12823 from "../../../_runtime/metro/12823__.js";
import _modDef12824 from "../../../_runtime/metro/12824__.js";
import _modDef12825 from "../../../_runtime/metro/12825__.js";
import _modDef12826 from "../../../_runtime/metro/12826__.js";
import _modDef12827 from "../../../_runtime/metro/12827__.js";
import _modDef12828 from "../../../_runtime/metro/12828__.js";
import _modDef12829 from "../../../_runtime/metro/12829__.js";
import _modDef12830 from "../../../_runtime/metro/12830__.js";
import _modDef12831 from "../../../_runtime/metro/12831__.js";
import _modDef12832 from "../../../_runtime/metro/12832__.js";
import _modDef12833 from "../../../_runtime/metro/12833__.js";
import UserStore from "../../stores/UserStore.tsx";
import apply from "../../../_runtime/00012_apply.js";

require = fn;
const VoiceChannelEffectsConstants = fn(12811);
({ EMOJI_SIZE: closure_4, VoiceChannelEffectAnimationType } = VoiceChannelEffectsConstants);
const items = [_modDef12812];
const items1 = [
  _modDef12813,
  _modDef12814,
  _modDef12815,
  _modDef12816,
  _modDef12817,
  _modDef12818,
  _modDef12819,
  _modDef12820,
  _modDef12821,
  _modDef12822,
  _modDef12823,
  _modDef12824,
  _modDef12825,
  _modDef12826,
  _modDef12827,
  _modDef12828,
  _modDef12829,
  _modDef12830,
  _modDef12831,
  _modDef12832,
  _modDef12833,
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
