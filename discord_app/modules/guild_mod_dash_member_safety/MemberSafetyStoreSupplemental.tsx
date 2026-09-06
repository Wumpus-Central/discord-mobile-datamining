// === Module 7501: MemberSafetyStoreSupplemental ===

// Module 7501 (MemberSafetyStoreSupplemental)
import MemberSafetySupplementalUtils from "MemberSafetySupplementalUtils" /* 7502 */;
import size from "module_2" /* 2 */;

const dependencyMap = {};
const result = size.fileFinishedImporting("modules/guild_mod_dash_member_safety/MemberSafetyStoreSupplemental.tsx");

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
        tmp5 = joinSourceType !== MemberSafetySupplementalUtils.JoinSourceType.UNSPECIFIED;
      }
      if (!tmp5) {
        tmp5 = null == joinSourceType.sourceInviteCode;
      }
      if (!tmp5) {
        joinSourceType = MemberSafetySupplementalUtils.JoinSourceType.INVITE;
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
      obj.sourceInviteCode = sourceInviteCode;
      obj.joinSourceType = joinSourceType;
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
      obj.inviterId = inviterId;
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
      obj.integrationType = integrationType;
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
      obj.joinSourceApplicationId = prop;
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
      obj.joinSourceChannelId = joinSourceChannelId;
      closure_0[userId] = obj;
    });
    return true;
  }
};