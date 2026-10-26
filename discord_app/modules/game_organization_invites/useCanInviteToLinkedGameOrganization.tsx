// === Module 11291: useCanInviteToLinkedGameOrganization ===

// Module 11291 (useCanInviteToLinkedGameOrganization)
import GuildMemberStore from "GuildMemberStore" /* 4883 */;
import GuildRoleStore from "GuildRoleStore" /* 4877 */;
import PermissionStore from "PermissionStore" /* 4903 */;

const require = globalThis.__r;

const require = fn;
const Permissions = fn(1087).Permissions;
const ReactCompilerGating = fn(558);
function hasCanInviteRole(arg0, roles, arg2) {
  closure_0 = arg0;
  closure_1 = arg2;
  roles = roles.roles;
  return roles.some((item) => {
    const role = tmp3.getRole(id, item);
    let prop;
    if (role != null) {
      prop = role.tags.game_organization_can_invite;
    }
    return null === prop;
  });
}
function canInviteToLinkedGameOrganization(linkedGameOrganization, can, getSelfMember, arg3) {
  if (null == linkedGameOrganization.linkedGameOrganization) {
    return false;
  } else if (can.can(Permissions.CREATE_INSTANT_INVITE, linkedGameOrganization)) {
    const selfMember = getSelfMember.getSelfMember(linkedGameOrganization.id);
    let someResult = null != selfMember;
    if (someResult) {
      const id = linkedGameOrganization.id;
      closure_1 = arg3;
      const roles = selfMember.roles;
      someResult = roles.some((item) => {
        const role = tmp3.getRole(id, item);
        let prop;
        if (role != null) {
          prop = role.tags.game_organization_can_invite;
        }
        return null === prop;
      });
    }
    return someResult;
  } else {
    return false;
  }
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/useCanInviteToLinkedGameOrganization.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useCanInviteToLinkedGameOrganization(arg0, arg1) {
  _require = arg0;
  const cResult = require("c").c(5);
  const obj = require("c");
  let tmp = _require;
  const tmp2 = linkedGameOrgInvitesEnabled;
  linkedGameOrgInvitesEnabled = require("LinkedGameOrgInvitesExperiment").useLinkedGameOrgInvitesEnabled(arg1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMemberStore, GuildRoleStore, PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    if (cResult[2] === linkedGameOrgInvitesEnabled) {
      let tmp9 = cResult[3];
      let tmp10 = cResult[4];
    }
    return tmp(tmp2[7]).useStateFromStores(first, tmp9, tmp10);
  }
  const fn = function v() {
    let tmp = linkedGameOrgInvitesEnabled;
    if (linkedGameOrgInvitesEnabled) {
      let flag = false;
      if (null != user.linkedGameOrganization) {
        flag = false;
        if (PermissionStore.can(Permissions.CREATE_INSTANT_INVITE, user)) {
          const selfMember = GuildMemberStore.getSelfMember(user.id);
          let someResult = null != selfMember;
          if (someResult) {
            const id = user.id;
            linkedGameOrgInvitesEnabled = tmp3;
            const roles = selfMember.roles;
            someResult = roles.some((item) => {
              const role = tmp3.getRole(id, item);
              let prop;
              if (role != null) {
                prop = role.tags.game_organization_can_invite;
              }
              return null === prop;
            });
          }
          flag = someResult;
        }
      }
      tmp = flag;
    }
    return tmp;
  };
  const items1 = [linkedGameOrgInvitesEnabled, arg0];
  cResult[1] = arg0;
  cResult[2] = linkedGameOrgInvitesEnabled;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp10 = items1;
  tmp9 = fn;
  const obj2 = require("LinkedGameOrgInvitesExperiment");
}) : (function useCanInviteToLinkedGameOrganization(arg0, arg1) {
  _require = arg0;
  linkedGameOrgInvitesEnabled = require("LinkedGameOrgInvitesExperiment").useLinkedGameOrgInvitesEnabled(arg1);
  const obj = require("LinkedGameOrgInvitesExperiment");
  const items = [GuildMemberStore, GuildRoleStore, PermissionStore];
  const items1 = [linkedGameOrgInvitesEnabled, arg0];
  return require("initialize").useStateFromStores(items, () => {
    let tmp = linkedGameOrgInvitesEnabled;
    if (linkedGameOrgInvitesEnabled) {
      let flag = false;
      if (null != user.linkedGameOrganization) {
        flag = false;
        if (PermissionStore.can(Permissions.CREATE_INSTANT_INVITE, user)) {
          const selfMember = GuildMemberStore.getSelfMember(user.id);
          let someResult = null != selfMember;
          if (someResult) {
            const id = user.id;
            linkedGameOrgInvitesEnabled = tmp3;
            const roles = selfMember.roles;
            someResult = roles.some((item) => {
              const role = tmp3.getRole(id, item);
              let prop;
              if (role != null) {
                prop = role.tags.game_organization_can_invite;
              }
              return null === prop;
            });
          }
          flag = someResult;
        }
      }
      tmp = flag;
    }
    return tmp;
  }, items1);
});
export { hasCanInviteRole };
export { canInviteToLinkedGameOrganization };