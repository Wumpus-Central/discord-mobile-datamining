// === Module 1402: AvatarUtils ===

// Module 1402 (AvatarUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef14 from "module_14" /* 14 */;
import urlParse from "urlParse" /* 1373 */;
import AvatarDecorationConstants from "AvatarDecorationConstants" /* 1403 */;
import utils_AvatarUtils from "utils/AvatarUtils" /* 1405 */;
import ImageLoaderUtils from "ImageLoaderUtils" /* 1437 */;
import _modDef1478 from "module_1478" /* 1478 */;
import ForceSdrEmojisStickersExperiment from "ForceSdrEmojisStickersExperiment" /* 1887 */;
import NumberUtils from "NumberUtils" /* 1888 */;
import AvatarDecorationUtils from "AvatarDecorationUtils" /* 1972 */;
import CollectiblesAssetUtils from "CollectiblesAssetUtils" /* 1974 */;
import AssetRegistryDefault from "AssetRegistry" /* 1975 */;
import Constants from "Constants" /* 1085 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import size_mod from "module_2" /* 2 */;

let set;

let c3;
let closure_4;
function getAvatarURL(endpoint) {
  let format;
  let hash;
  let id;
  let keepAspectRatio;
  let lossless;
  let path;
  ({ path, id, hash, size, lossless } = endpoint);
  endpoint = endpoint.endpoint;
  if (lossless === undefined) {
    lossless = false;
  }
  let flag = endpoint.canAnimate;
  if (flag === undefined) {
    flag = false;
  }
  ({ keepAspectRatio, format } = endpoint);
  if (format === undefined) {
    format = null;
  }
  let canWebP = endpoint.canWebP;
  if (canWebP === undefined) {
    canWebP = unpackModuleId;
  }
  if (null != id) {
    if (null != hash) {
      let combined;
      let tmp7;
      if (format == null) {
        let str2 = "jpg";
        if (flag) {
          str2 = "jpg";
          const startsWithResult = null != hash && hash.startsWith("a_");
          if (startsWithResult) {
            let str4 = "gif";
            if (canWebP) {
              str4 = "webp";
            }
            str2 = str4;
          }
        }
        format = str2;
      }
      let tmp2 = flag;
      if (tmp2) {
        tmp2 = null != hash && hash.startsWith("v_");
        const startsWithResult1 = null != hash && hash.startsWith("v_");
      }
      if (tmp2) {
        format = "mp4";
      }
      const _window = window;
      if (null != CDN_HOST) {
        let tmp8 = format;
        if ("jpg" === format) {
          let str7 = "png";
          if (canWebP) {
            str7 = "webp";
          }
          tmp8 = str7;
        }
        const _HermesInternal = HermesInternal;
        combined = "https://" + CDN_HOST + "/" + path + "/" + id + "/" + hash + "." + tmp8;
        tmp7 = tmp8;
      } else {
        const _location = location;
        const _window2 = window;
        const sum = location.protocol + window.GLOBAL_ENV.API_ENDPOINT;
        combined = sum + endpoint(id, hash, format);
        tmp7 = format;
      }
      if ("mp4" === tmp7) {
        return combined;
      } else {
        const obj3 = {};
        if (null != size) {
          const getBestMediaProxySize = ImageLoaderUtils.getBestMediaProxySize;
          ImageLoaderUtils;
          const obj = ImageLoaderUtils;
          obj3.size = getBestMediaProxySize(size * obj.getDevicePixelRatio());
        }
        if (null != keepAspectRatio) {
          obj3.keep_aspect_ratio = keepAspectRatio;
        }
        if (lossless) {
          obj3.quality = "lossless";
        }
        let tmp17 = "webp" === tmp7 && flag;
        if (tmp17) {
          tmp17 = null != hash && hash.startsWith("a_");
          const startsWithResult2 = null != hash && hash.startsWith("a_");
        }
        if (tmp17) {
          obj3.animated = true;
        }
        const _HermesInternal2 = HermesInternal;
        const obj2 = _modDef1478;
        return combined + "?" + obj2.stringify(obj3);
      }
    }
  }
}
function getDefaultAvatarURL(id, discriminator) {
  let arr;
  let first;
  let flag = isProvisional;
  if (isProvisional === undefined) {
    flag = false;
  }
  if (flag) {
    arr = DEFAULT_PROVISIONAL_AVATARS;
  } else {
    if (!flag) {
      if (null != size) {
        if (size <= num) {
          arr = DEFAULT_AVATARS_SMALL;
        }
      }
    }
    arr = DEFAULT_AVATARS;
  }
  if (null == id) {
    if (null == discriminator) {
      return arr[0];
    }
  }
  const obj = NumberUtils;
  const parseIntegerResult = obj.parseInteger(discriminator, 0);
  if (parseIntegerResult > 0) {
    first = arr[parseIntegerResult % 5];
  } else if (null != id) {
    const obj2 = _modDef14(id);
    const shiftRightResult = obj2.shiftRight(22);
    const modResult = shiftRightResult.mod(arr.length);
    first = arr[modResult.toJSNumber(modResult)];
  } else {
    first = arr[0];
  }
  return first;
}
function getUserAvatarURL(user) {
  let avatar;
  let bot;
  let discriminator;
  let first;
  let flag;
  let id;
  if (flag === undefined) {
    flag = false;
  }
  let tmp = size;
  if (size === undefined) {
    tmp = closure_4;
  }
  let tmp2 = format;
  if (format === undefined) {
    tmp2 = null;
  }
  let tmp3 = SUPPORTS_WEBP;
  if (SUPPORTS_WEBP === undefined) {
    tmp3 = unpackModuleId;
  }
  ({ avatar, id, discriminator, bot } = user);
  if (flag === undefined) {
    flag = false;
  }
  let tmp4 = tmp;
  if (tmp === undefined) {
    tmp4 = closure_4;
  }
  if (tmp2 === undefined) {
    tmp2 = null;
  }
  if (tmp3 === undefined) {
    tmp3 = unpackModuleId;
  }
  if (!bot) {
    const obj = { endpoint: _false.AVATAR, path: "avatars", id, hash: avatar, size: tmp4, canAnimate: flag, format: tmp2, canWebP: tmp3 };
    first = getAvatarURL(obj);
  } else {
    first = utils_AvatarUtils.default.BOT_AVATARS[avatar];
    if (!first) {
      if (null == avatar) {
        if ("0000" === discriminator) {
          first = DEFAULT_AVATARS[0];
        }
      }
    }
  }
  if (first == null) {
    first = getDefaultAvatarURL(user.id, user.discriminator, user.isProvisional, tmp);
  }
  return first;
}
function getGuildMemberAvatarURLSimple(size) {
  let avatar;
  let canAnimate;
  let combined;
  let getBestMediaProxySize;
  let guildId;
  let obj2;
  let tmp11;
  let userId;
  ({ guildId, userId, avatar, canAnimate } = size);
  if (canAnimate === undefined) {
    canAnimate = false;
  }
  size = size.size;
  if (size === undefined) {
    size = closure_4;
  }
  let canWebP = size.canWebP;
  if (canWebP === undefined) {
    canWebP = unpackModuleId;
  }
  let str = "jpg";
  if (canAnimate) {
    str = "jpg";
    const startsWithResult = null != avatar && avatar.startsWith("a_");
    if (startsWithResult) {
      let str3 = "gif";
      if (canWebP) {
        str3 = "webp";
      }
      str = str3;
    }
  }
  if (null != CDN_HOST) {
    let tmp12 = str;
    if ("jpg" === str) {
      let str4 = "png";
      if (canWebP) {
        str4 = "webp";
      }
      tmp12 = str4;
    }
    const _HermesInternal = HermesInternal;
    combined = "https://" + CDN_HOST + _false.GUILD_MEMBER_AVATAR(guildId, userId, avatar, tmp12);
    tmp11 = tmp12;
  } else {
    const _location = location;
    const _window = window;
    const sum = location.protocol + window.GLOBAL_ENV.API_ENDPOINT;
    combined = sum + _false.GUILD_MEMBER_AVATAR(guildId, userId, avatar, str);
    tmp11 = str;
  }
  const obj = { size: getBestMediaProxySize(size * obj2.getDevicePixelRatio()) };
  getBestMediaProxySize = ImageLoaderUtils.getBestMediaProxySize;
  ImageLoaderUtils;
  let tmp21 = "webp" === tmp11 && canAnimate;
  obj2 = ImageLoaderUtils;
  if (tmp21) {
    tmp21 = null != avatar && avatar.startsWith("a_");
    const startsWithResult1 = null != avatar && avatar.startsWith("a_");
  }
  if (tmp21) {
    obj.animated = true;
  }
  const obj3 = _modDef1478;
  return combined + "?" + obj3.stringify(obj);
}
function getGuildBannerURL(guild) {
  let banner;
  let id;
  ({ id, banner } = guild);
  if (null == banner) {
    return null;
  } else {
    let combined;
    const getBestMediaProxySize = ImageLoaderUtils.getBestMediaProxySize;
    ImageLoaderUtils;
    let str = "jpg";
    const obj3 = ImageLoaderUtils;
    const bestMediaProxySize = getBestMediaProxySize(360 * obj3.getDevicePixelRatio());
    if (unpackModuleId) {
      str = "webp";
    }
    let tmp = str;
    if (flag) {
      tmp = str;
      const startsWithResult = null != banner && banner.startsWith("a_");
      if (startsWithResult) {
        let str3 = "gif";
        if (unpackModuleId) {
          str3 = "webp";
        }
        tmp = str3;
      }
    }
    const _window = window;
    if (null != CDN_HOST) {
      const _HermesInternal = HermesInternal;
      combined = "https://" + CDN_HOST + "/banners/" + id + "/" + banner + "." + tmp;
    } else {
      const _location = location;
      const _window2 = window;
      const sum = location.protocol + window.GLOBAL_ENV.API_ENDPOINT;
      combined = sum + _false.GUILD_BANNER(id, banner, tmp);
    }
    const obj = { size: bestMediaProxySize };
    if ("jpg" === tmp) {
      obj.quality = "lossless";
    }
    let tmp11 = "webp" === tmp && flag;
    if (tmp11) {
      tmp11 = null != banner && banner.startsWith("a_");
      const startsWithResult1 = null != banner && banner.startsWith("a_");
    }
    if (tmp11) {
      obj.animated = true;
    }
    const _HermesInternal2 = HermesInternal;
    const obj2 = _modDef1478;
    return combined + "?" + obj2.stringify(obj);
  }
}
function getApplicationIconURL(id) {
  let bot;
  let bot2;
  let bot3;
  let botIconFirst;
  let discriminator;
  let discriminator2;
  let fallbackAvatar;
  let icon;
  let id2;
  let id3;
  ({ icon, size } = id);
  id = id.id;
  if (size === undefined) {
    size = closure_4;
  }
  ({ bot, fallbackAvatar, botIconFirst } = id);
  if (fallbackAvatar === undefined) {
    fallbackAvatar = true;
  }
  const guildMember = id.guildMember;
  let id1;
  const keepAspectRatio = id.keepAspectRatio;
  if (bot != null) {
    id1 = bot.id;
  }
  if (null != id1) {
    if (null != guildMember) {
      if (null != guildMember.avatar) {
        const obj2 = { userId: bot.id, guildId: null, avatar: null, canAnimate: false, size };
        ({ guildId: obj4.guildId, avatar: obj4.avatar } = guildMember);
        return getGuildMemberAvatarURLSimple(obj2);
      }
    }
  }
  if (null != bot) {
    if (botIconFirst) {
      let first;
      const avatar = bot.avatar;
      let tmp2 = size;
      ({ id: id2, discriminator, bot: bot2 } = bot);
      if (size === undefined) {
        tmp2 = closure_4;
      }
      if (!bot2) {
        const obj = { endpoint: _false.AVATAR, path: "avatars", id: id2, hash: avatar, size: tmp2, canAnimate: false, format: null, canWebP: tmp3 };
        first = getAvatarURL(obj);
      } else {
        first = utils_AvatarUtils.default.BOT_AVATARS[avatar];
        if (!first) {
          if (null == avatar) {
            if ("0000" === discriminator) {
              first = DEFAULT_AVATARS[0];
            }
          }
        }
      }
      if (null != first) {
        return first;
      }
    }
  }
  if (null != icon) {
    const isMatch = null != icon && re6.test(icon);
    let tmp23 = icon;
    if (!isMatch) {
      const obj3 = { endpoint: _false.APPLICATION_ICON, path: "app-icons", id, hash: icon, size, canAnimate: false, canWebP: false, keepAspectRatio };
      tmp23 = getAvatarURL(obj3);
    }
    return tmp23;
  } else {
    if (null != bot) {
      let first1;
      const avatar2 = bot.avatar;
      let tmp10 = size;
      ({ id: id3, discriminator: discriminator2, bot: bot3 } = bot);
      if (size === undefined) {
        tmp10 = closure_4;
      }
      if (!bot3) {
        const obj7 = { endpoint: _false.AVATAR, path: "avatars", id: id3, hash: avatar2, size: tmp10, canAnimate: false, format: null, canWebP: tmp11 };
        first1 = getAvatarURL(obj7);
      } else {
        first1 = utils_AvatarUtils.default.BOT_AVATARS[avatar2];
        if (!first1) {
          if (null == avatar2) {
            if ("0000" === discriminator2) {
              first1 = DEFAULT_AVATARS[0];
            }
          }
        }
      }
      if (null != first1) {
        return first1;
      }
    }
    let tmp18;
    if (fallbackAvatar) {
      tmp18 = AssetRegistryDefault;
    }
    return tmp18;
  }
}
function getChannelIconURL(arg0) {
  let applicationId;
  let icon;
  let id;
  let tmp5;
  ({ id, icon, applicationId, size } = arg0);
  if (null != applicationId) {
    const obj2 = { id: applicationId, icon, size };
    let DEFAULT_CHANNEL_ICON = getApplicationIconURL(obj2);
    if (DEFAULT_CHANNEL_ICON == null) {
      DEFAULT_CHANNEL_ICON = utils_AvatarUtils.default.DEFAULT_CHANNEL_ICON;
    }
    tmp5 = DEFAULT_CHANNEL_ICON;
  } else {
    const obj3 = { endpoint: _false.CHANNEL_ICON, path: "channel-icons", id, hash: icon, canAnimate: false, size, canWebP: false };
    tmp5 = getAvatarURL(obj3);
    if (tmp5 == null) {
      const DEFAULT_GROUP_DM_AVATARS = utils_AvatarUtils.default.DEFAULT_GROUP_DM_AVATARS;
      const obj = SnowflakeUtilsDefault;
      const extractTimestampResult = obj.extractTimestamp(id);
      tmp5 = DEFAULT_GROUP_DM_AVATARS[extractTimestampResult % utils_AvatarUtils.default.DEFAULT_GROUP_DM_AVATARS.length];
    }
  }
  return tmp5;
}
function _getAssetHash(bannerURL) {
  try {
    const obj = urlParse;
    const str = obj.parse(bannerURL).pathname;
    const parts = str.split("/");
    return parts.pop();
  } catch (err) {
    return null;
  }
}
({ Endpoints: c3, AVATAR_SIZE: closure_4 } = Constants);
const AVATAR_DECORATION_SIZE = AvatarDecorationConstants.AVATAR_DECORATION_SIZE;
let tmp3 = /^data:/;
const re6 = tmp3;
const DEFAULT_AVATARS = utils_AvatarUtils.default.DEFAULT_AVATARS;
let DEFAULT_AVATARS_SMALL = utils_AvatarUtils.default.DEFAULT_AVATARS_SMALL;
if (DEFAULT_AVATARS_SMALL == null) {
  DEFAULT_AVATARS_SMALL = DEFAULT_AVATARS;
}
let num = utils_AvatarUtils.default.DEFAULT_AVATARS_SMALL_MAX_SIZE;
if (num == null) {
  num = 0;
}
function getEmojiURL(size) {
  let animated;
  let forcePNG;
  let id;
  ({ id, animated, forcePNG } = size);
  size = size.size;
  if (forcePNG === undefined) {
    forcePNG = false;
  }
  let str = "png";
  let str2 = "png";
  if (!forcePNG) {
    if (animated) {
      let str3 = "gif";
      if (unpackModuleId) {
        str3 = "webp";
      }
      str = str3;
    } else if (unpackModuleId) {
      str = "webp";
    }
    str2 = str;
  }
  let str4 = "";
  if (unpackModuleId) {
    str4 = "";
    if (animated) {
      str4 = "&animated=true";
    }
  }
  const getBestMediaProxySize = ImageLoaderUtils.getBestMediaProxySize;
  ImageLoaderUtils;
  const obj = ImageLoaderUtils;
  const combined = "size=" + getBestMediaProxySize(size * obj.getDevicePixelRatio(), closure_12);
  let flag = false;
  try {
    flag = ForceSdrEmojisStickersExperiment.getForceSdrEmojisStickersConfig({ location: "getEmojiURL" }).enabled;
  } catch (err) {
  }
  let str5 = "";
  if (flag) {
    str5 = "&force_sdr=true";
  }
  if (null != window.GLOBAL_ENV.CDN_HOST) {
    const _location2 = location;
    const _window2 = window;
    const _HermesInternal2 = HermesInternal;
    return "" + location.protocol + "//" + window.GLOBAL_ENV.CDN_HOST + "/emojis/" + id + "." + str2 + "?" + combined + str4 + str5;
  } else {
    const _location = location;
    const _window = window;
    const sum = location.protocol + window.GLOBAL_ENV.API_ENDPOINT;
    const sum1 = sum + _false.EMOJI(id, str2);
    let combined1 = sum1;
    if (flag) {
      const _HermesInternal = HermesInternal;
      combined1 = "" + sum1 + "?force_sdr=true";
    }
    return combined1;
  }
}
function getGuildMemberAvatarURL(avatar) {
  let guildId;
  let userId;
  avatar = avatar.avatar;
  ({ userId, guildId } = avatar);
  let tmp = null;
  if (null != avatar) {
    const obj = { userId, avatar, guildId, canAnimate: flag };
    tmp = getGuildMemberAvatarURLSimple(obj);
  }
  return tmp;
}
function getGuildMemberAvatarSource(member, author) {
  let avatarSource;
  let guildId;
  let userId;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const avatar = member.avatar;
  let flag2 = flag;
  ({ userId, guildId } = member);
  if (flag === undefined) {
    flag2 = false;
  }
  let tmp = null;
  if (null != avatar) {
    const obj = { userId, avatar, guildId, canAnimate: flag2 };
    tmp = getGuildMemberAvatarURLSimple(obj);
  }
  if (null != tmp) {
    let tmp5 = tmp;
    if (typeof tmp !== "number") {
      tmp5 = { uri: tmp };
      const obj2 = { uri: tmp };
    }
    avatarSource = tmp5;
  } else {
    avatarSource = author.getAvatarSource(member.guildId, flag);
  }
  return avatarSource;
}
function getUserBannerURL(arg0) {
  let banner;
  let canAnimate;
  let getBestMediaProxySize;
  let id;
  let obj2;
  ({ id, banner, canAnimate } = arg0);
  if (null != banner) {
    let combined;
    const _window = window;
    let str2 = "png";
    if (canAnimate) {
      str2 = "png";
      const startsWithResult = null != banner && banner.startsWith("a_");
      if (startsWithResult) {
        let str4 = "gif";
        if (unpackModuleId) {
          str4 = "webp";
        }
        str2 = str4;
      }
    }
    if (null != CDN_HOST) {
      const _HermesInternal = HermesInternal;
      combined = "https://" + CDN_HOST + "/banners/" + id + "/" + banner + "." + str2;
    } else {
      const _location = location;
      const _window2 = window;
      const sum = location.protocol + window.GLOBAL_ENV.API_ENDPOINT;
      combined = sum + _false.USER_BANNER(id, banner, str2);
    }
    const obj = { size: getBestMediaProxySize(tmp * obj2.getDevicePixelRatio()) };
    getBestMediaProxySize = ImageLoaderUtils.getBestMediaProxySize;
    ImageLoaderUtils;
    let tmp15 = "webp" === str2 && canAnimate;
    obj2 = ImageLoaderUtils;
    if (tmp15) {
      tmp15 = null != banner && banner.startsWith("a_");
      const startsWithResult1 = null != banner && banner.startsWith("a_");
    }
    if (tmp15) {
      obj.animated = true;
    }
    const _HermesInternal2 = HermesInternal;
    const obj3 = _modDef1478;
    return combined + "?" + obj3.stringify(obj);
  }
}
function getAvatarDecorationURL(canAnimate) {
  let CollectiblesItemAssetFormat;
  let avatarDecoration;
  let getCollectiblesItemAssetUrl;
  ({ avatarDecoration, size } = canAnimate);
  if (size === undefined) {
    size = AVATAR_DECORATION_SIZE;
  }
  let flag = canAnimate.canAnimate;
  if (flag === undefined) {
    flag = false;
  }
  if (null != avatarDecoration) {
    const obj3 = AvatarDecorationUtils;
    if (!obj3.isAvatarDecorationExpired(avatarDecoration)) {
      try {
        let STATIC;
        ({ CollectiblesItemAssetFormat, getCollectiblesItemAssetUrl } = CollectiblesAssetUtils);
        CollectiblesAssetUtils;
        if (flag) {
          STATIC = CollectiblesItemAssetFormat.ANIMATED;
        } else {
          STATIC = CollectiblesItemAssetFormat.STATIC;
        }
        const obj = { skuId: avatarDecoration.skuId, assetFormat: STATIC };
        const collectiblesItemAssetUrl = getCollectiblesItemAssetUrl(obj);
        if (null != collectiblesItemAssetUrl) {
          return collectiblesItemAssetUrl;
        } else {
          const asset = avatarDecoration.asset;
          if (null == asset) {
            return null;
          } else {
            let str2;
            const _window = window;
            const CDN_HOST = GLOBAL_ENV.CDN_HOST;
            const API_ENDPOINT = GLOBAL_ENV.API_ENDPOINT;
            const result = _false.AVATAR_DECORATION_PRESETS(asset);
            if (null != CDN_HOST) {
              const _URL2 = URL;
              const _HermesInternal2 = HermesInternal;
              const self3 = this;
              const self4 = this;
              str2 = new URL("https://" + CDN_HOST + result);
            } else {
              const _URL = URL;
              const _location = location;
              const _HermesInternal = HermesInternal;
              const self = this;
              const self2 = this;
              str2 = new URL("" + location.protocol + API_ENDPOINT + result);
            }
            const searchParams = str2.searchParams;
            set = searchParams.set;
            const getBestMediaProxySize = ImageLoaderUtils.getBestMediaProxySize;
            ImageLoaderUtils;
            const _HermesInternal3 = HermesInternal;
            const tmp9Result2 = ImageLoaderUtils;
            const result1 = set("size", "" + getBestMediaProxySize(size * tmp9Result2.getDevicePixelRatio(), closure_12));
            const searchParams2 = str2.searchParams;
            const _HermesInternal4 = HermesInternal;
            const result2 = searchParams2.set("passthrough", "" + flag);
            return str2.toString();
          }
        }
      } catch (err) {
        return null;
      }
    }
  }
  return null;
}
function getGuildMemberBannerURL(arg0) {
  let banner;
  let canAnimate;
  let getBestMediaProxySize;
  let guildId;
  let id;
  let obj2;
  ({ id, guildId, banner, canAnimate } = arg0);
  if (null != banner) {
    if (null != guildId) {
      let combined;
      const _window = window;
      let str2 = "png";
      if (canAnimate) {
        str2 = "png";
        const startsWithResult = null != banner && banner.startsWith("a_");
        if (startsWithResult) {
          let str4 = "gif";
          if (unpackModuleId) {
            str4 = "webp";
          }
          str2 = str4;
        }
      }
      const GUILD_MEMBER_BANNERResult = _false.GUILD_MEMBER_BANNER(guildId, id, banner, str2);
      if (null != CDN_HOST) {
        const _HermesInternal = HermesInternal;
        combined = "https://" + CDN_HOST + GUILD_MEMBER_BANNERResult;
      } else {
        const _location = location;
        const _window2 = window;
        combined = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + GUILD_MEMBER_BANNERResult;
      }
      const obj = { size: getBestMediaProxySize(tmp * obj2.getDevicePixelRatio()) };
      getBestMediaProxySize = ImageLoaderUtils.getBestMediaProxySize;
      ImageLoaderUtils;
      let tmp17 = "webp" === str2 && canAnimate;
      obj2 = ImageLoaderUtils;
      if (tmp17) {
        tmp17 = null != banner && banner.startsWith("a_");
        const startsWithResult1 = null != banner && banner.startsWith("a_");
      }
      if (tmp17) {
        obj.animated = true;
      }
      const _HermesInternal2 = HermesInternal;
      const obj3 = _modDef1478;
      return combined + "?" + obj3.stringify(obj);
    }
  }
}
function getResourceChannelIconURL(icon) {
  icon = icon.icon;
  let tmp2 = null;
  if (null != icon) {
    const obj = { endpoint: _false.GUILD_RESOURCE_CHANNELS_ICON, path: "resource-channels", id: tmp, hash: icon, size, canAnimate: true, canWebP: false };
    tmp2 = getAvatarURL(obj);
  }
  return tmp2;
}
function getNewMemberActionIconURL(icon) {
  icon = icon.icon;
  let tmp2 = null;
  if (null != icon) {
    const obj = { endpoint: _false.GUILD_NEW_MEMBER_ACTIONS_ICON, path: "new-member-actions", id: tmp, hash: icon, size, canAnimate: true, canWebP: false };
    tmp2 = getAvatarURL(obj);
  }
  return tmp2;
}
function getGuildTemplateIconURL(size) {
  let icon;
  let id;
  size = size.size;
  ({ id, icon } = size);
  if (size === undefined) {
    size = closure_4;
  }
  let flag = size.canAnimate;
  if (flag === undefined) {
    flag = false;
  }
  const obj = { endpoint: _false.GUILD_TEMPLATE_ICON, path: "guild-templates", id, hash: icon, size, canAnimate: flag, canWebP: false };
  return getAvatarURL(obj);
}
function getVideoFilterAssetURL(userId) {
  userId = userId.userId;
  const assetId = userId.assetId;
  const assetHash = userId.assetHash;
  let flag = userId.canAnimate;
  size = userId.size;
  if (flag === undefined) {
    flag = true;
  }
  const obj = {
    endpoint(arg0, arg1, arg2) {
      return _false.VIDEO_FILTER_ASSET_STORAGE(userId, assetId, assetHash, arg2);
    },
    path: "video-filter-assets/" + userId,
    id: assetId,
    hash: assetHash,
    size,
    canAnimate: flag,
    canWebP: false
  };
  return getAvatarURL(obj);
}
function hasAnimatedGuildIcon(icon) {
  icon = undefined;
  if (icon != null) {
    icon = icon.icon;
  }
  const startsWithResult = null != icon && icon.startsWith("a_");
  return startsWithResult;
}
function isAnimatedIconHash(storageHash) {
  const startsWithResult = null != storageHash && storageHash.startsWith("a_");
  return startsWithResult;
}
function makeSource(src) {
  let tmp = src;
  if (typeof src !== "number") {
    tmp = { uri: src };
    const obj = { uri: src };
  }
  return tmp;
}
function getGuildSplashURL(arg0) {
  let id;
  let splash;
  ({ id, splash, size } = arg0);
  if (null == splash) {
    return null;
  } else {
    let combined;
    if (null == size) {
      const _window = window;
      const obj = ImageLoaderUtils;
      size = width * obj.getDevicePixelRatio();
    }
    const _window2 = window;
    const obj2 = ImageLoaderUtils;
    const bestMediaProxySize = obj2.getBestMediaProxySize(size);
    if (null != CDN_HOST) {
      const _HermesInternal = HermesInternal;
      combined = "https://" + CDN_HOST + "/splashes/" + id + "/" + splash + ".jpg";
    } else {
      const _location = location;
      const _window3 = window;
      const sum = location.protocol + window.GLOBAL_ENV.API_ENDPOINT;
      combined = sum + _false.GUILD_SPLASH(id, splash);
    }
    const _HermesInternal2 = HermesInternal;
    return combined + "?size=" + bestMediaProxySize;
  }
}
function getGuildHomeHeaderURL(arg0) {
  let homeHeader;
  let id;
  ({ id, homeHeader } = arg0);
  if (null == homeHeader) {
    return null;
  } else {
    let combined;
    const getBestMediaProxySize = ImageLoaderUtils.getBestMediaProxySize;
    ImageLoaderUtils;
    const _window2 = window;
    const obj = ImageLoaderUtils;
    const bestMediaProxySize = getBestMediaProxySize(1096 * obj.getDevicePixelRatio());
    if (null != CDN_HOST) {
      const _HermesInternal = HermesInternal;
      combined = "https://" + CDN_HOST + "/home-headers/" + id + "/" + homeHeader + ".png";
    } else {
      const _location = location;
      const _window = window;
      const sum = location.protocol + window.GLOBAL_ENV.API_ENDPOINT;
      combined = sum + _false.GUILD_HOME_HEADER(id, homeHeader);
    }
    const _HermesInternal2 = HermesInternal;
    return combined + "?size=" + bestMediaProxySize;
  }
}
function getGuildDiscoverySplashURL(arg0) {
  let id;
  let splash;
  ({ id, splash, size } = arg0);
  if (null == splash) {
    return null;
  } else {
    let combined;
    if (null == size) {
      const _window = window;
      const obj = ImageLoaderUtils;
      size = width * obj.getDevicePixelRatio();
    }
    const _window2 = window;
    const obj2 = ImageLoaderUtils;
    const bestMediaProxySize = obj2.getBestMediaProxySize(size);
    if (null != CDN_HOST) {
      const _HermesInternal = HermesInternal;
      combined = "https://" + CDN_HOST + "/discovery-splashes/" + id + "/" + splash + ".jpg";
    } else {
      const _location = location;
      const _window3 = window;
      const sum = location.protocol + window.GLOBAL_ENV.API_ENDPOINT;
      combined = sum + _false.GUILD_DISCOVERY_SPLASH(id, splash);
    }
    const _HermesInternal2 = HermesInternal;
    return combined + "?size=" + bestMediaProxySize;
  }
}
function getGuildIconURL(canAnimate) {
  let icon;
  let id;
  let flag = canAnimate.canAnimate;
  ({ id, icon, size } = canAnimate);
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = canAnimate.lossless;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const obj = { endpoint: _false.GUILD_ICON, path: "icons", id, hash: icon, size, canAnimate: flag, lossless: flag2, canWebP: unpackModuleId };
  return getAvatarURL(obj);
}
function getGameAssetURL(format) {
  let hash;
  let id;
  size = format.size;
  ({ id, hash } = format);
  if (size === undefined) {
    size = closure_4;
  }
  let flag = format.keepAspectRatio;
  if (flag === undefined) {
    flag = false;
  }
  const obj = { endpoint: _false.APPLICATION_ICON, path: "app-icons", id, hash, size, canAnimate: false, keepAspectRatio: flag, format: format.format, canWebP: false };
  return getAvatarURL(obj);
}
function isVideoAssetHash(asset) {
  const startsWithResult = null != asset && asset.startsWith("v_");
  return startsWithResult;
}
function isDataUri(arg0) {
  const isMatch = null != arg0 && re6.test(arg0);
  return isMatch;
}
const DEFAULT_PROVISIONAL_AVATARS = utils_AvatarUtils.default.DEFAULT_PROVISIONAL_AVATARS;
let DEFAULT_GROUP_DM_AVATARS = utils_AvatarUtils.default.DEFAULT_GROUP_DM_AVATARS;
const _default = utils_AvatarUtils.default;
const canUseWebpResult = _default.canUseWebp();
const unpackModuleId = canUseWebpResult;
let closure_12 = PlatformUtils.isAndroid();
let obj = {
  getUserAvatarURL,
  getDefaultAvatarURL,
  getGuildMemberAvatarURL,
  getGuildMemberAvatarURLSimple,
  getGuildMemberAvatarSource,
  getGuildMemberBannerURL,
  getUserBannerURL,
  getAvatarDecorationURL,
  hasAnimatedGuildIcon,
  isAnimatedIconHash,
  getUserAvatarSource(stateFromStores, flag, size) {
    const tmp = getUserAvatarURL(stateFromStores, flag, size);
    let tmp2 = tmp;
    if (typeof tmp !== "number") {
      tmp2 = { uri: tmp };
      const obj = { uri: tmp };
    }
    return tmp2;
  },
  getGuildIconURL,
  getGuildSplashURL,
  getGuildSplashSource(arg0) {
    let id;
    let splash;
    ({ id, splash, size } = arg0);
    let sum1 = null;
    if (null != splash) {
      let combined;
      if (null == size) {
        const _window = window;
        const obj = ImageLoaderUtils;
        size = width * obj.getDevicePixelRatio();
      }
      const _window2 = window;
      const obj2 = ImageLoaderUtils;
      const bestMediaProxySize = obj2.getBestMediaProxySize(size);
      if (null != CDN_HOST) {
        const _HermesInternal = HermesInternal;
        combined = "https://" + CDN_HOST + "/splashes/" + id + "/" + splash + ".jpg";
      } else {
        const _location = location;
        const _window3 = window;
        const sum = location.protocol + window.GLOBAL_ENV.API_ENDPOINT;
        combined = sum + _false.GUILD_SPLASH(id, splash);
      }
      const _HermesInternal2 = HermesInternal;
      sum1 = combined + "?size=" + bestMediaProxySize;
    }
    let tmp15 = sum1;
    if (typeof sum1 !== "number") {
      tmp15 = { uri: sum1 };
      const obj3 = { uri: sum1 };
    }
    return tmp15;
  },
  getGuildDiscoverySplashURL,
  getGuildDiscoverySplashSource(arg0) {
    let id;
    let splash;
    ({ id, splash, size } = arg0);
    let sum1 = null;
    if (null != splash) {
      let combined;
      if (null == size) {
        const _window = window;
        const obj = ImageLoaderUtils;
        size = width * obj.getDevicePixelRatio();
      }
      const _window2 = window;
      const obj2 = ImageLoaderUtils;
      const bestMediaProxySize = obj2.getBestMediaProxySize(size);
      if (null != CDN_HOST) {
        const _HermesInternal = HermesInternal;
        combined = "https://" + CDN_HOST + "/discovery-splashes/" + id + "/" + splash + ".jpg";
      } else {
        const _location = location;
        const _window3 = window;
        const sum = location.protocol + window.GLOBAL_ENV.API_ENDPOINT;
        combined = sum + _false.GUILD_DISCOVERY_SPLASH(id, splash);
      }
      const _HermesInternal2 = HermesInternal;
      sum1 = combined + "?size=" + bestMediaProxySize;
    }
    let tmp15 = sum1;
    if (typeof sum1 !== "number") {
      tmp15 = { uri: sum1 };
      const obj3 = { uri: sum1 };
    }
    return tmp15;
  },
  getGuildBannerURL,
  getGuildHomeHeaderURL,
  getResourceChannelIconURL,
  getNewMemberActionIconURL,
  getGuildTemplateIconURL,
  getChannelIconURL,
  getEmojiURL,
  getApplicationIconURL,
  getGameAssetURL,
  getVideoFilterAssetURL,
  getGameAssetSource(format) {
    let hash;
    let id;
    size = format.size;
    ({ id, hash } = format);
    if (size === undefined) {
      size = closure_4;
    }
    let flag = format.keepAspectRatio;
    if (flag === undefined) {
      flag = false;
    }
    const obj = { endpoint: _false.APPLICATION_ICON, path: "app-icons", id, hash, size, canAnimate: false, keepAspectRatio: flag, format: format.format, canWebP: false };
    const tmp = getAvatarURL(obj);
    let tmp2 = tmp;
    if (typeof tmp !== "number") {
      tmp2 = { uri: tmp };
      const obj2 = { uri: tmp };
    }
    return tmp2;
  },
  getGuildIconSource(canAnimate) {
    let icon;
    let id;
    let flag = canAnimate.canAnimate;
    ({ id, icon, size } = canAnimate);
    if (flag === undefined) {
      flag = false;
    }
    let flag2 = canAnimate.lossless;
    if (flag2 === undefined) {
      flag2 = false;
    }
    const obj = { endpoint: _false.GUILD_ICON, path: "icons", id, hash: icon, size, canAnimate: flag, lossless: flag2, canWebP: unpackModuleId };
    const tmp = getAvatarURL(obj);
    let tmp2 = tmp;
    if (typeof tmp !== "number") {
      tmp2 = { uri: tmp };
      const obj2 = { uri: tmp };
    }
    return tmp2;
  },
  getGuildTemplateIconSource(size) {
    let icon;
    let id;
    size = size.size;
    ({ id, icon } = size);
    if (size === undefined) {
      size = closure_4;
    }
    let flag = size.canAnimate;
    if (flag === undefined) {
      flag = false;
    }
    const obj = { endpoint: _false.GUILD_TEMPLATE_ICON, path: "guild-templates", id, hash: icon, size, canAnimate: flag, canWebP: false };
    const tmp = getAvatarURL(obj);
    let tmp2 = tmp;
    if (typeof tmp !== "number") {
      tmp2 = { uri: tmp };
      const obj2 = { uri: tmp };
    }
    return tmp2;
  },
  getGuildBannerSource(guild) {
    let flag = hasItem;
    if (hasItem === undefined) {
      flag = false;
    }
    const tmp = getGuildBannerURL(guild, flag);
    let tmp2 = tmp;
    if (typeof tmp !== "number") {
      tmp2 = { uri: tmp };
      const obj = { uri: tmp };
    }
    return tmp2;
  },
  getGuildHomeHeaderSource(arg0) {
    let homeHeader;
    let id;
    ({ id, homeHeader } = arg0);
    let sum1 = null;
    if (null != homeHeader) {
      let combined;
      const getBestMediaProxySize = ImageLoaderUtils.getBestMediaProxySize;
      ImageLoaderUtils;
      const _window = window;
      const obj = ImageLoaderUtils;
      const bestMediaProxySize = getBestMediaProxySize(1096 * obj.getDevicePixelRatio());
      if (null != CDN_HOST) {
        const _HermesInternal = HermesInternal;
        combined = "https://" + CDN_HOST + "/home-headers/" + id + "/" + homeHeader + ".png";
      } else {
        const _location = location;
        const _window2 = window;
        const sum = location.protocol + window.GLOBAL_ENV.API_ENDPOINT;
        combined = sum + _false.GUILD_HOME_HEADER(id, homeHeader);
      }
      const _HermesInternal2 = HermesInternal;
      sum1 = combined + "?size=" + bestMediaProxySize;
    }
    let tmp13 = sum1;
    if (typeof sum1 !== "number") {
      tmp13 = { uri: sum1 };
      const obj2 = { uri: sum1 };
    }
    return tmp13;
  },
  getChannelIconSource(arg0) {
    const tmp = getChannelIconURL(arg0);
    let tmp2 = tmp;
    if (typeof tmp !== "number") {
      tmp2 = { uri: tmp };
      const obj = { uri: tmp };
    }
    return tmp2;
  },
  getApplicationIconSource(id) {
    const tmp = getApplicationIconURL(id);
    let tmp2 = tmp;
    if (typeof tmp !== "number") {
      tmp2 = { uri: tmp };
      const obj = { uri: tmp };
    }
    return tmp2;
  },
  makeSource,
  getAnimatableSourceWithFallback(hasItem, fn) {
    const tmp = fn(hasItem);
    const obj = PlatformUtils;
    if (obj.isAndroid()) {
      if (hasItem) {
        if (typeof tmp !== "number") {
          let tmp6;
          const tmp2 = fn(false);
          if (typeof tmp2 === "number") {
            const items = [tmp, ];
            const obj2 = { isForceCached: true };
            const merged = Object.assign(tmp2);
            items[1] = obj2;
            tmp6 = items;
          } else {
            tmp6 = tmp2;
          }
          return tmp6;
        }
      }
    }
    return tmp;
  }
};
let size = size_mod;
let result = size.fileFinishedImporting("utils/AvatarUtils.tsx");

export default obj;
export const DATA_IMAGE_PREFIX = tmp3;
export { DEFAULT_AVATARS };
export { DEFAULT_AVATARS_SMALL };
export const DEFAULT_AVATARS_SMALL_MAX_SIZE = num;
export { DEFAULT_PROVISIONAL_AVATARS };
export { DEFAULT_GROUP_DM_AVATARS };
export const SUPPORTS_WEBP = canUseWebpResult;
export const LEGACY_DEFAULT_AVATAR_COUNT = 5;
export const DEFAULT_AVATAR_COUNT = 6;
export { getEmojiURL };
export { getDefaultAvatarURL };
export { getUserAvatarURL };
export { getGuildMemberAvatarURLSimple };
export { getGuildMemberAvatarURL };
export { getGuildMemberAvatarSource };
export { getUserBannerURL };
export { getAvatarDecorationURL };
export { getGuildMemberBannerURL };
export { getResourceChannelIconURL };
export { getNewMemberActionIconURL };
export { getGuildTemplateIconURL };
export { getVideoFilterAssetURL };
export { hasAnimatedGuildIcon };
export { isAnimatedIconHash };
export { isVideoAssetHash };
export const isAnimatedImageURL = function isAnimatedImageURL(bannerURL) {
  let tmp = null != bannerURL;
  if (tmp) {
    const obj = _getAssetHash(bannerURL);
    tmp = null != obj && obj.startsWith("a_");
    const startsWithResult = null != obj && obj.startsWith("a_");
  }
  return tmp;
};
export const isVideoURL = function isVideoURL(bannerURL) {
  let tmp = null != bannerURL;
  if (tmp) {
    const obj = _getAssetHash(bannerURL);
    tmp = null != obj && obj.startsWith("v_");
    const startsWithResult = null != obj && obj.startsWith("v_");
  }
  return tmp;
};
export { makeSource };
export { isDataUri };