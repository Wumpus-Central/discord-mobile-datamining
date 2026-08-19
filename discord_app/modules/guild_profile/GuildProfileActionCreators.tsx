// === Module 8856: _fetchGuildTopGames ===

// Module 8856 (_fetchGuildTopGames)
import sendRequest from "sendRequest" /* 530 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import getEmoji from "getEmoji" /* 6907 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import handleGatewayJoinRequestUpdate from "handleGatewayJoinRequestUpdate" /* 4198 */;
import trackCommunicationDisabled from "trackCommunicationDisabled" /* 1990 */;
import handleUpdateStart from "handleUpdateStart" /* 8854 */;
import { GuildProfileFetchStatus } from "handleUpdateStart" /* 8854 */;
import ME from "ME" /* 676 */;

const require = fn;
function _fetchGuildTopGames() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    return (function*(arg0) {
      const table = tmp2;
      closure_1 = tmp5;
      const HTTP = lib(closure_1_2[6]).HTTP;
      obj1 = { url: null, rejectWithError: null };
      obj1[0] = closure_1_9.GUILD_TOP_GAMES(lib);
      obj1[1] = lib(closure_1_2[6]).rejectWithMigratedError();
      lib = yield HTTP.get(obj1);
      const obj = lib(table[7]);
      return obj.buildTopGamesFromServer(lib.body.top_games);
    })();
  });
  closure_10 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ AnalyticEvents: closure_8, Endpoints: c9 } = ME);
const result = require("obj132").fileFinishedImporting("modules/guild_profile/GuildProfileActionCreators.tsx");

export const getGuildProfile = function getGuildProfile(closure_1_0) {
  const _require = require;
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  let flag = obj.respectBackoff;
  if (flag === undefined) {
    flag = false;
  }
  if (null == require) {
    return Promise.resolve(null);
  } else {
    const fetchStatus = store.getFetchStatus(require);
    let num = store.getLastSyncTimestamp(require);
    const profile = store.getProfile(require);
    const _Date2 = Date;
    const timestamp = Date.now();
    if (num == null) {
      num = 0;
    }
    const diff = timestamp - num;
    const nextFetchAllowedAt = store.getNextFetchAllowedAt(require);
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
    obj = { type: "GUILD_PROFILE_FETCH", guildId: null };
    obj[1] = require;
    dispatcherDefault.dispatch(obj);
    const HTTP = sendRequest.HTTP;
    obj = { url: null, rejectWithError: null };
    obj[0] = closure_9.GUILD_PROFILE(require);
    obj[1] = sendRequest.rejectWithMigratedError();
    const value = HTTP.get(obj);
    resolved1 = value.then((result) => {
      let obj = callback(dependencyMap[7]);
      const guildProfileFromServer = obj.buildGuildProfileFromServer(result.body);
      obj = { type: "GUILD_PROFILE_FETCH_SUCCESS", guildId: callback, profile: guildProfileFromServer };
      dispatcherDefault.dispatch(obj);
      return guildProfileFromServer;
    }).catch((error) => {
      const aPIError = new callback(dependencyMap[8]).APIError(error);
      const obj = { type: "GUILD_PROFILE_FETCH_FAILURE", guildId: callback, error: aPIError };
      obj.dispatch(obj);
      return null;
    });
    const nextPromise = value.then((result) => {
      let obj = callback(dependencyMap[7]);
      const guildProfileFromServer = obj.buildGuildProfileFromServer(result.body);
      obj = { type: "GUILD_PROFILE_FETCH_SUCCESS", guildId: callback, profile: guildProfileFromServer };
      dispatcherDefault.dispatch(obj);
      return guildProfileFromServer;
    });
  }
};
export const saveGuildProfile = function saveGuildProfile(closure_1_0, name) {
  const _require = require;
  if (store.getIsUpdating(require)) {
    let resolved = Promise.resolve(null);
  } else {
    let obj = { type: "GUILD_PROFILE_UPDATE", guildId: null, updates: null };
    obj[1] = require;
    obj[2] = name;
    obj.dispatch(obj);
    const HTTP = sendRequest.HTTP;
    obj = { url: null, body: null, rejectWithError: null };
    obj[0] = closure_9.GUILD_PROFILE(require);
    obj[1] = getEmoji.buildGuildProfileUpdateForServer(name);
    obj[2] = sendRequest.rejectWithMigratedError();
    const patchResult = HTTP.patch(obj);
    resolved = HTTP.patch(obj).then((result) => {
      let obj = callback(dependencyMap[7]);
      const guildProfileFromServer = obj.buildGuildProfileFromServer(result.body);
      obj = { type: "GUILD_PROFILE_UPDATE_SUCCESS", guildId: callback, profile: guildProfileFromServer };
      dispatcherDefault.dispatch(obj);
      return guildProfileFromServer;
    }).catch((error) => {
      const aPIError = new callback(dependencyMap[8]).APIError(error);
      const obj = { type: "GUILD_PROFILE_UPDATE_FAILURE", guildId: callback, error: aPIError };
      obj.dispatch(obj);
      return null;
    });
    const nextPromise = HTTP.patch(obj).then((result) => {
      let obj = callback(dependencyMap[7]);
      const guildProfileFromServer = obj.buildGuildProfileFromServer(result.body);
      obj = { type: "GUILD_PROFILE_UPDATE_SUCCESS", guildId: callback, profile: guildProfileFromServer };
      dispatcherDefault.dispatch(obj);
      return guildProfileFromServer;
    });
  }
  return resolved;
};
export const setGuildProfileVisibility = function setGuildProfileVisibility(closure_1_0) {
  const _require = require;
  if (store.getIsUpdating(require)) {
    let resolved = Promise.resolve(null);
  } else {
    let obj = { type: "GUILD_PROFILE_UPDATE_VISIBILITY", guildId: null, visibility: null };
    obj[1] = require;
    obj[2] = arg1;
    obj.dispatch(obj);
    const HTTP = sendRequest.HTTP;
    obj = { url: null, body: null, rejectWithError: null };
    obj[0] = closure_9.GUILD_PROFILE_VISIBILITY(require);
    obj1 = { visibility: null };
    obj1[0] = arg1;
    obj[1] = obj1;
    obj[2] = sendRequest.rejectWithMigratedError();
    const putResult = HTTP.put(obj);
    resolved = HTTP.put(obj).then((result) => {
      const visibility = result.body.visibility;
      const obj = { type: "GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS", guildId: closure_0, visibility };
      obj.dispatch(obj);
      return visibility;
    }).catch((error) => {
      const aPIError = new callback(dependencyMap[8]).APIError(error);
      const obj = { type: "GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE", guildId: callback, error: aPIError };
      obj.dispatch(obj);
      throw aPIError;
    });
    const nextPromise = HTTP.put(obj).then((result) => {
      const visibility = result.body.visibility;
      const obj = { type: "GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS", guildId: closure_0, visibility };
      obj.dispatch(obj);
      return visibility;
    });
  }
  return resolved;
};
export const fetchGuildTopGames = function fetchGuildTopGames() {
  const self = this;
  const apply = _fetchGuildTopGames.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const trackGuildProfileViewed = function trackGuildProfileViewed(guildId, analyticsLocations) {
  const tmp = null != selfMember.getSelfMember(guildId);
  const obj = { guild_id: guildId, location_stack: analyticsLocations, is_member: tmp, has_join_request: null != request.getRequest(guildId) };
  obj.track(constants.GUILD_PROFILE_VIEWED, obj);
};