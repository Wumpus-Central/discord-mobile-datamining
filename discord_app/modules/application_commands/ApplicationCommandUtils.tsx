// discord_app/modules/application_commands/ApplicationCommandUtils.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import _modDef14 from "../../../_runtime/metro/00014__.js";
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

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function buildCommand(arg0) {
  let CHAT;
  let applicationId;
  let command;
  let description;
  let items2;
  let items3;
  let items4;
  let mapped2;
  let options;
  let rootCommand;
  let subCommandPath;
  let useKeyedPermissions;
  const f94078 = (choices) => {
    let description;
    let mapped;
    let mapped1;
    let name_localized;
    let obj5;
    let tmp9;
    let obj = { choices: mapped, options: mapped1, displayName: name_localized, displayDescription: description };
    let merged = Object.assign(choices);
    choices = choices.choices;
    mapped = undefined;
    if (choices != null) {
      mapped = choices.map((name_localized) => {
        let name;
        const obj = { displayName: name };
        const merged = Object.assign(name_localized);
        name = name_localized.name_localized;
        if (name == null) {
          name = name_localized.name;
        }
        return obj;
      });
    }
    const options = choices.options;
    mapped1 = undefined;
    if (options != null) {
      mapped1 = options.map(f94078);
    }
    ({ name_localized: obj.serverLocalizedName, name_localized } = choices);
    if (name_localized == null) {
      name_localized = choices.name;
    }
    description = choices.description_localized;
    if (description == null) {
      description = choices.description;
    }
    if (choices.type === Server.ApplicationCommandOptionType.CHANNEL) {
      if ("channel_types" in choices) {
        const obj3 = { channelTypes: choices.channel_types };
        const merged1 = Object.assign(obj);
        obj5 = obj3;
      }
      return obj5;
    }
    if (choices.type === Server.ApplicationCommandOptionType.NUMBER) {
      obj5 = {};
      const merged2 = Object.assign(obj);
      ({ min_value: obj2.minValue, max_value: obj2.maxValue } = choices);
    }
    if (choices.type !== Server.ApplicationCommandOptionType.STRING) {
      tmp9 = obj;
      if (choices.type === Server.ApplicationCommandOptionType.ATTACHMENT) {
        tmp9 = obj;
        if ("file_types" in choices) {
          const obj9 = { fileTypes: choices.file_types };
          const merged3 = Object.assign(obj);
          tmp9 = obj9;
        }
      }
    } else {
      const obj10 = {};
      const merged4 = Object.assign(obj);
      ({ min_length: obj4.minLength, max_length: obj4.maxLength } = choices);
      tmp9 = obj10;
    }
    obj5 = tmp9;
  };
  ({ rootCommand, command, subCommandPath } = arg0);
  let obj;
  let tmp = null != rootCommand.permissions;
  ({ applicationId, useKeyedPermissions } = arg0);
  if (tmp) {
    tmp = rootCommand.permissions.length > 0;
  }
  let tmp2;
  if (tmp) {
    if (useKeyedPermissions) {
      const obj2 = IntegrationPermissionUtils;
      const keyPermissionsResult = obj2.keyPermissions(rootCommand.permissions);
      obj = keyPermissionsResult;
    } else {
      obj = {};
      const permissions = rootCommand.permissions;
      const item = permissions.forEach((id) => {
        obj[id.id] = id;
      });
    }
    tmp2 = obj;
  }
  let items = subCommandPath;
  if (subCommandPath == null) {
    items = [];
  }
  let mapped = items.map((name) => name.name);
  let items1 = subCommandPath;
  if (subCommandPath == null) {
    items1 = [];
  }
  let mapped1 = items1.map((displayName) => displayName.displayName);
  const obj4 = {
    version: rootCommand.version,
    guildId: rootCommand.guild_id,
    id: items2.join(metroImportDefault),
    untranslatedName: items3.join(" "),
    serverLocalizedName: command.name_localized,
    applicationId,
    type: CHAT,
    inputType: ApplicationCommandTypes.ApplicationCommandInputType.BOT,
    untranslatedDescription: null,
    options: mapped2,
    rootCommand,
    subCommandPath,
    defaultMemberPermissions: deserializeResult,
    dmPermission: rootCommand.dm_permission,
    permissions: tmp2,
    displayName: items4.join(" "),
    displayDescription: description,
    nsfw: null,
    contexts: null,
    integration_types: null,
    global_popularity_rank: null,
    handler: null,
  };
  items2 = [rootCommand.id, ...mapped];
  items3 = [rootCommand.name, ...mapped];
  CHAT = rootCommand.type;
  if (CHAT == null) {
    CHAT = Server.ApplicationCommandType.CHAT;
  }
  ({ description: obj3.untranslatedDescription, options } = command);
  mapped2 = undefined;
  if (options != null) {
    mapped2 = options.map(f94078);
  }
  deserializeResult = undefined;
  if (null != rootCommand.default_member_permissions) {
    const deserializer = BigFlagUtils;
    deserializeResult = deserializer.deserialize(rootCommand.default_member_permissions);
  }
  let name = rootCommand.name_localized;
  if (name == null) {
    name = rootCommand.name;
  }
  items4 = [name, ...mapped1];
  description = command.description_localized;
  if (description == null) {
    description = command.description;
  }
  ({
    nsfw: obj3.nsfw,
    contexts: obj3.contexts,
    integration_types: obj3.integration_types,
    global_popularity_rank: obj3.global_popularity_rank,
    handler: obj3.handler,
  } = rootCommand);
  return obj4;
}
function buildSubCommands(arg0) {
  let applicationId;
  let command;
  let concat;
  let concat2;
  let items4;
  let items7;
  let name;
  let name2;
  let rootCommand;
  let subCommandPath;
  let useKeyedPermissions;
  ({ rootCommand, command, applicationId, subCommandPath, useKeyedPermissions } = arg0);
  if (command.hasOwnProperty("id")) {
    const obj2 = { rootCommand, command, applicationId, subCommandPath, useKeyedPermissions };
    const items = [buildCommand(obj2)];
    return items;
  } else if (command.type !== Server.ApplicationCommandOptionType.SUB_COMMAND) {
    if (command.type !== Server.ApplicationCommandOptionType.SUB_COMMAND_GROUP) {
      const obj = { rootCommand, command, applicationId, subCommandPath, useKeyedPermissions };
      const items1 = [buildCommand(obj)];
      return items1;
    }
  }
  const items2 = [];
  if (null == command.options) {
    return items2;
  } else {
    let num3;
    let num4;
    const options = command.options;
    const found = options.filter((type) => type.type === Server.ApplicationCommandOptionType.SUB_COMMAND_GROUP);
    for (let num3 = 0; num3 < found.length; num3 = num3 + 1) {
      let push = items2.push;
      let obj3 = {
        rootCommand,
        command: found[num3],
        applicationId,
        subCommandPath: concat(items4),
        useKeyedPermissions,
      };
      let items3 = subCommandPath;
      if (subCommandPath == null) {
        items3 = [];
      }
      let obj4 = {
        name: found[num3].name,
        type: Server.ApplicationCommandOptionType.SUB_COMMAND_GROUP,
        displayName: name,
      };
      concat = items3.concat;
      name = found[num3].name_localized;
      if (name == null) {
        name = found[num3].name;
      }
      items4 = [obj4];
      let items5 = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(items5, buildSubCommands(obj3), 0);
      let applyResult = HermesBuiltin.apply(push, items5, items2);
    }
    const options1 = command.options;
    const found1 = options1.filter((type) => type.type === Server.ApplicationCommandOptionType.SUB_COMMAND);
    for (let num4 = 0; num4 < found1.length; num4 = num4 + 1) {
      let obj5 = {
        rootCommand,
        command: found1[num4],
        applicationId,
        subCommandPath: concat2(items7),
        useKeyedPermissions,
      };
      let items6 = subCommandPath;
      let push2 = items2.push;
      if (subCommandPath == null) {
        items6 = [];
      }
      let obj6 = { name: found1[num4].name, type: Server.ApplicationCommandOptionType.SUB_COMMAND, displayName: name2 };
      concat2 = items6.concat;
      name2 = found1[num4].name_localized;
      if (name2 == null) {
        name2 = found1[num4].name;
      }
      items7 = [obj6];
      let push2Result = push2(buildCommand(obj5));
    }
    const tmp22 = 0 === found.length && 0 === found1.length;
    if (tmp22) {
      const obj7 = { rootCommand, command, applicationId, subCommandPath, useKeyedPermissions };
      items2.push(buildCommand(obj7));
    }
    return items2;
  }
}
function hasAccessGivenPerms(selfMember, id, commandLevelPermissions) {
  const obj = IntegrationPermissionUtils;
  const tmp =
    commandLevelPermissions[
      obj.toPermissionKey(obj, selfMember.userId, ApplicationCommandTypes.ApplicationCommandPermissionType.USER)
    ];
  if (null != tmp) {
    return tmp.permission;
  } else {
    let flag = false;
    const roles = selfMember.roles;
    const obj4 = roles[Symbol.iterator]();
    while (obj4 !== undefined) {
      let obj2 = IntegrationPermissionUtils;
      let tmp7 =
        commandLevelPermissions[
          obj2.toPermissionKey(obj2, tmp3, ApplicationCommandTypes.ApplicationCommandPermissionType.ROLE)
        ];
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
      const tmp14 =
        commandLevelPermissions[
          obj3.toPermissionKey(obj3, id, ApplicationCommandTypes.ApplicationCommandPermissionType.ROLE)
        ];
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
({ BuiltInSectionId: metroRequire, SUB_COMMAND_KEY_SEPARATOR: metroImportDefault } = ApplicationCommandConstants);
({ AnalyticEvents: metroImportAll, ID_REGEX: c9 } = Constants);
const Permissions = Constants2.Permissions;
let deserializeResult = BigFlagUtils.deserialize(0);
const map1 = deserializeResult;
let result = size.fileFinishedImporting("modules/application_commands/ApplicationCommandUtils.tsx");

export { buildCommand };
export const buildApplicationCommands = function buildApplicationCommands(uniqByResult, useKeyedPermissions) {
  let obj = _modDef12;
  return obj.flatMap(uniqByResult, (id) => {
    _modDef38(null != id.id, "Missing command id");
    const obj = {
      rootCommand: id,
      command: id,
      applicationId: id.application_id,
      subCommandPath: "Array",
      useKeyedPermissions,
    };
    return buildSubCommands(obj);
  });
};
export const applicationPermissionsList = function applicationPermissionsList(arr) {
  let reduced;
  if (arr != null) {
    reduced = arr.reduce((arr, applicationCommandPermissions) => {
      if (null != applicationCommandPermissions.applicationCommandPermissions) {
        const obj = { id: null, permissions: null };
        ({ id: obj.id, applicationCommandPermissions: obj.permissions } = applicationCommandPermissions);
        arr = arr.push(obj);
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
  let closure_0 = regExp;
  let closure_1 = arg2;
  const items = [];
  const arr2 = _modDef12(contextCommands);
  const item = arr2.forEach((displayName) => {
    let isMatch = regex.test(displayName.displayName);
    if (isMatch) {
      isMatch = null == displayName.predicate || displayName.predicate(closure_1);
      const predicateResult = null == displayName.predicate || displayName.predicate(closure_1);
    }
    if (isMatch) {
      items.push(displayName);
    }
  });
  return items.slice(0, arg3);
};
export const getApplicationCommandOptionQueryOptions = function getApplicationCommandOptionQueryOptions(option) {
  const type = option.type;
  const STRING = Server.ApplicationCommandOptionType.STRING;
  const type2 = option.type;
  const CHANNEL = Server.ApplicationCommandOptionType.CHANNEL;
  const tmp3 =
    option.type === Server.ApplicationCommandOptionType.USER ||
    option.type === Server.ApplicationCommandOptionType.MENTIONABLE;
  const tmp4 =
    option.type === Server.ApplicationCommandOptionType.ROLE ||
    option.type === Server.ApplicationCommandOptionType.MENTIONABLE;
  return {
    canMentionEveryone: type === STRING || tmp4,
    canMentionHere: type === STRING,
    canMentionChannels: type === STRING || type2 === CHANNEL,
    canMentionUsers: type === STRING || tmp3,
    canMentionRoles: type === STRING || tmp4,
    canMentionAnyGuildUser: tmp3,
    canMentionNonMentionableRoles: tmp4,
    canMentionOtherGlobals: type === STRING,
  };
};
export const allChannelsSentinel = function allChannelsSentinel(contextGuildId) {
  const obj = _modDef14(contextGuildId);
  const str = obj.subtract(1);
  return str.toString();
};
export const canUseApplicationCommands = function canUseApplicationCommands(can, arg1, isMultiUserDM) {
  let tmp = !arg1;
  if (tmp) {
    let isMultiUserDMResult = isMultiUserDM.isMultiUserDM();
    if (!isMultiUserDMResult) {
      let can2Result;
      if (isMultiUserDM.isDM()) {
        can2Result = !isMultiUserDM.isSystemDM();
      } else if (isMultiUserDM.isArchivedLockedThread()) {
        const can2 = can.can;
        const obj2 = BigFlagUtils;
        can2Result = can2(
          obj2.combine(Permissions.USE_APPLICATION_COMMANDS, Permissions.MANAGE_THREADS),
          isMultiUserDM,
        );
      } else {
        can2Result = isReadableType(isMultiUserDM.type);
        if (can2Result) {
          can = can.can;
          const obj = BigFlagUtils;
          can2Result = can(obj.combine(Permissions.USE_APPLICATION_COMMANDS, Permissions.SEND_MESSAGES), isMultiUserDM);
        }
      }
      isMultiUserDMResult = can2Result;
    }
    tmp = isMultiUserDMResult;
  }
  return tmp;
};
export const DISABLED_BY_DEFAULT_PERMISSION_FLAG = deserializeResult;
export const hasAccess = function hasAccess(arg0) {
  let PermissionStore;
  let commandLevelPermissions;
  let defaultMemberPermissions;
  let guild;
  let selfMember;
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
      if (tmp8) {
        let tmp9 = null == defaultMemberPermissions;
        if (!tmp9) {
          const obj = BigFlagUtils;
          const equalsResult = obj.equals(defaultMemberPermissions, map1);
          tmp9 = !equalsResult && PermissionStore.can(defaultMemberPermissions, guild);
          !equalsResult && PermissionStore.can(defaultMemberPermissions, guild);
        }
        tmp8 = tmp9;
      }
      return tmp8;
    }
  }
  return true;
};
export const getCommandAttachmentDraftType = function getCommandAttachmentDraftType(commandOrigin) {
  if (ApplicationCommandTypes.CommandOrigin.CHAT === commandOrigin) {
    return DraftType.SlashCommand;
  } else {
    return DraftType.ApplicationLauncherCommand;
  }
};
export const getCommandTriggerSection = function getCommandTriggerSection(descriptor) {
  if (null != descriptor) {
    let APP;
    if (descriptor.id === metroRequire.BUILT_IN) {
      APP = ApplicationCommandTypes.ApplicationCommandTriggerSections.BUILT_IN;
    } else if (descriptor.id === tmp.FRECENCY) {
      APP = ApplicationCommandTypes.ApplicationCommandTriggerSections.FRECENCY;
    } else {
      APP = ApplicationCommandTypes.ApplicationCommandTriggerSections.APP;
    }
    return APP;
  }
};
export const getApplicationCommandSection = function getApplicationCommandSection(application, arg1, arg2) {
  let flag;
  let name = arg2;
  const obj = {
    type: ApplicationCommandTypes.ApplicationCommandSectionType.APPLICATION,
    id: application.id,
    name,
    icon: application.icon,
    application,
    isUserApp: flag,
  };
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
  flag = arg1;
  if (arg1 == null) {
    flag = false;
  }
  return obj;
};
export const extractInteractionDataProps = function extractInteractionDataProps(parsed) {
  let id;
  let interactionOptions;
  let options;
  ({ id, options } = parsed);
  let found;
  if (interactionOptions != null) {
    found = interactionOptions.find((type) => type.type === Server.ApplicationCommandOptionType.SUB_COMMAND_GROUP);
  }
  let sum = id;
  if (null != found) {
    const _HermesInternal = HermesInternal;
    sum = id + "" + metroImportDefault + found.name;
    interactionOptions = found.options;
  }
  let found1;
  if (interactionOptions != null) {
    found1 = interactionOptions.find((type) => type.type === Server.ApplicationCommandOptionType.SUB_COMMAND);
  }
  let commandKey = sum;
  if (null != found1) {
    const _HermesInternal2 = HermesInternal;
    commandKey = sum + "" + metroImportDefault + found1.name;
    interactionOptions = found1.options;
  }
  return { commandKey, interactionOptions };
};
export const trackCommandSelected = function trackCommandSelected(command) {
  let _location;
  let query;
  let queryLength;
  let searchResultsPosition;
  let sectionName;
  let source;
  let triggerSection;
  command = command.command;
  ({ location: _location, triggerSection, queryLength, sectionName, query, searchResultsPosition, source } = command);
  const rootCommand = command.rootCommand;
  let id;
  const trackWithMetadata = AppAnalyticsUtils.trackWithMetadata;
  const APPLICATION_COMMAND_SELECTED = metroImportAll.APPLICATION_COMMAND_SELECTED;
  AppAnalyticsUtils;
  if (rootCommand != null) {
    id = rootCommand.id;
  }
  if (id == null) {
    id = command.id;
  }
  const obj = {
    command_id: id,
    application_id: command.applicationId,
    location: _location,
    section: triggerSection,
    query_length: queryLength,
    command_text_length: command.displayName.length,
    section_name: sectionName,
    query,
    search_results_position: searchResultsPosition,
    source,
  };
  trackWithMetadata(APPLICATION_COMMAND_SELECTED, obj);
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
  return null != sections && id in sections;
};
