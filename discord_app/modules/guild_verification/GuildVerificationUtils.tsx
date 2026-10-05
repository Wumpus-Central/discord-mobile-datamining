// discord_app/modules/guild_verification/GuildVerificationUtils.tsx
import Constants from "../../Constants.tsx";
import MemberVerificationTypes from "../guild_member_verification/MemberVerificationTypes.tsx";
import transitionToMemberVerification from "../guild_member_verification/transitionToMemberVerification.native.tsx";
import MemberVerificationModalActionCreators from "../guild_member_verification/MemberVerificationModalActionCreators.tsx";
import UserGuildJoinRequestStore from "../guild_member_verification/UserGuildJoinRequestStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const GuildFeatures = Constants.GuildFeatures;
let result = size.fileFinishedImporting("modules/guild_verification/GuildVerificationUtils.tsx");

export const inviteGuildHasPendingMemberDisabledVerification = function inviteGuildHasPendingMemberDisabledVerification(
  guild,
) {
  const features = guild.features;
  let hasItem;
  if (features != null) {
    hasItem = features.includes(GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED);
  }
  if (hasItem) {
    const features2 = guild.features;
    let hasItem1;
    if (features2 != null) {
      hasItem1 = features2.includes(GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL);
    }
    hasItem = hasItem1;
  }
  return hasItem;
};
export const openVerificationModalOrTransitionToApplication = function openVerificationModalOrTransitionToApplication(
  id,
) {
  const request = UserGuildJoinRequestStore.getRequest(id);
  if (null != request) {
    if (request.applicationStatus !== MemberVerificationTypes.GuildJoinRequestApplicationStatuses.STARTED) {
      const tmp2Result = transitionToMemberVerification;
      const result = tmp2Result.transitionToMemberVerification(id);
    }
  }
  const obj = MemberVerificationModalActionCreators;
  const result1 = obj.openMemberVerificationModal(id);
};
