// discord_app/modules/quests/lib/AssetUtils.tsx
import Constants from "../../../Constants.tsx";
import URLUtilsDefault from "../../../utils/URLUtils.tsx";
import getDevicePixelRatioDefault from "../../../utils/getDevicePixelRatio.native.tsx";
import FirstPartyQuestTaskTypes2 from "../../../../discord_common/js/shared/shared-constants/FirstPartyQuestTaskTypes.tsx";
import QuestRewardTypes from "../../../../discord_common/js/shared/shared-constants/QuestRewardTypes.tsx";
import _modDef11286 from "../../../../discord_assets/assets/orbs/tier1_rewardTile_animated.webm.js";
import _modDef11287 from "../../../../discord_assets/assets/orbs/tier2_rewardTile_animated.webm.js";
import _modDef11288 from "../../../../discord_assets/assets/orbs/tier3_rewardTile_animated.webm.js";
import _modDef11289 from "../../../../discord_assets/assets/orbs/tier4_rewardTile_animated.webm.js";
import QuestRewardUtils from "../utils/QuestRewardUtils.tsx";
import _modDef11297 from "../../../../discord_assets/assets/orbs/reward_tile_v3_mobile.mp4.js";
import _modDef11298 from "../../../../discord_assets/assets/orbs/reward_tile_v3.webm.js";
import QuestConstants from "../QuestConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

function resolveAsset(id, questBarHeroVideo, theme) {
  if (questBarHeroVideo.startsWith("blob:")) {
    const parts = questBarHeroVideo.split("?", 1);
    let atResult = parts.at(0);
    if (atResult == null) {
      atResult = questBarHeroVideo;
    }
    let combined = atResult;
  } else if (questBarHeroVideo.includes("/")) {
    const _HermesInternal3 = HermesInternal;
    combined = "" + React3 + questBarHeroVideo;
  } else {
    theme = undefined;
    if (theme != null) {
      theme = theme.theme;
    }
    let str3 = "";
    if (null != theme) {
      const _HermesInternal = HermesInternal;
      str3 = "/" + theme.theme;
    }
    const _HermesInternal2 = HermesInternal;
    combined = "" + React4 + id + str3 + "/" + questBarHeroVideo;
  }
  const tmp16 = getMimetype(questBarHeroVideo);
  const obj = { url: combined, mimetype: tmp16, isAnimated: null };
  let hasItem = null != tmp16;
  if (hasItem) {
    hasItem = items.includes(tmp16);
  }
  obj.isAnimated = hasItem;
  return obj;
}
function getMimetype(questBarHeroVideo) {
  const startsWithResult = questBarHeroVideo.startsWith("blob:");
  const toURLSafeResult = URLUtilsDefault.toURLSafe(questBarHeroVideo);
  if (startsWithResult) {
    value = undefined;
    if (!tmp3) {
      const searchParams2 = toURLSafeResult.searchParams;
      value = searchParams2.get("mimetype");
    }
    let decodeURIComponentResult = null;
    if (null != value) {
      const _decodeURIComponent = decodeURIComponent;
      decodeURIComponentResult = decodeURIComponent(value);
    }
    return decodeURIComponentResult;
  } else {
    let formatted;
    if (!tmp3) {
      const searchParams = toURLSafeResult.searchParams;
      const str2 = searchParams.get("format");
      if (str2 != null) {
        formatted = str2.toLowerCase();
      }
    }
    if (formatted == null) {
      const match = re6.exec(questBarHeroVideo);
      let formatted1;
      if (match != null) {
        if (match[1] != null) {
          formatted1 = str3.toLowerCase();
        }
      }
      formatted = formatted1;
    }
    switch (formatted) {
      case "webm":
        return "video/webm";
      case "mp4":
        return "video/mp4";
      case "webp":
        return "image/webp";
      case "jpg":
        return "image/jpeg";
      case "jpeg":
        return "image/jpeg";
      case "png":
        return "image/png";
      case "gif":
        return "image/gif";
      case "svg":
        return "image/svg+xml";
      case "txt":
        return "text/plain";
      case "vtt":
        return "text/vtt";
      case "ts":
        return "video/mp2t";
      case "m3u8":
        return "application/x-mpegURL";
      default:
        return null;
    }
  }
}
function getAssetUrlWithMediaProxyQueryParams(assetUrl) {
  if (size === undefined) {
    size = {};
  }
  if (assetUrl.startsWith("blob:")) {
    return assetUrl;
  } else {
    URLUtilsDefault.toURLSafe(assetUrl);
    let str = assetUrl;
    if (null != str) {
      if (null != size.format) {
        const searchParams = str.searchParams;
        const result = searchParams.set("format", size.format);
      }
      if (null != size.width) {
        const searchParams2 = str.searchParams;
        const _Math = Math;
        const _Math2 = Math;
        const _HermesInternal = HermesInternal;
        const result1 = searchParams2.set("width", "" + Math.min(Math.ceil(size.width), closure_5));
      }
      if (null != size.height) {
        const searchParams3 = str.searchParams;
        const _Math3 = Math;
        const _Math4 = Math;
        const _HermesInternal2 = HermesInternal;
        const result2 = searchParams3.set("height", "" + Math.min(Math.ceil(size.height), closure_5));
      }
      str = str.toString();
    }
    return str;
  }
}
function convertVideoToFirstFrameImageWithMediaProxy(assetUrl, size) {
  if (assetUrl.startsWith("blob:")) {
    return assetUrl;
  } else {
    URLUtilsDefault.toURLSafe(assetUrl);
    let str = null;
    if (null != str) {
      const searchParams = str.searchParams;
      const result = searchParams.set("format", "webp");
      if (null != size) {
        const searchParams2 = str.searchParams;
        const _Math = Math;
        const _Math2 = Math;
        const _HermesInternal = HermesInternal;
        const result1 = searchParams2.set("width", "" + Math.min(Math.ceil(size.width), closure_5));
        const searchParams3 = str.searchParams;
        const _Math3 = Math;
        const _Math4 = Math;
        const _HermesInternal2 = HermesInternal;
        const result2 = searchParams3.set("height", "" + Math.min(Math.ceil(size.height), closure_5));
      }
      str = str.toString();
    }
    return str;
  }
}
({ CDN_URL_BASE: c3, QUESTS_CDN_URL_BASE: closure_4 } = QuestConstants);
let closure_5 = Constants.MEDIA_PROXY_MAX_TARGET_RESOLUTION;
const tmp3 = /\.([a-zA-Z0-9]+)$/;
const re6 = tmp3;
const items = ["video/mp4", "video/webm"];
let QuestAssetType = {
  HERO: "hero",
  HERO_IMAGE: "hero_image",
  HERO_VIDEO: "hero_video",
  QUEST_BAR_HERO: "quest_bar_hero",
  QUEST_BAR_HERO_VIDEO: "quest_bar_hero_video",
  QUEST_BAR_HERO_IMAGE: "quest_bar_hero_image",
  REWARD: "reward",
  REWARD_IMAGE: "reward_image",
  GAME_TILE: "game_tile",
  LOGO_TYPE: "logo_type",
  COSPONSOR_LOGO_TYPE: "cosponsor_logo_type",
  VIDEO_PLAYER_VIDEO: "video_player_video",
  VIDEO_PLAYER_VIDEO_LOW_RES: "video_player_video_low_res",
  VIDEO_PLAYER_VIDEO_HLS: "video_player_video_hls",
  VIDEO_PLAYER_THUMBNAIL: "video_player_thumbnail",
  VIDEO_PLAYER_CAPTION: "video_player_caption",
  VIDEO_PLAYER_TRANSCRIPT: "video_player_transcript",
};
QuestAssetType = { VIDEO: "video", VIDEO_LOW_RES: "videoLowRes", VIDEO_HLS: "videoHls" };
QuestAssetType = { VIDEO: "url", THUMBNAIL: "thumbnail", CAPTION: "caption", TRANSCRIPT: "transcript" };
let obj1 = { TIER_1: 1, [1]: "TIER_1", TIER_2: 2, [2]: "TIER_2", TIER_3: 3, [3]: "TIER_3", TIER_4: 4, [4]: "TIER_4" };
let closure_10 = {
  [QuestAssetType.VIDEO_PLAYER_VIDEO]: { variant: QuestAssetType.VIDEO, property: QuestAssetType.VIDEO },
  [QuestAssetType.VIDEO_PLAYER_VIDEO_LOW_RES]: {
    variant: QuestAssetType.VIDEO_LOW_RES,
    property: QuestAssetType.VIDEO,
  },
  [QuestAssetType.VIDEO_PLAYER_VIDEO_HLS]: { variant: QuestAssetType.VIDEO_HLS, property: QuestAssetType.VIDEO },
  [QuestAssetType.VIDEO_PLAYER_THUMBNAIL]: { variant: QuestAssetType.VIDEO, property: QuestAssetType.THUMBNAIL },
  [QuestAssetType.VIDEO_PLAYER_CAPTION]: { variant: QuestAssetType.VIDEO, property: QuestAssetType.CAPTION },
  [QuestAssetType.VIDEO_PLAYER_TRANSCRIPT]: { variant: QuestAssetType.VIDEO, property: QuestAssetType.TRANSCRIPT },
};
const obj8 = { [TIER_1]: _modDef11286, [TIER_2]: _modDef11287, [TIER_3]: _modDef11288, [TIER_4]: _modDef11289 };
({ TIER_1, TIER_2, TIER_3, TIER_4 } = obj1);
let result = size.fileFinishedImporting("modules/quests/lib/AssetUtils.tsx");

export const EXTENSION_RE = tmp3;
export const ANIMATED_MIMETYPES = items;
export { QuestAssetType };
export { resolveAsset };
export const OrbsValueTier = obj1;
export const getQuestAsset = function getQuestAsset(quest, VIDEO_PLAYER_TRANSCRIPT, DARK, arg3, arg4) {
  if (obj.HERO === VIDEO_PLAYER_TRANSCRIPT) {
    const heroVideo2 = quest.config.assets.heroVideo;
    asset = quest.config.assets.hero;
    let flag = false;
    let flag2 = false;
  } else if (tmp.HERO_IMAGE === VIDEO_PLAYER_TRANSCRIPT) {
    asset = quest.config.assets.hero;
    flag = false;
    flag2 = false;
  } else if (tmp.HERO_VIDEO === VIDEO_PLAYER_TRANSCRIPT) {
    const heroVideo = quest.config.assets.heroVideo;
    flag = false;
    flag2 = false;
    asset = heroVideo;
    if (null == heroVideo) {
      return null;
    }
  } else if (tmp.QUEST_BAR_HERO === VIDEO_PLAYER_TRANSCRIPT) {
    const questBarHeroVideo2 = quest.config.assets.questBarHeroVideo;
    asset = quest.config.assets.questBarHero;
    flag = false;
    flag2 = false;
  } else if (tmp.QUEST_BAR_HERO_VIDEO === VIDEO_PLAYER_TRANSCRIPT) {
    const questBarHeroVideo = quest.config.assets.questBarHeroVideo;
    flag = false;
    flag2 = false;
    asset = questBarHeroVideo;
    if (null == questBarHeroVideo) {
      return null;
    }
  } else if (tmp.QUEST_BAR_HERO_IMAGE === VIDEO_PLAYER_TRANSCRIPT) {
    asset = quest.config.assets.questBarHero;
    flag = false;
    flag2 = false;
  } else if (tmp.REWARD === VIDEO_PLAYER_TRANSCRIPT) {
    let obj1 = QuestRewardUtils;
    const questPrimaryReward = obj1.getQuestPrimaryReward(quest);
    if (questPrimaryReward.type === QuestRewardTypes.QuestRewardTypes.VIRTUAL_CURRENCY) {
      let tmp25;
      if (null != arg4) {
        tmp25 = obj8[arg4];
      }
      if (null != tmp25) {
        obj = { url: tmp25, mimetype: "video/webm", isAnimated: true };
        obj1 = obj;
      } else if (arg3) {
        obj = { url: _modDef11297, mimetype: "video/mp4", isAnimated: true };
        obj1 = obj;
      } else {
        obj1 = { url: _modDef11298, mimetype: "video/webm", isAnimated: true };
      }
      return obj1;
    } else {
      ({ assetVideo, asset } = questPrimaryReward);
      flag = false;
      flag2 = false;
    }
  } else if (tmp.REWARD_IMAGE === VIDEO_PLAYER_TRANSCRIPT) {
    obj = QuestRewardUtils;
    const questPrimaryReward1 = obj.getQuestPrimaryReward(quest);
    if (questPrimaryReward1.type === QuestRewardTypes.QuestRewardTypes.VIRTUAL_CURRENCY) {
      return null;
    } else {
      asset = questPrimaryReward1.asset;
      flag = false;
      flag2 = false;
    }
  } else if (tmp.GAME_TILE === VIDEO_PLAYER_TRANSCRIPT) {
    if ("dark" === DARK) {
      if (null != quest.config.assets.gameTileDark) {
        asset = quest.config.assets.gameTileDark;
        flag = false;
        flag2 = false;
      }
    }
    if ("light" === DARK) {
      if (null != quest.config.assets.gameTileLight) {
        asset = quest.config.assets.gameTileLight;
        flag = false;
        flag2 = false;
      }
    }
    asset = quest.config.assets.gameTile;
    flag = false;
    flag2 = true;
  } else if (tmp.LOGO_TYPE === VIDEO_PLAYER_TRANSCRIPT) {
    if ("dark" === DARK) {
      if (null != quest.config.assets.logotypeDark) {
        asset = quest.config.assets.logotypeDark;
        flag = false;
        flag2 = false;
      }
    }
    if ("light" === DARK) {
      if (null != quest.config.assets.logotypeLight) {
        asset = quest.config.assets.logotypeLight;
        flag = false;
        flag2 = false;
      }
    }
    asset = quest.config.assets.logotype;
    flag = false;
    flag2 = true;
  } else if (tmp.COSPONSOR_LOGO_TYPE === VIDEO_PLAYER_TRANSCRIPT) {
    if (null == quest.config.cosponsorMetadata) {
      return null;
    } else {
      if ("dark" === DARK) {
        if (null != quest.config.cosponsorMetadata.logotypeDark) {
          asset = quest.config.cosponsorMetadata.logotypeDark;
          flag = false;
          flag2 = false;
        }
      }
      if ("light" === DARK) {
        if (null != quest.config.cosponsorMetadata.logotypeLight) {
          asset = quest.config.cosponsorMetadata.logotypeLight;
          flag = false;
          flag2 = false;
        }
      }
      asset = quest.config.cosponsorMetadata.logotype;
      flag = false;
      flag2 = true;
    }
  } else {
    if (tmp.VIDEO_PLAYER_VIDEO !== VIDEO_PLAYER_TRANSCRIPT) {
      if (tmp.VIDEO_PLAYER_VIDEO_LOW_RES !== VIDEO_PLAYER_TRANSCRIPT) {
        if (tmp.VIDEO_PLAYER_VIDEO_HLS !== VIDEO_PLAYER_TRANSCRIPT) {
          if (tmp.VIDEO_PLAYER_THUMBNAIL !== VIDEO_PLAYER_TRANSCRIPT) {
            if (tmp.VIDEO_PLAYER_CAPTION !== VIDEO_PLAYER_TRANSCRIPT) {
              flag = false;
              flag2 = false;
            }
          }
        }
      }
    }
    if ("taskConfigV2" in quest.config) {
      const FirstPartyQuestTaskTypes = FirstPartyQuestTaskTypes2.FirstPartyQuestTaskTypes;
      const tmp5 =
        quest.config.taskConfigV2.tasks[
          arg3 ? FirstPartyQuestTaskTypes.WATCH_VIDEO_ON_MOBILE : FirstPartyQuestTaskTypes.WATCH_VIDEO
        ];
      let tmp9;
      if (tmp5 != null) {
        if (tmp5.assets[tmp7.variant] != null) {
          tmp9 = tmp10[tmp7.property];
        }
      }
      flag = true;
      flag2 = false;
      asset = tmp9;
      if (null == tmp9) {
        return null;
      }
    } else {
      return null;
    }
  }
  if (!flag) {
    let tmp34 = tmp31Result;
  } else {
    tmp34 = null;
  }
  return tmp34;
};
export const buildUrl = function buildUrl(arg0, str, theme) {
  if (str.startsWith("blob:")) {
    const parts = str.split("?", 1);
    let atResult = parts.at(0);
    if (atResult == null) {
      atResult = str;
    }
    return atResult;
  } else {
    if ("/".includes("/")) {
      const _HermesInternal3 = HermesInternal;
      let combined = "" + React3 + str;
    } else {
      theme = undefined;
      if (theme != null) {
        theme = theme.theme;
      }
      let str3 = "";
      if (null != theme) {
        const _HermesInternal = HermesInternal;
        str3 = "/" + theme.theme;
      }
      const _HermesInternal2 = HermesInternal;
      combined = "" + React4 + arg0 + str3 + "/" + str;
    }
    return combined;
  }
};
export const resolveOptionalAdCreativeCdnUrl = function resolveOptionalAdCreativeCdnUrl(hero_video) {
  if (null != hero_video) {
    let combined = hero_video;
    if (!hero_video.startsWith("http://")) {
      combined = hero_video;
      if (!hero_video.startsWith("https://")) {
        combined = hero_video;
        if (!hero_video.startsWith("blob:")) {
          const _HermesInternal = HermesInternal;
          combined = "" + React3 + hero_video;
        }
      }
    }
    return combined;
  }
};
export const resolveAdCreativeCdnUrl = function resolveAdCreativeCdnUrl(hero_image) {
  let combined = hero_image;
  if (!hero_image.startsWith("http://")) {
    combined = hero_image;
    if (!hero_image.startsWith("https://")) {
      combined = hero_image;
      if (!hero_image.startsWith("blob:")) {
        const _HermesInternal = HermesInternal;
        combined = "" + React3 + hero_image;
      }
    }
  }
  return combined;
};
export { getMimetype };
export const getDevicePixelScaledDimensions = function getDevicePixelScaledDimensions(width, height) {
  const tmp = getDevicePixelRatioDefault();
  if (tmp < 3) {
    const size = { width, height };
    let size1 = size;
  } else {
    size1 = { width: width * tmp, height: height * tmp };
  }
  return size1;
};
export { getAssetUrlWithMediaProxyQueryParams };
export const getScaledImageUrl = function getScaledImageUrl(size) {
  ({ assetUrl, width, height } = size);
  const tmp = getDevicePixelRatioDefault();
  size = { width: width * tmp, height: height * tmp, format: "webp" };
  return getAssetUrlWithMediaProxyQueryParams(assetUrl, size);
};
export { convertVideoToFirstFrameImageWithMediaProxy };
export const getScaledFirstFrameImageUrl = function getScaledFirstFrameImageUrl(size) {
  ({ assetUrl, width, height } = size);
  const tmp = getDevicePixelRatioDefault();
  size = { width: width * tmp, height: height * tmp };
  return convertVideoToFirstFrameImageWithMediaProxy(assetUrl, size);
};
