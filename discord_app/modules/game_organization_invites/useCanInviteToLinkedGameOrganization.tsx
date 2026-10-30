// discord_app/modules/game_organization_invites/useCanInviteToLinkedGameOrganization.tsx
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import GuildRoleStore from "../../stores/GuildRoleStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";

const require = globalThis.__r;

const require = fn;
const Permissions = fn(1072).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/useCanInviteToLinkedGameOrganization.tsx");

export default function useCanInviteToLinkedGameOrganization(arg0, location) {
  _require = arg0;
  linkedGameOrgInvitesEnabled = require("LinkedGameOrgInvitesExperiment").useLinkedGameOrgInvitesEnabled(location);
  const obj = require("LinkedGameOrgInvitesExperiment");
  const items = [GuildMemberStore, GuildRoleStore, PermissionStore];
  const items1 = [linkedGameOrgInvitesEnabled, arg0];
  return require("initialize").useStateFromStores(
    items,
    () => {
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
    },
    items1,
  );
}
export function hasCanInviteRole(arg0, roles, arg2) {
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
export function canInviteToLinkedGameOrganization(linkedGameOrganization, can, getSelfMember, arg3) {
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
