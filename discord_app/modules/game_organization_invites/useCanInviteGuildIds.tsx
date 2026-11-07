// === Module 11816: useCanInviteGuildIds ===

// Module 11816 (useCanInviteGuildIds)
import GuildMemberStore from "GuildMemberStore" /* 5052 */;
import GuildRoleStore from "GuildRoleStore" /* 5046 */;
import GuildStore from "GuildStore" /* 5011 */;
import PermissionStore from "PermissionStore" /* 5072 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/useCanInviteGuildIds.tsx");

export default function useCanInviteGuildIds(location) {
  linkedGameOrgInvitesEnabled = linkedGameOrgInvitesEnabled(11783).useLinkedGameOrgInvitesEnabled(location);
  const obj = linkedGameOrgInvitesEnabled(11783);
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