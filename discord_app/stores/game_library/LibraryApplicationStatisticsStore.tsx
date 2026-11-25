// === Module 14958: LibraryApplicationStatisticsStore ===

// Module 14958 (LibraryApplicationStatisticsStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1071 */;
import size from "module_2" /* 2 */;

const Distributors = Constants.Distributors;
const dependencyMap = {};
let c2 = null;
let c3 = false;
const Store = initializeDefault.Store;
class LibraryApplicationStatisticsStore extends Store {
}
const prototype = LibraryApplicationStatisticsStore.prototype;
Object.defineProperty(prototype, "applicationStatistics", {
  get: function applicationStatistics() {
    return closure_1;
  },
  set: undefined
});
Object.defineProperty(prototype, "lastFetched", {
  get: function lastFetched() {
    return c2;
  },
  set: undefined
});
Object.defineProperty(prototype, "hasFetchFailed", {
  get: function hasFetchFailed() {
    return c3;
  },
  set: undefined
});
prototype["getGameDuration"] = function getGameDuration(item) {
  let num = 0;
  if (null != dependencyMap[item]) {
    num = tmp.total_duration;
  }
  return num;
};
prototype["getLastPlayedDateTime"] = function getLastPlayedDateTime(item) {
  let time = null;
  if (null != dependencyMap[item]) {
    const _Date = Date;
    const date = new Date(tmp.last_played_at);
    time = date.getTime();
  }
  return time;
};
prototype["hasApplicationStatistic"] = function hasApplicationStatistic(arg0) {
  return null != dependencyMap[arg0];
};
prototype["getCurrentUserStatisticsForApplication"] = function getCurrentUserStatisticsForApplication(arg0) {
  return dependencyMap[arg0];
};
prototype["getQuickSwitcherScoreForApplication"] = function getQuickSwitcherScoreForApplication(arg0) {
  let num = 0;
  if (null != dependencyMap[arg0]) {
    const _Date = Date;
    const _Date2 = Date;
    const timestamp = Date.now();
    const date = new Date(tmp.last_played_at);
    const _Math = Math;
    const rounded = Math.floor((timestamp - date.getTime()) / 86400000);
    const _Math2 = Math;
    const rounded1 = Math.floor(1000 * tmp.total_duration / 3600000);
    let num6 = 50;
    if (0 !== rounded) {
      if (rounded < 1) {
        if (rounded < 2) {
          if (rounded < 4) {
            num6 = 0;
            if (rounded >= 7) {
              num6 = 10;
            }
          } else {
            num6 = 20;
          }
        } else {
          num6 = 30;
        }
      } else {
        num6 = 40;
      }
    }
    if (0 === rounded1) {
      num = num6;
    } else {
      if (rounded1 >= 1) {
        if (rounded1 < 12) {
          num = num6 + 10;
        }
      }
      if (rounded1 >= 12) {
        if (rounded1 < 168) {
          num = num6 + 20;
        }
      }
      if (rounded1 >= 168) {
        if (rounded1 < 720) {
          num = num6 + 40;
        }
      }
      num = num6;
      if (rounded1 >= 720) {
        num = num6 + 50;
      }
    }
  }
  return num;
};
LibraryApplicationStatisticsStore.displayName = "LibraryApplicationStatisticsStore";
const libraryApplicationStatisticsStore = new LibraryApplicationStatisticsStore(DispatcherDefault, {
  USER_ACTIVITY_STATISTICS_FETCH_SUCCESS: function handleCurrentUserStatisticFetch(statistics) {
    statistics = statistics.statistics;
    const item = statistics.forEach((application_id) => {
      dependencyMap[application_id.application_id] = application_id;
    });
    c2 = Date.now();
    c3 = false;
  },
  USER_ACTIVITY_STATISTICS_FETCH_FAIL: function handleCurrentUserStatisticFetchFail() {
    c3 = true;
  },
  ACTIVITY_UPDATE_START: function handleActivityUpdate(distributor) {
    ({ duration, applicationId } = distributor);
    let num = 0;
    let num2 = 0;
    const date = new Date();
    if (null != dependencyMap[applicationId]) {
      ({ total_discord_sku_duration, total_duration } = tmp);
      if (total_discord_sku_duration == null) {
        total_discord_sku_duration = 0;
      }
      num = total_discord_sku_duration;
      num2 = total_duration;
    }
    let sum1 = num;
    const sum = num2 + duration;
    if (distributor.distributor === Distributors.DISCORD) {
      sum1 = num + duration;
    }
    dependencyMap[applicationId] = { application_id: applicationId, total_duration: sum, last_played_at: new Date().toISOString(), total_discord_sku_duration: sum1 };
  },
  LOGOUT: function resetStore() {
    closure_1 = {};
    c2 = null;
    c3 = false;
  }
});
const result = size.fileFinishedImporting("stores/game_library/LibraryApplicationStatisticsStore.tsx");

export default libraryApplicationStatisticsStore;