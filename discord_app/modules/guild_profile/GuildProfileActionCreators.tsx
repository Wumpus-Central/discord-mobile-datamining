// === Module 9188: GuildProfileActionCreators ===

// Module 9188 (GuildProfileActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import V6OrEarlierAPIError from "V6OrEarlierAPIError" /* 4461 */;
import GuildProfileBuilders from "GuildProfileBuilders" /* 5548 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4382 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import GuildProfileStore from "GuildProfileStore" /* 9065 */;

require = fn;
let closure_10 = async function _fetchGuildTopGames() {
  closure_2 = tmp2;
  closure_1 = tmp5;
  const HTTP = require("HTTPUtils").HTTP;
  closure_129_0 = await HTTP.get({ url: closure_2_9.GUILD_TOP_GAMES(closure_0), rejectWithError: require("HTTPUtils").rejectWithMigratedError() });
  { url: React7.GUILD_TOP_GAMES(closure_0), rejectWithError: require("HTTPUtils").rejectWithMigratedError() };
  return closure_130_0(closure_130_2[7]).buildTopGamesFromServer(closure_129_0.body.top_games);
};
const GuildProfileFetchStatus = fn(9065).GuildProfileFetchStatus;
const Constants = fn(1074);
({ AnalyticEvents: closure_8, Endpoints: closure_9 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_profile/GuildProfileActionCreators.tsx");

export const getGuildProfile = function getGuildProfile(guildId, arg1) {
  _require = guildId;
  let obj = arg2;
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
    const fetchStatus = GuildProfileStore.getFetchStatus(guildId);
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
          let resolved = Promise.resolve(profile);
        }
        return resolved;
      }
    }
    if (fetchStatus === GuildProfileFetchStatus.FETCHING) {
      if (!arg1) {
        resolved = Promise.resolve(null);
      }
    }
    if (null != profile) {
      if (diff <= 60000) {
        if (!arg1) {
          let resolved1 = Promise.resolve(profile);
        }
      }
    }
    obj = { type: "GUILD_PROFILE_FETCH", guildId };
    DispatcherDefault.dispatch(obj);
    const HTTP = require("HTTPUtils").HTTP;
    obj = { url: closure_9.GUILD_PROFILE(guildId), rejectWithError: null };
    obj.rejectWithError = require("HTTPUtils").rejectWithMigratedError();
    value = HTTP.get(obj);
    const obj5 = require("HTTPUtils");
    resolved1 = value.then((body) => {
      let obj = GuildProfileBuilders;
      const guildProfileFromServer = obj.buildGuildProfileFromServer(body.body);
      obj = { type: "GUILD_PROFILE_FETCH_SUCCESS", guildId, profile: guildProfileFromServer };
      DispatcherDefault.dispatch(obj);
      return guildProfileFromServer;
    }).catch((error) => {
      const aPIError = new V6OrEarlierAPIError.APIError(error);
      const obj = { type: "GUILD_PROFILE_FETCH_FAILURE", guildId, error: aPIError };
      obj.dispatch(obj);
      return null;
    });
    const nextPromise = value.then((body) => {
      let obj = GuildProfileBuilders;
      const guildProfileFromServer = obj.buildGuildProfileFromServer(body.body);
      obj = { type: "GUILD_PROFILE_FETCH_SUCCESS", guildId, profile: guildProfileFromServer };
      DispatcherDefault.dispatch(obj);
      return guildProfileFromServer;
    });
  }
};
export const saveGuildProfile = function saveGuildProfile(guildId, updates) {
  _require = guildId;
  if (GuildProfileStore.getIsUpdating(guildId)) {
    let resolved = Promise.resolve(null);
  } else {
    let obj = { type: "GUILD_PROFILE_UPDATE", guildId, updates };
    obj.dispatch(obj);
    const HTTP = require("HTTPUtils").HTTP;
    const request = { url: closure_9.GUILD_PROFILE(guildId), body: require("GuildProfileBuilders").buildGuildProfileUpdateForServer(updates), rejectWithError: null };
    const obj4 = require("GuildProfileBuilders");
    request.rejectWithError = require("HTTPUtils").rejectWithMigratedError();
    const obj5 = require("HTTPUtils");
    const patchResult = HTTP.patch(request);
    resolved = HTTP.patch(request).then((body) => {
      let obj = GuildProfileBuilders;
      const guildProfileFromServer = obj.buildGuildProfileFromServer(body.body);
      obj = { type: "GUILD_PROFILE_UPDATE_SUCCESS", guildId, profile: guildProfileFromServer };
      DispatcherDefault.dispatch(obj);
      return guildProfileFromServer;
    }).catch((error) => {
      const aPIError = new V6OrEarlierAPIError.APIError(error);
      const obj = { type: "GUILD_PROFILE_UPDATE_FAILURE", guildId, error: aPIError };
      obj.dispatch(obj);
      return null;
    });
    const nextPromise = HTTP.patch(request).then((body) => {
      let obj = GuildProfileBuilders;
      const guildProfileFromServer = obj.buildGuildProfileFromServer(body.body);
      obj = { type: "GUILD_PROFILE_UPDATE_SUCCESS", guildId, profile: guildProfileFromServer };
      DispatcherDefault.dispatch(obj);
      return guildProfileFromServer;
    });
  }
  return resolved;
};
export const setGuildProfileVisibility = function setGuildProfileVisibility(guildId, visibility) {
  _require = guildId;
  if (GuildProfileStore.getIsUpdating(guildId)) {
    let resolved = Promise.resolve(null);
  } else {
    let obj = { type: "GUILD_PROFILE_UPDATE_VISIBILITY", guildId, visibility };
    obj.dispatch(obj);
    const HTTP = require("HTTPUtils").HTTP;
    const request = { url: closure_9.GUILD_PROFILE_VISIBILITY(guildId), body: null, rejectWithError: null };
    obj = { visibility };
    request.body = obj;
    request.rejectWithError = require("HTTPUtils").rejectWithMigratedError();
    const obj5 = require("HTTPUtils");
    const putResult = HTTP.put(request);
    resolved = HTTP.put(request).then((body) => {
      const visibility = body.body.visibility;
      const obj = { type: "GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS", guildId, visibility };
      obj.dispatch(obj);
      return visibility;
    }).catch((error) => {
      const aPIError = new V6OrEarlierAPIError.APIError(error);
      const obj = { type: "GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE", guildId, error: aPIError };
      obj.dispatch(obj);
      throw aPIError;
    });
    const nextPromise = HTTP.put(request).then((body) => {
      const visibility = body.body.visibility;
      const obj = { type: "GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS", guildId, visibility };
      obj.dispatch(obj);
      return visibility;
    });
  }
  return resolved;
};
export const fetchGuildTopGames = function fetchGuildTopGames() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const trackGuildProfileViewed = function trackGuildProfileViewed(guildId, analyticsLocations) {
  const tmp = null != GuildMemberStore.getSelfMember(guildId);
  const obj = { guild_id: guildId, location_stack: analyticsLocations, is_member: tmp, has_join_request: null != UserGuildJoinRequestStore.getRequest(guildId) };
  obj.track(constants.GUILD_PROFILE_VIEWED, obj);
};