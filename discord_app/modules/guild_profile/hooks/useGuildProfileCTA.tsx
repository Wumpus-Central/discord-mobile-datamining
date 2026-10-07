// === Module 9428: useGuildProfileCTA ===

// Module 9428 (useGuildProfileCTA)
import FlagUtils from "FlagUtils" /* 1390 */;
import GuildTagUtils from "GuildTagUtils" /* 7847 */;
import GuildInviteFlags from "GuildInviteFlags" /* 8078 */;
import usePendingFolderGuildIds from "usePendingFolderGuildIds" /* 9429 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildStore from "GuildStore" /* 2074 */;
import InviteStore from "InviteStore" /* 4877 */;
import UserStore from "UserStore" /* 1377 */;

const require = globalThis.__r;
const usePendingFolderGuildIdsDefault = usePendingFolderGuildIds;

require = fn;
const Constants = fn(1085);
({ InviteStates: closure_9, GuildFeatures: c10 } = Constants);
const CTATypes = { IS_MEMBER: 0, [0]: "IS_MEMBER", ADOPT_TAG: 1, [1]: "ADOPT_TAG", HAS_APPLICATION: 2, [2]: "HAS_APPLICATION", APPLY_TO_JOIN: 3, [3]: "APPLY_TO_JOIN", LURK_DISCOVERABLE: 4, [4]: "LURK_DISCOVERABLE", JOIN_VIA_INVITE: 5, [5]: "JOIN_VIA_INVITE", ACCEPT_ROLES: 6, [6]: "ACCEPT_ROLES" };
let obj2 = { INVITE: "INVITE" };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_profile/hooks/useGuildProfileCTA.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((id, arg1, arg2) => {
  _require = arg2;
  let obj = require("c");
  const cResult = obj.c(23);
  id = id.id;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore];
    class P {
      constructor() {
        return closure_1_4.getId();
      }
    }
    cResult[0] = items;
    cResult[1] = P;
    tmp4 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  stateFromStores = require("initialize").useStateFromStores(tmp4, P);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildStore];
    class P {
      constructor() {
        return closure_1_4.getId();
      }
    }
    cResult[2] = items1;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== id) {
    class L {
      constructor() {
        return closure_6.getGuild(id);
      }
    }
    cResult[3] = id;
    class P {
      constructor() {
        return closure_1_4.getId();
      }
    }
    cResult[4] = L;
  } else {
    class L {
      constructor() {
        return closure_6.getGuild(id);
      }
    }
  }
  const tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp8, L);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class L {
      constructor() {
        return closure_6.getGuild(id);
      }
    }
    const items2 = [UserStore];
    class P {
      constructor() {
        return closure_1_4.getId();
      }
    }
    cResult[5] = items2;
    const tmp12 = items2;
  } else {
    class L {
      constructor() {
        return closure_6.getGuild(id);
      }
    }
  }
  if (cResult[6] !== stateFromStores) {
    class L {
      constructor() {
        return closure_6.getGuild(id);
      }
    }
    const items3 = [stateFromStores];
    class P {
      constructor() {
        return closure_1_4.getId();
      }
    }
    cResult[6] = stateFromStores;
    cResult[7] = tmp15;
    cResult[8] = items3;
    let tmp14 = items3;
  } else {
    class L {
      constructor() {
        return closure_6.getGuild(id);
      }
    }
    tmp14 = cResult[8];
  }
  const tmpResult5 = require("initialize");
  const stateFromStores2 = require("initialize").useStateFromStores(tmp12, tmp15, tmp14);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class L {
      constructor() {
        return closure_6.getGuild(id);
      }
    }
    const items4 = [GuildMemberStore];
    class P {
      constructor() {
        return closure_1_4.getId();
      }
    }
    cResult[9] = items4;
  } else {
    class L {
      constructor() {
        return closure_6.getGuild(id);
      }
    }
  }
  if (cResult[10] === stateFromStores) {
    class L {
      constructor() {
        return closure_6.getGuild(id);
      }
    }
    tmp(tmp2[9]);
    const _Symbol = Symbol;
    class P {
      constructor() {
        return closure_1_4.getId();
      }
    }
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      class L {
        constructor() {
          return closure_6.getGuild(id);
        }
      }
      const items5 = [InviteStore];
      class P {
        constructor() {
          return closure_1_4.getId();
        }
      }
      cResult[14] = items5;
      const tmp20 = items5;
    } else {
      class L {
        constructor() {
          return closure_6.getGuild(id);
        }
      }
    }
    if (cResult[15] === id) {
      class L {
        constructor() {
          return closure_6.getGuild(id);
        }
      }
      const stateFromStoresObject = tmp(tmp2[9]).useStateFromStoresObject(tmp20, D, tmp22);
      class P {
        constructor() {
          return closure_1_4.getId();
        }
      }
      const inviteRoles = stateFromStoresObject.inviteRoles;
      const isBypassInvite = stateFromStoresObject.isBypassInvite;
      class D {
        constructor() {
          inviteKeyForGuildId = closure_0;
          if (closure_0 == null) {
            tmp2 = closure_7;
            tmp3 = id;
            inviteKeyForGuildId = closure_7.getInviteKeyForGuildId(id);
          }
          invite = null;
          if (null != inviteKeyForGuildId) {
            tmp5 = closure_7;
            invite = closure_7.getInvite(inviteKeyForGuildId);
          }
          if (null != invite) {
            if (invite.state !== InviteStates.BANNED) {
              if (invite.state !== tmp8.EXPIRED) {
                obj = { validInviteKey: null, isBypassInvite: null, inviteRoles: null };
                obj.validInviteKey = inviteKeyForGuildId;
                tmp6 = closure_0;
                tmp7 = closure_2;
                obj2 = closure_0(closure_2[10]);
                num = invite.flags;
                if (num == null) {
                  num = 0;
                }
                obj.isBypassInvite = obj2.hasFlag(num, tmp6(tmp7[11]).GuildInviteFlags.IS_APPLICATION_BYPASS);
                obj.inviteRoles = invite.roles;
              }
              return obj;
            }
          }
          obj = { validInviteKey: null, isBypassInvite: false, inviteRoles: null };
          return;
        }
      }
      if (tmp19) {
        class L {
          constructor() {
            return closure_6.getGuild(id);
          }
        }
        if (arg1 === obj2.INVITE) {
          class L {
            constructor() {
              return closure_6.getGuild(id);
            }
          }
          if (null != inviteRoles) {
            class L {
              constructor() {
                return closure_6.getGuild(id);
              }
            }
            if (inviteRoles.length > 0) {
              class L {
                constructor() {
                  return closure_6.getGuild(id);
                }
              }
            }
          }
        }
        class P {
          constructor() {
            return closure_1_4.getId();
          }
        }
        if (stateFromStores2 != null) {
          class L {
            constructor() {
              return closure_6.getGuild(id);
            }
          }
        }
        class D {
          constructor() {
            inviteKeyForGuildId = closure_0;
            if (closure_0 == null) {
              tmp2 = closure_7;
              tmp3 = id;
              inviteKeyForGuildId = closure_7.getInviteKeyForGuildId(id);
            }
            invite = null;
            if (null != inviteKeyForGuildId) {
              tmp5 = closure_7;
              invite = closure_7.getInvite(inviteKeyForGuildId);
            }
            if (null != invite) {
              if (invite.state !== InviteStates.BANNED) {
                if (invite.state !== tmp8.EXPIRED) {
                  obj = { validInviteKey: null, isBypassInvite: null, inviteRoles: null };
                  obj.validInviteKey = inviteKeyForGuildId;
                  tmp6 = closure_0;
                  tmp7 = closure_2;
                  obj2 = closure_0(closure_2[10]);
                  num = invite.flags;
                  if (num == null) {
                    num = 0;
                  }
                  obj.isBypassInvite = obj2.hasFlag(num, tmp6(tmp7[11]).GuildInviteFlags.IS_APPLICATION_BYPASS);
                  obj.inviteRoles = invite.roles;
                }
                return obj;
              }
            }
            obj = { validInviteKey: null, isBypassInvite: false, inviteRoles: null };
            return;
          }
        }
        if (tmp29) {
          class L {
            constructor() {
              return closure_6.getGuild(id);
            }
          }
          if (tmp27 != null) {
            class L {
              constructor() {
                return closure_6.getGuild(id);
              }
            }
          }
          class P {
            constructor() {
              return closure_1_4.getId();
            }
          }
        }
        if (arg1 !== tmp26.INVITE) {
          class L {
            constructor() {
              return closure_6.getGuild(id);
            }
          }
        }
        const IS_MEMBER = obj.IS_MEMBER;
        tmp26 = obj2;
        tmp29 = undefined === id;
      } else {
        class L {
          constructor() {
            return closure_6.getGuild(id);
          }
        }
      }
      if (cResult[19] === IS_MEMBER) {
        class L {
          constructor() {
            return closure_6.getGuild(id);
          }
        }
      }
      obj2 = { guildId: id, ctaType: IS_MEMBER, validInviteKey: tmp24 };
      cResult[19] = IS_MEMBER;
      cResult[20] = id;
      cResult[21] = tmp24;
      cResult[22] = obj2;
      const tmpResult8 = tmp(tmp2[9]);
    }
    class D {
      constructor() {
        inviteKeyForGuildId = closure_0;
        if (closure_0 == null) {
          tmp2 = closure_7;
          tmp3 = id;
          inviteKeyForGuildId = closure_7.getInviteKeyForGuildId(id);
        }
        invite = null;
        if (null != inviteKeyForGuildId) {
          tmp5 = closure_7;
          invite = closure_7.getInvite(inviteKeyForGuildId);
        }
        if (null != invite) {
          if (invite.state !== InviteStates.BANNED) {
            if (invite.state !== tmp8.EXPIRED) {
              obj = { validInviteKey: null, isBypassInvite: null, inviteRoles: null };
              obj.validInviteKey = inviteKeyForGuildId;
              tmp6 = closure_0;
              tmp7 = closure_2;
              obj2 = closure_0(closure_2[10]);
              num = invite.flags;
              if (num == null) {
                num = 0;
              }
              obj.isBypassInvite = obj2.hasFlag(num, tmp6(tmp7[11]).GuildInviteFlags.IS_APPLICATION_BYPASS);
              obj.inviteRoles = invite.roles;
            }
            return obj;
          }
        }
        obj = { validInviteKey: null, isBypassInvite: false, inviteRoles: null };
        return;
      }
    }
    const items6 = [id, arg2];
    cResult[15] = id;
    cResult[16] = arg2;
    cResult[17] = D;
    cResult[18] = items6;
    tmp22 = items6;
  }
  class F {
    constructor() {
      member = null;
      if (null != id) {
        tmp3 = closure_5;
        tmp4 = closure_2;
        member = closure_5.getMember(tmp, closure_2);
      }
      joinedAt = undefined;
      if (member != null) {
        joinedAt = member.joinedAt;
      }
      return null != joinedAt;
    }
  }
  const items7 = [id, stateFromStores];
  cResult[10] = stateFromStores;
  cResult[11] = id;
  cResult[12] = F;
  cResult[13] = items7;
  const tmpResult6 = require("initialize");
}) : ((id, arg1, arg2) => {
  _require = id;
  importDefault = arg1;
  dependencyMap = arg2;
  id = id.id;
  const features = id.features;
  const items = [features];
  const stateFromStores = require("initialize").useStateFromStores(items, () => features.getId());
  let obj = require("initialize");
  const items1 = [stateFromStores1];
  stateFromStores1 = require("initialize").useStateFromStores(items1, () => GuildStore.getGuild(id));
  obj2 = require("initialize");
  const items2 = [stateFromStores3];
  const items3 = [stateFromStores];
  const stateFromStores2 = require("initialize").useStateFromStores(items2, () => UserStore.getUser(stateFromStores), items3);
  const obj3 = require("initialize");
  const items4 = [stateFromStores];
  const items5 = [id, stateFromStores];
  stateFromStores3 = require("initialize").useStateFromStores(items4, () => {
    let member = null;
    if (null != id) {
      member = GuildMemberStore.getMember(tmp, stateFromStores);
    }
    let joinedAt;
    if (member != null) {
      joinedAt = member.joinedAt;
    }
    return null != joinedAt;
  }, items5);
  const obj4 = require("initialize");
  const items6 = [stateFromStores2];
  const items7 = [id, arg2];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items6, () => {
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
          let obj = { validInviteKey: inviteKeyForGuildId, isBypassInvite: null, inviteRoles: null };
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
  }, items7);
  const validInviteKey = stateFromStoresObject.validInviteKey;
  const isBypassInvite = stateFromStoresObject.isBypassInvite;
  const inviteRoles = stateFromStoresObject.inviteRoles;
  const tmp6 = usePendingFolderGuildIdsDefault();
  closure_12 = tmp6;
  const items8 = [stateFromStores3, tmp6, id, features, validInviteKey, , , , , , , ];
  ({ visibility: arr9[5], tag: arr9[6] } = id);
  items8[7] = isBypassInvite;
  items8[8] = arg1;
  items8[9] = stateFromStores1;
  items8[10] = inviteRoles;
  items8[11] = stateFromStores2;
  const obj5 = require("initialize");
  return {
    guildId: id,
    ctaType: id.useMemo(() => {
      if (stateFromStores3) {
        if (closure_1 === obj2.INVITE) {
          if (null != inviteRoles) {
            if (inviteRoles.length > 0) {
              if (null != stateFromStores2) {
                const member = GuildMemberStore.getMember(id, tmp24.id);
                let roles;
                if (member != null) {
                  roles = member.roles;
                }
                if (roles == null) {
                  roles = [];
                }
                if (inviteRoles.some((id) => !set.has(id.id))) {
                  return features.ACCEPT_ROLES;
                }
                const set = new Set(roles);
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
        if (closure_1 !== tmp23.INVITE) {
          if (null != id.tag) {
            if (!tmp38) {
              if (null != stateFromStores1) {
                obj2 = GuildTagUtils;
                if (obj2.guildSupportsTags(tmp41)) {
                  let IS_MEMBER = features.ADOPT_TAG;
                }
                return IS_MEMBER;
              }
            }
          }
        }
        IS_MEMBER = features.IS_MEMBER;
        tmp23 = obj2;
      } else {
        if (closure_12.includes(id)) {
          let APPLY_TO_JOIN = features.HAS_APPLICATION;
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
              if (null != validInviteKey) {
                if (!isBypassInvite) {
                  APPLY_TO_JOIN = features.APPLY_TO_JOIN;
                }
              }
            }
          }
          if (null != validInviteKey) {
            let JOIN_VIA_INVITE = features.JOIN_VIA_INVITE;
          } else {
            let hasItem2;
            if (features != null) {
              hasItem2 = features.includes(constants2.DISCOVERABLE);
            }
            JOIN_VIA_INVITE = null;
            if (hasItem2) {
              JOIN_VIA_INVITE = features.LURK_DISCOVERABLE;
            }
          }
        }
        return APPLY_TO_JOIN;
      }
    }, items8),
    validInviteKey
  };
});
export { CTATypes };
export const GuildProfileCTAContext = obj2;
export const getGuildProfileCTAType = function getGuildProfileCTAType(guildProfileFromInvite, code) {
  ({ id, features } = guildProfileFromInvite);
  const id1 = AuthenticationStore.getId();
  const user = UserStore.getUser(id1);
  let member = null;
  if (null != id) {
    member = GuildMemberStore.getMember(id, id1);
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
        const obj = FlagUtils;
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
    let roles1;
    if (invite != null) {
      roles1 = invite.roles;
    }
    if (null != roles1) {
      if (invite.roles.length > 0) {
        if (null != user) {
          const member1 = GuildMemberStore.getMember(id, user.id);
          let roles2;
          if (member1 != null) {
            roles2 = member1.roles;
          }
          if (roles2 == null) {
            roles2 = [];
          }
          const roles = invite.roles;
          if (roles.some((id) => !set.has(id.id))) {
            return obj.ACCEPT_ROLES;
          }
          const set = new Set(roles2);
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