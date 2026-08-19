// discord_app/stores/DetectableGameStore.tsx
import DISCORD_EPOCHDefault from "../utils/SnowflakeUtils.tsx";
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import Storage2 from "../../discord_common/js/packages/storage/Storage.tsx";
import ME from "../Constants.tsx";
import obj132Default from "../utils/Durations.tsx";
import expandEventPropertiesDefault from "../utils/AnalyticsUtils.tsx";
import dispatcherDefault from "../Dispatcher.tsx";
import explicitContentFromProto from "../modules/user_settings/UserSettings.tsx";
import createExecutable2 from "../records/ApplicationRecord.tsx";
import ApplicationTypes2 from "../modules/applications/ApplicationConstants.tsx";
import keysDefault from "../lib/CachedEntriesMap.tsx";
import GameTheme from "../modules/game_detection/GameDetectionTypes.tsx";
import obj132 from "../utils/PlatformUtils.tsx";

function gameFromServer(id) {
  ({ executables, aliases, third_party_skus } = id);
  obj = { id: id.id, name: id.name, executables: null, aliases: null, thirdPartySkus: null };
  let mapped;
  if (executables != null) {
    mapped = executables.map(createExecutable);
  }
  if (null == mapped) {
    mapped = closure_26;
  }
  obj[2] = mapped;
  if (null == aliases) {
    aliases = closure_26;
  }
  obj[3] = aliases;
  if (null == third_party_skus) {
    third_party_skus = closure_26;
  }
  obj[4] = third_party_skus;
  return obj;
}
function convertGameRecordToGame(id) {
  ({ executables, aliases, thirdPartySkus } = id);
  obj = { id: id.id, name: id.name, executables: null, aliases: null, thirdPartySkus: null };
  if (null == executables) {
    executables = closure_26;
  }
  obj[2] = executables;
  if (null == aliases) {
    aliases = closure_26;
  }
  obj[3] = aliases;
  if (null == thirdPartySkus) {
    thirdPartySkus = closure_26;
  }
  obj[4] = thirdPartySkus;
  return obj;
}
function addGameIdToNameCache(id, arg1) {
  const value = map.get(arg1);
  if (undefined === value) {
    const result = map.set(arg1, id);
  } else {
    const _Array = Array;
    if (Array.isArray(value)) {
      value.push(id);
    } else {
      const items = [value, id];
      const result1 = map.set(arg1, items);
    }
  }
}
function addDetectableGame(id) {
  let tmp = id;
  if (id instanceof GameTheme.DetectableGameRecord) {
    tmp = convertGameRecordToGame(id);
  }
  const result = store.set(id.id, tmp);
  ({ name, id } = tmp);
  addGameIdToNameCache(id, name.toLowerCase());
  for (const item10026 of tmp5) {
    let tmp7 = addGameIdToNameCache(tmp.id, item10026.toLowerCase());
    continue;
  }
  if (obj.isDesktop()) {
    const executables = id.executables;
    for (const item10044 of executables) {
      let result1 = map1.set(item10044.name, tmp.id);
      continue;
    }
  }
  obj = obj132;
}
const createExecutable = createExecutable2.createExecutable;
const AnalyticEvents = ME.AnalyticEvents;
const ApplicationTypes = ApplicationTypes2.ApplicationTypes;
const GameStoreReportedGames = "GameStoreReportedGames";
const DAY = obj132Default.Millis.DAY;
let closure_8 = new keysDefault();
const map = new Map();
const map1 = new Map();
let Storage = Storage2.Storage;
let obj = Storage.get("GameStoreReportedGames");
if (obj == null) {
  const _Object = Object;
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
const map2 = new Map();
const HOUR = obj132Default.Millis.HOUR;
const set = new Set();
const set1 = new Set();
if (!obj132.isWindows()) {
  const _module1 = obj132;
  if (!_module1.isMac()) {
    const _module2 = obj132;
    let str3 = null;
    if (_module2.isLinux()) {
      str3 = "linux";
    }
  }
}
let closure_26 = Object.freeze([]);
const PersistedStore = initializeDefault.PersistedStore;
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
      closure_20 = blocklistPatterns.map((item, index) => {
        const regExp = new RegExp(item, "i");
        return regExp;
      });
    }
    const detectableGames = detectableGamesEtag.detectableGames;
    if (detectableGames != null) {
      const item = detectableGames.forEach((item, index) => {
        callback(item);
      });
    }
  }
};
prototype["getState"] = function getState() {
  obj = obj132;
  if (obj.isDesktop()) {
    obj = { detectableGamesEtag: null, detectableGames: null, blocklistEtag: null, blocklistExecutables: null, blocklistPatterns: null };
    obj[0] = c12;
    obj[1] = store.values();
    obj[2] = c18;
    obj[3] = closure_19;
    obj[4] = closure_20.map((item, index) => item.source);
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
    return store.values();
  },
  set: undefined
});
prototype["getDetectableGame"] = function getDetectableGame(id) {
  return store.get(DISCORD_EPOCHDefault.cast(id));
};
prototype["searchGamesByName"] = function searchGamesByName(name) {
  if (null == name) {
    return [];
  } else {
    const value = map.get(name.toLowerCase());
    if (undefined === value) {
      let items = [];
    } else {
      const _Array = Array;
      items = value;
      if (!Array.isArray(value)) {
        const items1 = [value];
        items = items1;
      }
    }
    return items;
  }
};
prototype["findGame"] = function findGame(nextResult) {
  const _require = nextResult;
  closure_1 = arg1;
  const self = this;
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
            const found = parts.filter(nextResult(dependencyMap[10]).isNotNullish);
            nextResult = found.pop();
            const executables = detectableGame.executables;
            if (executables.some((item, index) => item.name === closure_0)) {
              obj = { v: null };
              obj[0] = detectableGame;
              return obj;
            }
          }
        }
      }
      const iter = searchGamesByNameResult[Symbol.iterator]();
      while (iter !== undefined) {
        closure_4 = iter.next();
        let _loopResult = _loop();
        if (0 !== _loopResult) {
          if (tmp7) {
            iter.return();
            return _loopResult.v;
          }
        }
        continue;
      }
    }
    if (null != nextResult.exePath) {
      let parts = nextResult.exePath.split("/");
      let found = parts.filter(require("../utils/GlobalUtils.tsx").isNotNullish);
      const gameByExecutable = self.getGameByExecutable(found.pop());
      if (null != gameByExecutable) {
        return gameByExecutable;
      } else {
        const parts1 = nextResult.exePath.split("/");
        const found1 = parts1.filter(tmp15(1370).isNotNullish);
        const substr = found1.slice(-2);
        const gameByExecutable1 = self.getGameByExecutable(substr.join("/"));
        if (null != gameByExecutable1) {
          return gameByExecutable1;
        }
      }
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
        const found = linkedGames.find((item, index) => item.type === callback(table[11]).GameLinkTypes.OFFICIAL);
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
  const self = this;
  const detectableGame = this.getDetectableGame(id.id);
  if (null != detectableGame) {
    return detectableGame;
  } else {
    str = "none";
    if (null != id.linkedGames) {
      const linkedGames = id.linkedGames;
      for (const item10014 of linkedGames) {
        let detectableGame1 = self.getDetectableGame(item10014.id);
        if (null != detectableGame1) {
          str = "linked_game";
          tmp = detectableGame1;
          obj.return();
          break;
        }
        break;
      }
    }
    if (null == tmp) {
      const mapped = self.searchGamesByName(id.name).map((item, index) => self.getDetectableGame(item));
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
prototype["getGameByExecutable"] = function getGameByExecutable(arg0) {
  if (null != arg0) {
    const self = this;
    return this.getDetectableGame(map1.get(arg0));
  }
};
prototype["shouldBlock"] = function shouldBlock(exePath) {
  closure_0 = exePath;
  if (null != exePath.exePath) {
    if ("" !== exePath.exePath) {
      const self = this;
      closure_1 = exePath.exePath.toLowerCase();
      if (null != exePath.id) {
        if (null != str) {
          const detectableGame = self.getDetectableGame(exePath.id);
          if (null != detectableGame) {
            const executables = detectableGame.executables;
            if (executables.some((item, index) => {
              let endsWithResult = item.os === closure_1_25;
              if (endsWithResult) {
                endsWithResult = closure_1.endsWith(item.name.toLowerCase());
              }
              return endsWithResult;
            })) {
              return false;
            }
          }
        }
      }
      const found = closure_19.find((item, index) => closure_1.includes(item));
      if (null != found) {
        self.maybeTrackBlock(exePath, "explicit_list", found);
        return true;
      } else {
        const found1 = closure_20.find((item, index) => item.test(exePath.exePath));
        let flag = null != found1;
        if (flag) {
          self.maybeTrackBlock(exePath, "pattern_match", found1.source);
          flag = true;
        }
        return flag;
      }
    }
  }
  return false;
};
prototype["getBlockReason"] = function getBlockReason(exePath) {
  closure_0 = exePath;
  if (null != exePath.exePath) {
    if ("" !== exePath.exePath) {
      closure_1 = exePath.exePath.toLowerCase();
      const found = closure_19.find((item, index) => closure_1.includes(item));
      if (null != found) {
        obj = { matchedExe: null, matchedPattern: null };
        obj[0] = found;
        return obj;
      } else {
        const found1 = closure_20.find((item, index) => item.test(exePath.exePath));
        let tmp5 = null;
        if (null != found1) {
          obj = { matchedExe: null, matchedPattern: null };
          obj[1] = found1.source;
          tmp5 = obj;
        }
        return tmp5;
      }
    }
  }
  return null;
};
prototype["maybeTrackApplicationLookupFallthrough"] = function maybeTrackApplicationLookupFallthrough(id, name, id2) {
  id = id.id;
  obj = set;
  if (!set.has(id)) {
    obj.add(id);
    obj = { application_id: null, application_name: null, match_type: null, matched_game_id: null, matched_game_name: null };
    obj[0] = id;
    name = id.name;
    if (name == null) {
      name = null;
    }
    obj[1] = name;
    obj[2] = name;
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
    expandEventPropertiesDefault.track(AnalyticEvents.GAME_APPLICATION_LOOKUP_FALLTHROUGH, obj);
  }
};
prototype["trackNameMatchFallback"] = function trackNameMatchFallback(name, dependencyMap, exePath) {
  const formatted = name.toLowerCase();
  obj = set1;
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
    expandEventPropertiesDefault.track(AnalyticEvents.GAME_NAME_MATCH_FALLBACK, obj);
  }
};
prototype["maybeTrackBlock"] = function maybeTrackBlock(exePath, explicit_list, found) {
  const parts = exePath.exePath.split(/[/\\]/);
  let str2 = parts.pop();
  if (str2 == null) {
    str2 = "unknown";
  }
  obj = map2;
  const value = map2.get(str2);
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
    expandEventPropertiesDefault.track(AnalyticEvents.GAME_BLOCKLIST_TRIGGERED, obj);
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
    const ShowCurrentGame = explicitContentFromProto.ShowCurrentGame;
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
  const Storage = Storage2.Storage;
  const result = Storage.set(GameStoreReportedGames, obj);
};
DetectableGameStore.displayName = "GameStore";
DetectableGameStore.persistKey = "GameStore";
let items = [
  (arg0) => {
    if (null != arg0) {
      obj = { detectableGamesEtag: null, detectableGames: null };
      ({ detectableGamesEtag: obj2[0], detectableGames } = arg0);
      let mapped;
      if (detectableGames != null) {
        mapped = detectableGames.map((item, index) => {
          const detectableGameRecord = new callback(table[7]).DetectableGameRecord(item);
          ({ executables, aliases, thirdPartySkus } = detectableGameRecord);
          obj = { id: detectableGameRecord.id, name: detectableGameRecord.name, executables: null, aliases: null, thirdPartySkus: null };
          if (null == executables) {
            executables = closure_26;
          }
          obj[2] = executables;
          if (null == aliases) {
            aliases = closure_26;
          }
          obj[3] = aliases;
          if (null == thirdPartySkus) {
            thirdPartySkus = closure_26;
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
    obj = obj132;
    if (!obj.isDesktop()) {
      obj = { detectableGamesEtag: "", detectableGames: null };
      obj[1] = [];
      tmp = obj;
    }
    return tmp;
  },
  () => ({ detectableGamesEtag: "", detectableGames: [] }),
  (blocklistEtag) => {
    obj = {};
    const merged = Object.assign(blocklistEtag);
    str = blocklistEtag.blocklistEtag;
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
    store.clear();
    map.clear();
    map1.clear();
    while (tmp4 !== undefined) {
      let tmp7 = addDetectableGame(tmp5);
      continue;
    }
    tmp4 = arg0.detectableApplications[Symbol.iterator]();
  },
  GAMES_DATABASE_FETCH: function handleApplicationsFetch() {
    c13 = true;
  },
  GAMES_DATABASE_FETCH_FAIL: function handleApplicationsFetchFail() {
    c13 = false;
    c15 = true;
  },
  GAMES_DATABASE_UPDATE: function handleDetectableGamesUpdated(arg0) {
    ({ games, etag } = arg0);
    let tmp = null != etag;
    if (tmp) {
      tmp = etag !== etag;
    }
    if (tmp) {
      store.clear();
      map.clear();
      map1.clear();
    }
    while (tmp9 !== undefined) {
      let tmp13 = addDetectableGame(gameFromServer(tmp10));
      continue;
    }
    c13 = undefined;
    closure_14 = Date.now();
    c15 = true;
    tmp9 = games[Symbol.iterator]();
  },
  GAMES_BLOCKLIST_FETCH: function handleGamesBlocklistFetch() {
    c17 = true;
  },
  GAMES_BLOCKLIST_FETCH_FAIL: function handleGamesBlocklistFetchFail() {
    c17 = false;
  },
  GAMES_BLOCKLIST_UPDATE: function handleGamesBlocklistUpdated(arg0) {
    ({ executables, patterns, etag } = arg0);
    let tmp = null != etag;
    if (tmp) {
      tmp = etag !== etag;
    }
    if (tmp) {
      closure_19 = executables.map((item, index) => item.toLowerCase());
      closure_20 = patterns.map((item, index) => {
        const regExp = new RegExp(item, "i");
        return regExp;
      });
    }
    c17 = false;
    closure_16 = Date.now();
  }
};
const detectableGameStore = new DetectableGameStore(dispatcherDefault, obj);
let result = obj132.fileFinishedImporting("stores/DetectableGameStore.tsx");

export default detectableGameStore;
export { gameFromServer };