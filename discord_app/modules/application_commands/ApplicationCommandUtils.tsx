// discord_app/modules/application_commands/ApplicationCommandUtils.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import IntegerDefault from "../../../_runtime/00014_Integer.js";
import _modDef38 from "../../../_runtime/metro/00038__.js";
import Constants2 from "../../../discord_common/js/shared/Constants.tsx";
import Server from "../../flow/Server.tsx";
import ChannelRecord from "../../records/ChannelRecord.tsx";
import AppAnalyticsUtils from "../app_analytics/AppAnalyticsUtils.tsx";
import DraftStore from "../../stores/DraftStore.tsx";
import IntegrationPermissionUtils from "../guild_settings/integrations/permission/IntegrationPermissionUtils.tsx";
import ApplicationCommandTypes from "ApplicationCommandTypes.tsx";
import ApplicationCommandConstants from "ApplicationCommandConstants.tsx";
import Constants from "../../Constants.tsx";
import BigFlagUtils from "../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
    ({ version: obj3.version, guild_id: obj3.guildId } = rootCommand);
    const items2 = [rootCommand.id];
    HermesBuiltin.arraySpread(mapped, 1);
    obj.id = items2.join(React5);
    const items3 = [rootCommand.name];
    HermesBuiltin.arraySpread(mapped, 1);
    obj.untranslatedName = items3.join(" ");
    obj.serverLocalizedName = command.name_localized;
    obj.applicationId = applicationId;
    let CHAT = rootCommand.type;
    if (CHAT == null) {
      CHAT = Server.ApplicationCommandType.CHAT;
    }
    obj.type = CHAT;
    obj.inputType = ApplicationCommandTypes.ApplicationCommandInputType.BOT;
    ({ description: obj3.untranslatedDescription, options } = command);
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
                    if (choices.type === closure_1_0(closure_1_3[6]).ApplicationCommandOptionType.CHANNEL) {
                      if ("channel_types" in choices) {
                        obj = {};
                        let merged1 = Object.assign(obj);
                        obj.channelTypes = choices.channel_types;
                      }
                      return obj;
                    }
                    if (choices.type === closure_1_0(closure_1_3[6]).ApplicationCommandOptionType.NUMBER) {
                      obj = {};
                      let merged2 = Object.assign(obj);
                      ({ min_value: obj2.minValue, max_value: obj2.maxValue } = choices);
                    }
                    if (choices.type !== closure_1_0(closure_1_3[6]).ApplicationCommandOptionType.STRING) {
                      if (choices.type === tmp4(tmp5[6]).ApplicationCommandOptionType.ATTACHMENT) {
                        if ("file_types" in choices) {
                          let obj1 = {};
                          let merged3 = Object.assign(obj);
                          obj1.fileTypes = choices.file_types;
                        }
                      }
                    }
                    let obj2 = {};
                    let merged4 = Object.assign(obj);
                    ({ min_length: obj4.minLength, max_length: obj4.maxLength } = choices);
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
                if (choices.type === closure_1_0(closure_1_3[6]).ApplicationCommandOptionType.CHANNEL) {
                  if ("channel_types" in choices) {
                    obj = {};
                    let merged1 = Object.assign(obj);
                    obj.channelTypes = choices.channel_types;
                  }
                  return obj;
                }
                if (choices.type === closure_1_0(closure_1_3[6]).ApplicationCommandOptionType.NUMBER) {
                  obj = {};
                  let merged2 = Object.assign(obj);
                  ({ min_value: obj2.minValue, max_value: obj2.maxValue } = choices);
                }
                if (choices.type !== closure_1_0(closure_1_3[6]).ApplicationCommandOptionType.STRING) {
                  if (choices.type === tmp4(tmp5[6]).ApplicationCommandOptionType.ATTACHMENT) {
                    if ("file_types" in choices) {
                      let obj1 = {};
                      let merged3 = Object.assign(obj);
                      obj1.fileTypes = choices.file_types;
                    }
                  }
                }
                let obj2 = {};
                let merged4 = Object.assign(obj);
                ({ min_length: obj4.minLength, max_length: obj4.maxLength } = choices);
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
            if (choices.type === closure_1_0(closure_1_3[6]).ApplicationCommandOptionType.CHANNEL) {
              if ("channel_types" in choices) {
                obj = {};
                let merged1 = Object.assign(obj);
                obj.channelTypes = choices.channel_types;
              }
              return obj;
            }
            if (choices.type === closure_1_0(closure_1_3[6]).ApplicationCommandOptionType.NUMBER) {
              obj = {};
              let merged2 = Object.assign(obj);
              ({ min_value: obj2.minValue, max_value: obj2.maxValue } = choices);
            }
            if (choices.type !== closure_1_0(closure_1_3[6]).ApplicationCommandOptionType.STRING) {
              if (choices.type === tmp4(tmp5[6]).ApplicationCommandOptionType.ATTACHMENT) {
                if ("file_types" in choices) {
                  let obj1 = {};
                  let merged3 = Object.assign(obj);
                  obj1.fileTypes = choices.file_types;
                }
              }
            }
            let obj2 = {};
            let merged4 = Object.assign(obj);
            ({ min_length: obj4.minLength, max_length: obj4.maxLength } = choices);
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
        if (choices.type === closure_1_0(closure_1_3[6]).ApplicationCommandOptionType.CHANNEL) {
          if ("channel_types" in choices) {
            obj = {};
            let merged1 = Object.assign(obj);
            obj.channelTypes = choices.channel_types;
          }
          return obj;
        }
        if (choices.type === closure_1_0(closure_1_3[6]).ApplicationCommandOptionType.NUMBER) {
          obj = {};
          let merged2 = Object.assign(obj);
          ({ min_value: obj2.minValue, max_value: obj2.maxValue } = choices);
        }
        if (choices.type !== closure_1_0(closure_1_3[6]).ApplicationCommandOptionType.STRING) {
          if (choices.type === tmp4(tmp5[6]).ApplicationCommandOptionType.ATTACHMENT) {
            if ("file_types" in choices) {
              let obj1 = {};
              let merged3 = Object.assign(obj);
              obj1.fileTypes = choices.file_types;
            }
          }
        }
        let obj2 = {};
        let merged4 = Object.assign(obj);
        ({ min_length: obj4.minLength, max_length: obj4.maxLength } = choices);
      });
    }
    obj.options = mapped2;
    obj.rootCommand = rootCommand;
    obj.subCommandPath = subCommandPath;
    deserializeResult = undefined;
    if (null != rootCommand.default_member_permissions) {
      const deserializer = BigFlagUtils;
      deserializeResult = deserializer.deserialize(rootCommand.default_member_permissions);
    }
    obj.defaultMemberPermissions = deserializeResult;
    obj.dmPermission = rootCommand.dm_permission;
    obj.permissions = undefined;
    let name = rootCommand.name_localized;
    if (name == null) {
      name = rootCommand.name;
    }
    const items4 = [name];
    HermesBuiltin.arraySpread(mapped1, 1);
    obj.displayName = items4.join(" ");
    let description = command.description_localized;
    if (description == null) {
      description = command.description;
    }
    obj.displayDescription = description;
    ({ nsfw: obj3.nsfw, contexts: obj3.contexts, integration_types: obj3.integration_types, global_popularity_rank: obj3.global_popularity_rank, handler: obj3.handler } = rootCommand);
    return obj;
  } else if (useKeyedPermissions) {
    const keyPermissionsResult = IntegrationPermissionUtils.keyPermissions(rootCommand.permissions);
    obj = keyPermissionsResult;
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
    let obj = { rootCommand, command, applicationId, subCommandPath, useKeyedPermissions };
    const items = [buildCommand(obj)];
    return items;
  } else {
    if (command.type !== Server.ApplicationCommandOptionType.SUB_COMMAND) {
      if (command.type !== tmp(1894).ApplicationCommandOptionType.SUB_COMMAND_GROUP) {
        obj = { rootCommand, command, applicationId, subCommandPath, useKeyedPermissions };
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
    const found = options.filter((type) => type.type === Server.ApplicationCommandOptionType.SUB_COMMAND_GROUP);
    for (let num3 = 0; num3 < found.length; num3 = num3 + 1) {
      let push = items2.push;
      obj = { rootCommand, command: found[num3], applicationId, subCommandPath: null, useKeyedPermissions: null };
      let items3 = subCommandPath;
      let tmp6 = buildSubCommands;
      if (subCommandPath == null) {
        items3 = [];
      }
      let obj1 = { name: found[num3].name, type: null, displayName: null };
      obj1.type = Server.ApplicationCommandOptionType.SUB_COMMAND_GROUP;
      let name = found[num3].name_localized;
      if (name == null) {
        name = found[num3].name;
      }
      obj1.displayName = name;
      let items4 = [obj1];
      obj.subCommandPath = items3.concat(items4);
      obj.useKeyedPermissions = useKeyedPermissions;
      let items5 = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(tmp6(obj), 0);
      let applyResult = HermesBuiltin.apply(items5, items2);
    }
    const options1 = command.options;
    const found1 = options1.filter((type) => type.type === Server.ApplicationCommandOptionType.SUB_COMMAND);
    for (let num4 = 0; num4 < found1.length; num4 = num4 + 1) {
      let obj2 = { rootCommand, command: found1[num4], applicationId, subCommandPath: null, useKeyedPermissions: null };
      let items6 = subCommandPath;
      let tmp16 = buildCommand;
      if (subCommandPath == null) {
        items6 = [];
      }
      let obj3 = { name: found1[num4].name, type: null, displayName: null };
      obj3.type = Server.ApplicationCommandOptionType.SUB_COMMAND;
      let name2 = found1[num4].name_localized;
      if (name2 == null) {
        name2 = found1[num4].name;
      }
      obj3.displayName = name2;
      let items7 = [obj3];
      obj2.subCommandPath = items6.concat(items7);
      obj2.useKeyedPermissions = useKeyedPermissions;
      let arr = items2.push(tmp16(obj2));
    }
    if (tmp21) {
      const obj4 = { rootCommand, command, applicationId, subCommandPath, useKeyedPermissions };
      items2.push(buildCommand(obj4));
    }
    return items2;
  }
}
function hasAccessGivenPerms(selfMember, id, commandLevelPermissions) {
  const obj = IntegrationPermissionUtils;
  const tmp = commandLevelPermissions[obj.toPermissionKey(obj, selfMember.userId, ApplicationCommandTypes.ApplicationCommandPermissionType.USER)];
  if (null != tmp) {
    return tmp.permission;
  } else {
    let flag = false;
    const roles = selfMember.roles;
    const obj4 = roles[Symbol.iterator]();
    while (obj4 !== undefined) {
      let obj2 = IntegrationPermissionUtils;
      let tmp7 = commandLevelPermissions[obj2.toPermissionKey(obj2, tmp3, ApplicationCommandTypes.ApplicationCommandPermissionType.ROLE)];
      if (null != tmp7) {
        flag = true;
        if (tmp8.permission) {
          obj4.return();
          return true;
        }
      }
      continue;
    }
    if (flag) {
      return false;
    } else {
      const obj3 = IntegrationPermissionUtils;
      const tmp14 = commandLevelPermissions[obj3.toPermissionKey(obj3, id, ApplicationCommandTypes.ApplicationCommandPermissionType.ROLE)];
      let permission = null;
      if (null != tmp14) {
        permission = tmp14.permission;
      }
      return permission;
    }
  }
}
const isReadableType = ChannelRecord.isReadableType;
const DraftType = DraftStore.DraftType;
({ BuiltInSectionId: metroRequire, SUB_COMMAND_KEY_SEPARATOR: closure_7 } = ApplicationCommandConstants);
({ AnalyticEvents: closure_8, ID_REGEX: closure_9 } = Constants);
const Permissions = Constants2.Permissions;
let deserializeResult = BigFlagUtils.deserialize(0);
let result = size.fileFinishedImporting("modules/application_commands/ApplicationCommandUtils.tsx");

export { buildCommand };
export const buildApplicationCommands = function buildApplicationCommands(uniqByResult, useKeyedPermissions) {
  return _modDef12.flatMap(uniqByResult, (id) => {
    _modDef38(null != id.id, "Missing command id");
    return buildSubCommands({ rootCommand: id, command: id, applicationId: id.application_id, subCommandPath: "Array", useKeyedPermissions });
  });
};
export const applicationPermissionsList = function applicationPermissionsList(arr) {
  let reduced;
  if (arr != null) {
    reduced = arr.reduce((arr, applicationCommandPermissions) => {
      if (null != applicationCommandPermissions.applicationCommandPermissions) {
        const obj = { id: null, permissions: null };
        ({ id: obj.id, applicationCommandPermissions: obj.permissions } = applicationCommandPermissions);
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
export const getMatchingGroupCommands = function getMatchingGroupCommands(contextCommands, regExp, arg2, arg3) {
  regex = regExp;
  closure_1 = arg2;
  const items = [];
  const item = _modDef12(contextCommands).forEach((displayName) => {
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
export const getApplicationCommandOptionQueryOptions = function getApplicationCommandOptionQueryOptions(activeOption) {
  let tmp3 = activeOption.type === Server.ApplicationCommandOptionType.USER;
  if (!tmp3) {
    tmp3 = activeOption.type === tmp(1894).ApplicationCommandOptionType.MENTIONABLE;
  }
  let tmp4 = activeOption.type === tmp(1894).ApplicationCommandOptionType.ROLE;
  if (!tmp4) {
    tmp4 = activeOption.type === tmp(1894).ApplicationCommandOptionType.MENTIONABLE;
  }
  const tmp5 = activeOption.type === Server.ApplicationCommandOptionType.STRING;
  let tmp6 = tmp5;
  if (!tmp5) {
    tmp6 = tmp4;
  }
  const obj = { canMentionEveryone: tmp6, canMentionHere: tmp5, canMentionChannels: null, canMentionUsers: null, canMentionRoles: null, canMentionAnyGuildUser: null, canMentionNonMentionableRoles: null, canMentionOtherGlobals: null };
  let tmp7 = tmp5;
  if (!tmp5) {
    tmp7 = activeOption.type === Server.ApplicationCommandOptionType.CHANNEL;
  }
  obj.canMentionChannels = tmp7;
  let tmp8 = tmp5;
  if (!tmp5) {
    tmp8 = tmp3;
  }
  obj.canMentionUsers = tmp8;
  let tmp9 = tmp5;
  if (!tmp5) {
    tmp9 = tmp4;
  }
  obj.canMentionRoles = tmp9;
  obj.canMentionAnyGuildUser = tmp3;
  obj.canMentionNonMentionableRoles = tmp4;
  obj.canMentionOtherGlobals = tmp5;
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
      canResult = can.can(BigFlagUtils.combine(Permissions.USE_APPLICATION_COMMANDS, Permissions.MANAGE_THREADS), isMultiUserDM);
    } else {
      canResult = isReadableType(isMultiUserDM.type);
      if (canResult) {
        canResult = can.can(BigFlagUtils.combine(Permissions.USE_APPLICATION_COMMANDS, Permissions.SEND_MESSAGES), isMultiUserDM);
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
          const equalsResult = BigFlagUtils.equals(defaultMemberPermissions, deserializeResult);
          let canResult = !equalsResult;
          if (!equalsResult) {
            canResult = PermissionStore.can(defaultMemberPermissions, guild);
          }
          tmp9 = canResult;
        }
        tmp8 = tmp9;
      }
      return tmp8;
    }
  }
  return true;
};
export const getCommandAttachmentDraftType = function getCommandAttachmentDraftType(arg0) {
  if (ApplicationCommandTypes.CommandOrigin.CHAT === arg0) {
    return DraftType.SlashCommand;
  } else {
    return DraftType.ApplicationLauncherCommand;
  }
};
export const getCommandTriggerSection = function getCommandTriggerSection(descriptor) {
  if (null != descriptor) {
    if (descriptor.id === constants.BUILT_IN) {
      let APP = ApplicationCommandTypes.ApplicationCommandTriggerSections.BUILT_IN;
    } else if (descriptor.id === tmp.FRECENCY) {
      APP = ApplicationCommandTypes.ApplicationCommandTriggerSections.FRECENCY;
    } else {
      APP = ApplicationCommandTypes.ApplicationCommandTriggerSections.APP;
    }
    return APP;
  }
};
export const getApplicationCommandSection = function getApplicationCommandSection(application, arg1, arg2) {
  let name = arg2;
  const obj = { type: ApplicationCommandTypes.ApplicationCommandSectionType.APPLICATION, id: application.id, name: null, icon: null, application: null, isUserApp: null };
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
  obj.name = name;
  obj.icon = application.icon;
  obj.application = application;
  if (arg1 == null) {
    flag = false;
  }
  obj.isUserApp = flag;
  return obj;
};
export const extractInteractionDataProps = function extractInteractionDataProps(parsed) {
  ({ id, options } = parsed);
  let found;
  if (interactionOptions != null) {
    found = interactionOptions.find((type) => type.type === Server.ApplicationCommandOptionType.SUB_COMMAND_GROUP);
  }
  let sum = id;
  if (null != found) {
    const _HermesInternal = HermesInternal;
    sum = id + "" + React5 + found.name;
    interactionOptions = found.options;
  }
  let found1;
  if (interactionOptions != null) {
    found1 = interactionOptions.find((type) => type.type === Server.ApplicationCommandOptionType.SUB_COMMAND);
  }
  let commandKey = sum;
  if (null != found1) {
    const _HermesInternal2 = HermesInternal;
    commandKey = sum + "" + React5 + found1.name;
    interactionOptions = found1.options;
  }
  return { commandKey, interactionOptions };
};
export const trackCommandSelected = function trackCommandSelected(command) {
  command = command.command;
  ({ location: _location, triggerSection, queryLength, sectionName, query, searchResultsPosition, source } = command);
  let obj = AppAnalyticsUtils;
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