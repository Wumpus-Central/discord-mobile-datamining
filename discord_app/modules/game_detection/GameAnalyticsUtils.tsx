// === Module 5025: GameAnalyticsUtils ===

// Module 5025 (GameAnalyticsUtils)
import PlatformUtils from "PlatformUtils" /* 1369 */;
import RobloxSubgameUtils from "RobloxSubgameUtils" /* 5026 */;
import DetectableGameStore from "DetectableGameStore" /* 2024 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_detection/GameAnalyticsUtils.tsx");

export const removeExecutablePathPrefix = function removeExecutablePathPrefix(exePath) {
  const formatted = exePath.toLowerCase();
  let str = formatted;
  if (formatted.endsWith("/")) {
    str = formatted.slice(0, -1);
  }
  const parts = str.split("/");
  const substr = parts.slice(-2);
  return substr.join("/");
};
export const getRunningGameAnalytics = function getRunningGameAnalytics(streamApplication) {
  let distributor;
  let id2;
  let joined;
  let name;
  let sku;
  let str2;
  let str3;
  let subgameMetadata;
  if (null == streamApplication) {
    return { gameName: "Array", gameId: "unicodeVersion", exe: "PX_16", distributor: "useStateFromStores", sku: "IconComponent", gameMetadata: "emoji", rawExePath: "o" };
  } else {
    const str = "exePath" in streamApplication ? streamApplication.exePath : streamApplication.exe;
    const id = streamApplication.id;
    const obj = { id, name, exePath: str2, cmdLine: str3, lastFocused: 0 };
    name = streamApplication.name;
    str2 = str;
    if (str == null) {
      str2 = "";
    }
    str3 = str;
    if (str == null) {
      str3 = "";
    }
    const findGameResult = DetectableGameStore.findGame(obj);
    const name2 = streamApplication.name;
    const obj2 = { gameName: name2, gameId: id2, exe: joined, distributor, sku, gameMetadata: subgameMetadata, rawExePath: str };
    id2 = streamApplication.id;
    if (id2 == null) {
      let id1;
      if (findGameResult != null) {
        id1 = findGameResult.id;
      }
      id2 = id1;
    }
    joined = undefined;
    if (null != str) {
      const formatted = str.toLowerCase();
      let str5 = formatted;
      if (formatted.endsWith("/")) {
        str5 = formatted.slice(0, -1);
      }
      const parts = str5.split("/");
      const substr = parts.slice(-2);
      joined = substr.join("/");
    }
    distributor = streamApplication.distributor;
    sku = streamApplication.sku;
    subgameMetadata = undefined;
    if (null != streamApplication) {
      const obj4 = RobloxSubgameUtils;
      subgameMetadata = obj4.getSubgameMetadata(streamApplication);
    }
    return obj2;
  }
};
export const getGameAnalyticsMetadata = function getGameAnalyticsMetadata(currentGameForAnalytics, arg1, detected_game_id) {
  const tmp = arg1;
  if (tmp) {
    let json;
    if (null != detected_game_id) {
      const _JSON = JSON;
      const obj2 = { detected_game_id };
      json = JSON.stringify(obj2);
    }
    return json;
  }
  const obj = RobloxSubgameUtils;
  json = obj.getSubgameMetadata(currentGameForAnalytics);
};
export const isVerifiedGameExecutable = function isVerifiedGameExecutable(str, arr) {
  if (null != str) {
    if (null != arr) {
      const formatted = str.toLowerCase();
      let substr = formatted;
      if (formatted.endsWith("/")) {
        substr = formatted.slice(0, -1);
      }
      const obj = PlatformUtils;
      const platformName = obj.getPlatformName();
      return arr.some((os) => {
        let tmp = os.os === closure_1;
        if (tmp) {
          let endsWithResult;
          if (substr != null) {
            endsWithResult = substr.endsWith(os.name);
          }
          tmp = endsWithResult;
        }
        return tmp;
      });
    }
  }
  return false;
};