// discord_app/modules/guild_member_verification/canReviewGuildMemberApplications.tsx
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";

const require = fn;
const Constants = fn(1074);
({ GuildFeatures: closure_4, Permissions: hasOwnProperty } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/canReviewGuildMemberApplications.tsx");

export const canReviewGuildMemberApplications = function canReviewGuildMemberApplications(arg0) {
  const guild = GuildStore.getGuild(arg0);
  let tmp2 = null != guild;
  if (tmp2) {
    const features = guild.features;
    let hasItem = features.has(constants.MEMBER_VERIFICATION_MANUAL_APPROVAL);
    if (hasItem) {
      hasItem = PermissionStore.can(constants2.KICK_MEMBERS, guild);
    }
    tmp2 = hasItem;
  }
  return tmp2;
};
export const useCanReviewGuildMemberApplications = function useCanReviewGuildMemberApplications(guildId) {
  _require = guildId;
  const items = [GuildStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildStore.getGuild(closure_0));
  let hasItem = null != stateFromStores;
  if (hasItem) {
    const features = stateFromStores.features;
    hasItem = features.has(constants.MEMBER_VERIFICATION_MANUAL_APPROVAL);
  }
  if (hasItem) {
    hasItem = PermissionStore.can(constants2.KICK_MEMBERS, stateFromStores);
  }
  if (hasItem) {
    hasItem = require("MemberVerificationUtils").guildHasVerificationGate(stateFromStores);
    const tmpResult = require("MemberVerificationUtils");
  }
  return hasItem;
};
