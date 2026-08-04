// discord_app/modules/app_launcher/utils/AppLauncherSearchUtils.tsx
import _slicedToArray from "_slicedToArray";
import _getEmbedApplication from "_getEmbedApplication";
import handleUserSettingsProtoStoreChange from "handleUserSettingsProtoStoreChange";
import getIndexKey from "getIndexKey";
import closure_11 from "handleUserSettingsProtoStoreChange";
import getSearchResults from "getSearchResults";
import { FetchState } from "getSearchResults";
import { BuiltInSectionId } from "TRUE_OPTION_NAME";
import { COMMAND_SENTINEL } from "regExp";

let c10;
let c9;
let error;
let metroImportAll;
const require = arg1;
function useApplicationsInContext(allowFetch) {
  let context;
  let onlyWithCommands;
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
  let obj = onlyWithCommands(5710);
  const items = [onlyWithCommands(1906).ApplicationCommandType.CHAT];
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
        tmp3 = !onlyWithCommands(outer1_3[10]).isEmbeddedApp(application);
        const obj = onlyWithCommands(outer1_3[10]);
      }
      let tmp6 = !tmp3;
      if (tmp3) {
        let tmp7 = null != application && includeBuiltIn;
        if (tmp7) {
          tmp7 = !onlyWithCommands(outer1_3[10]).isEmbeddedApp(application);
          const obj2 = onlyWithCommands(outer1_3[10]);
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
        let tmp11 = item10053;
        callbackResult = callback(tmp8);
      }
      if (callbackResult) {
        let tmp12 = application;
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
      let tmp16 = item10070;
      if (callbackResult1) {
        let tmp19 = application2;
        callbackResult1 = !set.has(tmp17.id);
      }
      if (callbackResult1) {
        let tmp20 = item10070;
        callbackResult1 = callback(tmp16);
      }
      if (callbackResult1) {
        let tmp21 = application2;
        arr = items2.push(tmp17);
      }
      continue;
    }
  }
  if (includeBuiltIn) {
    includeBuiltIn = allowFetch.includeBuiltIn;
  }
  if (includeBuiltIn) {
    items2.push(onlyWithCommands(8019).FAKE_BUILT_IN_APP);
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
  const sectionName = require(8019) /* getShelfBadgeTypeIfActive */.getSectionName(FAKE_BUILT_IN_APP);
  const obj = require(8019) /* getShelfBadgeTypeIfActive */;
  return callback(sectionName, require(8019) /* getShelfBadgeTypeIfActive */.getSectionName(FAKE_BUILT_IN_APP));
}
function sortCommandsAlpha(displayName, displayName2) {
  return callback(displayName.displayName, displayName2.displayName);
}
({ appLauncherOnlyCompareNames: error, getSection: metroImportAll, useContextIndexState: c9, useUserIndexState: c10 } = getIndexKey);
let result = require("handleUserSettingsProtoStoreChange").fileFinishedImporting("modules/app_launcher/utils/AppLauncherSearchUtils.tsx");

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
  let c2;
  let c3;
  const tmp = callback2(context, true, flag2);
  c2 = tmp;
  const tmp2 = callback3(true, flag2);
  c3 = tmp2;
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
    let _undefined;
    const result = obj.result;
    let sections;
    if (result != null) {
      sections = result.sections;
    }
    if (sections == null) {
      sections = {};
    }
    const result2 = _undefined.result;
    let sections1;
    if (result2 != null) {
      sections1 = result2.sections;
    }
    if (sections1 == null) {
      sections1 = {};
    }
    let items = [...Object.keys(sections)];
    const keys = Object.keys(sections1);
    HermesBuiltin.arraySpread(keys.filter((arg0) => !(arg0 in sections)), tmp);
    if (items1) {
      items.push(outer1_14.BUILT_IN);
    }
    items1 = [];
    obj = {};
    for (const item10038 of items) {
      _undefined = item10038;
      let tmp5Result = tmp5();
      continue;
    }
    obj = { commands: items1, commandSectionMap: obj, loading: null };
    let tmp7 = true === obj.fetchState.fetching;
    if (!tmp7) {
      tmp7 = true === _undefined.fetchState.fetching;
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
  const items = [_require(1906).ApplicationCommandType.CHAT, _require(1906).ApplicationCommandType.PRIMARY_ENTRY_POINT];
  let closure_1 = _require(5710).buildPermissionContext(channel, items);
  return (id) => {
    let closure_1;
    let closure_2;
    let context;
    let isImpersonating;
    let roleIds;
    let sectionCommands;
    let userId;
    ({ context, userId, roleIds, isImpersonating } = closure_1);
    const tmp = outer1_8(descriptor, id.id);
    descriptor = tmp.descriptor;
    ({ sectionCommands, isGuildInstalled: closure_1, isUserInstalled: closure_2 } = tmp);
    let guild_id;
    if (context != null) {
      guild_id = context.guild_id;
    }
    let allowedForUser = null;
    if (null != guild_id) {
      let obj = outer1_2(outer1_3[11]);
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
      allowedForChannel = outer1_2(outer1_3[11]).computeAllowedForChannel(permissions1, context, context.guild_id);
      const obj2 = outer1_2(outer1_3[11]);
    }
    let tmp17 = null != sectionCommands;
    if (tmp17) {
      tmp17 = sectionCommands.length > 0;
    }
    let someResult = !tmp17;
    if (tmp17) {
      someResult = sectionCommands.some((arg0) => {
        let obj = outer2_2(outer2_3[11]);
        obj = { applicationAllowedForUser: allowedForUser, applicationAllowedForChannel: allowedForChannel, commandBotId: null, isGuildInstalled: null, isUserInstalled: null };
        let botId;
        if (descriptor != null) {
          botId = descriptor.botId;
        }
        obj[2] = botId;
        obj[3] = closure_1;
        obj[4] = closure_2;
        return obj.hasAccess(arg0, outer1_1, obj) === descriptor(outer2_3[11]).HasAccessResult.ALLOWED;
      });
    }
    return someResult;
  };
};
export function defaultApplicationBucketing(arg0) {
  let closure_0 = arg0;
  const items = [
    (FAKE_BUILT_IN_APP) => {
      const sectionName = set(outer1_3[10]).getSectionName(FAKE_BUILT_IN_APP);
      const obj = set(outer1_3[10]);
      return sectionName.toLocaleLowerCase().startsWith(set.toLocaleLowerCase());
    },
  ,
  ,

  ];
  closure_0 = arg0;
  items[1] = (FAKE_BUILT_IN_APP) => {
    const sectionName = set(outer1_3[10]).getSectionName(FAKE_BUILT_IN_APP);
    const obj = set(outer1_3[10]);
    return sectionName.toLocaleLowerCase().includes(set.toLocaleLowerCase());
  };
  closure_0 = arg0;
  items[2] = (FAKE_BUILT_IN_APP) => {
    const sectionDescription = set(outer1_3[10]).getSectionDescription(FAKE_BUILT_IN_APP);
    let toLocaleLowerCaseResult;
    if (sectionDescription != null) {
      toLocaleLowerCaseResult = sectionDescription.toLocaleLowerCase();
    }
    let flag;
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
    const sectionDescription = set(outer1_3[10]).getSectionDescription(FAKE_BUILT_IN_APP);
    let toLocaleLowerCaseResult;
    if (sectionDescription != null) {
      toLocaleLowerCaseResult = sectionDescription.toLocaleLowerCase();
    }
    let flag;
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
  let closure_0 = arg0;
  return (FAKE_BUILT_IN_APP) => {
    const sectionName = set(outer1_3[10]).getSectionName(FAKE_BUILT_IN_APP);
    const obj = set(outer1_3[10]);
    return sectionName.toLocaleLowerCase().startsWith(set.toLocaleLowerCase());
  };
}
export function bucketApplicationNameContains(arg0) {
  let closure_0 = arg0;
  return (FAKE_BUILT_IN_APP) => {
    const sectionName = set(outer1_3[10]).getSectionName(FAKE_BUILT_IN_APP);
    const obj = set(outer1_3[10]);
    return sectionName.toLocaleLowerCase().includes(set.toLocaleLowerCase());
  };
}
export function bucketApplicationDescriptionStartsWith(arg0) {
  let closure_0 = arg0;
  return (FAKE_BUILT_IN_APP) => {
    const sectionDescription = set(outer1_3[10]).getSectionDescription(FAKE_BUILT_IN_APP);
    let toLocaleLowerCaseResult;
    if (sectionDescription != null) {
      toLocaleLowerCaseResult = sectionDescription.toLocaleLowerCase();
    }
    let flag;
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
  let closure_0 = arg0;
  return (FAKE_BUILT_IN_APP) => {
    const sectionDescription = set(outer1_3[10]).getSectionDescription(FAKE_BUILT_IN_APP);
    let toLocaleLowerCaseResult;
    if (sectionDescription != null) {
      toLocaleLowerCaseResult = sectionDescription.toLocaleLowerCase();
    }
    let flag;
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
  const items = [_require(1906).ApplicationCommandType.CHAT];
  let closure_1 = _require(5710).buildPermissionContext(channel, items);
  let closure_2 = {};
  return (applicationId) => {
    let applicationAllowedForChannel;
    let applicationAllowedForUser;
    let context;
    let isGuildInstalled;
    let isGuildInstalled2;
    let isImpersonating;
    let isUserInstalled;
    let isUserInstalled2;
    let roleIds;
    let userId;
    ({ context, userId, roleIds, isImpersonating } = closure_1);
    if (!(applicationId.applicationId in callback)) {
      const tmp5 = outer1_8(obj, applicationId.applicationId);
      const descriptor = tmp5.descriptor;
      let guild_id;
      ({ isGuildInstalled, isUserInstalled } = tmp5);
      if (context != null) {
        guild_id = context.guild_id;
      }
      let allowedForUser = null;
      if (null != guild_id) {
        obj = callback(outer1_3[11]);
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
        allowedForChannel = callback(outer1_3[11]).computeAllowedForChannel(permissions1, context, context.guild_id);
        const obj2 = callback(outer1_3[11]);
      }
      obj = { descriptor: null, applicationAllowedForUser: null, applicationAllowedForChannel: null, isGuildInstalled: null, isUserInstalled: null };
      obj[0] = descriptor;
      obj[1] = allowedForUser;
      obj[2] = allowedForChannel;
      obj[3] = isGuildInstalled;
      obj[4] = isUserInstalled;
      tmp2[applicationId.applicationId] = obj;
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
    const obj4 = callback(outer1_3[11]);
    const tmp = closure_1;
    return callback(outer1_3[11]).hasAccess(applicationId, closure_1, obj) === obj(outer1_3[11]).HasAccessResult.ALLOWED;
  };
};
export const defaultCommandBucketing = function defaultCommandBucketing(str) {
  let closure_0 = str;
  const items = [
    (arg0) => {
      let displayName;
      let untranslatedName;
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
  closure_0 = parts[0];
  const substr = parts.slice(1);
  let closure_1 = substr.join(" ");
  items[1] = (arg0) => {
    let displayName;
    let untranslatedName;
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
  closure_0 = str;
  items[2] = (arg0) => {
    let displayName;
    let untranslatedName;
    ({ untranslatedName, displayName } = arg0);
    return untranslatedName.includes(obj) || displayName.includes(obj);
  };
  closure_0 = str;
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
      let tmp3 = obj;
      if (!name.startsWith(obj)) {
        let tmp4 = name;
        let _HermesInternal = HermesInternal;
        let combined = "" + options.untranslatedName + " " + tmp2;
        if (!combined.startsWith(tmp3)) {
          if (null == options.displayName) {
            let tmp6 = serverLocalizedName;
            if (null != serverLocalizedName) {
              let tmp7 = serverLocalizedName;
              if (!serverLocalizedName.startsWith(tmp3)) {
                let tmp8 = serverLocalizedName;
                let _HermesInternal3 = HermesInternal;
                let combined1 = "" + options.untranslatedName + " " + serverLocalizedName;
                if (!combined1.startsWith(tmp3)) {
                  if (null != options.displayName) {
                    let tmp9 = serverLocalizedName;
                    let _HermesInternal4 = HermesInternal;
                    let combined2 = "" + options.displayName + " " + serverLocalizedName;
                  }
                }
              }
              let tmp10 = iter;
              iter.return();
              let flag = true;
              return true;
            }
            continue;
          } else {
            let tmp5 = name;
            let _HermesInternal2 = HermesInternal;
            let combined3 = "" + options.displayName + " " + tmp2;
          }
        }
      }
      let tmp11 = iter;
      iter.return();
      let flag2 = true;
      return true;
    }
    return false;
  };
  closure_0 = str;
  items[4] = (options) => {
    let name;
    let serverLocalizedName;
    options = options.options;
    if (options == null) {
      options = [];
    }
    for (const item10008 of options) {
      ({ name, serverLocalizedName } = item10008);
      let tmp = obj;
      if (!name.includes(obj)) {
        let tmp2 = serverLocalizedName;
        let hasItem;
        if (serverLocalizedName != null) {
          hasItem = serverLocalizedName.includes(tmp);
        }
      }
      let tmp4 = obj;
      obj.return();
      let flag = true;
      return true;
    }
    return false;
  };
  return items;
};
export function bucketRootCommandNameStartsWith(arg0) {
  let closure_0 = arg0;
  return (arg0) => {
    let displayName;
    let untranslatedName;
    ({ untranslatedName, displayName } = arg0);
    return untranslatedName.startsWith(obj) || displayName.startsWith(obj);
  };
}
export const bucketFullCommandNameStartsWith = function bucketFullCommandNameStartsWith(str) {
  let parts;
  if (str != null) {
    parts = str.split(" ");
  }
  let closure_0 = parts[0];
  const substr = parts.slice(1);
  let closure_1 = substr.join(" ");
  return (arg0) => {
    let displayName;
    let untranslatedName;
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
  let closure_0 = arg0;
  return (arg0) => {
    let displayName;
    let untranslatedName;
    ({ untranslatedName, displayName } = arg0);
    return untranslatedName.includes(obj) || displayName.includes(obj);
  };
}
export function bucketOptionNameStartsWithOrCommandAndOptionStartsWith(arg0) {
  let closure_0 = arg0;
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
      let tmp3 = obj;
      if (!name.startsWith(obj)) {
        let tmp4 = name;
        let _HermesInternal = HermesInternal;
        let combined = "" + options.untranslatedName + " " + tmp2;
        if (!combined.startsWith(tmp3)) {
          if (null == options.displayName) {
            let tmp6 = serverLocalizedName;
            if (null != serverLocalizedName) {
              let tmp7 = serverLocalizedName;
              if (!serverLocalizedName.startsWith(tmp3)) {
                let tmp8 = serverLocalizedName;
                let _HermesInternal3 = HermesInternal;
                let combined1 = "" + options.untranslatedName + " " + serverLocalizedName;
                if (!combined1.startsWith(tmp3)) {
                  if (null != options.displayName) {
                    let tmp9 = serverLocalizedName;
                    let _HermesInternal4 = HermesInternal;
                    let combined2 = "" + options.displayName + " " + serverLocalizedName;
                  }
                }
              }
              let tmp10 = iter;
              iter.return();
              let flag = true;
              return true;
            }
            continue;
          } else {
            let tmp5 = name;
            let _HermesInternal2 = HermesInternal;
            let combined3 = "" + options.displayName + " " + tmp2;
          }
        }
      }
      let tmp11 = iter;
      iter.return();
      let flag2 = true;
      return true;
    }
    return false;
  };
}
export function bucketCommandOptionNameContains(arg0) {
  let closure_0 = arg0;
  return (options) => {
    let name;
    let serverLocalizedName;
    options = options.options;
    if (options == null) {
      options = [];
    }
    for (const item10008 of options) {
      ({ name, serverLocalizedName } = item10008);
      let tmp = obj;
      if (!name.includes(obj)) {
        let tmp2 = serverLocalizedName;
        let hasItem;
        if (serverLocalizedName != null) {
          hasItem = serverLocalizedName.includes(tmp);
        }
      }
      let tmp4 = obj;
      obj.return();
      let flag = true;
      return true;
    }
    return false;
  };
}
export function bucketCommandSectionNameStartsWith(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = {};
  return (applicationId) => {
    const lib = applicationId;
    if (applicationId.applicationId in closure_2) {
      return tmp[applicationId.applicationId];
    } else {
      let FAKE_BUILT_IN_APP = lib.find((id) => id.id === applicationId.applicationId);
      if (FAKE_BUILT_IN_APP == null) {
        FAKE_BUILT_IN_APP = tmp3(tmp4[10]).FAKE_BUILT_IN_APP;
      }
      const sectionName = lib(outer1_3[10]).getSectionName(FAKE_BUILT_IN_APP);
      const obj = lib(outer1_3[10]);
      tmp3 = lib;
      tmp4 = outer1_3;
      const startsWithResult = sectionName.toLocaleLowerCase().startsWith(closure_1.toLocaleLowerCase());
      tmp[applicationId.applicationId] = startsWithResult;
      return startsWithResult;
    }
  };
}
export function bucketCommandSectionNameContains(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = {};
  return (applicationId) => {
    const lib = applicationId;
    if (applicationId.applicationId in closure_2) {
      return tmp[applicationId.applicationId];
    } else {
      let FAKE_BUILT_IN_APP = lib.find((id) => id.id === applicationId.applicationId);
      if (FAKE_BUILT_IN_APP == null) {
        FAKE_BUILT_IN_APP = tmp3(tmp4[10]).FAKE_BUILT_IN_APP;
      }
      const sectionName = lib(outer1_3[10]).getSectionName(FAKE_BUILT_IN_APP);
      const obj = lib(outer1_3[10]);
      tmp3 = lib;
      tmp4 = outer1_3;
      const hasItem = sectionName.toLocaleLowerCase().includes(closure_1.toLocaleLowerCase());
      tmp[applicationId.applicationId] = hasItem;
      return hasItem;
    }
  };
}
export function defaultCommandsSort(arg0) {
  let closure_0 = arg0;
  const items = [
    (arg0, arg1) => {
      const scoreWithoutLoadingLatest = outer1_6.getScoreWithoutLoadingLatest(obj, arg0);
      return outer1_6.getScoreWithoutLoadingLatest(obj, arg1) - scoreWithoutLoadingLatest;
    },
    sortCommandsAlpha
  ];
  return items;
}
export function sortCommandsByFreceny(arg0) {
  let closure_0 = arg0;
  return (arg0, arg1) => {
    const scoreWithoutLoadingLatest = outer1_6.getScoreWithoutLoadingLatest(obj, arg0);
    return outer1_6.getScoreWithoutLoadingLatest(obj, arg1) - scoreWithoutLoadingLatest;
  };
}
export { sortCommandsAlpha };
export const useLocalSearchResults = function useLocalSearchResults(context) {
  context = context.context;
  let context2 = context;
  let flag4 = str;
  const commandLimit = context.commandLimit;
  let c2 = commandLimit;
  const applicationLimit = context.applicationLimit;
  let dependencyMap = applicationLimit;
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
  c2 = undefined;
  dependencyMap = undefined;
  let tmp3 = apps(context2, true, flag5);
  c2 = tmp3;
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
    let _undefined;
    const result = obj.result;
    let sections;
    if (result != null) {
      sections = result.sections;
    }
    if (sections == null) {
      sections = {};
    }
    const result2 = _undefined.result;
    let sections1;
    if (result2 != null) {
      sections1 = result2.sections;
    }
    if (sections1 == null) {
      sections1 = {};
    }
    let items = [...Object.keys(sections)];
    const keys = Object.keys(sections1);
    HermesBuiltin.arraySpread(keys.filter((arg0) => !(arg0 in sections)), tmp);
    if (items1) {
      items.push(outer1_14.BUILT_IN);
    }
    items1 = [];
    obj = {};
    for (const item10038 of items) {
      _undefined = item10038;
      let tmp5Result = tmp5();
      continue;
    }
    obj = { commands: items1, commandSectionMap: obj, loading: null };
    let tmp7 = true === obj.fetchState.fetching;
    if (!tmp7) {
      tmp7 = true === _undefined.fetchState.fetching;
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
  const tmp8Result = flag4(11227)({ guildId: guild_id });
  callback3 = tmp8Result;
  let items1 = [flag, commands, commandLimit, context, tmp];
  memo1 = obj2.useMemo(() => {
    if (flag) {
      let obj = context2(_undefined[13]);
      obj = { limit: null, filterPredicates: null, bucketPredicates: null, sortComparers: null };
      obj[0] = closure_2;
      let closure_1;
      closure_2 = undefined;
      let channel;
      if ("channel" === obj.type) {
        channel = tmp5.channel;
      }
      const items = [context2(_undefined[9]).ApplicationCommandType.CHAT];
      closure_1 = context2(_undefined[8]).buildPermissionContext(channel, items);
      closure_2 = {};
      const items1 = [
        (applicationId) => {
            let applicationAllowedForChannel;
            let applicationAllowedForUser;
            let context;
            let isGuildInstalled;
            let isGuildInstalled2;
            let isImpersonating;
            let isUserInstalled;
            let isUserInstalled2;
            let roleIds;
            let userId;
            ({ context, userId, roleIds, isImpersonating } = closure_1);
            if (!(applicationId.applicationId in callback)) {
              const tmp5 = outer1_8(obj, applicationId.applicationId);
              const descriptor = tmp5.descriptor;
              let guild_id;
              ({ isGuildInstalled, isUserInstalled } = tmp5);
              if (context != null) {
                guild_id = context.guild_id;
              }
              let allowedForUser = null;
              if (null != guild_id) {
                obj = callback(outer1_3[11]);
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
                allowedForChannel = callback(outer1_3[11]).computeAllowedForChannel(permissions1, context, context.guild_id);
                const obj2 = callback(outer1_3[11]);
              }
              obj = { descriptor: null, applicationAllowedForUser: null, applicationAllowedForChannel: null, isGuildInstalled: null, isUserInstalled: null };
              obj[0] = descriptor;
              obj[1] = allowedForUser;
              obj[2] = allowedForChannel;
              obj[3] = isGuildInstalled;
              obj[4] = isUserInstalled;
              tmp2[applicationId.applicationId] = obj;
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
            const obj4 = callback(outer1_3[11]);
            const tmp = closure_1;
            return callback(outer1_3[11]).hasAccess(applicationId, closure_1, obj) === obj(outer1_3[11]).HasAccessResult.ALLOWED;
          }
      ];
      obj[1] = items1;
      obj = closure_1;
      const items2 = [
        (arg0) => {
            let displayName;
            let untranslatedName;
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
      obj = parts[0];
      let substr = parts.slice(1);
      closure_1 = substr.join(" ");
      items2[1] = (arg0) => {
        let displayName;
        let untranslatedName;
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
      obj = str2;
      items2[2] = (arg0) => {
        let displayName;
        let untranslatedName;
        ({ untranslatedName, displayName } = arg0);
        return untranslatedName.includes(obj) || displayName.includes(obj);
      };
      obj = str2;
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
          let tmp3 = obj;
          if (!name.startsWith(obj)) {
            let tmp4 = name;
            let _HermesInternal = HermesInternal;
            let combined = "" + options.untranslatedName + " " + tmp2;
            if (!combined.startsWith(tmp3)) {
              if (null == options.displayName) {
                let tmp6 = serverLocalizedName;
                if (null != serverLocalizedName) {
                  let tmp7 = serverLocalizedName;
                  if (!serverLocalizedName.startsWith(tmp3)) {
                    let tmp8 = serverLocalizedName;
                    let _HermesInternal3 = HermesInternal;
                    let combined1 = "" + options.untranslatedName + " " + serverLocalizedName;
                    if (!combined1.startsWith(tmp3)) {
                      if (null != options.displayName) {
                        let tmp9 = serverLocalizedName;
                        let _HermesInternal4 = HermesInternal;
                        let combined2 = "" + options.displayName + " " + serverLocalizedName;
                      }
                    }
                  }
                  let tmp10 = iter;
                  iter.return();
                  let flag = true;
                  return true;
                }
                continue;
              } else {
                let tmp5 = name;
                let _HermesInternal2 = HermesInternal;
                let combined3 = "" + options.displayName + " " + tmp2;
              }
            }
          }
          let tmp11 = iter;
          iter.return();
          let flag2 = true;
          return true;
        }
        return false;
      };
      obj = str2;
      items2[4] = (options) => {
        let name;
        let serverLocalizedName;
        options = options.options;
        if (options == null) {
          options = [];
        }
        for (const item10008 of options) {
          ({ name, serverLocalizedName } = item10008);
          let tmp = obj;
          if (!name.includes(obj)) {
            let tmp2 = serverLocalizedName;
            let hasItem;
            if (serverLocalizedName != null) {
              hasItem = serverLocalizedName.includes(tmp);
            }
          }
          let tmp4 = obj;
          obj.return();
          let flag = true;
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
            const scoreWithoutLoadingLatest = outer1_6.getScoreWithoutLoadingLatest(obj, arg0);
            return outer1_6.getScoreWithoutLoadingLatest(obj, arg1) - scoreWithoutLoadingLatest;
          },
        outer1_19
      ];
      obj[3] = items3;
      let queryDataResult = obj.queryData(commands, obj);
      const obj3 = context2(_undefined[8]);
      let tmp = context2;
      let tmp2 = _undefined;
      let tmp3 = commands;
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
      const map = new Map(apps.map((id) => {
        const items = [id.id, id];
        return items;
      }));
      return flag4(_undefined[14]).compact(arr.map((applicationId) => {
        const value = map.get(applicationId.applicationId);
        let tmp2 = null;
        if (null != value) {
          const obj = { command: null, application: null, section: null };
          obj[0] = applicationId;
          obj[1] = value;
          let tmp4 = outer1_8[applicationId.id];
          if (tmp4 == null) {
            tmp4 = null;
          }
          obj[2] = tmp4;
          tmp2 = obj;
        }
        return tmp2;
      }));
    }
    arr = memo1;
  }, items2);
  let items3 = [flag2, flag3, applicationLimit, context, tmp, apps, tmp8Result];
  const memo3 = obj2.useMemo(() => {
    const items = [];
    if (flag3) {
      const _Set = Set;
      const set = new Set(apps.map((id) => id.id));
      let type = set;
      const push = items.push;
      const items1 = [];
      HermesBuiltin.arraySpread(apps, 0);
      HermesBuiltin.apply(items1, items);
      const push2 = items.push;
      const found = _undefined2.filter((application) => !set.has(application.application.id));
      const items2 = [];
      HermesBuiltin.arraySpread(found.map((application) => application.application), 0);
      HermesBuiltin.apply(items2, items);
      let tmp2 = items;
    } else {
      tmp2 = items;
      if (flag2) {
        tmp2 = apps;
      }
    }
    let obj = context2(_undefined[13]);
    obj = { limit: _undefined, filterPredicates: null, bucketPredicates: null, sortComparers: null };
    let closure_1;
    let channel;
    if ("channel" === type.type) {
      channel = type.channel;
    }
    const items3 = [context2(_undefined[9]).ApplicationCommandType.CHAT, context2(_undefined[9]).ApplicationCommandType.PRIMARY_ENTRY_POINT];
    closure_1 = context2(_undefined[8]).buildPermissionContext(channel, items3);
    const items4 = [
      (id) => {
        let closure_1;
        let closure_2;
        let context;
        let isImpersonating;
        let roleIds;
        let sectionCommands;
        let userId;
        ({ context, userId, roleIds, isImpersonating } = closure_1);
        const tmp = outer1_8(descriptor, id.id);
        descriptor = tmp.descriptor;
        ({ sectionCommands, isGuildInstalled: closure_1, isUserInstalled: closure_2 } = tmp);
        let guild_id;
        if (context != null) {
          guild_id = context.guild_id;
        }
        let allowedForUser = null;
        if (null != guild_id) {
          let obj = outer1_2(outer1_3[11]);
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
          allowedForChannel = outer1_2(outer1_3[11]).computeAllowedForChannel(permissions1, context, context.guild_id);
          const obj2 = outer1_2(outer1_3[11]);
        }
        let tmp17 = null != sectionCommands;
        if (tmp17) {
          tmp17 = sectionCommands.length > 0;
        }
        let someResult = !tmp17;
        if (tmp17) {
          someResult = sectionCommands.some((arg0) => {
            let obj = outer2_2(outer2_3[11]);
            obj = { applicationAllowedForUser: allowedForUser, applicationAllowedForChannel: allowedForChannel, commandBotId: null, isGuildInstalled: null, isUserInstalled: null };
            let botId;
            if (descriptor != null) {
              botId = descriptor.botId;
            }
            obj[2] = botId;
            obj[3] = closure_1;
            obj[4] = closure_2;
            return obj.hasAccess(arg0, outer1_1, obj) === descriptor(outer2_3[11]).HasAccessResult.ALLOWED;
          });
        }
        return someResult;
      }
    ];
    obj[1] = items4;
    type = closure_1;
    const items5 = [
      (FAKE_BUILT_IN_APP) => {
        const sectionName = set(outer1_3[10]).getSectionName(FAKE_BUILT_IN_APP);
        const obj = set(outer1_3[10]);
        return sectionName.toLocaleLowerCase().startsWith(set.toLocaleLowerCase());
      },
    ,
    ,

    ];
    type = closure_1;
    items5[1] = (FAKE_BUILT_IN_APP) => {
      const sectionName = set(outer1_3[10]).getSectionName(FAKE_BUILT_IN_APP);
      const obj = set(outer1_3[10]);
      return sectionName.toLocaleLowerCase().includes(set.toLocaleLowerCase());
    };
    type = closure_1;
    items5[2] = (FAKE_BUILT_IN_APP) => {
      const sectionDescription = set(outer1_3[10]).getSectionDescription(FAKE_BUILT_IN_APP);
      let toLocaleLowerCaseResult;
      if (sectionDescription != null) {
        toLocaleLowerCaseResult = sectionDescription.toLocaleLowerCase();
      }
      let flag;
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
      const sectionDescription = set(outer1_3[10]).getSectionDescription(FAKE_BUILT_IN_APP);
      let toLocaleLowerCaseResult;
      if (sectionDescription != null) {
        toLocaleLowerCaseResult = sectionDescription.toLocaleLowerCase();
      }
      let flag;
      if (toLocaleLowerCaseResult != null) {
        flag = toLocaleLowerCaseResult.includes(set.toLocaleLowerCase());
      }
      if (flag == null) {
        flag = false;
      }
      return flag;
    };
    obj[2] = items5;
    const items6 = [outer1_17, outer1_18];
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
  let context;
  let query;
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
  let dependencyMap;
  let guild_id;
  let first;
  let handleUserSettingsProtoStoreChange;
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
  const tmp5 = fetches.entrypoint === substr(8021).AppLauncherEntrypoint.VOICE;
  dependencyMap = tmp5;
  guild_id = undefined;
  if ("channel" === context.type) {
    guild_id = context.channel.guild_id;
  }
  const tmp7 = guild_id(first.useState(1), 2);
  first = tmp7[0];
  handleUserSettingsProtoStoreChange = tmp7[1];
  ref = first.useRef(first);
  ref.current = first;
  const items = [getSearchResults];
  const items1 = [tmp, guild_id, first, tmp5];
  const stateFromStoresObject = substr(589).useStateFromStoresObject(items, () => {
    let obj = { fetchState: null, totalPages: null };
    obj = { query: substr, guildId: guild_id, page: first, integrationType: substr(_undefined[17]).ApplicationIntegrationType.USER_INSTALL, minUserInstallCommandCount: 1, excludeAppsWithCustomInstallUrl: true, excludeNonEmbeddedApps: _undefined, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: true, source: substr(_undefined[18]).SearchAppsRequestSource.APP_LAUNCHER };
    obj[0] = outer1_12.getFetchState(obj);
    obj = { query: substr, guildId: guild_id, page: first, integrationType: substr(_undefined[17]).ApplicationIntegrationType.USER_INSTALL, minUserInstallCommandCount: 1, excludeAppsWithCustomInstallUrl: true, excludeNonEmbeddedApps: _undefined, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: true, source: substr(_undefined[18]).SearchAppsRequestSource.APP_LAUNCHER };
    const searchResults = outer1_12.getSearchResults(obj);
    let num;
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
    if (fetchState !== outer1_13.FETCHED) {
      if (tmp3 !== outer1_13.ERROR) {
        let diff = first - 1;
      }
      const obj = { length: null };
      obj[0] = diff;
      return tmp2(obj, (arg0, arg1) => {
        const searchResults = outer1_12.getSearchResults({ query: closure_0, guildId: _slicedToArray, page: arg1 + 1, integrationType: outer1_0(outer1_3[17]).ApplicationIntegrationType.USER_INSTALL, minUserInstallCommandCount: 1, excludeAppsWithCustomInstallUrl: true, excludeNonEmbeddedApps: closure_3, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: true, source: outer1_0(outer1_3[18]).SearchAppsRequestSource.APP_LAUNCHER });
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
    let tmp2 = fetchState === outer1_13.FETCHED;
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
    let guildId;
    let page;
    let query;
    ({ query, page, guildId } = arg0);
    let obj = num(_undefined[19]);
    obj = { query, guildId, options: null };
    obj = { page, integrationType: substr(_undefined[17]).ApplicationIntegrationType.USER_INSTALL, minUserInstallCommandCount: 1, excludeAppsWithCustomInstallUrl: true, excludeNonEmbeddedApps: _undefined, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: true, source: substr(_undefined[18]).SearchAppsRequestSource.APP_LAUNCHER };
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
  const tmp3 = substr;
  const tmp3Result = substr(589);
  return { fetchState, applicationResults: memo.flat(), fetchNextPage: callback };
};