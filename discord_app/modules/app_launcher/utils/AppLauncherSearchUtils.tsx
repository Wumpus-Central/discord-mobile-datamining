// discord_app/modules/app_launcher/utils/AppLauncherSearchUtils.tsx
import Server from "../../../flow/Server.tsx";
import ApplicationCommandConstants from "../../application_commands/ApplicationCommandConstants.tsx";
import ChannelAutocompleteConstants from "../../channel_autocomplete/ChannelAutocompleteConstants.tsx";
import ApplicationIntegrationType from "../../../../discord_common/js/shared/shared-constants/ApplicationIntegrationType.tsx";
import AppLauncherUtils from "AppLauncherUtils.tsx";
import CommandPermissionContext from "../../application_commands/CommandPermissionContext.tsx";
import ApplicationDirectorySearchStore2 from "../../global_discovery_apps/stores/ApplicationDirectorySearchStore.tsx";
import SearchAppsRequestSource from "../../../../discord_common/js/shared/shared-constants/SearchAppsRequestSource.tsx";
import ArraySearch from "../../queries/ArraySearch.tsx";
import ApplicationDirectoryActionCreatorsAll from "../../global_discovery_apps/ApplicationDirectoryActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import ApplicationCommandFrecencyStore from "../../application_commands/ApplicationCommandFrecencyStore.tsx";
import ApplicationCommandIndexStore from "../../application_commands/ApplicationCommandIndexStore.tsx";
import ApplicationFrecencyStore from "../../applications/ApplicationFrecencyStore.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const ApplicationDirectorySearchStore = ApplicationDirectorySearchStore2;
let _require, dependencyMap, map, searchResults, set, tmp12;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
function sortApplicationFreceny(id, id2) {
  const scoreWithoutLoadingLatest = ApplicationFrecencyStore.getScoreWithoutLoadingLatest(id.id);
  return ApplicationFrecencyStore.getScoreWithoutLoadingLatest(id2.id) - scoreWithoutLoadingLatest;
}
function sortApplicationAlpha(FAKE_BUILT_IN_APP, FAKE_BUILT_IN_APP2) {
  const obj = AppLauncherUtils;
  const sectionName = obj.getSectionName(FAKE_BUILT_IN_APP);
  const obj2 = AppLauncherUtils;
  return metroImportDefault(sectionName, obj2.getSectionName(FAKE_BUILT_IN_APP));
}
function sortCommandsAlpha(displayName, displayName2) {
  return metroImportDefault(displayName.displayName, displayName2.displayName);
}
({
  appLauncherOnlyCompareNames: metroImportDefault,
  getSection: metroImportAll,
  useContextIndexState: c9,
  useUserIndexState: c10,
} = ApplicationCommandIndexStore);
const FetchState = ApplicationDirectorySearchStore2.FetchState;
const BuiltInSectionId = ApplicationCommandConstants.BuiltInSectionId;
const COMMAND_SENTINEL = ChannelAutocompleteConstants.COMMAND_SENTINEL;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (includeNonEmbeddedApps) {
      let allowFetch;
      let context;
      let first;
      let includeBuiltIn;
      let includeEmbeddedApps;
      let onlyWithCommands;
      let obj = onlyWithCommands(576);
      const cResult = obj.c(14);
      ({ context, onlyWithCommands } = includeNonEmbeddedApps);
      ({ includeBuiltIn, allowFetch, includeEmbeddedApps } = includeNonEmbeddedApps);
      includeNonEmbeddedApps = includeNonEmbeddedApps.includeNonEmbeddedApps;
      let channel;
      if ("channel" === context.type) {
        channel = context.channel;
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [onlyWithCommands(1985).ApplicationCommandType.CHAT];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      const tmpResult = onlyWithCommands(8832);
      const hasBaseAccessPermissions = tmpResult.usePermissionContext(channel, first).hasBaseAccessPermissions;
      let tmp7 = closure_9(context, hasBaseAccessPermissions, tmp4);
      const tmp8 = closure_10(hasBaseAccessPermissions, undefined === allowFetch || allowFetch);
      if (cResult[1] === includeEmbeddedApps) {
        if (cResult[2] === includeNonEmbeddedApps) {
          let tmp9;
          if (cResult[3] === onlyWithCommands) {
            tmp9 = cResult[4];
          }
          if (cResult[5] === tmp7.result) {
            if (cResult[6] === includeBuiltIn) {
              if (cResult[7] === includeNonEmbeddedApps) {
                if (cResult[8] === tmp9) {
                  let tmp10;
                  if (cResult[9] === tmp8) {
                    tmp10 = cResult[10];
                  }
                  let fetching;
                  if (tmp7 != null) {
                    fetching = tmp7.fetchState.fetching;
                  }
                  let tmp37 = true === fetching;
                  if (!tmp37) {
                    let fetching1;
                    if (tmp8 != null) {
                      fetching1 = tmp8.fetchState.fetching;
                    }
                    tmp37 = true === fetching1;
                  }
                  if (cResult[11] === tmp10) {
                    let tmp39;
                    if (cResult[12] === tmp37) {
                      tmp39 = cResult[13];
                    }
                    return tmp39;
                  }
                  let obj2 = { apps: tmp10, loading: tmp37 };
                  cResult[11] = tmp10;
                  cResult[12] = tmp37;
                  cResult[13] = obj2;
                  tmp39 = obj2;
                }
              }
            }
          }
          const items1 = [];
          const _Set = Set;
          const self = this;
          const self2 = this;
          set = new Set();
          let tmp11 = set;
          if (null != tmp7.result) {
            let _Object = Object;
            const values = Object.values(tmp7.result.sections);
            for (const item10077 of values) {
              let application = item10077.descriptor.application;
              let tmp17 = application;
              let tmp9Result = null != application && tmp9(tmp16);
              if (tmp9Result) {
                let arr = items1.push(tmp17);
                let addResult = set.add(tmp17.id);
              }
              continue;
            }
          }
          if (null != tmp8.result) {
            const _Object2 = Object;
            const values2 = Object.values(tmp8.result.sections);
            for (const item10094 of values2) {
              let application2 = item10094.descriptor.application;
              let tmp25 = application2;
              let tmp9Result2 = null != application2;
              if (tmp9Result2) {
                tmp9Result2 = !set.has(tmp25.id);
              }
              if (tmp9Result2) {
                tmp9Result2 = tmp9(item10094);
              }
              if (tmp9Result2) {
                let arr2 = items1.push(tmp25);
              }
              continue;
            }
          }
          const tmp31 = includeNonEmbeddedApps && includeBuiltIn;
          if (tmp31) {
            items1.push(onlyWithCommands(8826).FAKE_BUILT_IN_APP);
          }
          cResult[5] = tmp7.result;
          cResult[6] = includeBuiltIn;
          cResult[7] = includeNonEmbeddedApps;
          cResult[8] = tmp9;
          cResult[9] = tmp8;
          cResult[10] = items1;
          tmp10 = items1;
        }
      }
      class S {
        constructor(arg0) {
          application = includeNonEmbeddedApps.descriptor.application;
          tmp = null != application;
          if (tmp) {
            tmp2 = includeEmbeddedApps;
            tmp3 = !includeEmbeddedApps;
            if (includeEmbeddedApps) {
              tmp4 = closure_0;
              tmp5 = closure_3;
              obj = closure_0(closure_3[12]);
              tmp3 = !obj.isActivityApp(application);
            }
            tmp6 = !tmp3;
            if (tmp3) {
              tmp7 = null != application && includeNonEmbeddedApps;
              if (tmp7) {
                tmp8 = closure_0;
                tmp9 = closure_3;
                obj2 = closure_0(closure_3[12]);
                tmp7 = !obj2.isActivityApp(application);
              }
              if (tmp7) {
                tmp10 = onlyWithCommands;
                tmp11 = !onlyWithCommands;
                if (onlyWithCommands) {
                  tmp12 = globalThis;
                  _Object = Object;
                  num = 0;
                  tmp11 = Object.keys(includeNonEmbeddedApps.commands).length > 0;
                }
                tmp7 = tmp11;
              }
              tmp6 = tmp7;
            }
            tmp = tmp6;
          }
          return tmp;
        }
      }
      cResult[1] = includeEmbeddedApps;
      cResult[2] = includeNonEmbeddedApps;
      cResult[3] = onlyWithCommands;
      cResult[4] = S;
      tmp9 = S;
    }
  : (allowFetch) => {
      let context;
      let onlyWithCommands;
      let tmp28;
      ({ context, onlyWithCommands } = allowFetch);
      let flag = allowFetch.allowFetch;
      const includeBuiltIn = allowFetch.includeBuiltIn;
      if (flag === undefined) {
        flag = true;
      }
      const includeEmbeddedApps = allowFetch.includeEmbeddedApps;
      let includeNonEmbeddedApps = allowFetch.includeNonEmbeddedApps;
      let channel;
      if ("channel" === context.type) {
        channel = context.channel;
      }
      const usePermissionContext = onlyWithCommands(8832).usePermissionContext;
      const items = [];
      onlyWithCommands(8832);
      items[0] = onlyWithCommands(1985).ApplicationCommandType.CHAT;
      const hasBaseAccessPermissions = usePermissionContext(channel, items).hasBaseAccessPermissions;
      let tmp3 = closure_9(context, hasBaseAccessPermissions, flag);
      const tmp4 = closure_10(hasBaseAccessPermissions, flag);
      const items1 = [includeEmbeddedApps, includeNonEmbeddedApps, onlyWithCommands];
      const callback = react.useCallback((descriptor) => {
        const application = descriptor.descriptor.application;
        let tmp = null != application;
        if (tmp) {
          let tmp3 = !includeEmbeddedApps;
          if (includeEmbeddedApps) {
            const obj = AppLauncherUtils;
            tmp3 = !obj.isActivityApp(application);
          }
          let tmp6 = !tmp3;
          if (tmp3) {
            let tmp7 = null != application && includeNonEmbeddedApps;
            if (tmp7) {
              const obj2 = AppLauncherUtils;
              tmp7 = !obj2.isActivityApp(application);
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
      set = new Set();
      if (null != tmp3.result) {
        let _Object = Object;
        const values = Object.values(tmp3.result.sections);
        let tmp7 = values;
        for (const item10053 of values) {
          let application = item10053.descriptor.application;
          let tmp10 = application;
          let callbackResult = null != application && callback(tmp9);
          if (callbackResult) {
            let arr = items2.push(tmp10);
            let addResult = set.add(tmp10.id);
          }
          continue;
        }
      }
      if (null != tmp4.result) {
        const _Object2 = Object;
        const values2 = Object.values(tmp4.result.sections);
        for (const item10070 of values2) {
          let application2 = item10070.descriptor.application;
          let tmp18 = application2;
          let callbackResult1 = null != application2;
          if (callbackResult1) {
            callbackResult1 = !set.has(tmp18.id);
          }
          if (callbackResult1) {
            callbackResult1 = callback(item10070);
          }
          if (callbackResult1) {
            let arr2 = items2.push(tmp18);
          }
          continue;
        }
      }
      if (includeNonEmbeddedApps) {
        includeNonEmbeddedApps = includeBuiltIn;
      }
      if (includeNonEmbeddedApps) {
        items2.push(onlyWithCommands(8826).FAKE_BUILT_IN_APP);
      }
      let obj = { apps: items2, loading: tmp28 };
      let fetching;
      if (tmp3 != null) {
        fetching = tmp3.fetchState.fetching;
      }
      tmp28 = true === fetching;
      if (!tmp28) {
        let fetching1;
        if (tmp4 != null) {
          fetching1 = tmp4.fetchState.fetching;
        }
        tmp28 = true === fetching1;
      }
      return obj;
    };
let closure_16 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (context) => {
      let allowFetch;
      let includeBuiltIn;
      let item10081;
      let items1;
      let obj3;
      let tmp13;
      let tmp9;
      const obj = context(items1[9]);
      const cResult = obj.c(14);
      context = context.context;
      ({ includeBuiltIn, allowFetch } = context);
      const tmp5 = closure_9(context, true, undefined === allowFetch || allowFetch);
      const tmp6 = closure_10(true, undefined === allowFetch || allowFetch);
      const result = tmp5.result;
      let sections;
      const first = cResult[0];
      if (result != null) {
        sections = result.sections;
      }
      if (first !== sections) {
        const result2 = tmp5.result;
        let sections1;
        if (result2 != null) {
          sections1 = result2.sections;
        }
        if (sections1 == null) {
          sections1 = {};
        }
        const result3 = tmp5.result;
        let sections2;
        if (result3 != null) {
          sections2 = result3.sections;
        }
        cResult[0] = sections2;
        cResult[1] = sections1;
        tmp9 = sections1;
      } else {
        tmp9 = cResult[1];
      }
      let closure_1 = tmp9;
      const result4 = tmp6.result;
      let sections3;
      const tmp11 = cResult[2];
      if (result4 != null) {
        sections3 = result4.sections;
      }
      if (tmp11 !== sections3) {
        const result5 = tmp6.result;
        let sections4;
        if (result5 != null) {
          sections4 = result5.sections;
        }
        if (sections4 == null) {
          sections4 = {};
        }
        const result6 = tmp6.result;
        let sections5;
        if (result6 != null) {
          sections5 = result6.sections;
        }
        cResult[2] = sections5;
        cResult[3] = sections4;
        tmp13 = sections4;
      } else {
        tmp13 = cResult[3];
      }
      if (cResult[4] === context) {
        if (cResult[5] === tmp9) {
          if (cResult[6] === (undefined === includeBuiltIn || includeBuiltIn)) {
            if (cResult[7] === tmp13) {
              obj3 = cResult[8];
              items1 = cResult[9];
            }
            if (cResult[10] === tmp15) {
              if (cResult[11] === tmp16) {
                let tmp24;
                if (cResult[12] === (true === tmp5.fetchState.fetching || true === tmp6.fetchState.fetching)) {
                  tmp24 = cResult[13];
                }
                return tmp24;
              }
            }
            const obj2 = {
              commands: tmp16,
              commandSectionMap: tmp15,
              loading: true === tmp5.fetchState.fetching || true === tmp6.fetchState.fetching,
            };
            cResult[10] = tmp15;
            cResult[11] = tmp16;
            cResult[12] = true === tmp5.fetchState.fetching || true === tmp6.fetchState.fetching;
            cResult[13] = obj2;
            tmp24 = obj2;
          }
        }
      }
      let items = [...Object.keys(tmp9)];
      const keys = Object.keys(tmp13);
      HermesBuiltin.arraySpread(
        items,
        keys.filter((item) => !(item in closure_1)),
        tmp17,
      );
      if (undefined === includeBuiltIn || includeBuiltIn) {
        items.push(BuiltInSectionId.BUILT_IN);
      }
      items1 = [];
      obj3 = {};
      for (const item10081 of items) {
        let tmp21Result = tmp21();
        continue;
      }
      cResult[4] = context;
      cResult[5] = tmp9;
      cResult[6] = undefined === includeBuiltIn || includeBuiltIn;
      cResult[7] = tmp13;
      cResult[8] = obj3;
      cResult[9] = items1;
    }
  : function useApplicationCommandsInContext(cResult) {
      const context = cResult.context;
      let flag = cResult.includeBuiltIn;
      if (flag === undefined) {
        flag = true;
      }
      let flag2 = cResult.allowFetch;
      if (flag2 === undefined) {
        flag2 = true;
      }
      let tmp = closure_9(context, true, flag2);
      let closure_2 = tmp;
      const tmp2 = closure_10(true, flag2);
      let closure_3 = tmp2;
      let items = [context, flag, tmp.fetchState.fetching, , ,];
      let result = tmp.result;
      let sections;
      const useMemo = react.useMemo;
      if (result != null) {
        sections = result.sections;
      }
      items[3] = sections;
      items[4] = tmp2.fetchState.fetching;
      let result2 = tmp2.result;
      let sections1;
      if (result2 != null) {
        sections1 = result2.sections;
      }
      items[5] = sections1;
      return useMemo(() => {
        let commandSectionMap;
        let items1;
        const result = commandSectionMap.result;
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
        HermesBuiltin.arraySpread(
          items,
          keys.filter((item) => !(item in sections)),
          tmp2,
        );
        const tmp4 = items1;
        if (tmp4) {
          items.push(constants.BUILT_IN);
        }
        items1 = [];
        commandSectionMap = {};
        for (const item10038 of items) {
          let tmp7Result = tmp7();
          continue;
        }
        const obj2 = { commands: items1, commandSectionMap, loading: tmp9 };
        return obj2;
      }, items);
    };
let closure_17 = tmp4;
function filterApplicationAllowed(type) {
  _require = type;
  let channel;
  const buildPermissionContext = require("CommandPermissionContext").buildPermissionContext;
  require("CommandPermissionContext");
  if ("channel" === type.type) {
    channel = type.channel;
  }
  const items = [
    require("Server").ApplicationCommandType.CHAT,
    require("Server").ApplicationCommandType.PRIMARY_ENTRY_POINT,
  ];
  let closure_1 = buildPermissionContext(channel, items);
  return (id) => {
    let closure_2;
    let descriptor;
    let isImpersonating;
    let isUserInstalled;
    let roleIds;
    let sectionCommands;
    let userId;
    ({ context, userId, roleIds, isImpersonating } = isGuildInstalled);
    const tmp = closure_1_8(descriptor, id.id);
    descriptor = tmp.descriptor;
    ({ sectionCommands, isGuildInstalled: closure_1, isUserInstalled: closure_2 } = tmp);
    let guild_id;
    if (context != null) {
      guild_id = context.guild_id;
    }
    let allowedForUser = null;
    if (null != guild_id) {
      let permissions;
      const computeAllowedForUser = closure_1_2(closure_1_3[13]).computeAllowedForUser;
      const tmp6 = closure_1_2(closure_1_3[13]);
      if (descriptor != null) {
        permissions = descriptor.permissions;
      }
      allowedForUser = computeAllowedForUser(permissions, context.guild_id, userId, roleIds, isImpersonating);
    }
    let guild_id1;
    if (context != null) {
      guild_id1 = context.guild_id;
    }
    let allowedForChannel = null;
    if (null != guild_id1) {
      let permissions1;
      const computeAllowedForChannel = closure_1_2(closure_1_3[13]).computeAllowedForChannel;
      closure_1_2(closure_1_3[13]);
      if (descriptor != null) {
        permissions1 = descriptor.permissions;
      }
      allowedForChannel = computeAllowedForChannel(permissions1, context, context.guild_id);
    }
    let someResult = !tmp19;
    if (null != sectionCommands && sectionCommands.length > 0) {
      someResult = sectionCommands.some((item) => {
        let botId;
        const obj = {
          applicationAllowedForUser: allowedForUser,
          applicationAllowedForChannel: allowedForChannel,
          commandBotId: botId,
          isGuildInstalled,
          isUserInstalled,
        };
        botId = undefined;
        const hasAccess = commandLimit(applicationLimit[13]).hasAccess;
        commandLimit(applicationLimit[13]);
        if (descriptor != null) {
          botId = descriptor.botId;
        }
        const hasAccessResult = hasAccess(item, isGuildInstalled, obj);
        return hasAccessResult === context(applicationLimit[13]).HasAccessResult.ALLOWED;
      });
    }
    return someResult;
  };
}
function defaultApplicationBucketing(arg0) {
  const items = [
    (FAKE_BUILT_IN_APP) => {
      const obj = context(applicationLimit[12]);
      const sectionName = obj.getSectionName(FAKE_BUILT_IN_APP);
      const toLocaleLowerCaseResult = sectionName.toLocaleLowerCase();
      return toLocaleLowerCaseResult.startsWith(closure_0.toLocaleLowerCase());
    },
    ,
    ,
  ];
  items[1] = (FAKE_BUILT_IN_APP) => {
    const obj = context(applicationLimit[12]);
    const sectionName = obj.getSectionName(FAKE_BUILT_IN_APP);
    const toLocaleLowerCaseResult = sectionName.toLocaleLowerCase();
    return toLocaleLowerCaseResult.includes(closure_0.toLocaleLowerCase());
  };
  items[2] = (application) => {
    const obj = context(applicationLimit[12]);
    const sectionDescription = obj.getSectionDescription(application);
    let toLocaleLowerCaseResult;
    if (sectionDescription != null) {
      toLocaleLowerCaseResult = sectionDescription.toLocaleLowerCase();
    }
    flag = undefined;
    if (toLocaleLowerCaseResult != null) {
      flag = toLocaleLowerCaseResult.startsWith(closure_0.toLocaleLowerCase());
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  };
  let closure_0 = arg0;
  items[3] = (application) => {
    const obj = context(applicationLimit[12]);
    const sectionDescription = obj.getSectionDescription(application);
    let toLocaleLowerCaseResult;
    if (sectionDescription != null) {
      toLocaleLowerCaseResult = sectionDescription.toLocaleLowerCase();
    }
    flag = undefined;
    if (toLocaleLowerCaseResult != null) {
      flag = toLocaleLowerCaseResult.includes(closure_0.toLocaleLowerCase());
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  };
  return items;
}
function bucketApplicationNameStartsWith(arg0) {
  let closure_0 = arg0;
  return (FAKE_BUILT_IN_APP) => {
    const obj = context(applicationLimit[12]);
    const sectionName = obj.getSectionName(FAKE_BUILT_IN_APP);
    const toLocaleLowerCaseResult = sectionName.toLocaleLowerCase();
    return toLocaleLowerCaseResult.startsWith(closure_0.toLocaleLowerCase());
  };
}
function bucketApplicationNameContains(arg0) {
  let closure_0 = arg0;
  return (FAKE_BUILT_IN_APP) => {
    const obj = context(applicationLimit[12]);
    const sectionName = obj.getSectionName(FAKE_BUILT_IN_APP);
    const toLocaleLowerCaseResult = sectionName.toLocaleLowerCase();
    return toLocaleLowerCaseResult.includes(closure_0.toLocaleLowerCase());
  };
}
function bucketApplicationDescriptionStartsWith(arg0) {
  let closure_0 = arg0;
  return (application) => {
    const obj = context(applicationLimit[12]);
    const sectionDescription = obj.getSectionDescription(application);
    let toLocaleLowerCaseResult;
    if (sectionDescription != null) {
      toLocaleLowerCaseResult = sectionDescription.toLocaleLowerCase();
    }
    flag = undefined;
    if (toLocaleLowerCaseResult != null) {
      flag = toLocaleLowerCaseResult.startsWith(closure_0.toLocaleLowerCase());
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  };
}
function bucketApplicationDescriptionContains(arg0) {
  let closure_0 = arg0;
  return (application) => {
    const obj = context(applicationLimit[12]);
    const sectionDescription = obj.getSectionDescription(application);
    let toLocaleLowerCaseResult;
    if (sectionDescription != null) {
      toLocaleLowerCaseResult = sectionDescription.toLocaleLowerCase();
    }
    flag = undefined;
    if (toLocaleLowerCaseResult != null) {
      flag = toLocaleLowerCaseResult.includes(closure_0.toLocaleLowerCase());
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  };
}
function filterCommandAllowed(type) {
  _require = type;
  let channel;
  const buildPermissionContext = require("CommandPermissionContext").buildPermissionContext;
  require("CommandPermissionContext");
  const tmp = _require;
  if ("channel" === type.type) {
    channel = type.channel;
  }
  const items = [tmp(1985).ApplicationCommandType.CHAT];
  let closure_1 = buildPermissionContext(channel, items);
  let closure_2 = {};
  return (applicationId) => {
    let applicationAllowedForChannel;
    let applicationAllowedForUser;
    let botId;
    let isGuildInstalled;
    let isGuildInstalled2;
    let isImpersonating;
    let isUserInstalled;
    let isUserInstalled2;
    let roleIds;
    let userId;
    ({ context, userId, roleIds, isImpersonating } = closure_1);
    if (!(applicationId.applicationId in closure_2)) {
      const tmp5 = commandSectionMap(closure_0, applicationId.applicationId);
      const descriptor = tmp5.descriptor;
      let guild_id;
      ({ isGuildInstalled, isUserInstalled } = tmp5);
      if (context != null) {
        guild_id = context.guild_id;
      }
      let allowedForUser = null;
      if (null != guild_id) {
        let permissions;
        const computeAllowedForUser = commandLimit(applicationLimit[13]).computeAllowedForUser;
        const tmp11 = commandLimit(applicationLimit[13]);
        if (descriptor != null) {
          permissions = descriptor.permissions;
        }
        allowedForUser = computeAllowedForUser(permissions, context.guild_id, userId, roleIds, isImpersonating);
      }
      let guild_id1;
      if (context != null) {
        guild_id1 = context.guild_id;
      }
      let allowedForChannel = null;
      if (null != guild_id1) {
        let permissions1;
        const computeAllowedForChannel = commandLimit(applicationLimit[13]).computeAllowedForChannel;
        commandLimit(applicationLimit[13]);
        if (descriptor != null) {
          permissions1 = descriptor.permissions;
        }
        allowedForChannel = computeAllowedForChannel(permissions1, context, context.guild_id);
      }
      const obj = {
        descriptor,
        applicationAllowedForUser: allowedForUser,
        applicationAllowedForChannel: allowedForChannel,
        isGuildInstalled,
        isUserInstalled,
      };
      closure_2[applicationId.applicationId] = obj;
    }
    const descriptor2 = tmp24.descriptor;
    ({
      applicationAllowedForChannel,
      applicationAllowedForUser,
      isGuildInstalled: isGuildInstalled2,
      isUserInstalled: isUserInstalled2,
    } = closure_2[applicationId.applicationId]);
    const obj2 = {
      applicationAllowedForUser,
      applicationAllowedForChannel,
      commandBotId: botId,
      isGuildInstalled: isGuildInstalled2,
      isUserInstalled: isUserInstalled2,
    };
    botId = undefined;
    const hasAccess = commandLimit(applicationLimit[13]).hasAccess;
    commandLimit(applicationLimit[13]);
    if (descriptor2 != null) {
      botId = descriptor2.botId;
    }
    const hasAccessResult = hasAccess(applicationId, closure_1, obj2);
    return hasAccessResult === closure_2_0(applicationLimit[13]).HasAccessResult.ALLOWED;
  };
}
function defaultCommandBucketing(str) {
  let closure_0 = str;
  const items = [
    (arg0) => {
      let displayName;
      let untranslatedName;
      ({ untranslatedName, displayName } = arg0);
      const tmp2 = untranslatedName.startsWith(closure_0) || displayName.startsWith(closure_0);
      return tmp2;
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
  let closure_1 = substr.join(" ");
  items[1] = (arg0) => {
    let displayName;
    let untranslatedName;
    ({ untranslatedName, displayName } = arg0);
    if (untranslatedName.startsWith(closure_0)) {
      const parts = untranslatedName.split(" ");
      substr = parts.slice(1);
      const joined = substr.join(" ");
      if (joined.startsWith(closure_1)) {
        return true;
      }
    }
    if (displayName.startsWith(closure_0)) {
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
    let displayName;
    let untranslatedName;
    ({ untranslatedName, displayName } = arg0);
    const tmp2 = untranslatedName.includes(str2) || displayName.includes(str2);
    return tmp2;
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
      if (!name.startsWith(str2)) {
        let _HermesInternal = HermesInternal;
        let combined = "" + options.untranslatedName + " " + tmp2;
        if (!combined.startsWith(str2)) {
          if (null == options.displayName) {
            if (null != serverLocalizedName) {
              if (!serverLocalizedName.startsWith(str2)) {
                let _HermesInternal3 = HermesInternal;
                let combined1 = "" + options.untranslatedName + " " + serverLocalizedName;
                if (!combined1.startsWith(str2)) {
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
    let name;
    let serverLocalizedName;
    options = options.options;
    if (options == null) {
      options = [];
    }
    for (const item10008 of options) {
      ({ name, serverLocalizedName } = item10008);
      if (!name.includes(str2)) {
        let hasItem;
        if (serverLocalizedName != null) {
          hasItem = serverLocalizedName.includes(str2);
        }
      }
      obj.return();
      flag = true;
      return true;
    }
    return false;
  };
  return items;
}
function bucketRootCommandNameStartsWith(arg0) {
  let closure_0 = arg0;
  return (arg0) => {
    let displayName;
    let untranslatedName;
    ({ untranslatedName, displayName } = arg0);
    const tmp2 = untranslatedName.startsWith(closure_0) || displayName.startsWith(closure_0);
    return tmp2;
  };
}
function bucketFullCommandNameStartsWith(str) {
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
    if (untranslatedName.startsWith(closure_0)) {
      const parts = untranslatedName.split(" ");
      substr = parts.slice(1);
      const joined = substr.join(" ");
      if (joined.startsWith(closure_1)) {
        return true;
      }
    }
    if (displayName.startsWith(closure_0)) {
      const parts1 = displayName.split(" ");
      const substr1 = parts1.slice(1);
      const joined1 = substr1.join(" ");
      if (joined1.startsWith(closure_1)) {
        return true;
      }
    }
    return false;
  };
}
function bucketCommandNameContains(arg0) {
  let closure_0 = arg0;
  return (arg0) => {
    let displayName;
    let untranslatedName;
    ({ untranslatedName, displayName } = arg0);
    const tmp2 = untranslatedName.includes(str2) || displayName.includes(str2);
    return tmp2;
  };
}
function bucketOptionNameStartsWithOrCommandAndOptionStartsWith(arg0) {
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
      if (!name.startsWith(str2)) {
        let _HermesInternal = HermesInternal;
        let combined = "" + options.untranslatedName + " " + tmp2;
        if (!combined.startsWith(str2)) {
          if (null == options.displayName) {
            if (null != serverLocalizedName) {
              if (!serverLocalizedName.startsWith(str2)) {
                let _HermesInternal3 = HermesInternal;
                let combined1 = "" + options.untranslatedName + " " + serverLocalizedName;
                if (!combined1.startsWith(str2)) {
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
function bucketCommandOptionNameContains(arg0) {
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
      if (!name.includes(str2)) {
        let hasItem;
        if (serverLocalizedName != null) {
          hasItem = serverLocalizedName.includes(str2);
        }
      }
      obj.return();
      flag = true;
      return true;
    }
    return false;
  };
}
function defaultCommandsSort(arg0) {
  let closure_0 = arg0;
  const items = [
    (arg0, arg1) => {
      const scoreWithoutLoadingLatest = flag3.getScoreWithoutLoadingLatest(obj2, arg0);
      return flag3.getScoreWithoutLoadingLatest(obj2, arg1) - scoreWithoutLoadingLatest;
    },
    sortCommandsAlpha,
  ];
  return items;
}
function sortCommandsByFreceny(arg0) {
  let closure_0 = arg0;
  return (arg0, arg1) => {
    const scoreWithoutLoadingLatest = flag3.getScoreWithoutLoadingLatest(obj2, arg0);
    return flag3.getScoreWithoutLoadingLatest(obj2, arg1) - scoreWithoutLoadingLatest;
  };
}
let result = size.fileFinishedImporting("modules/app_launcher/utils/AppLauncherSearchUtils.tsx");

export const useApplicationsInContext = tmp3;
export const useApplicationCommandsInContext = tmp4;
export { filterApplicationAllowed };
export { defaultApplicationBucketing };
export { bucketApplicationNameStartsWith };
export { bucketApplicationNameContains };
export { bucketApplicationDescriptionStartsWith };
export { bucketApplicationDescriptionContains };
export { sortApplicationFreceny };
export { sortApplicationAlpha };
export { filterCommandAllowed };
export { defaultCommandBucketing };
export { bucketRootCommandNameStartsWith };
export { bucketFullCommandNameStartsWith };
export { bucketCommandNameContains };
export { bucketOptionNameStartsWithOrCommandAndOptionStartsWith };
export { bucketCommandOptionNameContains };
export function bucketCommandSectionNameStartsWith(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = {};
  return (applicationId) => {
    closure_0 = applicationId;
    if (applicationId.applicationId in closure_2) {
      return closure_2[applicationId.applicationId];
    } else {
      let FAKE_BUILT_IN_APP = closure_0.find((id) => id.id === applicationId.applicationId);
      const getSectionName = AppLauncherUtils.getSectionName;
      AppLauncherUtils;
      if (FAKE_BUILT_IN_APP == null) {
        FAKE_BUILT_IN_APP = AppLauncherUtils.FAKE_BUILT_IN_APP;
      }
      const sectionName = getSectionName(FAKE_BUILT_IN_APP);
      const toLocaleLowerCaseResult = sectionName.toLocaleLowerCase();
      const startsWithResult = toLocaleLowerCaseResult.startsWith(closure_1.toLocaleLowerCase());
      closure_2[applicationId.applicationId] = startsWithResult;
      return startsWithResult;
    }
  };
}
export function bucketCommandSectionNameContains(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = {};
  return (applicationId) => {
    closure_0 = applicationId;
    if (applicationId.applicationId in closure_2) {
      return closure_2[applicationId.applicationId];
    } else {
      let FAKE_BUILT_IN_APP = closure_0.find((id) => id.id === applicationId.applicationId);
      const getSectionName = AppLauncherUtils.getSectionName;
      AppLauncherUtils;
      if (FAKE_BUILT_IN_APP == null) {
        FAKE_BUILT_IN_APP = AppLauncherUtils.FAKE_BUILT_IN_APP;
      }
      const sectionName = getSectionName(FAKE_BUILT_IN_APP);
      const toLocaleLowerCaseResult = sectionName.toLocaleLowerCase();
      const hasItem = toLocaleLowerCaseResult.includes(closure_1.toLocaleLowerCase());
      closure_2[applicationId.applicationId] = hasItem;
      return hasItem;
    }
  };
}
export { defaultCommandsSort };
export { sortCommandsByFreceny };
export { sortCommandsAlpha };
export const useLocalSearchResults = function useLocalSearchResults(context) {
  context = context.context;
  const str = context.query;
  let substr = str;
  const commandLimit = context.commandLimit;
  const applicationLimit = context.applicationLimit;
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
  let closure_10;
  let memo;
  let tmp = str;
  if (str.startsWith("" + COMMAND_SENTINEL)) {
    substr = str.substring(1);
    tmp = substr;
  }
  let tmp3 = closure_17({ context, includeBuiltIn: true });
  commands = tmp3.commands;
  commandSectionMap = tmp3.commandSectionMap;
  let loading = tmp3.loading;
  apps = closure_16({
    context,
    onlyWithCommands: true,
    includeBuiltIn: true,
    includeEmbeddedApps: flag3,
    includeNonEmbeddedApps: flag2,
  }).apps;
  let guild_id = null;
  let tmp4 = substr(applicationLimit[14]);
  if ("channel" === context.type) {
    guild_id = context.channel.guild_id;
  }
  const tmp4Result = tmp4({ guildId: guild_id });
  closure_10 = tmp4Result;
  let items = [flag, commands, commandLimit, context, tmp];
  memo = flag2.useMemo(() => {
    let items1;
    let items2;
    let items3;
    let queryDataResult;
    if (flag) {
      let tmp4 = ArraySearch;
      let obj = { limit: commandLimit, filterPredicates: items1, bucketPredicates: items2, sortComparers: items3 };
      let closure_0 = context;
      let closure_1;
      let closure_2;
      const queryData = tmp4.queryData;
      let tmp8 = CommandPermissionContext;
      let channel;
      const buildPermissionContext = tmp8.buildPermissionContext;
      if ("channel" === context.type) {
        channel = context.channel;
      }
      const items = [Server.ApplicationCommandType.CHAT];
      buildPermissionContext(channel, items);
      closure_2 = {};
      items1 = [
        (applicationId) => {
          let applicationAllowedForChannel;
          let applicationAllowedForUser;
          let botId;
          let isGuildInstalled;
          let isGuildInstalled2;
          let isImpersonating;
          let isUserInstalled;
          let isUserInstalled2;
          let roleIds;
          let userId;
          ({ context, userId, roleIds, isImpersonating } = closure_1);
          if (!(applicationId.applicationId in closure_2)) {
            const tmp5 = commandSectionMap(closure_0, applicationId.applicationId);
            const descriptor = tmp5.descriptor;
            let guild_id;
            ({ isGuildInstalled, isUserInstalled } = tmp5);
            if (context != null) {
              guild_id = context.guild_id;
            }
            let allowedForUser = null;
            if (null != guild_id) {
              let permissions;
              const computeAllowedForUser = commandLimit(applicationLimit[13]).computeAllowedForUser;
              const tmp11 = commandLimit(applicationLimit[13]);
              if (descriptor != null) {
                permissions = descriptor.permissions;
              }
              allowedForUser = computeAllowedForUser(permissions, context.guild_id, userId, roleIds, isImpersonating);
            }
            let guild_id1;
            if (context != null) {
              guild_id1 = context.guild_id;
            }
            let allowedForChannel = null;
            if (null != guild_id1) {
              let permissions1;
              const computeAllowedForChannel = commandLimit(applicationLimit[13]).computeAllowedForChannel;
              commandLimit(applicationLimit[13]);
              if (descriptor != null) {
                permissions1 = descriptor.permissions;
              }
              allowedForChannel = computeAllowedForChannel(permissions1, context, context.guild_id);
            }
            const obj = {
              descriptor,
              applicationAllowedForUser: allowedForUser,
              applicationAllowedForChannel: allowedForChannel,
              isGuildInstalled,
              isUserInstalled,
            };
            closure_2[applicationId.applicationId] = obj;
          }
          const descriptor2 = tmp24.descriptor;
          ({
            applicationAllowedForChannel,
            applicationAllowedForUser,
            isGuildInstalled: isGuildInstalled2,
            isUserInstalled: isUserInstalled2,
          } = closure_2[applicationId.applicationId]);
          const obj2 = {
            applicationAllowedForUser,
            applicationAllowedForChannel,
            commandBotId: botId,
            isGuildInstalled: isGuildInstalled2,
            isUserInstalled: isUserInstalled2,
          };
          botId = undefined;
          const hasAccess = commandLimit(applicationLimit[13]).hasAccess;
          commandLimit(applicationLimit[13]);
          if (descriptor2 != null) {
            botId = descriptor2.botId;
          }
          const hasAccessResult = hasAccess(applicationId, closure_1, obj2);
          return hasAccessResult === closure_2_0(applicationLimit[13]).HasAccessResult.ALLOWED;
        },
      ];
      const str2 = substr;
      items2 = [
        (arg0) => {
          let displayName;
          let untranslatedName;
          ({ untranslatedName, displayName } = arg0);
          const tmp2 = untranslatedName.startsWith(closure_0) || displayName.startsWith(closure_0);
          return tmp2;
        },
        ,
        ,
        ,
      ];
      closure_0 = undefined;
      closure_1 = undefined;
      let tmp10 = null;
      let parts;
      if (substr != null) {
        parts = str2.split(" ");
      }
      closure_0 = parts[0];
      substr = parts.slice(1);
      closure_1 = substr.join(" ");
      items2[1] = (arg0) => {
        let displayName;
        let untranslatedName;
        ({ untranslatedName, displayName } = arg0);
        if (untranslatedName.startsWith(closure_0)) {
          const parts = untranslatedName.split(" ");
          substr = parts.slice(1);
          const joined = substr.join(" ");
          if (joined.startsWith(closure_1)) {
            return true;
          }
        }
        if (displayName.startsWith(closure_0)) {
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
        let displayName;
        let untranslatedName;
        ({ untranslatedName, displayName } = arg0);
        const tmp2 = untranslatedName.includes(str2) || displayName.includes(str2);
        return tmp2;
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
          if (!name.startsWith(str2)) {
            let _HermesInternal = HermesInternal;
            let combined = "" + options.untranslatedName + " " + tmp2;
            if (!combined.startsWith(str2)) {
              if (null == options.displayName) {
                if (null != serverLocalizedName) {
                  if (!serverLocalizedName.startsWith(str2)) {
                    let _HermesInternal3 = HermesInternal;
                    let combined1 = "" + options.untranslatedName + " " + serverLocalizedName;
                    if (!combined1.startsWith(str2)) {
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
      items2[4] = (options) => {
        let name;
        let serverLocalizedName;
        options = options.options;
        if (options == null) {
          options = [];
        }
        for (const item10008 of options) {
          ({ name, serverLocalizedName } = item10008);
          if (!name.includes(str2)) {
            let hasItem;
            if (serverLocalizedName != null) {
              hasItem = serverLocalizedName.includes(str2);
            }
          }
          obj.return();
          flag = true;
          return true;
        }
        return false;
      };
      let channel1;
      if ("channel" === context.type) {
        channel1 = context.channel;
      }
      let obj2 = { channel: channel1 };
      items3 = [
        (arg0, arg1) => {
          const scoreWithoutLoadingLatest = flag3.getScoreWithoutLoadingLatest(obj2, arg0);
          return flag3.getScoreWithoutLoadingLatest(obj2, arg1) - scoreWithoutLoadingLatest;
        },
        sortCommandsAlpha,
      ];
      queryDataResult = queryData(commands, obj);
    } else {
      queryDataResult = [];
    }
    return queryDataResult;
  }, items);
  let items1 = [apps, memo, commandSectionMap];
  const memo1 = flag2.useMemo(function () {
    if (0 === memo.length) {
      return [];
    } else {
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map(
        apps.map((id) => {
          const items = [id.id, id];
          return items;
        }),
      );
      let tmp4 = map;
      let obj = substr(applicationLimit[16]);
      return obj.compact(
        memo.map((applicationId) => {
          let tmp4;
          const value = map.get(applicationId.applicationId);
          let tmp2 = null;
          if (null != value) {
            const obj = { command: applicationId, application: value, section: tmp4 };
            tmp4 = commandSectionMap[applicationId.id];
            if (tmp4 == null) {
              tmp4 = null;
            }
            tmp2 = obj;
          }
          return tmp2;
        }),
      );
    }
  }, items1);
  let items2 = [flag2, flag3, applicationLimit, context, tmp, apps, tmp4Result];
  const memo2 = flag2.useMemo(function () {
    let items4;
    let items5;
    let items6;
    let tmp3;
    const items = [];
    if (flag3) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set(apps.map((id) => id.id));
      const push = items.push;
      const items1 = [];
      HermesBuiltin.arraySpread(items1, apps, 0);
      HermesBuiltin.apply(push, items1, items);
      const push2 = items.push;
      const found = closure_10.filter((application) => !set.has(application.application.id));
      const items2 = [];
      HermesBuiltin.arraySpread(
        items2,
        found.map((application) => application.application),
        0,
      );
      const tmp19 = items2;
      HermesBuiltin.apply(push2, items2, items);
      tmp3 = items;
    } else {
      tmp3 = items;
      if (flag2) {
        tmp3 = apps;
      }
    }
    let obj = { limit: applicationLimit, filterPredicates: items4, bucketPredicates: items5, sortComparers: items6 };
    let closure_0 = context;
    let closure_1;
    const queryData = ArraySearch.queryData;
    ArraySearch;
    let channel;
    const buildPermissionContext = CommandPermissionContext.buildPermissionContext;
    CommandPermissionContext;
    if ("channel" === context.type) {
      channel = context.channel;
    }
    const items3 = [Server.ApplicationCommandType.CHAT, Server.ApplicationCommandType.PRIMARY_ENTRY_POINT];
    closure_1 = buildPermissionContext(channel, items3);
    items4 = [
      (id) => {
        let closure_2;
        let descriptor;
        let isImpersonating;
        let isUserInstalled;
        let roleIds;
        let sectionCommands;
        let userId;
        ({ context, userId, roleIds, isImpersonating } = isGuildInstalled);
        const tmp = closure_1_8(descriptor, id.id);
        descriptor = tmp.descriptor;
        ({ sectionCommands, isGuildInstalled: closure_1, isUserInstalled: closure_2 } = tmp);
        let guild_id;
        if (context != null) {
          guild_id = context.guild_id;
        }
        let allowedForUser = null;
        if (null != guild_id) {
          let permissions;
          const computeAllowedForUser = closure_1_2(closure_1_3[13]).computeAllowedForUser;
          const tmp6 = closure_1_2(closure_1_3[13]);
          if (descriptor != null) {
            permissions = descriptor.permissions;
          }
          allowedForUser = computeAllowedForUser(permissions, context.guild_id, userId, roleIds, isImpersonating);
        }
        let guild_id1;
        if (context != null) {
          guild_id1 = context.guild_id;
        }
        let allowedForChannel = null;
        if (null != guild_id1) {
          let permissions1;
          const computeAllowedForChannel = closure_1_2(closure_1_3[13]).computeAllowedForChannel;
          closure_1_2(closure_1_3[13]);
          if (descriptor != null) {
            permissions1 = descriptor.permissions;
          }
          allowedForChannel = computeAllowedForChannel(permissions1, context, context.guild_id);
        }
        let someResult = !tmp19;
        if (null != sectionCommands && sectionCommands.length > 0) {
          someResult = sectionCommands.some((item) => {
            let botId;
            const obj = {
              applicationAllowedForUser: allowedForUser,
              applicationAllowedForChannel: allowedForChannel,
              commandBotId: botId,
              isGuildInstalled,
              isUserInstalled,
            };
            botId = undefined;
            const hasAccess = commandLimit(applicationLimit[13]).hasAccess;
            commandLimit(applicationLimit[13]);
            if (descriptor != null) {
              botId = descriptor.botId;
            }
            const hasAccessResult = hasAccess(item, isGuildInstalled, obj);
            return hasAccessResult === context(applicationLimit[13]).HasAccessResult.ALLOWED;
          });
        }
        return someResult;
      },
    ];
    items5 = [
      (FAKE_BUILT_IN_APP) => {
        const obj = context(applicationLimit[12]);
        const sectionName = obj.getSectionName(FAKE_BUILT_IN_APP);
        const toLocaleLowerCaseResult = sectionName.toLocaleLowerCase();
        return toLocaleLowerCaseResult.startsWith(closure_0.toLocaleLowerCase());
      },
      ,
      ,
    ];
    items5[1] = (FAKE_BUILT_IN_APP) => {
      const obj = context(applicationLimit[12]);
      const sectionName = obj.getSectionName(FAKE_BUILT_IN_APP);
      const toLocaleLowerCaseResult = sectionName.toLocaleLowerCase();
      return toLocaleLowerCaseResult.includes(closure_0.toLocaleLowerCase());
    };
    items5[2] = (application) => {
      const obj = context(applicationLimit[12]);
      const sectionDescription = obj.getSectionDescription(application);
      let toLocaleLowerCaseResult;
      if (sectionDescription != null) {
        toLocaleLowerCaseResult = sectionDescription.toLocaleLowerCase();
      }
      flag = undefined;
      if (toLocaleLowerCaseResult != null) {
        flag = toLocaleLowerCaseResult.startsWith(closure_0.toLocaleLowerCase());
      }
      if (flag == null) {
        flag = false;
      }
      return flag;
    };
    closure_0 = substr;
    items5[3] = (application) => {
      const obj = context(applicationLimit[12]);
      const sectionDescription = obj.getSectionDescription(application);
      let toLocaleLowerCaseResult;
      if (sectionDescription != null) {
        toLocaleLowerCaseResult = sectionDescription.toLocaleLowerCase();
      }
      flag = undefined;
      if (toLocaleLowerCaseResult != null) {
        flag = toLocaleLowerCaseResult.includes(closure_0.toLocaleLowerCase());
      }
      if (flag == null) {
        flag = false;
      }
      return flag;
    };
    items6 = [sortApplicationFreceny, sortApplicationAlpha];
    return queryData(tmp3, obj);
  }, items2);
  let tmp8 = memo1.length > 0;
  let tmp9 = memo2.length > 0;
  let obj = {
    commandResults: memo1,
    hasCommandResults: tmp8,
    applicationResults: memo2,
    hasApplicationResults: tmp9,
    isEmptyState: !tmp8 && !tmp9,
    loading,
  };
  if (loading) {
    loading = flag;
  }
  return obj;
};
export const useGlobalSearchResults = function useGlobalSearchResults(fetches) {
  let context;
  let excludeNonEmbeddedApps;
  let first;
  let query;
  ({ context, query } = fetches);
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
  let current;
  let closure_6;
  let ref;
  let fetchState;
  let totalPages;
  let memo;
  let callback1;
  const entrypoint = fetches.entrypoint;
  let tmp = query;
  if (query.startsWith("" + COMMAND_SENTINEL)) {
    const substr = query.substring(1);
    query = substr;
    tmp = substr;
  }
  const tmp3 = query;
  const tmp5 = entrypoint === query(8961).AppLauncherEntrypoint.VOICE;
  dependencyMap = tmp5;
  guild_id = undefined;
  if ("channel" === context.type) {
    guild_id = context.channel.guild_id;
  }
  const tmp7 = guild_id(current.useState(1), 2);
  current = tmp7[0];
  closure_6 = tmp7[1];
  ref = current.useRef(current);
  ref.current = current;
  const items = [ApplicationDirectorySearchStore];
  const items1 = [tmp, guild_id, current, tmp5];
  const tmp3Result = tmp3(504);
  const stateFromStoresObject = tmp3Result.useStateFromStoresObject(
    items,
    () => {
      let obj2;
      const obj = { fetchState: ApplicationDirectorySearchStore.getFetchState(obj2), totalPages: num };
      obj2 = {
        query,
        guildId: guild_id,
        page,
        integrationType: ApplicationIntegrationType.ApplicationIntegrationType.USER_INSTALL,
        minUserInstallCommandCount: 1,
        excludeAppsWithCustomInstallUrl: true,
        excludeNonEmbeddedApps,
        excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: true,
        source: SearchAppsRequestSource.SearchAppsRequestSource.APP_LAUNCHER,
      };
      const obj3 = {
        query,
        guildId: guild_id,
        page,
        integrationType: ApplicationIntegrationType.ApplicationIntegrationType.USER_INSTALL,
        minUserInstallCommandCount: 1,
        excludeAppsWithCustomInstallUrl: true,
        excludeNonEmbeddedApps,
        excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: true,
        source: SearchAppsRequestSource.SearchAppsRequestSource.APP_LAUNCHER,
      };
      searchResults = ApplicationDirectorySearchStore.getSearchResults(obj3);
      num = undefined;
      if (searchResults != null) {
        num = searchResults.totalPages;
      }
      if (num == null) {
        num = 0;
      }
      return obj;
    },
    items1,
  );
  fetchState = stateFromStoresObject.fetchState;
  totalPages = stateFromStoresObject.totalPages;
  const items2 = [fetchState, guild_id, tmp, current, tmp5];
  memo = current.useMemo(() => {
    let guildId;
    if (fetchState !== FetchState.FETCHED) {
      let diff;
      if (tmp3 !== FetchState.ERROR) {
        diff = first - 1;
      }
      let obj = { length: diff };
      return tmp2(obj, (arg0, arg1) => {
        const obj = {
          query,
          guildId,
          page: arg1 + 1,
          integrationType: query(excludeNonEmbeddedApps[19]).ApplicationIntegrationType.USER_INSTALL,
          minUserInstallCommandCount: 1,
          excludeAppsWithCustomInstallUrl: true,
          excludeNonEmbeddedApps,
          excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: true,
          source: query(excludeNonEmbeddedApps[20]).SearchAppsRequestSource.APP_LAUNCHER,
        };
        searchResults = searchResults.getSearchResults(obj);
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
  const callback = current.useCallback(() => {
    const tmp2 =
      fetchState === FetchState.FETCHED &&
      length === ref.current &&
      length > 0 &&
      length < totalPages &&
      length < num &&
      memo[length - 1].length > 0;
    if (tmp2) {
      ref.current = ref.current + 1;
      closure_6((arg0) => arg0 + 1);
    }
  }, items3);
  callback1 = current.useCallback((arg0) => {
    let guildId;
    let page;
    ({ query, page, guildId } = arg0);
    const obj2 = {
      query,
      guildId,
      options: {
        page,
        integrationType: ApplicationIntegrationType.ApplicationIntegrationType.USER_INSTALL,
        minUserInstallCommandCount: 1,
        excludeAppsWithCustomInstallUrl: true,
        excludeNonEmbeddedApps,
        excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: true,
        source: SearchAppsRequestSource.SearchAppsRequestSource.APP_LAUNCHER,
      },
    };
    const obj = ApplicationDirectoryActionCreatorsAll;
    ({
      page,
      integrationType: ApplicationIntegrationType.ApplicationIntegrationType.USER_INSTALL,
      minUserInstallCommandCount: 1,
      excludeAppsWithCustomInstallUrl: true,
      excludeNonEmbeddedApps,
      excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: true,
      source: SearchAppsRequestSource.SearchAppsRequestSource.APP_LAUNCHER,
    });
    obj.search(obj2);
  }, items4);
  const items5 = [tmp, guild_id, callback1, current, flag];
  const effect = current.useEffect(() => {
    if (flag) {
      const obj = { query, page, guildId: guild_id };
      callback1(obj);
    }
  }, items5);
  const items6 = [guild_id, tmp];
  const effect1 = current.useEffect(() => {
    closure_6(1);
  }, items6);
  let obj = { fetchState, applicationResults: memo.flat(), fetchNextPage: callback };
  return obj;
};
