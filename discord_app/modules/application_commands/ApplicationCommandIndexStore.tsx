// === Module 9290: ApplicationCommandIndexStore ===

// Module 9290 (ApplicationCommandIndexStore)
import LoggerDefault from "Logger" /* 3 */;
import _modDef38 from "module_38" /* 38 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import Server from "Server" /* 1894 */;
import fuzzysearchDefault from "fuzzysearch" /* 5517 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5520 */;
import ApplicationCommandUtils from "ApplicationCommandUtils" /* 7521 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 7523 */;
import ApplicationCommandIndexActionCreators from "ApplicationCommandIndexActionCreators" /* 9294 */;
import CommandPermissionContext from "CommandPermissionContext" /* 9295 */;
import ApplicationCommandQueryTypes from "ApplicationCommandQueryTypes" /* 9298 */;
import ApplicationCommandBuiltIns from "ApplicationCommandBuiltIns" /* 9300 */;
import CommandPermissionUtils from "CommandPermissionUtils" /* 9405 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import ApplicationFrecencyStore from "ApplicationFrecencyStore" /* 9291 */;
import LocaleStore from "LocaleStore" /* 2025 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import GuildStore from "GuildStore" /* 1979 */;
import UserStore from "UserStore" /* 1371 */;
import ApplicationCommandFrecencyStore from "ApplicationCommandFrecencyStore" /* 9292 */;

const CommandPermissionUtilsAll = CommandPermissionUtils;

require = fn;
function getIndexKey(type) {
  type = type.type;
  if ("guild" === type) {
    return type.guildId;
  } else if ("channel" === type) {
    return type.channelId;
  } else if ("user" === type) {
    return closure_20;
  } else {
    return "application" === type ? type.applicationId : undefined;
  }
}
function updateIndex(target, arg1) {
  if (flag === undefined) {
    flag = false;
  }
  const type = target.type;
  if ("guild" === type) {
    let applicationId = target.guildId;
  } else if ("channel" === type) {
    applicationId = target.channelId;
  } else if ("user" === type) {
    applicationId = closure_20;
  } else if ("application" === type) {
    applicationId = target.applicationId;
  }
  if (null != applicationCommandIndexStore.indices[applicationId]) {
    if (tmp8) {
      const abort = tmp2.fetchState.abort;
      abort.abort();
    }
    let obj = {};
    const merged = Object.assign(tmp2);
    const merged1 = Object.assign(arg1);
    let tmp3 = obj;
    tmp8 = "fetchState" in arg1 && tmp2.fetchState.fetching;
  } else if (flag) {
    obj = { serverVersion: SymbolResult, fetchState: { fetching: false } };
    const merged2 = Object.assign(arg1);
    tmp3 = obj;
  }
  if (undefined !== tmp3) {
    applicationCommandIndexStore.indices[applicationId] = tmp3;
    if ("application" === target.type) {
      const applicationIndices = applicationCommandIndexStore.applicationIndices;
      const result = applicationIndices.set(applicationId, tmp3);
      applicationCommandIndexStore.applicationIndicesVersion = applicationCommandIndexStore.applicationIndicesVersion + 1;
    }
  }
  return applicationCommandIndexStore.indices[applicationId];
}
function handleReset() {
  const values = Object.values(applicationCommandIndexStore.indices);
  for (const item10011 of values) {
    if (item10011.fetchState.fetching) {
      let abort = tmp2.fetchState.abort;
      let abortResult = abort.abort();
    }
    continue;
  }
  applicationCommandIndexStore.indices = {};
}
let closure_32 = async function _getOrFetchApplicationCommandIndexForTarget(arg0) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_5 = tmp5;
          closure_4 = tmp2;
          closure_132_0 = undefined;
          const tmp33 = getIndexKey(closure_0);
          closure_132_0 = tmp33;
          closure_1 = tmp35;
          if (indices.indices[tmp33] == null) {
            closure_1 = closure_2_25;
          }
          if (shouldFetch(closure_1)) {
            c6 = 1;
            c7 = 1;
            const obj1 = { value: updateIndexAndFetchApplicationCommandIndex(closure_0), done: false };
            return obj1;
          } else if (tmp23.fetchState.fetching) {
            c6 = 2;
            c7 = 1;
            const obj2 = { value: tmp23.fetchState.promise, done: false };
            return obj2;
          } else {
            c7 = 3;
            const obj3 = { value: tmp23, done: true };
            return obj3;
          }
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          value2 = tmp18;
          if (closure_133_37.indices[closure_132_0] == null) {
            value2 = closure_133_25;
          }
          c7 = 3;
          const obj5 = { value: value2, done: true };
          return obj5;
        }
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c7 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        value = tmp10;
        if (closure_133_37.indices[closure_132_0] == null) {
          value = closure_133_25;
        }
        c7 = 3;
        obj = { value, done: true };
        return obj;
      }
    } catch (tmp26) {
      c7 = tmp;
      throw tmp26;
    }
  }
};
function updateIndexAndFetchApplicationCommandIndex() {
  const self = this;
  const apply = closure_34.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_34 = async function _updateIndexAndFetchApplicationCommandIndex(arg0) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c1 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          const _AbortController = AbortController;
          const abortController = new AbortController();
          const future = new require("Future").Future();
          const obj1 = { fetchState: null };
          const obj2 = { fetching: true, abort: abortController, promise: future.promise };
          obj1.fetchState = obj2;
          updateIndex(closure_0, obj1, true);
          const applicationCommandIndex = require("ApplicationCommandIndexActionCreators").fetchApplicationCommandIndex(closure_0, abortController);
          const obj7 = require("ApplicationCommandIndexActionCreators");
          c2 = 1;
          c1 = 1;
          const obj3 = { value: applicationCommandIndex.then(future.resolve).catch(future.reject), done: false };
          return obj3;
        }
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        c1 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp5) {
      c1 = tmp;
      throw tmp5;
    }
  }
};
function handleFetchSuccess(arg0) {
  if (flag === undefined) {
    flag = false;
  }
  ({ target, index } = arg0);
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  if (null == id) {
    if (!c27) {
      closure_28.push(arg0);
    }
    return false;
  } else {
    let obj = {};
    obj = {};
    const _Set = Set;
    const set = new Set();
    const applications = index.applications;
    const iter2 = applications[Symbol.iterator]();
    const nextResult = iter2.next();
    while (iter2 !== undefined) {
      let tmp6 = nextResult;
      if (null == nextResult.bot) {
        if (null != tmp6.bot_id) {
          obj[tmp6.bot_id] = tmp6.id;
          let user = UserStore.getUser(tmp6.bot_id);
          if (null != user) {
            tmp6.bot = tmp13;
          } else {
            let addResult = set.add(tmp6.bot_id);
          }
          obj = {};
          let tmp19 = id;
          let obj1 = id(7521);
          let merged = Object.assign(obj1.getApplicationCommandSection(toApplication(tmp6), false));
          let keyPermissionsResult;
          if (null != tmp6.permissions) {
            let tmp19Result = tmp19(7522);
            keyPermissionsResult = tmp19Result.keyPermissions(toServerPermissions(tmp6.permissions, id));
          }
          obj1 = { descriptor: null, commands: null };
          obj.permissions = keyPermissionsResult;
          obj.botId = tmp6.bot_id;
          obj1.descriptor = obj;
          obj1.commands = {};
          obj[tmp6.id] = obj1;
          continue;
        }
      }
      if (null != tmp6.bot) {
        obj[tmp6.bot.id] = tmp6.id;
      }
    }
    if (tmp32) {
      const items = [];
      HermesBuiltin.arraySpread(tmp64, 0);
      const membersById = GuildActionCreatorsDefault.requestMembersById(target.guildId, items);
    }
    const application_commands = index.application_commands;
    const applicationCommands = id(7521).buildApplicationCommands(application_commands.map((description_default) => {
      const obj = {};
      const merged = Object.assign(description_default);
      let str = description_default.description_default;
      if (str == null) {
        str = description_default.description;
      }
      if (str == null) {
        str = "";
      }
      obj.description = str;
      ({ dm_permission: obj.dm_permission, name_default } = description_default);
      if (name_default == null) {
        name_default = description_default.name;
      }
      obj.name = name_default;
      const options = description_default.options;
      let mapped;
      if (options != null) {
        mapped = options.map(toServerOption);
      }
      if (mapped == null) {
        mapped = [];
      }
      obj.options = mapped;
      let tmp4;
      if (null != description_default.permissions) {
        tmp4 = toServerPermissions(description_default.permissions, id);
      }
      obj.permissions = tmp4;
      if (description_default.description !== description_default.description_default) {
        obj.description_localized = description_default.description;
      }
      if (description_default.name !== description_default.name_default) {
        obj.name_localized = description_default.name;
      }
      return obj;
    }), true);
    const iter = applicationCommands[Symbol.iterator]();
    const nextResult1 = iter.next();
    while (iter !== undefined) {
      let tmp49 = nextResult1;
      let tmp50 = obj[nextResult1.applicationId];
      if (null != tmp50) {
        tmp51.commands[tmp49.id] = tmp49;
      } else {
        let errorResult = logger.error("Command has no matching application");
      }
      continue;
    }
    let version = index.version;
    if (version == null) {
      version = SymbolResult1;
    }
    const obj2 = { serverVersion: version, result: null, fetchState: null };
    const obj3 = { sections: obj, sectionIdsByBotId: obj, version };
    obj2.result = obj3;
    obj2.fetchState = { fetching: false };
    updateIndex(target, obj2, flag);
    const obj6 = id(7521);
    tmp32 = "guild" === target.type && set.size > 0;
    tmp64 = set;
  }
}
function updateGuildBotMembers(guildId, members) {
  let obj = { type: "guild", guildId };
  const type = obj.type;
  if ("guild" === type) {
    let applicationId = obj.guildId;
  } else if ("channel" === type) {
    applicationId = obj.channelId;
  } else if ("user" === type) {
    applicationId = closure_20;
  } else if ("application" === type) {
    applicationId = obj.applicationId;
  }
  let result;
  if (applicationCommandIndexStore.indices[applicationId] != null) {
    result = tmp.result;
  }
  const require = result;
  if (null == result) {
    return false;
  } else {
    c1 = false;
    const item = members.forEach((user) => {
      user = user.user;
      if (user.bot) {
        if (null != result.sectionIdsByBotId[user.id]) {
          _modDef38(null != result.sections[tmp2], "Bot has no matching index section");
          _modDef38(null != result.sections[tmp2].descriptor.application, "Bot's index section has no application info");
          let obj = {};
          const merged = Object.assign(tmp4.descriptor.application);
          obj.bot = user;
          const applicationCommandSection = obj.getApplicationCommandSection(obj, false, tmp);
          obj = {};
          const merged1 = Object.assign(tmp4.descriptor);
          const merged2 = Object.assign(applicationCommandSection);
          result.sections[tmp2].descriptor = obj;
          c1 = true;
        }
      }
    });
    return c1;
  }
}
function handleStaleUserIndex() {
  updateIndex({ type: "user" }, { serverVersion: SymbolResult });
}
function useQueryState(type, commandTypes, allowFetch) {
  _require = type;
  let channel;
  if ("channel" === type.type) {
    channel = type.channel;
  }
  permissionContext = require("CommandPermissionContext").usePermissionContext(channel, commandTypes.commandTypes);
  _slicedToArray = tmp3;
  allowFetch = allowFetch.allowFetch;
  closure_129_0 = type;
  closure_129_1 = tmp3;
  closure_129_2 = allowFetch;
  const tmp4 = _slicedToArray(stateFromStoresObject1.useState(true), 2);
  const first = tmp4[0];
  closure_129_3 = first;
  closure_129_4 = tmp4[1];
  let obj = require("CommandPermissionContext");
  const items = [applicationCommandIndexStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => {
    if ("channel" === type.type) {
      let contextState = applicationCommandIndexStore.getContextState(tmp);
    } else {
      contextState = applicationCommandIndexStore.getUserState();
    }
    return contextState;
  });
  closure_129_5 = stateFromStoresObject;
  const items1 = [stateFromStoresObject, allowFetch, type, false !== commandTypes.applicationCommands, first];
  const effect = stateFromStoresObject1.useEffect(() => {
    if (permissionContext) {
      let guild_id = type;
      if ("contextless" !== type.type) {
        if (closure_2) {
          let tmp13 = closure_1;
          if (closure_1) {
            const channel = guild_id.channel;
            guild_id = undefined;
            if (channel != null) {
              guild_id = channel.guild_id;
            }
            let tmp16 = null != guild_id;
            if (!tmp16) {
              type = undefined;
              if (channel != null) {
                type = channel.type;
              }
              let tmp19 = type === constants3.DM;
              if (tmp19) {
                const user = UserStore.getUser(channel.getRecipientId());
                let bot;
                if (user != null) {
                  bot = user.bot;
                }
                tmp19 = true === bot;
              }
              tmp16 = tmp19;
            }
            tmp13 = tmp16;
          }
          if (tmp13) {
            let obj1 = AnalyticsUtilsDefault;
            let obj = { miss: null == stateFromStoresObject.result, size: null };
            const _Object = Object;
            obj.size = Object.keys(applicationCommandIndexStore.indices).length;
            obj1.track(constants2.APPLICATION_COMMAND_CACHE_FETCH, obj);
            const result2 = stateFromStoresObject.result;
            let version;
            if (result2 != null) {
              version = result2.version;
            }
            let fetching2 = !tmp33;
            if (version !== stateFromStoresObject.serverVersion) {
              fetching2 = stateFromStoresObject.fetchState.fetching;
            }
            let tmp34 = !fetching2;
            if (!fetching2) {
              let tmp35 = null == stateFromStoresObject.fetchState.retryAfter;
              if (!tmp35) {
                const _Date2 = Date;
                tmp35 = Date.now() >= stateFromStoresObject.fetchState.retryAfter;
              }
              tmp34 = tmp35;
            }
            if (tmp34) {
              if (null == guild_id.channel.guild_id) {
                obj = { type: "channel", channelId: guild_id.channel.id };
                const applicationCommandIndex = ApplicationCommandIndexActionCreators.requestApplicationCommandIndex(obj);
              }
            }
            obj1 = { type: "guild", guildId: null };
            guild_id = guild_id.channel.guild_id;
            obj1.guildId = guild_id;
            const applicationCommandIndex1 = ApplicationCommandIndexActionCreators.requestApplicationCommandIndex(obj1);
          }
        }
        allowApplicationCommands(false);
      } else {
        let tmp8 = closure_2;
        if (closure_2) {
          const result = stateFromStoresObject.result;
          let version1;
          if (result != null) {
            version1 = result.version;
          }
          let fetching = !tmp4;
          if (version1 !== stateFromStoresObject.serverVersion) {
            fetching = stateFromStoresObject.fetchState.fetching;
          }
          let tmp5 = !fetching;
          if (!fetching) {
            let tmp6 = null == stateFromStoresObject.fetchState.retryAfter;
            if (!tmp6) {
              const _Date = Date;
              tmp6 = Date.now() >= stateFromStoresObject.fetchState.retryAfter;
            }
            tmp5 = tmp6;
          }
          tmp8 = tmp5;
        }
        if (tmp8) {
          obj = ApplicationCommandIndexActionCreators;
          const applicationCommandIndex2 = obj.requestApplicationCommandIndex({ type: "user" });
        }
      }
    }
  }, items1);
  const allowFetch2 = allowFetch.allowFetch;
  closure_130_0 = tmp3;
  closure_130_1 = allowFetch2;
  let tmp8 = _slicedToArray(stateFromStoresObject1.useState(true), 2);
  const first1 = tmp8[0];
  closure_130_2 = first1;
  closure_130_3 = tmp8[1];
  const obj2 = require("initialize");
  const items2 = [applicationCommandIndexStore];
  stateFromStoresObject1 = require("initialize").useStateFromStoresObject(items2, () => authStore.getUserState());
  closure_130_4 = stateFromStoresObject1;
  const items3 = [stateFromStoresObject1, allowFetch2, false !== commandTypes.applicationCommands, first1];
  const effect1 = stateFromStoresObject1.useEffect(() => {
    if (closure_2) {
      let tmp = closure_1;
      if (closure_1) {
        const result = allowApplicationCommands.result;
        let version;
        if (result != null) {
          version = result.version;
        }
        let fetching = !tmp5;
        if (version !== allowApplicationCommands.serverVersion) {
          fetching = allowApplicationCommands.fetchState.fetching;
        }
        let tmp6 = !fetching;
        if (!fetching) {
          let tmp7 = null == allowApplicationCommands.fetchState.retryAfter;
          if (!tmp7) {
            const _Date = Date;
            tmp7 = Date.now() >= allowApplicationCommands.fetchState.retryAfter;
          }
          tmp6 = tmp7;
        }
        tmp = tmp6;
      }
      if (tmp) {
        tmp = closure_0;
      }
      if (tmp) {
        const applicationCommandIndex = ApplicationCommandIndexActionCreators.requestApplicationCommandIndex({ type: "user" });
      }
      permissionContext(false);
    }
  }, items3);
  const obj3 = require("initialize");
  const items4 = [applicationCommandIndexStore];
  const stateFromStores = require("initialize").useStateFromStores(items4, () => authStore.getApplicationStates());
  let obj4 = require("initialize");
  const items5 = [applicationCommandIndexStore];
  ({ applicationId, allowFetch: allowFetch3 } = allowFetch);
  closure_131_0 = applicationId;
  closure_131_1 = allowFetch3;
  const stateFromStores1 = require("initialize").useStateFromStores(items5, () => authStore.applicationIndicesVersion);
  const tmp14 = _slicedToArray(stateFromStoresObject1.useState(true), 2);
  const first2 = tmp14[0];
  closure_131_2 = first2;
  closure_131_3 = tmp14[1];
  const obj5 = require("initialize");
  const items6 = [applicationCommandIndexStore];
  const stateFromStores2 = require("initialize").useStateFromStores(items6, () => applicationCommandIndexStore.getApplicationState(closure_0));
  closure_131_4 = stateFromStores2;
  const items7 = [allowFetch3, applicationId, stateFromStores2, first2];
  const effect2 = stateFromStoresObject1.useEffect(() => {
    if (closure_2) {
      let tmp = closure_1;
      if (closure_1) {
        const result = allowApplicationCommands.result;
        let version;
        if (result != null) {
          version = result.version;
        }
        let fetching = !tmp5;
        if (version !== allowApplicationCommands.serverVersion) {
          fetching = allowApplicationCommands.fetchState.fetching;
        }
        let tmp6 = !fetching;
        if (!fetching) {
          let tmp7 = null == allowApplicationCommands.fetchState.retryAfter;
          if (!tmp7) {
            const _Date = Date;
            tmp7 = Date.now() >= allowApplicationCommands.fetchState.retryAfter;
          }
          tmp6 = tmp7;
        }
        tmp = tmp6;
      }
      if (tmp) {
        tmp = null != type;
      }
      if (tmp) {
        const obj = { type: "application", applicationId: type };
        const applicationCommandIndex = obj.requestApplicationCommandIndex(obj);
      }
      permissionContext(false);
    }
  }, items7);
  const items8 = [permissionContext, , , , , , , , , , , , , , ];
  ({ text: arr9[1], builtIns: arr9[2] } = commandTypes);
  items8[3] = false !== commandTypes.applicationCommands;
  ({ scoreMethod: arr9[4], allowEmptySections: arr9[5], sortOptions: arr9[6], allowApplicationState: arr9[7], applicationId: arr9[8], installOnDemand: arr9[9] } = allowFetch);
  items8[10] = stateFromStoresObject;
  items8[11] = stateFromStoresObject1;
  items8[12] = type;
  items8[13] = stateFromStores;
  items8[14] = stateFromStores1;
  return stateFromStoresObject1.useMemo(() => {
    const obj = { permissionContext, text: commandTypes.text, allowApplicationCommands, builtIns: commandTypes.builtIns, scoreMethod: allowFetch.scoreMethod, allowEmptySections: allowFetch.allowEmptySections, contextState: stateFromStoresObject, userState: stateFromStoresObject1, launcherContext: type, applicationStates: null, sortOptions: null, singleApplicationId: null, installOnDemand: null };
    if (allowFetch.allowApplicationState) {
      let map = stateFromStores;
    } else {
      const _Map = Map;
      map = new Map();
    }
    obj.applicationStates = map;
    ({ sortOptions: obj.sortOptions, applicationId: obj.singleApplicationId, installOnDemand: obj.installOnDemand } = allowFetch);
    return queryIndex(obj);
  }, items8);
}
function queryIndex(allowApplicationCommands) {
  ({ permissionContext, contextState, userState, applicationStates, text, builtIns } = allowApplicationCommands);
  if (builtIns === undefined) {
    builtIns = NONE(9298).BuiltInCommandFilter.ALLOW;
  }
  let flag = allowApplicationCommands.allowApplicationCommands;
  if (flag === undefined) {
    flag = true;
  }
  ({ singleApplicationId, allowEmptySections } = allowApplicationCommands);
  if (allowEmptySections === undefined) {
    allowEmptySections = false;
  }
  NONE = allowApplicationCommands.scoreMethod;
  if (NONE === undefined) {
    NONE = NONE(9298).ScoreMethod.NONE;
  }
  let sortOptions = allowApplicationCommands.sortOptions;
  if (sortOptions === undefined) {
    sortOptions = closure_38;
  }
  let flag2 = allowApplicationCommands.installOnDemand;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let obj;
  let formatted;
  if (text != null) {
    formatted = text.toLowerCase();
  }
  let parts;
  if (formatted != null) {
    parts = formatted.split(" ");
  }
  if (builtIns !== NONE(9298).BuiltInCommandFilter.DENY) {
    const tmp12 = builtIns === NONE(9298).BuiltInCommandFilter.ONLY_TEXT;
    let builtInCommands = NONE(9300).getBuiltInCommands(permissionContext.commandTypes, true, tmp12);
    const tmp9Result = NONE(9300);
  } else {
    builtInCommands = [];
  }
  const items = [];
  obj = { permissionContext, query: formatted, splitQuery: parts, allowEmptySections, scoreMethod: NONE, installOnDemand: flag2 };
  let result = contextState.result;
  let sections;
  if (result != null) {
    sections = result.sections;
  }
  if (sections == null) {
    sections = {};
  }
  const result2 = userState.result;
  let sections1;
  if (result2 != null) {
    sections1 = result2.sections;
  }
  if (sections1 == null) {
    sections1 = {};
  }
  const set = new Set();
  if (flag) {
    if (permissionContext.hasBaseAccessPermissions) {
      for (const key10082 in sections) {
        let tmp15 = null != singleApplicationId;
        if (tmp15) {
          tmp15 = sections[key10082].descriptor.id !== singleApplicationId;
        }
        if (tmp15) {
          continue;
        } else {
          let addResult = set.add(key10082);
          continue;
        }
        continue;
      }
    }
    for (const key10090 in sections1) {
      let tmp18 = null != singleApplicationId;
      if (tmp18) {
        tmp18 = sections1[key10090].descriptor.id !== singleApplicationId;
      }
      if (tmp18) {
        continue;
      } else {
        let addResult1 = set.add(key10090);
        continue;
      }
      continue;
    }
  }
  const map = new Map();
  while (tmp20 !== undefined) {
    let tmp23 = _slicedToArray(tmp21, 2);
    [tmp24, tmp25] = tmp23;
    if (null == singleApplicationId) {
      let result3 = tmp25.result;
      let sections2;
      if (result3 != null) {
        sections2 = result3.sections;
      }
      let tmp29 = sections2;
      if (null != sections2) {
        let _Object = Object;
        let keys = Object.keys(tmp29);
        for (const item10124 of keys) {
          let addResult2 = set.add(item10124);
          result = map.set(item10124, tmp29[item10124]);
          continue;
        }
      }
    }
    continue;
  }
  let arr = Array.from(set);
  const iter = arr[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp39 = sections[nextResult];
    let tmp40 = tmp39;
    let tmp41 = sections1[nextResult];
    let tmp42 = tmp41;
    value = map.get(nextResult);
    let tmp44 = null != tmp39;
    let tmp45 = null != tmp41;
    if (null != tmp39) {
      if (null != tmp42) {
        let descriptor = tmp42.descriptor;
        let items1 = [];
        for (const key10170 in tmp42.commands) {
          arr = items1.push(tmp42.commands[key10170]);
          continue;
        }
        for (const key10174 in tmp40.commands) {
          if (key10174 in tmp42.commands) {
            continue;
          } else {
            let arr1 = items1.push(tmp40.commands[tmp114]);
            continue;
          }
          continue;
        }
        let tmp62 = sortOptions(38)(null != descriptor, "Failed to select application descriptor");
        let tmp64 = sortOptions(38)(null != items1, "Failed to select list of application commands");
        let tmp71 = queryIndexSection(descriptor, items1, tmp44, tmp45, obj);
        if (null != tmp71) {
          let arr2 = items.push(tmp72);
        }
        continue;
      }
    }
    if (null != tmp40) {
      descriptor = tmp40.descriptor;
      let _Object3 = Object;
      items1 = Object.values(tmp40.commands);
    } else if (null != tmp42) {
      descriptor = tmp42.descriptor;
      let _Object2 = Object;
      items1 = Object.values(tmp42.commands);
    } else if (null != value) {
      descriptor = value.descriptor;
      let _Object4 = Object;
      items1 = Object.values(value.commands);
    }
  }
  if (sortOptions.applications.useFrecency) {
    const FrecencyUserSettingsActionCreators = NONE(1940).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }
  const sorted = items.sort((section, section2) => {
    if (sortOptions.applications.useScore) {
      if (NONE === ApplicationCommandQueryTypes.ScoreMethod.APPLICATION_ONLY) {
        const first = section.data[0];
        let score;
        if (first != null) {
          score = first.score;
        }
        if (score == null) {
          const _Number = Number;
          score = Number.MAX_VALUE;
        }
        const first1 = section2.data[0];
        let score1;
        if (first1 != null) {
          score1 = first1.score;
        }
        if (score1 == null) {
          const _Number2 = Number;
          score1 = Number.MAX_VALUE;
        }
        if (score !== score1) {
          return score - score1;
        }
      }
    }
    if (sortOptions.applications.useFrecency) {
      const scoreWithoutLoadingLatest = ApplicationFrecencyStore.getScoreWithoutLoadingLatest(section.section.id);
      const scoreWithoutLoadingLatest1 = ApplicationFrecencyStore.getScoreWithoutLoadingLatest(section2.section.id);
      if (scoreWithoutLoadingLatest !== scoreWithoutLoadingLatest1) {
        return scoreWithoutLoadingLatest1 - scoreWithoutLoadingLatest;
      }
    }
    const collator = applicationCommandIndexStore.collator;
    return collator.compare(section.section.name, section2.section.name);
  });
  if (builtInCommands.length > 0) {
    const tmp87 = queryIndexSection(NONE(9300).BUILT_IN_SECTIONS[constants.BUILT_IN], builtInCommands, true, true, obj);
    if (null != tmp87) {
      items.push(tmp87);
    }
  }
  const flatMapResult = items.flatMap((data) => {
    data = data.data;
    return data.map((item) => {
      obj = {};
      const merged = Object.assign(item);
      obj.section = data.section;
      return obj;
    });
  });
  if (NONE === NONE(9298).ScoreMethod.COMMAND_ONLY) {
    const context = permissionContext.context;
    let guild_id;
    if (permissionContext != null) {
      const context2 = permissionContext.context;
      if (context2 != null) {
        guild_id = context2.guild_id;
      }
    }
    const guild = GuildStore.getGuild(guild_id);
    if (tmp96) {
      const FrecencyUserSettingsActionCreators2 = NONE(1940).FrecencyUserSettingsActionCreators;
      const ifNecessary1 = FrecencyUserSettingsActionCreators2.loadIfNecessary();
    }
    let tmp98;
    if (null != context) {
      obj = { channel: context, guild };
      tmp98 = obj;
    }
    obj = tmp98;
    const sorted1 = flatMapResult.sort((score, score2) => {
      if (sortOptions.commands.useScore) {
        let num = score.score;
        if (num == null) {
          num = 0;
        }
        let num2 = score2.score;
        if (num2 == null) {
          num2 = 0;
        }
        if (num !== num2) {
          return num - num2;
        }
      }
      if (sortOptions.commands.useFrecency) {
        const scoreWithoutLoadingLatest = ApplicationCommandFrecencyStore.getScoreWithoutLoadingLatest(obj, score);
        const scoreWithoutLoadingLatest1 = ApplicationCommandFrecencyStore.getScoreWithoutLoadingLatest(obj, score2);
        if (scoreWithoutLoadingLatest !== scoreWithoutLoadingLatest1) {
          return scoreWithoutLoadingLatest1 - scoreWithoutLoadingLatest;
        }
      }
      const collator = applicationCommandIndexStore.collator;
      return collator.compare(score.displayName, score2.displayName);
    });
    tmp96 = sortOptions.commands.useFrecency && items.some((section) => {
      let tmp = section.section.id !== constants.BUILT_IN;
      if (tmp) {
        tmp = section.data.length > 0;
      }
      return tmp;
    });
  }
  const obj1 = { commands: flatMapResult, descriptors: items.map((section) => section.section), sectionedCommands: items, loading: null };
  let fetching;
  if (contextState != null) {
    fetching = contextState.fetchState.fetching;
  }
  let tmp101 = true === fetching;
  if (!tmp101) {
    let fetching1;
    if (userState != null) {
      fetching1 = userState.fetchState.fetching;
    }
    tmp101 = true === fetching1;
  }
  if (!tmp101) {
    let tmp103 = null != singleApplicationId;
    if (tmp103) {
      value = applicationStates.get(singleApplicationId);
      let fetching2;
      if (value != null) {
        fetching2 = value.fetchState.fetching;
      }
      tmp103 = true === fetching2;
    }
    tmp101 = tmp103;
  }
  obj1.loading = tmp101;
  return obj1;
}
function queryIndexSection(descriptor, builtInCommands, isGuildInstalled, arg3, arg4) {
  ({ query, splitQuery, scoreMethod, permissionContext } = arg4);
  ({ context, userId, roleIds, isImpersonating } = permissionContext);
  let guild_id;
  ({ allowEmptySections, installOnDemand } = arg4);
  if (context != null) {
    guild_id = context.guild_id;
  }
  let allowedForUser = null;
  if (null != guild_id) {
    let obj = CommandPermissionUtilsAll;
    allowedForUser = obj.computeAllowedForUser(descriptor.permissions, context.guild_id, userId, roleIds, isImpersonating);
  }
  let guild_id1;
  if (context != null) {
    guild_id1 = context.guild_id;
  }
  let allowedForChannel = null;
  if (null != guild_id1) {
    allowedForChannel = CommandPermissionUtilsAll.computeAllowedForChannel(descriptor.permissions, context, context.guild_id);
  }
  const items = [];
  const iter = builtInCommands[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp16 = nextResult;
    let obj3 = CommandPermissionUtilsAll;
    obj = { applicationAllowedForUser: allowedForUser, applicationAllowedForChannel: allowedForChannel, commandBotId: descriptor.botId, isGuildInstalled, isUserInstalled: null };
    let tmp20 = arg3;
    if (!arg3) {
      tmp20 = installOnDemand;
    }
    obj.isUserInstalled = tmp20;
    let hasAccessResult = obj3.hasAccess(nextResult, permissionContext, obj);
    if (hasAccessResult === CommandPermissionUtils.HasAccessResult.ALLOWED) {
      let arr = items.push(tmp16);
    }
    continue;
  }
  let arr2 = items;
  if (scoreMethod !== ApplicationCommandQueryTypes.ScoreMethod.NONE) {
    arr2 = items;
    if (null != query) {
      arr2 = items;
      if (null != splitQuery) {
        arr2 = (function scoreCommands(query, splitQuery, items, name, scoreMethod) {
          if (scoreMethod === require("ApplicationCommandQueryTypes").ScoreMethod.APPLICATION_ONLY) {
            name = name.name;
            const toLocaleLowerCaseResult = name.toLocaleLowerCase();
            if (toLocaleLowerCaseResult.startsWith(query)) {
              let SECTION_DESCRIPTION_CONTAINS = constants.SECTION_NAME_STARTS_WITH;
            } else {
              if (toLocaleLowerCaseResult.includes(query)) {
                SECTION_DESCRIPTION_CONTAINS = constants.SECTION_NAME_CONTAINS;
              } else {
                const application = name.application;
                let toLocaleLowerCaseResult1;
                if (application != null) {
                  const description = application.description;
                  if (description != null) {
                    toLocaleLowerCaseResult1 = description.toLocaleLowerCase();
                  }
                }
                let hasItem;
                if (toLocaleLowerCaseResult1 != null) {
                  hasItem = toLocaleLowerCaseResult1.includes(query);
                }
                if (!hasItem) {
                  if (fuzzysearchDefault(query, toLocaleLowerCaseResult)) {
                    SECTION_DESCRIPTION_CONTAINS = constants.SECTION_NAME_FUZZY_MATCHES;
                  }
                }
              }
              SECTION_DESCRIPTION_CONTAINS = constants.SECTION_DESCRIPTION_CONTAINS;
            }
          }
          const substr = splitQuery.slice(1);
          const joined = substr.join(" ");
          items[Symbol.iterator]();
        })(query, splitQuery, items, descriptor, scoreMethod);
      }
    }
  }
  if (0 !== arr2.length) {
    if (!tmp39) {
      const sorted = arr2.sort((displayName, displayName2) => {
        collator = collator.collator;
        return collator.compare(displayName.displayName, displayName2.displayName);
      });
    }
    obj = { section: descriptor, data: arr2 };
    let tmp36 = obj;
    tmp39 = scoreMethod !== ApplicationCommandQueryTypes.ScoreMethod.NONE && scoreMethod !== ApplicationCommandQueryTypes.ScoreMethod.APPLICATION_ONLY;
  } else {
    tmp36 = null;
  }
  return tmp36;
}
function shouldFetch(result) {
  result = result.result;
  let version;
  if (result != null) {
    version = result.version;
  }
  let fetching = !tmp2;
  if (version !== result.serverVersion) {
    fetching = result.fetchState.fetching;
  }
  let tmp3 = !fetching;
  if (!fetching) {
    let tmp4 = null == result.fetchState.retryAfter;
    if (!tmp4) {
      const _Date = Date;
      tmp4 = Date.now() >= result.fetchState.retryAfter;
    }
    tmp3 = tmp4;
  }
  return tmp3;
}
function toApplication(description) {
  return { description: description.description, icon: description.icon, id: description.id, name: description.name, bot: description.bot, flags: description.flags };
}
function toServerOption(choices) {
  const obj = {};
  const merged = Object.assign(choices);
  choices = choices.choices;
  let mapped;
  if (choices != null) {
    mapped = choices.map(toServerChoice);
  }
  obj.choices = mapped;
  let description = choices.description_default;
  if (description == null) {
    description = choices.description;
  }
  obj.description = description;
  let name = choices.name_default;
  if (name == null) {
    name = choices.name;
  }
  obj.name = name;
  const options = choices.options;
  let mapped1;
  if (options != null) {
    mapped1 = options.map(toServerOption);
  }
  obj.options = mapped1;
  if (choices.description !== choices.description_default) {
    obj.description_localized = choices.description;
  }
  if (choices.name !== choices.name_default) {
    obj.name_localized = choices.name;
  }
  return obj;
}
function toServerChoice(name_default) {
  const obj = {};
  const merged = Object.assign(name_default);
  let name = name_default.name_default;
  if (name == null) {
    name = name_default.name;
  }
  obj.name = name;
  if (name_default.name !== name_default.name_default) {
    obj.name_localized = name_default.name;
  }
  return obj;
}
function toServerPermissions(permissions, id) {
  const items = [];
  if (null != permissions.user) {
    let obj = { type: ApplicationCommandTypes.ApplicationCommandPermissionType.USER, id, permission: permissions.user };
    items.push(obj);
  }
  if (null != permissions.channels) {
    const _Object = Object;
    const entries = Object.entries(permissions.channels);
    const tmp28 = entries[Symbol.iterator]();
    while (tmp28 !== undefined) {
      let tmp9 = _slicedToArray(tmp6, 2);
      obj = { type: null, id: null, permission: null };
      [tmp10, tmp11] = tmp9;
      obj.type = ApplicationCommandTypes.ApplicationCommandPermissionType.CHANNEL;
      obj.id = tmp10;
      obj.permission = tmp11;
      let arr = items.push(obj);
      continue;
    }
  }
  if (null != permissions.roles) {
    const _Object2 = Object;
    const entries1 = Object.entries(permissions.roles);
    const tmp32 = entries1[Symbol.iterator]();
    while (tmp32 !== undefined) {
      let tmp19 = _slicedToArray(tmp16, 2);
      obj = { type: null, id: null, permission: null };
      [tmp20, tmp21] = tmp19;
      obj.type = ApplicationCommandTypes.ApplicationCommandPermissionType.ROLE;
      obj.id = tmp20;
      obj.permission = tmp21;
      let arr1 = items.push(obj);
      continue;
    }
  }
  return items;
}
function scoreCommand(untranslatedName, arg1, arg2, arg3) {
  untranslatedName = untranslatedName.untranslatedName;
  const str = untranslatedName.toLocaleLowerCase();
  const displayName = untranslatedName.displayName;
  const str2 = displayName.toLocaleLowerCase();
  if (!str.startsWith(arg1)) {
    if (!str2.startsWith(arg1)) {
      if (str.startsWith(arg2)) {
        const parts = str.split(" ");
        const substr = parts.slice(1);
        const joined = substr.join(" ");
        if (joined.startsWith(arg3)) {
          return constants4.STARTS_WITH_COMMAND_NAME;
        }
      }
      if (str2.startsWith(arg2)) {
        const parts1 = str2.split(" ");
        const substr1 = parts1.slice(1);
        const joined1 = substr1.join(" ");
        if (joined1.startsWith(arg3)) {
          return constants4.STARTS_WITH_COMMAND_NAME;
        }
      }
      if (!str.includes(arg1)) {
        let hasItem;
        if (str2 != null) {
          hasItem = str2.includes(arg1);
        }
        if (!hasItem) {
          let flag = false;
          let options = untranslatedName.options;
          if (options == null) {
            options = [];
          }
          const iter = options[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let name = nextResult.name;
            let obj5 = name;
            let serverLocalizedName = nextResult.serverLocalizedName;
            if (!name.startsWith(arg1)) {
              let _HermesInternal = HermesInternal;
              let combined = "" + str + " " + obj5;
              if (!combined.startsWith(arg1)) {
                if (null == str2) {
                  if (null != serverLocalizedName) {
                    if (!serverLocalizedName.startsWith(arg1)) {
                      let _HermesInternal3 = HermesInternal;
                      let combined1 = "" + str + " " + serverLocalizedName;
                      if (!combined1.startsWith(arg1)) {
                        if (null != str2) {
                          let _HermesInternal4 = HermesInternal;
                          let combined2 = "" + str2 + " " + serverLocalizedName;
                        }
                      }
                    }
                    iter.return();
                    return constants4.STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME;
                  }
                  let hasItem1 = obj5.includes(arg1);
                  if (!hasItem1) {
                    let hasItem2;
                    if (serverLocalizedName != null) {
                      hasItem2 = serverLocalizedName.includes(arg1);
                    }
                    hasItem1 = hasItem2;
                  }
                  if (hasItem1) {
                    flag = true;
                  }
                  continue;
                } else {
                  let _HermesInternal2 = HermesInternal;
                  let combined3 = "" + str2 + " " + obj5;
                }
              }
            }
            iter.return();
            return constants4.STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME;
          }
          if (flag) {
            return constants4.OPTION_NAME_CONTAINS;
          } else {
            const untranslatedDescription = untranslatedName.untranslatedDescription;
            const toLocaleLowerCaseResult = untranslatedDescription.toLocaleLowerCase();
            const displayDescription = untranslatedName.displayDescription;
            if (!toLocaleLowerCaseResult.includes(arg1)) {
              if (!toLocaleLowerCaseResult1.includes(arg1)) {
                if (!fuzzysearchDefault(arg1, str)) {
                  if (!fuzzysearchDefault(arg1, str2)) {
                    let options1 = untranslatedName.options;
                    if (options1 == null) {
                      options1 = [];
                    }
                    for (const item10132 of options1) {
                      ({ serverLocalizedName: serverLocalizedName2, name: name2 } = item10132);
                      obj12.return();
                      return constants4.OPTION_NAME_FUZZY_MATCHES;
                    }
                    if (fuzzysearchDefault(arg1, toLocaleLowerCaseResult)) {
                      const COMMAND_DESCRIPTION_FUZZY_MATCHES = constants4.COMMAND_DESCRIPTION_FUZZY_MATCHES;
                    }
                    return COMMAND_DESCRIPTION_FUZZY_MATCHES;
                  }
                }
                return constants4.COMMAND_NAME_FUZZY_MATCHES;
              }
            }
            return constants4.COMMAND_DESCRIPTION_CONTAINS;
          }
        }
      }
      return constants4.COMMAND_NAME_CONTAINS;
    }
  }
  return constants4.COMMAND_NAME_STARTS_WITH;
}
const ApplicationCommandConstants = fn(4999);
({ BuiltInSectionId: closure_15, DISCOVERY_COMMANDS_FRECENCY_LIMIT: closure_16 } = ApplicationCommandConstants);
const Constants = fn(1074);
({ AnalyticEvents: closure_17, ChannelTypes: closure_18 } = Constants);
const logger = new LoggerDefault("ApplicationCommandIndexStore");
let closure_20 = Symbol("currentUser");
const SymbolResult = Symbol("stale");
const SymbolResult1 = Symbol("current");
let closure_23 = Object.freeze({ descriptors: [], commands: [], sectionedCommands: [], loading: true });
let obj = { serverVersion: SymbolResult1, fetchState: { fetching: false }, result: { sections: {}, sectionIdsByBotId: {}, version: SymbolResult1 } };
let closure_24 = Object.freeze(obj);
let closure_25 = Object.freeze({ serverVersion: SymbolResult, fetchState: { fetching: false } });
let closure_26 = { sensitivity: "accent", numeric: true };
let c27 = false;
let closure_28 = [];
const Store = initializeDefault.Store;
class ApplicationCommandIndexStore extends Store {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.indices = {};
    map = new Map();
    applyArgumentsResult.applicationIndices = map;
    applyArgumentsResult.applicationIndicesVersion = 0;
    applyArgumentsResult.oldLocale = closure_8.locale;
    collator = new Intl.Collator(closure_8.locale, closure_26);
    applyArgumentsResult.collator = collator;
    return applyArgumentsResult;
  }
}
const prototype = ApplicationCommandIndexStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(LocaleStore);
  this.waitFor(ApplicationCommandFrecencyStore, ApplicationFrecencyStore, AuthenticationStore, ChannelStore, GuildMemberStore, GuildStore, UserStore);
  const items = [LocaleStore];
  this.syncWith(items, () => {
    locale = locale.locale;
    if (locale !== oldLocale.oldLocale) {
      handleReset();
      const _Intl = Intl;
      const collator = new Intl.Collator(locale, { sensitivity: "accent", numeric: true });
      oldLocale.collator = collator;
      oldLocale.oldLocale = locale;
    }
  });
};
prototype["getContextState"] = function getContextState(type) {
  if ("contextless" !== type.type) {
    const channel = type.channel;
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    let tmp3 = null != guild_id;
    if (!tmp3) {
      type = undefined;
      if (channel != null) {
        type = channel.type;
      }
      let tmp6 = type === constants3.DM;
      if (tmp6) {
        const user = UserStore.getUser(channel.getRecipientId());
        let bot;
        if (user != null) {
          bot = user.bot;
        }
        tmp6 = true === bot;
      }
      tmp3 = tmp6;
    }
    if (tmp3) {
      const self = this;
      let id = type.channel.guild_id;
      if (id == null) {
        id = type.channel.id;
      }
      let tmp11 = this.indices[id];
      if (tmp11 == null) {
        tmp11 = closure_25;
      }
      let tmp10 = tmp11;
    }
    return tmp10;
  }
  tmp10 = closure_24;
};
prototype["hasContextStateApplication"] = function hasContextStateApplication(guildId) {
  let channelId = guildId.guildId;
  if (channelId == null) {
    channelId = guildId.channelId;
  }
  let sections;
  if (this.indices[channelId] != null) {
    const result = tmp.result;
    if (result != null) {
      sections = result.sections;
    }
  }
  if (sections == null) {
    sections = {};
  }
  return null != sections[guildId.applicationId];
};
prototype["getGuildState"] = function getGuildState(arg0) {
  if (null == arg0) {
    let tmp = closure_24;
  } else {
    const self = this;
    tmp = this.indices[arg0];
    if (tmp == null) {
      tmp = closure_25;
    }
  }
  return tmp;
};
prototype["getUserState"] = function getUserState() {
  let tmp = this.indices[closure_20];
  if (tmp == null) {
    tmp = closure_25;
  }
  return tmp;
};
prototype["hasUserStateApplication"] = function hasUserStateApplication(applicationId) {
  let sections;
  if (this.indices[closure_20] != null) {
    const result = tmp.result;
    if (result != null) {
      sections = result.sections;
    }
  }
  if (sections == null) {
    sections = {};
  }
  return null != sections[applicationId];
};
prototype["getApplicationState"] = function getApplicationState(applicationId) {
  if (null == applicationId) {
    let tmp = closure_24;
  } else {
    const self = this;
    tmp = this.indices[applicationId];
    if (tmp == null) {
      tmp = closure_25;
    }
  }
  return tmp;
};
prototype["getApplicationStates"] = function getApplicationStates() {
  return this.applicationIndices;
};
prototype["hasApplicationState"] = function hasApplicationState(applicationId) {
  return applicationId in this.indices;
};
prototype["query"] = function query(withAffinitySuggestions, commandTypes, applicationId) {
  let obj = UserStore;
  if (null == UserStore.getCurrentUser()) {
    return closure_23;
  } else {
    let channel;
    if ("channel" === withAffinitySuggestions.type) {
      channel = withAffinitySuggestions.channel;
    }
    const self = this;
    const contextState = this.getContextState(withAffinitySuggestions);
    const userState = this.getUserState();
    const applicationState = this.getApplicationState(applicationId.applicationId);
    let applicationStates = this.getApplicationStates();
    let obj1 = CommandPermissionContext;
    const permissionContext = obj1.buildPermissionContext(channel, commandTypes.commandTypes);
    let tmp11 = null == channel;
    let guild_id = channel;
    if (!tmp11) {
      let prop;
      if (permissionContext != null) {
        prop = permissionContext.hasBaseAccessPermissions;
      }
      tmp11 = true === prop;
    }
    let flag3 = false;
    if (applicationId.allowFetch) {
      let tmp14 = tmp13;
      if (tmp13) {
        tmp14 = tmp11;
      }
      if (tmp14) {
        tmp14 = null != guild_id;
      }
      if (tmp14) {
        guild_id = undefined;
        if (guild_id != null) {
          guild_id = guild_id.guild_id;
        }
        let tmp16 = null != guild_id;
        if (!tmp16) {
          let type;
          if (guild_id != null) {
            type = guild_id.type;
          }
          let tmp19 = type === constants3.DM;
          if (tmp19) {
            const user = obj.getUser(guild_id.getRecipientId());
            let bot;
            if (user != null) {
              bot = user.bot;
            }
            tmp19 = true === bot;
          }
          tmp16 = tmp19;
        }
        tmp14 = tmp16;
      }
      let flag5 = false;
      if (!tmp14) {
        const result2 = userState.result;
        let version;
        if (result2 != null) {
          version = result2.version;
        }
        let fetching2 = !tmp35;
        if (version !== userState.serverVersion) {
          fetching2 = userState.fetchState.fetching;
        }
        let tmp36 = !fetching2;
        if (!fetching2) {
          let tmp37 = null == userState.fetchState.retryAfter;
          if (!tmp37) {
            const _Date2 = Date;
            tmp37 = Date.now() >= userState.fetchState.retryAfter;
          }
          tmp36 = tmp37;
        }
        if (tmp36) {
          let tmp8Result = ApplicationCommandIndexActionCreators;
          const applicationCommandIndex = tmp8Result.requestApplicationCommandIndex({ type: "user" });
          flag5 = true;
        }
        const result3 = applicationState.result;
        let version1;
        if (result3 != null) {
          version1 = result3.version;
        }
        let fetching3 = !tmp41;
        if (version1 !== applicationState.serverVersion) {
          fetching3 = applicationState.fetchState.fetching;
        }
        let tmp42 = !fetching3;
        if (!fetching3) {
          let tmp43 = null == applicationState.fetchState.retryAfter;
          if (!tmp43) {
            const _Date3 = Date;
            tmp43 = Date.now() >= applicationState.fetchState.retryAfter;
          }
          tmp42 = tmp43;
        }
        if (tmp42) {
          tmp42 = null != applicationId.applicationId;
        }
        if (tmp42) {
          tmp8Result = ApplicationCommandIndexActionCreators;
          obj = { type: "application", applicationId: applicationId.applicationId };
          const applicationCommandIndex1 = tmp8Result.requestApplicationCommandIndex(obj);
          flag5 = true;
        }
        flag3 = flag5;
      } else {
        let obj2 = AnalyticsUtilsDefault;
        obj = { miss: null == contextState.result, size: null };
        const _Object = Object;
        obj.size = Object.keys(applicationCommandIndexStore.indices).length;
        obj2.track(constants2.APPLICATION_COMMAND_CACHE_FETCH, obj);
        const result = contextState.result;
        let version2;
        if (result != null) {
          version2 = result.version;
        }
        let fetching = !tmp28;
        if (version2 !== contextState.serverVersion) {
          fetching = contextState.fetchState.fetching;
        }
        let tmp29 = !fetching;
        if (!fetching) {
          let tmp30 = null == contextState.fetchState.retryAfter;
          if (!tmp30) {
            const _Date = Date;
            tmp30 = Date.now() >= contextState.fetchState.retryAfter;
          }
          tmp29 = tmp30;
        }
        if (tmp29) {
          tmp29 = null != guild_id;
        }
        let flag6 = false;
        if (tmp29) {
          if (null == guild_id.guild_id) {
            obj1 = { type: "channel", channelId: guild_id.id };
            const applicationCommandIndex2 = ApplicationCommandIndexActionCreators.requestApplicationCommandIndex(obj1);
            flag6 = true;
            const tmp8Result1 = ApplicationCommandIndexActionCreators;
          }
        }
        obj2 = { type: "guild", guildId: null };
        guild_id = guild_id.guild_id;
        obj2.guildId = guild_id;
        const applicationCommandIndex3 = ApplicationCommandIndexActionCreators.requestApplicationCommandIndex(obj2);
        flag6 = true;
        const tmp8Result2 = ApplicationCommandIndexActionCreators;
      }
    }
    const obj3 = { permissionContext, text: commandTypes.text, allowApplicationCommands: false !== commandTypes.applicationCommands, builtIns: commandTypes.builtIns, scoreMethod: null, allowEmptySections: null, contextState: null, userState: null, applicationStates: null, sortOptions: null, singleApplicationId: null, installOnDemand: null };
    ({ scoreMethod: obj12.scoreMethod, allowEmptySections: obj12.allowEmptySections } = applicationId);
    obj3.contextState = contextState;
    obj3.userState = userState;
    if (!applicationId.allowApplicationState) {
      const _Map = Map;
      applicationStates = new Map();
    }
    obj3.applicationStates = applicationStates;
    ({ sortOptions: obj12.sortOptions, applicationId: obj12.singleApplicationId, installOnDemand: obj12.installOnDemand } = applicationId);
    const tmp46Result = queryIndex(obj3);
    tmp46Result.loading = tmp46Result.loading || flag3;
    return tmp46Result;
  }
};
prototype["queryInstallOnDemandApp"] = function queryInstallOnDemandApp(id, id2) {
  let channel = ChannelStore.getChannel(id2);
  if (null != channel) {
    const self = this;
    if (null != channel) {
      let obj = { channel, type: "channel" };
    } else {
      obj = { type: "contextless" };
    }
    channel = id;
    obj = { commandTypes: null };
    const items = [Server.ApplicationCommandType.CHAT];
    obj.commandTypes = items;
    const obj1 = { placeholderCount: 5, scoreMethod: ApplicationCommandQueryTypes.ScoreMethod.COMMAND_ONLY, applicationId: id, allowFetch: true };
    const query = this.query(obj, obj, obj1);
  }
};
ApplicationCommandIndexStore.displayName = "ApplicationCommandIndexStore";
obj = {
  LOGOUT: handleReset,
  CONNECTION_OPEN: function handleConnectionOpen() {
    const values = Object.values(applicationCommandIndexStore.indices);
    for (const item10010 of values) {
      item10010.serverVersion = SymbolResult;
      continue;
    }
    (function flushCommandsFetchSuccessQueue() {
      for (const item10005 of closure_28) {
        let tmp2 = handleFetchSuccess(item10005);
        continue;
      }
      closure_28 = [];
    })();
    c27 = true;
  },
  APPLICATION_COMMAND_INDEX_FETCH_REQUEST: function handleFetchRequest(target) {
    target = target.target;
    const type = target.type;
    if ("guild" === type) {
      let applicationId = target.guildId;
    } else if ("channel" === type) {
      applicationId = target.channelId;
    } else if ("user" === type) {
      applicationId = closure_20;
    } else if ("application" === type) {
      applicationId = target.applicationId;
    }
    let tmp = applicationCommandIndexStore.indices[applicationId];
    if (tmp == null) {
      tmp = closure_25;
    }
    const result = tmp.result;
    let version;
    if (result != null) {
      version = result.version;
    }
    let fetching = !tmp3;
    if (version !== tmp.serverVersion) {
      fetching = tmp.fetchState.fetching;
    }
    let tmp4 = !fetching;
    if (!fetching) {
      let tmp5 = null == tmp.fetchState.retryAfter;
      if (!tmp5) {
        const _Date = Date;
        tmp5 = Date.now() >= tmp.fetchState.retryAfter;
      }
      tmp4 = tmp5;
    }
    if (tmp4) {
      updateIndexAndFetchApplicationCommandIndex(target);
    }
  },
  APPLICATION_COMMAND_INDEX_FETCH_SUCCESS: handleFetchSuccess,
  APPLICATION_COMMAND_INDEX_FETCH_FAILURE: function handleFetchFailure(target) {
    let obj = { fetchState: null };
    obj = { fetching: false, retryAfter: Date.now() + 5000 };
    obj.fetchState = obj;
    updateIndex(target.target, obj);
  },
  APPLICATION_COMMAND_EXECUTE_BAD_VERSION: function handleStaleCommand(arg0) {
    ({ applicationId, channelId, guildId } = arg0);
    let obj = applicationCommandIndexStore;
    if (!applicationCommandIndexStore.hasContextStateApplication({ applicationId, channelId, guildId })) {
      if (obj.hasUserStateApplication(applicationId)) {
        obj = { serverVersion: SymbolResult };
        updateIndex({ type: "user" }, obj);
      }
      if (obj.hasApplicationState(applicationId)) {
        obj = { type: "application", applicationId };
        const obj1 = { serverVersion: SymbolResult };
        updateIndex(obj, obj1);
      }
    } else {
      if (null != guildId) {
        const obj2 = { type: "guild", guildId };
        let obj3 = obj2;
      } else {
        obj3 = { type: "channel", channelId };
      }
      const obj4 = { serverVersion: null };
      guildId = SymbolResult;
      obj4.serverVersion = SymbolResult;
      updateIndex(obj3, obj4);
    }
  },
  CHANNEL_DELETE: function handleDeletedChannelIndex(channel) {
    const obj = { type: "channel", channelId: channel.channel.id };
    const type = obj.type;
    if ("guild" === type) {
      let applicationId = obj.guildId;
    } else if ("channel" === type) {
      applicationId = obj.channelId;
    } else if ("user" === type) {
      applicationId = closure_20;
    } else if ("application" === type) {
      applicationId = obj.applicationId;
    }
    let fetching;
    if (applicationCommandIndexStore.indices[applicationId] != null) {
      fetching = tmp4.fetchState.fetching;
    }
    if (fetching) {
      const abort = tmp4.fetchState.abort;
      abort.abort();
    }
    delete tmp[tmp2];
  },
  GUILD_DELETE: function handleDeletedGuildIndex(guild) {
    const obj = { type: "guild", guildId: guild.guild.id };
    const type = obj.type;
    if ("guild" === type) {
      let applicationId = obj.guildId;
    } else if ("channel" === type) {
      applicationId = obj.channelId;
    } else if ("user" === type) {
      applicationId = closure_20;
    } else if ("application" === type) {
      applicationId = obj.applicationId;
    }
    let fetching;
    if (applicationCommandIndexStore.indices[applicationId] != null) {
      fetching = tmp4.fetchState.fetching;
    }
    if (fetching) {
      const abort = tmp4.fetchState.abort;
      abort.abort();
    }
    delete tmp[tmp2];
  },
  USER_APPLICATION_UPDATE: handleStaleUserIndex,
  USER_APPLICATION_REMOVE: handleStaleUserIndex,
  GUILD_APPLICATION_COMMAND_INDEX_UPDATE: function handleGuildCommandIndexUpdate(guildId) {
    let version = guildId.version;
    let obj = { type: "guild", guildId: guildId.guildId };
    if (version == null) {
      version = SymbolResult;
    }
    const tmpResult = updateIndex(obj, { serverVersion: version });
    let sectionIdsByBotId;
    if (tmpResult != null) {
      const result = tmpResult.result;
      if (result != null) {
        sectionIdsByBotId = result.sectionIdsByBotId;
      }
    }
    if (null != sectionIdsByBotId) {
      for (const key10016 in sectionIdsByBotId) {
        let dMFromUserId = ChannelStore.getDMFromUserId(key10016);
        if (null == dMFromUserId) {
          continue;
        } else {
          obj = { type: "channel", channelId: dMFromUserId };
          obj = { serverVersion: SymbolResult };
          let tmp7 = updateIndex(obj, obj);
          continue;
        }
        continue;
      }
    }
  },
  GUILD_MEMBERS_CHUNK_BATCH: function handleGuildMembersChunkBatch(arg0) {
    let flag = false;
    const iter = arg0.chunks[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = updateGuildBotMembers(nextResult.guildId, nextResult.members) || flag;
      flag = tmp3;
      continue;
    }
    return flag;
  }
};
const applicationCommandIndexStore = new ApplicationCommandIndexStore(DispatcherDefault, obj);
let closure_38 = Object.freeze({ applications: { useFrecency: false, useScore: false }, commands: { useFrecency: true, useScore: true } });
const constants4 = { COMMAND_NAME_STARTS_WITH: 0, [0]: "COMMAND_NAME_STARTS_WITH", STARTS_WITH_COMMAND_NAME: 1, [1]: "STARTS_WITH_COMMAND_NAME", COMMAND_NAME_CONTAINS: 2, [2]: "COMMAND_NAME_CONTAINS", STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME: 3, [3]: "STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME", OPTION_NAME_CONTAINS: 4, [4]: "OPTION_NAME_CONTAINS", SECTION_NAME_STARTS_WITH: 5, [5]: "SECTION_NAME_STARTS_WITH", SECTION_NAME_CONTAINS: 6, [6]: "SECTION_NAME_CONTAINS", COMMAND_DESCRIPTION_CONTAINS: 7, [7]: "COMMAND_DESCRIPTION_CONTAINS", SECTION_DESCRIPTION_CONTAINS: 8, [8]: "SECTION_DESCRIPTION_CONTAINS", COMMAND_NAME_FUZZY_MATCHES: 9, [9]: "COMMAND_NAME_FUZZY_MATCHES", OPTION_NAME_FUZZY_MATCHES: 10, [10]: "OPTION_NAME_FUZZY_MATCHES", SECTION_NAME_FUZZY_MATCHES: 11, [11]: "SECTION_NAME_FUZZY_MATCHES", COMMAND_DESCRIPTION_FUZZY_MATCHES: 12, [12]: "COMMAND_DESCRIPTION_FUZZY_MATCHES" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/application_commands/ApplicationCommandIndexStore.tsx");

export default applicationCommandIndexStore;
export const getOrFetchApplicationCommandIndexForTarget = function getOrFetchApplicationCommandIndexForTarget() {
  const self = this;
  const apply = closure_32.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const useContextIndexState = function useContextIndexState(arg0, arg1, arg2) {
  _require = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  const tmp = _slicedToArray(noop.useState(true), 2);
  const first = tmp[0];
  _slicedToArray = tmp[1];
  const items = [applicationCommandIndexStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => {
    if ("channel" === type.type) {
      let contextState = applicationCommandIndexStore.getContextState(tmp);
    } else {
      contextState = applicationCommandIndexStore.getUserState();
    }
    return contextState;
  });
  const items1 = [stateFromStoresObject, arg2, arg0, arg1, first];
  const effect = noop.useEffect(() => {
    if (permissionContext) {
      let guild_id = type;
      if ("contextless" !== type.type) {
        if (closure_2) {
          let tmp13 = closure_1;
          if (closure_1) {
            const channel = guild_id.channel;
            guild_id = undefined;
            if (channel != null) {
              guild_id = channel.guild_id;
            }
            let tmp16 = null != guild_id;
            if (!tmp16) {
              type = undefined;
              if (channel != null) {
                type = channel.type;
              }
              let tmp19 = type === constants3.DM;
              if (tmp19) {
                const user = UserStore.getUser(channel.getRecipientId());
                let bot;
                if (user != null) {
                  bot = user.bot;
                }
                tmp19 = true === bot;
              }
              tmp16 = tmp19;
            }
            tmp13 = tmp16;
          }
          if (tmp13) {
            let obj1 = AnalyticsUtilsDefault;
            let obj = { miss: null == stateFromStoresObject.result, size: null };
            const _Object = Object;
            obj.size = Object.keys(applicationCommandIndexStore.indices).length;
            obj1.track(constants2.APPLICATION_COMMAND_CACHE_FETCH, obj);
            const result2 = stateFromStoresObject.result;
            let version;
            if (result2 != null) {
              version = result2.version;
            }
            let fetching2 = !tmp33;
            if (version !== stateFromStoresObject.serverVersion) {
              fetching2 = stateFromStoresObject.fetchState.fetching;
            }
            let tmp34 = !fetching2;
            if (!fetching2) {
              let tmp35 = null == stateFromStoresObject.fetchState.retryAfter;
              if (!tmp35) {
                const _Date2 = Date;
                tmp35 = Date.now() >= stateFromStoresObject.fetchState.retryAfter;
              }
              tmp34 = tmp35;
            }
            if (tmp34) {
              if (null == guild_id.channel.guild_id) {
                obj = { type: "channel", channelId: guild_id.channel.id };
                const applicationCommandIndex = ApplicationCommandIndexActionCreators.requestApplicationCommandIndex(obj);
              }
            }
            obj1 = { type: "guild", guildId: null };
            guild_id = guild_id.channel.guild_id;
            obj1.guildId = guild_id;
            const applicationCommandIndex1 = ApplicationCommandIndexActionCreators.requestApplicationCommandIndex(obj1);
          }
        }
        allowApplicationCommands(false);
      } else {
        let tmp8 = closure_2;
        if (closure_2) {
          const result = stateFromStoresObject.result;
          let version1;
          if (result != null) {
            version1 = result.version;
          }
          let fetching = !tmp4;
          if (version1 !== stateFromStoresObject.serverVersion) {
            fetching = stateFromStoresObject.fetchState.fetching;
          }
          let tmp5 = !fetching;
          if (!fetching) {
            let tmp6 = null == stateFromStoresObject.fetchState.retryAfter;
            if (!tmp6) {
              const _Date = Date;
              tmp6 = Date.now() >= stateFromStoresObject.fetchState.retryAfter;
            }
            tmp5 = tmp6;
          }
          tmp8 = tmp5;
        }
        if (tmp8) {
          obj = ApplicationCommandIndexActionCreators;
          const applicationCommandIndex2 = obj.requestApplicationCommandIndex({ type: "user" });
        }
      }
    }
  }, items1);
  return stateFromStoresObject;
};
export const useGuildIndexState = function useGuildIndexState(guildId, arg1) {
  _require = guildId;
  closure_1 = arg1;
  let tmp = stateFromStoresObject(noop.useState(true), 2);
  const first = tmp[0];
  dependencyMap = tmp[1];
  const items = [applicationCommandIndexStore];
  stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => {
    let tmp = applicationCommandIndexStore.indices[closure_0];
    if (tmp == null) {
      tmp = closure_25;
    }
    return tmp;
  });
  const items1 = [stateFromStoresObject, arg1, guildId, first];
  const effect = noop.useEffect(() => {
    let tmp = first;
    if (first) {
      tmp = null != guildId;
    }
    if (tmp) {
      if (closure_1) {
        let obj = { miss: null == stateFromStoresObject.result, size: null };
        const _Object = Object;
        obj.size = Object.keys(applicationCommandIndexStore.indices).length;
        obj.track(constants2.APPLICATION_COMMAND_CACHE_FETCH, obj);
        const result = stateFromStoresObject.result;
        let version;
        if (result != null) {
          version = result.version;
        }
        let fetching = !tmp14;
        if (version !== stateFromStoresObject.serverVersion) {
          fetching = stateFromStoresObject.fetchState.fetching;
        }
        let tmp15 = !fetching;
        if (!fetching) {
          let tmp16 = null == stateFromStoresObject.fetchState.retryAfter;
          if (!tmp16) {
            const _Date = Date;
            tmp16 = Date.now() >= stateFromStoresObject.fetchState.retryAfter;
          }
          tmp15 = tmp16;
        }
        if (tmp15) {
          obj = { type: "guild", guildId };
          const applicationCommandIndex = ApplicationCommandIndexActionCreators.requestApplicationCommandIndex(obj);
        }
      }
      closure_3(false);
    }
  }, items1);
  return stateFromStoresObject;
};
export const useUserIndexState = function useUserIndexState(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  const tmp = stateFromStoresObject(noop.useState(true), 2);
  const first = tmp[0];
  dependencyMap = tmp[1];
  const items = [applicationCommandIndexStore];
  stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => authStore.getUserState());
  const items1 = [stateFromStoresObject, arg1, arg0, first];
  const effect = noop.useEffect(() => {
    if (closure_2) {
      let tmp = closure_1;
      if (closure_1) {
        const result = allowApplicationCommands.result;
        let version;
        if (result != null) {
          version = result.version;
        }
        let fetching = !tmp5;
        if (version !== allowApplicationCommands.serverVersion) {
          fetching = allowApplicationCommands.fetchState.fetching;
        }
        let tmp6 = !fetching;
        if (!fetching) {
          let tmp7 = null == allowApplicationCommands.fetchState.retryAfter;
          if (!tmp7) {
            const _Date = Date;
            tmp7 = Date.now() >= allowApplicationCommands.fetchState.retryAfter;
          }
          tmp6 = tmp7;
        }
        tmp = tmp6;
      }
      if (tmp) {
        tmp = closure_0;
      }
      if (tmp) {
        const applicationCommandIndex = ApplicationCommandIndexActionCreators.requestApplicationCommandIndex({ type: "user" });
      }
      permissionContext(false);
    }
  }, items1);
  return stateFromStoresObject;
};
export const useDiscoveryState = function useDiscoveryState(type, guild, commandTypes, includeFrecency) {
  _require = type;
  const tmp = useQueryState(type, commandTypes, includeFrecency);
  const descriptors = tmp.descriptors;
  const commands = tmp.commands;
  const sectionedCommands = tmp.sectionedCommands;
  const loading = tmp.loading;
  let items = [type, guild];
  const memo = loading.useMemo(() => {
    let tmp2;
    if ("channel" === type.type) {
      const obj = { channel: tmp.channel, guild };
      tmp2 = obj;
    }
    return tmp2;
  }, items);
  const topCommands = require("ApplicationCommandFrecencyHooks").useTopCommands(memo);
  let items1 = [loading, includeFrecency.includeFrecency, topCommands, commands, descriptors, sectionedCommands, memo];
  return loading.useMemo(() => {
    if (includeFrecency.includeFrecency) {
      if (0 !== topCommands.length) {
        const found = commands.filter((id) => topCommands.includes(id.id));
        const sorted = found.sort((arg0, arg1) => {
          const scoreWithoutLoadingLatest = ApplicationCommandFrecencyStore.getScoreWithoutLoadingLatest(memo, arg0);
          return ApplicationCommandFrecencyStore.getScoreWithoutLoadingLatest(memo, arg1) - scoreWithoutLoadingLatest;
        });
        const spliceResult = sorted.splice(0, value2);
        if (0 === spliceResult.length) {
          let obj = { descriptors, commands, sectionedCommands, loading };
        } else {
          obj = { descriptors: null, commands: null, sectionedCommands: null, loading: null };
          const items = [ApplicationCommandBuiltIns.BUILT_IN_SECTIONS[constants.FRECENCY]];
          HermesBuiltin.arraySpread(descriptors, 1);
          obj.descriptors = items;
          obj.commands = spliceResult.concat(commands);
          obj = { section: ApplicationCommandBuiltIns.BUILT_IN_SECTIONS[constants.FRECENCY], data: spliceResult };
          const items1 = [obj];
          HermesBuiltin.arraySpread(sectionedCommands, 1);
          obj.sectionedCommands = items1;
          obj.loading = loading;
        }
        return obj;
      }
    }
    return { descriptors, commands, sectionedCommands, loading };
  }, items1);
};
export { useQueryState };
export const isStale = function isStale(result) {
  result = result.result;
  let version;
  if (result != null) {
    version = result.version;
  }
  return version !== result.serverVersion;
};
export const appLauncherOnlyCompareNames = function appLauncherOnlyCompareNames(arg0, arg1) {
  const collator = applicationCommandIndexStore.collator;
  return collator.compare(arg0, arg1);
};
export const getSection = function getSection(type, applicationId) {
  if (applicationId === constants.BUILT_IN) {
    let obj = { descriptor: ApplicationCommandBuiltIns.BUILT_IN_SECTIONS[tmp2.BUILT_IN], sectionCommands: null, isGuildInstalled: true, isUserInstalled: true };
    const items = [Server.ApplicationCommandType.CHAT];
    obj.sectionCommands = ApplicationCommandBuiltIns.getBuiltInCommands(items, true, false);
    return obj;
  } else {
    const contextState = applicationCommandIndexStore.getContextState(type);
    const result3 = contextState.result;
    let sections;
    const userState = applicationCommandIndexStore.getUserState();
    if (result3 != null) {
      sections = result3.sections;
    }
    if (sections == null) {
      sections = {};
    }
    const result = userState.result;
    let sections1;
    if (result != null) {
      sections1 = result.sections;
    }
    if (sections1 == null) {
      sections1 = {};
    }
    const result2 = applicationCommandIndexStore.getApplicationState(applicationId).result;
    if (result2 != null) {
      sections = result2.sections;
    }
    if (null != sections[applicationId]) {
      if (null != tmp4) {
        const descriptor2 = tmp4.descriptor;
        const items1 = [];
        for (const key10035 in tmp4.commands) {
          let arr = items1.push(tmp4.commands[key10035]);
          continue;
        }
        let values = items1;
        let descriptor = descriptor2;
        const keys = Object.keys();
        if (keys !== undefined) {
          values = items1;
          descriptor = descriptor2;
          while (keys[tmp] !== undefined) {
            if (tmp11 in tmp4.commands) {
              continue;
            } else {
              arr = items1.push(tmp3.commands[tmp11]);
              continue;
            }
            continue;
          }
        }
      }
      obj = { descriptor, sectionCommands: values, isGuildInstalled: null != tmp3, isUserInstalled: null != tmp4 };
      return obj;
    }
    if (null != sections[applicationId]) {
      descriptor = tmp3.descriptor;
      const _Object3 = Object;
      values = Object.values(tmp3.commands);
    } else if (null != tmp4) {
      descriptor = tmp4.descriptor;
      const _Object2 = Object;
      values = Object.values(tmp4.commands);
    } else if (null != tmp5) {
      descriptor = tmp5.descriptor;
      const _Object = Object;
      values = Object.values(tmp5.commands);
    }
  }
};