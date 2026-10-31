// discord_app/modules/game_organization_invites/useCanInviteToAnyLinkedGameOrganization.tsx
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import GuildRoleStore from "../../stores/GuildRoleStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/game_organization_invites/useCanInviteToAnyLinkedGameOrganization.tsx",
);

export default function useCanInviteToAnyLinkedGameOrganization(location) {
  linkedGameOrgInvitesEnabled = linkedGameOrgInvitesEnabled(11623).useLinkedGameOrgInvitesEnabled(location);
  const obj = linkedGameOrgInvitesEnabled(11623);
  const items = [GuildStore, GuildMemberStore, GuildRoleStore, PermissionStore];
  const items1 = [linkedGameOrgInvitesEnabled];
  return linkedGameOrgInvitesEnabled(504).useStateFromStores(
    items,
    () => {
      let someResult = linkedGameOrgInvitesEnabled;
      if (linkedGameOrgInvitesEnabled) {
        const guildsArray = GuildStore.getGuildsArray();
        someResult = guildsArray.some((item) =>
          linkedGameOrgInvitesEnabled(closure_1_1[6]).canInviteToLinkedGameOrganization(
            item,
            closure_1_5,
            closure_1_2,
            closure_1_3,
          ),
        );
      }
      return someResult;
    },
    items1,
  );
}
