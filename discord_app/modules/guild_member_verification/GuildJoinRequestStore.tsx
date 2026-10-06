// === Module 5939: GuildJoinRequestStore ===

// Module 5939 (GuildJoinRequestStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import DurationsDefault from "Durations" /* 1102 */;
import _modDef4467 from "module_4467" /* 4467 */;
import SecondaryIndexMap from "SecondaryIndexMap" /* 4510 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4706 */;
import GuildJoinRequestUtils from "GuildJoinRequestUtils" /* 4707 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4708 */;
import UserStore from "UserStore" /* 1377 */;
import size from "module_2" /* 2 */;

function updateSubmittedGuildJoinRequestTotal(guildId, DELETED, applicationStatus) {
  if (DELETED !== applicationStatus) {
    if (null != DELETED) {
      if (DELETED === MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED) {
        closure_6[guildId] = closure_6[guildId] + 1;
        const result = map.set(guildId, _modDef4467());
      }
      if (applicationStatus === MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED) {
        const _Math = Math;
        closure_6[guildId] = Math.max(0, closure_6[guildId] - 1);
        const result1 = map.set(guildId, _modDef4467());
      }
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
  const obj = GuildJoinRequestUtils;
  if (obj.isSubmittedApplicationStatus(joinRequestId.applicationStatus)) {
    secondaryIndexMap2.delete(joinRequestId.joinRequestId);
    const result1 = secondaryIndexMap1.set(joinRequestId.joinRequestId, joinRequestId);
  }
  const tmp2Result = GuildJoinRequestUtils;
  if (tmp2Result.isActionedApplicationStatus(joinRequestId.applicationStatus)) {
    secondaryIndexMap1.delete(joinRequestId.joinRequestId);
    const result2 = secondaryIndexMap2.set(joinRequestId.joinRequestId, joinRequestId);
  }
}
function handleGuildJoinRequestCreateOrUpdate(guildId) {
  guildId = guildId.guildId;
  const tmp = joinRequestFromServer(guildId.request);
  const currentUser = UserStore.getCurrentUser();
  if (null != currentUser) {
    if (tmp.userId !== currentUser.id) {
      const value = secondaryIndexMap.get(tmp.joinRequestId);
      let applicationStatus;
      if (value != null) {
        applicationStatus = value.applicationStatus;
      }
      updateSubmittedGuildJoinRequestTotal(guildId, tmp.applicationStatus, applicationStatus);
      closure_19[tmp.joinRequestId] = tmp;
      const result = secondaryIndexMap.set(tmp.joinRequestId, tmp);
      const obj = GuildJoinRequestUtils;
      if (obj.isSubmittedApplicationStatus(tmp.applicationStatus)) {
        secondaryIndexMap2.delete(tmp.joinRequestId);
        const result1 = secondaryIndexMap1.set(tmp.joinRequestId, tmp);
      }
      const tmp8Result = GuildJoinRequestUtils;
      if (tmp8Result.isActionedApplicationStatus(tmp.applicationStatus)) {
        secondaryIndexMap1.delete(tmp.joinRequestId);
        const result2 = secondaryIndexMap2.set(tmp.joinRequestId, tmp);
      }
      return true;
    }
  }
  return false;
}
const joinRequestFromServer = UserGuildJoinRequestStore.joinRequestFromServer;
const map = new Map();
const metroRequire = {};
const metroImportAll = {};
let c9 = false;
function StaticGuildJoinRequestIndexes_GUILD_JOIN_REQUESTS_BY_ID(arg0) {

}
function StaticGuildJoinRequestIndexes_GUILD_JOIN_REQUESTS_BY_STATUS(arg0, arg1) {

}
const secondaryIndexMap = new SecondaryIndexMap.SecondaryIndexMap(guildJoinRequestsIndex, (joinRequestId) => "" + joinRequestId.joinRequestId);
const secondaryIndexMap1 = new SecondaryIndexMap.SecondaryIndexMap(guildJoinRequestsIndex, (joinRequestId) => "" + joinRequestId.joinRequestId);
const secondaryIndexMap2 = new SecondaryIndexMap.SecondaryIndexMap(guildJoinRequestsIndex, (actionedAt) => "" + actionedAt.actionedAt);
const authStore3 = {};
let closure_17 = {};
const authStore4 = {};
let closure_19 = {};
let closure_20 = 10 * DurationsDefault.Seconds.MINUTE;
const Store = get_initializedDefault.Store;
class GuildJoinRequestStoreV2 extends Store {
  initialize() {
    this.waitFor(UserStore);
  }
  getRequest(arg0) {
    return closure_19[arg0];
  }
  getRequests(guildId, applicationStatus) {
    if (typeof StaticGuildJoinRequestIndexes_GUILD_JOIN_REQUESTS_BY_STATUS === "function") {
      let values;
      const _HermesInternal = HermesInternal;
      const combined = "guild-" + guildId + "-" + applicationStatus;
      const obj = GuildJoinRequestUtils;
      if (obj.isActionedApplicationStatus(applicationStatus)) {
        values = secondaryIndexMap2.values(combined);
      } else {
        const tmp5Result = GuildJoinRequestUtils;
        if (tmp5Result.isSubmittedApplicationStatus(applicationStatus)) {
          values = secondaryIndexMap1.values(combined);
        } else {
          values = secondaryIndexMap.values(combined);
        }
      }
      return values;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  getSubmittedGuildJoinRequestTotal(arg0) {
    return closure_6[arg0];
  }
  isFetching() {
    return c9;
  }
  hasFetched(arg0) {
    if (map.has(arg0)) {
      const value = map.get(arg0);
      let tmp3 = null != value;
      if (tmp3) {
        const obj2 = _modDef4467();
        tmp3 = obj2.diff(value, "seconds") < closure_20;
      }
      return tmp3;
    } else {
      return false;
    }
  }
  getSelectedApplicationTab(arg0) {
    let SUBMITTED = closure_16[arg0];
    if (SUBMITTED == null) {
      SUBMITTED = MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED;
    }
    return SUBMITTED;
  }
  getSelectedSortOrder(arg0) {
    let TIMESTAMP_DESC = closure_17[arg0];
    if (TIMESTAMP_DESC == null) {
      TIMESTAMP_DESC = MemberVerificationTypes.GuildJoinRequestSortOrders.TIMESTAMP_DESC;
    }
    return TIMESTAMP_DESC;
  }
  getSelectedGuildJoinRequest(arg0) {
    let value = null;
    if (null != closure_18[arg0]) {
      value = secondaryIndexMap.get(tmp.joinRequestId);
    }
    return value;
  }
  getRequestsForUser(guildId, userId) {
    const arr = closure_8["" + guildId + ":" + userId];
    let found = null;
    if (null != arr) {
      const mapped = arr.map((item) => secondaryIndexMap.get(item));
      found = mapped.filter((item) => null != item);
    }
    return found;
  }
}
const prototype = GuildJoinRequestStoreV2.prototype;
GuildJoinRequestStoreV2.displayName = "GuildJoinRequestStoreV2";
let obj = {
  GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS: function handleFetchByIdSuccess(joinRequest) {
    joinRequest = joinRequest.joinRequest;
    closure_19[joinRequest.joinRequestId] = joinRequest;
    const result = secondaryIndexMap.set(joinRequest.joinRequestId, joinRequest);
    const obj = GuildJoinRequestUtils;
    if (obj.isSubmittedApplicationStatus(joinRequest.applicationStatus)) {
      secondaryIndexMap2.delete(joinRequest.joinRequestId);
      const result1 = secondaryIndexMap1.set(joinRequest.joinRequestId, joinRequest);
    }
    const tmp2Result = GuildJoinRequestUtils;
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
    let map2;
    let requests;
    let status;
    let total;
    ({ requests, guildId } = arg0);
    c9 = false;
    ({ status, total } = arg0);
    if (status === MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED) {
      closure_6[guildId] = total;
      let result = map.set(guildId, _modDef4467());
    }
    const item = requests.forEach((joinRequestId) => {
      closure_1_19[joinRequestId.joinRequestId] = joinRequestId;
      const result = secondaryIndexMap.set(joinRequestId.joinRequestId, joinRequestId);
      const obj = GuildJoinRequestUtils;
      if (obj.isSubmittedApplicationStatus(joinRequestId.applicationStatus)) {
        map2.delete(joinRequestId.joinRequestId);
        const result1 = map.set(joinRequestId.joinRequestId, joinRequestId);
      }
      const tmp2Result = GuildJoinRequestUtils;
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
    const guildId = id.guildId;
    const value = secondaryIndexMap.get(id);
    if (null != value) {
      updateSubmittedGuildJoinRequestTotal(guildId, "DELETED", value.applicationStatus);
      delete closure_19[id];
      secondaryIndexMap.delete(id);
      secondaryIndexMap1.delete(id);
      secondaryIndexMap2.delete(id);
    }
  },
  GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB: function handleSetApplicationTab(arg0) {
    let applicationTab;
    let guildId;
    ({ guildId, applicationTab } = arg0);
    if (applicationTab !== closure_16[guildId]) {
      closure_16[guildId] = applicationTab;
    }
  },
  GUILD_JOIN_REQUESTS_SET_SORT_ORDER: function handleSetSortOrder(arg0) {
    let applicationStatus;
    let guildId;
    let sortOrder;
    ({ guildId, sortOrder, applicationStatus } = arg0);
    if (sortOrder !== closure_17[guildId]) {
      closure_17[guildId] = sortOrder;
      const obj = GuildJoinRequestUtils;
      if (obj.isActionedApplicationStatus(applicationStatus)) {
        secondaryIndexMap2.clear();
      }
      const tmpResult = GuildJoinRequestUtils;
      if (tmpResult.isSubmittedApplicationStatus(applicationStatus)) {
        secondaryIndexMap1.clear();
      }
    }
  },
  GUILD_JOIN_REQUESTS_SET_SELECTED: function handleGuildJoinRequestSelect(guildId) {
    closure_18[guildId.guildId] = guildId.request;
  }
};
const guildJoinRequestStoreV2 = new GuildJoinRequestStoreV2(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/guild_member_verification/GuildJoinRequestStore.tsx");

export default guildJoinRequestStoreV2;