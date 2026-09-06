// === Module 4689: GameAnalyticsUtils ===

// Module 4689 (GameAnalyticsUtils)
import PlatformUtils from "PlatformUtils" /* 1115 */;
import RobloxSubgameUtils from "RobloxSubgameUtils" /* 4690 */;
import DetectableGameStore from "DetectableGameStore" /* 1931 */;

require = fn;
const size = fn(2);
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
  if (null == streamApplication) {
    return { gameName: "call", gameId: "status", exe: "padding", distributor: "disabled", sku: "radii", gameMetadata: "Array", rawExePath: "isArray" };
  } else {
    const str = "exePath" in streamApplication ? streamApplication.exePath : streamApplication.exe;
    let id = streamApplication.id;
    let obj = { id, name: null, exePath: null, cmdLine: null, lastFocused: 0 };
    const name = streamApplication.name;
    obj.name = name;
    let str2 = str;
    if (str == null) {
      str2 = "";
    }
    obj.exePath = str2;
    let str3 = str;
    if (str == null) {
      str3 = "";
    }
    obj.cmdLine = str3;
    const findGameResult = DetectableGameStore.findGame(obj);
    const name2 = streamApplication.name;
    obj = { gameName: name2, gameId: null, exe: null, distributor: null, sku: null, gameMetadata: null, rawExePath: null };
    let id2 = streamApplication.id;
    if (id2 == null) {
      id = undefined;
      if (findGameResult != null) {
        id = findGameResult.id;
      }
      id2 = id;
    }
    obj.gameId = id2;
    let joined;
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
    obj.exe = joined;
    const distributor = streamApplication.distributor;
    obj.distributor = distributor;
    const sku = streamApplication.sku;
    obj.sku = sku;
    let subgameMetadata;
    if (null != streamApplication) {
      subgameMetadata = RobloxSubgameUtils.getSubgameMetadata(streamApplication);
    }
    obj.gameMetadata = subgameMetadata;
    obj.rawExePath = str;
    return obj;
  }
};
export const getGameAnalyticsMetadata = function getGameAnalyticsMetadata(currentGameForAnalytics, arg1, detected_game_id) {
  if (arg1) {
    if (null != detected_game_id) {
      const _JSON = JSON;
      let obj = { detected_game_id };
      let json = JSON.stringify(obj);
    }
    return json;
  }
  obj = RobloxSubgameUtils;
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
      const platformName = PlatformUtils.getPlatformName();
      return arr.some((os) => {
        let tmp = os.os === closure_1;
        if (tmp) {
          let endsWithResult;
          if (substr != null) {
            endsWithResult = obj.endsWith(os.name);
          }
          tmp = endsWithResult;
          obj = substr;
        }
        return tmp;
      });
    }
  }
  return false;
};