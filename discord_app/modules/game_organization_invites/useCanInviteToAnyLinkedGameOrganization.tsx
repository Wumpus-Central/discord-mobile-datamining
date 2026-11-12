// === Module 15566: useCanInviteToAnyLinkedGameOrganization ===

// Module 15566 (useCanInviteToAnyLinkedGameOrganization)
import GuildMemberStore from "GuildMemberStore" /* 5155 */;
import GuildRoleStore from "GuildRoleStore" /* 5149 */;
import GuildStore from "GuildStore" /* 5114 */;
import PermissionStore from "PermissionStore" /* 5175 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/useCanInviteToAnyLinkedGameOrganization.tsx");

export default function useCanInviteToAnyLinkedGameOrganization(location) {
  linkedGameOrgInvitesEnabled = linkedGameOrgInvitesEnabled(12436).useLinkedGameOrgInvitesEnabled(location);
  const obj = linkedGameOrgInvitesEnabled(12436);
  items = [GuildStore, GuildMemberStore, GuildRoleStore, PermissionStore];
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