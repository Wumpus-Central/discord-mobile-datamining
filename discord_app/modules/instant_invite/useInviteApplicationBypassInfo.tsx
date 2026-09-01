// discord_app/modules/instant_invite/useInviteApplicationBypassInfo.tsx
import closure_2 from "../../stores/PermissionStore.tsx";
import ME from "../../Constants.tsx";

const require = arg1;
({ GuildFeatures: c3, Permissions: c4 } = ME);
const result = require("set").fileFinishedImporting("modules/instant_invite/useInviteApplicationBypassInfo.tsx");

export const useInviteApplicationBypassInfo = function useInviteApplicationBypassInfo(guild) {
  const _require = guild;
  const items = [closure_2];
  const items1 = [guild];
  let hasItem;
  const stateFromStores = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(
    items,
    () => closure_1_2.can(closure_1_4.KICK_MEMBERS, closure_0),
    items1,
  );
  if (guild != null) {
    const features = guild.features;
    hasItem = features.has(constants.MEMBER_VERIFICATION_MANUAL_APPROVAL);
  }
  let tmp4 = !hasItem;
  if (hasItem) {
    let hasItem1;
    if (guild != null) {
      const features2 = guild.features;
      hasItem1 = features2.has(constants.MEMBER_VERIFICATION_GATE_ENABLED);
    }
    tmp4 = !hasItem1;
  }
  const isManualApprovalGuild = !tmp4;
  let canCreateApplicationBypassInvites = isManualApprovalGuild;
  if (isManualApprovalGuild) {
    canCreateApplicationBypassInvites = stateFromStores;
  }
  return { canCreateApplicationBypassInvites, isManualApprovalGuild };
};
