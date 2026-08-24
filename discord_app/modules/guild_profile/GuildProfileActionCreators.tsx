// discord_app/modules/guild_profile/GuildProfileActionCreators.tsx
import expandEventPropertiesDefault from "../../utils/AnalyticsUtils.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import closure_3 from "../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../guild_member_verification/UserGuildJoinRequestStore.tsx";
import closure_5 from "../../stores/GuildMemberStore.tsx";
import closure_6 from "GuildProfileStore.tsx";
import { GuildProfileFetchStatus } from "GuildProfileStore.tsx";
import ME from "../../Constants.tsx";
import { sendRequest } from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import { getEmoji } from "GuildProfileBuilders.tsx";

const require = arg1;
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
const result = require("set").fileFinishedImporting("modules/guild_profile/GuildProfileActionCreators.tsx");

export const getGuildProfile = function getGuildProfile(closure_1_0) {
  const _require = closure_1_0;
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  let flag = obj.respectBackoff;
  if (flag === undefined) {
    flag = false;
  }
  if (null == closure_1_0) {
    return Promise.resolve(null);
  } else {
    const fetchStatus = store.getFetchStatus(closure_1_0);
    let num = store.getLastSyncTimestamp(closure_1_0);
    const profile = store.getProfile(closure_1_0);
    const _Date2 = Date;
    const timestamp = Date.now();
    if (num == null) {
      num = 0;
    }
    const diff = timestamp - num;
    const nextFetchAllowedAt = store.getNextFetchAllowedAt(closure_1_0);
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
    obj[1] = closure_1_0;
    dispatcherDefault.dispatch(obj);
    const HTTP = _sendRequest.HTTP;
    obj = { url: null, rejectWithError: null };
    obj[0] = closure_9.GUILD_PROFILE(closure_1_0);
    const obj2 = dispatcherDefault;
    const obj6 = store;
    obj[1] = _sendRequest.rejectWithMigratedError();
    const value = HTTP.get(obj);
    const obj5 = _sendRequest;
    resolved1 = value.then((body) => {
      let obj = callback(closure_1_2[7]);
      const guildProfileFromServer = obj.buildGuildProfileFromServer(body.body);
      obj = { type: "GUILD_PROFILE_FETCH_SUCCESS", guildId: callback, profile: guildProfileFromServer };
      closure_1_1(closure_1_2[5]).dispatch(obj);
      return guildProfileFromServer;
    }).catch((arg0) => {
      const aPIError = new callback(closure_1_2[8]).APIError(arg0);
      let obj = closure_1_1(closure_1_2[5]);
      obj = { type: "GUILD_PROFILE_FETCH_FAILURE", guildId: callback, error: aPIError };
      obj.dispatch(obj);
      return null;
    });
    const nextPromise = value.then((body) => {
      let obj = callback(closure_1_2[7]);
      const guildProfileFromServer = obj.buildGuildProfileFromServer(body.body);
      obj = { type: "GUILD_PROFILE_FETCH_SUCCESS", guildId: callback, profile: guildProfileFromServer };
      closure_1_1(closure_1_2[5]).dispatch(obj);
      return guildProfileFromServer;
    });
  }
};
export const saveGuildProfile = function saveGuildProfile(closure_1_0, name) {
  const _require = closure_1_0;
  if (store.getIsUpdating(closure_1_0)) {
    let resolved = Promise.resolve(null);
  } else {
    let obj = dispatcherDefault;
    obj = { type: "GUILD_PROFILE_UPDATE", guildId: null, updates: null };
    obj[1] = closure_1_0;
    obj[2] = name;
    obj.dispatch(obj);
    const HTTP = _sendRequest.HTTP;
    obj = { url: null, body: null, rejectWithError: null };
    obj[0] = closure_9.GUILD_PROFILE(closure_1_0);
    obj[1] = _getEmoji.buildGuildProfileUpdateForServer(name);
    const obj4 = _getEmoji;
    obj[2] = _sendRequest.rejectWithMigratedError();
    const obj5 = _sendRequest;
    const patchResult = HTTP.patch(obj);
    resolved = HTTP.patch(obj).then((body) => {
      let obj = callback(closure_1_2[7]);
      const guildProfileFromServer = obj.buildGuildProfileFromServer(body.body);
      obj = { type: "GUILD_PROFILE_UPDATE_SUCCESS", guildId: callback, profile: guildProfileFromServer };
      closure_1_1(closure_1_2[5]).dispatch(obj);
      return guildProfileFromServer;
    }).catch((arg0) => {
      const aPIError = new callback(closure_1_2[8]).APIError(arg0);
      let obj = closure_1_1(closure_1_2[5]);
      obj = { type: "GUILD_PROFILE_UPDATE_FAILURE", guildId: callback, error: aPIError };
      obj.dispatch(obj);
      return null;
    });
    const nextPromise = HTTP.patch(obj).then((body) => {
      let obj = callback(closure_1_2[7]);
      const guildProfileFromServer = obj.buildGuildProfileFromServer(body.body);
      obj = { type: "GUILD_PROFILE_UPDATE_SUCCESS", guildId: callback, profile: guildProfileFromServer };
      closure_1_1(closure_1_2[5]).dispatch(obj);
      return guildProfileFromServer;
    });
  }
  return resolved;
};
export const setGuildProfileVisibility = function setGuildProfileVisibility(closure_1_0) {
  const _require = closure_1_0;
  if (store.getIsUpdating(closure_1_0)) {
    let resolved = Promise.resolve(null);
  } else {
    let obj = dispatcherDefault;
    obj = { type: "GUILD_PROFILE_UPDATE_VISIBILITY", guildId: null, visibility: null };
    obj[1] = closure_1_0;
    obj[2] = arg1;
    obj.dispatch(obj);
    const HTTP = _sendRequest.HTTP;
    obj = { url: null, body: null, rejectWithError: null };
    obj[0] = closure_9.GUILD_PROFILE_VISIBILITY(closure_1_0);
    obj1 = { visibility: null };
    obj1[0] = arg1;
    obj[1] = obj1;
    obj[2] = _sendRequest.rejectWithMigratedError();
    const obj5 = _sendRequest;
    const putResult = HTTP.put(obj);
    resolved = HTTP.put(obj).then((body) => {
      const visibility = body.body.visibility;
      let obj = closure_1_1(closure_1_2[5]);
      obj = { type: "GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS", guildId: closure_0, visibility };
      obj.dispatch(obj);
      return visibility;
    }).catch((arg0) => {
      const aPIError = new callback(closure_1_2[8]).APIError(arg0);
      let obj = closure_1_1(closure_1_2[5]);
      obj = { type: "GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE", guildId: callback, error: aPIError };
      obj.dispatch(obj);
      throw aPIError;
    });
    const nextPromise = HTTP.put(obj).then((body) => {
      const visibility = body.body.visibility;
      let obj = closure_1_1(closure_1_2[5]);
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
  let obj = expandEventPropertiesDefault;
  obj = { guild_id: guildId, location_stack: analyticsLocations, is_member: tmp, has_join_request: null != request.getRequest(guildId) };
  obj.track(constants.GUILD_PROFILE_VIEWED, obj);
};