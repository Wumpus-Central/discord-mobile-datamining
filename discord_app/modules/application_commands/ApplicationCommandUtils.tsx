// discord_app/modules/application_commands/ApplicationCommandUtils.tsx
import set from "../../../_runtime/00002_set.js";
import applyDefault from "../../../_runtime/00012_apply.js";
import IntegerDefault from "../../../_runtime/00014_Integer.js";
import sum2 from "../../../discord_common/js/shared/Constants.tsx";
import createChannelRecord from "../../records/ChannelRecord.tsx";
import PermissionOverwriteType from "../../flow/Server.tsx";
import collectGuildAnalyticsMetadata from "../app_analytics/AppAnalyticsUtils.tsx";
import handleChanged from "../../stores/DraftStore.tsx";
import commandPermissions from "../guild_settings/integrations/permission/IntegrationPermissionUtils.tsx";
import ApplicationCommandSectionType from "ApplicationCommandTypes.tsx";
import TRUE_OPTION_NAME from "ApplicationCommandConstants.tsx";
import ME from "../../Constants.tsx";
import deserializeResult from "../../index.native.tsx";
import importAllResult from "../../../discord_common/js/shared/utils/BigFlagUtils.tsx";

function buildCommand(arg0) {
  ({ rootCommand, command, subCommandPath } = arg0);
  let obj;
  let tmp = null != rootCommand.permissions;
  ({ applicationId, useKeyedPermissions } = arg0);
  if (tmp) {
    tmp = rootCommand.permissions.length > 0;
  }
  if (!tmp) {
    let items = subCommandPath;
    if (subCommandPath == null) {
      items = [];
    }
    const mapped = items.map((name) => name.name);
    let items1 = subCommandPath;
    if (subCommandPath == null) {
      items1 = [];
    }
    const mapped1 = items1.map((displayName) => displayName.displayName);
    obj = { version: null, guildId: null, id: null, untranslatedName: null, serverLocalizedName: null, applicationId: null, type: null, inputType: null, untranslatedDescription: null, options: null, rootCommand: null, subCommandPath: null, defaultMemberPermissions: null, dmPermission: null, permissions: null, displayName: null, displayDescription: null, nsfw: null, contexts: null, integration_types: null, global_popularity_rank: null, handler: null };
    ({ version: obj3[0], guild_id: obj3[1] } = rootCommand);
    const items2 = [rootCommand.id];
    HermesBuiltin.arraySpread(mapped, 1);
    obj[2] = items2.join(closure_7);
    const items3 = [rootCommand.name];
    HermesBuiltin.arraySpread(mapped, 1);
    obj[3] = items3.join(" ");
    obj[4] = command.name_localized;
    obj[5] = applicationId;
    let CHAT = rootCommand.type;
    if (CHAT == null) {
      CHAT = obj(1955).ApplicationCommandType.CHAT;
    }
    obj[6] = CHAT;
    obj[7] = obj(7236).ApplicationCommandInputType.BOT;
    ({ description: obj3[8], options } = command);
    let mapped2;
    if (options != null) {
      mapped2 = options.map((choices) => {
        let obj = {};
        let merged = Object.assign(choices);
        choices = choices.choices;
        let mapped;
        if (choices != null) {
          mapped = choices.map((name_localized) => {
            const obj = {};
            const merged = Object.assign(name_localized);
            let name = name_localized.name_localized;
            if (name == null) {
              name = name_localized.name;
            }
            obj.displayName = name;
            return obj;
          });
        }
        obj.choices = mapped;
        let options = choices.options;
        let mapped1;
        if (options != null) {
          mapped1 = options.map((choices) => {
            let obj = {};
            let merged = Object.assign(choices);
            choices = choices.choices;
            let mapped;
            if (choices != null) {
              mapped = choices.map((name_localized) => {
                const obj = {};
                const merged = Object.assign(name_localized);
                let name = name_localized.name_localized;
                if (name == null) {
                  name = name_localized.name;
                }
                obj.displayName = name;
                return obj;
              });
            }
            obj.choices = mapped;
            let options = choices.options;
            let mapped1;
            if (options != null) {
              mapped1 = options.map((choices) => {
                let obj = {};
                let merged = Object.assign(choices);
                choices = choices.choices;
                let mapped;
                if (choices != null) {
                  mapped = choices.map((name_localized) => {
                    const obj = {};
                    const merged = Object.assign(name_localized);
                    let name = name_localized.name_localized;
                    if (name == null) {
                      name = name_localized.name;
                    }
                    obj.displayName = name;
                    return obj;
                  });
                }
                obj.choices = mapped;
                let options = choices.options;
                let mapped1;
                if (options != null) {
                  mapped1 = options.map((choices) => {
                    let obj = {};
                    let merged = Object.assign(choices);
                    choices = choices.choices;
                    let mapped;
                    if (choices != null) {
                      mapped = choices.map(() => { ... });
                    }
                    obj.choices = mapped;
                    let options = choices.options;
                    let mapped1;
                    if (options != null) {
                      mapped1 = options.map(() => { ... });
                    }
                    obj.options = mapped1;
                    ({ name_localized: obj.serverLocalizedName, name_localized } = choices);
                    if (name_localized == null) {
                      name_localized = choices.name;
                    }
                    obj.displayName = name_localized;
                    let description = choices.description_localized;
                    if (description == null) {
                      description = choices.description;
                    }
                    obj.displayDescription = description;
                    if (choices.type === callback(table[6]).ApplicationCommandOptionType.CHANNEL) {
                      if ("channel_types" in choices) {
                        obj = {};
                        let merged1 = Object.assign(obj);
                        obj.channelTypes = choices.channel_types;
                      }
                      return obj;
                    }
                    if (choices.type === callback(table[6]).ApplicationCommandOptionType.NUMBER) {
                      obj = {};
                      let merged2 = Object.assign(obj);
                      ({ min_value: obj2.minValue, max_value: obj2.maxValue } = choices);
                    }
                    if (choices.type !== callback(table[6]).ApplicationCommandOptionType.STRING) {
                      let tmp9 = obj;
                      if (choices.type === tmp4(tmp5[6]).ApplicationCommandOptionType.ATTACHMENT) {
                        tmp9 = obj;
                        if ("file_types" in choices) {
                          let obj1 = {};
                          let merged3 = Object.assign(obj);
                          obj1.fileTypes = choices.file_types;
                          tmp9 = obj1;
                        }
                      }
                    }
                    let obj2 = {};
                    let merged4 = Object.assign(obj);
                    ({ min_length: obj4.minLength, max_length: obj4.maxLength } = choices);
                    tmp9 = obj2;
                  });
                }
                obj.options = mapped1;
                ({ name_localized: obj.serverLocalizedName, name_localized } = choices);
                if (name_localized == null) {
                  name_localized = choices.name;
                }
                obj.displayName = name_localized;
                let description = choices.description_localized;
                if (description == null) {
                  description = choices.description;
                }
                obj.displayDescription = description;
                if (choices.type === callback(table[6]).ApplicationCommandOptionType.CHANNEL) {
                  if ("channel_types" in choices) {
                    obj = {};
                    let merged1 = Object.assign(obj);
                    obj.channelTypes = choices.channel_types;
                  }
                  return obj;
                }
                if (choices.type === callback(table[6]).ApplicationCommandOptionType.NUMBER) {
                  obj = {};
                  let merged2 = Object.assign(obj);
                  ({ min_value: obj2.minValue, max_value: obj2.maxValue } = choices);
                }
                if (choices.type !== callback(table[6]).ApplicationCommandOptionType.STRING) {
                  let tmp9 = obj;
                  if (choices.type === tmp4(tmp5[6]).ApplicationCommandOptionType.ATTACHMENT) {
                    tmp9 = obj;
                    if ("file_types" in choices) {
                      let obj1 = {};
                      let merged3 = Object.assign(obj);
                      obj1.fileTypes = choices.file_types;
                      tmp9 = obj1;
                    }
                  }
                }
                let obj2 = {};
                let merged4 = Object.assign(obj);
                ({ min_length: obj4.minLength, max_length: obj4.maxLength } = choices);
                tmp9 = obj2;
              });
            }
            obj.options = mapped1;
            ({ name_localized: obj.serverLocalizedName, name_localized } = choices);
            if (name_localized == null) {
              name_localized = choices.name;
            }
            obj.displayName = name_localized;
            let description = choices.description_localized;
            if (description == null) {
              description = choices.description;
            }
            obj.displayDescription = description;
            if (choices.type === callback(table[6]).ApplicationCommandOptionType.CHANNEL) {
              if ("channel_types" in choices) {
                obj = {};
                let merged1 = Object.assign(obj);
                obj.channelTypes = choices.channel_types;
              }
              return obj;
            }
            if (choices.type === callback(table[6]).ApplicationCommandOptionType.NUMBER) {
              obj = {};
              let merged2 = Object.assign(obj);
              ({ min_value: obj2.minValue, max_value: obj2.maxValue } = choices);
            }
            if (choices.type !== callback(table[6]).ApplicationCommandOptionType.STRING) {
              let tmp9 = obj;
              if (choices.type === tmp4(tmp5[6]).ApplicationCommandOptionType.ATTACHMENT) {
                tmp9 = obj;
                if ("file_types" in choices) {
                  let obj1 = {};
                  let merged3 = Object.assign(obj);
                  obj1.fileTypes = choices.file_types;
                  tmp9 = obj1;
                }
              }
            }
            let obj2 = {};
            let merged4 = Object.assign(obj);
            ({ min_length: obj4.minLength, max_length: obj4.maxLength } = choices);
            tmp9 = obj2;
          });
        }
        obj.options = mapped1;
        ({ name_localized: obj.serverLocalizedName, name_localized } = choices);
        if (name_localized == null) {
          name_localized = choices.name;
        }
        obj.displayName = name_localized;
        let description = choices.description_localized;
        if (description == null) {
          description = choices.description;
        }
        obj.displayDescription = description;
        if (choices.type === callback(table[6]).ApplicationCommandOptionType.CHANNEL) {
          if ("channel_types" in choices) {
            obj = {};
            let merged1 = Object.assign(obj);
            obj.channelTypes = choices.channel_types;
          }
          return obj;
        }
        if (choices.type === callback(table[6]).ApplicationCommandOptionType.NUMBER) {
          obj = {};
          let merged2 = Object.assign(obj);
          ({ min_value: obj2.minValue, max_value: obj2.maxValue } = choices);
        }
        if (choices.type !== callback(table[6]).ApplicationCommandOptionType.STRING) {
          let tmp9 = obj;
          if (choices.type === tmp4(tmp5[6]).ApplicationCommandOptionType.ATTACHMENT) {
            tmp9 = obj;
            if ("file_types" in choices) {
              let obj1 = {};
              let merged3 = Object.assign(obj);
              obj1.fileTypes = choices.file_types;
              tmp9 = obj1;
            }
          }
        }
        let obj2 = {};
        let merged4 = Object.assign(obj);
        ({ min_length: obj4.minLength, max_length: obj4.maxLength } = choices);
        tmp9 = obj2;
      });
    }
    obj[9] = mapped2;
    obj[10] = rootCommand;
    obj[11] = subCommandPath;
    deserializeResult = undefined;
    if (null != rootCommand.default_member_permissions) {
      deserializeResult = importAllResult.deserialize(rootCommand.default_member_permissions);
      const obj4 = importAllResult;
    }
    obj[12] = deserializeResult;
    obj[13] = rootCommand.dm_permission;
    obj[14] = undefined;
    let name = rootCommand.name_localized;
    if (name == null) {
      name = rootCommand.name;
    }
    const items4 = [name];
    HermesBuiltin.arraySpread(mapped1, 1);
    obj[15] = items4.join(" ");
    let description = command.description_localized;
    if (description == null) {
      description = command.description;
    }
    obj[16] = description;
    ({ nsfw: obj3[17], contexts: obj3[18], integration_types: obj3[19], global_popularity_rank: obj3[20], handler: obj3[21] } = rootCommand);
    return obj;
  } else if (useKeyedPermissions) {
    const keyPermissionsResult = obj(7235).keyPermissions(rootCommand.permissions);
    obj = keyPermissionsResult;
    obj = keyPermissionsResult;
    const obj2 = obj(7235);
  } else {
    obj = {};
    const permissions = rootCommand.permissions;
    const item = permissions.forEach((id) => {
      obj[id.id] = id;
    });
  }
}
function buildSubCommands(arg0) {
  ({ rootCommand, command, applicationId, subCommandPath, useKeyedPermissions } = arg0);
  if (command.hasOwnProperty("id")) {
    let obj = { rootCommand: null, command: null, applicationId: null, subCommandPath: null, useKeyedPermissions: null };
    obj[0] = rootCommand;
    obj[1] = command;
    obj[2] = applicationId;
    obj[3] = subCommandPath;
    obj[4] = useKeyedPermissions;
    const items = [buildCommand(obj)];
    return items;
  } else {
    if (command.type !== PermissionOverwriteType.ApplicationCommandOptionType.SUB_COMMAND) {
      if (command.type !== tmp(1955).ApplicationCommandOptionType.SUB_COMMAND_GROUP) {
        obj = { rootCommand: null, command: null, applicationId: null, subCommandPath: null, useKeyedPermissions: null };
        obj[0] = rootCommand;
        obj[1] = command;
        obj[2] = applicationId;
        obj[3] = subCommandPath;
        obj[4] = useKeyedPermissions;
        const items1 = [buildCommand(obj)];
        return items1;
      }
    }
    tmp = require;
  }
  const items2 = [];
  if (null == command.options) {
    return items2;
  } else {
    const options = command.options;
    const found = options.filter((type) => type.type === callback(1955).ApplicationCommandOptionType.SUB_COMMAND_GROUP);
    for (let num3 = 0; num3 < found.length; num3 = num3 + 1) {
      let push = items2.push;
      obj = { rootCommand: null, command: null, applicationId: null, subCommandPath: null, useKeyedPermissions: null };
      obj[0] = rootCommand;
      obj[1] = found[num3];
      obj[2] = applicationId;
      let tmp7 = num3;
      let items3 = subCommandPath;
      let tmp6 = buildSubCommands;
      if (subCommandPath == null) {
        items3 = [];
      }
      obj1 = { name: null, type: null, displayName: null };
      obj1[0] = found[num3].name;
      let tmp8 = require;
      let tmp9 = dependencyMap;
      obj1[1] = PermissionOverwriteType.ApplicationCommandOptionType.SUB_COMMAND_GROUP;
      let name = found[num3].name_localized;
      if (name == null) {
        name = found[num3].name;
      }
      obj1[2] = name;
      let items4 = [obj1];
      obj[3] = items3.concat(items4);
      obj[4] = useKeyedPermissions;
      let items5 = [];
      let tmp10 = items5;
      let num2 = 0;
      let arraySpreadResult = HermesBuiltin.arraySpread(tmp6(obj), 0);
      let tmp12 = push;
      let tmp13 = items5;
      let tmp14 = items2;
      let applyResult = HermesBuiltin.apply(items5, items2);
    }
    const options1 = command.options;
    const found1 = options1.filter((type) => type.type === callback(1955).ApplicationCommandOptionType.SUB_COMMAND);
    for (let num4 = 0; num4 < found1.length; num4 = num4 + 1) {
      let obj2 = { rootCommand: null, command: null, applicationId: null, subCommandPath: null, useKeyedPermissions: null };
      obj2[0] = rootCommand;
      obj2[1] = found1[num4];
      obj2[2] = applicationId;
      let tmp17 = num4;
      let items6 = subCommandPath;
      let tmp16 = buildCommand;
      if (subCommandPath == null) {
        items6 = [];
      }
      let obj3 = { name: null, type: null, displayName: null };
      obj3[0] = found1[num4].name;
      let tmp18 = require;
      let tmp19 = dependencyMap;
      obj3[1] = PermissionOverwriteType.ApplicationCommandOptionType.SUB_COMMAND;
      let name2 = found1[num4].name_localized;
      if (name2 == null) {
        name2 = found1[num4].name;
      }
      obj3[2] = name2;
      let items7 = [obj3];
      obj2[3] = items6.concat(items7);
      obj2[4] = useKeyedPermissions;
      let arr = items2.push(tmp16(obj2));
    }
    if (tmp21) {
      const obj4 = { rootCommand: null, command: null, applicationId: null, subCommandPath: null, useKeyedPermissions: null };
      obj4[0] = rootCommand;
      obj4[1] = command;
      obj4[2] = applicationId;
      obj4[3] = subCommandPath;
      obj4[4] = useKeyedPermissions;
      items2.push(buildCommand(obj4));
    }
    return items2;
  }
}
function hasAccessGivenPerms(selfMember, id, commandLevelPermissions) {
  const obj = commandPermissions;
  const tmp = commandLevelPermissions[obj.toPermissionKey(obj, selfMember.userId, ApplicationCommandSectionType.ApplicationCommandPermissionType.USER)];
  if (null != tmp) {
    return tmp.permission;
  } else {
    let flag = false;
    const roles = selfMember.roles;
    const obj4 = roles[Symbol.iterator]();
    while (obj4 !== undefined) {
      let tmp5 = require;
      let tmp6 = dependencyMap;
      let obj2 = commandPermissions;
      let tmp7 = commandLevelPermissions[obj2.toPermissionKey(obj2, tmp3, ApplicationCommandSectionType.ApplicationCommandPermissionType.ROLE)];
      if (null != tmp7) {
        flag = true;
        let tmp9 = tmp7;
        if (tmp8.permission) {
          let tmp10 = obj4;
          obj4.return();
          return true;
        }
      }
      continue;
    }
    if (flag) {
      return false;
    } else {
      const obj3 = commandPermissions;
      const tmp14 = commandLevelPermissions[obj3.toPermissionKey(obj3, id, ApplicationCommandSectionType.ApplicationCommandPermissionType.ROLE)];
      let permission = null;
      if (null != tmp14) {
        permission = tmp14.permission;
      }
      return permission;
    }
  }
}
const isReadableType = createChannelRecord.isReadableType;
const DraftType = handleChanged.DraftType;
({ BuiltInSectionId: closure_6, SUB_COMMAND_KEY_SEPARATOR: error } = TRUE_OPTION_NAME);
({ AnalyticEvents: closure_8, ID_REGEX: c9 } = ME);
const Permissions = sum2.Permissions;
let result = set.fileFinishedImporting("modules/application_commands/ApplicationCommandUtils.tsx");

export { buildCommand };
export const buildApplicationCommands = function buildApplicationCommands(application_commands, arg1) {
  closure_0 = arg1;
  return applyDefault.flatMap(application_commands, (id) => {
    closure_1_1(closure_1_3[10])(null != id.id, "Missing command id");
    return closure_1_12({ rootCommand: id, command: id, applicationId: id.application_id, subCommandPath: "Array", useKeyedPermissions: closure_0 });
  });
};
export const applicationPermissionsList = function applicationPermissionsList(arr) {
  let reduced;
  if (arr != null) {
    reduced = arr.reduce((arr, applicationCommandPermissions) => {
      if (null != applicationCommandPermissions.applicationCommandPermissions) {
        const obj = { id: null, permissions: null };
        ({ id: obj[0], applicationCommandPermissions: obj[1] } = applicationCommandPermissions);
        arr.push(obj);
      }
      return arr;
    }, []);
  }
  return reduced;
};
export const isSnowflake = function isSnowflake(text) {
  return regex.test(text.trim());
};
export const getMatchingGroupCommands = function getMatchingGroupCommands(contextCommands, regExp, closure_4, arg3) {
  closure_0 = regExp;
  importDefault = closure_4;
  const items = [];
  const item = applyDefault(contextCommands).forEach((displayName) => {
    let isMatch = regex.test(displayName.displayName);
    if (isMatch) {
      let predicateResult = null == displayName.predicate;
      if (!predicateResult) {
        predicateResult = displayName.predicate(closure_1);
      }
      isMatch = predicateResult;
    }
    if (isMatch) {
      items.push(displayName);
    }
  });
  return items.slice(0, arg3);
};
export const getApplicationCommandOptionQueryOptions = function getApplicationCommandOptionQueryOptions(option) {
  let tmp3 = option.type === PermissionOverwriteType.ApplicationCommandOptionType.USER;
  if (!tmp3) {
    tmp3 = option.type === tmp(1955).ApplicationCommandOptionType.MENTIONABLE;
  }
  let tmp4 = option.type === tmp(1955).ApplicationCommandOptionType.ROLE;
  if (!tmp4) {
    tmp4 = option.type === tmp(1955).ApplicationCommandOptionType.MENTIONABLE;
  }
  const tmp5 = option.type === PermissionOverwriteType.ApplicationCommandOptionType.STRING;
  let tmp6 = tmp5;
  if (!tmp5) {
    tmp6 = tmp4;
  }
  const obj = { canMentionEveryone: tmp6, canMentionHere: tmp5, canMentionChannels: null, canMentionUsers: null, canMentionRoles: null, canMentionAnyGuildUser: null, canMentionNonMentionableRoles: null, canMentionOtherGlobals: null };
  let tmp7 = tmp5;
  if (!tmp5) {
    tmp7 = option.type === PermissionOverwriteType.ApplicationCommandOptionType.CHANNEL;
  }
  obj[2] = tmp7;
  let tmp8 = tmp5;
  if (!tmp5) {
    tmp8 = tmp3;
  }
  obj[3] = tmp8;
  let tmp9 = tmp5;
  if (!tmp5) {
    tmp9 = tmp4;
  }
  obj[4] = tmp9;
  obj[5] = tmp3;
  obj[6] = tmp4;
  obj[7] = tmp5;
  return obj;
};
export const allChannelsSentinel = function allChannelsSentinel(contextGuildId) {
  const obj = IntegerDefault(contextGuildId);
  return IntegerDefault(contextGuildId).subtract(1).toString();
};
export const canUseApplicationCommands = function canUseApplicationCommands(can, arg1, isMultiUserDM) {
  let tmp = !arg1;
  if (!arg1) {
    const isMultiUserDMResult = isMultiUserDM.isMultiUserDM();
    if (isMultiUserDMResult) {
      tmp = isMultiUserDMResult;
    } else if (isMultiUserDM.isDM()) {
      let canResult = !isMultiUserDM.isSystemDM();
    } else if (isMultiUserDM.isArchivedLockedThread()) {
      canResult = can.can(importAllResult.combine(Permissions.USE_APPLICATION_COMMANDS, Permissions.MANAGE_THREADS), isMultiUserDM);
      const obj2 = importAllResult;
    } else {
      canResult = isReadableType(isMultiUserDM.type);
      if (canResult) {
        canResult = can.can(importAllResult.combine(Permissions.USE_APPLICATION_COMMANDS, Permissions.SEND_MESSAGES), isMultiUserDM);
        const obj = importAllResult;
      }
    }
  }
  return tmp;
};
export const DISABLED_BY_DEFAULT_PERMISSION_FLAG = deserializeResult;
export const hasAccess = function hasAccess(arg0) {
  ({ PermissionStore, guild, selfMember, commandLevelPermissions, defaultMemberPermissions } = arg0);
  if (guild.ownerId !== selfMember.userId) {
    if (!PermissionStore.can(Permissions.ADMINISTRATOR, guild)) {
      const id = guild.id;
      if (null != commandLevelPermissions) {
        const tmp4 = hasAccessGivenPerms(selfMember, id, commandLevelPermissions);
        if (typeof tmp4 === "boolean") {
          return tmp4;
        }
      }
      const tmp6 = hasAccessGivenPerms(selfMember, id, tmp);
      let tmp7 = typeof tmp6 === "boolean";
      if (typeof tmp6 === "boolean") {
        tmp7 = !tmp6;
      }
      let tmp8 = !tmp7;
      if (!tmp7) {
        let tmp9 = null == defaultMemberPermissions;
        if (!tmp9) {
          const equalsResult = importAllResult.equals(defaultMemberPermissions, closure_13);
          let canResult = !equalsResult;
          if (!equalsResult) {
            canResult = PermissionStore.can(defaultMemberPermissions, guild);
          }
          tmp9 = canResult;
          const obj = importAllResult;
        }
        tmp8 = tmp9;
      }
      return tmp8;
    }
  }
  return true;
};
export const getCommandAttachmentDraftType = function getCommandAttachmentDraftType(closure_10) {
  if (ApplicationCommandSectionType.CommandOrigin.CHAT === closure_10) {
    return DraftType.SlashCommand;
  } else {
    return DraftType.ApplicationLauncherCommand;
  }
};
export const getCommandTriggerSection = function getCommandTriggerSection(closure_3) {
  if (null != closure_3) {
    if (closure_3.id === constants.BUILT_IN) {
      let APP = ApplicationCommandSectionType.ApplicationCommandTriggerSections.BUILT_IN;
    } else if (closure_3.id === tmp.FRECENCY) {
      APP = ApplicationCommandSectionType.ApplicationCommandTriggerSections.FRECENCY;
    } else {
      APP = ApplicationCommandSectionType.ApplicationCommandTriggerSections.APP;
    }
    return APP;
  }
};
export const getApplicationCommandSection = function getApplicationCommandSection(application, arg1, arg2) {
  let name = arg2;
  const obj = { type: ApplicationCommandSectionType.ApplicationCommandSectionType.APPLICATION, id: application.id, name: null, icon: null, application: null, isUserApp: null };
  if (arg2 == null) {
    let username;
    if (application != null) {
      const bot = application.bot;
      if (bot != null) {
        username = bot.username;
      }
    }
    name = username;
  }
  if (name == null) {
    name = application.name;
  }
  let flag = arg1;
  obj[2] = name;
  obj[3] = application.icon;
  obj[4] = application;
  if (arg1 == null) {
    flag = false;
  }
  obj[5] = flag;
  return obj;
};
export const extractInteractionDataProps = function extractInteractionDataProps(parsed) {
  ({ id, options } = parsed);
  let found;
  if (interactionOptions != null) {
    found = interactionOptions.find((type) => type.type === callback(1955).ApplicationCommandOptionType.SUB_COMMAND_GROUP);
  }
  let sum = id;
  if (null != found) {
    const _HermesInternal = HermesInternal;
    sum = id + "" + closure_7 + found.name;
    interactionOptions = found.options;
  }
  let found1;
  if (interactionOptions != null) {
    found1 = interactionOptions.find((type) => type.type === callback(1955).ApplicationCommandOptionType.SUB_COMMAND);
  }
  let commandKey = sum;
  if (null != found1) {
    const _HermesInternal2 = HermesInternal;
    commandKey = sum + "" + closure_7 + found1.name;
    interactionOptions = found1.options;
  }
  return { commandKey, interactionOptions };
};
export const trackCommandSelected = function trackCommandSelected(command) {
  command = command.command;
  ({ location: _location, triggerSection, queryLength, sectionName, query, searchResultsPosition, source } = command);
  let obj = collectGuildAnalyticsMetadata;
  const rootCommand = command.rootCommand;
  let id;
  if (rootCommand != null) {
    id = rootCommand.id;
  }
  if (id == null) {
    id = command.id;
  }
  obj = { command_id: id, application_id: command.applicationId, location: _location, section: triggerSection, query_length: queryLength, command_text_length: command.displayName.length, section_name: sectionName, query, search_results_position: searchResultsPosition, source };
  obj.trackWithMetadata(constants2.APPLICATION_COMMAND_SELECTED, obj);
};
export const getInitialInteractionMetadata = function getInitialInteractionMetadata(interactionMetadata) {
  interactionMetadata = interactionMetadata.interactionMetadata;
  let tmp = null;
  if (null != interactionMetadata) {
    let triggering_interaction_metadata = interactionMetadata;
    if ("triggering_interaction_metadata" in interactionMetadata) {
      triggering_interaction_metadata = interactionMetadata.triggering_interaction_metadata;
    }
    tmp = triggering_interaction_metadata;
  }
  return tmp;
};
export const hasCommandIndexForApp = function hasCommandIndexForApp(id, guildState) {
  const result = guildState.result;
  let sections;
  if (result != null) {
    sections = result.sections;
  }
  let tmp2 = null != sections;
  if (tmp2) {
    tmp2 = id in sections;
  }
  return tmp2;
};