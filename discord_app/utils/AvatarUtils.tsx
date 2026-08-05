// discord_app/utils/AvatarUtils.tsx
import ME from "ME";
import { AVATAR_DECORATION_SIZE } from "DECORATION_TO_AVATAR_RATIO";
import set from "set";
import set from "ensureAvatarSource";
import { Integer } from "../../_runtime/00014_Integer.js";
import { parse } from "../../_runtime/01464_parse.js";
import { Url } from "../../_runtime/01469_Url.js";
import { registerAsset } from "../../_runtime/01855_registerAsset.js";
import { parseAvatarDecorationData } from "../modules/collectibles/avatar_decorations/AvatarDecorationUtils.tsx";
import { handleImageLoad } from "../modules/image_upload/ImageLoaderUtils.tsx";
import { ensureAvatarSource } from "native/AvatarUtils.tsx";
import { shortenAndLocalizeNumber } from "NumberUtils.tsx";
import { set } from "PlatformUtils.tsx";
import { DISCORD_EPOCH } from "SnowflakeUtils.tsx";

let c3;
let c4;
function getAvatarURL(canAnimate) {
  let format;
  let hash;
  let id;
  let keepAspectRatio;
  let lossless;
  let path;
  let size;
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
    canWebP = closure_11;
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
          obj = handleImageLoad;
          obj.size = obj.getBestMediaProxySize(size * handleImageLoad.getDevicePixelRatio());
          const obj2 = handleImageLoad;
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
        return combined + "?" + parse.stringify(obj);
      }
    }
  }
}
function getDefaultAvatarURL(id, discriminator, isProvisional, closure_2) {
  let flag = isProvisional;
  if (isProvisional === undefined) {
    flag = false;
  }
  if (flag) {
    let arr = DEFAULT_PROVISIONAL_AVATARS;
  } else {
    if (!flag) {
      if (null != closure_2) {
        if (closure_2 <= num) {
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
  const parseIntegerResult = shortenAndLocalizeNumber.parseInteger(discriminator, 0);
  if (parseIntegerResult > 0) {
    let first = arr[parseIntegerResult % 5];
  } else if (null != id) {
    const obj2 = Integer(id);
    const modResult = Integer(id).shiftRight(22).mod(arr.length);
    first = arr[modResult.toJSNumber(modResult)];
    const shiftRightResult = Integer(id).shiftRight(22);
  } else {
    first = arr[0];
  }
  return first;
}
function getUserAvatarURL(user, flag, closure_2, format, SUPPORTS_WEBP) {
  let avatar;
  let bot;
  let discriminator;
  let id;
  if (flag === undefined) {
    flag = false;
  }
  let tmp = closure_2;
  if (closure_2 === undefined) {
    tmp = closure_4;
  }
  let tmp2 = format;
  if (format === undefined) {
    tmp2 = null;
  }
  let tmp3 = SUPPORTS_WEBP;
  if (SUPPORTS_WEBP === undefined) {
    tmp3 = closure_11;
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
    tmp3 = closure_11;
  }
  if (!bot) {
    const obj = { endpoint: null, path: "avatars", id: null, hash: null, size: null, canAnimate: null, format: null, canWebP: null };
    obj[0] = closure_3.AVATAR;
    obj[2] = id;
    obj[3] = avatar;
    obj[4] = tmp4;
    obj[5] = flag;
    obj[6] = tmp2;
    obj[7] = tmp3;
    let first = getAvatarURL(obj);
  } else {
    first = ensureAvatarSource.default.BOT_AVATARS[avatar];
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
  let guildId;
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
    canWebP = closure_11;
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
    let combined = "https://" + CDN_HOST + closure_3.GUILD_MEMBER_AVATAR(guildId, userId, avatar, tmp12);
    let tmp11 = tmp12;
  } else {
    const _location = location;
    const _window = window;
    const sum = location.protocol + window.GLOBAL_ENV.API_ENDPOINT;
    combined = sum + closure_3.GUILD_MEMBER_AVATAR(guildId, userId, avatar, str);
    tmp11 = str;
  }
  const obj = { size: null };
  const obj2 = handleImageLoad;
  obj[0] = obj2.getBestMediaProxySize(size * handleImageLoad.getDevicePixelRatio());
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
  const obj3 = handleImageLoad;
  return combined + "?" + parse.stringify(obj);
}
function getGuildBannerURL(fromInviteGuildResult, flag) {
  let banner;
  let id;
  ({ id, banner } = fromInviteGuildResult);
  if (flag === undefined) {
    flag = false;
  }
  if (null == banner) {
    return null;
  } else {
    const obj3 = handleImageLoad;
    let str = "jpg";
    const bestMediaProxySize = obj3.getBestMediaProxySize(360 * handleImageLoad.getDevicePixelRatio());
    if (closure_11) {
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
        if (tmp17) {
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
      combined = sum + closure_3.GUILD_BANNER(id, banner, tmp);
    }
    const obj = { size: null };
    obj[0] = bestMediaProxySize;
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
    const obj4 = handleImageLoad;
    tmp17 = closure_11;
    const _HermesInternal2 = HermesInternal;
    return combined + "?" + parse.stringify(obj);
  }
}
function getApplicationIconURL(guildMember) {
  let bot;
  let bot2;
  let bot3;
  let botIconFirst;
  let discriminator;
  let discriminator2;
  let fallbackAvatar;
  let icon;
  let id;
  let id2;
  let size;
  ({ icon, size } = guildMember);
  if (size === undefined) {
    size = closure_4;
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
        let obj = { userId: null, guildId: null, avatar: null, canAnimate: false, size: null };
        obj[0] = bot.id;
        ({ guildId: obj4[1], avatar: obj4[2] } = guildMember);
        obj[4] = size;
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
        tmp2 = closure_4;
      }
      if (!bot2) {
        obj = { endpoint: null, path: "avatars", id: null, hash: null, size: null, canAnimate: null, format: null, canWebP: null };
        obj[0] = closure_3.AVATAR;
        obj[2] = id;
        obj[3] = avatar;
        obj[4] = tmp2;
        obj[5] = false;
        obj[6] = null;
        obj[7] = tmp3;
        let first = getAvatarURL(obj);
      } else {
        first = ensureAvatarSource.default.BOT_AVATARS[avatar];
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
      isMatch = tmp3.test(icon);
    }
    let tmp23 = icon;
    if (!isMatch) {
      obj = { endpoint: null, path: "app-icons", id: null, hash: null, size: null, canAnimate: false, canWebP: false, keepAspectRatio: null };
      obj[0] = closure_3.APPLICATION_ICON;
      obj[2] = guildMember.id;
      obj[3] = icon;
      obj[4] = size;
      obj[7] = guildMember.keepAspectRatio;
      tmp23 = getAvatarURL(obj);
    }
    return tmp23;
  } else {
    if (null != bot) {
      const avatar2 = bot.avatar;
      let tmp10 = size;
      ({ id: id2, discriminator: discriminator2, bot: bot3 } = bot);
      if (size === undefined) {
        tmp10 = closure_4;
      }
      if (!bot3) {
        const obj1 = { endpoint: null, path: "avatars", id: null, hash: null, size: null, canAnimate: null, format: null, canWebP: null };
        obj1[0] = closure_3.AVATAR;
        obj1[2] = id2;
        obj1[3] = avatar2;
        obj1[4] = tmp10;
        obj1[5] = false;
        obj1[6] = null;
        obj1[7] = tmp11;
        let first1 = getAvatarURL(obj1);
      } else {
        first1 = ensureAvatarSource.default.BOT_AVATARS[avatar2];
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
      tmp18 = registerAsset;
    }
    return tmp18;
  }
}
function getChannelIconURL(arg0) {
  let applicationId;
  let icon;
  let id;
  let size;
  ({ id, icon, applicationId, size } = arg0);
  if (null != applicationId) {
    let obj = { id: null, icon: null, size: null };
    obj[0] = applicationId;
    obj[1] = icon;
    obj[2] = size;
    let DEFAULT_CHANNEL_ICON = getApplicationIconURL(obj);
    if (DEFAULT_CHANNEL_ICON == null) {
      DEFAULT_CHANNEL_ICON = ensureAvatarSource.default.DEFAULT_CHANNEL_ICON;
    }
    let tmp5 = DEFAULT_CHANNEL_ICON;
  } else {
    obj = { endpoint: null, path: "channel-icons", id: null, hash: null, canAnimate: false, size: null, canWebP: false };
    obj[0] = closure_3.CHANNEL_ICON;
    obj[2] = id;
    obj[3] = icon;
    obj[5] = size;
    tmp5 = getAvatarURL(obj);
    if (tmp5 == null) {
      obj = DISCORD_EPOCH;
      tmp5 = ensureAvatarSource.default.DEFAULT_GROUP_DM_AVATARS[obj.extractTimestamp(id) % require(undefined, 1419) /* ensureAvatarSource */.default.DEFAULT_GROUP_DM_AVATARS.length];
      const extractTimestampResult = obj.extractTimestamp(id);
    }
  }
  return tmp5;
}
function _getAssetHash(bannerURL) {
  try {
    const obj = Url;
    const parts = Url.parse(bannerURL).pathname.split("/");
    return parts.pop();
  } catch (err) {
    return null;
  }
}
({ Endpoints: c3, AVATAR_SIZE: c4 } = ME);
let tmp3 = /^data:/;
let closure_6 = tmp3;
const DEFAULT_AVATARS = require("ensureAvatarSource").default.DEFAULT_AVATARS;
let DEFAULT_AVATARS_SMALL = require("ensureAvatarSource").default.DEFAULT_AVATARS_SMALL;
if (DEFAULT_AVATARS_SMALL == null) {
  DEFAULT_AVATARS_SMALL = DEFAULT_AVATARS;
}
let num = require("ensureAvatarSource").default.DEFAULT_AVATARS_SMALL_MAX_SIZE;
if (num == null) {
  num = 0;
}
function getEmojiURL(size) {
  let animated;
  let forcePNG;
  let id;
  ({ id, animated, forcePNG } = size);
  if (forcePNG === undefined) {
    forcePNG = false;
  }
  let str = "png";
  if (forcePNG) {
    let str4 = "";
    if (closure_11) {
      str4 = "";
      if (animated) {
        str4 = "&animated=true";
      }
    }
    const obj = handleImageLoad;
    const tmp5 = require;
    const _HermesInternal = HermesInternal;
    const combined = "size=" + obj.getBestMediaProxySize(size.size * handleImageLoad.getDevicePixelRatio(), set);
    try {
      const enabled = tmp5(1850).getForceSdrEmojisStickersConfig({ location: "getEmojiURL" }).enabled;
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
        const sum1 = sum + closure_3.EMOJI(id, str);
        let combined1 = sum1;
        if (enabled) {
          const _HermesInternal2 = HermesInternal;
          combined1 = "" + sum1 + "?force_sdr=true";
        }
        return combined1;
      }
    } catch (err) {
    }
    const obj2 = handleImageLoad;
  } else if (animated) {
    let str2 = "gif";
    if (tmp2) {
      str2 = "webp";
    }
    str = str2;
  } else if (tmp2) {
    str = "webp";
  }
}
function getGuildMemberAvatarURL(avatar, flag) {
  let guildId;
  let userId;
  avatar = avatar.avatar;
  ({ userId, guildId } = avatar);
  if (flag === undefined) {
    flag = false;
  }
  let tmp = null;
  if (null != avatar) {
    const obj = { userId: null, avatar: null, guildId: null, canAnimate: null };
    obj[0] = userId;
    obj[1] = avatar;
    obj[2] = guildId;
    obj[3] = flag;
    tmp = getGuildMemberAvatarURLSimple(obj);
  }
  return tmp;
}
function getGuildMemberAvatarSource(member, author) {
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
    let obj = { userId: null, avatar: null, guildId: null, canAnimate: null };
    obj[0] = userId;
    obj[1] = avatar;
    obj[2] = guildId;
    obj[3] = flag2;
    tmp = getGuildMemberAvatarURLSimple(obj);
  }
  if (null != tmp) {
    let tmp5 = tmp;
    if (typeof tmp !== "number") {
      obj = { uri: null };
      obj[0] = tmp;
      tmp5 = obj;
      const tmp6 = tmp;
    }
    let avatarSource = tmp5;
  } else {
    avatarSource = author.getAvatarSource(member.guildId, flag);
  }
  return avatarSource;
}
function getUserBannerURL(arg0) {
  let banner;
  let canAnimate;
  let id;
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
        if (closure_11) {
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
      combined = sum + closure_3.USER_BANNER(id, banner, str2);
    }
    const obj = { size: null };
    const obj2 = handleImageLoad;
    obj[0] = obj2.getBestMediaProxySize(tmp * handleImageLoad.getDevicePixelRatio());
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
    const obj3 = handleImageLoad;
    const _HermesInternal2 = HermesInternal;
    return combined + "?" + parse.stringify(obj);
  }
}
function getAvatarDecorationURL(canAnimate) {
  let CollectiblesItemAssetFormat;
  let avatarDecoration;
  let getCollectiblesItemAssetUrl;
  let size;
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
        let tmp13Result = tmp13(1854);
        ({ CollectiblesItemAssetFormat, getCollectiblesItemAssetUrl } = tmp13Result);
        if (flag) {
          let STATIC = CollectiblesItemAssetFormat.ANIMATED;
        } else {
          STATIC = CollectiblesItemAssetFormat.STATIC;
        }
        const obj = { skuId: null, assetFormat: null };
        obj[0] = avatarDecoration.skuId;
        obj[1] = STATIC;
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
            const result = closure_3.AVATAR_DECORATION_PRESETS(asset);
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
            tmp13Result = tmp13(1450);
            const _HermesInternal3 = HermesInternal;
            const result1 = searchParams.set("size", "" + tmp13Result.getBestMediaProxySize(size * tmp13(1450).getDevicePixelRatio(), set));
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
    obj4 = parseAvatarDecorationData;
  }
  return null;
}
function getGuildMemberBannerURL(arg0) {
  let banner;
  let canAnimate;
  let guildId;
  let id;
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
          if (closure_11) {
            str4 = "webp";
          }
          str2 = str4;
        }
      }
      const GUILD_MEMBER_BANNERResult = closure_3.GUILD_MEMBER_BANNER(guildId, id, banner, str2);
      if (null != CDN_HOST) {
        const _HermesInternal = HermesInternal;
        let combined = "https://" + CDN_HOST + GUILD_MEMBER_BANNERResult;
      } else {
        const _location = location;
        const _window2 = window;
        combined = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + GUILD_MEMBER_BANNERResult;
      }
      const obj = { size: null };
      const obj2 = handleImageLoad;
      obj[0] = obj2.getBestMediaProxySize(tmp * handleImageLoad.getDevicePixelRatio());
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
      const obj3 = handleImageLoad;
      const _HermesInternal2 = HermesInternal;
      return combined + "?" + parse.stringify(obj);
    }
  }
}
function getResourceChannelIconURL(icon) {
  icon = icon.icon;
  let tmp2 = null;
  if (null != icon) {
    const obj = { endpoint: null, path: "resource-channels", id: null, hash: null, size: null, canAnimate: true, canWebP: false };
    obj[0] = closure_3.GUILD_RESOURCE_CHANNELS_ICON;
    obj[2] = tmp;
    obj[3] = icon;
    obj[4] = closure_4;
    tmp2 = getAvatarURL(obj);
  }
  return tmp2;
}
function getNewMemberActionIconURL(icon) {
  icon = icon.icon;
  let tmp2 = null;
  if (null != icon) {
    const obj = { endpoint: null, path: "new-member-actions", id: null, hash: null, size: null, canAnimate: true, canWebP: false };
    obj[0] = closure_3.GUILD_NEW_MEMBER_ACTIONS_ICON;
    obj[2] = tmp;
    obj[3] = icon;
    obj[4] = closure_4;
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
  return getAvatarURL({ endpoint: closure_3.GUILD_TEMPLATE_ICON, path: "guild-templates", id, hash: icon, size, canAnimate: flag, canWebP: false });
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
      return outer1_3.VIDEO_FILTER_ASSET_STORAGE(userId, assetId, assetHash, arg2);
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
    const obj = { uri: null };
    obj[0] = automodAvatarURL;
    tmp = obj;
    const tmp2 = automodAvatarURL;
  }
  return tmp;
}
function getGuildSplashURL(arg0) {
  let id;
  let size;
  let splash;
  ({ id, splash, size } = arg0);
  if (null == splash) {
    return null;
  } else {
    if (null == size) {
      const _window = window;
      size = window.screen.width * handleImageLoad.getDevicePixelRatio();
      const obj = handleImageLoad;
    }
    const _window2 = window;
    const bestMediaProxySize = handleImageLoad.getBestMediaProxySize(size);
    if (null != CDN_HOST) {
      const _HermesInternal = HermesInternal;
      let combined = "https://" + CDN_HOST + "/splashes/" + id + "/" + splash + ".jpg";
    } else {
      const _location = location;
      const _window3 = window;
      const sum = location.protocol + window.GLOBAL_ENV.API_ENDPOINT;
      combined = sum + closure_3.GUILD_SPLASH(id, splash);
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
    const obj = handleImageLoad;
    const _window2 = window;
    const bestMediaProxySize = obj.getBestMediaProxySize(1096 * handleImageLoad.getDevicePixelRatio());
    if (null != CDN_HOST) {
      const _HermesInternal = HermesInternal;
      let combined = "https://" + CDN_HOST + "/home-headers/" + id + "/" + homeHeader + ".png";
    } else {
      const _location = location;
      const _window = window;
      const sum = location.protocol + window.GLOBAL_ENV.API_ENDPOINT;
      combined = sum + closure_3.GUILD_HOME_HEADER(id, homeHeader);
    }
    const _HermesInternal2 = HermesInternal;
    return combined + "?size=" + bestMediaProxySize;
  }
}
function getGuildDiscoverySplashURL(arg0) {
  let id;
  let size;
  let splash;
  ({ id, splash, size } = arg0);
  if (null == splash) {
    return null;
  } else {
    if (null == size) {
      const _window = window;
      size = window.screen.width * handleImageLoad.getDevicePixelRatio();
      const obj = handleImageLoad;
    }
    const _window2 = window;
    const bestMediaProxySize = handleImageLoad.getBestMediaProxySize(size);
    if (null != CDN_HOST) {
      const _HermesInternal = HermesInternal;
      let combined = "https://" + CDN_HOST + "/discovery-splashes/" + id + "/" + splash + ".jpg";
    } else {
      const _location = location;
      const _window3 = window;
      const sum = location.protocol + window.GLOBAL_ENV.API_ENDPOINT;
      combined = sum + closure_3.GUILD_DISCOVERY_SPLASH(id, splash);
    }
    const _HermesInternal2 = HermesInternal;
    return combined + "?size=" + bestMediaProxySize;
  }
}
function getGuildIconURL(canAnimate) {
  let icon;
  let id;
  let size;
  let flag = canAnimate.canAnimate;
  ({ id, icon, size } = canAnimate);
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = canAnimate.lossless;
  if (flag2 === undefined) {
    flag2 = false;
  }
  return getAvatarURL({ endpoint: closure_3.GUILD_ICON, path: "icons", id, hash: icon, size, canAnimate: flag, lossless: flag2, canWebP: closure_11 });
}
function getGameAssetURL(format) {
  let hash;
  let id;
  let size = format.size;
  ({ id, hash } = format);
  if (size === undefined) {
    size = closure_4;
  }
  let flag = format.keepAspectRatio;
  if (flag === undefined) {
    flag = false;
  }
  return getAvatarURL({ endpoint: closure_3.APPLICATION_ICON, path: "app-icons", id, hash, size, canAnimate: false, keepAspectRatio: flag, format: format.format, canWebP: false });
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
    isMatch = tmp3.test(arg0);
  }
  return isMatch;
}
const DEFAULT_PROVISIONAL_AVATARS = require("ensureAvatarSource").default.DEFAULT_PROVISIONAL_AVATARS;
const canUseWebpResult = require("ensureAvatarSource").default.canUseWebp();
const unpackModuleId = canUseWebpResult;
set = set.isAndroid();
let result = set.fileFinishedImporting("utils/AvatarUtils.tsx");

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
  getUserAvatarSource(stateFromStores, flag, closure_2) {
    const tmp = getUserAvatarURL(stateFromStores, flag, closure_2);
    let tmp2 = tmp;
    if (typeof tmp !== "number") {
      const obj = { uri: null };
      obj[0] = tmp;
      tmp2 = obj;
      const tmp3 = tmp;
    }
    return tmp2;
  },
  getGuildIconURL,
  getGuildSplashURL,
  getGuildSplashSource(arg0) {
    let id;
    let size;
    let splash;
    ({ id, splash, size } = arg0);
    if (null == splash) {
      let tmp15 = null;
      if (typeof null !== "number") {
        let obj = { uri: null };
        obj[0] = null;
        tmp15 = obj;
      }
      return tmp15;
    } else {
      if (null == size) {
        const _window = window;
        obj = handleImageLoad;
        size = window.screen.width * obj.getDevicePixelRatio();
      }
      let combined1 = globalThis;
      const _window2 = window;
      const bestMediaProxySize = handleImageLoad.getBestMediaProxySize(size);
      if (null != CDN_HOST) {
        let combined = "https://" + CDN_HOST + "/splashes/" + id + "/" + splash + ".jpg";
      } else {
        const _location = location;
        const _window3 = window;
        const sum = location.protocol + window.GLOBAL_ENV.API_ENDPOINT;
        combined = sum + closure_3.GUILD_SPLASH(id, splash);
      }
      combined1 = "?size=" + bestMediaProxySize;
      const sum1 = combined + combined1;
      const obj2 = handleImageLoad;
    }
  },
  getGuildDiscoverySplashURL,
  getGuildDiscoverySplashSource(arg0) {
    let id;
    let size;
    let splash;
    ({ id, splash, size } = arg0);
    if (null == splash) {
      let tmp15 = null;
      if (typeof null !== "number") {
        let obj = { uri: null };
        obj[0] = null;
        tmp15 = obj;
      }
      return tmp15;
    } else {
      if (null == size) {
        const _window = window;
        obj = handleImageLoad;
        size = window.screen.width * obj.getDevicePixelRatio();
      }
      let combined1 = globalThis;
      const _window2 = window;
      const bestMediaProxySize = handleImageLoad.getBestMediaProxySize(size);
      if (null != CDN_HOST) {
        let combined = "https://" + CDN_HOST + "/discovery-splashes/" + id + "/" + splash + ".jpg";
      } else {
        const _location = location;
        const _window3 = window;
        const sum = location.protocol + window.GLOBAL_ENV.API_ENDPOINT;
        combined = sum + closure_3.GUILD_DISCOVERY_SPLASH(id, splash);
      }
      combined1 = "?size=" + bestMediaProxySize;
      const sum1 = combined + combined1;
      const obj2 = handleImageLoad;
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
    let hash;
    let id;
    let size = format.size;
    ({ id, hash } = format);
    if (size === undefined) {
      size = closure_4;
    }
    let flag = format.keepAspectRatio;
    if (flag === undefined) {
      flag = false;
    }
    let obj = { endpoint: closure_3.APPLICATION_ICON, path: "app-icons", id, hash, size, canAnimate: false, keepAspectRatio: flag, format: format.format, canWebP: false };
    const tmp = getAvatarURL(obj);
    let tmp2 = tmp;
    if (typeof tmp !== "number") {
      obj = { uri: null };
      obj[0] = tmp;
      tmp2 = obj;
      const tmp3 = tmp;
    }
    return tmp2;
  },
  getGuildIconSource(canAnimate) {
    let icon;
    let id;
    let size;
    let flag = canAnimate.canAnimate;
    ({ id, icon, size } = canAnimate);
    if (flag === undefined) {
      flag = false;
    }
    let flag2 = canAnimate.lossless;
    if (flag2 === undefined) {
      flag2 = false;
    }
    let obj = { endpoint: closure_3.GUILD_ICON, path: "icons", id, hash: icon, size, canAnimate: flag, lossless: flag2, canWebP: closure_11 };
    const tmp = getAvatarURL(obj);
    let tmp2 = tmp;
    if (typeof tmp !== "number") {
      obj = { uri: null };
      obj[0] = tmp;
      tmp2 = obj;
      const tmp3 = tmp;
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
    let obj = { endpoint: closure_3.GUILD_TEMPLATE_ICON, path: "guild-templates", id, hash: icon, size, canAnimate: flag, canWebP: false };
    const tmp = getAvatarURL(obj);
    let tmp2 = tmp;
    if (typeof tmp !== "number") {
      obj = { uri: null };
      obj[0] = tmp;
      tmp2 = obj;
      const tmp3 = tmp;
    }
    return tmp2;
  },
  getGuildBannerSource(fromInviteGuildResult, hasItem) {
    let flag = hasItem;
    if (hasItem === undefined) {
      flag = false;
    }
    const tmp = getGuildBannerURL(fromInviteGuildResult, flag);
    let tmp2 = tmp;
    if (typeof tmp !== "number") {
      const obj = { uri: null };
      obj[0] = tmp;
      tmp2 = obj;
      const tmp3 = tmp;
    }
    return tmp2;
  },
  getGuildHomeHeaderSource(arg0) {
    let homeHeader;
    let id;
    ({ id, homeHeader } = arg0);
    if (null == homeHeader) {
      let tmp12 = null;
      if (typeof null !== "number") {
        let obj = { uri: null };
        obj[0] = null;
        tmp12 = obj;
      }
      return tmp12;
    } else {
      obj = handleImageLoad;
      let combined1 = globalThis;
      const _window = window;
      const bestMediaProxySize = obj.getBestMediaProxySize(1096 * handleImageLoad.getDevicePixelRatio());
      if (null != CDN_HOST) {
        let combined = "https://" + CDN_HOST + "/home-headers/" + id + "/" + homeHeader + ".png";
      } else {
        const _location = location;
        const _window2 = window;
        const sum = location.protocol + window.GLOBAL_ENV.API_ENDPOINT;
        combined = sum + closure_3.GUILD_HOME_HEADER(id, homeHeader);
      }
      combined1 = "?size=" + bestMediaProxySize;
      const sum1 = combined + combined1;
      const obj2 = handleImageLoad;
    }
  },
  getChannelIconSource(arg0) {
    const tmp = getChannelIconURL(arg0);
    let tmp2 = tmp;
    if (typeof tmp !== "number") {
      const obj = { uri: null };
      obj[0] = tmp;
      tmp2 = obj;
      const tmp3 = tmp;
    }
    return tmp2;
  },
  getApplicationIconSource(guildMember) {
    const tmp = getApplicationIconURL(guildMember);
    let tmp2 = tmp;
    if (typeof tmp !== "number") {
      const obj = { uri: null };
      obj[0] = tmp;
      tmp2 = obj;
      const tmp3 = tmp;
    }
    return tmp2;
  },
  makeSource,
  getAnimatableSourceWithFallback(flag, arg1) {
    const tmp = arg1(flag);
    let obj = set;
    if (obj.isAndroid()) {
      if (flag) {
        if (typeof tmp !== "number") {
          const tmp2 = arg1(false);
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
export const DEFAULT_GROUP_DM_AVATARS = require("ensureAvatarSource").default.DEFAULT_GROUP_DM_AVATARS;
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