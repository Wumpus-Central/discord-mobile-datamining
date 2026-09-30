// discord_app/modules/voice_channel_effects/VoiceChannelEffectsUtils.tsx
import util from "../../intl/index.native.tsx";
import AvatarUtilsDefault from "../../utils/AvatarUtils.tsx";
import ImageLoaderUtils from "../image_upload/ImageLoaderUtils.tsx";
import UnicodeEmojisDefault from "../emojis/UnicodeEmojis.tsx";
import EmojiUtilsDefault from "../../utils/EmojiUtils.tsx";
import _modDef6964 from "../../../_runtime/metro/06964__.js";
import _modDef6965 from "../../../_runtime/metro/06965__.js";
import _modDef6966 from "../../../_runtime/metro/06966__.js";
import _modDef6967 from "../../../_runtime/metro/06967__.js";
import _modDef6968 from "../../../_runtime/metro/06968__.js";
import _modDef6969 from "../../../_runtime/metro/06969__.js";
import _modDef6970 from "../../../_runtime/metro/06970__.js";
import _modDef6971 from "../../../_runtime/metro/06971__.js";
import _modDef6972 from "../../../_runtime/metro/06972__.js";
import _modDef6973 from "../../../_runtime/metro/06973__.js";
import _modDef6974 from "../../../_runtime/metro/06974__.js";
import _modDef6975 from "../../../_runtime/metro/06975__.js";
import _modDef6976 from "../../../_runtime/metro/06976__.js";
import _modDef6977 from "../../../_runtime/metro/06977__.js";
import _modDef6978 from "../../../_runtime/metro/06978__.js";
import _modDef6979 from "../../../_runtime/metro/06979__.js";
import _modDef6980 from "../../../_runtime/metro/06980__.js";
import _modDef6981 from "../../../_runtime/metro/06981__.js";
import _modDef6982 from "../../../_runtime/metro/06982__.js";
import _modDef6983 from "../../../_runtime/metro/06983__.js";
import _modDef6984 from "../../../_runtime/metro/06984__.js";
import _modDef6985 from "../../../_runtime/metro/06985__.js";
import UserStore from "../../stores/UserStore.tsx";
import apply from "../../../_runtime/metro/00012__.js";

require = fn;
const VoiceChannelEffectsConstants = fn(6962);
({ EMOJI_SIZE: closure_4, VoiceChannelEffectAnimationType } = VoiceChannelEffectsConstants);
const items = [_modDef6964];
const items1 = [
  _modDef6965,
  _modDef6966,
  _modDef6967,
  _modDef6968,
  _modDef6969,
  _modDef6970,
  _modDef6971,
  _modDef6972,
  _modDef6973,
  _modDef6974,
  _modDef6975,
  _modDef6976,
  _modDef6977,
  _modDef6978,
  _modDef6979,
  _modDef6980,
  _modDef6981,
  _modDef6982,
  _modDef6983,
  _modDef6984,
  _modDef6985,
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
