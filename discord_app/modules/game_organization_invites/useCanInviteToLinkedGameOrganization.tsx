// === Module 15145: useCanInviteToLinkedGameOrganization ===

// Module 15145 (useCanInviteToLinkedGameOrganization)
import GuildMemberStore from "GuildMemberStore" /* 4881 */;
import GuildRoleStore from "GuildRoleStore" /* 4875 */;
import PermissionStore from "PermissionStore" /* 4901 */;

const require = globalThis.__r;

const require = fn;
const Permissions = fn(1087).Permissions;
const ReactCompilerGating = fn(558);
function hasCanInviteRole(arg0, roles, arg2) {
  closure_0 = arg0;
  closure_1 = arg2;
  roles = roles.roles;
  return roles.some((item) => {
    role = role.getRole(id, item);
    let prop;
    if (role != null) {
      prop = role.tags.game_organization_can_invite;
    }
    return null === prop;
  });
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/useCanInviteToLinkedGameOrganization.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useCanInviteToLinkedGameOrganization(linkedGameOrganization, arg1) {
  _require = linkedGameOrganization;
  const cResult = require("c").c(6);
  const obj = require("c");
  const tmp = _require;
  const tmp2 = linkedGameOrgInvitesEnabled;
  linkedGameOrgInvitesEnabled = require("LinkedGameOrgInvitesExperiment").useLinkedGameOrgInvitesEnabled(arg1);
  GuildMemberStore = tmp5;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMemberStore, GuildRoleStore, PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === linkedGameOrganization) {
    if (cResult[2] === linkedGameOrgInvitesEnabled) {
      if (cResult[3] === tmp5) {
        let tmp10 = cResult[4];
        let tmp11 = cResult[5];
      }
      return tmp(tmp2[7]).useStateFromStores(first, tmp10, tmp11);
    }
  }
  class I {
    constructor() {
      if (closure_1) {
        tmp = closure_2;
        if (closure_2) {
          tmp2 = closure_4;
          tmp3 = Permissions;
          tmp4 = closure_0;
          if (closure_4.can(Permissions.CREATE_INSTANT_INVITE, closure_0)) {
            tmp5 = closure_2;
            selfMember = closure_2.getSelfMember(tmp4.id);
            tmp7 = null;
            someResult = null != selfMember;
            if (someResult) {
              tmp9 = closure_3;
              id = tmp4.id;
              closure_1 = closure_3;
              roles = selfMember.roles;
              someResult = roles.some(() => { ... });
            }
            return someResult;
          }
        }
      }
      return false;
    }
  }
  const items1 = [linkedGameOrgInvitesEnabled, null != linkedGameOrganization.linkedGameOrganization, linkedGameOrganization];
  cResult[1] = linkedGameOrganization;
  cResult[2] = linkedGameOrgInvitesEnabled;
  cResult[3] = null != linkedGameOrganization.linkedGameOrganization;
  cResult[4] = I;
  cResult[5] = items1;
  tmp11 = items1;
  tmp10 = I;
  const obj2 = require("LinkedGameOrgInvitesExperiment");
}) : (function useCanInviteToLinkedGameOrganization(linkedGameOrganization, arg1) {
  _require = linkedGameOrganization;
  linkedGameOrgInvitesEnabled = require("LinkedGameOrgInvitesExperiment").useLinkedGameOrgInvitesEnabled(arg1);
  closure_2 = tmp2;
  const obj = require("LinkedGameOrgInvitesExperiment");
  const items = [closure_2, GuildRoleStore, PermissionStore];
  const items1 = [linkedGameOrgInvitesEnabled, null != linkedGameOrganization.linkedGameOrganization, linkedGameOrganization];
  return require("initialize").useStateFromStores(items, () => {
    if (linkedGameOrgInvitesEnabled) {
      if (closure_2) {
        if (PermissionStore.can(Permissions.CREATE_INSTANT_INVITE, linkedGameOrganization)) {
          const selfMember = GuildMemberStore.getSelfMember(linkedGameOrganization.id);
          let someResult = null != selfMember;
          if (someResult) {
            const id = linkedGameOrganization.id;
            let role = GuildRoleStore;
            const roles = selfMember.roles;
            someResult = roles.some((item) => {
              role = role.getRole(id, item);
              let prop;
              if (role != null) {
                prop = role.tags.game_organization_can_invite;
              }
              return null === prop;
            });
          }
          return someResult;
        }
      }
    }
    return false;
  }, items1);
});
export { hasCanInviteRole };