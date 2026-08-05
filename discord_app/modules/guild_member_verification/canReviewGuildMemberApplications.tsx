// discord_app/modules/guild_member_verification/canReviewGuildMemberApplications.tsx
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import ME from "ME";

let c4;
let c5;
const require = arg1;
({ GuildFeatures: c4, Permissions: c5 } = ME);
const result = require("ME").fileFinishedImporting("modules/guild_member_verification/canReviewGuildMemberApplications.tsx");

export const canReviewGuildMemberApplications = function canReviewGuildMemberApplications(c0) {
  guild = guild.getGuild(c0);
  let tmp2 = null != guild;
  if (tmp2) {
    const features = guild.features;
    let hasItem = features.has(constants.MEMBER_VERIFICATION_MANUAL_APPROVAL);
    if (hasItem) {
      hasItem = getUncachedChannelPermissions.can(constants2.KICK_MEMBERS, guild);
    }
    tmp2 = hasItem;
  }
  return tmp2;
};
export const useCanReviewGuildMemberApplications = function useCanReviewGuildMemberApplications(guildId) {
  const _require = guildId;
  const items = [createGuildRecordFromRust];
  const stateFromStores = _require(589).useStateFromStores(items, () => outer1_2.getGuild(closure_0));
  let hasItem = null != stateFromStores;
  if (hasItem) {
    const features = stateFromStores.features;
    hasItem = features.has(constants.MEMBER_VERIFICATION_MANUAL_APPROVAL);
  }
  if (hasItem) {
    hasItem = getUncachedChannelPermissions.can(constants2.KICK_MEMBERS, stateFromStores);
  }
  if (hasItem) {
    hasItem = _require(4772).guildHasVerificationGate(stateFromStores);
    const tmpResult = _require(4772);
  }
  return hasItem;
};