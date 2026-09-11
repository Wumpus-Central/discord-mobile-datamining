// === Module 7260: RoleIconUtils ===

// Module 7260 (RoleIconUtils)
import AvatarUtils from "AvatarUtils" /* 1396 */;
import ImageLoaderUtils from "ImageLoaderUtils" /* 1430 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4259 */;
import Constants from "Constants" /* 1074 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import size from "module_2" /* 2 */;

({ Endpoints: c3, GuildFeatures: closure_4 } = Constants);
let closure_5 = "" + location.protocol + "//" + window.GLOBAL_ENV.CDN_HOST + "/role-icons";
let closure_6 = "" + location.protocol + window.GLOBAL_ENV.API_ENDPOINT;
let closure_7 = PlatformUtils.isAndroid();
const result = size.fileFinishedImporting("modules/guild_boosting/RoleIconUtils.tsx");

export const getRoleIconData = function getRoleIconData(role, size) {
  if (null == role) {
    return null;
  } else {
    ({ id, icon } = role);
    let combined;
    if (null != icon) {
      combined = icon;
      if (!icon.startsWith("data:")) {
        let str2 = "png";
        if (AvatarUtils.SUPPORTS_WEBP) {
          str2 = "webp";
        }
        let str3 = "quality=lossless";
        let str5 = "";
        if (null != size) {
          ImageLoaderUtils;
          ImageLoaderUtils;
          let str7 = "";
          const text = `size=${tmp6(size * obj.getDevicePixelRatio())}`;
          if (!closure_7) {
            str7 = "&quality=lossless";
          }
          str3 = str7;
          str5 = text;
        }
        const _window = window;
        if (null != window.GLOBAL_ENV.CDN_HOST) {
          const _HermesInternal2 = HermesInternal;
          combined = "" + closure_5 + "/" + id + "/" + icon + "." + str2 + "?" + str5 + str3;
        } else {
          const _HermesInternal = HermesInternal;
          combined = "" + closure_6 + React3.ROLE_ICON(id, icon) + "?" + str5;
        }
      }
    }
    if (null != role.unicodeEmoji) {
      const obj2 = UnicodeEmojisDefault;
      const byName = obj2.getByName(UnicodeEmojisDefault.convertSurrogateToName(role.unicodeEmoji, false));
    }
    if (null != combined) {
      obj = { customIconSrc: combined, unicodeEmoji: byName };
      let tmp23 = obj;
    } else {
      tmp23 = null;
    }
    return tmp23;
  }
};
export const replaceRoleIconSourceSize = function replaceRoleIconSourceSize(str, arg1) {
  const obj = ImageLoaderUtils;
  return str.replace(/size=[0-9]+/g, "size=" + obj.getBestMediaProxySize(arg1 * ImageLoaderUtils.getDevicePixelRatio()));
};
export const isRoleIconAssetUrl = function isRoleIconAssetUrl(str) {
  let startsWithResult = str.startsWith(closure_5);
  if (!startsWithResult) {
    const _HermesInternal = HermesInternal;
    let startsWithResult1 = str.startsWith("" + closure_6 + "/roles");
    if (startsWithResult1) {
      startsWithResult1 = str.includes("/icons/");
    }
    startsWithResult = startsWithResult1;
  }
  return startsWithResult;
};
export const canGuildUseRoleIcons = function canGuildUseRoleIcons(guild, role) {
  let prop;
  if (role != null) {
    const tags = role.tags;
    if (tags != null) {
      prop = tags.subscription_listing_id;
    }
  }
  let hasItem = null != prop;
  if (!hasItem) {
    const features = guild.features;
    hasItem = features.has(constants.ROLE_ICONS);
  }
  return hasItem;
};