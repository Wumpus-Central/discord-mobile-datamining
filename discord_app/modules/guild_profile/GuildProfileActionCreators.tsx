// === Module 9229: GuildProfileActionCreators ===

// Module 9229 (GuildProfileActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import V6OrEarlierAPIError from "V6OrEarlierAPIError" /* 5312 */;
import GuildProfileBuilders from "GuildProfileBuilders" /* 5938 */;
import GuildProfileStore2 from "GuildProfileStore" /* 9227 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4700 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const GuildProfileStore = GuildProfileStore2;
let _require, closure_1, closure_2;

let c9;
let metroImportAll;
let obj = function _fetchGuildTopGames() {
  obj = _asyncToGenerator(async (arg0) => {
    let body = arg0;
    let c3 = 0;
    let c4 = 0;
    return (async (arg0) => {
      let obj8;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              closure_1 = tmp4;
              body = undefined;
              const HTTP = require("HTTPUtils").HTTP;
              const get = HTTP.get;
              const obj4 = { url: closure_2_9.GUILD_TOP_GAMES(body), rejectWithError: obj8.rejectWithMigratedError() };
              c3 = 1;
              c4 = 1;
              obj8 = require("HTTPUtils");
              const obj5 = { value: get(obj4), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            body = value;
            c4 = 3;
            const obj7 = { value: obj.buildTopGamesFromServer(body.body.top_games), done: true };
            obj = closure_130_0(closure_130_2[7]);
            return obj7;
          }
        } catch (tmp10) {
          c4 = 3;
          throw tmp10;
        }
      }
    })();
  });
  return obj(...arguments);
};
const GuildProfileFetchStatus = GuildProfileStore2.GuildProfileFetchStatus;
({ AnalyticEvents: metroImportAll, Endpoints: c9 } = Constants);
const result = size.fileFinishedImporting("modules/guild_profile/GuildProfileActionCreators.tsx");

export const getGuildProfile = function getGuildProfile(guildId, arg1, arg2) {
  let obj5;
  _require = guildId;
  obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  let flag = obj.respectBackoff;
  if (flag === undefined) {
    flag = false;
  }
  if (null == guildId) {
    return Promise.resolve(null);
  } else {
    let resolved;
    const fetchStatus = GuildProfileStore.getFetchStatus(guildId);
    const FETCHING = GuildProfileFetchStatus.FETCHING;
    let num = GuildProfileStore.getLastSyncTimestamp(guildId);
    const profile = GuildProfileStore.getProfile(guildId);
    const _Date2 = Date;
    const timestamp = Date.now();
    if (num == null) {
      num = 0;
    }
    const diff = timestamp - num;
    const nextFetchAllowedAt = GuildProfileStore.getNextFetchAllowedAt(guildId);
    if (flag) {
      if (null != nextFetchAllowedAt) {
        const _Date = Date;
        if (Date.now() < nextFetchAllowedAt) {
          resolved = Promise.resolve(profile);
        }
        return resolved;
      }
    }
    if (fetchStatus === FETCHING) {
      if (!arg1) {
        resolved = Promise.resolve(null);
      }
    }
    if (null != profile) {
      if (diff <= 60000) {
        let resolved1;
        if (!arg1) {
          resolved1 = Promise.resolve(profile);
        }
        resolved = resolved1;
      }
    }
    let obj2 = DispatcherDefault;
    let obj3 = { type: "GUILD_PROFILE_FETCH", guildId };
    obj2.dispatch(obj3);
    const HTTP = require("HTTPUtils").HTTP;
    const get = HTTP.get;
    const obj4 = { url: closure_9.GUILD_PROFILE(guildId), rejectWithError: obj5.rejectWithMigratedError() };
    obj5 = require("HTTPUtils");
    const value = get(obj4);
    const nextPromise = value.then((body) => {
      obj = GuildProfileBuilders;
      const guildProfileFromServer = obj.buildGuildProfileFromServer(body.body);
      const obj2 = DispatcherDefault;
      const obj3 = { type: "GUILD_PROFILE_FETCH_SUCCESS", guildId, profile: guildProfileFromServer };
      obj2.dispatch(obj3);
      return guildProfileFromServer;
    });
    resolved1 = nextPromise.catch((error) => {
      const aPIError = new V6OrEarlierAPIError.APIError(error);
      obj = DispatcherDefault;
      const obj2 = { type: "GUILD_PROFILE_FETCH_FAILURE", guildId, error: aPIError };
      obj.dispatch(obj2);
      return null;
    });
  }
};
export const saveGuildProfile = function saveGuildProfile(guildId, updates) {
  let obj4;
  let obj5;
  let resolved;
  _require = guildId;
  if (GuildProfileStore.getIsUpdating(guildId)) {
    resolved = Promise.resolve(null);
  } else {
    obj = DispatcherDefault;
    let obj2 = { type: "GUILD_PROFILE_UPDATE", guildId, updates };
    obj.dispatch(obj2);
    const HTTP = require("HTTPUtils").HTTP;
    const request = { url: closure_9.GUILD_PROFILE(guildId), body: obj4.buildGuildProfileUpdateForServer(updates), rejectWithError: obj5.rejectWithMigratedError() };
    const patch = HTTP.patch;
    obj4 = require("GuildProfileBuilders");
    obj5 = require("HTTPUtils");
    const patchResult = patch(request);
    const nextPromise = patchResult.then((body) => {
      obj = GuildProfileBuilders;
      const guildProfileFromServer = obj.buildGuildProfileFromServer(body.body);
      const obj2 = DispatcherDefault;
      const obj3 = { type: "GUILD_PROFILE_UPDATE_SUCCESS", guildId, profile: guildProfileFromServer };
      obj2.dispatch(obj3);
      return guildProfileFromServer;
    });
    resolved = nextPromise.catch((error) => {
      const aPIError = new V6OrEarlierAPIError.APIError(error);
      obj = DispatcherDefault;
      const obj2 = { type: "GUILD_PROFILE_UPDATE_FAILURE", guildId, error: aPIError };
      obj.dispatch(obj2);
      return null;
    });
  }
  return resolved;
};
export const setGuildProfileVisibility = function setGuildProfileVisibility(guildId, visibility) {
  let obj3;
  let obj5;
  let resolved;
  _require = guildId;
  if (GuildProfileStore.getIsUpdating(guildId)) {
    resolved = Promise.resolve(null);
  } else {
    obj = DispatcherDefault;
    let obj2 = { type: "GUILD_PROFILE_UPDATE_VISIBILITY", guildId, visibility };
    obj.dispatch(obj2);
    const HTTP = require("HTTPUtils").HTTP;
    const request = { url: closure_9.GUILD_PROFILE_VISIBILITY(guildId), body: obj3, rejectWithError: obj5.rejectWithMigratedError() };
    const put = HTTP.put;
    obj3 = { visibility };
    obj5 = require("HTTPUtils");
    const putResult = put(request);
    const nextPromise = putResult.then((body) => {
      const visibility = body.body.visibility;
      obj = DispatcherDefault;
      const obj2 = { type: "GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS", guildId, visibility };
      obj.dispatch(obj2);
      return visibility;
    });
    resolved = nextPromise.catch((error) => {
      const aPIError = new V6OrEarlierAPIError.APIError(error);
      obj = DispatcherDefault;
      const obj2 = { type: "GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE", guildId, error: aPIError };
      obj.dispatch(obj2);
      throw aPIError;
    });
  }
  return resolved;
};
export const fetchGuildTopGames = function fetchGuildTopGames() {
  return obj(...arguments);
};
export const trackGuildProfileViewed = function trackGuildProfileViewed(guildId, analyticsLocations) {
  const tmp = null != GuildMemberStore.getSelfMember(guildId);
  const tmp2 = null != UserGuildJoinRequestStore.getRequest(guildId);
  obj = AnalyticsUtilsDefault;
  const obj2 = { guild_id: guildId, location_stack: analyticsLocations, is_member: tmp, has_join_request: tmp2 };
  obj.track(metroImportAll.GUILD_PROFILE_VIEWED, obj2);
};