// discord_app/modules/game_organization_invites/useCanInviteGuildIds.tsx
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import GuildRoleStore from "../../stores/GuildRoleStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/useCanInviteGuildIds.tsx");

export default function useCanInviteGuildIds(location) {
  linkedGameOrgInvitesEnabled = linkedGameOrgInvitesEnabled(11587).useLinkedGameOrgInvitesEnabled(location);
  const obj = linkedGameOrgInvitesEnabled(11587);
  const items = [GuildStore, GuildMemberStore, GuildRoleStore, PermissionStore];
  const items1 = [linkedGameOrgInvitesEnabled];
  return linkedGameOrgInvitesEnabled(504).useStateFromStoresArray(
    items,
    () => {
      if (linkedGameOrgInvitesEnabled) {
        const guildsArray = GuildStore.getGuildsArray();
        const found = guildsArray.filter((item) =>
          linkedGameOrgInvitesEnabled(closure_1_1[6]).canInviteToLinkedGameOrganization(
            item,
            closure_1_5,
            closure_1_2,
            closure_1_3,
          ),
        );
        const mapped = found.map((id) => id.id);
        let sorted = mapped.sort();
      } else {
        sorted = [];
      }
      return sorted;
    },
    items1,
  );
}
