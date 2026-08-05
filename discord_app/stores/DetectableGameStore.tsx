import { Storage } from "../../discord_common/js/packages/storage/Storage.tsx";
import { GameTheme } from "../modules/game_detection/GameDetectionTypes.tsx";
import { explicitContentFromProto } from "../modules/user_settings/UserSettings.tsx";
import { expandEventProperties } from "../utils/AnalyticsUtils.tsx";
import { isDiscordFrontendDevelopment } from "../utils/GlobalUtils.tsx";
import { set } from "../utils/PlatformUtils.tsx";
import { DISCORD_EPOCH } from "../utils/SnowflakeUtils.tsx";
// discord_app/stores/DetectableGameStore.tsx
import { createExecutable } from "createExecutable";
import { AnalyticEvents } from "ME";
import { ApplicationTypes } from "ApplicationTypes";
import { Storage } from "Storage";
import set from "set";
import { PersistedStore } from "initialize";
import set from "ApplicationTypes";

function gameFromServer(id) {
  const obj = { id: id.id, name: id.name, executables: null, aliases: null, thirdPartySkus: null };
  let executables = id.executables;
  if (executables == null) {
    executables = [];
  }
  obj[2] = executables.map(createExecutable);
  let aliases = id.aliases;
  if (aliases == null) {
    aliases = [];
  }
  obj[3] = aliases;
  let third_party_skus = id.third_party_skus;
  if (third_party_skus == null) {
    third_party_skus = [];
  }
  obj[4] = third_party_skus;
  return obj;
}
function convertGameRecordToGame(id) {
  const obj = { id: id.id, name: id.name, executables: id.executables, aliases: id.aliases, thirdPartySkus: null };
  let thirdPartySkus = id.thirdPartySkus;
  if (thirdPartySkus == null) {
    thirdPartySkus = [];
  }
  obj[4] = thirdPartySkus;
  return obj;
}
function addGameIdToNameCache(id, item10026) {
  if (null == dependencyMap[item10026]) {
    dependencyMap[item10026] = [];
  }
  let arr = dependencyMap[item10026];
  arr = arr.push(id);
}
function addDetectableGame(id) {
  let name;
  let tmp = id;
  if (id instanceof GameTheme /* GameTheme */.DetectableGameRecord) {
    tmp = convertGameRecordToGame(id);
    const tmp2 = convertGameRecordToGame;
  }
  const result = tmp2.set(id.id, tmp);
  ({ name, id } = tmp);
  addGameIdToNameCache(id, name.toLowerCase());
  for (const item10026 of tmp5) {
    let tmp6 = addGameIdToNameCache;
    let tmp7 = addGameIdToNameCache(tmp.id, item10026.toLowerCase());
    continue;
  }
  if (obj.isDesktop()) {
    const executables = id.executables;
    for (const item10044 of executables) {
      let tmp10 = closure_10;
      closure_10[item10044.name] = tmp.id;
      continue;
    }
  }
}
const GameStoreReportedGames = "GameStoreReportedGames";
const DAY = require("set").Millis.DAY;
const metroImportAll = new require("keys")();
let closure_9 = Object.create(null);
let closure_10 = Object.create(null);
let obj = Storage.get("GameStoreReportedGames");
if (obj == null) {
  let _Object = Object;
  obj = Object.create(null);
}
let c12 = "";
let c13;
let c14 = null;
let c15 = false;
let c16 = null;
let c17 = false;
let c18 = "";
let closure_19 = [];
let closure_20 = [];
const map = new Map();
const HOUR = require("set").Millis.HOUR;
let set = new Set();
const set1 = new Set();
let str = "win32";
if (!set.isWindows()) {
  const _module1 = require("set");
  let str2 = "darwin";
  if (!_module1.isMac()) {
    const _module2 = require("set");
    let str3 = null;
    if (_module2.isLinux()) {
      str3 = "linux";
    }
    str2 = str3;
  }
  str = str2;
}
class DetectableGameStore extends PersistedStore {
}
const prototype = DetectableGameStore.prototype;
prototype["initialize"] = function initialize(detectableGamesEtag) {
  if (null != detectableGamesEtag) {
    if (null != detectableGamesEtag.detectableGamesEtag) {
      detectableGamesEtag = detectableGamesEtag.detectableGamesEtag;
    }
    if (null != detectableGamesEtag.blocklistEtag) {
      const blocklistEtag = detectableGamesEtag.blocklistEtag;
    }
    if (null != detectableGamesEtag.blocklistExecutables) {
      const blocklistExecutables = detectableGamesEtag.blocklistExecutables;
    }
    if (null != detectableGamesEtag.blocklistPatterns) {
      const blocklistPatterns = detectableGamesEtag.blocklistPatterns;
      let closure_20 = blocklistPatterns.map((arg0) => {
        const regExp = new RegExp(arg0, "i");
        return regExp;
      });
    }
    const detectableGames = detectableGamesEtag.detectableGames;
    if (detectableGames != null) {
      const item = detectableGames.forEach((arg0) => {
        callback(arg0);
      });
    }
  }
};
prototype["getState"] = function getState() {
  let obj = set /* set */;
  if (obj.isDesktop()) {
    obj = { detectableGamesEtag: null, detectableGames: null, blocklistEtag: null, blocklistExecutables: null, blocklistPatterns: null };
    obj[0] = c12;
    obj[1] = tmp2.values();
    obj[2] = c18;
    obj[3] = closure_19;
    obj[4] = closure_20.map((source) => source.source);
  } else {
    obj = { detectableGamesEtag: "", detectableGames: null, blocklistEtag: "", blocklistExecutables: null, blocklistPatterns: null };
    obj[1] = [];
    obj[3] = [];
    obj[4] = [];
  }
  return obj;
};
Object.defineProperty(prototype, "games", {
  get: function games() {
    return tmp2.values();
  },
  set: undefined
});
prototype["getDetectableGame"] = function getDetectableGame(id) {
  return tmp2.get(DISCORD_EPOCH.cast(id));
};
prototype["searchGamesByName"] = function searchGamesByName(name) {
  if (null == name) {
    return [];
  } else {
    const formatted = name.toLowerCase();
    const _Object = Object;
    const call = hasOwnProperty.call;
    if (typeof call === "unknown" ? hasOwnProperty(formatted) : call(dependencyMap, formatted)) {
      let items = dependencyMap[formatted];
    } else {
      items = [];
    }
    return items;
  }
};
prototype["findGame"] = function findGame(nextResult) {
  let self = this;
  const _require = nextResult;
  let closure_1 = arg1;
  self = this;
  let detectableGame = this.getDetectableGame(nextResult.id);
  if (null != detectableGame) {
    return detectableGame;
  } else {
    if (null != nextResult.name) {
      const searchGamesByNameResult = self.searchGamesByName(nextResult.name);
      function _loop() {
        const detectableGame = self.getDetectableGame(closure_4);
        if (null == detectableGame) {
          return 0;
        } else if (null != closure_1) {
          tmp5(detectableGame);
          return 0;
        } else if (null != nextResult.exePath) {
          if (null != detectableGame.executables) {
            const parts = tmp6.exePath.split("/");
            const found = parts.filter(nextResult(outer1_2[10]).isNotNullish);
            nextResult = found.pop();
            const executables = detectableGame.executables;
            if (executables.some((name) => name.name === closure_0)) {
              const obj = { v: null };
              obj[0] = detectableGame;
              return obj;
            }
            const str = tmp6.exePath;
          }
        }
      }
      const iter = searchGamesByNameResult[Symbol.iterator]();
      while (iter !== undefined) {
        let closure_4 = iter.next();
        let _loopResult = _loop();
        if (0 !== _loopResult) {
          let tmp8 = _loopResult;
          if (tmp7) {
            let tmp9 = iter;
            iter.return();
            return _loopResult.v;
          }
        }
        continue;
      }
    }
    if (null != nextResult.exePath) {
      let parts = nextResult.exePath.split("/");
      let found = parts.filter(_isDiscordFrontendDevelopment.isNotNullish);
      const gameByExecutable = self.getGameByExecutable(found.pop());
      if (null != gameByExecutable) {
        return gameByExecutable;
      } else {
        const parts1 = nextResult.exePath.split("/");
        const found1 = parts1.filter(tmp15(1351).isNotNullish);
        const substr = found1.slice(-2);
        const gameByExecutable1 = self.getGameByExecutable(substr.join("/"));
        if (null != gameByExecutable1) {
          return gameByExecutable1;
        }
        const str3 = nextResult.exePath;
      }
      let str = nextResult.exePath;
      tmp15 = _require;
    }
    if (tmp11) {
      const result = self.trackNameMatchFallback(nextResult.name, dependencyMap, nextResult.exePath);
    }
    return dependencyMap;
  }
};
prototype["getOfficialGame"] = function getOfficialGame(type) {
  let detectableGame = null;
  if (null != type) {
    if (type.type === ApplicationTypes.GAME) {
      let id = type.id;
    } else {
      const linkedGames = type.linkedGames;
      if (linkedGames != null) {
        const found = linkedGames.find((type) => type.type === callback(table[11]).GameLinkTypes.OFFICIAL);
        if (found != null) {
          id = found.id;
        }
      }
    }
    detectableGame = null;
    if (null != id) {
      const self = this;
      detectableGame = this.getDetectableGame(id);
    }
  }
  return detectableGame;
};
prototype["getGameByApplication"] = function getGameByApplication(id) {
  let self = this;
  self = this;
  const detectableGame = this.getDetectableGame(id.id);
  if (null != detectableGame) {
    return detectableGame;
  } else {
    let str = "none";
    if (null != id.linkedGames) {
      const linkedGames = id.linkedGames;
      for (const item10014 of linkedGames) {
        let detectableGame1 = self.getDetectableGame(item10014.id);
        let tmp6 = detectableGame1;
        if (null != detectableGame1) {
          str = "linked_game";
          tmp = detectableGame1;
          let tmp7 = obj;
          obj.return();
          break;
        }
        break;
      }
    }
    if (null == tmp) {
      const mapped = self.searchGamesByName(id.name).map((id) => self.getDetectableGame(id));
      const first = mapped.reverse()[0];
      if (null != first) {
        str = "name";
        tmp = first;
      }
      const searchGamesByNameResult = self.searchGamesByName(id.name);
    }
    const result = self.maybeTrackApplicationLookupFallthrough(id, str, tmp);
    return tmp;
  }
};
prototype["isGameInDatabase"] = function isGameInDatabase(nativeProcessObserverId) {
  let tmp = null != this.findGame(nativeProcessObserverId);
  if (!tmp) {
    let tmp2 = undefined !== nativeProcessObserverId.nativeProcessObserverId;
    if (tmp2) {
      tmp2 = !(2147483648 & nativeProcessObserverId.nativeProcessObserverId);
    }
    tmp = tmp2;
  }
  return tmp;
};
Object.defineProperty(prototype, "fetching", {
  get: function fetching() {
    return true === c13;
  },
  set: undefined
});
Object.defineProperty(prototype, "detectableGamesEtag", {
  get: function detectableGamesEtag() {
    return c12;
  },
  set: undefined
});
Object.defineProperty(prototype, "blocklistEtag", {
  get: function blocklistEtag() {
    return c18;
  },
  set: undefined
});
Object.defineProperty(prototype, "lastFetched", {
  get: function lastFetched() {
    return c14;
  },
  set: undefined
});
Object.defineProperty(prototype, "hasAttemptedFetch", {
  get: function hasAttemptedFetch() {
    return c15;
  },
  set: undefined
});
Object.defineProperty(prototype, "detectableGamesTtl", {
  get: function detectableGamesTtl() {
    return DAY;
  },
  set: undefined
});
prototype["canFetchDetectableGames"] = function canFetchDetectableGames() {
  let tmp = true !== c13;
  if (tmp) {
    let tmp4 = null == c14;
    if (!tmp4) {
      const _Date = Date;
      tmp4 = Date.now() >= c14 + DAY;
    }
    tmp = tmp4;
  }
  return tmp;
};
prototype["canFetchExecutableBlocklist"] = function canFetchExecutableBlocklist() {
  let tmp = !c17;
  if (!c17) {
    let tmp4 = null == c16;
    if (!tmp4) {
      const _Date = Date;
      tmp4 = Date.now() >= c16 + DAY;
    }
    tmp = tmp4;
  }
  return tmp;
};
prototype["getGameByExecutable"] = function getGameByExecutable(found) {
  if (null != found) {
    const self = this;
    return this.getDetectableGame(table[found]);
  }
};
prototype["shouldBlock"] = function shouldBlock(exePath) {
  let closure_0 = exePath;
  if (null != exePath.exePath) {
    if ("" !== exePath.exePath) {
      const self = this;
      let closure_1 = exePath.exePath.toLowerCase();
      if (null != exePath.id) {
        if (null != str) {
          const detectableGame = self.getDetectableGame(exePath.id);
          if (null != detectableGame) {
            const executables = detectableGame.executables;
            if (executables.some((os) => {
              let endsWithResult = os.os === outer1_25;
              if (endsWithResult) {
                endsWithResult = closure_1.endsWith(os.name.toLowerCase());
                const str = os.name;
              }
              return endsWithResult;
            })) {
              return false;
            }
          }
        }
      }
      const found = closure_19.find((arg0) => closure_1.includes(arg0));
      if (null != found) {
        self.maybeTrackBlock(exePath, "explicit_list", found);
        return true;
      } else {
        const found1 = closure_20.find((test) => test.test(exePath.exePath));
        let flag = null != found1;
        if (flag) {
          self.maybeTrackBlock(exePath, "pattern_match", found1.source);
          flag = true;
        }
        return flag;
      }
      const str4 = exePath.exePath;
    }
  }
  return false;
};
prototype["getBlockReason"] = function getBlockReason(exePath) {
  let closure_0 = exePath;
  if (null != exePath.exePath) {
    if ("" !== exePath.exePath) {
      let closure_1 = exePath.exePath.toLowerCase();
      const found = closure_19.find((arg0) => closure_1.includes(arg0));
      if (null != found) {
        let obj = { matchedExe: null, matchedPattern: null };
        obj[0] = found;
        return obj;
      } else {
        const found1 = closure_20.find((test) => test.test(exePath.exePath));
        let tmp5 = null;
        if (null != found1) {
          obj = { matchedExe: null, matchedPattern: null };
          obj[1] = found1.source;
          tmp5 = obj;
        }
        return tmp5;
      }
      const str = exePath.exePath;
    }
  }
  return null;
};
prototype["maybeTrackApplicationLookupFallthrough"] = function maybeTrackApplicationLookupFallthrough(id, arg1, id2) {
  id = id.id;
  let obj = set;
  if (!set.has(id)) {
    obj.add(id);
    obj = { application_id: null, application_name: null, match_type: null, matched_game_id: null, matched_game_name: null };
    obj[0] = id;
    let name = id.name;
    if (name == null) {
      name = null;
    }
    obj[1] = name;
    obj[2] = arg1;
    id = undefined;
    if (id2 != null) {
      id = id2.id;
    }
    if (id == null) {
      id = null;
    }
    obj[3] = id;
    let name1;
    if (id2 != null) {
      name1 = id2.name;
    }
    if (name1 == null) {
      name1 = null;
    }
    obj[4] = name1;
    expandEventProperties.track(AnalyticEvents.GAME_APPLICATION_LOOKUP_FALLTHROUGH, obj);
    const obj2 = expandEventProperties;
  }
};
prototype["trackNameMatchFallback"] = function trackNameMatchFallback(name, dependencyMap, exePath) {
  const formatted = name.toLowerCase();
  let obj = set1;
  if (!set1.has(formatted)) {
    obj.add(formatted);
    let tmp5 = null != exePath;
    if (tmp5) {
      tmp5 = "" !== exePath;
    }
    obj = { matched_name: null, matched_game_id: null, exe_name: null, had_exe_path: null };
    obj[0] = name;
    obj[1] = dependencyMap.id;
    let tmp10 = null;
    if (tmp5) {
      const parts = exePath.split(/[/\\]/);
      let arr = parts.pop();
      if (arr == null) {
        arr = null;
      }
      tmp10 = arr;
    }
    obj[2] = tmp10;
    obj[3] = tmp5;
    expandEventProperties.track(AnalyticEvents.GAME_NAME_MATCH_FALLBACK, obj);
    const obj2 = expandEventProperties;
  }
};
prototype["maybeTrackBlock"] = function maybeTrackBlock(exePath, explicit_list, found) {
  const parts = exePath.exePath.split(/[/\\]/);
  let str2 = parts.pop();
  if (str2 == null) {
    str2 = "unknown";
  }
  let obj = map;
  const value = map.get(str2);
  const timestamp = Date.now();
  let tmp3 = null == value;
  if (!tmp3) {
    tmp3 = timestamp - value >= HOUR;
  }
  if (tmp3) {
    const result = obj.set(str2, timestamp);
    obj = { block_type: null, matched_entry: null, game_name: null, executable_name: null };
    obj[0] = explicit_list;
    obj[1] = found;
    let origGameName = exePath.gameName;
    if (origGameName == null) {
      origGameName = exePath.origGameName;
    }
    obj[2] = origGameName;
    obj[3] = str2;
    expandEventProperties.track(AnalyticEvents.GAME_BLOCKLIST_TRIGGERED, obj);
    const obj2 = expandEventProperties;
  }
};
prototype["shouldReport"] = function shouldReport(name) {
  const self = this;
  if (this.shouldBlock(name)) {
    return false;
  } else {
    let tmp2 = null != self.findGame(name);
    let tmp3 = null != name.name;
    if (tmp3) {
      tmp3 = null != obj[name.name];
    }
    const ShowCurrentGame = explicitContentFromProto /* explicitContentFromProto */.ShowCurrentGame;
    let setting = ShowCurrentGame.getSetting();
    if (setting) {
      setting = !c13;
    }
    if (setting) {
      if (!tmp2) {
        tmp2 = tmp3;
      }
      setting = !tmp2;
    }
    return setting;
  }
};
prototype["markGameReported"] = function markGameReported(arg0) {
  obj[arg0] = true;
  const Storage = Storage /* Storage */.Storage;
  const result = Storage.set(GameStoreReportedGames, obj);
};
DetectableGameStore.displayName = "GameStore";
DetectableGameStore.persistKey = "GameStore";
let items = [
  (arg0) => {
    let detectableGames;
    if (null != arg0) {
      let obj = { detectableGamesEtag: null, detectableGames: null };
      ({ detectableGamesEtag: obj2[0], detectableGames } = arg0);
      let mapped;
      if (detectableGames != null) {
        mapped = detectableGames.map((aliases) => {
          const detectableGameRecord = new callback(table[7]).DetectableGameRecord(aliases);
          const obj = { id: detectableGameRecord.id, name: detectableGameRecord.name, executables: detectableGameRecord.executables, aliases: detectableGameRecord.aliases, thirdPartySkus: null };
          let thirdPartySkus = detectableGameRecord.thirdPartySkus;
          if (thirdPartySkus == null) {
            thirdPartySkus = [];
          }
          obj[4] = thirdPartySkus;
          return obj;
        });
      }
      if (mapped == null) {
        mapped = [];
      }
      obj[1] = mapped;
    } else {
      obj = { detectableGamesEtag: "", detectableGames: null };
      obj[1] = [];
    }
    return obj;
  },
  (arg0) => {
    let tmp = arg0;
    let obj = set /* set */;
    if (!obj.isDesktop()) {
      obj = { detectableGamesEtag: "", detectableGames: null };
      obj[1] = [];
      tmp = obj;
    }
    return tmp;
  },
  () => ({ detectableGamesEtag: "", detectableGames: [] }),
  (blocklistEtag) => {
    const obj = {};
    const merged = Object.assign(blocklistEtag);
    let str = blocklistEtag.blocklistEtag;
    if (str == null) {
      str = "";
    }
    obj.blocklistEtag = str;
    let blocklistExecutables = blocklistEtag.blocklistExecutables;
    if (blocklistExecutables == null) {
      blocklistExecutables = [];
    }
    obj.blocklistExecutables = blocklistExecutables;
    let blocklistPatterns = blocklistEtag.blocklistPatterns;
    if (blocklistPatterns == null) {
      blocklistPatterns = [];
    }
    obj.blocklistPatterns = blocklistPatterns;
    return obj;
  }
];
DetectableGameStore.migrations = items;
obj = {
  OVERLAY_INITIALIZE: function handleOverlayInitialize(arg0) {
    tmp2.clear();
    let closure_9 = Object.create(null);
    let closure_10 = Object.create(null);
    tmp2 = arg0.detectableApplications[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let tmp4 = addDetectableGame;
      let tmp5 = addDetectableGame(tmp3);
      continue;
    }
  },
  GAMES_DATABASE_FETCH: function handleApplicationsFetch() {
    let c13 = true;
  },
  GAMES_DATABASE_FETCH_FAIL: function handleApplicationsFetchFail() {
    let c13 = false;
    let c15 = true;
  },
  GAMES_DATABASE_UPDATE: function handleDetectableGamesUpdated(arg0) {
    let etag;
    let games;
    ({ games, etag } = arg0);
    let tmp = null != etag;
    if (tmp) {
      tmp = etag !== etag;
    }
    if (tmp) {
      tmp2.clear();
      const _Object = Object;
      let closure_9 = Object.create(null);
      const _Object2 = Object;
      let closure_10 = Object.create(null);
    }
    while (tmp6 !== undefined) {
      let tmp8 = addDetectableGame;
      let tmp9 = gameFromServer;
      let tmp10 = addDetectableGame(gameFromServer(tmp7));
      continue;
    }
    let c13;
    let closure_14 = Date.now();
    let c15 = true;
  },
  GAMES_BLOCKLIST_FETCH: function handleGamesBlocklistFetch() {
    let c17 = true;
  },
  GAMES_BLOCKLIST_FETCH_FAIL: function handleGamesBlocklistFetchFail() {
    let c17 = false;
  },
  GAMES_BLOCKLIST_UPDATE: function handleGamesBlocklistUpdated(arg0) {
    let etag;
    let executables;
    let patterns;
    ({ executables, patterns, etag } = arg0);
    let tmp = null != etag;
    if (tmp) {
      tmp = etag !== etag;
    }
    if (tmp) {
      let closure_19 = executables.map((str) => str.toLowerCase());
      let closure_20 = patterns.map((arg0) => {
        const regExp = new RegExp(arg0, "i");
        return regExp;
      });
    }
    let c17 = false;
    let closure_16 = Date.now();
  }
};
const detectableGameStore = new DetectableGameStore(require("dispatcher"), obj);
let result = set.fileFinishedImporting("stores/DetectableGameStore.tsx");

export default detectableGameStore;
export { gameFromServer };