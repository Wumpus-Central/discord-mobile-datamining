// discord_app/modules/guild_mod_dash_member_safety/MemberSafetyStoreSupplemental.tsx
import MemberSafetySupplementalUtils from "MemberSafetySupplementalUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

let joinSourceType;

let closure_2 = {};
const result = size.fileFinishedImporting("modules/guild_mod_dash_member_safety/MemberSafetyStoreSupplemental.tsx");

export const hasMemberSupplemental = function hasMemberSupplemental(arg0, arg1) {
  return null != closure_2[arg0] && null != tmp[arg0][arg1];
};
export const getMemberSupplementalByGuildId = function getMemberSupplementalByGuildId(guildId) {
  if (null == closure_2[guildId]) {
    closure_2[guildId] = {};
  }
  return closure_2[guildId];
};
export const syncMemberSupplemental = function syncMemberSupplemental(guildId, memberSupplementals) {
  if (0 === memberSupplementals.length) {
    return false;
  } else {
    if (null == closure_2[guildId]) {
      closure_2[guildId] = {};
    }
    let closure_0 = closure_2[guildId];
    const item = memberSupplementals.forEach((joinSourceType) => {
      let integrationType;
      let inviterId;
      let joinSourceChannelId;
      let prop;
      let sourceInviteCode;
      let userId;
      joinSourceType = joinSourceType.joinSourceType;
      if (joinSourceType == null) {
        let joinSourceType1;
        if (closure_0[joinSourceType.userId] != null) {
          joinSourceType1 = tmp2.joinSourceType;
        }
        joinSourceType = joinSourceType1;
      }
      if (joinSourceType == null) {
        joinSourceType = null;
      }
      const tmp5 =
        (null != joinSourceType && joinSourceType !== MemberSafetySupplementalUtils.JoinSourceType.UNSPECIFIED) ||
        null == joinSourceType.sourceInviteCode;
      if (!tmp5) {
        joinSourceType = MemberSafetySupplementalUtils.JoinSourceType.INVITE;
      }
      const obj = {
        userId: joinSourceType.userId,
        sourceInviteCode,
        joinSourceType,
        inviterId,
        integrationType,
        joinSourceApplicationId: prop,
        joinSourceChannelId,
      };
      ({ sourceInviteCode, userId } = joinSourceType);
      if (sourceInviteCode == null) {
        let sourceInviteCode1;
        if (closure_0[joinSourceType.userId] != null) {
          sourceInviteCode1 = tmp2.sourceInviteCode;
        }
        sourceInviteCode = sourceInviteCode1;
      }
      if (sourceInviteCode == null) {
        sourceInviteCode = null;
      }
      inviterId = joinSourceType.inviterId;
      if (inviterId == null) {
        let inviterId1;
        if (closure_0[joinSourceType.userId] != null) {
          inviterId1 = tmp2.inviterId;
        }
        inviterId = inviterId1;
      }
      if (inviterId == null) {
        inviterId = null;
      }
      integrationType = joinSourceType.integrationType;
      if (integrationType == null) {
        let integrationType1;
        if (closure_0[joinSourceType.userId] != null) {
          integrationType1 = tmp2.integrationType;
        }
        integrationType = integrationType1;
      }
      if (integrationType == null) {
        integrationType = null;
      }
      prop = joinSourceType.joinSourceApplicationId;
      if (prop == null) {
        let prop1;
        if (closure_0[joinSourceType.userId] != null) {
          prop1 = tmp2.joinSourceApplicationId;
        }
        prop = prop1;
      }
      if (prop == null) {
        prop = null;
      }
      joinSourceChannelId = joinSourceType.joinSourceChannelId;
      if (joinSourceChannelId == null) {
        let joinSourceChannelId1;
        if (closure_0[joinSourceType.userId] != null) {
          joinSourceChannelId1 = tmp2.joinSourceChannelId;
        }
        joinSourceChannelId = joinSourceChannelId1;
      }
      if (joinSourceChannelId == null) {
        joinSourceChannelId = null;
      }
      closure_0[userId] = obj;
    });
    return true;
  }
};
