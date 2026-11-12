// === Module 12435: useCanInviteGuildIds ===

// Module 12435 (useCanInviteGuildIds)
import GuildMemberStore from "GuildMemberStore" /* 5155 */;
import GuildRoleStore from "GuildRoleStore" /* 5149 */;
import GuildStore from "GuildStore" /* 5114 */;
import PermissionStore from "PermissionStore" /* 5175 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/useCanInviteGuildIds.tsx");

export default function useCanInviteGuildIds(location) {
  linkedGameOrgInvitesEnabled = linkedGameOrgInvitesEnabled(12436).useLinkedGameOrgInvitesEnabled(location);
  const obj = linkedGameOrgInvitesEnabled(12436);
  items = [GuildStore, GuildMemberStore, GuildRoleStore, PermissionStore];
  const items1 = [linkedGameOrgInvitesEnabled];
  return linkedGameOrgInvitesEnabled(504).useStateFromStoresArray(items, () => {
    if (linkedGameOrgInvitesEnabled) {
      const guildsArray = GuildStore.getGuildsArray();
      const found = guildsArray.filter((item) => linkedGameOrgInvitesEnabled(closure_1_1[6]).canInviteToLinkedGameOrganization(item, closure_1_5, closure_1_2, closure_1_3));
      const mapped = found.map((id) => id.id);
      let sorted = mapped.sort();
    } else {
      sorted = [];
    }
    return sorted;
  }, items1);
};