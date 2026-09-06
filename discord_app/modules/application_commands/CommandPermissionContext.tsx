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

require = fn;
function computePermissions(isPrivate, arg1) {
  if (!(isPrivate instanceof ChannelRecordBase)) {
    if (null != isPrivate) {
      const permissions = PermissionStore.computePermissions(isPrivate);
      let SEND_MESSAGES_IN_THREADS = constants2;
      let flag = true;
      let flag2 = true;
      if (!obj5.has(permissions, constants2.ADMINISTRATOR)) {
        let tmp13Result = BigFlagUtilsAll;
        const hasItem = tmp13Result.has(permissions, SEND_MESSAGES_IN_THREADS.VIEW_CHANNEL);
        if (tmp3) {
          let hasItem1 = hasItem;
          if (hasItem) {
            tmp13Result = BigFlagUtilsAll;
            hasItem1 = tmp13Result.has(permissions, SEND_MESSAGES_IN_THREADS.USE_APPLICATION_COMMANDS);
          }
          const has = BigFlagUtilsAll.has;
          if (arg1) {
            SEND_MESSAGES_IN_THREADS = SEND_MESSAGES_IN_THREADS.SEND_MESSAGES_IN_THREADS;
            let hasItem2 = has(permissions, SEND_MESSAGES_IN_THREADS);
          } else {
            hasItem2 = has(permissions, SEND_MESSAGES_IN_THREADS.SEND_MESSAGES);
          }
          const tmp13Result1 = BigFlagUtilsAll;
        } else {
          flag = true;
          flag2 = hasItem;
        }
        tmp3 = isPrivate instanceof tmp;
      }
      let obj = { computedPermissions: permissions, hasBaseAccessPermissions: flag2, hasSendMessagesPermission: flag };
      return obj;
    }
  }
  obj = { computedPermissions: null, hasBaseAccessPermissions: true, hasSendMessagesPermission: true };
  const deserializer = BigFlagUtilsAll;
  obj.computedPermissions = deserializer.deserialize(0);
  return obj;
}
const ChannelRecordBase = fn(1961).ChannelRecordBase;
const isGuildNSFW = fn(1975).isGuildNSFW;
const Constants = fn(1074);
({ ChannelTypes: map1, Permissions: closure_14 } = Constants);
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
    obj = {
      context: null,
      userId: null,
      roleIds: null,
      isImpersonating: null,
      commandTypes: null,
      computedPermissions: null,
      hasBaseAccessPermissions: null,
      hasSendMessagesPermission: null,
      allowNsfw: null,
    };
    obj.context = obj;
    obj.userId = id;
    obj.roleIds = items;
    obj.isImpersonating = isViewingRolesResult;
    obj.commandTypes = items;
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
    obj.allowNsfw = tmp24;
    return obj;
  }
};
export const usePermissionContext = function usePermissionContext(channel, items) {
  _require = channel;
  const commandTypes = items;
  items = [channel];
  const memo = noop.useMemo(() => {
    let tmp = thread;
    if (thread instanceof ChannelRecordBase) {
      tmp = thread;
      if (thread.isThread()) {
        let channel = ChannelStore.getChannel(thread.parent_id);
        if (channel == null) {
          channel = thread;
        }
        tmp = channel;
      }
    }
    return tmp;
  }, items);
  if (null == memo) {
    noop = undefined;
    let viewNsfwCommandsOrDefault = require("AgeRestrictedContentSettingsUtils").useViewNsfwCommandsOrDefault();
    const obj3 = require("AgeRestrictedContentSettingsUtils");
    const items1 = [viewNsfwCommandsOrDefault];
    const stateFromStores = require("initialize").useStateFromStores(items1, () => viewNsfwCommandsOrDefault.getId());
    const obj4 = require("initialize");
    const items2 = [UserStore];
    const stateFromStores1 = require("initialize").useStateFromStores(items2, () => {
      currentUser = currentUser.getCurrentUser();
      let flag;
      if (currentUser != null) {
        flag = currentUser.nsfwAllowed;
      }
      if (flag == null) {
        flag = false;
      }
      return flag;
    });
    const obj5 = require("initialize");
    const items3 = [GuildMemberStore];
    const stateFromStoresArray = require("initialize").useStateFromStoresArray(items3, () => {
      if (null != c3) {
        const member = GuildMemberStore.getMember(tmp, stateFromStores);
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
    const obj6 = require("initialize");
    const items4 = [stateFromStores];
    const stateFromStores2 = require("initialize").useStateFromStores(items4, () =>
      ImpersonateStore.isViewingRoles(c3),
    );
    require("initialize");
    const items5 = [GuildStore];
    const items6 = [undefined];
    let tmp17 = stateFromStores1;
    if (tmp17) {
      let tmp19 = !(memo instanceof stateFromStoresArray);
      if (!tmp19) {
        if (null != memo.guild_id) {
          viewNsfwCommandsOrDefault = memo.isNSFW() || tmp16;
          const tmp20 = memo.isNSFW() || tmp16;
        }
        tmp19 = viewNsfwCommandsOrDefault;
      }
      tmp17 = tmp19;
    }
    viewNsfwCommandsOrDefault = tmp17;
    const items7 = [items, memo, stateFromStores2, stateFromStoresArray, stateFromStores, tmp17, channel];
    return obj.useMemo(() => {
      let obj = closure_0;
      let isThreadResult = closure_0 instanceof ChannelRecordBase;
      if (isThreadResult) {
        isThreadResult = obj.isThread();
      }
      const tmpResult = computePermissions(memo, isThreadResult);
      obj = {
        context: memo,
        userId: stateFromStores,
        roleIds: stateFromStoresArray,
        commandTypes,
        isImpersonating: stateFromStores2,
        computedPermissions: tmpResult.computedPermissions,
        hasBaseAccessPermissions: tmpResult.hasBaseAccessPermissions,
        hasSendMessagesPermission: tmpResult.hasSendMessagesPermission,
        allowNsfw: viewNsfwCommandsOrDefault,
      };
      return obj;
    }, items7);
  }
  obj = noop;
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
