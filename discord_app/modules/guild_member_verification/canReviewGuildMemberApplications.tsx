// discord_app/modules/guild_member_verification/canReviewGuildMemberApplications.tsx
import closure_2 from "../../stores/GuildStore.tsx";
import closure_3 from "../../stores/PermissionStore.tsx";
import ME from "../../Constants.tsx";
import { isValidFormResponse } from "MemberVerificationUtils.tsx";

const require = arg1;
({ GuildFeatures: c4, Permissions: c5 } = ME);
const result = require("set").fileFinishedImporting(
  "modules/guild_member_verification/canReviewGuildMemberApplications.tsx",
);

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
  const stateFromStores = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () =>
    closure_1_2.getGuild(closure_0),
  );
  let hasItem = null != stateFromStores;
  if (hasItem) {
    const features = stateFromStores.features;
    hasItem = features.has(constants.MEMBER_VERIFICATION_MANUAL_APPROVAL);
  }
  if (hasItem) {
    hasItem = closure_3.can(constants2.KICK_MEMBERS, stateFromStores);
  }
  if (hasItem) {
    hasItem = require("MemberVerificationUtils.tsx").guildHasVerificationGate(stateFromStores);
    const tmpResult = isValidFormResponse;
  }
  return hasItem;
};
