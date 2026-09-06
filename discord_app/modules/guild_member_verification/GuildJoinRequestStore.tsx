// === Module 5542: GuildJoinRequestStore ===

// Module 5542 (GuildJoinRequestStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import DurationsDefault from "Durations" /* 1090 */;
import _modDef4153 from "module_4153" /* 4153 */;
import GuildJoinRequestUtils from "GuildJoinRequestUtils" /* 4383 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4384 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function updateSubmittedGuildJoinRequestTotal(guildId, DELETED, applicationStatus) {
  if (DELETED !== applicationStatus) {
    if (null != DELETED) {
      if (DELETED === MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED) {
        dependencyMap[guildId] = dependencyMap[guildId] + 1;
        const result = map.set(guildId, _modDef4153());
      }
      if (applicationStatus === tmp12(4384).GuildJoinRequestApplicationStatuses.SUBMITTED) {
        const _Math = Math;
        dependencyMap[guildId] = Math.max(0, dependencyMap[guildId] - 1);
        const result1 = map.set(guildId, _modDef4153());
      }
      tmp12 = require;
    }
  }
}
function guildJoinRequestsIndex(arg0) {
  const items = [];
  if (typeof StaticGuildJoinRequestIndexes_GUILD_JOIN_REQUESTS_BY_ID === "function") {
    const _HermesInternal = HermesInternal;
    tmp("guild-join-request=" + tmp2);
    if (typeof StaticGuildJoinRequestIndexes_GUILD_JOIN_REQUESTS_BY_STATUS === "function") {
      const _HermesInternal2 = HermesInternal;
      tmp5("guild-" + tmp7 + "-" + tmp8);
      return items;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
function upsert(joinRequestId) {
  closure_19[joinRequestId.joinRequestId] = joinRequestId;
  const result = secondaryIndexMap.set(joinRequestId.joinRequestId, joinRequestId);
  if (obj.isSubmittedApplicationStatus(joinRequestId.applicationStatus)) {
    secondaryIndexMap2.delete(joinRequestId.joinRequestId);
    const result1 = secondaryIndexMap1.set(joinRequestId.joinRequestId, joinRequestId);
  }
  obj = GuildJoinRequestUtils;
  if (tmp2Result.isActionedApplicationStatus(joinRequestId.applicationStatus)) {
    secondaryIndexMap1.delete(joinRequestId.joinRequestId);
    const result2 = secondaryIndexMap2.set(joinRequestId.joinRequestId, joinRequestId);
  }
}
function handleGuildJoinRequestCreateOrUpdate(request) {
  const tmp = joinRequestFromServer(request.request);
  const currentUser = UserStore.getCurrentUser();
  if (null != currentUser) {
    if (tmp.userId !== currentUser.id) {
      value = secondaryIndexMap.get(tmp.joinRequestId);
      let applicationStatus;
      if (value != null) {
        applicationStatus = value.applicationStatus;
      }
      updateSubmittedGuildJoinRequestTotal(request.guildId, tmp.applicationStatus, applicationStatus);
      closure_19[tmp.joinRequestId] = tmp;
      const result = secondaryIndexMap.set(tmp.joinRequestId, tmp);
      if (obj.isSubmittedApplicationStatus(tmp.applicationStatus)) {
        secondaryIndexMap2.delete(tmp.joinRequestId);
        const result1 = secondaryIndexMap1.set(tmp.joinRequestId, tmp);
      }
      obj = GuildJoinRequestUtils;
      if (tmp8Result.isActionedApplicationStatus(tmp.applicationStatus)) {
        secondaryIndexMap1.delete(tmp.joinRequestId);
        const result2 = secondaryIndexMap2.set(tmp.joinRequestId, tmp);
      }
      return true;
    }
  }
  return false;
}
const joinRequestFromServer = fn(4382).joinRequestFromServer;
const map = new Map();
const dependencyMap = {};
let closure_8 = {};
let c9 = false;
function StaticGuildJoinRequestIndexes_GUILD_JOIN_REQUESTS_BY_ID(arg0) {

}
function StaticGuildJoinRequestIndexes_GUILD_JOIN_REQUESTS_BY_STATUS(arg0, arg1) {

}
const secondaryIndexMap = new fn(4195).SecondaryIndexMap(guildJoinRequestsIndex, (joinRequestId) => "" + joinRequestId.joinRequestId);
const secondaryIndexMap1 = new fn(4195).SecondaryIndexMap(guildJoinRequestsIndex, (joinRequestId) => "" + joinRequestId.joinRequestId);
const secondaryIndexMap2 = new fn(4195).SecondaryIndexMap(guildJoinRequestsIndex, (actionedAt) => "" + actionedAt.actionedAt);
const dependencyMap2 = {};
const dependencyMap3 = {};
let closure_18 = {};
let closure_19 = {};
let closure_20 = 10 * DurationsDefault.Seconds.MINUTE;
const Store = initializeDefault.Store;
class GuildJoinRequestStoreV2 extends Store {
}
const prototype = GuildJoinRequestStoreV2.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(UserStore);
};
prototype["getRequest"] = function getRequest(arg0) {
  return closure_19[arg0];
};
prototype["getRequests"] = function getRequests(guildId, applicationStatus) {
  if (typeof StaticGuildJoinRequestIndexes_GUILD_JOIN_REQUESTS_BY_STATUS === "function") {
    const _HermesInternal = HermesInternal;
    const combined = "guild-" + guildId + "-" + applicationStatus;
    if (obj.isActionedApplicationStatus(applicationStatus)) {
      let values = secondaryIndexMap2.values(combined);
    } else {
      if (tmp5Result.isSubmittedApplicationStatus(applicationStatus)) {
        values = secondaryIndexMap1.values(combined);
      } else {
        values = secondaryIndexMap.values(combined);
      }
      tmp5Result = GuildJoinRequestUtils;
    }
    return values;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
prototype["getSubmittedGuildJoinRequestTotal"] = function getSubmittedGuildJoinRequestTotal(arg0) {
  return dependencyMap[arg0];
};
prototype["isFetching"] = function isFetching() {
  return c9;
};
prototype["hasFetched"] = function hasFetched(arg0) {
  if (map.has(arg0)) {
    value = obj.get(arg0);
    let tmp3 = null != value;
    if (tmp3) {
      tmp3 = _modDef4153().diff(value, "seconds") < closure_20;
      const obj2 = _modDef4153();
    }
    return tmp3;
  } else {
    return false;
  }
  obj = map;
};
prototype["getSelectedApplicationTab"] = function getSelectedApplicationTab(arg0) {
  let SUBMITTED = dependencyMap2[arg0];
  if (SUBMITTED == null) {
    SUBMITTED = MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED;
  }
  return SUBMITTED;
};
prototype["getSelectedSortOrder"] = function getSelectedSortOrder(arg0) {
  let TIMESTAMP_DESC = dependencyMap3[arg0];
  if (TIMESTAMP_DESC == null) {
    TIMESTAMP_DESC = MemberVerificationTypes.GuildJoinRequestSortOrders.TIMESTAMP_DESC;
  }
  return TIMESTAMP_DESC;
};
prototype["getSelectedGuildJoinRequest"] = function getSelectedGuildJoinRequest(arg0) {
  value = null;
  if (null != closure_18[arg0]) {
    value = secondaryIndexMap.get(tmp.joinRequestId);
  }
  return value;
};
prototype["getRequestsForUser"] = function getRequestsForUser(guildId, userId) {
  const arr = closure_8["" + guildId + ":" + userId];
  let found = null;
  if (null != arr) {
    const mapped = arr.map((item) => secondaryIndexMap.get(item));
    found = mapped.filter((item) => null != item);
  }
  return found;
};
GuildJoinRequestStoreV2.displayName = "GuildJoinRequestStoreV2";
const guildJoinRequestStoreV2 = new GuildJoinRequestStoreV2(DispatcherDefault, {
  GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS: function handleFetchByIdSuccess(joinRequest) {
    joinRequest = joinRequest.joinRequest;
    closure_19[joinRequest.joinRequestId] = joinRequest;
    const result = secondaryIndexMap.set(joinRequest.joinRequestId, joinRequest);
    if (obj.isSubmittedApplicationStatus(joinRequest.applicationStatus)) {
      secondaryIndexMap2.delete(joinRequest.joinRequestId);
      const result1 = secondaryIndexMap1.set(joinRequest.joinRequestId, joinRequest);
    }
    obj = GuildJoinRequestUtils;
    if (tmp2Result.isActionedApplicationStatus(joinRequest.applicationStatus)) {
      secondaryIndexMap1.delete(joinRequest.joinRequestId);
      const result2 = secondaryIndexMap2.set(joinRequest.joinRequestId, joinRequest);
    }
  },
  GUILD_JOIN_REQUESTS_FOR_USER_FETCH_SUCCESS: function handleFetchForUserSuccess(requests) {
    requests = requests.requests;
    ({ guildId, userId } = requests);
    const item = requests.forEach(upsert);
    const combined = "" + guildId + ":" + userId;
    closure_8[combined] = requests.map((joinRequestId) => joinRequestId.joinRequestId);
  },
  GUILD_JOIN_REQUESTS_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    ({ requests, guildId } = arg0);
    c9 = false;
    ({ status, total } = arg0);
    if (status === MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED) {
      closure_6[guildId] = total;
      let result = map.set(guildId, _modDef4153());
    }
    const item = requests.forEach((joinRequestId) => {
      closure_1_19[joinRequestId.joinRequestId] = joinRequestId;
      const result = secondaryIndexMap.set(joinRequestId.joinRequestId, joinRequestId);
      if (obj.isSubmittedApplicationStatus(joinRequestId.applicationStatus)) {
        map2.delete(joinRequestId.joinRequestId);
        const result1 = map.set(joinRequestId.joinRequestId, joinRequestId);
      }
      obj = GuildJoinRequestUtils;
      if (tmp2Result.isActionedApplicationStatus(joinRequestId.applicationStatus)) {
        map.delete(joinRequestId.joinRequestId);
        const result2 = map2.set(joinRequestId.joinRequestId, joinRequestId);
      }
    });
  },
  GUILD_JOIN_REQUESTS_FETCH_START: function handleFetchStart() {
    c9 = true;
  },
  GUILD_JOIN_REQUESTS_FETCH_FAILURE: function handleFetchFailure() {
    c9 = false;
  },
  GUILD_JOIN_REQUEST_CREATE: handleGuildJoinRequestCreateOrUpdate,
  GUILD_JOIN_REQUEST_UPDATE: handleGuildJoinRequestCreateOrUpdate,
  GUILD_JOIN_REQUEST_DELETE: function handleGuildJoinRequestDelete(id) {
    id = id.id;
    value = secondaryIndexMap.get(id);
    if (null != value) {
      updateSubmittedGuildJoinRequestTotal(id.guildId, "DELETED", value.applicationStatus);
      delete tmp[tmp2];
      secondaryIndexMap.delete(id);
      secondaryIndexMap1.delete(id);
      secondaryIndexMap2.delete(id);
    }
  },
  GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB: function handleSetApplicationTab(arg0) {
    ({ guildId, applicationTab } = arg0);
    if (applicationTab !== dependencyMap2[guildId]) {
      dependencyMap2[guildId] = applicationTab;
    }
  },
  GUILD_JOIN_REQUESTS_SET_SORT_ORDER: function handleSetSortOrder(arg0) {
    ({ guildId, sortOrder, applicationStatus } = arg0);
    if (sortOrder !== dependencyMap3[guildId]) {
      dependencyMap3[guildId] = sortOrder;
      if (obj.isActionedApplicationStatus(applicationStatus)) {
        secondaryIndexMap2.clear();
      }
      obj = GuildJoinRequestUtils;
      if (tmpResult.isSubmittedApplicationStatus(applicationStatus)) {
        secondaryIndexMap1.clear();
      }
      tmpResult = GuildJoinRequestUtils;
    }
  },
  GUILD_JOIN_REQUESTS_SET_SELECTED: function handleGuildJoinRequestSelect(guildId) {
    closure_18[guildId.guildId] = guildId.request;
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_member_verification/GuildJoinRequestStore.tsx");

export default guildJoinRequestStoreV2;