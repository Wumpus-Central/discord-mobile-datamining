// === Module 7256: hasMemberSupplemental ===

// Module 7256 (hasMemberSupplemental)
import set from "set" /* 2 */;

let closure_2 = {};
const result = set.fileFinishedImporting("modules/guild_mod_dash_member_safety/MemberSafetyStoreSupplemental.tsx");

export const hasMemberSupplemental = function hasMemberSupplemental(arg0, arg1) {
  let tmp2 = null != dependencyMap[arg0];
  if (tmp2) {
    tmp2 = null != tmp[arg0][arg1];
  }
  return tmp2;
};
export const getMemberSupplementalByGuildId = function getMemberSupplementalByGuildId(guildId) {
  if (null == dependencyMap[guildId]) {
    tmp[guildId] = {};
  }
  return dependencyMap[guildId];
};
export const syncMemberSupplemental = function syncMemberSupplemental(guildId, memberSupplementals) {
  if (0 === memberSupplementals.length) {
    return false;
  } else {
    if (null == dependencyMap[guildId]) {
      tmp2[guildId] = {};
    }
    closure_0 = tmp2[guildId];
    const item = memberSupplementals.forEach((joinSourceType) => {
      joinSourceType = joinSourceType.joinSourceType;
      if (joinSourceType == null) {
        let joinSourceType1;
        if (tmp2 != null) {
          joinSourceType1 = tmp2.joinSourceType;
        }
        joinSourceType = joinSourceType1;
      }
      if (joinSourceType == null) {
        joinSourceType = null;
      }
      let tmp5 = null != joinSourceType;
      if (tmp5) {
        tmp5 = joinSourceType !== dependencyMap(closure_1_1[0]).JoinSourceType.UNSPECIFIED;
      }
      if (!tmp5) {
        tmp5 = null == joinSourceType.sourceInviteCode;
      }
      if (!tmp5) {
        joinSourceType = dependencyMap(closure_1_1[0]).JoinSourceType.INVITE;
      }
      const obj = { userId: joinSourceType.userId, sourceInviteCode: null, joinSourceType: null, inviterId: null, integrationType: null, joinSourceApplicationId: null, joinSourceChannelId: null };
      ({ sourceInviteCode, userId } = joinSourceType);
      if (sourceInviteCode == null) {
        sourceInviteCode = undefined;
        if (tmp2 != null) {
          sourceInviteCode = tmp2.sourceInviteCode;
        }
      }
      if (sourceInviteCode == null) {
        sourceInviteCode = null;
      }
      obj[1] = sourceInviteCode;
      obj[2] = joinSourceType;
      let inviterId = joinSourceType.inviterId;
      if (inviterId == null) {
        let inviterId1;
        if (tmp2 != null) {
          inviterId1 = tmp2.inviterId;
        }
        inviterId = inviterId1;
      }
      if (inviterId == null) {
        inviterId = null;
      }
      obj[3] = inviterId;
      let integrationType = joinSourceType.integrationType;
      if (integrationType == null) {
        let integrationType1;
        if (tmp2 != null) {
          integrationType1 = tmp2.integrationType;
        }
        integrationType = integrationType1;
      }
      if (integrationType == null) {
        integrationType = null;
      }
      obj[4] = integrationType;
      let prop = joinSourceType.joinSourceApplicationId;
      if (prop == null) {
        let prop1;
        if (tmp2 != null) {
          prop1 = tmp2.joinSourceApplicationId;
        }
        prop = prop1;
      }
      if (prop == null) {
        prop = null;
      }
      obj[5] = prop;
      let joinSourceChannelId = joinSourceType.joinSourceChannelId;
      if (joinSourceChannelId == null) {
        let joinSourceChannelId1;
        if (tmp2 != null) {
          joinSourceChannelId1 = tmp2.joinSourceChannelId;
        }
        joinSourceChannelId = joinSourceChannelId1;
      }
      if (joinSourceChannelId == null) {
        joinSourceChannelId = null;
      }
      obj[6] = joinSourceChannelId;
      dependencyMap[userId] = obj;
    });
    return true;
  }
};