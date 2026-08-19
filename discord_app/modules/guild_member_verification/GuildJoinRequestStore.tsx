// === Module 7428: updateSubmittedGuildJoinRequestTotal ===

// Module 7428 (updateSubmittedGuildJoinRequestTotal)
import initializeDefault from "initialize" /* 589 */;
import obj132Default from "obj132" /* 687 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import tDefault from "t" /* 3975 */;
import isActionedApplicationStatus from "isActionedApplicationStatus" /* 4199 */;
import MAX_RESULTS_PER_PAGE from "MAX_RESULTS_PER_PAGE" /* 4200 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import { joinRequestFromServer } from "handleGatewayJoinRequestUpdate" /* 4198 */;

require = fn;
function updateSubmittedGuildJoinRequestTotal(guildId, DELETED, applicationStatus) {
  if (DELETED !== applicationStatus) {
    if (null != DELETED) {
      if (DELETED === MAX_RESULTS_PER_PAGE.GuildJoinRequestApplicationStatuses.SUBMITTED) {
        dependencyMap[guildId] = dependencyMap[guildId] + 1;
        const result = map.set(guildId, tDefault());
      }
      if (applicationStatus === MAX_RESULTS_PER_PAGE.GuildJoinRequestApplicationStatuses.SUBMITTED) {
        const _Math = Math;
        dependencyMap[guildId] = Math.max(0, dependencyMap[guildId] - 1);
        const result1 = map.set(guildId, tDefault());
      }
    }
  }
}
function guildJoinRequestsIndex(joinRequestId) {
  const items = [];
  if (typeof StaticGuildJoinRequestIndexes_GUILD_JOIN_REQUESTS_BY_ID !== "function") {
    HermesBuiltin.throwTypeError();
  }
  items.push("guild-join-request=" + joinRequestId.joinRequestId);
  ({ guildId, applicationStatus } = joinRequestId);
  if (typeof StaticGuildJoinRequestIndexes_GUILD_JOIN_REQUESTS_BY_STATUS !== "function") {
    HermesBuiltin.throwTypeError();
  }
  items.push("guild-" + guildId + "-" + applicationStatus);
  return items;
}
function upsert(joinRequestId) {
  closure_19[joinRequestId.joinRequestId] = joinRequestId;
  const result = secondaryIndexMap.set(joinRequestId.joinRequestId, joinRequestId);
  if (obj.isSubmittedApplicationStatus(joinRequestId.applicationStatus)) {
    secondaryIndexMap2.delete(joinRequestId.joinRequestId);
    const result1 = secondaryIndexMap1.set(joinRequestId.joinRequestId, joinRequestId);
  }
  obj = isActionedApplicationStatus;
  if (tmp2Result.isActionedApplicationStatus(joinRequestId.applicationStatus)) {
    secondaryIndexMap1.delete(joinRequestId.joinRequestId);
    const result2 = secondaryIndexMap2.set(joinRequestId.joinRequestId, joinRequestId);
  }
  tmp2Result = isActionedApplicationStatus;
}
function handleGuildJoinRequestCreateOrUpdate(request) {
  const tmp = joinRequestFromServer(request.request);
  currentUser = currentUser.getCurrentUser();
  if (null != currentUser) {
    if (tmp.userId !== currentUser.id) {
      const value = secondaryIndexMap.get(tmp.joinRequestId);
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
      obj = isActionedApplicationStatus;
      if (tmp8Result.isActionedApplicationStatus(tmp.applicationStatus)) {
        secondaryIndexMap1.delete(tmp.joinRequestId);
        const result2 = secondaryIndexMap2.set(tmp.joinRequestId, tmp);
      }
      return true;
    }
  }
  return false;
}
const map = new Map();
let closure_6 = {};
let closure_8 = {};
let c9 = false;
function StaticGuildJoinRequestIndexes_GUILD_JOIN_REQUESTS_BY_ID(arg0) {

}
function StaticGuildJoinRequestIndexes_GUILD_JOIN_REQUESTS_BY_STATUS(arg0, arg1) {

}
const secondaryIndexMap = new require("version").SecondaryIndexMap(guildJoinRequestsIndex, (joinRequestId) => "" + joinRequestId.joinRequestId);
const secondaryIndexMap1 = new require("version").SecondaryIndexMap(guildJoinRequestsIndex, (joinRequestId) => "" + joinRequestId.joinRequestId);
const secondaryIndexMap2 = new require("version").SecondaryIndexMap(guildJoinRequestsIndex, (actionedAt) => "" + actionedAt.actionedAt);
let closure_16 = {};
let closure_17 = {};
let closure_18 = {};
let closure_19 = {};
let closure_20 = 10 * obj132Default.Seconds.MINUTE;
const Store = initializeDefault.Store;
class GuildJoinRequestStoreV2 extends Store {
}
const prototype = GuildJoinRequestStoreV2.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_3);
};
prototype["getRequest"] = function getRequest(arg0) {
  return table3[arg0];
};
prototype["getRequests"] = function getRequests(guildId, applicationStatus) {
  if (typeof StaticGuildJoinRequestIndexes_GUILD_JOIN_REQUESTS_BY_STATUS !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const combined = "guild-" + guildId + "-" + applicationStatus;
  if (obj.isActionedApplicationStatus(applicationStatus)) {
    let values = secondaryIndexMap2.values(combined);
  } else {
    if (tmp2Result.isSubmittedApplicationStatus(applicationStatus)) {
      values = secondaryIndexMap1.values(combined);
    } else {
      values = secondaryIndexMap.values(combined);
    }
    tmp2Result = isActionedApplicationStatus;
  }
  return values;
};
prototype["getSubmittedGuildJoinRequestTotal"] = function getSubmittedGuildJoinRequestTotal(arg0) {
  return dependencyMap[arg0];
};
prototype["isFetching"] = function isFetching() {
  return c9;
};
prototype["hasFetched"] = function hasFetched(arg0) {
  if (map.has(arg0)) {
    const value = map.get(arg0);
    let tmp3 = null != value;
    if (tmp3) {
      tmp3 = tDefault().diff(value, "seconds") < closure_20;
      const obj2 = tDefault();
    }
    return tmp3;
  } else {
    return false;
  }
};
prototype["getSelectedApplicationTab"] = function getSelectedApplicationTab(arg0) {
  let SUBMITTED = dependencyMap2[arg0];
  if (SUBMITTED == null) {
    SUBMITTED = MAX_RESULTS_PER_PAGE.GuildJoinRequestApplicationStatuses.SUBMITTED;
  }
  return SUBMITTED;
};
prototype["getSelectedSortOrder"] = function getSelectedSortOrder(arg0) {
  let TIMESTAMP_DESC = dependencyMap3[arg0];
  if (TIMESTAMP_DESC == null) {
    TIMESTAMP_DESC = MAX_RESULTS_PER_PAGE.GuildJoinRequestSortOrders.TIMESTAMP_DESC;
  }
  return TIMESTAMP_DESC;
};
prototype["getSelectedGuildJoinRequest"] = function getSelectedGuildJoinRequest(arg0) {
  let value = null;
  if (null != table2[arg0]) {
    value = secondaryIndexMap.get(tmp.joinRequestId);
  }
  return value;
};
prototype["getRequestsForUser"] = function getRequestsForUser(guildId, userId) {
  const arr = table["" + guildId + ":" + userId];
  let found = null;
  if (null != arr) {
    const mapped = arr.map((item, index) => closure_12.get(item));
    found = mapped.filter((item, index) => null != item);
  }
  return found;
};
GuildJoinRequestStoreV2.displayName = "GuildJoinRequestStoreV2";
const guildJoinRequestStoreV2 = new GuildJoinRequestStoreV2(dispatcherDefault, {
  GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS: function handleFetchByIdSuccess(joinRequest) {
    joinRequest = joinRequest.joinRequest;
    closure_19[joinRequest.joinRequestId] = joinRequest;
    const result = secondaryIndexMap.set(joinRequest.joinRequestId, joinRequest);
    if (obj.isSubmittedApplicationStatus(joinRequest.applicationStatus)) {
      secondaryIndexMap2.delete(joinRequest.joinRequestId);
      const result1 = secondaryIndexMap1.set(joinRequest.joinRequestId, joinRequest);
    }
    obj = isActionedApplicationStatus;
    if (tmp2Result.isActionedApplicationStatus(joinRequest.applicationStatus)) {
      secondaryIndexMap1.delete(joinRequest.joinRequestId);
      const result2 = secondaryIndexMap2.set(joinRequest.joinRequestId, joinRequest);
    }
    tmp2Result = isActionedApplicationStatus;
  },
  GUILD_JOIN_REQUESTS_FOR_USER_FETCH_SUCCESS: function handleFetchForUserSuccess(requests) {
    requests = requests.requests;
    ({ guildId, userId } = requests);
    const item = requests.forEach(upsert);
    const combined = "" + guildId + ":" + userId;
    closure_8[combined] = requests.map((item, index) => item.joinRequestId);
  },
  GUILD_JOIN_REQUESTS_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    ({ requests, guildId } = arg0);
    c9 = false;
    ({ status, total } = arg0);
    if (status === MAX_RESULTS_PER_PAGE.GuildJoinRequestApplicationStatuses.SUBMITTED) {
      closure_6[guildId] = total;
      let result = map.set(guildId, tDefault());
    }
    const item = requests.forEach((item, index) => {
      closure_19[item.joinRequestId] = item;
      const result = closure_12.set(item.joinRequestId, item);
      if (obj.isSubmittedApplicationStatus(item.applicationStatus)) {
        map2.delete(item.joinRequestId);
        const result1 = map.set(item.joinRequestId, item);
      }
      obj = callback(table[5]);
      if (tmp2Result.isActionedApplicationStatus(item.applicationStatus)) {
        map.delete(item.joinRequestId);
        const result2 = map2.set(item.joinRequestId, item);
      }
      tmp2Result = callback(table[5]);
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
    const value = secondaryIndexMap.get(id);
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
      obj = isActionedApplicationStatus;
      if (tmpResult.isSubmittedApplicationStatus(applicationStatus)) {
        secondaryIndexMap1.clear();
      }
      tmpResult = isActionedApplicationStatus;
    }
  },
  GUILD_JOIN_REQUESTS_SET_SELECTED: function handleGuildJoinRequestSelect(guildId) {
    closure_18[guildId.guildId] = guildId.request;
  }
});
let result = require("obj132").fileFinishedImporting("modules/guild_member_verification/GuildJoinRequestStore.tsx");

export default guildJoinRequestStoreV2;