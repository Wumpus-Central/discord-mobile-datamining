// discord_app/modules/application_commands/CommandPermissionContext.tsx
import BigFlagUtilsAll from "../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import Server from "../../flow/Server.tsx";
import AgeRestrictedContentSettingsUtils from "../user_settings/content_and_social/AgeRestrictedContentSettingsUtils.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import ImpersonateStore from "../impersonate/ImpersonateStore.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
function computePermissions(isPrivate, arg1) {
  if (!(isPrivate instanceof ChannelRecordBase)) {
    if (null != isPrivate) {
      const permissions = PermissionStore.computePermissions(isPrivate);
      let SEND_MESSAGES_IN_THREADS = constants2;
      let flag = true;
      let flag2 = true;
      if (!obj5.has(permissions, constants2.ADMINISTRATOR)) {
        const hasItem = BigFlagUtilsAll.has(permissions, SEND_MESSAGES_IN_THREADS.VIEW_CHANNEL);
        if (tmp3) {
          let hasItem1 = hasItem;
          if (hasItem) {
            hasItem1 = BigFlagUtilsAll.has(permissions, SEND_MESSAGES_IN_THREADS.USE_APPLICATION_COMMANDS);
            const tmp13Result3 = BigFlagUtilsAll;
          }
          const has = BigFlagUtilsAll.has;
          if (arg1) {
            SEND_MESSAGES_IN_THREADS = SEND_MESSAGES_IN_THREADS.SEND_MESSAGES_IN_THREADS;
            let hasItem2 = has(permissions, SEND_MESSAGES_IN_THREADS);
          } else {
            hasItem2 = has(permissions, SEND_MESSAGES_IN_THREADS.SEND_MESSAGES);
          }
          const tmp13Result4 = BigFlagUtilsAll;
        } else {
          flag = true;
          flag2 = hasItem;
        }
        const tmp13Result = BigFlagUtilsAll;
        tmp3 = isPrivate instanceof tmp;
      }
      const obj = {
        computedPermissions: permissions,
        hasBaseAccessPermissions: flag2,
        hasSendMessagesPermission: flag,
      };
      return obj;
    }
  }
  const obj2 = { computedPermissions: null, hasBaseAccessPermissions: true, hasSendMessagesPermission: true };
  const deserializer = BigFlagUtilsAll;
  obj2.computedPermissions = deserializer.deserialize(0);
  return obj2;
}
const ChannelRecordBase = fn(2068).ChannelRecordBase;
const isGuildNSFW = fn(2082).isGuildNSFW;
const Constants = fn(1085);
({ ChannelTypes: map1, Permissions: closure_14 } = Constants);
const ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled();
const size = fn(2);
const result = size.fileFinishedImporting("modules/application_commands/CommandPermissionContext.tsx");

export const buildPermissionContext = function buildPermissionContext(channel, items) {
  let obj = channel;
  if (channel instanceof ChannelRecordBase) {
    obj = channel;
    if (channel.isThread()) {
      channel = ChannelStore.getChannel(channel.parent_id);
      obj = channel;
    }
  }
  if (null == obj) {
    let viewNsfwCommandsOrDefault = AgeRestrictedContentSettingsUtils.getViewNsfwCommandsOrDefault();
    const id = AuthenticationStore.getId();
    const currentUser = UserStore.getCurrentUser();
    let flag;
    if (currentUser != null) {
      flag = currentUser.nsfwAllowed;
    }
    if (flag == null) {
      flag = false;
    }
    if (null != undefined) {
      const member = GuildMemberStore.getMember(undefined, id);
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
    if (isThreadResult) {
      isThreadResult = channel.isThread();
    }
    const isViewingRolesResult = ImpersonateStore.isViewingRoles(undefined);
    const obj4 = {
      context: obj,
      userId: id,
      roleIds: items,
      isImpersonating: isViewingRolesResult,
      commandTypes: items,
      computedPermissions: null,
      hasBaseAccessPermissions: null,
      hasSendMessagesPermission: null,
      allowNsfw: null,
    };
    ({
      computedPermissions: obj3.computedPermissions,
      hasBaseAccessPermissions: obj3.hasBaseAccessPermissions,
      hasSendMessagesPermission: obj3.hasSendMessagesPermission,
    } = computePermissions(obj, isThreadResult));
    let tmp24 = flag;
    if (tmp24) {
      let tmp25 = !(obj instanceof ChannelRecordBase);
      if (!tmp25) {
        if (null != obj.guild_id) {
          viewNsfwCommandsOrDefault = obj.isNSFW() || tmp23;
          const tmp26 = obj.isNSFW() || tmp23;
        }
        tmp25 = viewNsfwCommandsOrDefault;
      }
      tmp24 = tmp25;
    }
    obj4.allowNsfw = tmp24;
    return obj4;
  }
};
export const usePermissionContext = function usePermissionContext(channel, items) {
  if (closure_15) {
    const cResult = require("c").c(37);
    let tmp25 = channel;
    if (channel instanceof stateFromStoresArray1) {
      tmp25 = channel;
      if (channel.isThread()) {
        if (cResult[0] !== channel) {
          channel = ChannelStore.getChannel(channel.parent_id);
          cResult[0] = channel;
          cResult[1] = channel;
        }
      }
    }
    if (cResult[2] !== tmp25) {
      if (null == tmp25) {
        cResult[2] = tmp25;
        cResult[3] = undefined;
      }
    }
    closure_129_0 = tmp31;
    const obj7 = require("c");
    const viewNsfwCommandsOrDefault = require("AgeRestrictedContentSettingsUtils").useViewNsfwCommandsOrDefault();
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      items = [stateFromStores5];
      class A {
        constructor() {
          return closure_7.getId();
        }
      }
      cResult[4] = items;
      cResult[5] = A;
      let tmp37 = A;
      let tmp36 = items;
    } else {
      tmp36 = cResult[4];
      tmp37 = cResult[5];
    }
    const tmp21Result = require("AgeRestrictedContentSettingsUtils");
    const stateFromStores = require("initialize").useStateFromStores(tmp36, tmp37);
    closure_129_1 = stateFromStores;
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [UserStore];
      class M {
        constructor() {
          currentUser = closure_1_12.getCurrentUser();
          flag = undefined;
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
      let tmp41 = M;
      let tmp40 = items1;
    } else {
      tmp40 = cResult[6];
      tmp41 = cResult[7];
    }
    const tmp21Result6 = require("initialize");
    const stateFromStores1 = require("initialize").useStateFromStores(tmp40, tmp41);
    const _Symbol3 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [GuildMemberStore];
      class M {
        constructor() {
          currentUser = closure_1_12.getCurrentUser();
          flag = undefined;
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
      let tmp44 = items2;
    } else {
      tmp44 = cResult[8];
    }
    if (cResult[9] === tmp31) {
      if (cResult[10] === stateFromStores) {
        let tmp46 = cResult[11];
      }
      const stateFromStoresArray = require("initialize").useStateFromStoresArray(tmp44, tmp46);
      class M {
        constructor() {
          currentUser = closure_1_12.getCurrentUser();
          flag = undefined;
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
            currentUser = closure_1_12.getCurrentUser();
            flag = undefined;
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
        let tmp48 = items3;
      } else {
        tmp48 = cResult[12];
      }
      if (cResult[13] !== tmp31) {
        const fn = function b() {
          return ImpersonateStore.isViewingRoles(require);
        };
        cResult[13] = tmp31;
        class M {
          constructor() {
            currentUser = closure_1_12.getCurrentUser();
            flag = undefined;
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
        let tmp50 = fn;
      } else {
        tmp50 = cResult[14];
      }
      const tmp21Result8 = require("initialize");
      const stateFromStores2 = require("initialize").useStateFromStores(tmp48, tmp50);
      const _Symbol4 = Symbol;
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        const items4 = [GuildStore];
        class M {
          constructor() {
            currentUser = closure_1_12.getCurrentUser();
            flag = undefined;
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
        let tmp52 = items4;
      } else {
        tmp52 = cResult[15];
      }
      if (cResult[16] !== tmp31) {
        class R {
          constructor() {
            return isGuildNSFW(closure_10.getGuild(hasSendMessagesPermission));
          }
        }
        const items5 = [tmp31];
        class M {
          constructor() {
            currentUser = closure_1_12.getCurrentUser();
            flag = undefined;
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
        let tmp55 = items5;
      } else {
        class R {
          constructor() {
            return isGuildNSFW(closure_10.getGuild(hasSendMessagesPermission));
          }
        }
        tmp55 = cResult[18];
      }
      const tmp21Result9 = require("initialize");
      const stateFromStores3 = require("initialize").useStateFromStores(tmp52, R, tmp55);
      if (cResult[19] === tmp25) {
        class R {
          constructor() {
            return isGuildNSFW(closure_10.getGuild(hasSendMessagesPermission));
          }
        }
      }
      let tmp58 = stateFromStores1;
      if (tmp58) {
        class R {
          constructor() {
            return isGuildNSFW(closure_10.getGuild(hasSendMessagesPermission));
          }
        }
        if (!tmp59) {
          class R {
            constructor() {
              return isGuildNSFW(closure_10.getGuild(hasSendMessagesPermission));
            }
          }
          if (null != tmp25.guild_id) {
            class R {
              constructor() {
                return isGuildNSFW(closure_10.getGuild(hasSendMessagesPermission));
              }
            }
          }
          class M {
            constructor() {
              currentUser = closure_1_12.getCurrentUser();
              flag = undefined;
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
      cResult[19] = tmp25;
      cResult[20] = stateFromStores3;
      cResult[21] = stateFromStores1;
      cResult[22] = viewNsfwCommandsOrDefault;
      cResult[23] = tmp58;
      const tmp21Result10 = require("initialize");
    }
    class E {
      constructor() {
        if (null != hasSendMessagesPermission) {
          tmp2 = closure_9;
          tmp3 = closure_1;
          member = closure_9.getMember(tmp, closure_1);
          roles = undefined;
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
    const tmp21Result7 = require("initialize");
  } else {
    class R {
      constructor() {
        return isGuildNSFW(closure_10.getGuild(hasSendMessagesPermission));
      }
    }
    const commandTypes = items;
    class M {
      constructor() {
        currentUser = closure_1_12.getCurrentUser();
        flag = undefined;
        if (currentUser != null) {
          flag = currentUser.nsfwAllowed;
        }
        if (flag == null) {
          flag = false;
        }
        return flag;
      }
    }
    tmp[0] = channel;
    memo = noop.useMemo(() => {
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
    }, tmp);
    if (null == memo) {
      class R {
        constructor() {
          return isGuildNSFW(closure_10.getGuild(hasSendMessagesPermission));
        }
      }
      class M {
        constructor() {
          currentUser = closure_1_12.getCurrentUser();
          flag = undefined;
          if (currentUser != null) {
            flag = currentUser.nsfwAllowed;
          }
          if (flag == null) {
            flag = false;
          }
          return flag;
        }
      }
      const viewNsfwCommandsOrDefault1 = obj2.useViewNsfwCommandsOrDefault();
      const items6 = [stateFromStores5];
      stateFromStores4 = require("initialize").useStateFromStores(items6, () => stateFromStores5.getId());
      const obj3 = require("initialize");
      const items7 = [UserStore];
      stateFromStores5 = require("initialize").useStateFromStores(items7, () => {
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
      const obj4 = require("initialize");
      const items8 = [GuildMemberStore];
      stateFromStoresArray1 = require("initialize").useStateFromStoresArray(items8, () => {
        if (null != noop) {
          const member = GuildMemberStore.getMember(tmp, stateFromStores4);
          let roles;
          if (member != null) {
            roles = member.roles;
          }
          if (roles == null) {
            roles = [];
          }
          let items = roles;
        } else {
          items = [];
        }
        return items;
      });
      const obj5 = require("initialize");
      const items9 = [stateFromStores4];
      const stateFromStores6 = require("initialize").useStateFromStores(items9, () =>
        ImpersonateStore.isViewingRoles(noop),
      );
      require("initialize");
      class E {
        constructor() {
          if (null != hasSendMessagesPermission) {
            tmp2 = closure_9;
            tmp3 = closure_1;
            member = closure_9.getMember(tmp, closure_1);
            roles = undefined;
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
      tmp18[0] = GuildStore;
      const items10 = [undefined];
      if (stateFromStores5) {
        class R {
          constructor() {
            return isGuildNSFW(closure_10.getGuild(hasSendMessagesPermission));
          }
        }
        let tmp20 = !(memo instanceof stateFromStoresArray1);
        if (!tmp20) {
          class R {
            constructor() {
              return isGuildNSFW(closure_10.getGuild(hasSendMessagesPermission));
            }
          }
          tmp20 = viewNsfwCommandsOrDefault1;
        }
        class M {
          constructor() {
            currentUser = closure_1_12.getCurrentUser();
            flag = undefined;
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
      const items11 = [
        items,
        memo,
        stateFromStores6,
        stateFromStoresArray1,
        stateFromStores4,
        stateFromStores5,
        channel,
      ];
      return noop.useMemo(() => {
        let isThreadResult = require instanceof ChannelRecordBase;
        if (isThreadResult) {
          isThreadResult = require.isThread();
        }
        const tmpResult = computePermissions(memo, isThreadResult);
        return {
          context: memo,
          userId: stateFromStores4,
          roleIds: stateFromStoresArray1,
          commandTypes,
          isImpersonating: stateFromStores6,
          computedPermissions: tmpResult.computedPermissions,
          hasBaseAccessPermissions: tmpResult.hasBaseAccessPermissions,
          hasSendMessagesPermission: tmpResult.hasSendMessagesPermission,
          allowNsfw: stateFromStores5,
        };
      }, items11);
    } else {
      class R {
        constructor() {
          return isGuildNSFW(closure_10.getGuild(hasSendMessagesPermission));
        }
      }
    }
  }
};
export const computeCommandContextType = function computeCommandContextType(channel, applicationId) {
  if (channel instanceof ChannelRecordBase) {
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    if (null == guild_id) {
      let type;
      if (channel != null) {
        type = channel.type;
      }
      if (type !== constants.DM) {
        const PRIVATE_CHANNEL = Server.InteractionContextType.PRIVATE_CHANNEL;
      } else {
        let recipientId;
        if (channel != null) {
          recipientId = channel.getRecipientId();
        }
      }
      const BOT_DM = Server.InteractionContextType.BOT_DM;
    }
  }
  return Server.InteractionContextType.GUILD;
};
export const getContextGuildId = function getContextGuildId(context) {
  return context instanceof ChannelRecordBase ? context.guild_id : context.id;
};
