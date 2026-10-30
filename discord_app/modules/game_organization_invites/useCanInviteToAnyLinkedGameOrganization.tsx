// === Module 11586: useCanInviteToAnyLinkedGameOrganization ===

// Module 11586 (useCanInviteToAnyLinkedGameOrganization)
import GuildMemberStore from "GuildMemberStore" /* 4921 */;
import GuildRoleStore from "GuildRoleStore" /* 4915 */;
import GuildStore from "GuildStore" /* 4880 */;
import PermissionStore from "PermissionStore" /* 4941 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/useCanInviteToAnyLinkedGameOrganization.tsx");

export default function useCanInviteToAnyLinkedGameOrganization(location) {
  linkedGameOrgInvitesEnabled = linkedGameOrgInvitesEnabled(11587).useLinkedGameOrgInvitesEnabled(location);
  const obj = linkedGameOrgInvitesEnabled(11587);
  const items = [GuildStore, GuildMemberStore, GuildRoleStore, PermissionStore];
  const items1 = [linkedGameOrgInvitesEnabled];
  return linkedGameOrgInvitesEnabled(504).useStateFromStores(items, () => {
    let someResult = linkedGameOrgInvitesEnabled;
    if (linkedGameOrgInvitesEnabled) {
      const guildsArray = GuildStore.getGuildsArray();
      someResult = guildsArray.some((item) => linkedGameOrgInvitesEnabled(closure_1_1[6]).canInviteToLinkedGameOrganization(item, closure_1_5, closure_1_2, closure_1_3));
    }
    return someResult;
  }, items1);
};