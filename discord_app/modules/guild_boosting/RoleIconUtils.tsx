// discord_app/modules/guild_boosting/RoleIconUtils.tsx
import AvatarUtils from "../../utils/AvatarUtils.tsx";
import ImageLoaderUtils from "../image_upload/ImageLoaderUtils.tsx";
import UnicodeEmojisDefault from "../emojis/UnicodeEmojis.tsx";
import Constants from "../../Constants.tsx";
import PlatformUtils from "../../utils/PlatformUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

({ Endpoints: c3, GuildFeatures: closure_4 } = Constants);
let closure_5 = "" + location.protocol + "//" + window.GLOBAL_ENV.CDN_HOST + "/role-icons";
let closure_6 = "" + location.protocol + window.GLOBAL_ENV.API_ENDPOINT;
let closure_7 = PlatformUtils.isAndroid();
const result = size.fileFinishedImporting("modules/guild_boosting/RoleIconUtils.tsx");

export const getRoleIconData = function getRoleIconData(role, arg1) {
  if (null == role) {
    return null;
  } else {
    let byName;
    if (null != role.unicodeEmoji) {
      let obj = UnicodeEmojisDefault;
      byName = obj.getByName(UnicodeEmojisDefault.convertSurrogateToName(role.unicodeEmoji, false));
    }
    ({ id, icon } = role);
    let tmp4;
    if (null != icon) {
      tmp4 = icon;
      if (!icon.startsWith("data:")) {
        let str2 = "png";
        if (AvatarUtils.SUPPORTS_WEBP) {
          str2 = "webp";
        }
        let str3 = "quality=lossless";
        let str5 = "";
        if (null != arg1) {
          ImageLoaderUtils;
          ImageLoaderUtils;
          let str7 = "";
          const text = `size=${tmp9(arg1 * obj3.getDevicePixelRatio())}`;
          if (!closure_7) {
            str7 = "&quality=lossless";
          }
          str3 = str7;
          str5 = text;
        }
        let str8 = globalThis;
        const _window = window;
        if (null != window.GLOBAL_ENV.CDN_HOST) {
          str8 = "/";
          let combined = "" + closure_5 + "/" + id + "/" + icon + "." + str2 + "?" + str5 + str3;
        } else {
          const _HermesInternal = HermesInternal;
          combined = "" + closure_6 + React3.ROLE_ICON(id, icon) + "?" + str5;
        }
      }
    }
    obj = { customIconSrc: tmp4, unicodeEmoji: byName };
    return obj;
  }
};
export const replaceRoleIconSourceSize = function replaceRoleIconSourceSize(str, arg1) {
  const obj = ImageLoaderUtils;
  return str.replace(
    /size=[0-9]+/g,
    "size=" + obj.getBestMediaProxySize(arg1 * ImageLoaderUtils.getDevicePixelRatio()),
  );
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
