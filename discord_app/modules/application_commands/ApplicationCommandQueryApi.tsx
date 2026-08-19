// === Module 9555: findCommandInSection ===

// Module 9555 (findCommandInSection)
import ApplicationCommandSectionType from "ApplicationCommandSectionType" /* 5248 */;
import ScoreMethod from "ScoreMethod" /* 8456 */;
import getOptionValue from "getOptionValue" /* 8458 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import getIndexKey from "getIndexKey" /* 8448 */;
import getIndexKey2 from "getIndexKey" /* 8448 */;
import { BuiltInSectionId } from "TRUE_OPTION_NAME" /* 5246 */;
import { NOOP } from "ME" /* 676 */;

require = fn;
function findCommandInSection(found, commandKey) {
  const _require = commandKey;
  if (null != commandKey) {
    if (null != found.commands[commandKey]) {
      return found.commands[commandKey];
    } else {
      const _Object = Object;
      const values = Object.values(found.commands);
      found = values.find((item, index) => {
        const rootCommand = item.rootCommand;
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
        _require(5245);
        obj = { rootCommand: null, command: null, applicationId: null };
        obj[0] = rootCommand;
        obj[1] = rootCommand;
        const application = found.descriptor.application;
        let str;
        if (application != null) {
          str = application.id;
        }
        if (str == null) {
          str = "";
        }
        obj[2] = str;
        command = obj.buildCommand(obj);
      }
      return command;
    }
  }
}
({ useContextIndexState: closure_6, useDiscoveryState: error, useQueryState: closure_8, useUserIndexState: c9 } = getIndexKey);
let items = [require("PermissionOverwriteType").ApplicationCommandType.CHAT];
let obj = { id: "placeholder-section", type: require("ApplicationCommandSectionType").ApplicationCommandSectionType.APPLICATION, name: "" };
let result = require("obj132").fileFinishedImporting("modules/application_commands/ApplicationCommandQueryApi.tsx");

export const getCachedCommand = function getCachedCommand(type, commandKey) {
  closure_0 = arg2;
  if (null == commandKey) {
    return { application: "r", command: "accessibilityRole" };
  } else {
    const userState = authStore.getUserState();
    const result2 = userState.result;
    let sections;
    const contextState = authStore.getContextState(type);
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
    if (null != arg2) {
      const found = combined.find((item, index) => {
        const application = item.descriptor.application;
        let id;
        if (application != null) {
          id = application.id;
        }
        return id === closure_0;
      });
      if (null != found) {
        obj = { application: null, command: null };
        obj[0] = found.descriptor.application;
        obj[1] = findCommandInSection(found, commandKey);
        return obj;
      }
    } else {
      const iter = combined[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp7 = findCommandInSection(nextResult, commandKey);
        if (null != tmp7) {
          obj = { application: null, command: null };
          obj[0] = nextResult.descriptor.application;
          obj[1] = tmp7;
          iter.return();
          return obj;
        }
      }
    }
    return { application: "r", command: "accessibilityRole" };
  }
};
export const getCachedApplicationSection = function getCachedApplicationSection(type, CHAT, applicationId) {
  const userState = authStore.getUserState();
  const contextState = authStore.getContextState(type);
  const result = userState.result;
  let tmp4;
  const applicationState = authStore.getApplicationState(applicationId);
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
  items = [CHAT];
  obj = { scoreMethod: ScoreMethod.ScoreMethod.COMMAND_OR_APPLICATION, allowFetch: false };
  query = authStore.query(withAffinitySuggestions, obj, obj);
  obj = { commands: query.commands, sections: query.descriptors };
  return obj;
};
export const getChangeKeys = function getChangeKeys(type) {
  const userState = authStore.getUserState();
  const contextState = authStore.getContextState(type);
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
  obj = {
    commandTypes: React.useMemo(() => {
      items = [closure_0];
      return items;
    }, items),
    text
  };
  const tmp = callback2(arg0, obj, { allowFetch: false });
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
  obj = filters(guild_id[8]);
  items = [sectionedCommands];
  let items1 = [guild_id];
  const stateFromStores = obj.useStateFromStores(items, () => sectionedCommands.getGuild(guild_id), items1);
  obj = {};
  const merged = Object.assign(options);
  obj.allowFetch = options.allowFetch;
  const tmp4 = first(context, stateFromStores, filters, obj);
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
      obj = { type: null, inputType: null, id: null, untranslatedName: "", displayName: "", untranslatedDescription: "", displayDescription: "", applicationId: "", section: null };
      obj[0] = tmp;
      obj[1] = filters(guild_id[14]).ApplicationCommandInputType.PLACEHOLDER;
      let _HermesInternal = HermesInternal;
      obj[2] = "placeholder-" + num2;
      obj[8] = closure_1_15;
      let arr = items.push(obj);
    }
    return items;
  }, items2);
  let items3 = [loading, commands, descriptors, sectionedCommands, first, memo];
  return commands.useMemo(() => {
    obj = {
      loading,
      commands,
      activeSections: descriptors,
      commandsByActiveSection: sectionedCommands,
      filteredSectionId: first,
      hasMoreAfter: false,
      placeholders: loading ? memo : [],
      sectionDescriptors: descriptors,
      filterSection(id, arg1) {
        callback(id);
      },
      scrollDown: NOOP
    };
    if (null == first) {
      if (!loading) {
        return obj;
      } else {
        first = sectionedCommands[0];
        if (null != first) {
          obj = { section: null, data: null };
          obj[0] = first.section;
          items = [];
          HermesBuiltin.arraySpread(memo, HermesBuiltin.arraySpread(first.data, 0));
          obj[1] = items;
          first = [obj];
          HermesBuiltin.arraySpread(sectionedCommands.slice(1), 1);
          obj.commandsByActiveSection = first;
          let tmp7 = memo;
        } else {
          const tmp6 = filters(guild_id[9]).BUILT_IN_SECTIONS[BuiltInSectionId.BUILT_IN];
          const items1 = [tmp6];
          obj.activeSections = items1;
          obj = { section: null, data: null };
          obj[0] = tmp6;
          tmp7 = memo;
          obj[1] = memo;
          const items2 = [obj];
          obj.commandsByActiveSection = items2;
        }
        const items3 = [];
        HermesBuiltin.arraySpread(tmp7, HermesBuiltin.arraySpread(commands, 0));
        obj.commands = items3;
      }
    } else {
      const found = sectionedCommands.find((item, index) => item.section.id === closure_7);
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
  const query = authStore.query(withAffinitySuggestions, commandTypes, placeholderCount);
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
    obj = { type: null, inputType: null, id: null, untranslatedName: "", displayName: "", untranslatedDescription: "", displayDescription: "", applicationId: "", section: null };
    obj[0] = tmp3;
    obj[1] = ApplicationCommandSectionType.ApplicationCommandInputType.PLACEHOLDER;
    let _HermesInternal = HermesInternal;
    obj[2] = "placeholder-" + num3;
    obj[8] = obj;
    let arr = items.push(obj);
  }
  let tmp8 = commands;
  if (loading) {
    const items1 = [];
    HermesBuiltin.arraySpread(items, HermesBuiltin.arraySpread(commands, 0));
    tmp8 = items1;
  }
  obj = { commands: tmp8, sections: null };
  let tmp14 = descriptors;
  if (loading) {
    tmp14 = descriptors;
    if (0 === descriptors.length) {
      const items2 = [getOptionValue.BUILT_IN_SECTIONS[BuiltInSectionId.BUILT_IN]];
      tmp14 = items2;
    }
  }
  obj[1] = tmp14;
  return obj;
};
export const useQuery = function useQuery(arg0, commandTypes, placeholderCount) {
  closure_0 = commandTypes;
  closure_1 = placeholderCount;
  obj = {};
  const merged = Object.assign(placeholderCount);
  obj.allowFetch = true;
  const tmp2 = callback2(arg0, commandTypes, obj);
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
      obj = { type: null, inputType: null, id: null, untranslatedName: "", displayName: "", untranslatedDescription: "", displayDescription: "", applicationId: "", section: null };
      obj[0] = tmp;
      obj[1] = commandTypes(descriptors[14]).ApplicationCommandInputType.PLACEHOLDER;
      let _HermesInternal = HermesInternal;
      obj[2] = "placeholder-" + num2;
      obj[8] = closure_1_15;
      let arr = items.push(obj);
    }
    return items;
  }, items);
  let items1 = [loading, commands, descriptors, memo];
  return loading.useMemo(() => {
    if (loading) {
      items = [];
      HermesBuiltin.arraySpread(memo, HermesBuiltin.arraySpread(commands, 0));
      let tmp3 = items;
    } else {
      tmp3 = commands;
    }
    obj = { commands: tmp3, sections: null, scrollDown: null };
    if (loading) {
      if (0 === descriptors.length) {
        const items1 = [commandTypes(descriptors[9]).BUILT_IN_SECTIONS[BuiltInSectionId.BUILT_IN]];
        let tmp10 = items1;
      }
      obj[1] = tmp10;
      obj[2] = NOOP;
      return obj;
    }
    tmp10 = descriptors;
  }, items1);
};
export const useCommand = function useCommand(arg0, commandId) {
  closure_0 = commandId;
  const tmp = callback3(true, true);
  closure_1 = tmp;
  const tmp2 = callback(arg0, true, true);
  closure_2 = tmp2;
  items = [tmp2.result, tmp.result, commandId];
  return React.useMemo(() => {
    if (null != closure_0) {
      const result2 = result.result;
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
          obj = { command: null, application: null };
          obj[0] = tmp7;
          obj[1] = item10019.descriptor.application;
          obj4.return();
          return obj;
        }
      }
    }
    return { command: "r", application: "accessibilityRole" };
  }, items);
};
export const useCommandsForApplication = function useCommandsForApplication(arg0, arg1, arg2) {
  closure_0 = arg1;
  closure_1 = arg2;
  const tmp = callback3(true, true);
  closure_2 = tmp;
  const tmp2 = callback(arg0, true, true);
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
  return React.useMemo(() => {
    const result = sectionDescriptor.result;
    let tmp2;
    if (result != null) {
      const sections = result.sections;
      if (sections != null) {
        tmp2 = sections[callback];
      }
    }
    const result2 = isGuildInstalled.result;
    let tmp6;
    if (result2 != null) {
      const sections2 = result2.sections;
      if (sections2 != null) {
        tmp6 = sections2[callback];
      }
    }
    const result3 = sectionDescriptor.result;
    let tmp9;
    if (result3 != null) {
      const sections3 = result3.sections;
      if (sections3 != null) {
        tmp9 = sections3[callback];
      }
    }
    if (tmp9 == null) {
      const result4 = isGuildInstalled.result;
      let tmp11;
      if (result4 != null) {
        tmp11 = result4.sections[callback];
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
    const mapped = values.map((item, index) => {
      let command = item;
      if (null != item.rootCommand) {
        dependencyMap(table[6]);
        obj = { rootCommand: null, command: null, applicationId: null };
        ({ rootCommand: obj2[0], rootCommand: obj2[1], applicationId: obj2[2] } = item);
        command = obj.buildCommand(obj);
      }
      return command;
    });
    callback = mapped.reduce((acc, item, index) => {
      acc[item.id] = item;
      return acc;
    }, {});
    let application;
    if (tmp9 != null) {
      let descriptor = tmp9.descriptor;
      if (descriptor != null) {
        application = descriptor.application;
      }
    }
    obj = { application, commands: null, sectionDescriptor: null, isGuildInstalled: null, isUserInstalled: null };
    const mapped1 = commands.map((item, index) => dependencyMap[item]);
    obj[1] = mapped1.filter(callback(sectionDescriptor[10]).isNotNullish);
    descriptor = undefined;
    if (tmp9 != null) {
      descriptor = tmp9.descriptor;
    }
    obj[2] = descriptor;
    obj[3] = null != tmp6;
    obj[4] = null != tmp2;
    return obj;
  }, items);
};
export const useAccessibleCommandsForApplication = function useAccessibleCommandsForApplication(channel, arg1, arg2) {
  obj = isUserInstalled;
  items = [channel];
  const _require = arg1;
  let commands = arg2;
  const memo = isUserInstalled.useMemo(() => ({ channel: closure_0, type: "channel" }), items);
  let tmp2 = callback3(true, true);
  let sectionDescriptor = tmp2;
  const tmp3 = callback(memo, true, true);
  let isGuildInstalled = tmp3;
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
        tmp2 = sections[callback];
      }
    }
    const result2 = isGuildInstalled.result;
    let tmp6;
    if (result2 != null) {
      const sections2 = result2.sections;
      if (sections2 != null) {
        tmp6 = sections2[callback];
      }
    }
    const result3 = sectionDescriptor.result;
    let tmp9;
    if (result3 != null) {
      const sections3 = result3.sections;
      if (sections3 != null) {
        tmp9 = sections3[callback];
      }
    }
    if (tmp9 == null) {
      const result4 = isGuildInstalled.result;
      let tmp11;
      if (result4 != null) {
        tmp11 = result4.sections[callback];
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
    const mapped = values.map((item, index) => {
      let command = item;
      if (null != item.rootCommand) {
        dependencyMap(table[6]);
        obj = { rootCommand: null, command: null, applicationId: null };
        ({ rootCommand: obj2[0], rootCommand: obj2[1], applicationId: obj2[2] } = item);
        command = obj.buildCommand(obj);
      }
      return command;
    });
    callback = mapped.reduce((acc, item, index) => {
      acc[item.id] = item;
      return acc;
    }, {});
    let application;
    if (tmp9 != null) {
      let descriptor = tmp9.descriptor;
      if (descriptor != null) {
        application = descriptor.application;
      }
    }
    obj = { application, commands: null, sectionDescriptor: null, isGuildInstalled: null, isUserInstalled: null };
    const mapped1 = commands.map((item, index) => dependencyMap[item]);
    obj[1] = mapped1.filter(callback(sectionDescriptor[10]).isNotNullish);
    descriptor = undefined;
    if (tmp9 != null) {
      descriptor = tmp9.descriptor;
    }
    obj[2] = descriptor;
    obj[3] = null != tmp6;
    obj[4] = null != tmp2;
    return obj;
  }, items1);
  commands = memo1.commands;
  sectionDescriptor = memo1.sectionDescriptor;
  isGuildInstalled = memo1.isGuildInstalled;
  isUserInstalled = memo1.isUserInstalled;
  const permissionContext = _require(sectionDescriptor[12]).usePermissionContext(channel, items);
  obj = {
    application: memo1.application,
    commands: obj.useMemo(() => {
      if (null != allowedForChannel) {
        let allowedForUser = null;
        if (null != allowedForUser.guild_id) {
          let permissions;
          if (sectionDescriptor != null) {
            permissions = sectionDescriptor.permissions;
          }
          allowedForUser = null;
          if (null != permissions) {
            obj = commands(sectionDescriptor[13]);
            allowedForUser = obj.computeAllowedForUser(sectionDescriptor.permissions, tmp.guild_id, permissionContext.userId, permissionContext.roleIds, permissionContext.isImpersonating);
          }
        }
        allowedForChannel = null;
        if (null != allowedForUser.guild_id) {
          let permissions1;
          if (sectionDescriptor != null) {
            permissions1 = sectionDescriptor.permissions;
          }
          allowedForChannel = null;
          if (null != permissions1) {
            allowedForChannel = commands(sectionDescriptor[13]).computeAllowedForChannel(sectionDescriptor.permissions, tmp, tmp.guild_id);
            const obj2 = commands(sectionDescriptor[13]);
          }
        }
        return arr.filter((item, index) => {
          commands(sectionDescriptor[13]);
          obj = { applicationAllowedForUser: allowedForUser, applicationAllowedForChannel: allowedForChannel, isGuildInstalled, isUserInstalled, commandBotId: null };
          let botId;
          if (closure_1_2 != null) {
            botId = closure_1_2.botId;
          }
          obj[4] = botId;
          return obj.hasAccess(item, permissionContext, obj) === allowedForUser(sectionDescriptor[13]).HasAccessResult.ALLOWED;
        });
      }
      arr = allowedForChannel;
    }, items2)
  };
  items2 = [commands, permissionContext, sectionDescriptor, isGuildInstalled, isUserInstalled, channel];
  return obj;
};