// discord_app/modules/guild_profile/hooks/useGuildProfileCTA.tsx
import FlagUtils from "../../../../discord_common/js/shared/utils/FlagUtils.tsx";
import GuildInviteFlags from "../../../../discord_common/js/shared/shared-constants/GuildInviteFlags.tsx";
import usePendingFolderGuildIds from "../../guilds_bar/usePendingFolderGuildIds.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import InviteStore from "../../../stores/InviteStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

const usePendingFolderGuildIdsDefault = usePendingFolderGuildIds;

require = fn;
const Constants = fn(1074);
({ InviteStates: closure_9, GuildFeatures: c10 } = Constants);
let obj = {
  IS_MEMBER: 0,
  [0]: "IS_MEMBER",
  ADOPT_TAG: 1,
  [1]: "ADOPT_TAG",
  HAS_APPLICATION: 2,
  [2]: "HAS_APPLICATION",
  APPLY_TO_JOIN: 3,
  [3]: "APPLY_TO_JOIN",
  LURK_DISCOVERABLE: 4,
  [4]: "LURK_DISCOVERABLE",
  JOIN_VIA_INVITE: 5,
  [5]: "JOIN_VIA_INVITE",
  ACCEPT_ROLES: 6,
  [6]: "ACCEPT_ROLES",
};
obj = { INVITE: "INVITE" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_profile/hooks/useGuildProfileCTA.tsx");

export default function useGuildProfileCTA(id, arg1, arg2) {
  _require = id;
  importDefault = arg1;
  dependencyMap = arg2;
  id = id.id;
  const features = id.features;
  obj = require("initialize");
  const items = [features];
  const stateFromStores = obj.useStateFromStores(items, () => features.getId());
  const items1 = [stateFromStores1];
  stateFromStores1 = require("initialize").useStateFromStores(items1, () => GuildStore.getGuild(id));
  let obj2 = require("initialize");
  const items2 = [stateFromStores3];
  const items3 = [stateFromStores];
  const stateFromStores2 = require("initialize").useStateFromStores(
    items2,
    () => UserStore.getUser(stateFromStores),
    items3,
  );
  const obj3 = require("initialize");
  const items4 = [stateFromStores];
  const items5 = [id, stateFromStores];
  stateFromStores3 = require("initialize").useStateFromStores(
    items4,
    () => {
      let member = null;
      if (null != id) {
        member = GuildMemberStore.getMember(tmp, stateFromStores);
      }
      let joinedAt;
      if (member != null) {
        joinedAt = member.joinedAt;
      }
      return null != joinedAt;
    },
    items5,
  );
  const obj4 = require("initialize");
  const items6 = [stateFromStores2];
  const items7 = [id, arg2];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(
    items6,
    () => {
      let inviteKeyForGuildId = closure_2;
      if (closure_2 == null) {
        inviteKeyForGuildId = InviteStore.getInviteKeyForGuildId(id);
      }
      let invite = null;
      if (null != inviteKeyForGuildId) {
        invite = InviteStore.getInvite(inviteKeyForGuildId);
      }
      if (null != invite) {
        if (invite.state !== constants.BANNED) {
          if (invite.state !== tmp8.EXPIRED) {
            obj = { validInviteKey: inviteKeyForGuildId, isBypassInvite: null, inviteRoles: null };
            let num = invite.flags;
            if (num == null) {
              num = 0;
            }
            obj.isBypassInvite = FlagUtils.hasFlag(num, GuildInviteFlags.GuildInviteFlags.IS_APPLICATION_BYPASS);
            obj.inviteRoles = invite.roles;
          }
          return obj;
        }
      }
      obj = { validInviteKey: null, isBypassInvite: false, inviteRoles: null };
    },
    items7,
  );
  const validInviteKey = stateFromStoresObject.validInviteKey;
  const isBypassInvite = stateFromStoresObject.isBypassInvite;
  const inviteRoles = stateFromStoresObject.inviteRoles;
  let tmp6 = usePendingFolderGuildIdsDefault();
  closure_12 = tmp6;
  const items8 = [stateFromStores3, tmp6, id, features, validInviteKey, , , , , , ,];
  ({ visibility: arr9[5], tag: arr9[6] } = id);
  items8[7] = isBypassInvite;
  items8[8] = arg1;
  items8[9] = stateFromStores1;
  items8[10] = inviteRoles;
  items8[11] = stateFromStores2;
  obj = {
    guildId: id,
    ctaType: id.useMemo(() => {
      if (stateFromStores3) {
        if (closure_1 === obj.INVITE) {
          if (null != inviteRoles) {
            if (arr2.length > 0) {
              if (null != stateFromStores2) {
                const member = GuildMemberStore.getMember(id, tmp24.id);
                let roles;
                if (member != null) {
                  roles = member.roles;
                }
                if (roles == null) {
                  roles = [];
                }
                const set = new Set(roles);
                if (arr2.some((id) => !set.has(id.id))) {
                  return obj.ACCEPT_ROLES;
                }
              }
            }
          }
        }
        let primaryGuild;
        if (stateFromStores2 != null) {
          primaryGuild = stateFromStores2.primaryGuild;
        }
        let identityGuildId;
        if (primaryGuild != null) {
          identityGuildId = primaryGuild.identityGuildId;
        }
        let tmp38 = identityGuildId === id;
        if (tmp38) {
          let identityEnabled;
          if (primaryGuild != null) {
            identityEnabled = primaryGuild.identityEnabled;
          }
          tmp38 = true === identityEnabled;
        }
        if (tmp22 !== tmp23.INVITE) {
          if (null != id.tag) {
            if (!tmp38) {
              if (null != stateFromStores1) {
                if (obj2.guildSupportsTags(tmp41)) {
                  let IS_MEMBER = obj.ADOPT_TAG;
                }
                return IS_MEMBER;
              }
            }
          }
        }
        IS_MEMBER = obj.IS_MEMBER;
        tmp22 = closure_1;
        tmp23 = obj;
      } else {
        if (closure_12.includes(id)) {
          let APPLY_TO_JOIN = obj.HAS_APPLICATION;
        } else {
          let hasItem;
          if (features != null) {
            hasItem = obj.includes(constants2.MEMBER_VERIFICATION_GATE_ENABLED);
          }
          if (hasItem) {
            let hasItem1;
            if (obj != null) {
              hasItem1 = obj.includes(constants2.MEMBER_VERIFICATION_MANUAL_APPROVAL);
            }
            if (hasItem1) {
              if (null != validInviteKey) {
                if (!isBypassInvite) {
                  APPLY_TO_JOIN = obj.APPLY_TO_JOIN;
                }
              }
            }
          }
          if (null != validInviteKey) {
            let JOIN_VIA_INVITE = obj.JOIN_VIA_INVITE;
          } else {
            let hasItem2;
            if (obj != null) {
              hasItem2 = obj.includes(constants2.DISCOVERABLE);
            }
            JOIN_VIA_INVITE = null;
            if (hasItem2) {
              JOIN_VIA_INVITE = obj.LURK_DISCOVERABLE;
            }
          }
        }
        return APPLY_TO_JOIN;
      }
    }, items8),
    validInviteKey,
  };
  return obj;
}
export const CTATypes = obj;
export const GuildProfileCTAContext = obj;
export const getGuildProfileCTAType = function getGuildProfileCTAType(guildProfileFromInvite, code) {
  ({ id, features } = guildProfileFromInvite);
  id = AuthenticationStore.getId();
  const user = UserStore.getUser(id);
  let member = null;
  if (null != id) {
    member = GuildMemberStore.getMember(id, id);
  }
  let joinedAt;
  if (member != null) {
    joinedAt = member.joinedAt;
  }
  let inviteKeyForGuildId = code;
  if (code == null) {
    inviteKeyForGuildId = InviteStore.getInviteKeyForGuildId(id);
  }
  let invite = null;
  if (null != inviteKeyForGuildId) {
    invite = InviteStore.getInvite(inviteKeyForGuildId);
  }
  let flag = false;
  let tmp11 = null;
  if (null != invite) {
    flag = false;
    tmp11 = null;
    if (invite.state !== constants.BANNED) {
      flag = false;
      tmp11 = null;
      if (invite.state !== tmp12.EXPIRED) {
        obj = FlagUtils;
        let num = invite.flags;
        if (num == null) {
          num = 0;
        }
        flag = obj.hasFlag(num, GuildInviteFlags.GuildInviteFlags.IS_APPLICATION_BYPASS);
        tmp11 = inviteKeyForGuildId;
      }
    }
  }
  const pendingFolderGuildIds = usePendingFolderGuildIds.getPendingFolderGuildIds();
  if (tmp7) {
    let roles;
    if (invite != null) {
      roles = invite.roles;
    }
    if (null != roles) {
      if (invite.roles.length > 0) {
        if (null != user) {
          const member1 = GuildMemberStore.getMember(id, user.id);
          let roles1;
          if (member1 != null) {
            roles1 = member1.roles;
          }
          if (roles1 == null) {
            roles1 = [];
          }
          const set = new Set(roles1);
          roles = invite.roles;
          if (roles.some((id) => !set.has(id.id))) {
            return obj.ACCEPT_ROLES;
          }
        }
      }
    }
    return obj.IS_MEMBER;
  } else {
    if (pendingFolderGuildIds.includes(id)) {
      let APPLY_TO_JOIN = obj.HAS_APPLICATION;
    } else {
      let hasItem;
      if (features != null) {
        hasItem = features.includes(constants2.MEMBER_VERIFICATION_GATE_ENABLED);
      }
      if (hasItem) {
        let hasItem1;
        if (features != null) {
          hasItem1 = features.includes(constants2.MEMBER_VERIFICATION_MANUAL_APPROVAL);
        }
        if (hasItem1) {
          if (null != tmp11) {
            if (!flag) {
              APPLY_TO_JOIN = obj.APPLY_TO_JOIN;
            }
          }
        }
      }
      if (null != tmp11) {
        let JOIN_VIA_INVITE = obj.JOIN_VIA_INVITE;
      } else {
        let hasItem2;
        if (features != null) {
          hasItem2 = features.includes(constants2.DISCOVERABLE);
        }
        JOIN_VIA_INVITE = null;
        if (hasItem2) {
          JOIN_VIA_INVITE = obj.LURK_DISCOVERABLE;
        }
      }
    }
    return APPLY_TO_JOIN;
  }
  tmp7 = null != joinedAt;
};
