// discord_app/modules/stickers/StickersUtils.tsx
import Constants from "../../Constants.tsx";
import PlatformUtils from "../../utils/PlatformUtils.tsx";
import AvatarUtils from "../../utils/AvatarUtils.tsx";
import ImageLoaderUtils from "../image_upload/ImageLoaderUtils.tsx";
import ForceSdrEmojisStickersExperiment from "../image_upload/ForceSdrEmojisStickersExperiment.tsx";
import StickersTypes from "StickersTypes.tsx";
import UserSettingsProtoStore from "../user_settings/UserSettingsProtoStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import StickersConstants from "StickersConstants.tsx";
import size_mod from "../../../_runtime/metro/00002__.js";

let ASSET_ENDPOINT;
let c10;
let closure_4;
let hasOwnProperty;
let metroRequire;
const f90496 = (id) => id.id === cover_sticker_id.cover_sticker_id;
function getStickerExtensionFromFormatType(format_type) {
  if (StickersTypes.StickerFormat.PNG === format_type) {
    const SUPPORTS_WEBP = AvatarUtils.SUPPORTS_WEBP;
    const StickerExtensions = StickersTypes.StickerExtensions;
    return SUPPORTS_WEBP ? StickerExtensions.WEBP : StickerExtensions.PNG;
  } else if (StickersTypes.StickerFormat.APNG === format_type) {
    return StickersTypes.StickerExtensions.APNG;
  } else if (StickersTypes.StickerFormat.LOTTIE === format_type) {
    return StickersTypes.StickerExtensions.LOTTIE;
  } else if (StickersTypes.StickerFormat.GIF === format_type) {
    return StickersTypes.StickerExtensions.GIF;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("Unexpected format type: " + format_type);
    throw error;
  }
}
({
  DEFAULT_STICKER_DIMENSIONS: closure_4,
  STICKER_APPLICATION_ID: hasOwnProperty,
  StickerAnimationSettings: metroRequire,
} = StickersConstants);
const Endpoints = Constants.Endpoints;
const API_ENDPOINT = GLOBAL_ENV.API_ENDPOINT;
const MEDIA_PROXY_ENDPOINT = GLOBAL_ENV.MEDIA_PROXY_ENDPOINT;
({ PROJECT_ENV: c10, ASSET_ENDPOINT } = GLOBAL_ENV);
const CDN_HOST = GLOBAL_ENV.CDN_HOST;
const values = Object.values(StickersTypes.StickerExtensions);
const decodeURIComponentResult = decodeURIComponent(Endpoints.STICKER_ASSET("[\\d]+", "(" + values.join("|") + ")"));
const regExp = new RegExp(
  "(" +
    location.protocol +
    ASSET_ENDPOINT +
    "|" +
    location.protocol +
    MEDIA_PROXY_ENDPOINT +
    ")(" +
    decodeURIComponentResult +
    ")",
  "ig",
);
const regExp1 = new RegExp("" + location.protocol + API_ENDPOINT + "(" + decodeURIComponentResult + ")", "ig");
let closure_16 = [];
let size = size_mod;
const result = size.fileFinishedImporting("modules/stickers/StickersUtils.tsx");

export const getStickerPackPreviewSticker = function getStickerPackPreviewSticker(cover_sticker_id) {
  let closure_0 = cover_sticker_id;
  if (null != cover_sticker_id.cover_sticker_id) {
    const stickers = cover_sticker_id.stickers;
    const found = stickers.find(f90496);
    if (null != found) {
      return found;
    }
  }
  return cover_sticker_id.stickers[0];
};
export { getStickerExtensionFromFormatType };
export const getStickerFormatTypeFromFileType = function getStickerFormatTypeFromFileType(arg0) {
  if ("application/json" === arg0) {
    return StickersTypes.StickerFormat.LOTTIE;
  } else if ("image/apng" === arg0) {
    return StickersTypes.StickerFormat.APNG;
  } else {
    if ("image/png" !== arg0) {
      if ("image/webp" !== arg0) {
        if ("image/gif" === arg0) {
          return StickersTypes.StickerFormat.GIF;
        } else {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const self = this;
          const self2 = this;
          const error = new Error("Unexpected file type: " + arg0);
          throw error;
        }
      }
    }
    return StickersTypes.StickerFormat.PNG;
  }
};
export const getFilenameForSticker = function getFilenameForSticker(name) {
  let combined = null;
  if (null != name) {
    const _HermesInternal = HermesInternal;
    combined = "" + name.name + "." + getStickerExtensionFromFormatType(name.format_type);
  }
  return combined;
};
export const getStickerTagForEmoji = function getStickerTagForEmoji(id) {
  return null != id.id ? id.id : id.optionallyDiverseSequence;
};
export const getStickerAssetUrl = (format_type, arg1) => {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.isPreview;
  if (flag === undefined) {
    flag = false;
  }
  size = obj.size;
  if (size === undefined) {
    size = React3;
  }
  if (null == format_type.format_type) {
    return null;
  } else {
    let PNG = format_type.format_type;
    const tmp = format_type.format_type === StickersTypes.StickerFormat.GIF && flag;
    if (tmp) {
      PNG = StickersTypes.StickerFormat.PNG;
    }
    const tmp3 = getStickerExtensionFromFormatType(PNG);
    const STICKER_ASSETResult = Endpoints.STICKER_ASSET(format_type.id, tmp3);
    let flag2 = false;
    try {
      flag2 = ForceSdrEmojisStickersExperiment.getForceSdrEmojisStickersConfig({ location: "sticker_url" }).enabled;
    } catch (err) {}
    let str2 = "";
    if (flag2) {
      str2 = "&force_sdr=true";
    }
    let str3 = "";
    if (tmp3 === StickersTypes.StickerExtensions.WEBP) {
      str3 = "&quality=lossless";
    }
    if ("development" !== authStore) {
      if (format_type.format_type === StickersTypes.StickerFormat.LOTTIE) {
        const _location3 = location;
        const _HermesInternal4 = HermesInternal;
        return "" + location.protocol + ASSET_ENDPOINT + STICKER_ASSETResult;
      } else {
        let str6 = "";
        if (format_type.format_type === StickersTypes.StickerFormat.APNG) {
          str6 = "";
          if (flag) {
            str6 = "";
            const tmp23Result = PlatformUtils;
            if (!tmp23Result.isAndroid()) {
              str6 = "&passthrough=false";
            }
          }
        }
        const _Math = Math;
        const _location2 = location;
        const tmp23Result4 = ImageLoaderUtils;
        const _HermesInternal3 = HermesInternal;
        const minResult = min(2, tmp23Result4.getDevicePixelRatio());
        const tmp23Result5 = ImageLoaderUtils;
        return (
          "" +
          protocol +
          MEDIA_PROXY_ENDPOINT +
          STICKER_ASSETResult +
          "?size=" +
          tmp23Result5.getBestMediaProxySize(size * minResult) +
          str6 +
          str3 +
          str2
        );
      }
    } else {
      if (format_type.format_type === StickersTypes.StickerFormat.LOTTIE) {
        const tmp23Result6 = PlatformUtils;
        if (tmp23Result6.isWeb()) {
          return STICKER_ASSETResult;
        }
      }
      const _location = location;
      const _HermesInternal = HermesInternal;
      const combined = "" + location.protocol + MEDIA_PROXY_ENDPOINT + STICKER_ASSETResult;
      let combined1 = combined;
      if (flag2) {
        const _HermesInternal2 = HermesInternal;
        combined1 = "" + combined + "?force_sdr=true";
      }
      return combined1;
    }
  }
};
export const getStickerPackBannerAssetUrl = function getStickerPackBannerAssetUrl(stickerPack, size) {
  const banner_asset_id = stickerPack.banner_asset_id;
  if (null == banner_asset_id) {
    return null;
  } else {
    let combined;
    let str = "png";
    if (AvatarUtils.SUPPORTS_WEBP) {
      str = "webp";
    }
    if (null != CDN_HOST) {
      const _HermesInternal2 = HermesInternal;
      combined = "https://" + CDN_HOST + "/app-assets/" + hasOwnProperty + "/store/" + banner_asset_id + "." + str;
    } else {
      const _location = location;
      const _HermesInternal = HermesInternal;
      combined = "" + location.protocol + API_ENDPOINT + Endpoints.STORE_ASSET(hasOwnProperty, banner_asset_id, str);
    }
    let sum = combined;
    if (null != size) {
      const _HermesInternal3 = HermesInternal;
      const tmp15Result = ImageLoaderUtils;
      sum = combined + "?size=" + tmp15Result.getBestMediaProxySize(size);
    }
    return sum;
  }
};
export const isStickerAssetUrl = function isStickerAssetUrl(str) {
  return null != str.match("development" !== authStore ? regExp : regExp1);
};
export const isStickerPackAnimated = function isStickerPackAnimated(stickerPack) {
  const stickers = stickerPack.stickers;
  return stickers.some((format_type) => {
    format_type = format_type.format_type;
    const tmp3 =
      format_type === StickersTypes.StickerFormat.APNG ||
      format_type === StickersTypes.StickerFormat.LOTTIE ||
      format_type === StickersTypes.StickerFormat.GIF;
    return tmp3;
  });
};
export const createStickerPackCategory = function createStickerPackCategory(id) {
  let first;
  let closure_0 = id;
  const obj = {
    type: StickersTypes.StickerCategoryTypes.PACK,
    id: id.id,
    name: id.name,
    stickers: id.stickers,
    previewSticker: first,
  };
  if (null == id.cover_sticker_id) {
    first = id.stickers[0];
  } else {
    const stickers = id.stickers;
    first = stickers.find(f90496);
  }
  return obj;
};
export const shouldAnimateSticker = function shouldAnimateSticker(setting, dependencyMap) {
  let tmp = dependencyMap;
  if (setting !== metroRequire.ANIMATE_ON_INTERACTION) {
    tmp = setting !== metroRequire.NEVER_ANIMATE;
  }
  return tmp;
};
export const isGuildSticker = function isGuildSticker(sticker) {
  return sticker.type === StickersTypes.MetaStickerType.GUILD;
};
export const isStandardSticker = function isStandardSticker(body) {
  return body.type === StickersTypes.MetaStickerType.STANDARD;
};
export const getMessageStickers = function getMessageStickers(message) {
  let stickerItems;
  if (message.stickerItems.length > 0) {
    stickerItems = message.stickerItems;
  } else {
    stickerItems = message.stickers.length > 0 ? message.stickers : [];
  }
  return stickerItems;
};
export const isAvailableGuildSticker = function isAvailableGuildSticker(guild_id) {
  if (null === guild_id) {
    return false;
  } else {
    return undefined !== GuildStore.getGuild(guild_id.guild_id);
  }
};
export const getFavoriteStickerIds = function getFavoriteStickerIds() {
  const favoriteStickers = UserSettingsProtoStore.frecencyWithoutFetchingLatest.favoriteStickers;
  let stickerIds;
  if (favoriteStickers != null) {
    stickerIds = favoriteStickers.stickerIds;
  }
  if (stickerIds == null) {
    stickerIds = closure_16;
  }
  return stickerIds;
};
export const isFavoriteSticker = function isFavoriteSticker(arg0) {
  const favoriteStickers = UserSettingsProtoStore.frecencyWithoutFetchingLatest.favoriteStickers;
  let stickerIds;
  if (favoriteStickers != null) {
    stickerIds = favoriteStickers.stickerIds;
  }
  if (stickerIds == null) {
    stickerIds = closure_16;
  }
  return stickerIds.includes(arg0);
};
