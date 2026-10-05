// discord_app/modules/game_community_upsell/native/MobileGameCommunitiesActionCreators.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import Constants from "../../../Constants.tsx";
import DurationsDefault from "../../../utils/Durations.tsx";
import HTTPUtils from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import _modDef1478 from "../../../../_runtime/metro/01478__.js";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import LocalAppDetectionStore from "../../local_app_detection/native/LocalAppDetectionStore.tsx";
import MobileGameCommunitiesStore from "MobileGameCommunitiesStore.tsx";
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c0, c1, c2, c3;

let obj = function _fetchDetectedGameCommunities() {
  let dismissedGuildIds;
  obj = _asyncToGenerator(async () => {
    let obj4;
    let stringify;
    function getDetectedGameIds() {
      obj = {};
      const ALL_DETECTABLE_APP_NAMES = gameIds(closure_1_2[4]).ALL_DETECTABLE_APP_NAMES;
      for (const item10010 of ALL_DETECTABLE_APP_NAMES) {
        obj[item10010] = appInstalled.isAppInstalled(item10010);
        continue;
      }
      const obj2 = gameIds(closure_1_2[5]);
      return obj2.getGameIdsForDetectedGames(obj);
    }
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let guilds;
        let gameIds;
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp2;
            guilds = undefined;
            const tmp17 = getDetectedGameIds();
            gameIds = tmp17;
            const HTTP = HTTPUtils.HTTP;
            const request = {
              url: constants.MOBILE_GAME_COMMUNITIES,
              query: stringify(obj4),
              oldFormErrors: true,
              rejectWithError: true,
            };
            const get = HTTP.get;
            obj4 = {
              game_ids: tmp17,
              limit: 20,
              ignored_guild_ids: Array.from(dismissedGuildIds.getDismissedGuildIds()),
            };
            const _Array = Array;
            stringify = _modDef1478.stringify;
            c2 = 1;
            c3 = 1;
            const obj5 = { value: get(request), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          guilds = value.body.guilds;
          obj = closure_129_1(closure_129_2[8]);
          const obj7 = { type: "MOBILE_GAME_COMMUNITIES_FETCH_SUCCESS", guilds, gameIds };
          obj.dispatch(obj7);
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp13) {
        c3 = 3;
        throw tmp13;
      }
    }
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
obj = {
  getQueryId(arg0) {
    let str = null;
    if (arg0) {
      str = "mobile-game-communities";
    }
    return str;
  },
  get() {
    return MobileGameCommunitiesStore.getPresentableUpsellGuilds();
  },
  load: function () {
    return closure_8(...arguments);
  },
  staleAfter: DurationsDefault.Seconds.DAY,
  failureStaleAfter: DurationsDefault.Seconds.MINUTE,
};
const createFetchStore = get_initialized.createFetchStore;
let closure_8 = _asyncToGenerator(async () => {
  function fetchDetectedGameCommunities() {
    return closure_1_7(...arguments);
  }
  if (c0 === 2) {
    c0 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp2 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c0 = 2;
      if (0 === c1) {
        if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          const _Date = Date;
          const timestamp = Date.now();
          if (timestamp - MobileGameCommunitiesStore.getLastFetchedAt() >= 86400000) {
            c1 = 1;
            c0 = 1;
            const obj4 = { value: fetchDetectedGameCommunities(), done: false };
            return obj4;
          }
        }
      } else if (arg0 === 1) {
        c0 = 3;
        throw value;
      } else if (arg0 === 2) {
        c0 = 3;
        obj = { value, done: true };
        return obj;
      }
      c0 = 3;
      return { value: "IconComponent", done: null };
    } catch (tmp7) {
      c0 = 3;
      throw tmp7;
    }
  }
});
const fetchStore = createFetchStore(MobileGameCommunitiesStore, obj);
const result = size.fileFinishedImporting(
  "modules/game_community_upsell/native/MobileGameCommunitiesActionCreators.tsx",
);

export const useMobileGameCommunities = fetchStore;
export const dismissGuild = function dismissGuild(guildId) {
  obj = DispatcherDefault;
  const obj2 = { type: "MOBILE_GAME_COMMUNITIES_DISMISS_GUILD", guildId };
  obj.dispatch(obj2);
};
