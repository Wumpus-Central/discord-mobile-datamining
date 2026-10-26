// discord_app/modules/game_organization_invites/useCanInviteToAnyLinkedGameOrganization.tsx
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import GuildRoleStore from "../../stores/GuildRoleStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/game_organization_invites/useCanInviteToAnyLinkedGameOrganization.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useCanInviteToAnyLinkedGameOrganization(arg0) {
      const cResult = linkedGameOrgInvitesEnabled(576).c(4);
      const obj = linkedGameOrgInvitesEnabled(576);
      const tmp = linkedGameOrgInvitesEnabled;
      linkedGameOrgInvitesEnabled = linkedGameOrgInvitesEnabled(11289).useLinkedGameOrgInvitesEnabled(arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore, GuildMemberStore, GuildRoleStore, PermissionStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== linkedGameOrgInvitesEnabled) {
        const fn = function c() {
          let someResult = linkedGameOrgInvitesEnabled;
          if (linkedGameOrgInvitesEnabled) {
            const guildsArray = GuildStore.getGuildsArray();
            someResult = guildsArray.some((item) =>
              linkedGameOrgInvitesEnabled(closure_1_1[7]).canInviteToLinkedGameOrganization(
                item,
                closure_1_5,
                closure_1_2,
                closure_1_3,
              ),
            );
          }
          return someResult;
        };
        const items1 = [linkedGameOrgInvitesEnabled];
        cResult[1] = linkedGameOrgInvitesEnabled;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp11 = items1;
        let tmp10 = fn;
      } else {
        tmp10 = cResult[2];
        tmp11 = cResult[3];
      }
      const obj2 = linkedGameOrgInvitesEnabled(11289);
      return tmp(504).useStateFromStores(first, tmp10, tmp11);
    }
  : function useCanInviteToAnyLinkedGameOrganization(arg0) {
      linkedGameOrgInvitesEnabled = linkedGameOrgInvitesEnabled(11289).useLinkedGameOrgInvitesEnabled(arg0);
      const obj = linkedGameOrgInvitesEnabled(11289);
      const items = [GuildStore, GuildMemberStore, GuildRoleStore, PermissionStore];
      const items1 = [linkedGameOrgInvitesEnabled];
      return linkedGameOrgInvitesEnabled(504).useStateFromStores(
        items,
        () => {
          let someResult = linkedGameOrgInvitesEnabled;
          if (linkedGameOrgInvitesEnabled) {
            const guildsArray = GuildStore.getGuildsArray();
            someResult = guildsArray.some((item) =>
              linkedGameOrgInvitesEnabled(closure_1_1[7]).canInviteToLinkedGameOrganization(
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
    };
