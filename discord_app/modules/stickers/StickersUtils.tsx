// === Module 4899: StickersUtils ===

// Module 4899 (StickersUtils)
import AvatarUtils from "AvatarUtils" /* 1396 */;
import ImageLoaderUtils from "ImageLoaderUtils" /* 1430 */;
import StickersTypes from "StickersTypes" /* 5268 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1221 */;
import GuildStore from "GuildStore" /* 1979 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 4900 */;
import StickerMessagePreviewStore from "StickerMessagePreviewStore" /* 5267 */;

require = fn;
function getStickerExtensionFromFormatType(format_type) {
  if (StickersTypes.StickerFormat.PNG === format_type) {
    const StickerExtensions = tmp(5268).StickerExtensions;
    return tmp(1396).SUPPORTS_WEBP ? StickerExtensions.WEBP : StickerExtensions.PNG;
  } else if (tmp(5268).StickerFormat.APNG === format_type) {
    return tmp(5268).StickerExtensions.APNG;
  } else if (tmp(5268).StickerFormat.LOTTIE === format_type) {
    return tmp(5268).StickerExtensions.LOTTIE;
  } else if (tmp(5268).StickerFormat.GIF === format_type) {
    return tmp(5268).StickerExtensions.GIF;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Unexpected format type: " + format_type);
    throw error;
  }
}
const StickersConstants = fn(1938);
({ DEFAULT_STICKER_DIMENSIONS: metroRequire, STICKER_APPLICATION_ID: closure_7, StickerAnimationSettings: closure_8 } = StickersConstants);
const Endpoints = fn(1074).Endpoints;
const API_ENDPOINT = GLOBAL_ENV.API_ENDPOINT;
const MEDIA_PROXY_ENDPOINT = GLOBAL_ENV.MEDIA_PROXY_ENDPOINT;
({ PROJECT_ENV: closure_12, ASSET_ENDPOINT } = GLOBAL_ENV);
const CDN_HOST = GLOBAL_ENV.CDN_HOST;
const values = Object.values(fn(5268).StickerExtensions);
const decodeURIComponentResult = decodeURIComponent(Endpoints.STICKER_ASSET("[\\d]+", "(" + values.join("|") + ")"));
const regExp = new RegExp("(" + location.protocol + ASSET_ENDPOINT + "|" + location.protocol + MEDIA_PROXY_ENDPOINT + ")(" + decodeURIComponentResult + ")", "ig");
const regExp1 = new RegExp("" + location.protocol + API_ENDPOINT + "(" + decodeURIComponentResult + ")", "ig");
let closure_18 = [];
let size = fn(2);
const result = size.fileFinishedImporting("modules/stickers/StickersUtils.tsx");

export const getStickerPackPreviewSticker = function getStickerPackPreviewSticker(cover_sticker_id) {
  closure_0 = cover_sticker_id;
  if (null != cover_sticker_id.cover_sticker_id) {
    const stickers = cover_sticker_id.stickers;
    const found = stickers.find((id) => id.id === cover_sticker_id.cover_sticker_id);
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
export const getStickerAssetUrl = (format_type) => {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.isPreview;
  if (flag === undefined) {
    flag = false;
  }
  let size = obj.size;
  if (size === undefined) {
    size = timestampProducer;
  }
  if (null == format_type.format_type) {
    return null;
  } else {
    let PNG = format_type.format_type;
    if (tmp) {
      PNG = tmp23(5268).StickerFormat.PNG;
    }
    const tmp3 = getStickerExtensionFromFormatType(PNG);
    const STICKER_ASSETResult = Endpoints.STICKER_ASSET(format_type.id, tmp3);
    try {
      const enabled = tmp23(1879).getForceSdrEmojisStickersConfig({ location: "sticker_url" }).enabled;
      let str2 = "";
      if (enabled) {
        str2 = "&force_sdr=true";
      }
      let str3 = "";
      if (tmp3 === tmp23(5268).StickerExtensions.WEBP) {
        str3 = "&quality=lossless";
      }
      if ("development" !== closure_1_12) {
        if (format_type.format_type === tmp23(5268).StickerFormat.LOTTIE) {
          const _location3 = location;
          const _HermesInternal4 = HermesInternal;
          return "" + location.protocol + ASSET_ENDPOINT + STICKER_ASSETResult;
        } else {
          let str6 = "";
          if (format_type.format_type === tmp23(5268).StickerFormat.APNG) {
            str6 = "";
            if (flag) {
              let tmp23Result = tmp23(1115);
              str6 = "";
              if (!tmp23Result.isAndroid()) {
                str6 = "&passthrough=false";
              }
            }
          }
          const _Math = Math;
          tmp23Result = tmp23(1430);
          const _location2 = location;
          const bound = Math.min(2, tmp23Result.getDevicePixelRatio());
          const _HermesInternal3 = HermesInternal;
          return "" + protocol + MEDIA_PROXY_ENDPOINT + STICKER_ASSETResult + "?size=" + tmp23(1430).getBestMediaProxySize(size * bound) + str6 + str3 + str2;
        }
      } else {
        if (format_type.format_type === tmp23(5268).StickerFormat.LOTTIE) {
          if (tmp23Result2.isWeb()) {
            return STICKER_ASSETResult;
          }
          tmp23Result2 = tmp23(1115);
        }
        const _location = location;
        const _HermesInternal = HermesInternal;
        const combined = "" + location.protocol + MEDIA_PROXY_ENDPOINT + STICKER_ASSETResult;
        let combined1 = combined;
        if (enabled) {
          const _HermesInternal2 = HermesInternal;
          combined1 = "" + combined + "?force_sdr=true";
        }
        return combined1;
      }
    } catch (err) {
    }
    tmp = format_type.format_type === StickersTypes.StickerFormat.GIF && flag;
  }
};
export const getStickerPackBannerAssetUrl = function getStickerPackBannerAssetUrl(stickerPack, size) {
  const banner_asset_id = stickerPack.banner_asset_id;
  if (null == banner_asset_id) {
    return null;
  } else {
    let str = "png";
    if (AvatarUtils.SUPPORTS_WEBP) {
      str = "webp";
    }
    if (null != CDN_HOST) {
      const _HermesInternal2 = HermesInternal;
      let combined = "https://" + tmp + "/app-assets/" + React5 + "/store/" + banner_asset_id + "." + str;
    } else {
      const _location = location;
      const _HermesInternal = HermesInternal;
      combined = "" + location.protocol + API_ENDPOINT + Endpoints.STORE_ASSET(React5, banner_asset_id, str);
    }
    let sum = combined;
    if (null != size) {
      const _HermesInternal3 = HermesInternal;
      sum = combined + "?size=" + ImageLoaderUtils.getBestMediaProxySize(size);
      const tmp15Result = ImageLoaderUtils;
    }
    return sum;
  }
};
export const isStickerAssetUrl = function isStickerAssetUrl(str) {
  return null != str.match("development" !== closure_1_12 ? regExp : regExp1);
};
export const isStickerPackAnimated = function isStickerPackAnimated(stickerPack) {
  const stickers = stickerPack.stickers;
  return stickers.some((format_type) => {
    format_type = format_type.format_type;
    return format_type === StickersTypes.StickerFormat.APNG || format_type === StickersTypes.StickerFormat.LOTTIE || format_type === StickersTypes.StickerFormat.GIF;
  });
};
export const createStickerPackCategory = function createStickerPackCategory(id) {
  const obj = { type: StickersTypes.StickerCategoryTypes.PACK, id: id.id, name: id.name, stickers: id.stickers, previewSticker: null };
  const cover_sticker_id = id;
  if (null == id.cover_sticker_id) {
    let first = id.stickers[0];
  } else {
    const stickers = id.stickers;
    first = stickers.find((id) => id.id === cover_sticker_id.cover_sticker_id);
  }
  obj.previewSticker = first;
  return obj;
};
export const shouldAnimateSticker = function shouldAnimateSticker(setting, isFocused) {
  let tmp = isFocused;
  if (setting !== constants.ANIMATE_ON_INTERACTION) {
    tmp = setting !== constants.NEVER_ANIMATE;
  }
  return tmp;
};
export const shouldAttachSticker = function shouldAttachSticker(arg0, str, c1, ChannelMessage) {
  if (UploadAttachmentStore.getUploadCount(c1, ChannelMessage) > 0) {
    return true;
  } else {
    const stickerPreview = StickerMessagePreviewStore.getStickerPreview(c1, ChannelMessage);
    if (null != stickerPreview) {
      if (stickerPreview.length > 0) {
        return true;
      }
    }
    if (StickersTypes.StickerSelectLocation.STICKER_PICKER === arg0) {
      return "" !== str.trim();
    } else if (tmp3(5268).StickerSelectLocation.AUTOCOMPLETE === arg0) {
      return tmp3(5270).getQueriesFromUserInput(str).length > 1;
    } else {
      const BUILT_IN_INTEGRATION = tmp3(5268).StickerSelectLocation.BUILT_IN_INTEGRATION;
      return false;
    }
  }
};
export const isGuildSticker = function isGuildSticker(sticker) {
  return sticker.type === StickersTypes.MetaStickerType.GUILD;
};
export const isStandardSticker = function isStandardSticker(current2) {
  return current2.type === StickersTypes.MetaStickerType.STANDARD;
};
export const getMessageStickers = function getMessageStickers(message) {
  if (message.stickerItems.length > 0) {
    let stickerItems = message.stickerItems;
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
    stickerIds = closure_18;
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
    stickerIds = closure_18;
  }
  return stickerIds.includes(arg0);
};