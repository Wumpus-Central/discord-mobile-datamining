// discord_app/modules/guild_member_verification/GuildJoinRequestStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import DurationsDefault from "../../utils/Durations.tsx";
import _modDef2169 from "../../../_runtime/metro/02169__.js";
import GuildJoinRequestUtils from "GuildJoinRequestUtils.tsx";
import MemberVerificationTypes from "MemberVerificationTypes.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
function updateSubmittedGuildJoinRequestTotal(guildId, DELETED, applicationStatus) {
  if (DELETED !== applicationStatus) {
    if (null != DELETED) {
      if (DELETED === MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED) {
        dependencyMap[guildId] = dependencyMap[guildId] + 1;
        const result = map.set(guildId, _modDef2169());
      }
      if (applicationStatus === MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED) {
        const _Math = Math;
        dependencyMap[guildId] = Math.max(0, dependencyMap[guildId] - 1);
        const result1 = map.set(guildId, _modDef2169());
      }
    }
  }
}
function guildJoinRequestsIndex(joinRequestId) {
  items = [];
  items.push(closure_10.GUILD_JOIN_REQUESTS_BY_ID(joinRequestId.joinRequestId));
  items.push(closure_10.GUILD_JOIN_REQUESTS_BY_STATUS(joinRequestId.guildId, joinRequestId.applicationStatus));
  return items;
}
function upsert(joinRequestId) {
  closure_18[joinRequestId.joinRequestId] = joinRequestId;
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
  tmp2Result = GuildJoinRequestUtils;
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
      closure_18[tmp.joinRequestId] = tmp;
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
const joinRequestFromServer = fn(5077).joinRequestFromServer;
const map = new Map();
const dependencyMap = {};
let closure_8 = {};
const set = new Set();
let closure_10 = {
  GUILD_JOIN_REQUESTS_BY_ID(joinRequestId) {
    return "guild-join-request=" + joinRequestId;
  },
  GUILD_JOIN_REQUESTS_BY_STATUS(guildId, status) {
    return "guild-" + guildId + "-" + status;
  },
};
const secondaryIndexMap = new fn(4970).SecondaryIndexMap(
  guildJoinRequestsIndex,
  (joinRequestId) => "" + joinRequestId.joinRequestId,
);
const secondaryIndexMap1 = new fn(4970).SecondaryIndexMap(
  guildJoinRequestsIndex,
  (joinRequestId) => "" + joinRequestId.joinRequestId,
);
const secondaryIndexMap2 = new fn(4970).SecondaryIndexMap(
  guildJoinRequestsIndex,
  (actionedAt) => "" + actionedAt.actionedAt,
);
const dependencyMap2 = {};
const dependencyMap3 = {};
let closure_17 = {};
let closure_18 = {};
let closure_19 = 10 * DurationsDefault.Seconds.MINUTE;
const Store = initializeDefault.Store;
class GuildJoinRequestStoreV2 extends Store {}
const prototype = GuildJoinRequestStoreV2.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(UserStore);
};
prototype["getRequest"] = function getRequest(arg0) {
  return closure_18[arg0];
};
prototype["getRequests"] = function getRequests(guildId, applicationStatus) {
  const result = closure_10.GUILD_JOIN_REQUESTS_BY_STATUS(guildId, applicationStatus);
  if (obj.isActionedApplicationStatus(applicationStatus)) {
    let values = secondaryIndexMap2.values(result);
  } else {
    if (tmp2Result.isSubmittedApplicationStatus(applicationStatus)) {
      values = secondaryIndexMap1.values(result);
    } else {
      values = secondaryIndexMap.values(result);
    }
    tmp2Result = GuildJoinRequestUtils;
  }
  return values;
};
prototype["getSubmittedGuildJoinRequestTotal"] = function getSubmittedGuildJoinRequestTotal(arg0) {
  return dependencyMap[arg0];
};
prototype["isFetching"] = function isFetching(guildId, status) {
  return set.has(closure_10.GUILD_JOIN_REQUESTS_BY_STATUS(guildId, status));
};
prototype["hasFetched"] = function hasFetched(arg0) {
  if (map.has(arg0)) {
    value = map.get(arg0);
    let tmp3 = null != value;
    if (tmp3) {
      tmp3 = _modDef2169().diff(value, "seconds") < closure_19;
      const obj2 = _modDef2169();
    }
    return tmp3;
  } else {
    return false;
  }
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
  if (null != closure_17[arg0]) {
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
    closure_18[joinRequest.joinRequestId] = joinRequest;
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
    tmp2Result = GuildJoinRequestUtils;
  },
  GUILD_JOIN_REQUESTS_FOR_USER_FETCH_SUCCESS: function handleFetchForUserSuccess(requests) {
    requests = requests.requests;
    ({ guildId, userId } = requests);
    const item = requests.forEach(upsert);
    const combined = "" + guildId + ":" + userId;
    closure_8[combined] = requests.map((joinRequestId) => joinRequestId.joinRequestId);
  },
  GUILD_JOIN_REQUESTS_FETCH_SUCCESS: function handleFetchSuccess(total) {
    ({ status, requests, guildId } = total);
    set.delete(closure_10.GUILD_JOIN_REQUESTS_BY_STATUS(guildId, status));
    if (status === MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED) {
      closure_6[guildId] = total.total;
      let result = map.set(guildId, _modDef2169());
    }
    const item = requests.forEach((joinRequestId) => {
      closure_1_18[joinRequestId.joinRequestId] = joinRequestId;
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
      tmp2Result = GuildJoinRequestUtils;
    });
  },
  GUILD_JOIN_REQUESTS_FETCH_START: function handleFetchStart(guildId) {
    set.add(closure_10.GUILD_JOIN_REQUESTS_BY_STATUS(guildId.guildId, guildId.status));
  },
  GUILD_JOIN_REQUESTS_FETCH_FAILURE: function handleFetchFailure(guildId) {
    set.delete(closure_10.GUILD_JOIN_REQUESTS_BY_STATUS(guildId.guildId, guildId.status));
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
    closure_17[guildId.guildId] = guildId.request;
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_member_verification/GuildJoinRequestStore.tsx");

export default guildJoinRequestStoreV2;
