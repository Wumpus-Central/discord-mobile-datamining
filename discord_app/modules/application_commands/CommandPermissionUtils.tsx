// === Module 8957: CommandPermissionUtils ===

// Module 8957 (CommandPermissionUtils)
import _modDef38 from "module_38" /* 38 */;
import Constants from "Constants" /* 1085 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1097 */;
import Server from "Server" /* 1985 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import ApplicationCommandConstants from "ApplicationCommandConstants" /* 5795 */;
import ApplicationCommandUtils from "ApplicationCommandUtils" /* 7043 */;
import IntegrationPermissionUtils from "IntegrationPermissionUtils" /* 7046 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 7047 */;
import ApplicationIntegrationType from "ApplicationIntegrationType" /* 8740 */;
import CommandPermissionContext from "CommandPermissionContext" /* 8832 */;
import GuildStore from "GuildStore" /* 2074 */;
import size from "module_2" /* 2 */;

function computeAllowedForUser(permissions, guild_id, userId, roleIds, isImpersonating) {
  if (null == permissions) {
    return null;
  } else {
    const tmp21 = isImpersonating;
    if (!tmp21) {
      const obj = IntegrationPermissionUtils;
      const tmp4 = permissions[obj.toPermissionKey(obj, userId, ApplicationCommandTypes.ApplicationCommandPermissionType.USER)];
      if (null != tmp4) {
        return tmp4.permission;
      }
    }
    let flag2 = false;
    const obj2 = roleIds[Symbol.iterator]();
    while (obj2 !== undefined) {
      let obj3 = IntegrationPermissionUtils;
      let tmp12 = permissions[obj3.toPermissionKey(obj3, tmp8, ApplicationCommandTypes.ApplicationCommandPermissionType.ROLE)];
      if (null != tmp12) {
        if (tmp13.permission) {
          obj2.return();
          return true;
        } else {
          flag2 = true;
        }
      }
      continue;
    }
    if (flag2) {
      return false;
    } else {
      let tmp17 = null;
      if (null != guild_id) {
        const obj4 = IntegrationPermissionUtils;
        tmp17 = permissions[obj4.toPermissionKey(obj4, guild_id, ApplicationCommandTypes.ApplicationCommandPermissionType.ROLE)];
      }
      let permission = null;
      if (null != tmp17) {
        permission = tmp17.permission;
      }
      return permission;
    }
  }
}
const ChannelRecordBase = ChannelRecord.ChannelRecordBase;
const BuiltInSectionId = ApplicationCommandConstants.BuiltInSectionId;
const Permissions = Constants.Permissions;
const HasAccessResult = { ALLOWED: 0, [0]: "ALLOWED", NSFW_NOT_ALLOWED: 1, [1]: "NSFW_NOT_ALLOWED", WRONG_COMMAND_TYPE: 2, [2]: "WRONG_COMMAND_TYPE", PREDICATE_FAILED: 3, [3]: "PREDICATE_FAILED", CONTEXT_NOT_ALLOWED: 4, [4]: "CONTEXT_NOT_ALLOWED", MISSING_BASE_PERMISSIONS: 5, [5]: "MISSING_BASE_PERMISSIONS", CHANNEL_DENIED: 6, [6]: "CHANNEL_DENIED", USER_DENIED: 7, [7]: "USER_DENIED" };
const result = size.fileFinishedImporting("modules/application_commands/CommandPermissionUtils.tsx");

export { HasAccessResult };
export const hasAccess = function hasAccess(type, arg1, applicationAllowedForChannel) {
  let allowNsfw;
  let applicationAllowedForUser;
  let commandBotId;
  let commandTypes;
  let computedPermissions;
  let context;
  let hasBaseAccessPermissions;
  let hasSendMessagesPermission;
  let isGuildInstalled;
  let isImpersonating;
  let isUserInstalled;
  let obj;
  let roleIds;
  let userId;
  ({ context, commandTypes, computedPermissions, userId, roleIds, isImpersonating } = arg1);
  applicationAllowedForChannel = applicationAllowedForChannel.applicationAllowedForChannel;
  ({ allowNsfw, hasBaseAccessPermissions, hasSendMessagesPermission } = arg1);
  ({ applicationAllowedForUser, isGuildInstalled, isUserInstalled, commandBotId } = applicationAllowedForChannel);
  if (commandTypes.includes(type.type)) {
    let commandContextType;
    if (type.nsfw) {
      if (!allowNsfw) {
        return obj.NSFW_NOT_ALLOWED;
      }
    }
    if (null != context) {
      obj = CommandPermissionContext;
      commandContextType = obj.computeCommandContextType(context, commandBotId);
    }
    if (null != type.contexts) {
      if (null != commandContextType) {
        const contexts = type.contexts;
        if (!contexts.includes(commandContextType)) {
          return obj.CONTEXT_NOT_ALLOWED;
        }
      }
    } else if (type.inputType === ApplicationCommandTypes.ApplicationCommandInputType.BOT) {
      if (false === type.dmPermission) {
        if (commandContextType === Server.InteractionContextType.BOT_DM) {
          return obj.CONTEXT_NOT_ALLOWED;
        }
      }
      if (commandContextType === Server.InteractionContextType.PRIVATE_CHANNEL) {
        return obj.CONTEXT_NOT_ALLOWED;
      }
    }
    if (null != type.predicate) {
      if (context instanceof ChannelRecordBase) {
        const obj2 = { channel: context, guild: GuildStore.getGuild(context.guild_id) };
        if (!type.predicate(obj2)) {
          return obj.PREDICATE_FAILED;
        }
      }
    }
    if (type.applicationId === BuiltInSectionId.BUILT_IN) {
      return obj.ALLOWED;
    } else {
      let contextGuildId;
      if (null != context) {
        const obj3 = CommandPermissionContext;
        contextGuildId = obj3.getContextGuildId(context);
      }
      if (null == contextGuildId) {
        return obj.ALLOWED;
      } else {
        const obj8 = BigFlagUtilsAll;
        if (obj8.has(computedPermissions, Permissions.ADMINISTRATOR)) {
          return obj.ALLOWED;
        } else {
          let USER_DENIED;
          if (isUserInstalled) {
            const integration_types = type.integration_types;
            let hasItem;
            if (integration_types != null) {
              hasItem = integration_types.includes(ApplicationIntegrationType.ApplicationIntegrationType.USER_INSTALL);
            }
            if (hasItem) {
              return obj.ALLOWED;
            }
          }
          if (!hasBaseAccessPermissions) {
            if (isGuildInstalled) {
              if (null != type.integration_types) {
                const integration_types2 = type.integration_types;
              }
              return obj.MISSING_BASE_PERMISSIONS;
            }
          }
          if (context instanceof ChannelRecordBase) {
            _modDef38(undefined !== applicationAllowedForChannel, "missing applicationAllowedForChannel");
            const permissions = type.permissions;
            let permission = null;
            if (null != permissions) {
              let id = context.id;
              if (context.isThread()) {
                let id2 = context.parent_id;
                if (id2 == null) {
                  id2 = context.id;
                }
                id = id2;
              }
              const obj4 = IntegrationPermissionUtils;
              const tmp28 = permissions[obj4.toPermissionKey(obj4, id, ApplicationCommandTypes.ApplicationCommandPermissionType.CHANNEL)];
              if (null != tmp28) {
                permission = tmp28.permission;
              } else {
                const tmp27Result = IntegrationPermissionUtils;
                const toPermissionKey = tmp27Result.toPermissionKey;
                const tmp27Result2 = ApplicationCommandUtils;
                const allChannelsSentinelResult = tmp27Result2.allChannelsSentinel(contextGuildId);
                const tmp31 = permissions[toPermissionKey(tmp27Result, allChannelsSentinelResult, ApplicationCommandTypes.ApplicationCommandPermissionType.CHANNEL)];
                let permission1 = null;
                if (null != tmp31) {
                  permission1 = tmp31.permission;
                }
                permission = permission1;
              }
            }
            if (false === permission) {
              return obj.CHANNEL_DENIED;
            } else if (true !== permission) {
              if (false === applicationAllowedForChannel) {
                return obj.CHANNEL_DENIED;
              }
            }
          }
          const tmp39 = computeAllowedForUser(type.permissions, contextGuildId, userId, roleIds, isImpersonating);
          if (true === tmp39) {
            USER_DENIED = obj.ALLOWED;
          } else {
            if (false !== tmp39) {
              if (false !== applicationAllowedForUser) {
                if (null != type.defaultMemberPermissions) {
                  const tmp53Result = BigFlagUtilsAll;
                  if (!tmp53Result.equals(type.defaultMemberPermissions, ApplicationCommandUtils.DISABLED_BY_DEFAULT_PERMISSION_FLAG)) {
                    let USER_DENIED2;
                    const tmp53Result2 = BigFlagUtilsAll;
                    if (tmp53Result2.has(computedPermissions, type.defaultMemberPermissions)) {
                      USER_DENIED2 = obj.ALLOWED;
                    }
                    USER_DENIED = USER_DENIED2;
                  }
                  USER_DENIED2 = obj.USER_DENIED;
                } else {
                  USER_DENIED = obj.ALLOWED;
                }
              }
            }
            USER_DENIED = obj.USER_DENIED;
          }
          return USER_DENIED;
        }
      }
    }
  } else {
    return obj.WRONG_COMMAND_TYPE;
  }
};
export const computeAllowedForChannel = function computeAllowedForChannel(permissions, context, guild_id) {
  if (null == permissions) {
    return null;
  } else {
    let id2 = context.id;
    if (context.isThread()) {
      let id = context.parent_id;
      if (id == null) {
        id = context.id;
      }
      id2 = id;
    }
    const obj = IntegrationPermissionUtils;
    const tmp3 = permissions[obj.toPermissionKey(obj, id2, ApplicationCommandTypes.ApplicationCommandPermissionType.CHANNEL)];
    if (null != tmp3) {
      return tmp3.permission;
    } else {
      const tmpResult = IntegrationPermissionUtils;
      const toPermissionKey = tmpResult.toPermissionKey;
      const tmpResult2 = ApplicationCommandUtils;
      const allChannelsSentinelResult = tmpResult2.allChannelsSentinel(guild_id);
      const tmp7 = permissions[toPermissionKey(tmpResult, allChannelsSentinelResult, ApplicationCommandTypes.ApplicationCommandPermissionType.CHANNEL)];
      let permission = null;
      if (null != tmp7) {
        permission = tmp7.permission;
      }
      return permission;
    }
  }
};
export { computeAllowedForUser };