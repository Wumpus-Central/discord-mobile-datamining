// === Module 5710: computePermissions ===

// Module 5710 (computePermissions)
import noop from "noop";
import initialize from "initialize";
import { ChannelRecordBase } from "createChannelRecord";
import { isGuildNSFW } from "GuildNSFWContentLevel";
import fetchFingerprint from "fetchFingerprint";
import ensureGuildLoaded from "ensureGuildLoaded";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";

let closure_14;
let map1;
const require = arg1;
function computePermissions(isPrivate) {
  if (!(isPrivate instanceof ChannelRecordBase)) {
    if (null != isPrivate) {
      const permissions = getUncachedChannelPermissions.computePermissions(isPrivate);
      let SEND_MESSAGES_IN_THREADS = constants2;
      let flag = true;
      let flag2 = true;
      if (!obj6.has(permissions, constants2.ADMINISTRATOR)) {
        let tmp13Result = tmp13(506);
        const hasItem = tmp13Result.has(permissions, SEND_MESSAGES_IN_THREADS.VIEW_CHANNEL);
        if (tmp3) {
          let hasItem1 = hasItem;
          if (hasItem) {
            tmp13Result = tmp13(506);
            hasItem1 = tmp13Result.has(permissions, SEND_MESSAGES_IN_THREADS.USE_APPLICATION_COMMANDS);
          }
          const has = tmp13(506).has;
          if (arg1) {
            SEND_MESSAGES_IN_THREADS = SEND_MESSAGES_IN_THREADS.SEND_MESSAGES_IN_THREADS;
            let hasItem2 = has(permissions, SEND_MESSAGES_IN_THREADS);
          } else {
            hasItem2 = has(permissions, SEND_MESSAGES_IN_THREADS.SEND_MESSAGES);
          }
          const tmp13Result1 = tmp13(506);
        } else {
          flag = true;
          flag2 = hasItem;
        }
        tmp3 = isPrivate instanceof tmp;
      }
      let obj = { computedPermissions: null, hasBaseAccessPermissions: null, hasSendMessagesPermission: null };
      obj[0] = permissions;
      obj[1] = flag2;
      obj[2] = flag;
      return obj;
    }
  }
  obj = { computedPermissions: null, hasBaseAccessPermissions: true, hasSendMessagesPermission: true };
  obj[0] = importAll(506).deserialize(0);
  return obj;
}
({ ChannelTypes: map1, Permissions: closure_14 } = ME);
const result = require("createChannelRecord").fileFinishedImporting("modules/application_commands/CommandPermissionContext.tsx");

export const buildPermissionContext = function buildPermissionContext(channel, items) {
  let obj = channel;
  if (channel instanceof ChannelRecordBase) {
    obj = channel;
    if (channel.isThread()) {
      channel = channel.getChannel(channel.parent_id);
      obj = channel;
    }
  }
  if (null == obj) {
    let viewNsfwCommandsOrDefault = require(5711) /* resolveNsfwTogglesWithDefaults */.getViewNsfwCommandsOrDefault();
    id = id.getId();
    currentUser = currentUser.getCurrentUser();
    let flag;
    if (currentUser != null) {
      flag = currentUser.nsfwAllowed;
    }
    if (flag == null) {
      flag = false;
    }
    if (null != undefined) {
      member = member.getMember(undefined, id);
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
    let isThreadResult = channel instanceof tmp;
    const obj2 = require(5711) /* resolveNsfwTogglesWithDefaults */;
    if (isThreadResult) {
      isThreadResult = channel.isThread();
    }
    const isViewingRolesResult = viewingRoles.isViewingRoles(undefined);
    const tmp17 = computePermissions;
    obj = { context: null, userId: null, roleIds: null, isImpersonating: null, commandTypes: null, computedPermissions: null, hasBaseAccessPermissions: null, hasSendMessagesPermission: null, allowNsfw: null };
    obj[0] = obj;
    obj[1] = id;
    obj[2] = items;
    obj[3] = isViewingRolesResult;
    obj[4] = items;
    ({ computedPermissions: obj3[5], hasBaseAccessPermissions: obj3[6], hasSendMessagesPermission: obj3[7] } = computePermissions(obj, isThreadResult));
    let tmp24 = flag;
    if (tmp24) {
      let tmp25 = !(obj instanceof tmp);
      if (!tmp25) {
        if (null != obj.guild_id) {
          viewNsfwCommandsOrDefault = obj.isNSFW() || tmp23;
          const tmp26 = obj.isNSFW() || tmp23;
        }
        tmp25 = viewNsfwCommandsOrDefault;
      }
      tmp24 = tmp25;
    }
    obj[8] = tmp24;
    return obj;
  }
};
export const usePermissionContext = function usePermissionContext(channel, items) {
  const _require = channel;
  let closure_1 = items;
  items = [channel];
  const memo = React.useMemo(() => {
    let tmp = closure_0;
    if (closure_0 instanceof stateFromStoresArray) {
      tmp = obj;
      if (obj.isThread()) {
        let channel = outer1_8.getChannel(obj.parent_id);
        if (channel == null) {
          channel = obj;
        }
        tmp = channel;
      }
    }
    return tmp;
  }, items);
  if (null == memo) {
    React = undefined;
    let viewNsfwCommandsOrDefault = _require(memo[11]).useViewNsfwCommandsOrDefault();
    const obj3 = _require(memo[11]);
    const items1 = [fetchFingerprint];
    const stateFromStores = _require(memo[12]).useStateFromStores(items1, () => tmp17.getId());
    const obj4 = _require(memo[12]);
    const items2 = [mergeGuildAvatar];
    const stateFromStores1 = _require(memo[12]).useStateFromStores(items2, () => {
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
    const obj5 = _require(memo[12]);
    const items3 = [trackCommunicationDisabled];
    const stateFromStoresArray = _require(memo[12]).useStateFromStoresArray(items3, () => {
      if (null != c3) {
        const member = outer1_9.getMember(tmp, stateFromStores);
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
    const obj6 = _require(memo[12]);
    const items4 = [stateFromStores];
    const stateFromStores2 = _require(memo[12]).useStateFromStores(items4, () => stateFromStores.isViewingRoles(c3));
    _require(memo[12]);
    const items5 = [createGuildRecordFromRust];
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
    fetchFingerprint = tmp17;
    const items7 = [items, memo, stateFromStores2, stateFromStoresArray, stateFromStores, tmp17, channel];
    return React.useMemo(() => {
      let obj = closure_0;
      let isThreadResult = closure_0 instanceof stateFromStoresArray;
      if (isThreadResult) {
        isThreadResult = obj.isThread();
      }
      const tmpResult = outer1_15(memo, isThreadResult);
      obj = { context: tmp2, userId: stateFromStores, roleIds: stateFromStoresArray, commandTypes: closure_1, isImpersonating: stateFromStores2, computedPermissions: tmpResult.computedPermissions, hasBaseAccessPermissions: tmpResult.hasBaseAccessPermissions, hasSendMessagesPermission: tmpResult.hasSendMessagesPermission, allowNsfw: fetchFingerprint };
      return obj;
    }, items7);
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
        const PRIVATE_CHANNEL = require(1906) /* PermissionOverwriteType */.InteractionContextType.PRIVATE_CHANNEL;
      } else {
        let recipientId;
        if (channel != null) {
          recipientId = channel.getRecipientId();
        }
      }
      const BOT_DM = require(1906) /* PermissionOverwriteType */.InteractionContextType.BOT_DM;
    }
  }
  return require(1906) /* PermissionOverwriteType */.InteractionContextType.GUILD;
};
export const getContextGuildId = function getContextGuildId(context) {
  return context instanceof ChannelRecordBase ? context.guild_id : context.id;
};