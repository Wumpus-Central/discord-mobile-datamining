// === Module 12097: useCanInviteGuildIds ===

// Module 12097 (useCanInviteGuildIds)
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 4955 */;
import GuildRoleStore from "GuildRoleStore" /* 4949 */;
import GuildStore from "GuildStore" /* 4914 */;
import PermissionStore from "PermissionStore" /* 4975 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/useCanInviteGuildIds.tsx");

export default function useCanInviteGuildIds(location) {
  linkedGameOrgInvitesEnabled = linkedGameOrgInvitesEnabled(stateFromStoresArray[5]).useLinkedGameOrgInvitesEnabled(location);
  const obj = linkedGameOrgInvitesEnabled(stateFromStoresArray[5]);
  items = [GuildStore, GuildMemberStore, GuildRoleStore, PermissionStore];
  const items1 = [linkedGameOrgInvitesEnabled];
  stateFromStoresArray = linkedGameOrgInvitesEnabled(stateFromStoresArray[6]).useStateFromStoresArray(items, () => {
    if (linkedGameOrgInvitesEnabled) {
      const guildsArray = GuildStore.getGuildsArray();
      const found = guildsArray.filter((item) => linkedGameOrgInvitesEnabled(stateFromStoresArray[7]).canInviteToLinkedGameOrganization(item, closure_1_6, closure_1_3, closure_1_4));
      const mapped = found.map((id) => id.id);
      let sorted = mapped.sort();
    } else {
      sorted = [];
    }
    return sorted;
  }, items1);
  const items2 = [stateFromStoresArray.join(",")];
  return noop.useMemo(() => stateFromStoresArray, items2);
};