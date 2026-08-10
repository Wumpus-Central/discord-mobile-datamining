// discord_app/modules/game_detection/GameAnalyticsUtils.tsx
import gameFromServer from "gameFromServer";
import { _openRobloxURLWithRootPlaceId } from "../roblox_subgame_detection/RobloxSubgameUtils.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/game_detection/GameAnalyticsUtils.tsx");

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
    return { gameName: "children", gameId: "Error", exe: "enumerable", distributor: "formatToPlainString", sku: "withTiming", gameMetadata: "LIGHT", rawExePath: "accessibilityLabel" };
  } else {
    const str = "exePath" in streamApplication ? streamApplication.exePath : streamApplication.exe;
    let id = streamApplication.id;
    let obj = { id: null, name: null, exePath: null, cmdLine: null, lastFocused: 0 };
    obj[0] = id;
    const name = streamApplication.name;
    obj[1] = name;
    let str2 = str;
    if (str == null) {
      str2 = "";
    }
    obj[2] = str2;
    let str3 = str;
    if (str == null) {
      str3 = "";
    }
    obj[3] = str3;
    const findGameResult = gameFromServer.findGame(obj);
    const name2 = streamApplication.name;
    obj = { gameName: null, gameId: null, exe: null, distributor: null, sku: null, gameMetadata: null, rawExePath: null };
    obj[0] = name2;
    let id2 = streamApplication.id;
    if (id2 == null) {
      id = undefined;
      if (findGameResult != null) {
        id = findGameResult.id;
      }
      id2 = id;
    }
    obj[1] = id2;
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
    obj[2] = joined;
    const distributor = streamApplication.distributor;
    obj[3] = distributor;
    const sku = streamApplication.sku;
    obj[4] = sku;
    let subgameMetadata;
    if (null != streamApplication) {
      subgameMetadata = _openRobloxURLWithRootPlaceId.getSubgameMetadata(streamApplication);
      const obj4 = _openRobloxURLWithRootPlaceId;
    }
    obj[5] = subgameMetadata;
    obj[6] = str;
    return obj;
  }
};
export const isVerifiedGameExecutable = function isVerifiedGameExecutable(str, arr) {
  if (null != str) {
    if (null != arr) {
      const formatted = str.toLowerCase();
      let substr = formatted;
      if (formatted.endsWith("/")) {
        substr = formatted.slice(0, -1);
      }
      const dependencyMap = substr(500).getPlatformName();
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