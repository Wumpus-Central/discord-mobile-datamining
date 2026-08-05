import { getAvatarURL } from "../../utils/AvatarUtils.tsx";
import { parseRawEmojiObject } from "../emojis/UnicodeEmojis.tsx";
import { handleImageLoad } from "../image_upload/ImageLoaderUtils.tsx";
// discord_app/modules/guild_boosting/RoleIconUtils.tsx
import ME from "ME";
import set from "set";
import set from "parseRawEmojiObject";

let c3;
let c4;
({ Endpoints: c3, GuildFeatures: c4 } = ME);
let closure_5 = "" + location.protocol + "//" + window.GLOBAL_ENV.CDN_HOST + "/role-icons";
let closure_6 = "" + location.protocol + window.GLOBAL_ENV.API_ENDPOINT;
set = set.isAndroid();
const result = set.fileFinishedImporting("modules/guild_boosting/RoleIconUtils.tsx");

export const getRoleIconData = function getRoleIconData(role, arg1) {
  let icon;
  let id;
  if (null == role) {
    return null;
  } else {
    let byName;
    if (null != role.unicodeEmoji) {
      let obj = parseRawEmojiObject;
      byName = obj.getByName(parseRawEmojiObject.convertSurrogateToName(role.unicodeEmoji, false));
      const obj2 = parseRawEmojiObject;
    }
    ({ id, icon } = role);
    let tmp4;
    if (null != icon) {
      tmp4 = icon;
      if (!icon.startsWith("data:")) {
        let str2 = "png";
        if (getAvatarURL /* getAvatarURL */.SUPPORTS_WEBP) {
          str2 = "webp";
        }
        let str3 = "quality=lossless";
        let str5 = "";
        if (null != arg1) {
          tmp5(1450);
          tmp5(1450);
          let str7 = "";
          const text = `size=${tmp9(arg1 * obj3.getDevicePixelRatio())}`;
          if (!set) {
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
          combined = "" + closure_6 + closure_3.ROLE_ICON(id, icon) + "?" + str5;
        }
      }
    }
    obj = { customIconSrc: null, unicodeEmoji: null };
    obj[0] = tmp4;
    obj[1] = byName;
    return obj;
  }
};
export const replaceRoleIconSourceSize = function replaceRoleIconSourceSize(str) {
  const obj = handleImageLoad /* handleImageLoad */;
  return str.replace(/size=[0-9]+/g, "size=" + obj.getBestMediaProxySize(arg1 * handleImageLoad /* handleImageLoad */.getDevicePixelRatio()));
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