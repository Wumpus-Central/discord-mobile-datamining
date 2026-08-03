import MobileLurkerServerPreviewExperiment from "MobileLurkerServerPreviewExperiment";
import createRTCConnection from "createRTCConnection";
import handleConnectionOpen from "handleConnectionOpen";
import initialize from "initialize";
import "initialize";

const require = arg1;
class LurkerPreviewManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    f105105 = applyArgumentsResult;
    map = new Map();
    applyArgumentsResult.timers = map;
    set = new Set();
    applyArgumentsResult.viewedLurkingGuildIds = set;
    set1 = new Set();
    applyArgumentsResult.navigatedAwayFromLurkingGuildIds = set1;
    applyArgumentsResult.handleStoreChange = function handleStoreChange() {
      const result = lib.trackViewedLurkingGuilds();
      const result1 = lib.evictOverflowingLurkers();
      const result2 = lib.ensureMissingExpiries();
      lib.expireElapsed();
      lib.syncTimers();
    };
    applyArgumentsResult.trackViewedLurkingGuilds = function trackViewedLurkingGuilds() {
      const set = new Set(outer1_6.lurkingGuildIds());
      let arr = Array.from(lib.viewedLurkingGuildIds);
      for (const item10021 of arr) {
        let tmp2 = item10021;
        if (!set.has(item10021)) {
          let tmp3 = lib;
          let viewedLurkingGuildIds = lib.viewedLurkingGuildIds;
          let tmp4 = item10021;
          let deleteResult = viewedLurkingGuildIds.delete(tmp2);
        }
        continue;
      }
      arr = Array.from(lib.navigatedAwayFromLurkingGuildIds);
      for (const item10040 of arr) {
        let tmp7 = item10040;
        if (!set.has(item10040)) {
          let tmp8 = lib;
          let navigatedAwayFromLurkingGuildIds = lib.navigatedAwayFromLurkingGuildIds;
          let tmp9 = item10040;
          let deleteResult1 = navigatedAwayFromLurkingGuildIds.delete(tmp7);
        }
        continue;
      }
      const guildId = outer1_5.getGuildId();
      for (const item10059 of tmp12) {
        if (item10059 !== guildId) {
          let tmp14 = lib;
          let navigatedAwayFromLurkingGuildIds2 = lib.navigatedAwayFromLurkingGuildIds;
          let tmp15 = item10059;
          let addResult = navigatedAwayFromLurkingGuildIds2.add(tmp13);
        }
        continue;
      }
      if (tmp17) {
        const viewedLurkingGuildIds2 = lib.viewedLurkingGuildIds;
        viewedLurkingGuildIds2.add(guildId);
      }
    };
    applyArgumentsResult.evictOverflowingLurkers = function evictOverflowingLurkers() {
      const lurkingGuildIdsResult = outer1_6.lurkingGuildIds();
      if (lurkingGuildIdsResult.length > 3) {
        if (obj.getMobileLurkerServerPreview("LurkerPreviewManager.evictOverflowingLurkers").stickyLurk) {
          lib.expireLurkerPreviews(lurkingGuildIdsResult.slice(0, lurkingGuildIdsResult.length - 3));
        }
        obj = lib(outer1_2[5]);
      }
    };
    applyArgumentsResult.ensureMissingExpiries = function ensureMissingExpiries() {
      let obj = outer1_6;
      const lurkingGuildIdsResult = outer1_6.lurkingGuildIds();
      if (0 !== lurkingGuildIdsResult.length) {
        const lib = obj.getLurkingPreviewExpirations();
        const guildId = outer1_5.getGuildId();
        const found = lurkingGuildIdsResult.filter((arg0) => {
          let hasItem = null == obj[arg0];
          if (hasItem) {
            hasItem = arg0 !== closure_1;
          }
          if (hasItem) {
            const viewedLurkingGuildIds = obj.viewedLurkingGuildIds;
            hasItem = viewedLurkingGuildIds.has(arg0);
          }
          return hasItem;
        });
        let stickyLurk = 0 !== found.length;
        if (stickyLurk) {
          stickyLurk = lib(outer1_2[5]).getMobileLurkerServerPreview("LurkerPreviewManager.ensureMissingExpiries").stickyLurk;
          const obj2 = lib(outer1_2[5]);
        }
        if (stickyLurk) {
          obj = { type: "LURKER_PREVIEW_SET_EXPIRY", guildIds: null, expiresAt: null };
          obj[1] = found;
          const _Date = Date;
          obj[2] = Date.now() + 60000;
          outer1_1(outer1_2[6]).dispatch(obj);
          const obj3 = outer1_1(outer1_2[6]);
        }
      }
    };
    applyArgumentsResult.expireElapsed = function expireElapsed() {
      const lurkingPreviewExpirations = outer1_6.getLurkingPreviewExpirations();
      const guildId = outer1_5.getGuildId();
      const guildId1 = outer1_4.getGuildId();
      const items = [];
      const timestamp = Date.now();
      const keys = Object.keys(lurkingPreviewExpirations);
      for (const item10022 of keys) {
        let tmp6 = item10022;
        let tmp7 = item10022 !== guildId;
        if (tmp7) {
          let tmp8 = item10022;
          tmp7 = tmp6 !== guildId1;
        }
        if (tmp7) {
          let tmp9 = item10022;
          tmp7 = lurkingPreviewExpirations[tmp6] <= timestamp;
        }
        if (tmp7) {
          let tmp10 = item10022;
          let arr = items.push(tmp6);
        }
        continue;
      }
      if (items.length > 0) {
        lib.expireLurkerPreviews(items);
      }
    };
    applyArgumentsResult.syncTimers = function syncTimers() {
      const lurkingPreviewExpirations = outer1_6.getLurkingPreviewExpirations();
      let timers = lib.timers;
      const iter = Array.from(timers.keys())[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp4 = nextResult;
        if (null == lurkingPreviewExpirations[nextResult]) {
          let timers2 = lib.timers;
          let tmp7 = nextResult;
          let tmp5 = lib;
          let tmp6 = lib;
          let value = timers2.get(tmp4);
          if (null != value) {
            let _clearTimeout = clearTimeout;
            let tmp10 = value;
            let clearTimeoutResult = clearTimeout(tmp9);
          }
          let tmp12 = tmp5;
          let timers3 = tmp6.timers;
          let tmp13 = nextResult;
          let deleteResult = timers3.delete(tmp4);
        }
        continue;
      }
      function _loop(iter2) {
        let timers = iter2;
        timers = timers.timers;
        if (timers.has(iter2)) {
          return 0;
        } else {
          const _Date = Date;
          if (lurkingPreviewExpirations[iter2] <= Date.now()) {
            return 0;
          } else {
            const _Date2 = Date;
            const _setTimeout = setTimeout;
            const timers2 = tmp.timers;
            const result = timers2.set(iter2, setTimeout(() => {
              const timers = iter2.timers;
              timers.delete(iter2);
              iter2.handleStoreChange();
            }, tmp3 - Date.now()));
          }
        }
        tmp = timers;
      }
      const keys = Object.keys(lurkingPreviewExpirations);
      const iter2 = keys[Symbol.iterator]();
      while (iter2 !== undefined) {
        let _loopResult = _loop(iter2.next());
        continue;
      }
    };
    f105105 = undefined;
    f105105 = MobileLurkerServerPreviewExperiment((arg0) => {
      let closure_0 = arg0;
      let c2 = 0;
      let c1 = 0;
      return (function*(arg0) {
        if (c1 === 2) {
          c1 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c1 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c1 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c1 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                c2 = 1;
                c1 = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = Promise.all(closure_0.map((closure_0) => callback(table[7]).stopLurkingForGuild(closure_0)));
                return obj1;
              }
            } else if (arg0 === 1) {
              c1 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c1 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c1 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp7) {
            c1 = tmp;
            throw tmp7;
          }
        }
      })();
    });
    applyArgumentsResult.expireLurkerPreviews = function(arg0) {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    return applyArgumentsResult;
  }
}
const prototype = LurkerPreviewManager.prototype;
prototype["hasNavigatedAway"] = function hasNavigatedAway(arg0) {
  const navigatedAwayFromLurkingGuildIds = this.navigatedAwayFromLurkingGuildIds;
  return navigatedAwayFromLurkingGuildIds.has(arg0);
};
prototype["_initialize"] = function _initialize() {
  initialize.addChangeListener(this.handleStoreChange);
  handleConnectionOpen.addChangeListener(this.handleStoreChange);
  createRTCConnection.addChangeListener(this.handleStoreChange);
  this.handleStoreChange();
};
prototype["_terminate"] = function _terminate() {
  const self = this;
  initialize.removeChangeListener(this.handleStoreChange);
  handleConnectionOpen.removeChangeListener(this.handleStoreChange);
  createRTCConnection.removeChangeListener(this.handleStoreChange);
  const timers = this.timers;
  const values = timers.values();
  while (tmp5 !== undefined) {
    let _clearTimeout = clearTimeout;
    let clearTimeoutResult = clearTimeout(tmp6);
    continue;
  }
  const timers2 = self.timers;
  timers2.clear();
  const viewedLurkingGuildIds = self.viewedLurkingGuildIds;
  viewedLurkingGuildIds.clear();
  const navigatedAwayFromLurkingGuildIds = self.navigatedAwayFromLurkingGuildIds;
  navigatedAwayFromLurkingGuildIds.clear();
};
const lurkerPreviewManager = new LurkerPreviewManager();
let result = require("handleConnectionOpen").fileFinishedImporting("modules/lurker_mode/LurkerPreviewManager.tsx");

export default lurkerPreviewManager;
export const LURKER_PREVIEW_PERSIST_MS = 60000;
export const LURKER_PREVIEW_MAX_CONCURRENT = 3;