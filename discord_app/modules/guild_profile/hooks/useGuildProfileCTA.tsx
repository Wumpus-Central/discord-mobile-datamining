// discord_app/modules/guild_profile/hooks/useGuildProfileCTA.tsx
import noop from "noop";
import fetchFingerprint from "fetchFingerprint";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import updateInvite from "updateInvite";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { usePendingFolderGuildIds } from "../../guilds_bar/usePendingFolderGuildIds.tsx";

let c10;
let c9;
const require = arg1;
({ InviteStates: c9, GuildFeatures: c10 } = ME);
let obj = { IS_MEMBER: 0, [0]: "IS_MEMBER", ADOPT_TAG: 1, [1]: "ADOPT_TAG", HAS_APPLICATION: 2, [2]: "HAS_APPLICATION", APPLY_TO_JOIN: 3, [3]: "APPLY_TO_JOIN", LURK_DISCOVERABLE: 4, [4]: "LURK_DISCOVERABLE", JOIN_VIA_INVITE: 5, [5]: "JOIN_VIA_INVITE", ACCEPT_ROLES: 6, [6]: "ACCEPT_ROLES" };
obj = { INVITE: "INVITE" };
const result = require("trackCommunicationDisabled").fileFinishedImporting("modules/guild_profile/hooks/useGuildProfileCTA.tsx");

export default function useGuildProfileCTA(id) {
  const _require = id;
  const importDefault = arg1;
  const dependencyMap = arg2;
  id = id.id;
  const features = id.features;
  let obj = _initialize;
  const items = [features];
  const stateFromStores = obj.useStateFromStores(items, () => features.getId());
  const items1 = [stateFromStores1];
  stateFromStores1 = _initialize.useStateFromStores(items1, () => stateFromStores1.getGuild(id));
  let obj2 = _initialize;
  const items2 = [stateFromStores3];
  const items3 = [stateFromStores];
  const stateFromStores2 = _initialize.useStateFromStores(items2, () => stateFromStores3.getUser(stateFromStores), items3);
  const obj3 = _initialize;
  const items4 = [stateFromStores];
  const items5 = [id, stateFromStores];
  stateFromStores3 = _initialize.useStateFromStores(items4, () => {
    let member = null;
    if (null != id) {
      member = stateFromStores.getMember(tmp, stateFromStores);
    }
    let joinedAt;
    if (member != null) {
      joinedAt = member.joinedAt;
    }
    return null != joinedAt;
  }, items5);
  const obj4 = _initialize;
  const items6 = [stateFromStores2];
  const items7 = [id, arg2];
  const stateFromStoresObject = _initialize.useStateFromStoresObject(items6, () => {
    let inviteKeyForGuildId = dependencyMap;
    if (dependencyMap == null) {
      inviteKeyForGuildId = stateFromStores2.getInviteKeyForGuildId(id);
    }
    let invite = null;
    if (null != inviteKeyForGuildId) {
      invite = stateFromStores2.getInvite(inviteKeyForGuildId);
    }
    if (null != invite) {
      if (invite.state !== validInviteKey.BANNED) {
        if (invite.state !== tmp8.EXPIRED) {
          let obj = { validInviteKey: null, isBypassInvite: null, inviteRoles: null };
          obj[0] = inviteKeyForGuildId;
          let num = invite.flags;
          if (num == null) {
            num = 0;
          }
          obj[1] = id(1403).hasFlag(num, id(8056).GuildInviteFlags.IS_APPLICATION_BYPASS);
          obj[2] = invite.roles;
          const obj2 = id(1403);
          const tmp6 = id;
        }
        return obj;
      }
    }
    obj = { validInviteKey: null, isBypassInvite: false, inviteRoles: null };
  }, items7);
  const validInviteKey = stateFromStoresObject.validInviteKey;
  const isBypassInvite = stateFromStoresObject.isBypassInvite;
  const inviteRoles = stateFromStoresObject.inviteRoles;
  let tmp6 = usePendingFolderGuildIds();
  obj = tmp6;
  const items8 = [stateFromStores3, tmp6, id, features, validInviteKey, , , , , , , ];
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
        if (closure_1 === tmp6.INVITE) {
          if (null != inviteRoles) {
            if (arr2.length > 0) {
              if (null != stateFromStores2) {
                const member = stateFromStores.getMember(id, tmp24.id);
                let roles;
                if (member != null) {
                  roles = member.roles;
                }
                if (roles == null) {
                  roles = [];
                }
                const set = new Set(roles);
                if (arr2.some((id) => !set.has(id.id))) {
                  return inviteRoles.ACCEPT_ROLES;
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
          if (null != set.tag) {
            if (!tmp38) {
              if (null != stateFromStores1) {
                if (obj2.guildSupportsTags(tmp41)) {
                  let IS_MEMBER = inviteRoles.ADOPT_TAG;
                }
                return IS_MEMBER;
              }
            }
          }
        }
        IS_MEMBER = inviteRoles.IS_MEMBER;
        tmp22 = closure_1;
        tmp23 = tmp6;
      } else {
        if (tmp6.includes(id)) {
          let APPLY_TO_JOIN = inviteRoles.HAS_APPLICATION;
        } else {
          let hasItem;
          if (features != null) {
            hasItem = obj.includes(isBypassInvite.MEMBER_VERIFICATION_GATE_ENABLED);
          }
          if (hasItem) {
            let hasItem1;
            if (obj != null) {
              hasItem1 = obj.includes(isBypassInvite.MEMBER_VERIFICATION_MANUAL_APPROVAL);
            }
            if (hasItem1) {
              if (null != validInviteKey) {
                if (!isBypassInvite) {
                  APPLY_TO_JOIN = inviteRoles.APPLY_TO_JOIN;
                }
              }
            }
          }
          if (null != validInviteKey) {
            let JOIN_VIA_INVITE = inviteRoles.JOIN_VIA_INVITE;
          } else {
            let hasItem2;
            if (obj != null) {
              hasItem2 = obj.includes(isBypassInvite.DISCOVERABLE);
            }
            JOIN_VIA_INVITE = null;
            if (hasItem2) {
              JOIN_VIA_INVITE = inviteRoles.LURK_DISCOVERABLE;
            }
          }
        }
        return APPLY_TO_JOIN;
      }
    }, items8),
    validInviteKey
  };
  return obj;
};
export const CTATypes = obj;
export const GuildProfileCTAContext = obj;
export const getGuildProfileCTAType = function getGuildProfileCTAType(guildProfileFromInvite, code) {
  let features;
  let id;
  ({ id, features } = guildProfileFromInvite);
  id = id.getId();
  user = user.getUser(id);
  let member = null;
  if (null != id) {
    member = store.getMember(id, id);
  }
  let joinedAt;
  if (member != null) {
    joinedAt = member.joinedAt;
  }
  let inviteKeyForGuildId = code;
  if (code == null) {
    inviteKeyForGuildId = store2.getInviteKeyForGuildId(id);
  }
  let invite = null;
  if (null != inviteKeyForGuildId) {
    invite = store2.getInvite(inviteKeyForGuildId);
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
        const obj = set(1403);
        let num = invite.flags;
        if (num == null) {
          num = 0;
        }
        flag = obj.hasFlag(num, set(8056).GuildInviteFlags.IS_APPLICATION_BYPASS);
        tmp11 = inviteKeyForGuildId;
        const tmp13 = set;
      }
    }
  }
  const pendingFolderGuildIds = set(9535).getPendingFolderGuildIds();
  if (tmp7) {
    let roles;
    if (invite != null) {
      roles = invite.roles;
    }
    if (null != roles) {
      if (invite.roles.length > 0) {
        if (null != user) {
          const member1 = store.getMember(id, user.id);
          let roles1;
          if (member1 != null) {
            roles1 = member1.roles;
          }
          if (roles1 == null) {
            roles1 = [];
          }
          set = new Set(roles1);
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
  const obj2 = set(9535);
  const tmp15 = set;
  tmp7 = null != joinedAt;
};