// === Module 7241: getGuildMemberSecondaryIndexes ===

// Module 7241 (getGuildMemberSecondaryIndexes)
import version from "version" /* 4117 */;
import isEqualDefault from "isEqual" /* 4643 */;
import result2 from "result" /* 7242 */;
import getJoinedAtDateFormatter from "getJoinedAtDateFormatter" /* 7243 */;
import getSortValueForMember from "getSortValueForMember" /* 7245 */;
import hasMemberSupplemental from "hasMemberSupplemental" /* 7246 */;
import isSpamSupported from "isSpamSupported" /* 7252 */;
import closure_3 from "mergeGuildAvatar" /* 1922 */;

require = arg1;
function getGuildMemberSecondaryIndexes(isCurrentGuildMemberByTimestamp) {
  if (isCurrentGuildMemberByTimestamp.isCurrentGuildMemberByTimestamp) {
    let NEW_GUILD_MEMBER = tmp.CURRENT_GUILD_MEMBER;
    let tmp2 = tmp;
  } else {
    NEW_GUILD_MEMBER = tmp.NEW_GUILD_MEMBER;
    tmp2 = tmp;
  }
  const items = [NEW_GUILD_MEMBER];
  if (isCurrentGuildMemberByTimestamp.isIncludedInSearchResults) {
    items.push(tmp2.INCLUDED_IN_SEARCH_RESULTS);
  }
  return items;
}
function getGuildMemberSecondarySortBy(arg0) {
  return arg0.sort;
}
let closure_4 = Date.now();
let obj = { NEW_GUILD_MEMBER: "NEW_GUILD_MEMBER", CURRENT_GUILD_MEMBER: "CURRENT_GUILD_MEMBER", INCLUDED_IN_SEARCH_RESULTS: "INCLUDED_IN_SEARCH_RESULTS" };
let result = require("set").fileFinishedImporting("modules/guild_mod_dash_member_safety/GuildMemberSafetyMembers.tsx");
class GuildMemberSafetyMembers {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    obj[0] = Date.now();
    obj.guildId = global;
    secondaryIndexMap = new require("version").SecondaryIndexMap(getGuildMemberSecondaryIndexes, getGuildMemberSecondarySortBy);
    obj._membersMap = secondaryIndexMap;
    return obj;
  }
}
const prototype = GuildMemberSafetyMembers.prototype;
prototype["reset"] = function reset() {
  const _membersMap = this._membersMap;
  _membersMap.clear();
  const secondaryIndexMap = new version.SecondaryIndexMap(getGuildMemberSecondaryIndexes, getGuildMemberSecondarySortBy);
  this._membersMap = secondaryIndexMap;
  const result = this.resetNewMemberTimestamp();
};
prototype["resetNewMemberTimestamp"] = function resetNewMemberTimestamp() {
  this.newMemberTimestamp = Date.now();
};
prototype["enhanceNewMember"] = function enhanceNewMember(trueMember, searchState, isIncludedInSearchResults) {
  obj = isIncludedInSearchResults;
  if (isIncludedInSearchResults === undefined) {
    obj = {};
  }
  const joinedAtTimestamp = getJoinedAtDateFormatter.getJoinedAtTimestamp(trueMember.joinedAt);
  const result = this._computeMemberSupplementals(trueMember.userId, trueMember.unusualDMActivityUntil);
  ({ hasUnusualDmActivity, hasUnusualAccountActivity, sourceInviteCode, joinSourceType, inviterId, integrationType, joinSourceApplicationId, joinSourceChannelId } = result);
  obj = { hasUnusualDmActivity, hasUnusualAccountActivity, sourceInviteCode, joinSourceType, inviterId, integrationType, joinSourceApplicationId, joinSourceChannelId };
  user = user.getUser(trueMember.userId);
  const merged = Object.assign(trueMember);
  obj.isCurrentGuildMemberByTimestamp = joinedAtTimestamp <= this.newMemberTimestamp;
  obj.isIncludedInSearchResults = false;
  obj.user = user;
  const obj2 = getJoinedAtDateFormatter;
  const tmp = require;
  let ORDER_BY_UNSPECIFIED = searchState.selectedSort;
  if (ORDER_BY_UNSPECIFIED == null) {
    ORDER_BY_UNSPECIFIED = result2.OrderBy.ORDER_BY_UNSPECIFIED;
  }
  obj.sort = getSortValueForMember.getSortValueForMember(trueMember, ORDER_BY_UNSPECIFIED);
  obj.joinedAtTimestamp = joinedAtTimestamp;
  const merged1 = Object.assign(obj);
  return obj;
};
prototype["_computeMemberSupplementals"] = function _computeMemberSupplementals(userId, unusualDMActivityUntil) {
  obj = hasMemberSupplemental;
  obj = obj.getMemberSupplementalByGuildId(this.guildId)[userId];
  if (obj == null) {
    obj = {};
  }
  let sourceInviteCode = obj.sourceInviteCode;
  if (sourceInviteCode == null) {
    sourceInviteCode = null;
  }
  obj = { sourceInviteCode, joinSourceType: null, inviterId: null, integrationType: null, joinSourceApplicationId: null, joinSourceChannelId: null, hasUnusualDmActivity: null, hasUnusualAccountActivity: null };
  let joinSourceType = obj.joinSourceType;
  if (joinSourceType == null) {
    joinSourceType = null;
  }
  obj[1] = joinSourceType;
  let inviterId = obj.inviterId;
  if (inviterId == null) {
    inviterId = null;
  }
  obj[2] = inviterId;
  let integrationType = obj.integrationType;
  if (integrationType == null) {
    integrationType = null;
  }
  obj[3] = integrationType;
  let prop = obj.joinSourceApplicationId;
  if (prop == null) {
    prop = null;
  }
  obj[4] = prop;
  let joinSourceChannelId = obj.joinSourceChannelId;
  if (joinSourceChannelId == null) {
    joinSourceChannelId = null;
  }
  obj[5] = joinSourceChannelId;
  let tmp9 = null != unusualDMActivityUntil;
  if (tmp9) {
    const _Date = Date;
    const date = new Date(unusualDMActivityUntil);
    const time = date.getTime();
    tmp9 = time >= closure_4 - tmp(7242).UNUSUAL_DM_COMPARISON_DELTA;
  }
  obj[6] = tmp9;
  obj[7] = isSpamSupported.isSpammer(userId);
  return obj;
};
prototype["createMember"] = function createMember(userId) {
  const _membersMap = this._membersMap;
  return _membersMap.set(userId.userId, userId);
};
prototype["updateMember"] = function updateMember(userId) {
  const self = this;
  if (null == arg1) {
    const _membersMap2 = self._membersMap;
    return _membersMap2.set(userId.userId, userId);
  } else {
    obj = {};
    const merged = Object.assign(userId);
    obj = {};
    const merged1 = Object.assign(arg1);
    let unusualDMActivityUntil = obj.unusualDMActivityUntil;
    if (unusualDMActivityUntil == null) {
      unusualDMActivityUntil = obj.unusualDMActivityUntil;
    }
    const result = self._computeMemberSupplementals(obj.userId, unusualDMActivityUntil);
    ({ sourceInviteCode, hasUnusualDmActivity, hasUnusualAccountActivity, joinSourceType, inviterId, integrationType, joinSourceApplicationId, joinSourceChannelId } = result);
    if (obj.sourceInviteCode !== sourceInviteCode) {
      obj.sourceInviteCode = sourceInviteCode;
    }
    if (obj.hasUnusualDmActivity !== hasUnusualDmActivity) {
      obj.hasUnusualDmActivity = hasUnusualDmActivity;
    }
    if (obj.hasUnusualAccountActivity !== hasUnusualAccountActivity) {
      obj.hasUnusualAccountActivity = hasUnusualAccountActivity;
    }
    if (obj.joinSourceType !== joinSourceType) {
      obj.joinSourceType = joinSourceType;
    }
    if (obj.joinSourceApplicationId !== joinSourceApplicationId) {
      obj.joinSourceApplicationId = joinSourceApplicationId;
    }
    if (obj.joinSourceChannelId !== joinSourceChannelId) {
      obj.joinSourceChannelId = joinSourceChannelId;
    }
    if (obj.inviterId !== inviterId) {
      obj.inviterId = inviterId;
    }
    if (obj.integrationType !== integrationType) {
      obj.integrationType = integrationType;
    }
    let flag = false;
    let flag2 = false;
    const keys = Object.keys();
    if (keys !== undefined) {
      flag2 = flag;
      while (keys[tmp] !== undefined) {
        let tmp14 = tmp6;
        let tmp15 = obj[tmp6];
        let tmp16 = importDefault;
        let tmp17 = dependencyMap;
        if (isEqualDefault(tmp15, obj[tmp6])) {
          continue;
        } else {
          obj[tmp6] = tmp15;
          flag = true;
          continue;
        }
        continue;
      }
    }
    const _membersMap = self._membersMap;
    return _membersMap.set(obj.userId, obj) || flag2;
  }
};
prototype["removeMember"] = function removeMember(arg0) {
  const _membersMap = this._membersMap;
  return _membersMap.delete(arg0);
};
prototype["getMemberByUserId"] = function getMemberByUserId(id) {
  const _membersMap = this._membersMap;
  return _membersMap.get(id);
};
prototype["values"] = function values(arg0) {
  const _membersMap = this._membersMap;
  return _membersMap.values(arg0, true);
};
prototype["count"] = function count(arg0) {
  const _membersMap = this._membersMap;
  return _membersMap.size(arg0);
};
Object.defineProperty(prototype, "version", {
  get: function version() {
    return this._membersMap.version;
  },
  set: undefined
});

export const MemberSafetySecondaryIndex = obj;
export const hasUnusualDmActivity = function hasUnusualDmActivity(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    const _Date = Date;
    const date = new Date(arg0);
    const time = date.getTime();
    tmp = time >= closure_4 - result2.UNUSUAL_DM_COMPARISON_DELTA;
  }
  return tmp;
};
export { GuildMemberSafetyMembers };