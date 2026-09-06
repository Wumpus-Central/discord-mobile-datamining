// discord_app/modules/instant_invite/useInviteApplicationBypassInfo.tsx
import PermissionStore from "../../stores/PermissionStore.tsx";

const require = fn;
const Constants = fn(1074);
({ GuildFeatures: c3, Permissions: closure_4 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/instant_invite/useInviteApplicationBypassInfo.tsx");

export const useInviteApplicationBypassInfo = function useInviteApplicationBypassInfo(guild) {
  _require = guild;
  const items = [PermissionStore];
  const items1 = [guild];
  let hasItem;
  const stateFromStores = require("initialize").useStateFromStores(
    items,
    () => PermissionStore.can(constants2.KICK_MEMBERS, closure_0),
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
