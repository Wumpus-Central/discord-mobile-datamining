// === Module 7606: GuildMemberSafetyMembers ===

// Module 7606 (GuildMemberSafetyMembers)
import SecondaryIndexMap from "SecondaryIndexMap" /* 4272 */;
import _modDef4757 from "module_4757" /* 4757 */;
import MemberSafetyElasticSearchQueryTypes from "MemberSafetyElasticSearchQueryTypes" /* 7607 */;
import guild_mod_dash_member_safety_DateUtils from "guild_mod_dash_member_safety/DateUtils" /* 7608 */;
import SortUtils from "SortUtils" /* 7610 */;
import MemberSafetyStoreSupplemental from "MemberSafetyStoreSupplemental" /* 7611 */;
import isSpam from "isSpam" /* 7617 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
function getGuildMemberSecondaryIndexes(isCurrentGuildMemberByTimestamp) {
  if (isCurrentGuildMemberByTimestamp.isCurrentGuildMemberByTimestamp) {
    let NEW_GUILD_MEMBER = obj.CURRENT_GUILD_MEMBER;
    let tmp2 = obj;
  } else {
    NEW_GUILD_MEMBER = obj.NEW_GUILD_MEMBER;
    tmp2 = obj;
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
const MemberSafetySecondaryIndex = { NEW_GUILD_MEMBER: "NEW_GUILD_MEMBER", CURRENT_GUILD_MEMBER: "CURRENT_GUILD_MEMBER", INCLUDED_IN_SEARCH_RESULTS: "INCLUDED_IN_SEARCH_RESULTS" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_mod_dash_member_safety/GuildMemberSafetyMembers.tsx");
class GuildMemberSafetyMembers {
  constructor(arg0) {
    merged = Object.assign({ newMemberTimestamp: null });
    merged[0] = Date.now();
    merged.guildId = global;
    secondaryIndexMap = new closure_0(closure_2[1]).SecondaryIndexMap(getGuildMemberSecondaryIndexes, getGuildMemberSecondarySortBy);
    merged._membersMap = secondaryIndexMap;
    return merged;
  }
}
const prototype = GuildMemberSafetyMembers.prototype;
prototype["reset"] = function reset() {
  const _membersMap = this._membersMap;
  _membersMap.clear();
  const secondaryIndexMap = new SecondaryIndexMap.SecondaryIndexMap(getGuildMemberSecondaryIndexes, getGuildMemberSecondarySortBy);
  this._membersMap = secondaryIndexMap;
  const result = this.resetNewMemberTimestamp();
};
prototype["resetNewMemberTimestamp"] = function resetNewMemberTimestamp() {
  this.newMemberTimestamp = Date.now();
};
prototype["enhanceNewMember"] = function enhanceNewMember(trueMember, searchState) {
  let obj = isIncludedInSearchResults;
  if (isIncludedInSearchResults === undefined) {
    obj = {};
  }
  const joinedAtTimestamp = guild_mod_dash_member_safety_DateUtils.getJoinedAtTimestamp(trueMember.joinedAt);
  const result = this._computeMemberSupplementals(trueMember.userId, trueMember.unusualDMActivityUntil);
  ({ hasUnusualDmActivity, hasUnusualAccountActivity, sourceInviteCode, joinSourceType, inviterId, integrationType, joinSourceApplicationId, joinSourceChannelId } = result);
  const obj3 = { hasUnusualDmActivity, hasUnusualAccountActivity, sourceInviteCode, joinSourceType, inviterId, integrationType, joinSourceApplicationId, joinSourceChannelId };
  const user = UserStore.getUser(trueMember.userId);
  const merged = Object.assign(trueMember);
  obj3.isCurrentGuildMemberByTimestamp = joinedAtTimestamp <= this.newMemberTimestamp;
  obj3.isIncludedInSearchResults = false;
  obj3.user = user;
  let ORDER_BY_UNSPECIFIED = searchState.selectedSort;
  if (ORDER_BY_UNSPECIFIED == null) {
    ORDER_BY_UNSPECIFIED = MemberSafetyElasticSearchQueryTypes.OrderBy.ORDER_BY_UNSPECIFIED;
  }
  obj3.sort = SortUtils.getSortValueForMember(trueMember, ORDER_BY_UNSPECIFIED);
  obj3.joinedAtTimestamp = joinedAtTimestamp;
  const merged1 = Object.assign(obj);
  return obj3;
};
prototype["_computeMemberSupplementals"] = function _computeMemberSupplementals(userId, unusualDMActivityUntil) {
  let obj2 = MemberSafetyStoreSupplemental.getMemberSupplementalByGuildId(this.guildId)[userId];
  if (obj2 == null) {
    obj2 = {};
  }
  let sourceInviteCode = obj2.sourceInviteCode;
  if (sourceInviteCode == null) {
    sourceInviteCode = null;
  }
  const obj3 = { sourceInviteCode, joinSourceType: null, inviterId: null, integrationType: null, joinSourceApplicationId: null, joinSourceChannelId: null, hasUnusualDmActivity: null, hasUnusualAccountActivity: null };
  let joinSourceType = obj2.joinSourceType;
  if (joinSourceType == null) {
    joinSourceType = null;
  }
  obj3.joinSourceType = joinSourceType;
  let inviterId = obj2.inviterId;
  if (inviterId == null) {
    inviterId = null;
  }
  obj3.inviterId = inviterId;
  let integrationType = obj2.integrationType;
  if (integrationType == null) {
    integrationType = null;
  }
  obj3.integrationType = integrationType;
  let prop = obj2.joinSourceApplicationId;
  if (prop == null) {
    prop = null;
  }
  obj3.joinSourceApplicationId = prop;
  let joinSourceChannelId = obj2.joinSourceChannelId;
  if (joinSourceChannelId == null) {
    joinSourceChannelId = null;
  }
  obj3.joinSourceChannelId = joinSourceChannelId;
  let tmp9 = null != unusualDMActivityUntil;
  if (tmp9) {
    const _Date = Date;
    const date = new Date(unusualDMActivityUntil);
    const time = date.getTime();
    tmp9 = time >= closure_4 - MemberSafetyElasticSearchQueryTypes.UNUSUAL_DM_COMPARISON_DELTA;
  }
  obj3.hasUnusualDmActivity = tmp9;
  obj3.hasUnusualAccountActivity = isSpam.isSpammer(userId);
  return obj3;
};
prototype["createMember"] = function createMember(userId) {
  const _membersMap = this._membersMap;
  return _membersMap.set(userId.userId, userId);
};
prototype["updateMember"] = function updateMember(userId, arg1) {
  const self = this;
  if (null == arg1) {
    const _membersMap2 = self._membersMap;
    return _membersMap2.set(userId.userId, userId);
  } else {
    const obj = {};
    const merged = Object.assign(userId);
    const obj2 = {};
    const merged1 = Object.assign(arg1);
    let unusualDMActivityUntil = obj2.unusualDMActivityUntil;
    if (unusualDMActivityUntil == null) {
      unusualDMActivityUntil = obj.unusualDMActivityUntil;
    }
    const result = self._computeMemberSupplementals(obj.userId, unusualDMActivityUntil);
    ({ sourceInviteCode, hasUnusualDmActivity, hasUnusualAccountActivity, joinSourceType, inviterId, integrationType, joinSourceApplicationId, joinSourceChannelId } = result);
    if (obj.sourceInviteCode !== sourceInviteCode) {
      obj2.sourceInviteCode = sourceInviteCode;
    }
    if (obj.hasUnusualDmActivity !== hasUnusualDmActivity) {
      obj2.hasUnusualDmActivity = hasUnusualDmActivity;
    }
    if (obj.hasUnusualAccountActivity !== hasUnusualAccountActivity) {
      obj2.hasUnusualAccountActivity = hasUnusualAccountActivity;
    }
    if (obj.joinSourceType !== joinSourceType) {
      obj2.joinSourceType = joinSourceType;
    }
    if (obj.joinSourceApplicationId !== joinSourceApplicationId) {
      obj2.joinSourceApplicationId = joinSourceApplicationId;
    }
    if (obj.joinSourceChannelId !== joinSourceChannelId) {
      obj2.joinSourceChannelId = joinSourceChannelId;
    }
    if (obj.inviterId !== inviterId) {
      obj2.inviterId = inviterId;
    }
    if (obj.integrationType !== integrationType) {
      obj2.integrationType = integrationType;
    }
    let flag = false;
    let flag2 = false;
    const keys = Object.keys();
    if (keys !== undefined) {
      flag2 = flag;
      while (keys[tmp] !== undefined) {
        let tmp15 = obj2[tmp6];
        if (_modDef4757(tmp15, obj[tmp6])) {
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

export { MemberSafetySecondaryIndex };
export const hasUnusualDmActivity = function hasUnusualDmActivity(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    const _Date = Date;
    const date = new Date(arg0);
    const time = date.getTime();
    tmp = time >= closure_4 - MemberSafetyElasticSearchQueryTypes.UNUSUAL_DM_COMPARISON_DELTA;
  }
  return tmp;
};
export { GuildMemberSafetyMembers };