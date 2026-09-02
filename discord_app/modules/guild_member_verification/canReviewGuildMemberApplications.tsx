// === Module 6119: canReviewGuildMemberApplications ===

// Module 6119 (canReviewGuildMemberApplications)
import closure_2 from "createGuildRecordFromRust" /* 1908 */;
import closure_3 from "getUncachedChannelPermissions" /* 4120 */;
import ME from "ME" /* 673 */;

const require = arg1;
({ GuildFeatures: c4, Permissions: c5 } = ME);
const result = require("set").fileFinishedImporting("modules/guild_member_verification/canReviewGuildMemberApplications.tsx");

export const canReviewGuildMemberApplications = function canReviewGuildMemberApplications(c0) {
  guild = guild.getGuild(c0);
  let tmp2 = null != guild;
  if (tmp2) {
    const features = guild.features;
    let hasItem = features.has(constants.MEMBER_VERIFICATION_MANUAL_APPROVAL);
    if (hasItem) {
      hasItem = closure_3.can(constants2.KICK_MEMBERS, guild);
    }
    tmp2 = hasItem;
  }
  return tmp2;
};
export const useCanReviewGuildMemberApplications = function useCanReviewGuildMemberApplications(guildId) {
  const _require = guildId;
  const items = [closure_2];
  const stateFromStores = _require(586).useStateFromStores(items, () => closure_1_2.getGuild(closure_0));
  let hasItem = null != stateFromStores;
  if (hasItem) {
    const features = stateFromStores.features;
    hasItem = features.has(constants.MEMBER_VERIFICATION_MANUAL_APPROVAL);
  }
  if (hasItem) {
    hasItem = closure_3.can(constants2.KICK_MEMBERS, stateFromStores);
  }
  if (hasItem) {
    hasItem = _require(5011).guildHasVerificationGate(stateFromStores);
    const tmpResult = _require(5011);
  }
  return hasItem;
};