// === Module 20078: useCommandPermissionSections ===

// Module 20078 (useCommandPermissionSections)
import applyDefault from "apply" /* 12 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 5695 */;
import ApplicationCommandUtils from "ApplicationCommandUtils" /* 8184 */;
import IntegrationPermissionActionCreatorsAll from "IntegrationPermissionActionCreators" /* 20071 */;
import CommandPermissionLockout from "CommandPermissionLockout" /* 20079 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 4955 */;
import GuildStore from "GuildStore" /* 4914 */;
import PermissionStore from "PermissionStore" /* 4975 */;
import IntegrationPermissionStore from "IntegrationPermissionStore" /* 20068 */;

require = fn;
const Permissions = fn(1071).Permissions;
let closure_11 = fn(7073).APPLICATION_COMMAND_PERMISSIONS_LIMIT;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/integrations/permission/useCommandPermissionSections.tsx");

export default function useCommandPermissionSections(applicationId) {
  applicationId = applicationId.applicationId;
  const commandId = applicationId.commandId;
  const guildId = applicationId.guildId;
  const editedTargetPermissions = applicationId.editedTargetPermissions;
  const originalApplicationPermissions = applicationId.originalApplicationPermissions;
  const originalCommandPermissions = applicationId.originalCommandPermissions;
  const onLockout = applicationId.onLockout;
  applicationId = undefined;
  let callback;
  items = [callback];
  const items1 = [commandId];
  const stateFromStores = applicationId(editedTargetPermissions[8]).useStateFromStores(items, () => {
    let command = null;
    if (null != commandId) {
      command = IntegrationPermissionStore.getCommand(tmp);
    }
    return command;
  }, items1);
  let obj = applicationId(editedTargetPermissions[8]);
  const items2 = [stateFromStores, onLockout, applicationId];
  const items3 = [guildId, stateFromStores, originalApplicationPermissions, originalCommandPermissions];
  const hasAccessToMutatePermissions = applicationId(editedTargetPermissions[8]).useStateFromStores(items2, () => {
    guild = GuildStore.getGuild(guildId);
    const selfMember = GuildMemberStore.getSelfMember(guildId);
    let hasAccessResult = null != guild && null != selfMember;
    if (hasAccessResult) {
      const obj2 = { PermissionStore, guild, selfMember, applicationLevelPermissions: originalApplicationPermissions, commandLevelPermissions: originalCommandPermissions, defaultMemberPermissions: null };
      let prop;
      if (stateFromStores != null) {
        prop = stateFromStores.defaultMemberPermissions;
      }
      obj2.defaultMemberPermissions = prop;
      hasAccessResult = ApplicationCommandUtils.hasAccess(obj2);
    }
    return hasAccessResult;
  }, items3);
  let tmp5 = commandId;
  if (commandId == null) {
    tmp5 = applicationId;
  }
  applicationId = tmp5;
  const items4 = [editedTargetPermissions];
  let obj2 = applicationId(editedTargetPermissions[8]);
  const items5 = [guildId, stateFromStores, commandId, originalApplicationPermissions];
  [tmp7, tmp8] = originalApplicationPermissions(originalCommandPermissions.useMemo(() => {
    const obj = {};
    const obj2 = {};
    const entries = Object.entries(editedTargetPermissions);
    while (tmp2 !== undefined) {
      let tmp5 = _slicedToArray(tmp3, 2);
      [tmp6, tmp7] = tmp5;
      if (tmp7.type === ApplicationCommandTypes.ApplicationCommandPermissionType.CHANNEL) {
        obj[tmp6] = tmp7;
      } else {
        obj2[tmp6] = tmp7;
      }
      continue;
    }
    items = [obj, obj2];
    return items;
  }, items4), 2);
  callback = originalCommandPermissions.useCallback((arg0) => {
    guild = GuildStore.getGuild(guildId);
    let selfMember = GuildMemberStore.getSelfMember(guildId);
    let tmp3 = null;
    if (!(null != guild && tmp3 != selfMember)) {
      return tmp4;
    } else {
      let tmp5 = arg0;
      if (tmp3 != commandId) {
        const obj2 = { PermissionStore, guild, selfMember, applicationLevelPermissions: null, commandLevelPermissions: null, defaultMemberPermissions: null };
        selfMember = originalApplicationPermissions;
        obj2.applicationLevelPermissions = originalApplicationPermissions;
        obj2.commandLevelPermissions = tmp5;
        tmp5 = stateFromStores;
        tmp3 = stateFromStores == tmp3;
        let prop;
        if (!tmp3) {
          prop = tmp5.defaultMemberPermissions;
        }
        obj2.defaultMemberPermissions = prop;
        let hasAccessResult = ApplicationCommandUtils.hasAccess(obj2);
      } else {
        const obj4 = { PermissionStore, guild, selfMember, applicationLevelPermissions: tmp5 };
        hasAccessResult = ApplicationCommandUtils.hasAccess(obj4);
      }
    }
  }, items5);
  const items6 = [applicationId, editedTargetPermissions, guildId, tmp5, callback, onLockout];
  const overwritesOverLimit = applicationId.selectedPermissionCount - closure_11;
  const maximumPermissionsSelected = overwritesOverLimit >= 0;
  const editPermissions = originalCommandPermissions.useCallback((arg0, arg1) => {
    const obj = {};
    const entries = Object.entries(editedTargetPermissions);
    while (tmp2 !== undefined) {
      let tmp5 = _slicedToArray(tmp3, 2);
      let obj6 = { id: null, permission: null, type: null };
      ({ id: obj2.id, permission: obj2.permission, type: obj2.type } = tmp5[1]);
      obj[tmp5[0]] = obj6;
      continue;
    }
    const merged = Object.assign(obj, arg0);
    let omitResult = merged;
    if (arg1.length > 0) {
      omitResult = applyDefault.omit(merged, arg1);
    }
    if (callback(omitResult)) {
      IntegrationPermissionActionCreatorsAll.editPermissions(applicationId, applicationId, omitResult);
    } else {
      const obj4 = CommandPermissionLockout;
      const commandPermissionLockout = obj4.getCommandPermissionLockout(guildId, editedTargetPermissions, arg0, arg1);
      onLockout(commandPermissionLockout.action, commandPermissionLockout.name);
    }
    tmp2 = entries[Symbol.iterator]();
  }, items6);
  if (hasAccessToMutatePermissions) {
    let addDisabledReason = null;
    if (maximumPermissionsSelected) {
      const intl3 = tmp(tmp2[14]).intl;
      addDisabledReason = intl3.string(tmp(tmp2[14]).t["XTwtW/"]);
    }
  } else if (null != commandId) {
    const intl2 = tmp(tmp2[14]).intl;
    addDisabledReason = intl2.string(tmp(tmp2[14]).t.tybdas);
  } else {
    const intl = tmp(tmp2[14]).intl;
    addDisabledReason = intl.string(tmp(tmp2[14]).t["z2hjk/"]);
  }
  let defaultMemberPermissions;
  if (stateFromStores != null) {
    defaultMemberPermissions = stateFromStores.defaultMemberPermissions;
  }
  if (defaultMemberPermissions == null) {
    defaultMemberPermissions = null;
  }
  let equalsResult = null != defaultMemberPermissions;
  if (equalsResult) {
    equalsResult = guildId(tmp2[15]).equals(defaultMemberPermissions, tmp(tmp2[9]).DISABLED_BY_DEFAULT_PERMISSION_FLAG);
    let obj3 = guildId(tmp2[15]);
  }
  if (equalsResult) {
    defaultMemberPermissions = Permissions.ADMINISTRATOR;
  }
  return { channels, membersAndRoles, editPermissions, hasAccessToMutatePermissions, overwritesOverLimit, maximumPermissionsSelected, addDisabledReason, defaultMemberPermissions };
};