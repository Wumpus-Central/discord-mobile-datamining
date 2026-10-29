// === Module 14717: EmbedIFrameConfig ===

// Module 14717 (EmbedIFrameConfig)
import Constants from "Constants" /* 1084 */;
import URLUtilsDefault from "URLUtils" /* 1383 */;
import size from "module_2" /* 2 */;

const obj = { YOUTUBE: "YouTube", TIKTOK: "TikTok", TWITCH: "Twitch" };
let obj2 = {};
const obj3 = {
  params: { autoplay: "1", auto_play: "1", pageType: Constants.YOUTUBE_EMBED_PAGE_TYPE },
  dynamicParams(autoMute) {
    let mute;
    if (autoMute.autoMute) {
      mute = "1";
    }
    return { mute };
  }
};
obj2[obj.YOUTUBE] = obj3;
obj2[obj.TIKTOK] = { params: { utm_source: "discord.gg" } };
obj2[obj.TWITCH] = {
  stripParams: ["parent"],
  appendParams: { parent: ["discord.co", "discord.com", "discordapp.com", "ptb.discord.com", "canary.discord.com", "localhost"] },
  params: { autoplay: "true" },
  dynamicParams(autoMute) {
    let muted;
    if (autoMute.autoMute) {
      muted = "true";
    }
    return { muted };
  }
};
let result = size.fileFinishedImporting("modules/chat/EmbedIFrameConfig.tsx");

export const EMBED_IFRAME_SANDBOX = "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts";
export const SupportedEmbedIFrame = obj;
export function formatProviderSrc(uri, cResult, arg2) {
  let str = uri;
  obj2 = URLUtilsDefault;
  if (uri == null) {
    str = "";
  }
  const str2 = obj2.toURLSafe(str);
  if (null === str2) {
    return "";
  } else if (null == obj) {
    return str2.toString();
  } else {
    if (null != obj.stripParams) {
      const stripParams = obj.stripParams;
      for (const item10016 of stripParams) {
        let searchParams = str2.searchParams;
        let deleteResult = searchParams.delete(item10016);
        continue;
      }
    }
    if (null != obj.params) {
      for (const key10025 in obj.params) {
        let searchParams4 = str2.searchParams;
        let result = searchParams4.set(key10025, obj.params[key10025]);
        continue;
      }
    }
    if (null != obj.appendParams) {
      for (const key10029 in obj.appendParams) {
        let tmp13 = obj.appendParams[key10029];
        for (const item10031 of tmp13) {
          let searchParams2 = str2.searchParams;
          let appendResult = searchParams2.append(key10029, item10031);
          continue;
        }
      }
    }
    if (null != obj.dynamicParams) {
      const dynamicParamsResult = obj.dynamicParams(arg2);
      for (const key10043 in dynamicParamsResult) {
        let tmp16 = dynamicParamsResult[key10043];
        if (null == tmp16) {
          continue;
        } else {
          let searchParams3 = str2.searchParams;
          let result1 = searchParams3.set(key10043, tmp16);
          continue;
        }
        continue;
      }
    }
    return str2.toString();
  }
}