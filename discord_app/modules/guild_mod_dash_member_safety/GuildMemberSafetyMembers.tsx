// discord_app/modules/guild_mod_dash_member_safety/GuildMemberSafetyMembers.tsx
import SecondaryIndexMap from "../../../discord_common/js/packages/secondary-index-map/SecondaryIndexMap.tsx";
import isEqualDefault from "../../../_runtime/05010_isEqual.js";
import MemberSafetyElasticSearchQueryTypes from "MemberSafetyElasticSearchQueryTypes.tsx";
import guild_mod_dash_member_safety_DateUtils from "DateUtils.tsx";
import SortUtils from "SortUtils.tsx";
import MemberSafetyStoreSupplemental from "MemberSafetyStoreSupplemental.tsx";
import isSpam from "../messages/isSpam.tsx";
import UserStore from "../../stores/UserStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

function getGuildMemberSecondaryIndexes(isCurrentGuildMemberByTimestamp) {
  let NEW_GUILD_MEMBER;
  let tmp2;
  if (isCurrentGuildMemberByTimestamp.isCurrentGuildMemberByTimestamp) {
    NEW_GUILD_MEMBER = obj.CURRENT_GUILD_MEMBER;
    tmp2 = obj;
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
const MemberSafetySecondaryIndex = {
  NEW_GUILD_MEMBER: "NEW_GUILD_MEMBER",
  CURRENT_GUILD_MEMBER: "CURRENT_GUILD_MEMBER",
  INCLUDED_IN_SEARCH_RESULTS: "INCLUDED_IN_SEARCH_RESULTS",
};
let result = size.fileFinishedImporting("modules/guild_mod_dash_member_safety/GuildMemberSafetyMembers.tsx");
class GuildMemberSafetyMembers {
  constructor(guildId) {
    const merged = Object.assign({ newMemberTimestamp: null });
    merged[0] = Date.now();
    merged.guildId = guildId;
    const secondaryIndexMap = new SecondaryIndexMap.SecondaryIndexMap(
      getGuildMemberSecondaryIndexes,
      getGuildMemberSecondarySortBy,
    );
    merged._membersMap = secondaryIndexMap;
    return merged;
  }
  reset() {
    const _membersMap = this._membersMap;
    _membersMap.clear();
    const secondaryIndexMap = new SecondaryIndexMap.SecondaryIndexMap(
      getGuildMemberSecondaryIndexes,
      getGuildMemberSecondarySortBy,
    );
    this._membersMap = secondaryIndexMap;
    const result = this.resetNewMemberTimestamp();
  }
  resetNewMemberTimestamp() {
    this.newMemberTimestamp = Date.now();
  }
  enhanceNewMember(trueMember, searchState) {
    let ORDER_BY_UNSPECIFIED;
    let getSortValueForMember;
    let hasUnusualAccountActivity;
    let hasUnusualDmActivity;
    let integrationType;
    let inviterId;
    let joinSourceApplicationId;
    let joinSourceChannelId;
    let joinSourceType;
    let sourceInviteCode;
    let user;
    let obj = isIncludedInSearchResults;
    if (isIncludedInSearchResults === undefined) {
      obj = {};
    }
    const obj2 = guild_mod_dash_member_safety_DateUtils;
    const joinedAtTimestamp = obj2.getJoinedAtTimestamp(trueMember.joinedAt);
    const result = this._computeMemberSupplementals(trueMember.userId, trueMember.unusualDMActivityUntil);
    ({
      hasUnusualDmActivity,
      hasUnusualAccountActivity,
      sourceInviteCode,
      joinSourceType,
      inviterId,
      integrationType,
      joinSourceApplicationId,
      joinSourceChannelId,
    } = result);
    const obj3 = {
      hasUnusualDmActivity,
      hasUnusualAccountActivity,
      sourceInviteCode,
      joinSourceType,
      inviterId,
      integrationType,
      joinSourceApplicationId,
      joinSourceChannelId,
      isCurrentGuildMemberByTimestamp: joinedAtTimestamp <= this.newMemberTimestamp,
      isIncludedInSearchResults: false,
      user,
      sort: getSortValueForMember(trueMember, ORDER_BY_UNSPECIFIED),
      joinedAtTimestamp,
    };
    user = UserStore.getUser(trueMember.userId);
    const merged = Object.assign(trueMember);
    ORDER_BY_UNSPECIFIED = searchState.selectedSort;
    getSortValueForMember = SortUtils.getSortValueForMember;
    SortUtils;
    if (ORDER_BY_UNSPECIFIED == null) {
      ORDER_BY_UNSPECIFIED = MemberSafetyElasticSearchQueryTypes.OrderBy.ORDER_BY_UNSPECIFIED;
    }
    const merged1 = Object.assign(obj);
    return obj3;
  }
  _computeMemberSupplementals(userId, unusualDMActivityUntil) {
    let integrationType;
    let inviterId;
    let joinSourceChannelId;
    let joinSourceType;
    let prop;
    let tmp9;
    let tmpResult;
    const obj = MemberSafetyStoreSupplemental;
    let obj2 = obj.getMemberSupplementalByGuildId(this.guildId)[userId];
    if (obj2 == null) {
      obj2 = {};
    }
    let sourceInviteCode = obj2.sourceInviteCode;
    if (sourceInviteCode == null) {
      sourceInviteCode = null;
    }
    const obj3 = {
      sourceInviteCode,
      joinSourceType,
      inviterId,
      integrationType,
      joinSourceApplicationId: prop,
      joinSourceChannelId,
      hasUnusualDmActivity: tmp9,
      hasUnusualAccountActivity: tmpResult.isSpammer(userId),
    };
    joinSourceType = obj2.joinSourceType;
    if (joinSourceType == null) {
      joinSourceType = null;
    }
    inviterId = obj2.inviterId;
    if (inviterId == null) {
      inviterId = null;
    }
    integrationType = obj2.integrationType;
    if (integrationType == null) {
      integrationType = null;
    }
    prop = obj2.joinSourceApplicationId;
    if (prop == null) {
      prop = null;
    }
    joinSourceChannelId = obj2.joinSourceChannelId;
    if (joinSourceChannelId == null) {
      joinSourceChannelId = null;
    }
    tmp9 = null != unusualDMActivityUntil;
    if (tmp9) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      const date = new Date(unusualDMActivityUntil);
      const time = date.getTime();
      tmp9 = time >= closure_4 - MemberSafetyElasticSearchQueryTypes.UNUSUAL_DM_COMPARISON_DELTA;
    }
    tmpResult = isSpam;
    return obj3;
  }
  createMember(userId) {
    const _membersMap = this._membersMap;
    return _membersMap.set(userId.userId, userId);
  }
  updateMember(userId, arg1) {
    let hasUnusualAccountActivity;
    let hasUnusualDmActivity;
    let integrationType;
    let inviterId;
    let joinSourceApplicationId;
    let joinSourceChannelId;
    let joinSourceType;
    let sourceInviteCode;
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
      const _computeMemberSupplementals = self._computeMemberSupplementals;
      userId = obj.userId;
      if (unusualDMActivityUntil == null) {
        unusualDMActivityUntil = obj.unusualDMActivityUntil;
      }
      const result = _computeMemberSupplementals(userId, unusualDMActivityUntil);
      ({
        sourceInviteCode,
        hasUnusualDmActivity,
        hasUnusualAccountActivity,
        joinSourceType,
        inviterId,
        integrationType,
        joinSourceApplicationId,
        joinSourceChannelId,
      } = result);
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
      const tmp7 = _membersMap.set(obj.userId, obj) || flag2;
      return tmp7;
    }
  }
  removeMember(arg0) {
    const _membersMap = this._membersMap;
    return _membersMap.delete(arg0);
  }
  getMemberByUserId(id) {
    const _membersMap = this._membersMap;
    return _membersMap.get(id);
  }
  values(arg0) {
    const _membersMap = this._membersMap;
    return _membersMap.values(arg0, true);
  }
  count(arg0) {
    const _membersMap = this._membersMap;
    return _membersMap.size(arg0);
  }
}
Object.defineProperty(GuildMemberSafetyMembers.prototype, "version", {
  get: function version() {
    return this._membersMap.version;
  },
  set: undefined,
});
const hasUnusualDmActivity_export = function hasUnusualDmActivity(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    const _Date = Date;
    const self = this;
    const self2 = this;
    const date = new Date(arg0);
    const time = date.getTime();
    tmp = time >= closure_4 - MemberSafetyElasticSearchQueryTypes.UNUSUAL_DM_COMPARISON_DELTA;
  }
  return tmp;
};

export { MemberSafetySecondaryIndex };
export { hasUnusualDmActivity_export as hasUnusualDmActivity };
export { GuildMemberSafetyMembers };
