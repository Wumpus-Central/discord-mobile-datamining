// discord_app/modules/guild_member_verification/GuildJoinRequestStore.tsx
import mergeGuildAvatar from "mergeGuildAvatar";
import { joinRequestFromServer } from "handleGatewayJoinRequestUpdate";
import { Store } from "initialize";
import { t } from "../../../_runtime/03867_t.js";
import { isActionedApplicationStatus } from "GuildJoinRequestUtils.tsx";
import { MAX_RESULTS_PER_PAGE } from "MemberVerificationTypes.tsx";

const require = arg1;
function updateSubmittedGuildJoinRequestTotal(guildId, DELETED, applicationStatus) {
  if (DELETED !== applicationStatus) {
    if (null != DELETED) {
      if (DELETED === MAX_RESULTS_PER_PAGE.GuildJoinRequestApplicationStatuses.SUBMITTED) {
        dependencyMap[guildId] = dependencyMap[guildId] + 1;
        const result = map.set(guildId, t());
      }
      if (applicationStatus === tmp12(4105).GuildJoinRequestApplicationStatuses.SUBMITTED) {
        const _Math = Math;
        dependencyMap[guildId] = Math.max(0, dependencyMap[guildId] - 1);
        const result1 = map.set(guildId, t());
      }
      tmp12 = require;
    }
  }
}
function guildJoinRequestsIndex(joinRequestId) {
  let applicationStatus;
  let guildId;
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
  const tmp2 = require;
  if (tmp2Result.isActionedApplicationStatus(joinRequestId.applicationStatus)) {
    secondaryIndexMap1.delete(joinRequestId.joinRequestId);
    const result2 = secondaryIndexMap2.set(joinRequestId.joinRequestId, joinRequestId);
  }
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
      const obj3 = secondaryIndexMap;
      const tmp8 = require;
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
let closure_20 = 10 * require("set").Seconds.MINUTE;
class GuildJoinRequestStoreV2 extends Store {
}
const prototype = GuildJoinRequestStoreV2.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(mergeGuildAvatar);
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
    const value = obj.get(arg0);
    let tmp3 = null != value;
    if (tmp3) {
      tmp3 = t().diff(value, "seconds") < closure_20;
      const obj2 = t();
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
    const mapped = arr.map((arg0) => closure_12.get(arg0));
    found = mapped.filter((arg0) => null != arg0);
  }
  return found;
};
GuildJoinRequestStoreV2.displayName = "GuildJoinRequestStoreV2";
const guildJoinRequestStoreV2 = new GuildJoinRequestStoreV2(require("dispatcher"), {
  GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS: function handleFetchByIdSuccess(joinRequest) {
    joinRequest = joinRequest.joinRequest;
    closure_19[joinRequest.joinRequestId] = joinRequest;
    const result = secondaryIndexMap.set(joinRequest.joinRequestId, joinRequest);
    if (obj.isSubmittedApplicationStatus(joinRequest.applicationStatus)) {
      secondaryIndexMap2.delete(joinRequest.joinRequestId);
      const result1 = secondaryIndexMap1.set(joinRequest.joinRequestId, joinRequest);
    }
    obj = isActionedApplicationStatus;
    const tmp2 = require;
    if (tmp2Result.isActionedApplicationStatus(joinRequest.applicationStatus)) {
      secondaryIndexMap1.delete(joinRequest.joinRequestId);
      const result2 = secondaryIndexMap2.set(joinRequest.joinRequestId, joinRequest);
    }
  },
  GUILD_JOIN_REQUESTS_FOR_USER_FETCH_SUCCESS: function handleFetchForUserSuccess(requests) {
    let guildId;
    let userId;
    requests = requests.requests;
    ({ guildId, userId } = requests);
    const item = requests.forEach(upsert);
    const combined = "" + guildId + ":" + userId;
    closure_8[combined] = requests.map((joinRequestId) => joinRequestId.joinRequestId);
  },
  GUILD_JOIN_REQUESTS_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    let guildId;
    let requests;
    let status;
    let total;
    ({ requests, guildId } = arg0);
    let c9 = false;
    ({ status, total } = arg0);
    if (status === MAX_RESULTS_PER_PAGE.GuildJoinRequestApplicationStatuses.SUBMITTED) {
      closure_6[guildId] = total;
      let result = map.set(guildId, t());
    }
    const item = requests.forEach((joinRequestId) => {
      closure_19[joinRequestId.joinRequestId] = joinRequestId;
      const result = closure_12.set(joinRequestId.joinRequestId, joinRequestId);
      if (obj.isSubmittedApplicationStatus(joinRequestId.applicationStatus)) {
        map2.delete(joinRequestId.joinRequestId);
        const result1 = map.set(joinRequestId.joinRequestId, joinRequestId);
      }
      obj = callback(table[5]);
      const tmp2 = callback;
      const tmp3 = table;
      if (tmp2Result.isActionedApplicationStatus(joinRequestId.applicationStatus)) {
        map.delete(joinRequestId.joinRequestId);
        const result2 = map2.set(joinRequestId.joinRequestId, joinRequestId);
      }
    });
  },
  GUILD_JOIN_REQUESTS_FETCH_START: function handleFetchStart() {
    let c9 = true;
  },
  GUILD_JOIN_REQUESTS_FETCH_FAILURE: function handleFetchFailure() {
    let c9 = false;
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
    let applicationTab;
    let guildId;
    ({ guildId, applicationTab } = arg0);
    if (applicationTab !== dependencyMap2[guildId]) {
      dependencyMap2[guildId] = applicationTab;
    }
  },
  GUILD_JOIN_REQUESTS_SET_SORT_ORDER: function handleSetSortOrder(arg0) {
    let applicationStatus;
    let guildId;
    let sortOrder;
    ({ guildId, sortOrder, applicationStatus } = arg0);
    if (sortOrder !== dependencyMap3[guildId]) {
      dependencyMap3[guildId] = sortOrder;
      if (obj.isActionedApplicationStatus(applicationStatus)) {
        secondaryIndexMap2.clear();
      }
      obj = isActionedApplicationStatus;
      const tmp = require;
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
let result = require("t").fileFinishedImporting("modules/guild_member_verification/GuildJoinRequestStore.tsx");

export default guildJoinRequestStoreV2;