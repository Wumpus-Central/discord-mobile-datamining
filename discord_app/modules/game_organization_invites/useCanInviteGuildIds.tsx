// === Module 11322: useCanInviteGuildIds ===

// Module 11322 (useCanInviteGuildIds)
import GuildMemberStore from "GuildMemberStore" /* 4883 */;
import GuildRoleStore from "GuildRoleStore" /* 4877 */;
import GuildStore from "GuildStore" /* 4845 */;
import PermissionStore from "PermissionStore" /* 4903 */;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/useCanInviteGuildIds.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useCanInviteGuildIds(arg0) {
  const cResult = linkedGameOrgInvitesEnabled(576).c(4);
  const obj = linkedGameOrgInvitesEnabled(576);
  const tmp = linkedGameOrgInvitesEnabled;
  linkedGameOrgInvitesEnabled = linkedGameOrgInvitesEnabled(11290).useLinkedGameOrgInvitesEnabled(arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore, GuildMemberStore, GuildRoleStore, PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== linkedGameOrgInvitesEnabled) {
    const fn = function c() {
      if (linkedGameOrgInvitesEnabled) {
        const guildsArray = GuildStore.getGuildsArray();
        const found = guildsArray.filter((item) => linkedGameOrgInvitesEnabled(closure_1_1[7]).canInviteToLinkedGameOrganization(item, closure_1_5, closure_1_2, closure_1_3));
        const mapped = found.map((id) => id.id);
        let sorted = mapped.sort();
      } else {
        sorted = [];
      }
      return sorted;
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
  const obj2 = linkedGameOrgInvitesEnabled(11290);
  return tmp(504).useStateFromStoresArray(first, tmp10, tmp11);
}) : (function useCanInviteGuildIds(arg0) {
  linkedGameOrgInvitesEnabled = linkedGameOrgInvitesEnabled(11290).useLinkedGameOrgInvitesEnabled(arg0);
  const obj = linkedGameOrgInvitesEnabled(11290);
  const items = [GuildStore, GuildMemberStore, GuildRoleStore, PermissionStore];
  const items1 = [linkedGameOrgInvitesEnabled];
  return linkedGameOrgInvitesEnabled(504).useStateFromStoresArray(items, () => {
    if (linkedGameOrgInvitesEnabled) {
      const guildsArray = GuildStore.getGuildsArray();
      const found = guildsArray.filter((item) => linkedGameOrgInvitesEnabled(closure_1_1[7]).canInviteToLinkedGameOrganization(item, closure_1_5, closure_1_2, closure_1_3));
      const mapped = found.map((id) => id.id);
      let sorted = mapped.sort();
    } else {
      sorted = [];
    }
    return sorted;
  }, items1);
});