// === Module 1396: AvatarUtils ===

// Module 1396 (AvatarUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import IntegerDefault from "Integer" /* 14 */;
import Url from "Url" /* 1367 */;
import AvatarDecorationConstants from "AvatarDecorationConstants" /* 1397 */;
import utils_AvatarUtils from "utils/AvatarUtils" /* 1399 */;
import ImageLoaderUtils from "ImageLoaderUtils" /* 1430 */;
import _modDef1471 from "module_1471" /* 1471 */;
import ForceSdrEmojisStickersExperiment from "ForceSdrEmojisStickersExperiment" /* 1879 */;
import NumberUtils from "NumberUtils" /* 1880 */;
import AvatarDecorationUtils from "AvatarDecorationUtils" /* 1881 */;
import CollectiblesAssetUtils from "CollectiblesAssetUtils" /* 1883 */;
import _modDef1884 from "module_1884" /* 1884 */;
import Constants from "Constants" /* 1074 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import size from "module_2" /* 2 */;

function getAvatarURL(canAnimate) {
  ({ path, id, hash, size, lossless } = canAnimate);
  if (lossless === undefined) {
    lossless = false;
  }
  let flag = canAnimate.canAnimate;
  if (flag === undefined) {
    flag = false;
  }
  ({ keepAspectRatio, format } = canAnimate);
  if (format === undefined) {
    format = null;
  }
  let canWebP = canAnimate.canWebP;
  if (canWebP === undefined) {
    canWebP = canUseWebpResult;
  }
  if (null != id) {
    if (null != hash) {
      if (format == null) {
        let str2 = "jpg";
        if (flag) {
          let startsWithResult = null != hash;
          if (startsWithResult) {
            startsWithResult = hash.startsWith("a_");
          }
          str2 = "jpg";
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
      if (flag) {
        let startsWithResult1 = null != hash;
        if (startsWithResult1) {
          startsWithResult1 = hash.startsWith("v_");
        }
        tmp2 = startsWithResult1;
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
        let combined = "https://" + CDN_HOST + "/" + path + "/" + id + "/" + hash + "." + tmp8;
        let tmp7 = tmp8;
      } else {
        const _location = location;
        const _window2 = window;
        const sum = location.protocol + window.GLOBAL_ENV.API_ENDPOINT;
        combined = sum + canAnimate.endpoint(id, hash, format);
        tmp7 = format;
      }
      if ("mp4" === tmp7) {
        return combined;
      } else {
        let obj = {};
        if (null != size) {
          obj = ImageLoaderUtils;
          obj.size = obj.getBestMediaProxySize(size * ImageLoaderUtils.getDevicePixelRatio());
        }
        if (null != keepAspectRatio) {
          obj.keep_aspect_ratio = keepAspectRatio;
        }
        if (lossless) {
          obj.quality = "lossless";
        }
        let tmp16 = "webp" === tmp7 && flag;
        if (tmp16) {
          let startsWithResult2 = null != hash;
          if (startsWithResult2) {
            startsWithResult2 = hash.startsWith("a_");
          }
          tmp16 = startsWithResult2;
        }
        if (tmp16) {
          obj.animated = true;
        }
        const _HermesInternal2 = HermesInternal;
        return combined + "?" + _modDef1471.stringify(obj);
      }
    }
  }
}
function getDefaultAvatarURL(id, discriminator) {
  let flag = isProvisional;
  if (isProvisional === undefined) {
    flag = false;
  }
  if (flag) {
    let arr = DEFAULT_PROVISIONAL_AVATARS;
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
  const parseIntegerResult = NumberUtils.parseInteger(discriminator, 0);
  if (parseIntegerResult > 0) {
    let first = arr[parseIntegerResult % 5];
  } else if (null != id) {
    const obj2 = IntegerDefault(id);
    const modResult = IntegerDefault(id).shiftRight(22).mod(arr.length);
    first = arr[modResult.toJSNumber(modResult)];
    const shiftRightResult = IntegerDefault(id).shiftRight(22);
  } else {
    first = arr[0];
  }
  return first;
}
function getUserAvatarURL(user) {
  if (flag === undefined) {
    flag = false;
  }
  let tmp = size;
  if (size === undefined) {
    tmp = size;
  }
  let tmp2 = format;
  if (format === undefined) {
    tmp2 = null;
  }
  let tmp3 = SUPPORTS_WEBP;
  if (SUPPORTS_WEBP === undefined) {
    tmp3 = canUseWebpResult;
  }
  ({ avatar, id, discriminator, bot } = user);
  if (flag === undefined) {
    flag = false;
  }
  let tmp4 = tmp;
  if (tmp === undefined) {
    tmp4 = size;
  }
  if (tmp2 === undefined) {
    tmp2 = null;
  }
  if (tmp3 === undefined) {
    tmp3 = canUseWebpResult;
  }
  if (!bot) {
    const obj = { endpoint: React3.AVATAR, path: "avatars", id, hash: avatar, size: tmp4, canAnimate: flag, format: tmp2, canWebP: tmp3 };
    let first = getAvatarURL(obj);
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
  ({ guildId, userId, avatar, canAnimate } = size);
  if (canAnimate === undefined) {
    canAnimate = false;
  }
  size = size.size;
  if (size === undefined) {
    size = closure_1_4;
  }
  let canWebP = size.canWebP;
  if (canWebP === undefined) {
    canWebP = canUseWebpResult;
  }
  let str = "jpg";
  if (canAnimate) {
    let startsWithResult = null != avatar;
    if (startsWithResult) {
      startsWithResult = avatar.startsWith("a_");
    }
    str = "jpg";
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
    let combined = "https://" + CDN_HOST + React3.GUILD_MEMBER_AVATAR(guildId, userId, avatar, tmp12);
    let tmp11 = tmp12;
  } else {
    const _location = location;
    const _window = window;
    const sum = location.protocol + window.GLOBAL_ENV.API_ENDPOINT;
    combined = sum + React3.GUILD_MEMBER_AVATAR(guildId, userId, avatar, str);
    tmp11 = str;
  }
  const obj = { size: null };
  const obj2 = ImageLoaderUtils;
  obj.size = obj2.getBestMediaProxySize(size * ImageLoaderUtils.getDevicePixelRatio());
  let tmp20 = "webp" === tmp11 && canAnimate;
  if (tmp20) {
    let startsWithResult1 = null != avatar;
    if (startsWithResult1) {
      startsWithResult1 = avatar.startsWith("a_");
    }
    tmp20 = startsWithResult1;
  }
  if (tmp20) {
    obj.animated = true;
  }
  return combined + "?" + _modDef1471.stringify(obj);
}
function getGuildBannerURL(guild) {
  ({ id, banner } = guild);
  if (flag === undefined) {
    flag = false;
  }
  if (null == banner) {
    return null;
  } else {
    const obj3 = ImageLoaderUtils;
    let str = "jpg";
    const bestMediaProxySize = obj3.getBestMediaProxySize(360 * ImageLoaderUtils.getDevicePixelRatio());
    if (canUseWebpResult) {
      str = "webp";
    }
    let tmp = str;
    if (flag) {
      let startsWithResult = null != banner;
      if (startsWithResult) {
        startsWithResult = banner.startsWith("a_");
      }
      tmp = str;
      if (startsWithResult) {
        let str3 = "gif";
        if (canUseWebpResult) {
          str3 = "webp";
        }
        tmp = str3;
      }
    }
    const _window = window;
    if (null != CDN_HOST) {
      const _HermesInternal = HermesInternal;
      let combined = "https://" + CDN_HOST + "/banners/" + id + "/" + banner + "." + tmp;
    } else {
      const _location = location;
      const _window2 = window;
      const sum = location.protocol + window.GLOBAL_ENV.API_ENDPOINT;
      combined = sum + React3.GUILD_BANNER(id, banner, tmp);
    }
    const obj = { size: bestMediaProxySize };
    if ("jpg" === tmp) {
      obj.quality = "lossless";
    }
    let tmp11 = "webp" === tmp && flag;
    if (tmp11) {
      let startsWithResult1 = null != banner;
      if (startsWithResult1) {
        startsWithResult1 = banner.startsWith("a_");
      }
      tmp11 = startsWithResult1;
    }
    if (tmp11) {
      obj.animated = true;
    }
    const _HermesInternal2 = HermesInternal;
    return combined + "?" + _modDef1471.stringify(obj);
  }
}
function getApplicationIconURL(guildMember) {
  ({ icon, size } = guildMember);
  if (size === undefined) {
    size = closure_1_4;
  }
  ({ bot, fallbackAvatar, botIconFirst } = guildMember);
  if (fallbackAvatar === undefined) {
    fallbackAvatar = true;
  }
  guildMember = guildMember.guildMember;
  id = undefined;
  if (bot != null) {
    id = bot.id;
  }
  if (null != id) {
    if (null != guildMember) {
      if (null != guildMember.avatar) {
        let obj = { userId: bot.id, guildId: null, avatar: null, canAnimate: false, size: null };
        ({ guildId: obj4.guildId, avatar: obj4.avatar } = guildMember);
        obj.size = size;
        return getGuildMemberAvatarURLSimple(obj);
      }
    }
  }
  if (null != bot) {
    if (botIconFirst) {
      const avatar = bot.avatar;
      let tmp2 = size;
      ({ id, discriminator, bot: bot2 } = bot);
      if (size === undefined) {
        tmp2 = closure_1_4;
      }
      if (!bot2) {
        obj = { endpoint: React3.AVATAR, path: "avatars", id, hash: avatar, size: tmp2, canAnimate: false, format: null, canWebP: tmp3 };
        let first = getAvatarURL(obj);
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
    let isMatch = null != icon;
    if (isMatch) {
      isMatch = re6.test(icon);
    }
    let tmp23 = icon;
    if (!isMatch) {
      obj = { endpoint: React3.APPLICATION_ICON, path: "app-icons", id: guildMember.id, hash: icon, size, canAnimate: false, canWebP: false, keepAspectRatio: guildMember.keepAspectRatio };
      tmp23 = getAvatarURL(obj);
    }
    return tmp23;
  } else {
    if (null != bot) {
      const avatar2 = bot.avatar;
      let tmp10 = size;
      ({ id: id2, discriminator: discriminator2, bot: bot3 } = bot);
      if (size === undefined) {
        tmp10 = closure_1_4;
      }
      if (!bot3) {
        const obj1 = { endpoint: React3.AVATAR, path: "avatars", id: id2, hash: avatar2, size: tmp10, canAnimate: false, format: null, canWebP: tmp11 };
        let first1 = getAvatarURL(obj1);
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
      tmp18 = _modDef1884;
    }
    return tmp18;
  }
}
function getChannelIconURL(arg0) {
  ({ id, icon, applicationId, size } = arg0);
  if (null != applicationId) {
    let obj = { id: applicationId, icon, size };
    let DEFAULT_CHANNEL_ICON = getApplicationIconURL(obj);
    if (DEFAULT_CHANNEL_ICON == null) {
      DEFAULT_CHANNEL_ICON = utils_AvatarUtils.default.DEFAULT_CHANNEL_ICON;
    }
    let tmp5 = DEFAULT_CHANNEL_ICON;
  } else {
    obj = { endpoint: React3.CHANNEL_ICON, path: "channel-icons", id, hash: icon, canAnimate: false, size, canWebP: false };
    tmp5 = getAvatarURL(obj);
    if (tmp5 == null) {
      obj = SnowflakeUtilsDefault;
      tmp5 = utils_AvatarUtils.default.DEFAULT_GROUP_DM_AVATARS[obj.extractTimestamp(id) % utils_AvatarUtils.default.DEFAULT_GROUP_DM_AVATARS.length];
      const extractTimestampResult = obj.extractTimestamp(id);
    }
  }
  return tmp5;
}
function _getAssetHash(bannerURL) {
  try {
    const parts = Url.parse(bannerURL).pathname.split("/");
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
  ({ id, animated, forcePNG } = size);
  if (forcePNG === undefined) {
    forcePNG = false;
  }
  let str = "png";
  if (forcePNG) {
    let str4 = "";
    if (canUseWebpResult) {
      str4 = "";
      if (animated) {
        str4 = "&animated=true";
      }
    }
    const obj = ImageLoaderUtils;
    const _HermesInternal = HermesInternal;
    const combined = "size=" + obj.getBestMediaProxySize(size.size * ImageLoaderUtils.getDevicePixelRatio(), closure_12);
    try {
      const enabled = ForceSdrEmojisStickersExperiment.getForceSdrEmojisStickersConfig({ location: "getEmojiURL" }).enabled;
      let str6 = "";
      if (enabled) {
        str6 = "&force_sdr=true";
      }
      const _window = window;
      if (null != window.GLOBAL_ENV.CDN_HOST) {
        const _location2 = location;
        const _window3 = window;
        const _HermesInternal3 = HermesInternal;
        return "" + location.protocol + "//" + window.GLOBAL_ENV.CDN_HOST + "/emojis/" + id + "." + tmp + "?" + combined + str4 + str6;
      } else {
        const _location = location;
        const _window2 = window;
        const sum = location.protocol + window.GLOBAL_ENV.API_ENDPOINT;
        const sum1 = sum + React3.EMOJI(id, str);
        let combined1 = sum1;
        if (enabled) {
          const _HermesInternal2 = HermesInternal;
          combined1 = "" + sum1 + "?force_sdr=true";
        }
        return combined1;
      }
    } catch (err) {
    }
  } else if (animated) {
    let str2 = "gif";
    if (canUseWebpResult) {
      str2 = "webp";
    }
    str = str2;
  } else if (canUseWebpResult) {
    str = "webp";
  }
}
function getGuildMemberAvatarURL(avatar) {
  avatar = avatar.avatar;
  ({ userId, guildId } = avatar);
  if (flag === undefined) {
    flag = false;
  }
  let tmp = null;
  if (null != avatar) {
    const obj = { userId, avatar, guildId, canAnimate: flag };
    tmp = getGuildMemberAvatarURLSimple(obj);
  }
  return tmp;
}
function getGuildMemberAvatarSource(member, author) {
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
    let obj = { userId, avatar, guildId, canAnimate: flag2 };
    tmp = getGuildMemberAvatarURLSimple(obj);
  }
  if (null != tmp) {
    let tmp5 = tmp;
    if (typeof tmp !== "number") {
      obj = { uri: tmp };
      tmp5 = obj;
    }
    let avatarSource = tmp5;
  } else {
    avatarSource = author.getAvatarSource(member.guildId, flag);
  }
  return avatarSource;
}
function getUserBannerURL(arg0) {
  ({ id, banner, canAnimate } = arg0);
  if (null != banner) {
    const _window = window;
    let str2 = "png";
    if (canAnimate) {
      let startsWithResult = null != banner;
      if (startsWithResult) {
        startsWithResult = banner.startsWith("a_");
      }
      str2 = "png";
      if (startsWithResult) {
        let str4 = "gif";
        if (canUseWebpResult) {
          str4 = "webp";
        }
        str2 = str4;
      }
    }
    if (null != CDN_HOST) {
      const _HermesInternal = HermesInternal;
      let combined = "https://" + CDN_HOST + "/banners/" + id + "/" + banner + "." + str2;
    } else {
      const _location = location;
      const _window2 = window;
      const sum = location.protocol + window.GLOBAL_ENV.API_ENDPOINT;
      combined = sum + React3.USER_BANNER(id, banner, str2);
    }
    const obj = { size: null };
    const obj2 = ImageLoaderUtils;
    obj.size = obj2.getBestMediaProxySize(tmp * ImageLoaderUtils.getDevicePixelRatio());
    let tmp14 = "webp" === str2 && canAnimate;
    if (tmp14) {
      let startsWithResult1 = null != banner;
      if (startsWithResult1) {
        startsWithResult1 = banner.startsWith("a_");
      }
      tmp14 = startsWithResult1;
    }
    if (tmp14) {
      obj.animated = true;
    }
    const _HermesInternal2 = HermesInternal;
    return combined + "?" + _modDef1471.stringify(obj);
  }
}
function getAvatarDecorationURL(canAnimate) {
  ({ avatarDecoration, size } = canAnimate);
  if (size === undefined) {
    size = AVATAR_DECORATION_SIZE;
  }
  let flag = canAnimate.canAnimate;
  if (flag === undefined) {
    flag = false;
  }
  if (null != avatarDecoration) {
    if (!obj4.isAvatarDecorationExpired(avatarDecoration)) {
      try {
        let tmp13Result = CollectiblesAssetUtils;
        ({ CollectiblesItemAssetFormat, getCollectiblesItemAssetUrl } = tmp13Result);
        if (flag) {
          let STATIC = CollectiblesItemAssetFormat.ANIMATED;
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
            const _window = window;
            const CDN_HOST = GLOBAL_ENV.CDN_HOST;
            const result = React3.AVATAR_DECORATION_PRESETS(asset);
            if (null != CDN_HOST) {
              const _URL2 = URL;
              const _HermesInternal2 = HermesInternal;
              let str2 = new URL("https://" + CDN_HOST + result);
            } else {
              const _URL = URL;
              const _location = location;
              const _HermesInternal = HermesInternal;
              str2 = new URL("" + location.protocol + GLOBAL_ENV.API_ENDPOINT + result);
            }
            const searchParams = str2.searchParams;
            tmp13Result = ImageLoaderUtils;
            const _HermesInternal3 = HermesInternal;
            const result1 = searchParams.set("size", "" + tmp13Result.getBestMediaProxySize(size * ImageLoaderUtils.getDevicePixelRatio(), closure_12));
            const searchParams2 = str2.searchParams;
            const _HermesInternal4 = HermesInternal;
            const result2 = searchParams2.set("passthrough", "" + flag);
            return str2.toString();
          }
        }
      } catch (err) {
        return tmp;
      }
    }
    obj4 = AvatarDecorationUtils;
  }
  return null;
}
function getGuildMemberBannerURL(arg0) {
  ({ id, guildId, banner, canAnimate } = arg0);
  if (null != banner) {
    if (null != guildId) {
      const _window = window;
      let str2 = "png";
      if (canAnimate) {
        let startsWithResult = null != banner;
        if (startsWithResult) {
          startsWithResult = banner.startsWith("a_");
        }
        str2 = "png";
        if (startsWithResult) {
          let str4 = "gif";
          if (canUseWebpResult) {
            str4 = "webp";
          }
          str2 = str4;
        }
      }
      const GUILD_MEMBER_BANNERResult = React3.GUILD_MEMBER_BANNER(guildId, id, banner, str2);
      if (null != CDN_HOST) {
        const _HermesInternal = HermesInternal;
        let combined = "https://" + CDN_HOST + GUILD_MEMBER_BANNERResult;
      } else {
        const _location = location;
        const _window2 = window;
        combined = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + GUILD_MEMBER_BANNERResult;
      }
      const obj = { size: null };
      const obj2 = ImageLoaderUtils;
      obj.size = obj2.getBestMediaProxySize(tmp * ImageLoaderUtils.getDevicePixelRatio());
      let tmp16 = "webp" === str2 && canAnimate;
      if (tmp16) {
        let startsWithResult1 = null != banner;
        if (startsWithResult1) {
          startsWithResult1 = banner.startsWith("a_");
        }
        tmp16 = startsWithResult1;
      }
      if (tmp16) {
        obj.animated = true;
      }
      const _HermesInternal2 = HermesInternal;
      return combined + "?" + _modDef1471.stringify(obj);
    }
  }
}
function getResourceChannelIconURL(icon) {
  icon = icon.icon;
  let tmp2 = null;
  if (null != icon) {
    const obj = { endpoint: React3.GUILD_RESOURCE_CHANNELS_ICON, path: "resource-channels", id: tmp, hash: icon, size, canAnimate: true, canWebP: false };
    tmp2 = getAvatarURL(obj);
  }
  return tmp2;
}
function getNewMemberActionIconURL(icon) {
  icon = icon.icon;
  let tmp2 = null;
  if (null != icon) {
    const obj = { endpoint: React3.GUILD_NEW_MEMBER_ACTIONS_ICON, path: "new-member-actions", id: tmp, hash: icon, size, canAnimate: true, canWebP: false };
    tmp2 = getAvatarURL(obj);
  }
  return tmp2;
}
function getGuildTemplateIconURL(size) {
  size = size.size;
  ({ id, icon } = size);
  if (size === undefined) {
    size = closure_1_4;
  }
  let flag = size.canAnimate;
  if (flag === undefined) {
    flag = false;
  }
  return getAvatarURL({ endpoint: React3.GUILD_TEMPLATE_ICON, path: "guild-templates", id, hash: icon, size, canAnimate: flag, canWebP: false });
}
function getVideoFilterAssetURL(size) {
  const userId = size.userId;
  const assetId = size.assetId;
  const assetHash = size.assetHash;
  let flag = size.canAnimate;
  if (flag === undefined) {
    flag = true;
  }
  return getAvatarURL({
    endpoint(arg0, arg1, arg2) {
      return React3.VIDEO_FILTER_ASSET_STORAGE(userId, assetId, assetHash, arg2);
    },
    path: "video-filter-assets/" + userId,
    id: assetId,
    hash: assetHash,
    size: size.size,
    canAnimate: flag,
    canWebP: false
  });
}
function hasAnimatedGuildIcon(icon) {
  icon = undefined;
  if (icon != null) {
    icon = icon.icon;
  }
  let startsWithResult = null != icon;
  if (startsWithResult) {
    startsWithResult = icon.startsWith("a_");
  }
  return startsWithResult;
}
function isAnimatedIconHash(storageHash) {
  let startsWithResult = null != storageHash;
  if (startsWithResult) {
    startsWithResult = storageHash.startsWith("a_");
  }
  return startsWithResult;
}
function makeSource(automodAvatarURL) {
  let tmp = automodAvatarURL;
  if (typeof automodAvatarURL !== "number") {
    const obj = { uri: automodAvatarURL };
    tmp = obj;
  }
  return tmp;
}
function getGuildSplashURL(arg0) {
  ({ id, splash, size } = arg0);
  if (null == splash) {
    return null;
  } else {
    if (null == size) {
      const _window = window;
      size = window.screen.width * ImageLoaderUtils.getDevicePixelRatio();
    }
    const _window2 = window;
    const bestMediaProxySize = ImageLoaderUtils.getBestMediaProxySize(size);
    if (null != CDN_HOST) {
      const _HermesInternal = HermesInternal;
      let combined = "https://" + CDN_HOST + "/splashes/" + id + "/" + splash + ".jpg";
    } else {
      const _location = location;
      const _window3 = window;
      const sum = location.protocol + window.GLOBAL_ENV.API_ENDPOINT;
      combined = sum + React3.GUILD_SPLASH(id, splash);
    }
    const _HermesInternal2 = HermesInternal;
    return combined + "?size=" + bestMediaProxySize;
  }
}
function getGuildHomeHeaderURL(arg0) {
  ({ id, homeHeader } = arg0);
  if (null == homeHeader) {
    return null;
  } else {
    const obj = ImageLoaderUtils;
    const _window2 = window;
    const bestMediaProxySize = obj.getBestMediaProxySize(1096 * ImageLoaderUtils.getDevicePixelRatio());
    if (null != CDN_HOST) {
      const _HermesInternal = HermesInternal;
      let combined = "https://" + CDN_HOST + "/home-headers/" + id + "/" + homeHeader + ".png";
    } else {
      const _location = location;
      const _window = window;
      const sum = location.protocol + window.GLOBAL_ENV.API_ENDPOINT;
      combined = sum + React3.GUILD_HOME_HEADER(id, homeHeader);
    }
    const _HermesInternal2 = HermesInternal;
    return combined + "?size=" + bestMediaProxySize;
  }
}
function getGuildDiscoverySplashURL(arg0) {
  ({ id, splash, size } = arg0);
  if (null == splash) {
    return null;
  } else {
    if (null == size) {
      const _window = window;
      size = window.screen.width * ImageLoaderUtils.getDevicePixelRatio();
    }
    const _window2 = window;
    const bestMediaProxySize = ImageLoaderUtils.getBestMediaProxySize(size);
    if (null != CDN_HOST) {
      const _HermesInternal = HermesInternal;
      let combined = "https://" + CDN_HOST + "/discovery-splashes/" + id + "/" + splash + ".jpg";
    } else {
      const _location = location;
      const _window3 = window;
      const sum = location.protocol + window.GLOBAL_ENV.API_ENDPOINT;
      combined = sum + React3.GUILD_DISCOVERY_SPLASH(id, splash);
    }
    const _HermesInternal2 = HermesInternal;
    return combined + "?size=" + bestMediaProxySize;
  }
}
function getGuildIconURL(canAnimate) {
  let flag = canAnimate.canAnimate;
  ({ id, icon, size } = canAnimate);
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = canAnimate.lossless;
  if (flag2 === undefined) {
    flag2 = false;
  }
  return getAvatarURL({ endpoint: React3.GUILD_ICON, path: "icons", id, hash: icon, size, canAnimate: flag, lossless: flag2, canWebP: canUseWebpResult });
}
function getGameAssetURL(format) {
  size = format.size;
  ({ id, hash } = format);
  if (size === undefined) {
    size = closure_1_4;
  }
  let flag = format.keepAspectRatio;
  if (flag === undefined) {
    flag = false;
  }
  return getAvatarURL({ endpoint: React3.APPLICATION_ICON, path: "app-icons", id, hash, size, canAnimate: false, keepAspectRatio: flag, format: format.format, canWebP: false });
}
function isVideoAssetHash(asset) {
  let startsWithResult = null != asset;
  if (startsWithResult) {
    startsWithResult = asset.startsWith("v_");
  }
  return startsWithResult;
}
function isDataUri(arg0) {
  let isMatch = null != arg0;
  if (isMatch) {
    isMatch = re6.test(arg0);
  }
  return isMatch;
}
const DEFAULT_PROVISIONAL_AVATARS = utils_AvatarUtils.default.DEFAULT_PROVISIONAL_AVATARS;
const canUseWebpResult = utils_AvatarUtils.default.canUseWebp();
let closure_12 = PlatformUtils.isAndroid();
let result = size.fileFinishedImporting("utils/AvatarUtils.tsx");

export default {
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
      const obj = { uri: tmp };
      tmp2 = obj;
    }
    return tmp2;
  },
  getGuildIconURL,
  getGuildSplashURL,
  getGuildSplashSource(arg0) {
    ({ id, splash, size } = arg0);
    if (null == splash) {
      let tmp15 = null;
      if (typeof null !== "number") {
        let obj = { uri: null };
        tmp15 = obj;
      }
      return tmp15;
    } else {
      if (null == size) {
        const _window = window;
        obj = ImageLoaderUtils;
        size = window.screen.width * obj.getDevicePixelRatio();
      }
      let combined1 = globalThis;
      const _window2 = window;
      const bestMediaProxySize = ImageLoaderUtils.getBestMediaProxySize(size);
      if (null != CDN_HOST) {
        let combined = "https://" + CDN_HOST + "/splashes/" + id + "/" + splash + ".jpg";
      } else {
        const _location = location;
        const _window3 = window;
        const sum = location.protocol + window.GLOBAL_ENV.API_ENDPOINT;
        combined = sum + React3.GUILD_SPLASH(id, splash);
      }
      combined1 = "?size=" + bestMediaProxySize;
      const sum1 = combined + combined1;
    }
  },
  getGuildDiscoverySplashURL,
  getGuildDiscoverySplashSource(arg0) {
    ({ id, splash, size } = arg0);
    if (null == splash) {
      let tmp15 = null;
      if (typeof null !== "number") {
        let obj = { uri: null };
        tmp15 = obj;
      }
      return tmp15;
    } else {
      if (null == size) {
        const _window = window;
        obj = ImageLoaderUtils;
        size = window.screen.width * obj.getDevicePixelRatio();
      }
      let combined1 = globalThis;
      const _window2 = window;
      const bestMediaProxySize = ImageLoaderUtils.getBestMediaProxySize(size);
      if (null != CDN_HOST) {
        let combined = "https://" + CDN_HOST + "/discovery-splashes/" + id + "/" + splash + ".jpg";
      } else {
        const _location = location;
        const _window3 = window;
        const sum = location.protocol + window.GLOBAL_ENV.API_ENDPOINT;
        combined = sum + React3.GUILD_DISCOVERY_SPLASH(id, splash);
      }
      combined1 = "?size=" + bestMediaProxySize;
      const sum1 = combined + combined1;
    }
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
    size = format.size;
    ({ id, hash } = format);
    if (size === undefined) {
      size = closure_1_4;
    }
    let flag = format.keepAspectRatio;
    if (flag === undefined) {
      flag = false;
    }
    let obj = { endpoint: React3.APPLICATION_ICON, path: "app-icons", id, hash, size, canAnimate: false, keepAspectRatio: flag, format: format.format, canWebP: false };
    const tmp = getAvatarURL(obj);
    let tmp2 = tmp;
    if (typeof tmp !== "number") {
      obj = { uri: tmp };
      tmp2 = obj;
    }
    return tmp2;
  },
  getGuildIconSource(canAnimate) {
    let flag = canAnimate.canAnimate;
    ({ id, icon, size } = canAnimate);
    if (flag === undefined) {
      flag = false;
    }
    let flag2 = canAnimate.lossless;
    if (flag2 === undefined) {
      flag2 = false;
    }
    let obj = { endpoint: React3.GUILD_ICON, path: "icons", id, hash: icon, size, canAnimate: flag, lossless: flag2, canWebP: canUseWebpResult };
    const tmp = getAvatarURL(obj);
    let tmp2 = tmp;
    if (typeof tmp !== "number") {
      obj = { uri: tmp };
      tmp2 = obj;
    }
    return tmp2;
  },
  getGuildTemplateIconSource(size) {
    size = size.size;
    ({ id, icon } = size);
    if (size === undefined) {
      size = closure_1_4;
    }
    let flag = size.canAnimate;
    if (flag === undefined) {
      flag = false;
    }
    let obj = { endpoint: React3.GUILD_TEMPLATE_ICON, path: "guild-templates", id, hash: icon, size, canAnimate: flag, canWebP: false };
    const tmp = getAvatarURL(obj);
    let tmp2 = tmp;
    if (typeof tmp !== "number") {
      obj = { uri: tmp };
      tmp2 = obj;
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
      const obj = { uri: tmp };
      tmp2 = obj;
    }
    return tmp2;
  },
  getGuildHomeHeaderSource(arg0) {
    ({ id, homeHeader } = arg0);
    if (null == homeHeader) {
      let tmp12 = null;
      if (typeof null !== "number") {
        let obj = { uri: null };
        tmp12 = obj;
      }
      return tmp12;
    } else {
      obj = ImageLoaderUtils;
      let combined1 = globalThis;
      const _window = window;
      const bestMediaProxySize = obj.getBestMediaProxySize(1096 * ImageLoaderUtils.getDevicePixelRatio());
      if (null != CDN_HOST) {
        let combined = "https://" + CDN_HOST + "/home-headers/" + id + "/" + homeHeader + ".png";
      } else {
        const _location = location;
        const _window2 = window;
        const sum = location.protocol + window.GLOBAL_ENV.API_ENDPOINT;
        combined = sum + React3.GUILD_HOME_HEADER(id, homeHeader);
      }
      combined1 = "?size=" + bestMediaProxySize;
      const sum1 = combined + combined1;
    }
  },
  getChannelIconSource(arg0) {
    const tmp = getChannelIconURL(arg0);
    let tmp2 = tmp;
    if (typeof tmp !== "number") {
      const obj = { uri: tmp };
      tmp2 = obj;
    }
    return tmp2;
  },
  getApplicationIconSource(guildMember) {
    const tmp = getApplicationIconURL(guildMember);
    let tmp2 = tmp;
    if (typeof tmp !== "number") {
      const obj = { uri: tmp };
      tmp2 = obj;
    }
    return tmp2;
  },
  makeSource,
  getAnimatableSourceWithFallback(flag, fn) {
    const tmp = fn(flag);
    let obj = PlatformUtils;
    if (obj.isAndroid()) {
      if (flag) {
        if (typeof tmp !== "number") {
          const tmp2 = fn(false);
          if (typeof tmp2 === "number") {
            const items = [tmp, ];
            obj = {};
            const merged = Object.assign(tmp2);
            obj.isForceCached = true;
            items[1] = obj;
            let tmp6 = items;
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
export const DATA_IMAGE_PREFIX = tmp3;
export { DEFAULT_AVATARS };
export { DEFAULT_AVATARS_SMALL };
export const DEFAULT_AVATARS_SMALL_MAX_SIZE = num;
export { DEFAULT_PROVISIONAL_AVATARS };
export const DEFAULT_GROUP_DM_AVATARS = utils_AvatarUtils.default.DEFAULT_GROUP_DM_AVATARS;
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
    let startsWithResult = null != obj;
    if (startsWithResult) {
      startsWithResult = obj.startsWith("a_");
    }
    tmp = startsWithResult;
  }
  return tmp;
};
export const isVideoURL = function isVideoURL(bannerURL) {
  let tmp = null != bannerURL;
  if (tmp) {
    const obj = _getAssetHash(bannerURL);
    let startsWithResult = null != obj;
    if (startsWithResult) {
      startsWithResult = obj.startsWith("v_");
    }
    tmp = startsWithResult;
  }
  return tmp;
};
export { makeSource };
export { isDataUri };