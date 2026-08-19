// discord_app/modules/app_launcher/utils/AppLauncherSearchUtils.tsx
import getShelfBadgeTypeIfActive from "AppLauncherUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";
import handleUserSettingsProtoStoreChange from "../../application_commands/ApplicationCommandFrecencyStore.tsx";
import getIndexKey from "../../application_commands/ApplicationCommandIndexStore.tsx";
import handleUserSettingsProtoStoreChange2 from "../../applications/ApplicationFrecencyStore.tsx";
import getSearchResults from "../../global_discovery_apps/stores/ApplicationDirectorySearchStore.tsx";
import { FetchState } from "../../global_discovery_apps/stores/ApplicationDirectorySearchStore.tsx";
import { BuiltInSectionId } from "../../application_commands/ApplicationCommandConstants.tsx";
import { COMMAND_SENTINEL } from "../../channel_autocomplete/ChannelAutocompleteConstants.tsx";

require = fn;
function useApplicationsInContext(allowFetch) {
  ({ context, onlyWithCommands } = allowFetch);
  let flag = allowFetch.allowFetch;
  if (flag === undefined) {
    flag = true;
  }
  const includeEmbeddedApps = allowFetch.includeEmbeddedApps;
  let includeBuiltIn = allowFetch.includeNonEmbeddedApps;
  let channel;
  if ("channel" === context.type) {
    channel = context.channel;
  }
  let obj = onlyWithCommands(8453);
  const items = [onlyWithCommands(1954).ApplicationCommandType.CHAT];
  const hasBaseAccessPermissions = obj.usePermissionContext(channel, items).hasBaseAccessPermissions;
  const tmp2 = callback2(context, hasBaseAccessPermissions, flag);
  let tmp3 = callback3(hasBaseAccessPermissions, flag);
  const items1 = [includeEmbeddedApps, includeBuiltIn, onlyWithCommands];
  const callback = React.useCallback((descriptor) => {
    const application = descriptor.descriptor.application;
    let tmp = null != application;
    if (tmp) {
      let tmp3 = !includeEmbeddedApps;
      if (includeEmbeddedApps) {
        tmp3 = !onlyWithCommands(dependencyMap[10]).isEmbeddedApp(application);
        const obj = onlyWithCommands(dependencyMap[10]);
      }
      let tmp6 = !tmp3;
      if (tmp3) {
        let tmp7 = null != application && includeBuiltIn;
        if (tmp7) {
          tmp7 = !onlyWithCommands(dependencyMap[10]).isEmbeddedApp(application);
          const obj2 = onlyWithCommands(dependencyMap[10]);
        }
        if (tmp7) {
          let tmp11 = !onlyWithCommands;
          if (onlyWithCommands) {
            const _Object = Object;
            tmp11 = Object.keys(descriptor.commands).length > 0;
          }
          tmp7 = tmp11;
        }
        tmp6 = tmp7;
      }
      tmp = tmp6;
    }
    return tmp;
  }, items1);
  const items2 = [];
  const set = new Set();
  if (null != tmp2.result) {
    let _Object = Object;
    let values = Object.values(tmp2.result.sections);
    for (const item10053 of values) {
      let application = item10053.descriptor.application;
      let tmp9 = application;
      let callbackResult = null != application;
      if (callbackResult) {
        callbackResult = callback(tmp8);
      }
      if (callbackResult) {
        let arr = items2.push(tmp9);
        let addResult = set.add(tmp9.id);
      }
      continue;
    }
  }
  if (null != tmp3.result) {
    const _Object2 = Object;
    values = Object.values(tmp3.result.sections);
    for (const item10070 of values) {
      let application2 = item10070.descriptor.application;
      let tmp17 = application2;
      let callbackResult1 = null != application2;
      if (callbackResult1) {
        callbackResult1 = !set.has(tmp17.id);
      }
      if (callbackResult1) {
        callbackResult1 = callback(item10070);
      }
      if (callbackResult1) {
        arr = items2.push(tmp17);
      }
      continue;
    }
  }
  if (includeBuiltIn) {
    includeBuiltIn = allowFetch.includeBuiltIn;
  }
  if (includeBuiltIn) {
    items2.push(onlyWithCommands(8447).FAKE_BUILT_IN_APP);
  }
  obj = { apps: items2, loading: null };
  let fetching;
  if (tmp2 != null) {
    fetching = tmp2.fetchState.fetching;
  }
  let tmp27 = true === fetching;
  if (!tmp27) {
    let fetching1;
    if (tmp3 != null) {
      fetching1 = tmp3.fetchState.fetching;
    }
    tmp27 = true === fetching1;
  }
  obj[1] = tmp27;
  return obj;
}
function sortApplicationFreceny(id, id2) {
  const scoreWithoutLoadingLatest = store.getScoreWithoutLoadingLatest(id.id);
  return store.getScoreWithoutLoadingLatest(id2.id) - scoreWithoutLoadingLatest;
}
function sortApplicationAlpha(FAKE_BUILT_IN_APP, FAKE_BUILT_IN_APP) {
  const sectionName = getShelfBadgeTypeIfActive.getSectionName(FAKE_BUILT_IN_APP);
  return callback(sectionName, getShelfBadgeTypeIfActive.getSectionName(FAKE_BUILT_IN_APP));
}
function sortCommandsAlpha(displayName, displayName2) {
  return callback(displayName.displayName, displayName2.displayName);
}
({ appLauncherOnlyCompareNames: error, getSection: closure_8, useContextIndexState: c9, useUserIndexState: c10 } = getIndexKey);
let result = require("obj132").fileFinishedImporting("modules/app_launcher/utils/AppLauncherSearchUtils.tsx");

export { useApplicationsInContext };
export const useApplicationCommandsInContext = function useApplicationCommandsInContext(context) {
  context = context.context;
  let flag = context.includeBuiltIn;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = context.allowFetch;
  if (flag2 === undefined) {
    flag2 = true;
  }
  const tmp = callback2(context, true, flag2);
  closure_2 = tmp;
  const tmp2 = callback3(true, flag2);
  closure_3 = tmp2;
  const items = [context, flag, tmp.fetchState.fetching, , , ];
  const result = tmp.result;
  let sections;
  if (result != null) {
    sections = result.sections;
  }
  items[3] = sections;
  items[4] = tmp2.fetchState.fetching;
  const result2 = tmp2.result;
  let sections1;
  if (result2 != null) {
    sections1 = result2.sections;
  }
  items[5] = sections1;
  return React.useMemo(() => {
    const result = obj.result;
    let sections;
    if (result != null) {
      sections = result.sections;
    }
    if (sections == null) {
      sections = {};
    }
    const result2 = item10038.result;
    let sections1;
    if (result2 != null) {
      sections1 = result2.sections;
    }
    if (sections1 == null) {
      sections1 = {};
    }
    let items = [...Object.keys(sections)];
    const keys = Object.keys(sections1);
    HermesBuiltin.arraySpread(keys.filter((item, index) => !(item in sections)), tmp);
    if (items1) {
      items.push(BuiltInSectionId.BUILT_IN);
    }
    items1 = [];
    obj = {};
    for (const item10038 of items) {
      let tmp5Result = tmp5();
      continue;
    }
    obj = { commands: items1, commandSectionMap: obj, loading: null };
    let tmp7 = true === obj.fetchState.fetching;
    if (!tmp7) {
      tmp7 = true === item10038.fetchState.fetching;
    }
    obj[2] = tmp7;
    return obj;
  }, items);
};
export const filterApplicationAllowed = function filterApplicationAllowed(type) {
  const _require = type;
  let channel;
  if ("channel" === type.type) {
    channel = type.channel;
  }
  const items = [require("../../../flow/Server.tsx").ApplicationCommandType.CHAT, require("../../../flow/Server.tsx").ApplicationCommandType.PRIMARY_ENTRY_POINT];
  closure_1 = require("../../application_commands/CommandPermissionContext.tsx").buildPermissionContext(channel, items);
  return (id) => {
    ({ context, userId, roleIds, isImpersonating } = closure_1);
    const tmp = commandSectionMap(descriptor, id.id);
    descriptor = tmp.descriptor;
    ({ sectionCommands, isGuildInstalled: closure_1, isUserInstalled: closure_2 } = tmp);
    let guild_id;
    if (context != null) {
      guild_id = context.guild_id;
    }
    let allowedForUser = null;
    if (null != guild_id) {
      let obj = closure_1_2(closure_1_3[11]);
      let permissions;
      if (descriptor != null) {
        permissions = descriptor.permissions;
      }
      allowedForUser = obj.computeAllowedForUser(permissions, context.guild_id, userId, roleIds, isImpersonating);
    }
    let guild_id1;
    if (context != null) {
      guild_id1 = context.guild_id;
    }
    let allowedForChannel = null;
    if (null != guild_id1) {
      let permissions1;
      if (descriptor != null) {
        permissions1 = descriptor.permissions;
      }
      allowedForChannel = closure_1_2(closure_1_3[11]).computeAllowedForChannel(permissions1, context, context.guild_id);
      const obj2 = closure_1_2(closure_1_3[11]);
    }
    let tmp17 = null != sectionCommands;
    if (tmp17) {
      tmp17 = sectionCommands.length > 0;
    }
    let someResult = !tmp17;
    if (tmp17) {
      someResult = sectionCommands.some((item, index) => {
        closure_2_2(closure_2_3[11]);
        const obj = { applicationAllowedForUser: allowedForUser, applicationAllowedForChannel: allowedForChannel, commandBotId: null, isGuildInstalled: null, isUserInstalled: null };
        let botId;
        if (descriptor != null) {
          botId = descriptor.botId;
        }
        obj[2] = botId;
        obj[3] = closure_1;
        obj[4] = closure_2;
        return obj.hasAccess(item, closure_1_1, obj) === descriptor(closure_2_3[11]).HasAccessResult.ALLOWED;
      });
    }
    return someResult;
  };
};
export function defaultApplicationBucketing(arg0) {
  const items = [
    (FAKE_BUILT_IN_APP) => {
      const sectionName = set(closure_1_3[10]).getSectionName(FAKE_BUILT_IN_APP);
      const obj = set(closure_1_3[10]);
      return sectionName.toLocaleLowerCase().startsWith(set.toLocaleLowerCase());
    },
  ,
  ,

  ];
  items[1] = (FAKE_BUILT_IN_APP) => {
    const sectionName = set(closure_1_3[10]).getSectionName(FAKE_BUILT_IN_APP);
    const obj = set(closure_1_3[10]);
    return sectionName.toLocaleLowerCase().includes(set.toLocaleLowerCase());
  };
  items[2] = (FAKE_BUILT_IN_APP) => {
    const sectionDescription = set(closure_1_3[10]).getSectionDescription(FAKE_BUILT_IN_APP);
    let toLocaleLowerCaseResult;
    if (sectionDescription != null) {
      toLocaleLowerCaseResult = sectionDescription.toLocaleLowerCase();
    }
    flag = undefined;
    if (toLocaleLowerCaseResult != null) {
      flag = toLocaleLowerCaseResult.startsWith(set.toLocaleLowerCase());
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  };
  closure_0 = arg0;
  items[3] = (FAKE_BUILT_IN_APP) => {
    const sectionDescription = set(closure_1_3[10]).getSectionDescription(FAKE_BUILT_IN_APP);
    let toLocaleLowerCaseResult;
    if (sectionDescription != null) {
      toLocaleLowerCaseResult = sectionDescription.toLocaleLowerCase();
    }
    flag = undefined;
    if (toLocaleLowerCaseResult != null) {
      flag = toLocaleLowerCaseResult.includes(set.toLocaleLowerCase());
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  };
  return items;
}
export function bucketApplicationNameStartsWith(arg0) {
  closure_0 = arg0;
  return (FAKE_BUILT_IN_APP) => {
    const sectionName = set(closure_1_3[10]).getSectionName(FAKE_BUILT_IN_APP);
    const obj = set(closure_1_3[10]);
    return sectionName.toLocaleLowerCase().startsWith(set.toLocaleLowerCase());
  };
}
export function bucketApplicationNameContains(arg0) {
  closure_0 = arg0;
  return (FAKE_BUILT_IN_APP) => {
    const sectionName = set(closure_1_3[10]).getSectionName(FAKE_BUILT_IN_APP);
    const obj = set(closure_1_3[10]);
    return sectionName.toLocaleLowerCase().includes(set.toLocaleLowerCase());
  };
}
export function bucketApplicationDescriptionStartsWith(arg0) {
  closure_0 = arg0;
  return (FAKE_BUILT_IN_APP) => {
    const sectionDescription = set(closure_1_3[10]).getSectionDescription(FAKE_BUILT_IN_APP);
    let toLocaleLowerCaseResult;
    if (sectionDescription != null) {
      toLocaleLowerCaseResult = sectionDescription.toLocaleLowerCase();
    }
    flag = undefined;
    if (toLocaleLowerCaseResult != null) {
      flag = toLocaleLowerCaseResult.startsWith(set.toLocaleLowerCase());
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  };
}
export function bucketApplicationDescriptionContains(arg0) {
  closure_0 = arg0;
  return (FAKE_BUILT_IN_APP) => {
    const sectionDescription = set(closure_1_3[10]).getSectionDescription(FAKE_BUILT_IN_APP);
    let toLocaleLowerCaseResult;
    if (sectionDescription != null) {
      toLocaleLowerCaseResult = sectionDescription.toLocaleLowerCase();
    }
    flag = undefined;
    if (toLocaleLowerCaseResult != null) {
      flag = toLocaleLowerCaseResult.includes(set.toLocaleLowerCase());
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  };
}
export { sortApplicationFreceny };
export { sortApplicationAlpha };
export const filterCommandAllowed = function filterCommandAllowed(type) {
  const _require = type;
  let channel;
  if ("channel" === type.type) {
    channel = type.channel;
  }
  const items = [require("../../../flow/Server.tsx").ApplicationCommandType.CHAT];
  closure_1 = require("../../application_commands/CommandPermissionContext.tsx").buildPermissionContext(channel, items);
  closure_2 = {};
  return (applicationId) => {
    ({ context, userId, roleIds, isImpersonating } = closure_1);
    if (!(applicationId.applicationId in callback)) {
      const tmp5 = commandSectionMap(obj, applicationId.applicationId);
      const descriptor = tmp5.descriptor;
      let guild_id;
      ({ isGuildInstalled, isUserInstalled } = tmp5);
      if (context != null) {
        guild_id = context.guild_id;
      }
      let allowedForUser = null;
      if (null != guild_id) {
        obj = callback(closure_1_3[11]);
        let permissions;
        if (descriptor != null) {
          permissions = descriptor.permissions;
        }
        allowedForUser = obj.computeAllowedForUser(permissions, context.guild_id, userId, roleIds, isImpersonating);
      }
      let guild_id1;
      if (context != null) {
        guild_id1 = context.guild_id;
      }
      let allowedForChannel = null;
      if (null != guild_id1) {
        let permissions1;
        if (descriptor != null) {
          permissions1 = descriptor.permissions;
        }
        allowedForChannel = callback(closure_1_3[11]).computeAllowedForChannel(permissions1, context, context.guild_id);
        const obj2 = callback(closure_1_3[11]);
      }
      obj = { descriptor: null, applicationAllowedForUser: null, applicationAllowedForChannel: null, isGuildInstalled: null, isUserInstalled: null };
      obj[0] = descriptor;
      obj[1] = allowedForUser;
      obj[2] = allowedForChannel;
      obj[3] = isGuildInstalled;
      obj[4] = isUserInstalled;
      callback[applicationId.applicationId] = obj;
    }
    const descriptor2 = tmp22.descriptor;
    ({ applicationAllowedForChannel, applicationAllowedForUser, isGuildInstalled: isGuildInstalled2, isUserInstalled: isUserInstalled2 } = callback[applicationId.applicationId]);
    obj = { applicationAllowedForUser, applicationAllowedForChannel, commandBotId: null, isGuildInstalled: null, isUserInstalled: null };
    let botId;
    if (descriptor2 != null) {
      botId = descriptor2.botId;
    }
    obj[2] = botId;
    obj[3] = isGuildInstalled2;
    obj[4] = isUserInstalled2;
    const obj4 = callback(closure_1_3[11]);
    return callback(closure_1_3[11]).hasAccess(applicationId, closure_1, obj) === obj(closure_1_3[11]).HasAccessResult.ALLOWED;
  };
};
export const defaultCommandBucketing = function defaultCommandBucketing(str) {
  closure_0 = str;
  const items = [
    (arg0) => {
      ({ untranslatedName, displayName } = arg0);
      return untranslatedName.startsWith(obj) || displayName.startsWith(obj);
    },
  ,
  ,
  ,

  ];
  let parts;
  if (str != null) {
    parts = str.split(" ");
  }
  const substr = parts.slice(1);
  closure_1 = substr.join(" ");
  items[1] = (arg0) => {
    ({ untranslatedName, displayName } = arg0);
    if (untranslatedName.startsWith(obj)) {
      const parts = untranslatedName.split(" ");
      const substr = parts.slice(1);
      const joined = substr.join(" ");
      if (joined.startsWith(closure_1)) {
        return true;
      }
    }
    if (displayName.startsWith(obj)) {
      const parts1 = displayName.split(" ");
      const substr1 = parts1.slice(1);
      const joined1 = substr1.join(" ");
      if (joined1.startsWith(closure_1)) {
        return true;
      }
    }
    return false;
  };
  items[2] = (arg0) => {
    ({ untranslatedName, displayName } = arg0);
    return untranslatedName.includes(obj) || displayName.includes(obj);
  };
  items[3] = (options) => {
    options = options.options;
    if (options == null) {
      options = [];
    }
    const iter = options[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let name = nextResult.name;
      let tmp2 = name;
      let serverLocalizedName = nextResult.serverLocalizedName;
      if (!name.startsWith(obj)) {
        let _HermesInternal = HermesInternal;
        let combined = "" + options.untranslatedName + " " + tmp2;
        if (!combined.startsWith(obj)) {
          if (null == options.displayName) {
            if (null != serverLocalizedName) {
              if (!serverLocalizedName.startsWith(obj)) {
                let _HermesInternal3 = HermesInternal;
                let combined1 = "" + options.untranslatedName + " " + serverLocalizedName;
                if (!combined1.startsWith(obj)) {
                  if (null != options.displayName) {
                    let _HermesInternal4 = HermesInternal;
                    let combined2 = "" + options.displayName + " " + serverLocalizedName;
                  }
                }
              }
              iter.return();
              flag = true;
              return true;
            }
            continue;
          } else {
            let _HermesInternal2 = HermesInternal;
            let combined3 = "" + options.displayName + " " + tmp2;
          }
        }
      }
      iter.return();
      flag2 = true;
      return true;
    }
    return false;
  };
  closure_0 = str;
  items[4] = (options) => {
    options = options.options;
    if (options == null) {
      options = [];
    }
    for (const item10008 of options) {
      ({ name, serverLocalizedName } = item10008);
      if (!name.includes(obj)) {
        let hasItem;
        if (serverLocalizedName != null) {
          hasItem = serverLocalizedName.includes(obj);
        }
      }
      obj.return();
      flag = true;
      return true;
    }
    return false;
  };
  return items;
};
export function bucketRootCommandNameStartsWith(arg0) {
  closure_0 = arg0;
  return (arg0) => {
    ({ untranslatedName, displayName } = arg0);
    return untranslatedName.startsWith(obj) || displayName.startsWith(obj);
  };
}
export const bucketFullCommandNameStartsWith = function bucketFullCommandNameStartsWith(str) {
  let parts;
  if (str != null) {
    parts = str.split(" ");
  }
  closure_0 = parts[0];
  const substr = parts.slice(1);
  closure_1 = substr.join(" ");
  return (arg0) => {
    ({ untranslatedName, displayName } = arg0);
    if (untranslatedName.startsWith(obj)) {
      const parts = untranslatedName.split(" ");
      const substr = parts.slice(1);
      const joined = substr.join(" ");
      if (joined.startsWith(closure_1)) {
        return true;
      }
    }
    if (displayName.startsWith(obj)) {
      const parts1 = displayName.split(" ");
      const substr1 = parts1.slice(1);
      const joined1 = substr1.join(" ");
      if (joined1.startsWith(closure_1)) {
        return true;
      }
    }
    return false;
  };
};
export function bucketCommandNameContains(arg0) {
  closure_0 = arg0;
  return (arg0) => {
    ({ untranslatedName, displayName } = arg0);
    return untranslatedName.includes(obj) || displayName.includes(obj);
  };
}
export function bucketOptionNameStartsWithOrCommandAndOptionStartsWith(arg0) {
  closure_0 = arg0;
  return (options) => {
    options = options.options;
    if (options == null) {
      options = [];
    }
    const iter = options[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let name = nextResult.name;
      let tmp2 = name;
      let serverLocalizedName = nextResult.serverLocalizedName;
      if (!name.startsWith(obj)) {
        let _HermesInternal = HermesInternal;
        let combined = "" + options.untranslatedName + " " + tmp2;
        if (!combined.startsWith(obj)) {
          if (null == options.displayName) {
            if (null != serverLocalizedName) {
              if (!serverLocalizedName.startsWith(obj)) {
                let _HermesInternal3 = HermesInternal;
                let combined1 = "" + options.untranslatedName + " " + serverLocalizedName;
                if (!combined1.startsWith(obj)) {
                  if (null != options.displayName) {
                    let _HermesInternal4 = HermesInternal;
                    let combined2 = "" + options.displayName + " " + serverLocalizedName;
                  }
                }
              }
              iter.return();
              flag = true;
              return true;
            }
            continue;
          } else {
            let _HermesInternal2 = HermesInternal;
            let combined3 = "" + options.displayName + " " + tmp2;
          }
        }
      }
      iter.return();
      flag2 = true;
      return true;
    }
    return false;
  };
}
export function bucketCommandOptionNameContains(arg0) {
  closure_0 = arg0;
  return (options) => {
    options = options.options;
    if (options == null) {
      options = [];
    }
    for (const item10008 of options) {
      ({ name, serverLocalizedName } = item10008);
      if (!name.includes(obj)) {
        let hasItem;
        if (serverLocalizedName != null) {
          hasItem = serverLocalizedName.includes(obj);
        }
      }
      obj.return();
      flag = true;
      return true;
    }
    return false;
  };
}
export function bucketCommandSectionNameStartsWith(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = {};
  return (applicationId) => {
    const lib = applicationId;
    if (applicationId.applicationId in table) {
      return table[applicationId.applicationId];
    } else {
      let FAKE_BUILT_IN_APP = lib.find((item, index) => item.id === applicationId.applicationId);
      if (FAKE_BUILT_IN_APP == null) {
        FAKE_BUILT_IN_APP = tmp3(dependencyMap[10]).FAKE_BUILT_IN_APP;
      }
      const sectionName = lib(dependencyMap[10]).getSectionName(FAKE_BUILT_IN_APP);
      const obj = lib(dependencyMap[10]);
      tmp3 = lib;
      const startsWithResult = sectionName.toLocaleLowerCase().startsWith(closure_1.toLocaleLowerCase());
      table[applicationId.applicationId] = startsWithResult;
      return startsWithResult;
    }
  };
}
export function bucketCommandSectionNameContains(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = {};
  return (applicationId) => {
    const lib = applicationId;
    if (applicationId.applicationId in table) {
      return table[applicationId.applicationId];
    } else {
      let FAKE_BUILT_IN_APP = lib.find((item, index) => item.id === applicationId.applicationId);
      if (FAKE_BUILT_IN_APP == null) {
        FAKE_BUILT_IN_APP = tmp3(dependencyMap[10]).FAKE_BUILT_IN_APP;
      }
      const sectionName = lib(dependencyMap[10]).getSectionName(FAKE_BUILT_IN_APP);
      const obj = lib(dependencyMap[10]);
      tmp3 = lib;
      const hasItem = sectionName.toLocaleLowerCase().includes(closure_1.toLocaleLowerCase());
      table[applicationId.applicationId] = hasItem;
      return hasItem;
    }
  };
}
export function defaultCommandsSort(arg0) {
  closure_0 = arg0;
  const items = [
    (arg0, arg1) => {
      const scoreWithoutLoadingLatest = flag3.getScoreWithoutLoadingLatest(obj, arg0);
      return flag3.getScoreWithoutLoadingLatest(obj, arg1) - scoreWithoutLoadingLatest;
    },
    sortCommandsAlpha
  ];
  return items;
}
export function sortCommandsByFreceny(arg0) {
  closure_0 = arg0;
  return (arg0, arg1) => {
    const scoreWithoutLoadingLatest = flag3.getScoreWithoutLoadingLatest(obj, arg0);
    return flag3.getScoreWithoutLoadingLatest(obj, arg1) - scoreWithoutLoadingLatest;
  };
}
export { sortCommandsAlpha };
export const useLocalSearchResults = function useLocalSearchResults(context) {
  context = context.context;
  let context2 = context;
  let flag4 = str;
  const commandLimit = context.commandLimit;
  closure_2 = commandLimit;
  const applicationLimit = context.applicationLimit;
  dependencyMap = applicationLimit;
  let flag = context.searchesCommands;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = context.searchesBots;
  if (flag2 === undefined) {
    flag2 = true;
  }
  let flag3 = context.searchesActivities;
  if (flag3 === undefined) {
    flag3 = true;
  }
  let commands;
  let commandSectionMap;
  let apps;
  let callback3;
  let memo1;
  let tmp = str;
  if (context.query.startsWith("" + COMMAND_SENTINEL)) {
    let substr = str.substring(1);
    flag4 = substr;
    tmp = substr;
  }
  let obj = { context, includeBuiltIn: true };
  context2 = obj.context;
  flag4 = obj.includeBuiltIn;
  if (flag4 === undefined) {
    flag4 = true;
  }
  let flag5 = obj.allowFetch;
  if (flag5 === undefined) {
    flag5 = true;
  }
  const tmp3 = apps(context2, true, flag5);
  closure_2 = tmp3;
  let tmp4 = callback3(true, flag5);
  dependencyMap = tmp4;
  let items = [context2, flag4, tmp3.fetchState.fetching, , , ];
  let result = tmp3.result;
  let sections;
  if (result != null) {
    sections = result.sections;
  }
  items[3] = sections;
  items[4] = tmp4.fetchState.fetching;
  let result2 = tmp4.result;
  let sections1;
  if (result2 != null) {
    sections1 = result2.sections;
  }
  items[5] = sections1;
  const memo = flag2.useMemo(() => {
    const result = obj.result;
    let sections;
    if (result != null) {
      sections = result.sections;
    }
    if (sections == null) {
      sections = {};
    }
    const result2 = item10038.result;
    let sections1;
    if (result2 != null) {
      sections1 = result2.sections;
    }
    if (sections1 == null) {
      sections1 = {};
    }
    let items = [...Object.keys(sections)];
    const keys = Object.keys(sections1);
    HermesBuiltin.arraySpread(keys.filter((item, index) => !(item in sections)), tmp);
    if (items1) {
      items.push(BuiltInSectionId.BUILT_IN);
    }
    items1 = [];
    obj = {};
    for (const item10038 of items) {
      let tmp5Result = tmp5();
      continue;
    }
    obj = { commands: items1, commandSectionMap: obj, loading: null };
    let tmp7 = true === obj.fetchState.fetching;
    if (!tmp7) {
      tmp7 = true === item10038.fetchState.fetching;
    }
    obj[2] = tmp7;
    return obj;
  }, items);
  commands = memo.commands;
  commandSectionMap = memo.commandSectionMap;
  let loading = memo.loading;
  apps = useApplicationsInContext({ context, onlyWithCommands: true, includeBuiltIn: true, includeEmbeddedApps: flag3, includeNonEmbeddedApps: flag2 }).apps;
  let guild_id = null;
  if ("channel" === context.type) {
    guild_id = context.channel.guild_id;
  }
  const tmp8Result = flag4(11212)({ guildId: guild_id });
  callback3 = tmp8Result;
  let items1 = [flag, commands, commandLimit, context, tmp];
  memo1 = obj2.useMemo(() => {
    if (flag) {
      context2(11246);
      let obj = { limit: null, filterPredicates: null, bucketPredicates: null, sortComparers: null };
      obj[0] = closure_2;
      closure_1 = undefined;
      closure_2 = undefined;
      let channel;
      if ("channel" === obj.type) {
        channel = tmp5.channel;
      }
      const items = [context2(1954).ApplicationCommandType.CHAT];
      closure_1 = context2(8453).buildPermissionContext(channel, items);
      closure_2 = {};
      const items1 = [
        (applicationId) => {
            ({ context, userId, roleIds, isImpersonating } = closure_1);
            if (!(applicationId.applicationId in callback)) {
              const tmp5 = commandSectionMap(obj, applicationId.applicationId);
              const descriptor = tmp5.descriptor;
              let guild_id;
              ({ isGuildInstalled, isUserInstalled } = tmp5);
              if (context != null) {
                guild_id = context.guild_id;
              }
              let allowedForUser = null;
              if (null != guild_id) {
                obj = callback(closure_1_3[11]);
                let permissions;
                if (descriptor != null) {
                  permissions = descriptor.permissions;
                }
                allowedForUser = obj.computeAllowedForUser(permissions, context.guild_id, userId, roleIds, isImpersonating);
              }
              let guild_id1;
              if (context != null) {
                guild_id1 = context.guild_id;
              }
              let allowedForChannel = null;
              if (null != guild_id1) {
                let permissions1;
                if (descriptor != null) {
                  permissions1 = descriptor.permissions;
                }
                allowedForChannel = callback(closure_1_3[11]).computeAllowedForChannel(permissions1, context, context.guild_id);
                const obj2 = callback(closure_1_3[11]);
              }
              obj = { descriptor: null, applicationAllowedForUser: null, applicationAllowedForChannel: null, isGuildInstalled: null, isUserInstalled: null };
              obj[0] = descriptor;
              obj[1] = allowedForUser;
              obj[2] = allowedForChannel;
              obj[3] = isGuildInstalled;
              obj[4] = isUserInstalled;
              callback[applicationId.applicationId] = obj;
            }
            const descriptor2 = tmp22.descriptor;
            ({ applicationAllowedForChannel, applicationAllowedForUser, isGuildInstalled: isGuildInstalled2, isUserInstalled: isUserInstalled2 } = callback[applicationId.applicationId]);
            obj = { applicationAllowedForUser, applicationAllowedForChannel, commandBotId: null, isGuildInstalled: null, isUserInstalled: null };
            let botId;
            if (descriptor2 != null) {
              botId = descriptor2.botId;
            }
            obj[2] = botId;
            obj[3] = isGuildInstalled2;
            obj[4] = isUserInstalled2;
            const obj4 = callback(closure_1_3[11]);
            return callback(closure_1_3[11]).hasAccess(applicationId, closure_1, obj) === obj(closure_1_3[11]).HasAccessResult.ALLOWED;
          }
      ];
      obj[1] = items1;
      const items2 = [
        (arg0) => {
            ({ untranslatedName, displayName } = arg0);
            return untranslatedName.startsWith(obj) || displayName.startsWith(obj);
          },
    ,
    ,
    ,

      ];
      obj = undefined;
      closure_1 = undefined;
      let parts;
      if (closure_1 != null) {
        parts = str2.split(" ");
      }
      let substr = parts.slice(1);
      closure_1 = substr.join(" ");
      items2[1] = (arg0) => {
        ({ untranslatedName, displayName } = arg0);
        if (untranslatedName.startsWith(obj)) {
          const parts = untranslatedName.split(" ");
          const substr = parts.slice(1);
          const joined = substr.join(" ");
          if (joined.startsWith(closure_1)) {
            return true;
          }
        }
        if (displayName.startsWith(obj)) {
          const parts1 = displayName.split(" ");
          const substr1 = parts1.slice(1);
          const joined1 = substr1.join(" ");
          if (joined1.startsWith(closure_1)) {
            return true;
          }
        }
        return false;
      };
      items2[2] = (arg0) => {
        ({ untranslatedName, displayName } = arg0);
        return untranslatedName.includes(obj) || displayName.includes(obj);
      };
      items2[3] = (options) => {
        options = options.options;
        if (options == null) {
          options = [];
        }
        const iter = options[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let name = nextResult.name;
          let tmp2 = name;
          let serverLocalizedName = nextResult.serverLocalizedName;
          if (!name.startsWith(obj)) {
            let _HermesInternal = HermesInternal;
            let combined = "" + options.untranslatedName + " " + tmp2;
            if (!combined.startsWith(obj)) {
              if (null == options.displayName) {
                if (null != serverLocalizedName) {
                  if (!serverLocalizedName.startsWith(obj)) {
                    let _HermesInternal3 = HermesInternal;
                    let combined1 = "" + options.untranslatedName + " " + serverLocalizedName;
                    if (!combined1.startsWith(obj)) {
                      if (null != options.displayName) {
                        let _HermesInternal4 = HermesInternal;
                        let combined2 = "" + options.displayName + " " + serverLocalizedName;
                      }
                    }
                  }
                  iter.return();
                  flag = true;
                  return true;
                }
                continue;
              } else {
                let _HermesInternal2 = HermesInternal;
                let combined3 = "" + options.displayName + " " + tmp2;
              }
            }
          }
          iter.return();
          flag2 = true;
          return true;
        }
        return false;
      };
      obj = str2;
      items2[4] = (options) => {
        options = options.options;
        if (options == null) {
          options = [];
        }
        for (const item10008 of options) {
          ({ name, serverLocalizedName } = item10008);
          if (!name.includes(obj)) {
            let hasItem;
            if (serverLocalizedName != null) {
              hasItem = serverLocalizedName.includes(obj);
            }
          }
          obj.return();
          flag = true;
          return true;
        }
        return false;
      };
      obj[2] = items2;
      let channel1;
      if ("channel" === obj.type) {
        channel1 = tmp5.channel;
      }
      obj = { channel: null };
      obj[0] = channel1;
      const items3 = [
        (arg0, arg1) => {
            const scoreWithoutLoadingLatest = flag3.getScoreWithoutLoadingLatest(obj, arg0);
            return flag3.getScoreWithoutLoadingLatest(obj, arg1) - scoreWithoutLoadingLatest;
          },
        sortCommandsAlpha
      ];
      obj[3] = items3;
      let queryDataResult = obj.queryData(commands, obj);
      const obj3 = context2(8453);
    } else {
      queryDataResult = [];
    }
    return queryDataResult;
  }, items1);
  let items2 = [apps, memo1, commandSectionMap];
  const memo2 = obj2.useMemo(() => {
    if (0 === memo1.length) {
      return [];
    } else {
      const _Map = Map;
      const map = new Map(apps.map((item, index) => {
        const items = [item.id, item];
        return items;
      }));
      return flag4(12).compact(memo1.map((item, index) => {
        const value = map.get(item.applicationId);
        let tmp2 = null;
        if (null != value) {
          const obj = { command: null, application: null, section: null };
          obj[0] = item;
          obj[1] = value;
          let tmp4 = commandSectionMap[item.id];
          if (tmp4 == null) {
            tmp4 = null;
          }
          obj[2] = tmp4;
          tmp2 = obj;
        }
        return tmp2;
      }));
    }
  }, items2);
  let items3 = [flag2, flag3, applicationLimit, context, tmp, apps, tmp8Result];
  const memo3 = obj2.useMemo(() => {
    const items = [];
    if (flag3) {
      const _Set = Set;
      const set = new Set(apps.map((item, index) => item.id));
      let type = set;
      const push = items.push;
      const items1 = [];
      HermesBuiltin.arraySpread(apps, 0);
      HermesBuiltin.apply(items1, items);
      const push2 = items.push;
      const found = closure_10.filter((item, index) => !set.has(item.application.id));
      const items2 = [];
      HermesBuiltin.arraySpread(found.map((item, index) => item.application), 0);
      HermesBuiltin.apply(items2, items);
      let tmp2 = items;
    } else {
      tmp2 = items;
      if (flag2) {
        tmp2 = apps;
      }
    }
    context2(11246);
    let obj = { limit: dependencyMap, filterPredicates: null, bucketPredicates: null, sortComparers: null };
    closure_1 = undefined;
    let channel;
    if ("channel" === type.type) {
      channel = type.channel;
    }
    const items3 = [context2(1954).ApplicationCommandType.CHAT, context2(1954).ApplicationCommandType.PRIMARY_ENTRY_POINT];
    closure_1 = context2(8453).buildPermissionContext(channel, items3);
    const items4 = [
      (id) => {
        ({ context, userId, roleIds, isImpersonating } = closure_1);
        const tmp = commandSectionMap(descriptor, id.id);
        descriptor = tmp.descriptor;
        ({ sectionCommands, isGuildInstalled: closure_1, isUserInstalled: closure_2 } = tmp);
        let guild_id;
        if (context != null) {
          guild_id = context.guild_id;
        }
        let allowedForUser = null;
        if (null != guild_id) {
          let obj = closure_1_2(closure_1_3[11]);
          let permissions;
          if (descriptor != null) {
            permissions = descriptor.permissions;
          }
          allowedForUser = obj.computeAllowedForUser(permissions, context.guild_id, userId, roleIds, isImpersonating);
        }
        let guild_id1;
        if (context != null) {
          guild_id1 = context.guild_id;
        }
        let allowedForChannel = null;
        if (null != guild_id1) {
          let permissions1;
          if (descriptor != null) {
            permissions1 = descriptor.permissions;
          }
          allowedForChannel = closure_1_2(closure_1_3[11]).computeAllowedForChannel(permissions1, context, context.guild_id);
          const obj2 = closure_1_2(closure_1_3[11]);
        }
        let tmp17 = null != sectionCommands;
        if (tmp17) {
          tmp17 = sectionCommands.length > 0;
        }
        let someResult = !tmp17;
        if (tmp17) {
          someResult = sectionCommands.some((item, index) => {
            closure_2_2(closure_2_3[11]);
            const obj = { applicationAllowedForUser: allowedForUser, applicationAllowedForChannel: allowedForChannel, commandBotId: null, isGuildInstalled: null, isUserInstalled: null };
            let botId;
            if (descriptor != null) {
              botId = descriptor.botId;
            }
            obj[2] = botId;
            obj[3] = closure_1;
            obj[4] = closure_2;
            return obj.hasAccess(item, closure_1_1, obj) === descriptor(closure_2_3[11]).HasAccessResult.ALLOWED;
          });
        }
        return someResult;
      }
    ];
    obj[1] = items4;
    const items5 = [
      (FAKE_BUILT_IN_APP) => {
        const sectionName = set(closure_1_3[10]).getSectionName(FAKE_BUILT_IN_APP);
        const obj = set(closure_1_3[10]);
        return sectionName.toLocaleLowerCase().startsWith(set.toLocaleLowerCase());
      },
    ,
    ,

    ];
    items5[1] = (FAKE_BUILT_IN_APP) => {
      const sectionName = set(closure_1_3[10]).getSectionName(FAKE_BUILT_IN_APP);
      const obj = set(closure_1_3[10]);
      return sectionName.toLocaleLowerCase().includes(set.toLocaleLowerCase());
    };
    items5[2] = (FAKE_BUILT_IN_APP) => {
      const sectionDescription = set(closure_1_3[10]).getSectionDescription(FAKE_BUILT_IN_APP);
      let toLocaleLowerCaseResult;
      if (sectionDescription != null) {
        toLocaleLowerCaseResult = sectionDescription.toLocaleLowerCase();
      }
      flag = undefined;
      if (toLocaleLowerCaseResult != null) {
        flag = toLocaleLowerCaseResult.startsWith(set.toLocaleLowerCase());
      }
      if (flag == null) {
        flag = false;
      }
      return flag;
    };
    type = closure_1;
    items5[3] = (FAKE_BUILT_IN_APP) => {
      const sectionDescription = set(closure_1_3[10]).getSectionDescription(FAKE_BUILT_IN_APP);
      let toLocaleLowerCaseResult;
      if (sectionDescription != null) {
        toLocaleLowerCaseResult = sectionDescription.toLocaleLowerCase();
      }
      flag = undefined;
      if (toLocaleLowerCaseResult != null) {
        flag = toLocaleLowerCaseResult.includes(set.toLocaleLowerCase());
      }
      if (flag == null) {
        flag = false;
      }
      return flag;
    };
    obj[2] = items5;
    const items6 = [sortApplicationFreceny, sortApplicationAlpha];
    obj[3] = items6;
    return obj.queryData(tmp2, obj);
  }, items3);
  obj = { commandResults: memo2, hasCommandResults: tmp12, applicationResults: memo3, hasApplicationResults: tmp13, isEmptyState: null, loading: null };
  let tmp14 = !tmp12;
  if (memo2.length <= 0) {
    tmp14 = !tmp13;
  }
  obj[4] = tmp14;
  if (loading) {
    loading = flag;
  }
  obj[5] = loading;
  return obj;
};
export const useGlobalSearchResults = function useGlobalSearchResults(fetches) {
  ({ context, query } = fetches);
  let substr = query;
  let flag = fetches.fetches;
  if (flag === undefined) {
    flag = true;
  }
  let num = fetches.pageLimit;
  if (num === undefined) {
    num = Infinity;
  }
  dependencyMap = undefined;
  let guild_id;
  let first;
  closure_6 = undefined;
  let ref;
  let fetchState;
  let totalPages;
  let memo;
  let callback1;
  let tmp = query;
  if (query.startsWith("" + COMMAND_SENTINEL)) {
    substr = query.substring(1);
    tmp = substr;
  }
  const tmp5 = fetches.entrypoint === substr(9566).AppLauncherEntrypoint.VOICE;
  dependencyMap = tmp5;
  guild_id = undefined;
  if ("channel" === context.type) {
    guild_id = context.channel.guild_id;
  }
  const tmp7 = guild_id(first.useState(1), 2);
  first = tmp7[0];
  closure_6 = tmp7[1];
  ref = first.useRef(first);
  ref.current = first;
  const items = [closure_12];
  const items1 = [tmp, guild_id, first, tmp5];
  const stateFromStoresObject = substr(589).useStateFromStoresObject(items, () => {
    let obj = { query: substr, guildId: guild_id, page: first, integrationType: substr(8770).ApplicationIntegrationType.USER_INSTALL, minUserInstallCommandCount: 1, excludeAppsWithCustomInstallUrl: true, excludeNonEmbeddedApps: dependencyMap, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: true, source: substr(11245).SearchAppsRequestSource.APP_LAUNCHER };
    obj[0] = closure_1_12.getFetchState(obj);
    obj = { query: substr, guildId: guild_id, page: first, integrationType: substr(8770).ApplicationIntegrationType.USER_INSTALL, minUserInstallCommandCount: 1, excludeAppsWithCustomInstallUrl: true, excludeNonEmbeddedApps: dependencyMap, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: true, source: substr(11245).SearchAppsRequestSource.APP_LAUNCHER };
    const searchResults = closure_1_12.getSearchResults(obj);
    num = undefined;
    if (searchResults != null) {
      num = searchResults.totalPages;
    }
    if (num == null) {
      num = 0;
    }
    obj[1] = num;
    return obj;
  }, items1);
  fetchState = stateFromStoresObject.fetchState;
  totalPages = stateFromStoresObject.totalPages;
  const items2 = [fetchState, guild_id, tmp, first, tmp5];
  memo = first.useMemo(() => {
    if (fetchState !== FetchState.FETCHED) {
      if (tmp3 !== FetchState.ERROR) {
        let diff = first - 1;
      }
      const obj = { length: null };
      obj[0] = diff;
      return tmp2(obj, (arg0, arg1) => {
        const searchResults = closure_1_12.getSearchResults({ query: closure_0, guildId: closure_4, page: arg1 + 1, integrationType: substr(closure_1_3[17]).ApplicationIntegrationType.USER_INSTALL, minUserInstallCommandCount: 1, excludeAppsWithCustomInstallUrl: true, excludeNonEmbeddedApps: closure_3, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: true, source: substr(closure_1_3[18]).SearchAppsRequestSource.APP_LAUNCHER });
        let results;
        if (searchResults != null) {
          results = searchResults.results;
        }
        if (results == null) {
          results = [];
        }
        return results;
      });
    }
    diff = first;
  }, items2);
  const items3 = [fetchState, num, memo, totalPages];
  const items4 = [tmp5];
  const callback = first.useCallback(() => {
    let tmp2 = fetchState === FetchState.FETCHED;
    if (tmp2) {
      tmp2 = length === ref.current;
    }
    if (tmp2) {
      tmp2 = length > 0;
    }
    if (tmp2) {
      tmp2 = length < totalPages;
    }
    if (tmp2) {
      tmp2 = length < num;
    }
    if (tmp2) {
      tmp2 = memo[length - 1].length > 0;
    }
    if (tmp2) {
      ref.current = ref.current + 1;
      callback((arg0) => arg0 + 1);
    }
  }, items3);
  callback1 = first.useCallback((arg0) => {
    ({ query, page, guildId } = arg0);
    num(11247);
    const obj = { page, integrationType: substr(8770).ApplicationIntegrationType.USER_INSTALL, minUserInstallCommandCount: 1, excludeAppsWithCustomInstallUrl: true, excludeNonEmbeddedApps: dependencyMap, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: true, source: substr(11245).SearchAppsRequestSource.APP_LAUNCHER };
    obj[2] = obj;
    obj.search(obj);
  }, items4);
  const items5 = [tmp, guild_id, callback1, first, flag];
  const effect = first.useEffect(() => {
    if (flag) {
      const obj = { query: null, page: null, guildId: null };
      obj[0] = substr;
      obj[1] = first;
      obj[2] = guild_id;
      callback1(obj);
    }
  }, items5);
  const items6 = [guild_id, tmp];
  const effect1 = first.useEffect(() => {
    callback(1);
  }, items6);
  const tmp3Result = substr(589);
  return { fetchState, applicationResults: memo.flat(), fetchNextPage: callback };
};