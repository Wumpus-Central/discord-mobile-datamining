// === Module 8832: CommandPermissionContext ===

// Module 8832 (CommandPermissionContext)
import BigFlagUtilsAll from "BigFlagUtils" /* 1097 */;
import Server from "Server" /* 1985 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import GuildRecord from "GuildRecord" /* 2070 */;
import AgeRestrictedContentSettingsUtils from "AgeRestrictedContentSettingsUtils" /* 6727 */;
import react_mod from "react" /* 19 */;
import ImpersonateStore from "ImpersonateStore" /* 2105 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let closure_14;
let map1;
function computePermissions(isPrivate, arg1) {
  let deserializer;
  if (!(isPrivate instanceof ChannelRecordBase)) {
    if (null != isPrivate) {
      const permissions = PermissionStore.computePermissions(isPrivate);
      let flag = true;
      let flag2 = true;
      const obj5 = BigFlagUtilsAll;
      if (!obj5.has(permissions, constants2.ADMINISTRATOR)) {
        const tmp3 = isPrivate instanceof tmp;
        const tmp11Result = BigFlagUtilsAll;
        const hasItem = tmp11Result.has(permissions, constants2.VIEW_CHANNEL);
        if (tmp3) {
          let hasItem2;
          let hasItem1 = hasItem;
          if (hasItem1) {
            const tmp11Result3 = BigFlagUtilsAll;
            hasItem1 = tmp11Result3.has(permissions, constants2.USE_APPLICATION_COMMANDS);
          }
          const has = BigFlagUtilsAll.has;
          BigFlagUtilsAll;
          if (arg1) {
            hasItem2 = has(permissions, constants2.SEND_MESSAGES_IN_THREADS);
          } else {
            hasItem2 = has(permissions, constants2.SEND_MESSAGES);
          }
          flag = hasItem2;
          flag2 = hasItem1;
        } else {
          flag = true;
          flag2 = hasItem;
        }
      }
      return { computedPermissions: permissions, hasBaseAccessPermissions: flag2, hasSendMessagesPermission: flag };
    }
  }
  const obj2 = { computedPermissions: deserializer.deserialize(0), hasBaseAccessPermissions: true, hasSendMessagesPermission: true };
  deserializer = BigFlagUtilsAll;
  return obj2;
}
let react = react_mod;
const ChannelRecordBase = ChannelRecord.ChannelRecordBase;
const isGuildNSFW = GuildRecord.isGuildNSFW;
({ ChannelTypes: map1, Permissions: closure_14 } = Constants);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled();
const result = size.fileFinishedImporting("modules/application_commands/CommandPermissionContext.tsx");

export const buildPermissionContext = function buildPermissionContext(channel, items) {
  let tmp16;
  let obj = channel;
  if (channel instanceof ChannelRecordBase) {
    obj = channel;
    if (channel.isThread()) {
      channel = ChannelStore.getChannel(channel.parent_id);
      obj = channel;
    }
  }
  let tmp5;
  if (null != obj) {
    tmp5 = obj instanceof ChannelRecordBase ? obj.guild_id : obj.id;
  }
  const obj2 = AgeRestrictedContentSettingsUtils;
  let viewNsfwCommandsOrDefault = obj2.getViewNsfwCommandsOrDefault();
  const id = AuthenticationStore.getId();
  const currentUser = UserStore.getCurrentUser();
  let flag;
  if (currentUser != null) {
    flag = currentUser.nsfwAllowed;
  }
  if (flag == null) {
    flag = false;
  }
  if (null != tmp5) {
    const member = GuildMemberStore.getMember(tmp5, id);
    let roles;
    if (member != null) {
      roles = member.roles;
    }
    if (roles == null) {
      roles = [];
    }
    items = roles;
  } else {
    items = [];
  }
  let isThreadResult = channel instanceof ChannelRecordBase;
  const isViewingRolesResult = ImpersonateStore.isViewingRoles(tmp5);
  if (isThreadResult) {
    isThreadResult = channel.isThread();
  }
  const tmp12Result = computePermissions(obj, isThreadResult);
  const obj3 = { context: obj, userId: id, roleIds: items, isImpersonating: isViewingRolesResult, commandTypes: items, computedPermissions: tmp12Result.computedPermissions, hasBaseAccessPermissions: tmp12Result.hasBaseAccessPermissions, hasSendMessagesPermission: tmp12Result.hasSendMessagesPermission, allowNsfw: tmp16 };
  tmp16 = flag;
  if (tmp16) {
    let tmp17 = !(obj instanceof ChannelRecordBase);
    if (!tmp17) {
      if (null != obj.guild_id) {
        viewNsfwCommandsOrDefault = obj.isNSFW() || tmp15;
        obj.isNSFW() || tmp15;
      }
      tmp17 = viewNsfwCommandsOrDefault;
    }
    tmp16 = tmp17;
  }
  return obj3;
};
export const usePermissionContext = function usePermissionContext(channel, items) {
  let closure_3;
  let guild;
  let memo;
  let memo1;
  let stateFromStores4;
  let stateFromStores5;
  let stateFromStoresArray1;
  if (closure_15) {
    let tmp31;
    let tmp37;
    let tmp36;
    let tmp41;
    let tmp40;
    let tmp44;
    const obj7 = require("react");
    const cResult = obj7.c(37);
    let tmp26 = channel;
    const tmp25 = stateFromStoresArray1;
    if (channel instanceof stateFromStoresArray1) {
      tmp26 = channel;
      if (channel.isThread()) {
        let tmp27;
        if (cResult[0] !== channel) {
          channel = ChannelStore.getChannel(channel.parent_id);
          cResult[0] = channel;
          cResult[1] = channel;
          tmp27 = channel;
        } else {
          tmp27 = cResult[1];
        }
        tmp26 = tmp27;
      }
    }
    if (cResult[2] !== tmp26) {
      let tmp33;
      if (null != tmp26) {
        tmp33 = tmp26 instanceof tmp25 ? tmp26.guild_id : tmp26.id;
      }
      cResult[2] = tmp26;
      cResult[3] = tmp33;
      tmp31 = tmp33;
    } else {
      tmp31 = cResult[3];
    }
    let closure_0 = tmp31;
    const tmp22Result = require("AgeRestrictedContentSettingsUtils");
    const viewNsfwCommandsOrDefault = tmp22Result.useViewNsfwCommandsOrDefault();
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      items = [stateFromStores5];
      class A {
        constructor() {
          return stateFromStores5.getId();
        }
      }
      cResult[4] = items;
      cResult[5] = A;
      tmp37 = A;
      tmp36 = items;
    } else {
      tmp36 = cResult[4];
      tmp37 = cResult[5];
    }
    const tmp22Result6 = require("get initialized");
    const stateFromStores = tmp22Result6.useStateFromStores(tmp36, tmp37);
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [UserStore];
      class M {
        constructor() {
          const currentUser = authStore.getCurrentUser();
          let flag;
          if (currentUser != null) {
            flag = currentUser.nsfwAllowed;
          }
          if (flag == null) {
            flag = false;
          }
          return flag;
        }
      }
      cResult[6] = items1;
      cResult[7] = M;
      tmp41 = M;
      tmp40 = items1;
    } else {
      tmp40 = cResult[6];
      tmp41 = cResult[7];
    }
    const tmp22Result7 = require("get initialized");
    const stateFromStores1 = tmp22Result7.useStateFromStores(tmp40, tmp41);
    const _Symbol3 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [GuildMemberStore];
      class M {
        constructor() {
          const currentUser = authStore.getCurrentUser();
          let flag;
          if (currentUser != null) {
            flag = currentUser.nsfwAllowed;
          }
          if (flag == null) {
            flag = false;
          }
          return flag;
        }
      }
      cResult[8] = items2;
      tmp44 = items2;
    } else {
      tmp44 = cResult[8];
    }
    if (cResult[9] === tmp31) {
      let tmp46;
      let tmp48;
      let tmp50;
      let tmp52;
      let tmp55;
      if (cResult[10] === stateFromStores) {
        tmp46 = cResult[11];
      }
      const tmp22Result8 = require("get initialized");
      const stateFromStoresArray = tmp22Result8.useStateFromStoresArray(tmp44, tmp46);
      class M {
        constructor() {
          const currentUser = authStore.getCurrentUser();
          let flag;
          if (currentUser != null) {
            flag = currentUser.nsfwAllowed;
          }
          if (flag == null) {
            flag = false;
          }
          return flag;
        }
      }
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        const items3 = [stateFromStores4];
        class M {
          constructor() {
            const currentUser = authStore.getCurrentUser();
            let flag;
            if (currentUser != null) {
              flag = currentUser.nsfwAllowed;
            }
            if (flag == null) {
              flag = false;
            }
            return flag;
          }
        }
        cResult[12] = items3;
        tmp48 = items3;
      } else {
        tmp48 = cResult[12];
      }
      if (cResult[13] !== tmp31) {
        const fn = function b() {
          return stateFromStores4.isViewingRoles(closure_0);
        };
        cResult[13] = tmp31;
        class M {
          constructor() {
            const currentUser = authStore.getCurrentUser();
            let flag;
            if (currentUser != null) {
              flag = currentUser.nsfwAllowed;
            }
            if (flag == null) {
              flag = false;
            }
            return flag;
          }
        }
        cResult[14] = fn;
        tmp50 = fn;
      } else {
        tmp50 = cResult[14];
      }
      const tmp22Result9 = require("get initialized");
      const stateFromStores2 = tmp22Result9.useStateFromStores(tmp48, tmp50);
      const _Symbol4 = Symbol;
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        const items4 = [GuildStore];
        class M {
          constructor() {
            const currentUser = authStore.getCurrentUser();
            let flag;
            if (currentUser != null) {
              flag = currentUser.nsfwAllowed;
            }
            if (flag == null) {
              flag = false;
            }
            return flag;
          }
        }
        cResult[15] = items4;
        tmp52 = items4;
      } else {
        tmp52 = cResult[15];
      }
      if (cResult[16] !== tmp31) {
        class R {
          constructor() {
            return stateFromStores6(guild.getGuild(closure_0));
          }
        }
        const items5 = [tmp31];
        class M {
          constructor() {
            const currentUser = authStore.getCurrentUser();
            let flag;
            if (currentUser != null) {
              flag = currentUser.nsfwAllowed;
            }
            if (flag == null) {
              flag = false;
            }
            return flag;
          }
        }
        cResult[16] = tmp31;
        cResult[17] = R;
        cResult[18] = items5;
        tmp55 = items5;
      } else {
        class R {
          constructor() {
            return stateFromStores6(guild.getGuild(closure_0));
          }
        }
        tmp55 = cResult[18];
      }
      const tmp22Result10 = require("get initialized");
      const stateFromStores3 = tmp22Result10.useStateFromStores(tmp52, R, tmp55);
      if (cResult[19] === tmp26) {
        class R {
          constructor() {
            return stateFromStores6(guild.getGuild(closure_0));
          }
        }
      }
      let tmp58 = stateFromStores1;
      if (tmp58) {
        class R {
          constructor() {
            return stateFromStores6(guild.getGuild(closure_0));
          }
        }
        if (!tmp59) {
          class R {
            constructor() {
              return stateFromStores6(guild.getGuild(closure_0));
            }
          }
          if (null != tmp26.guild_id) {
            class R {
              constructor() {
                return stateFromStores6(guild.getGuild(closure_0));
              }
            }
          }
          class M {
            constructor() {
              const currentUser = authStore.getCurrentUser();
              let flag;
              if (currentUser != null) {
                flag = currentUser.nsfwAllowed;
              }
              if (flag == null) {
                flag = false;
              }
              return flag;
            }
          }
        }
        tmp58 = tmp59;
      }
      cResult[19] = tmp26;
      cResult[20] = stateFromStores3;
      cResult[21] = stateFromStores1;
      cResult[22] = viewNsfwCommandsOrDefault;
      cResult[23] = tmp58;
    }
    class E {
      constructor() {
        let items;
        if (null != closure_0) {
          member = member.getMember(tmp, stateFromStores);
          let roles;
          if (member != null) {
            roles = member.roles;
          }
          if (roles == null) {
            roles = [];
          }
          items = roles;
        } else {
          items = [];
        }
        return items;
      }
    }
    cResult[9] = tmp31;
    cResult[10] = stateFromStores;
    cResult[11] = E;
    tmp46 = E;
  } else {
    class R {
      constructor() {
        return stateFromStores6(guild.getGuild(closure_0));
      }
    }
    const commandTypes = items;
    const obj = react;
    class M {
      constructor() {
        const currentUser = authStore.getCurrentUser();
        let flag;
        if (currentUser != null) {
          flag = currentUser.nsfwAllowed;
        }
        if (flag == null) {
          flag = false;
        }
        return flag;
      }
    }
    tmp2[0] = channel;
    memo = react.useMemo(() => {
      let tmp = require;
      if (require instanceof ChannelRecordBase) {
        tmp = require;
        if (require.isThread()) {
          let channel = ChannelStore.getChannel(require.parent_id);
          if (channel == null) {
            channel = require;
          }
          tmp = channel;
        }
      }
      return tmp;
    }, tmp2);
    let tmp5;
    if (null != memo) {
      class R {
        constructor() {
          return stateFromStores6(guild.getGuild(closure_0));
        }
      }
      tmp5 = memo instanceof stateFromStoresArray1 ? memo.guild_id : memo.id;
    }
    react = tmp5;
    const obj2 = require("AgeRestrictedContentSettingsUtils");
    const viewNsfwCommandsOrDefault1 = obj2.useViewNsfwCommandsOrDefault();
    const items6 = [stateFromStores5];
    const obj3 = require("get initialized");
    stateFromStores4 = obj3.useStateFromStores(items6, () => stateFromStores5.getId());
    const items7 = [UserStore];
    const obj4 = require("get initialized");
    stateFromStores5 = obj4.useStateFromStores(items7, () => {
      const currentUser = authStore.getCurrentUser();
      let flag;
      if (currentUser != null) {
        flag = currentUser.nsfwAllowed;
      }
      if (flag == null) {
        flag = false;
      }
      return flag;
    });
    const items8 = [];
    const obj5 = require("get initialized");
    class E {
      constructor() {
        let items;
        if (null != closure_0) {
          member = member.getMember(tmp, stateFromStores);
          let roles;
          if (member != null) {
            roles = member.roles;
          }
          if (roles == null) {
            roles = [];
          }
          items = roles;
        } else {
          items = [];
        }
        return items;
      }
    }
    stateFromStoresArray1 = obj5.useStateFromStoresArray(items8, () => {
      let items;
      if (null != closure_3) {
        member = GuildMemberStore.getMember(tmp, stateFromStores4);
        let roles;
        if (member != null) {
          roles = member.roles;
        }
        if (roles == null) {
          roles = [];
        }
        items = roles;
      } else {
        items = [];
      }
      return items;
    });
    const items9 = [stateFromStores4];
    const obj6 = require("get initialized");
    const stateFromStores6 = obj6.useStateFromStores(items9, () => ImpersonateStore.isViewingRoles(closure_3));
    require("get initialized");
    const items10 = [GuildStore];
    const items11 = [tmp5];
    if (stateFromStores5) {
      class R {
        constructor() {
          return stateFromStores6(guild.getGuild(closure_0));
        }
      }
      let tmp20 = !(memo instanceof stateFromStoresArray1);
      if (!tmp20) {
        class R {
          constructor() {
            return stateFromStores6(guild.getGuild(closure_0));
          }
        }
        tmp20 = viewNsfwCommandsOrDefault1;
      }
      class M {
        constructor() {
          const currentUser = authStore.getCurrentUser();
          let flag;
          if (currentUser != null) {
            flag = currentUser.nsfwAllowed;
          }
          if (flag == null) {
            flag = false;
          }
          return flag;
        }
      }
    }
    stateFromStores5 = tmp19;
    const items12 = [items, memo, stateFromStores6, stateFromStoresArray1, stateFromStores4, stateFromStores5, channel];
    memo1 = obj.useMemo(() => {
      const isThreadResult = require instanceof ChannelRecordBase && require.isThread();
      const tmpResult = computePermissions(memo, isThreadResult);
      return { context: memo, userId: stateFromStores4, roleIds: stateFromStoresArray1, commandTypes, isImpersonating: stateFromStores6, computedPermissions: tmpResult.computedPermissions, hasBaseAccessPermissions: tmpResult.hasBaseAccessPermissions, hasSendMessagesPermission: tmpResult.hasSendMessagesPermission, allowNsfw: stateFromStores5 };
    }, items12);
  }
  return memo1;
};
export const computeCommandContextType = function computeCommandContextType(channel, applicationId) {
  if (channel instanceof ChannelRecordBase) {
    let GUILD;
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    if (null == guild_id) {
      let type;
      if (channel != null) {
        type = channel.type;
      }
      if (type === map1.DM) {
        let PRIVATE_CHANNEL;
        let recipientId;
        if (channel != null) {
          recipientId = channel.getRecipientId();
        }
        if (recipientId === applicationId) {
          PRIVATE_CHANNEL = Server.InteractionContextType.BOT_DM;
        }
        GUILD = PRIVATE_CHANNEL;
      }
      PRIVATE_CHANNEL = Server.InteractionContextType.PRIVATE_CHANNEL;
    }
    return GUILD;
  }
  GUILD = Server.InteractionContextType.GUILD;
};
export const getContextGuildId = function getContextGuildId(context) {
  return context instanceof ChannelRecordBase ? context.guild_id : context.id;
};