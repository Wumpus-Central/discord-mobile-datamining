// === Module 6686: RoleIconUtils ===

// Module 6686 (RoleIconUtils)
import AvatarUtils from "AvatarUtils" /* 1402 */;
import ImageLoaderUtils from "ImageLoaderUtils" /* 1437 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4523 */;
import Constants from "Constants" /* 1085 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ Endpoints: c3, GuildFeatures: closure_4 } = Constants);
let closure_5 = "" + location.protocol + "//" + window.GLOBAL_ENV.CDN_HOST + "/role-icons";
let closure_6 = "" + location.protocol + window.GLOBAL_ENV.API_ENDPOINT;
let closure_7 = PlatformUtils.isAndroid();
const result = size.fileFinishedImporting("modules/guild_boosting/RoleIconUtils.tsx");

export const getRoleIconData = function getRoleIconData(role, size) {
  let icon;
  let id;
  if (null == role) {
    return null;
  } else {
    let byName;
    let tmp23;
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
          const getBestMediaProxySize = ImageLoaderUtils.getBestMediaProxySize;
          ImageLoaderUtils;
          ImageLoaderUtils;
          let str7 = "";
          const text = `size=${getBestMediaProxySize(size * obj.getDevicePixelRatio())}`;
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
          combined = "" + closure_6 + _false.ROLE_ICON(id, icon) + "?" + str5;
        }
      }
    }
    if (null != role.unicodeEmoji) {
      const getByName = UnicodeEmojisDefault.getByName;
      UnicodeEmojisDefault;
      const obj2 = UnicodeEmojisDefault;
      byName = getByName(obj2.convertSurrogateToName(role.unicodeEmoji, false));
    }
    if (null != combined) {
      tmp23 = { customIconSrc: combined, unicodeEmoji: byName };
      const obj3 = { customIconSrc: combined, unicodeEmoji: byName };
    } else {
      tmp23 = null;
    }
    return tmp23;
  }
};
export const replaceRoleIconSourceSize = function replaceRoleIconSourceSize(arg0, arg1) {
  const replace = arg0.replace;
  const getBestMediaProxySize = ImageLoaderUtils.getBestMediaProxySize;
  ImageLoaderUtils;
  const obj = ImageLoaderUtils;
  return replace(/size=[0-9]+/g, "size=" + getBestMediaProxySize(arg1 * obj.getDevicePixelRatio()));
};
export const isRoleIconAssetUrl = function isRoleIconAssetUrl(str) {
  let startsWithResult = str.startsWith(closure_5);
  if (!startsWithResult) {
    const _HermesInternal = HermesInternal;
    startsWithResult = str.startsWith("" + closure_6 + "/roles") && str.includes("/icons/");
    const startsWithResult1 = str.startsWith("" + closure_6 + "/roles") && str.includes("/icons/");
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