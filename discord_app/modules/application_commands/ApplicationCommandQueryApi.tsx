// === Module 9416: ApplicationCommandQueryApi ===

// Module 9416 (ApplicationCommandQueryApi)
import GlobalUtils from "GlobalUtils" /* 1369 */;
import ApplicationCommandUtils from "ApplicationCommandUtils" /* 7521 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 7523 */;
import ApplicationCommandQueryTypes from "ApplicationCommandQueryTypes" /* 9298 */;
import ApplicationCommandBuiltIns from "ApplicationCommandBuiltIns" /* 9300 */;
import CommandPermissionUtils from "CommandPermissionUtils" /* 9405 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1979 */;
import ApplicationCommandIndexStore from "ApplicationCommandIndexStore" /* 9290 */;

require = fn;
function findCommandInSection(found, commandId) {
  closure_0 = commandId;
  if (null != commandId) {
    if (null != found.commands[commandId]) {
      return found.commands[commandId];
    } else {
      const _Object = Object;
      const values = Object.values(found.commands);
      found = values.find((rootCommand) => {
        rootCommand = rootCommand.rootCommand;
        let id;
        if (rootCommand != null) {
          id = rootCommand.id;
        }
        return id === closure_0;
      });
      let rootCommand;
      if (found != null) {
        rootCommand = found.rootCommand;
      }
      let command;
      if (null != rootCommand) {
        const obj = { rootCommand, command: rootCommand, applicationId: null };
        const application = found.descriptor.application;
        let str;
        if (application != null) {
          str = application.id;
        }
        if (str == null) {
          str = "";
        }
        obj.applicationId = str;
        command = obj.buildCommand(obj);
      }
      return command;
    }
  }
}
let ApplicationCommandIndexStore = fn(9290);
({ useContextIndexState: metroRequire, useDiscoveryState: closure_7, useQueryState: closure_8, useUserIndexState: closure_9 } = ApplicationCommandIndexStore);
const BuiltInSectionId = fn(4999).BuiltInSectionId;
const NOOP = fn(1074).NOOP;
let items = [fn(1894).ApplicationCommandType.CHAT];
let section = { id: "placeholder-section", type: fn(7523).ApplicationCommandSectionType.APPLICATION, name: "" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/application_commands/ApplicationCommandQueryApi.tsx");

export const getCachedCommand = function getCachedCommand(type, commandId, applicationId) {
  closure_0 = applicationId;
  if (null == commandId) {
    return { application: "Array", command: "call", section: "o" };
  } else {
    const userState = ApplicationCommandIndexStore.getUserState();
    const result2 = userState.result;
    let sections;
    const contextState = ApplicationCommandIndexStore.getContextState(type);
    if (result2 != null) {
      sections = result2.sections;
    }
    if (sections == null) {
      sections = {};
    }
    const values = Object.values(sections);
    const result = contextState.result;
    let sections1;
    if (result != null) {
      sections1 = result.sections;
    }
    if (sections1 == null) {
      sections1 = {};
    }
    const combined = values.concat(Object.values(sections1));
    if (null != applicationId) {
      const found = combined.find((descriptor) => {
        const application = descriptor.descriptor.application;
        let id;
        if (application != null) {
          id = application.id;
        }
        return id === closure_0;
      });
      if (null != found) {
        let obj = { application: found.descriptor.application, command: findCommandInSection(found, commandId), section: found.descriptor };
        return obj;
      }
    } else {
      const iter = combined[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp7 = findCommandInSection(nextResult, commandId);
        if (null != tmp7) {
          obj = { application: nextResult.descriptor.application, command: tmp7, section: nextResult.descriptor };
          iter.return();
          return obj;
        }
      }
    }
    return { application: "Array", command: "call", section: "o" };
  }
};
export const getCachedApplicationSection = function getCachedApplicationSection(type, CHAT, applicationId) {
  const userState = ApplicationCommandIndexStore.getUserState();
  const contextState = ApplicationCommandIndexStore.getContextState(type);
  const result = userState.result;
  let tmp4;
  const applicationState = ApplicationCommandIndexStore.getApplicationState(applicationId);
  if (result != null) {
    const sections = result.sections;
    if (sections != null) {
      tmp4 = sections[applicationId];
    }
  }
  if (tmp4 == null) {
    const result2 = contextState.result;
    let tmp5;
    if (result2 != null) {
      const sections2 = result2.sections;
      if (sections2 != null) {
        tmp5 = sections2[applicationId];
      }
    }
    tmp4 = tmp5;
  }
  if (tmp4 == null) {
    const result3 = applicationState.result;
    let tmp6;
    if (result3 != null) {
      const sections3 = result3.sections;
      if (sections3 != null) {
        tmp6 = sections3[applicationId];
      }
    }
    tmp4 = tmp6;
  }
  let descriptor;
  if (tmp4 != null) {
    descriptor = tmp4.descriptor;
  }
  return descriptor;
};
export const getCachedResults = function getCachedResults(withAffinitySuggestions, CHAT, query) {
  let obj = { commandTypes: null, text: query };
  items = [CHAT];
  obj.commandTypes = items;
  obj = { scoreMethod: ApplicationCommandQueryTypes.ScoreMethod.COMMAND_OR_APPLICATION, allowFetch: false };
  query = ApplicationCommandIndexStore.query(withAffinitySuggestions, obj, obj);
  obj = { commands: query.commands, sections: query.descriptors };
  return obj;
};
export const getChangeKeys = function getChangeKeys(type) {
  const userState = ApplicationCommandIndexStore.getUserState();
  const contextState = ApplicationCommandIndexStore.getContextState(type);
  let result;
  if (userState != null) {
    result = userState.result;
  }
  items = [result, ];
  let result1;
  if (contextState != null) {
    result1 = contextState.result;
  }
  items[1] = result1;
  return items;
};
export const useCachedResults = function useCachedResults(arg0, CHAT, text) {
  closure_0 = CHAT;
  items = [CHAT];
  let obj = {
    commandTypes: noop.useMemo(() => {
      items = [closure_0];
      return items;
    }, items),
    text
  };
  obj = { scoreMethod: ApplicationCommandQueryTypes.ScoreMethod.COMMAND_OR_APPLICATION, allowFetch: false };
  const tmp = React6(arg0, obj, obj);
  obj = { commands: tmp.commands, sections: tmp.descriptors };
  return obj;
};
export const useDiscovery = function useDiscovery(options) {
  ({ context, filters } = options);
  options = options.options;
  let descriptors;
  let commands;
  let sectionedCommands;
  let loading;
  let first;
  closure_8 = undefined;
  let memo;
  let guild_id = null;
  if ("channel" === context.type) {
    guild_id = context.channel.guild_id;
  }
  let obj = filters(guild_id[8]);
  items = [sectionedCommands];
  let items1 = [guild_id];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guild_id), items1);
  obj = {};
  const merged = Object.assign(options);
  obj.allowFetch = options.allowFetch;
  let tmp4 = first(context, stateFromStores, filters, obj);
  descriptors = tmp4.descriptors;
  commands = tmp4.commands;
  sectionedCommands = tmp4.sectionedCommands;
  loading = tmp4.loading;
  const tmp5 = descriptors(commands.useState(null), 2);
  first = tmp5[0];
  closure_8 = tmp5[1];
  let items2 = [filters.commandTypes, options.placeholderCount];
  memo = commands.useMemo(() => {
    let num = options.placeholderCount;
    if (num == null) {
      num = 0;
    }
    items = [];
    for (let num2 = 0; num2 < num; num2 = num2 + 1) {
      section = { type: tmp, inputType: null, id: null, untranslatedName: "", displayName: "", untranslatedDescription: "", displayDescription: "", applicationId: "", section: null };
      section.inputType = ApplicationCommandTypes.ApplicationCommandInputType.PLACEHOLDER;
      let _HermesInternal = HermesInternal;
      section.id = "placeholder-" + num2;
      section.section = section;
      let arr = items.push(section);
    }
    return items;
  }, items2);
  let items3 = [loading, commands, descriptors, sectionedCommands, first, memo];
  return commands.useMemo(() => {
    let obj = {
      loading,
      commands,
      activeSections: descriptors,
      commandsByActiveSection: sectionedCommands,
      filteredSectionId: commandsByActiveSection,
      hasMoreAfter: false,
      placeholders: loading ? memo : [],
      sectionDescriptors: descriptors,
      filterSection(id) {
        closure_1_8(id);
      },
      scrollDown: NOOP
    };
    if (null == commandsByActiveSection) {
      if (!loading) {
        return obj;
      } else {
        commandsByActiveSection = arr[0];
        if (null != commandsByActiveSection) {
          obj = { section: commandsByActiveSection.section, data: null };
          items = [];
          HermesBuiltin.arraySpread(memo, HermesBuiltin.arraySpread(commandsByActiveSection.data, 0));
          obj.data = items;
          commandsByActiveSection = [obj];
          HermesBuiltin.arraySpread(arr.slice(1), 1);
          obj.commandsByActiveSection = commandsByActiveSection;
          let tmp7 = memo;
        } else {
          const tmp6 = ApplicationCommandBuiltIns.BUILT_IN_SECTIONS[BuiltInSectionId.BUILT_IN];
          const items1 = [tmp6];
          obj.activeSections = items1;
          obj = { section: tmp6, data: null };
          tmp7 = memo;
          obj.data = memo;
          const items2 = [obj];
          obj.commandsByActiveSection = items2;
        }
        const items3 = [];
        HermesBuiltin.arraySpread(tmp7, HermesBuiltin.arraySpread(tmp, 0));
        obj.commands = items3;
      }
    } else {
      const found = arr.find((section) => section.section.id === first);
      if (null != found) {
        const items4 = [found.section];
        let items5 = items4;
      } else {
        items5 = [];
      }
      obj.activeSections = items5;
      if (null != found) {
        const items6 = [found];
        let items7 = items6;
      } else {
        items7 = [];
      }
      obj.commandsByActiveSection = items7;
    }
  }, items3);
};
export const executeQuery = function executeQuery(withAffinitySuggestions, commandTypes, placeholderCount) {
  const query = ApplicationCommandIndexStore.query(withAffinitySuggestions, commandTypes, placeholderCount);
  ({ descriptors, commands, loading } = query);
  let num = 0;
  if (loading) {
    let num2 = placeholderCount.placeholderCount;
    if (num2 == null) {
      num2 = 0;
    }
    num = num2;
  }
  items = [];
  for (let num3 = 0; num3 < num; num3 = num3 + 1) {
    section = { type: tmp3, inputType: null, id: null, untranslatedName: "", displayName: "", untranslatedDescription: "", displayDescription: "", applicationId: "", section: null };
    section.inputType = ApplicationCommandTypes.ApplicationCommandInputType.PLACEHOLDER;
    let _HermesInternal = HermesInternal;
    section.id = "placeholder-" + num3;
    section.section = section;
    let arr = items.push(section);
  }
  let tmp8 = commands;
  if (loading) {
    const items1 = [];
    HermesBuiltin.arraySpread(items, HermesBuiltin.arraySpread(commands, 0));
    tmp8 = items1;
  }
  section = { commands: tmp8, sections: null };
  let tmp14 = descriptors;
  if (loading) {
    tmp14 = descriptors;
    if (0 === descriptors.length) {
      const items2 = [ApplicationCommandBuiltIns.BUILT_IN_SECTIONS[BuiltInSectionId.BUILT_IN]];
      tmp14 = items2;
    }
  }
  section.sections = tmp14;
  return section;
};
export const useQuery = function useQuery(arg0, commandTypes, placeholderCount) {
  closure_0 = commandTypes;
  let obj = {};
  const merged = Object.assign(placeholderCount);
  obj.allowFetch = true;
  let tmp2 = closure_8(arg0, commandTypes, obj);
  const descriptors = tmp2.descriptors;
  const commands = tmp2.commands;
  const loading = tmp2.loading;
  items = [commandTypes.commandTypes, placeholderCount.placeholderCount];
  const memo = loading.useMemo(() => {
    let num = placeholderCount.placeholderCount;
    if (num == null) {
      num = 0;
    }
    items = [];
    for (let num2 = 0; num2 < num; num2 = num2 + 1) {
      section = { type: tmp, inputType: null, id: null, untranslatedName: "", displayName: "", untranslatedDescription: "", displayDescription: "", applicationId: "", section: null };
      section.inputType = ApplicationCommandTypes.ApplicationCommandInputType.PLACEHOLDER;
      let _HermesInternal = HermesInternal;
      section.id = "placeholder-" + num2;
      section.section = section;
      let arr = items.push(section);
    }
    return items;
  }, items);
  let items1 = [loading, commands, descriptors, memo];
  return loading.useMemo(() => {
    if (loading) {
      items = [];
      HermesBuiltin.arraySpread(memo, HermesBuiltin.arraySpread(tmp2, 0));
      let tmp3 = items;
    } else {
      tmp3 = tmp2;
    }
    const obj = { commands: tmp3, sections: null, scrollDown: null };
    if (loading) {
      if (0 === descriptors.length) {
        const items1 = [ApplicationCommandBuiltIns.BUILT_IN_SECTIONS[BuiltInSectionId.BUILT_IN]];
        let tmp10 = items1;
      }
      obj.sections = tmp10;
      obj.scrollDown = NOOP;
      return obj;
    }
    tmp10 = descriptors;
  }, items1);
};
export const useCommand = function useCommand(arg0, commandId) {
  closure_0 = commandId;
  const tmp = React7(true, true);
  let result = tmp;
  const tmp2 = timestampProducer(arg0, true, true);
  let result2 = tmp2;
  items = [tmp2.result, tmp.result, commandId];
  return noop.useMemo(() => {
    if (null != closure_0) {
      result2 = result.result;
      let sections;
      if (result2 != null) {
        sections = result2.sections;
      }
      if (sections == null) {
        sections = {};
      }
      const values = Object.values(sections);
      result = result2.result;
      let sections1;
      if (result != null) {
        sections1 = result.sections;
      }
      if (sections1 == null) {
        sections1 = {};
      }
      const combined = values.concat(Object.values(sections1));
      for (const item10019 of combined) {
        let tmp7 = item10019.commands[closure_0];
        if (null != tmp7) {
          let obj = { command: tmp7, application: item10019.descriptor.application };
          obj4.return();
          return obj;
        }
      }
    }
    return { command: "hash", application: "call" };
  }, items);
};
export const useCommandsForApplication = function useCommandsForApplication(arg0, arg1, arg2) {
  closure_0 = arg1;
  closure_1 = arg2;
  const tmp = closure_9(true, true);
  closure_2 = tmp;
  const tmp2 = closure_6(arg0, true, true);
  closure_3 = tmp2;
  let result;
  if (tmp != null) {
    result = tmp.result;
  }
  items = [result, , , ];
  let result1;
  if (tmp2 != null) {
    result1 = tmp2.result;
  }
  items[1] = result1;
  items[2] = arg1;
  items[3] = arg2;
  return noop.useMemo(() => {
    const result = sectionDescriptor.result;
    let tmp2;
    if (result != null) {
      const sections = result.sections;
      if (sections != null) {
        tmp2 = sections[dependencyMap];
      }
    }
    const result2 = isGuildInstalled.result;
    let tmp6;
    if (result2 != null) {
      const sections2 = result2.sections;
      if (sections2 != null) {
        tmp6 = sections2[dependencyMap];
      }
    }
    const result3 = sectionDescriptor.result;
    let tmp9;
    if (result3 != null) {
      const sections3 = result3.sections;
      if (sections3 != null) {
        tmp9 = sections3[dependencyMap];
      }
    }
    if (tmp9 == null) {
      const result4 = isGuildInstalled.result;
      let tmp11;
      if (result4 != null) {
        tmp11 = result4.sections[dependencyMap];
      }
      tmp9 = tmp11;
    }
    commands = undefined;
    if (tmp9 != null) {
      commands = tmp9.commands;
    }
    if (commands == null) {
      commands = {};
    }
    const values = Object.values(commands);
    const mapped = values.map((rootCommand) => {
      let command = rootCommand;
      if (null != rootCommand.rootCommand) {
        dependencyMap(sectionDescriptor[6]);
        const obj = { rootCommand: null, command: null, applicationId: null };
        ({ rootCommand: obj2.rootCommand, rootCommand: obj2.command, applicationId: obj2.applicationId } = rootCommand);
        command = obj.buildCommand(obj);
      }
      return command;
    });
    dependencyMap = mapped.reduce((acc, id) => {
      acc[id.id] = id;
      return acc;
    }, {});
    let application;
    if (tmp9 != null) {
      let descriptor = tmp9.descriptor;
      if (descriptor != null) {
        application = descriptor.application;
      }
    }
    let obj = { application, commands: null, sectionDescriptor: null, isGuildInstalled: null, isUserInstalled: null };
    const mapped1 = commands.map((item) => dependencyMap[item]);
    obj.commands = mapped1.filter(GlobalUtils.isNotNullish);
    descriptor = undefined;
    if (tmp9 != null) {
      descriptor = tmp9.descriptor;
    }
    obj.sectionDescriptor = descriptor;
    obj.isGuildInstalled = null != tmp6;
    obj.isUserInstalled = null != tmp2;
    return obj;
  }, items);
};
export const useAccessibleCommandsForApplication = function useAccessibleCommandsForApplication(channel, arg1, arg2) {
  _require = channel;
  let obj = isUserInstalled;
  items = [channel];
  closure_129_0 = arg1;
  closure_129_1 = arg2;
  const memo = isUserInstalled.useMemo(() => ({ channel, type: "channel" }), items);
  let tmp2 = closure_9(true, true);
  closure_129_2 = tmp2;
  const tmp3 = closure_6(memo, true, true);
  closure_129_3 = tmp3;
  let result;
  if (tmp2 != null) {
    result = tmp2.result;
  }
  const items1 = [result, , , ];
  let result1;
  if (tmp3 != null) {
    result1 = tmp3.result;
  }
  items1[1] = result1;
  items1[2] = arg1;
  items1[3] = arg2;
  const memo1 = isUserInstalled.useMemo(() => {
    const result = sectionDescriptor.result;
    let tmp2;
    if (result != null) {
      const sections = result.sections;
      if (sections != null) {
        tmp2 = sections[dependencyMap];
      }
    }
    const result2 = isGuildInstalled.result;
    let tmp6;
    if (result2 != null) {
      const sections2 = result2.sections;
      if (sections2 != null) {
        tmp6 = sections2[dependencyMap];
      }
    }
    const result3 = sectionDescriptor.result;
    let tmp9;
    if (result3 != null) {
      const sections3 = result3.sections;
      if (sections3 != null) {
        tmp9 = sections3[dependencyMap];
      }
    }
    if (tmp9 == null) {
      const result4 = isGuildInstalled.result;
      let tmp11;
      if (result4 != null) {
        tmp11 = result4.sections[dependencyMap];
      }
      tmp9 = tmp11;
    }
    commands = undefined;
    if (tmp9 != null) {
      commands = tmp9.commands;
    }
    if (commands == null) {
      commands = {};
    }
    const values = Object.values(commands);
    const mapped = values.map((rootCommand) => {
      let command = rootCommand;
      if (null != rootCommand.rootCommand) {
        dependencyMap(sectionDescriptor[6]);
        const obj = { rootCommand: null, command: null, applicationId: null };
        ({ rootCommand: obj2.rootCommand, rootCommand: obj2.command, applicationId: obj2.applicationId } = rootCommand);
        command = obj.buildCommand(obj);
      }
      return command;
    });
    dependencyMap = mapped.reduce((acc, id) => {
      acc[id.id] = id;
      return acc;
    }, {});
    let application;
    if (tmp9 != null) {
      let descriptor = tmp9.descriptor;
      if (descriptor != null) {
        application = descriptor.application;
      }
    }
    let obj = { application, commands: null, sectionDescriptor: null, isGuildInstalled: null, isUserInstalled: null };
    const mapped1 = commands.map((item) => dependencyMap[item]);
    obj.commands = mapped1.filter(GlobalUtils.isNotNullish);
    descriptor = undefined;
    if (tmp9 != null) {
      descriptor = tmp9.descriptor;
    }
    obj.sectionDescriptor = descriptor;
    obj.isGuildInstalled = null != tmp6;
    obj.isUserInstalled = null != tmp2;
    return obj;
  }, items1);
  let commands = memo1.commands;
  const sectionDescriptor = memo1.sectionDescriptor;
  const isGuildInstalled = memo1.isGuildInstalled;
  isUserInstalled = memo1.isUserInstalled;
  const permissionContext = require("CommandPermissionContext").usePermissionContext(channel, items);
  obj = { application: memo1.application, commands: null };
  const items2 = [commands, permissionContext, sectionDescriptor, isGuildInstalled, isUserInstalled, channel];
  obj.commands = obj.useMemo(() => {
    if (null != allowedForChannel) {
      let allowedForUser = null;
      if (null != allowedForUser.guild_id) {
        let permissions;
        if (sectionDescriptor != null) {
          permissions = tmp3.permissions;
        }
        allowedForUser = null;
        if (null != permissions) {
          let obj = commands(sectionDescriptor[13]);
          allowedForUser = obj.computeAllowedForUser(tmp3.permissions, tmp.guild_id, permissionContext.userId, permissionContext.roleIds, permissionContext.isImpersonating);
        }
      }
      allowedForChannel = null;
      if (null != allowedForUser.guild_id) {
        let permissions1;
        if (sectionDescriptor != null) {
          permissions1 = tmp10.permissions;
        }
        allowedForChannel = null;
        if (null != permissions1) {
          allowedForChannel = commands(sectionDescriptor[13]).computeAllowedForChannel(tmp10.permissions, tmp, tmp.guild_id);
          const obj2 = commands(sectionDescriptor[13]);
        }
      }
      return arr.filter((item) => {
        const obj = { applicationAllowedForUser: allowedForUser, applicationAllowedForChannel: allowedForChannel, isGuildInstalled, isUserInstalled, commandBotId: null };
        let botId;
        if (sectionDescriptor != null) {
          botId = sectionDescriptor.botId;
        }
        obj.commandBotId = botId;
        return obj.hasAccess(item, permissionContext, obj) === CommandPermissionUtils.HasAccessResult.ALLOWED;
      });
    }
    arr = allowedForChannel;
  }, items2);
  return obj;
};