// discord_app/modules/application_commands/CommandPermissionUtils.tsx
import _modDef38 from "../../../_runtime/metro/00038__.js";
import Constants from "../../Constants.tsx";
import BigFlagUtilsAll from "../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import ChannelRecord from "../../records/ChannelRecord.tsx";
import ApplicationCommandConstants from "ApplicationCommandConstants.tsx";
import ApplicationCommandUtils from "ApplicationCommandUtils.tsx";
import IntegrationPermissionUtils from "../guild_settings/integrations/permission/IntegrationPermissionUtils.tsx";
import ApplicationCommandTypes from "ApplicationCommandTypes.tsx";
import ApplicationIntegrationType from "../../../discord_common/js/shared/shared-constants/ApplicationIntegrationType.tsx";
import CommandPermissionContext from "CommandPermissionContext.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

function computeAllowedForUser(permissions, guild_id, userId, roleIds, isImpersonating) {
  if (null == permissions) {
    return null;
  } else {
    if (!isImpersonating) {
      const obj = IntegrationPermissionUtils;
      const tmp4 =
        permissions[obj.toPermissionKey(obj, userId, ApplicationCommandTypes.ApplicationCommandPermissionType.USER)];
      if (null != tmp4) {
        return tmp4.permission;
      }
    }
    let flag2 = false;
    const obj2 = roleIds[Symbol.iterator]();
    while (obj2 !== undefined) {
      let obj3 = IntegrationPermissionUtils;
      let tmp12 =
        permissions[obj3.toPermissionKey(obj3, tmp8, ApplicationCommandTypes.ApplicationCommandPermissionType.ROLE)];
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
        tmp17 =
          permissions[
            obj4.toPermissionKey(obj4, guild_id, ApplicationCommandTypes.ApplicationCommandPermissionType.ROLE)
          ];
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
const HasAccessResult = {
  ALLOWED: 0,
  [0]: "ALLOWED",
  NSFW_NOT_ALLOWED: 1,
  [1]: "NSFW_NOT_ALLOWED",
  WRONG_COMMAND_TYPE: 2,
  [2]: "WRONG_COMMAND_TYPE",
  PREDICATE_FAILED: 3,
  [3]: "PREDICATE_FAILED",
  CONTEXT_NOT_ALLOWED: 4,
  [4]: "CONTEXT_NOT_ALLOWED",
  MISSING_BASE_PERMISSIONS: 5,
  [5]: "MISSING_BASE_PERMISSIONS",
  CHANNEL_DENIED: 6,
  [6]: "CHANNEL_DENIED",
  USER_DENIED: 7,
  [7]: "USER_DENIED",
};
const result = size.fileFinishedImporting("modules/application_commands/CommandPermissionUtils.tsx");

export { HasAccessResult };
export const hasAccess = function hasAccess(type, arg1, applicationAllowedForChannel) {
  ({ context, commandTypes, computedPermissions, userId, roleIds, isImpersonating } = arg1);
  applicationAllowedForChannel = applicationAllowedForChannel.applicationAllowedForChannel;
  ({ allowNsfw, hasBaseAccessPermissions, hasSendMessagesPermission } = arg1);
  ({ applicationAllowedForUser, isGuildInstalled, isUserInstalled, commandBotId } = applicationAllowedForChannel);
  if (commandTypes.includes(type.type)) {
    if (type.nsfw) {
      if (!allowNsfw) {
        return obj.NSFW_NOT_ALLOWED;
      }
    }
    if (null != context) {
      obj = CommandPermissionContext;
      const commandContextType = obj.computeCommandContextType(context, commandBotId);
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
        if (commandContextType === tmp51(1894).InteractionContextType.BOT_DM) {
          return obj.CONTEXT_NOT_ALLOWED;
        }
      }
      if (commandContextType === tmp51(1894).InteractionContextType.PRIVATE_CHANNEL) {
        return obj.CONTEXT_NOT_ALLOWED;
      }
    }
    if (null != type.predicate) {
      if (context instanceof ChannelRecordBase) {
        obj = { channel: context, guild: GuildStore.getGuild(context.guild_id) };
        if (!type.predicate(obj)) {
          return obj.PREDICATE_FAILED;
        }
      }
    }
    if (type.applicationId === BuiltInSectionId.BUILT_IN) {
      return obj.ALLOWED;
    } else {
      let contextGuildId;
      if (null != context) {
        contextGuildId = CommandPermissionContext.getContextGuildId(context);
      }
      if (null == contextGuildId) {
        return obj.ALLOWED;
      } else {
        if (obj9.has(computedPermissions, Permissions.ADMINISTRATOR)) {
          return obj.ALLOWED;
        } else {
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
              const tmp28 =
                permissions[
                  obj4.toPermissionKey(obj4, id, ApplicationCommandTypes.ApplicationCommandPermissionType.CHANNEL)
                ];
              if (null != tmp28) {
                permission = tmp28.permission;
              } else {
                tmp27(7522);
                const tmp27Result = tmp27(7521);
                const tmp30 =
                  permissions[
                    tmp27Result.toPermissionKey(
                      tmp27Result,
                      tmp27Result.allChannelsSentinel(contextGuildId),
                      tmp27(undefined, 7523).ApplicationCommandPermissionType.CHANNEL,
                    )
                  ];
                let permission1 = null;
                if (null != tmp30) {
                  permission1 = tmp30.permission;
                }
                permission = permission1;
                const allChannelsSentinelResult = tmp27Result.allChannelsSentinel(contextGuildId);
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
          const tmp38 = computeAllowedForUser(type.permissions, contextGuildId, userId, roleIds, isImpersonating);
          if (true === tmp38) {
            let USER_DENIED = obj.ALLOWED;
          } else {
            if (false !== tmp38) {
              if (false !== applicationAllowedForUser) {
                if (null != type.defaultMemberPermissions) {
                  let tmp53Result = tmp53(1086);
                  if (
                    !tmp53Result.equals(
                      type.defaultMemberPermissions,
                      ApplicationCommandUtils.DISABLED_BY_DEFAULT_PERMISSION_FLAG,
                    )
                  ) {
                    tmp53Result = tmp53(1086);
                    if (tmp53Result.has(computedPermissions, type.defaultMemberPermissions)) {
                      let USER_DENIED2 = obj.ALLOWED;
                    }
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
        obj9 = BigFlagUtilsAll;
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
    const tmp3 =
      permissions[obj.toPermissionKey(obj, id2, ApplicationCommandTypes.ApplicationCommandPermissionType.CHANNEL)];
    if (null != tmp3) {
      return tmp3.permission;
    } else {
      tmp(7522);
      const tmpResult = tmp(7521);
      const tmp6 =
        permissions[
          tmpResult.toPermissionKey(
            tmpResult,
            tmpResult.allChannelsSentinel(guild_id),
            tmp(undefined, 7523).ApplicationCommandPermissionType.CHANNEL,
          )
        ];
      let permission = null;
      if (null != tmp6) {
        permission = tmp6.permission;
      }
      return permission;
    }
  }
};
export { computeAllowedForUser };
