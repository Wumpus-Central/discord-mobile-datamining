// discord_app/modules/game_organization_invites/useCanInviteGuildIds.tsx
import noop from "../../../_runtime/metro/00019__.js";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import GuildRoleStore from "../../stores/GuildRoleStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/useCanInviteGuildIds.tsx");

export default function useCanInviteGuildIds(location) {
  linkedGameOrgInvitesEnabled = linkedGameOrgInvitesEnabled(stateFromStoresArray[5]).useLinkedGameOrgInvitesEnabled(
    location,
  );
  const obj = linkedGameOrgInvitesEnabled(stateFromStoresArray[5]);
  items = [GuildStore, GuildMemberStore, GuildRoleStore, PermissionStore];
  const items1 = [linkedGameOrgInvitesEnabled];
  stateFromStoresArray = linkedGameOrgInvitesEnabled(stateFromStoresArray[6]).useStateFromStoresArray(
    items,
    () => {
      if (linkedGameOrgInvitesEnabled) {
        const guildsArray = GuildStore.getGuildsArray();
        const found = guildsArray.filter((item) =>
          linkedGameOrgInvitesEnabled(stateFromStoresArray[7]).canInviteToLinkedGameOrganization(
            item,
            closure_1_6,
            closure_1_3,
            closure_1_4,
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
  const items2 = [stateFromStoresArray.join(",")];
  return noop.useMemo(() => stateFromStoresArray, items2);
}
