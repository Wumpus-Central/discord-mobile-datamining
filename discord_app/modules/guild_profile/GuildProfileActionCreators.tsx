import dispatcher from "dispatcher";
import handleGatewayJoinRequestUpdate from "handleGatewayJoinRequestUpdate";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import handleUpdateStart from "handleUpdateStart";
import { GuildProfileFetchStatus } from "handleUpdateStart";
import ME from "ME";

let c9;
let metroImportAll;
const require = arg1;
function _fetchGuildTopGames() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    return (function*(arg0) {
      const table = tmp2;
      let closure_1 = tmp5;
      const HTTP = lib(outer1_2[6]).HTTP;
      const obj1 = { url: null, rejectWithError: null };
      obj1[0] = outer1_9.GUILD_TOP_GAMES(lib);
      obj1[1] = lib(outer1_2[6]).rejectWithMigratedError();
      lib = yield HTTP.get(obj1);
      const obj = lib(table[7]);
      return obj.buildTopGamesFromServer(lib.body.top_games);
    })();
  });
  const _fetchGuildTopGames = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ AnalyticEvents: metroImportAll, Endpoints: c9 } = ME);
const result = require("trackCommunicationDisabled").fileFinishedImporting("modules/guild_profile/GuildProfileActionCreators.tsx");

export const getGuildProfile = function getGuildProfile(outer1_0) {
  const _require = outer1_0;
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  let flag = obj.respectBackoff;
  if (flag === undefined) {
    flag = false;
  }
  if (null == outer1_0) {
    return Promise.resolve(null);
  } else {
    const fetchStatus = store.getFetchStatus(outer1_0);
    let num = store.getLastSyncTimestamp(outer1_0);
    const profile = store.getProfile(outer1_0);
    const _Date2 = Date;
    const timestamp = Date.now();
    if (num == null) {
      num = 0;
    }
    const diff = timestamp - num;
    const nextFetchAllowedAt = store.getNextFetchAllowedAt(outer1_0);
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
    obj[1] = outer1_0;
    importDefault(709).dispatch(obj);
    const HTTP = _require(530).HTTP;
    obj = { url: null, rejectWithError: null };
    obj[0] = closure_9.GUILD_PROFILE(outer1_0);
    const obj2 = importDefault(709);
    const obj6 = store;
    obj[1] = _require(530).rejectWithMigratedError();
    const value = HTTP.get(obj);
    const obj5 = _require(530);
    resolved1 = value.then((body) => {
      let obj = outer1_0(outer1_2[7]);
      const guildProfileFromServer = obj.buildGuildProfileFromServer(body.body);
      obj = { type: "GUILD_PROFILE_FETCH_SUCCESS", guildId: outer1_0, profile: guildProfileFromServer };
      outer1_1(outer1_2[5]).dispatch(obj);
      return guildProfileFromServer;
    }).catch((arg0) => {
      const aPIError = new outer1_0(outer1_2[8]).APIError(arg0);
      let obj = outer1_1(outer1_2[5]);
      obj = { type: "GUILD_PROFILE_FETCH_FAILURE", guildId: outer1_0, error: aPIError };
      obj.dispatch(obj);
      return null;
    });
    const nextPromise = value.then((body) => {
      let obj = outer1_0(outer1_2[7]);
      const guildProfileFromServer = obj.buildGuildProfileFromServer(body.body);
      obj = { type: "GUILD_PROFILE_FETCH_SUCCESS", guildId: outer1_0, profile: guildProfileFromServer };
      outer1_1(outer1_2[5]).dispatch(obj);
      return guildProfileFromServer;
    });
  }
};
export const saveGuildProfile = function saveGuildProfile(outer1_0, name) {
  const _require = outer1_0;
  if (store.getIsUpdating(outer1_0)) {
    let resolved = Promise.resolve(null);
  } else {
    let obj = importDefault(709);
    obj = { type: "GUILD_PROFILE_UPDATE", guildId: null, updates: null };
    obj[1] = outer1_0;
    obj[2] = name;
    obj.dispatch(obj);
    const HTTP = _require(530).HTTP;
    obj = { url: null, body: null, rejectWithError: null };
    obj[0] = closure_9.GUILD_PROFILE(outer1_0);
    obj[1] = _require(5279).buildGuildProfileUpdateForServer(name);
    const obj4 = _require(5279);
    obj[2] = _require(530).rejectWithMigratedError();
    const obj5 = _require(530);
    const patchResult = HTTP.patch(obj);
    resolved = HTTP.patch(obj).then((body) => {
      let obj = outer1_0(outer1_2[7]);
      const guildProfileFromServer = obj.buildGuildProfileFromServer(body.body);
      obj = { type: "GUILD_PROFILE_UPDATE_SUCCESS", guildId: outer1_0, profile: guildProfileFromServer };
      outer1_1(outer1_2[5]).dispatch(obj);
      return guildProfileFromServer;
    }).catch((arg0) => {
      const aPIError = new outer1_0(outer1_2[8]).APIError(arg0);
      let obj = outer1_1(outer1_2[5]);
      obj = { type: "GUILD_PROFILE_UPDATE_FAILURE", guildId: outer1_0, error: aPIError };
      obj.dispatch(obj);
      return null;
    });
    const nextPromise = HTTP.patch(obj).then((body) => {
      let obj = outer1_0(outer1_2[7]);
      const guildProfileFromServer = obj.buildGuildProfileFromServer(body.body);
      obj = { type: "GUILD_PROFILE_UPDATE_SUCCESS", guildId: outer1_0, profile: guildProfileFromServer };
      outer1_1(outer1_2[5]).dispatch(obj);
      return guildProfileFromServer;
    });
  }
  return resolved;
};
export const setGuildProfileVisibility = function setGuildProfileVisibility(outer1_0) {
  const _require = outer1_0;
  if (store.getIsUpdating(outer1_0)) {
    let resolved = Promise.resolve(null);
  } else {
    let obj = importDefault(709);
    obj = { type: "GUILD_PROFILE_UPDATE_VISIBILITY", guildId: null, visibility: null };
    obj[1] = outer1_0;
    obj[2] = arg1;
    obj.dispatch(obj);
    const HTTP = _require(530).HTTP;
    obj = { url: null, body: null, rejectWithError: null };
    obj[0] = closure_9.GUILD_PROFILE_VISIBILITY(outer1_0);
    const obj1 = { visibility: null };
    obj1[0] = arg1;
    obj[1] = obj1;
    obj[2] = _require(530).rejectWithMigratedError();
    const obj5 = _require(530);
    const putResult = HTTP.put(obj);
    resolved = HTTP.put(obj).then((body) => {
      const visibility = body.body.visibility;
      let obj = outer1_1(outer1_2[5]);
      obj = { type: "GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS", guildId: closure_0, visibility };
      obj.dispatch(obj);
      return visibility;
    }).catch((arg0) => {
      const aPIError = new outer1_0(outer1_2[8]).APIError(arg0);
      let obj = outer1_1(outer1_2[5]);
      obj = { type: "GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE", guildId: outer1_0, error: aPIError };
      obj.dispatch(obj);
      throw aPIError;
    });
    const nextPromise = HTTP.put(obj).then((body) => {
      const visibility = body.body.visibility;
      let obj = outer1_1(outer1_2[5]);
      obj = { type: "GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS", guildId: closure_0, visibility };
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
  let obj = importDefault(698);
  obj = { guild_id: guildId, location_stack: analyticsLocations, is_member: tmp, has_join_request: null != request.getRequest(guildId) };
  obj.track(constants.GUILD_PROFILE_VIEWED, obj);
};