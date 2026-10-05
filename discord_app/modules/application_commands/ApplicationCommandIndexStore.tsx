// === Module 8795: ApplicationCommandIndexStore ===

// Module 8795 (ApplicationCommandIndexStore)
import LoggerDefault from "Logger" /* 3 */;
import _modDef38 from "module_38" /* 38 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import Server from "Server" /* 1985 */;
import fuzzysearchDefault from "fuzzysearch" /* 5702 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5705 */;
import ApplicationCommandUtils from "ApplicationCommandUtils" /* 7030 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 7034 */;
import ApplicationCommandIndexActionCreators from "ApplicationCommandIndexActionCreators" /* 8799 */;
import CommandPermissionContext from "CommandPermissionContext" /* 8800 */;
import ApplicationCommandQueryTypes from "ApplicationCommandQueryTypes" /* 8803 */;
import ApplicationCommandBuiltIns from "ApplicationCommandBuiltIns" /* 8805 */;
import CommandPermissionUtils from "CommandPermissionUtils" /* 8928 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react_mod from "react" /* 19 */;
import ApplicationFrecencyStore from "ApplicationFrecencyStore" /* 8796 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildStore from "GuildStore" /* 2074 */;
import UserStore from "UserStore" /* 1377 */;
import ApplicationCommandFrecencyStore from "ApplicationCommandFrecencyStore" /* 8797 */;
import ApplicationCommandConstants from "ApplicationCommandConstants" /* 5788 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const get_initializedDefault = get_initialized;
const CommandPermissionUtilsAll = CommandPermissionUtils;
let _require, c2, c6, c7, data, importDefault, locale, map, set;

let closure_15;
let closure_16;
let closure_17;
let closure_18;
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
function updateIndex(type, arg1) {
  let applicationId;
  let tmp3;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  type = type.type;
  if ("guild" === type) {
    applicationId = type.guildId;
  } else if ("channel" === type) {
    applicationId = type.channelId;
  } else if ("user" === type) {
    applicationId = closure_20;
  } else if ("application" === type) {
    applicationId = type.applicationId;
  }
  if (null != applicationCommandIndexStore.indices[applicationId]) {
    const tmp8 = "fetchState" in arg1 && applicationCommandIndexStore.indices[applicationId].fetchState.fetching;
    if (tmp8) {
      const abort = tmp2.fetchState.abort;
      abort.abort();
    }
    const obj2 = {};
    const merged = Object.assign(tmp2);
    const merged1 = Object.assign(arg1);
    tmp3 = obj2;
  } else if (flag) {
    obj = { serverVersion: SymbolResult, fetchState: { fetching: false } };
    const merged2 = Object.assign(arg1);
    tmp3 = obj;
  }
  if (undefined !== tmp3) {
    applicationCommandIndexStore.indices[applicationId] = tmp3;
    if ("application" === type.type) {
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
let obj = function _getOrFetchApplicationCommandIndexForTarget() {
  let indices;
  obj = _asyncToGenerator(async (arg0) => {
    let closure_1;
    let closure_0 = arg0;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_5 = tmp4;
            let closure_4 = tmp;
            closure_0 = undefined;
            const tmp31 = getIndexKey(closure_0);
            const tmp29 = closure_0;
            closure_0 = tmp31;
            value = tmp33;
            if (indices.indices[tmp31] == null) {
              value = closure_2_25;
            }
            if (shouldFetch(value)) {
              c6 = 1;
              c7 = 1;
              const obj4 = { value: updateIndexAndFetchApplicationCommandIndex(tmp29), done: false };
              return obj4;
            } else if (value.fetchState.fetching) {
              c6 = 2;
              c7 = 1;
              const obj5 = { value: value.fetchState.promise, done: false };
              return obj5;
            } else {
              c7 = 3;
              const obj6 = { value, done: true };
              return obj6;
            }
          }
        } else if (1 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            let value2 = tmp17;
            if (closure_133_37.indices[closure_0] == null) {
              value2 = closure_133_25;
            }
            c7 = 3;
            const obj8 = { value: value2, done: true };
            return obj8;
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          value = tmp9;
          if (closure_133_37.indices[closure_0] == null) {
            value = closure_133_25;
          }
          c7 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp25) {
        c7 = 3;
        throw tmp25;
      }
    }
  });
  return obj(...arguments);
};
function updateIndexAndFetchApplicationCommandIndex() {
  return obj(...arguments);
}
obj = function _updateIndexAndFetchApplicationCommandIndex() {
  obj = _asyncToGenerator(async function(arg0) {
    let nextPromise;
    let obj5;
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const _AbortController = AbortController;
            const self = this;
            const self2 = this;
            const abortController = new AbortController();
            const self3 = this;
            const self4 = this;
            const future = new require("Future").Future();
            const obj4 = { fetchState: obj5 };
            obj5 = { fetching: true, abort: abortController, promise: future.promise };
            updateIndex(closure_0, obj4, true);
            const obj7 = require("ApplicationCommandIndexActionCreators");
            const applicationCommandIndex = obj7.fetchApplicationCommandIndex(closure_0, abortController);
            c2 = 1;
            c1 = 1;
            const obj6 = { value: nextPromise.catch(future.reject), done: false };
            nextPromise = applicationCommandIndex.then(future.resolve);
            return obj6;
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
          return { value: "IconComponent", done: null };
        }
      } catch (tmp4) {
        c1 = 3;
        throw tmp4;
      }
    }
  });
  return obj(...arguments);
};
function handleFetchSuccess(arg0) {
  let index;
  let keyPermissionsResult;
  let obj8;
  let target;
  let flag = arg1;
  if (arg1 === undefined) {
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
    const obj3 = {};
    const obj4 = {};
    const _Set = Set;
    const self2 = this;
    const self = this;
    set = new Set();
    const applications = index.applications;
    const iter2 = applications[Symbol.iterator]();
    const nextResult = iter2.next();
    const tmp63 = set;
    while (iter2 !== undefined) {
      let tmp6 = nextResult;
      if (null == nextResult.bot) {
        if (null != tmp6.bot_id) {
          obj4[tmp6.bot_id] = tmp6.id;
          let user = UserStore.getUser(tmp6.bot_id);
          if (null != user) {
            tmp6.bot = tmp13;
          } else {
            let addResult = set.add(tmp6.bot_id);
          }
          obj = { permissions: keyPermissionsResult, botId: tmp6.bot_id };
          let tmp19 = id;
          let obj2 = id(7030);
          let merged = Object.assign(obj2.getApplicationCommandSection(toApplication(tmp6), false));
          keyPermissionsResult = undefined;
          if (null != tmp6.permissions) {
            let tmp19Result = tmp19(7033);
            keyPermissionsResult = tmp19Result.keyPermissions(toServerPermissions(tmp6.permissions, id));
          }
          let obj6 = { descriptor: obj, commands: {} };
          obj3[tmp6.id] = obj6;
          continue;
        }
      }
      if (null != tmp6.bot) {
        obj4[tmp6.bot.id] = tmp6.id;
      }
    }
    let str = "guild";
    const tmp32 = "guild" === target.type && set.size > 0;
    if (tmp32) {
      const items = [];
      const requestMembersById = GuildActionCreatorsDefault.requestMembersById;
      const guildId = target.guildId;
      GuildActionCreatorsDefault;
      HermesBuiltin.arraySpread(items, tmp63, 0);
      const membersById = requestMembersById(guildId, items);
    }
    const application_commands = index.application_commands;
    const obj5 = id(7030);
    const applicationCommands = obj5.buildApplicationCommands(application_commands.map((description_default) => {
      let mapped;
      let name_default;
      let str;
      let tmp4;
      obj = { description: str, name: name_default, options: mapped, permissions: tmp4 };
      const merged = Object.assign(description_default);
      str = description_default.description_default;
      if (str == null) {
        str = description_default.description;
      }
      if (str == null) {
        str = "";
      }
      ({ dm_permission: obj.dm_permission, name_default } = description_default);
      if (name_default == null) {
        name_default = description_default.name;
      }
      const options = description_default.options;
      mapped = undefined;
      if (options != null) {
        mapped = options.map(toServerOption);
      }
      if (mapped == null) {
        mapped = [];
      }
      tmp4 = undefined;
      if (null != description_default.permissions) {
        tmp4 = toServerPermissions(description_default.permissions, id);
      }
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
      let tmp50 = nextResult1;
      let tmp51 = obj3[nextResult1.applicationId];
      if (null != tmp51) {
        tmp52.commands[tmp50.id] = tmp50;
      } else {
        let errorResult = logger.error("Command has no matching application");
      }
      continue;
    }
    let version = index.version;
    if (version == null) {
      version = SymbolResult1;
    }
    const obj7 = { serverVersion: version, result: obj8, fetchState: { fetching: false } };
    obj8 = { sections: obj3, sectionIdsByBotId: obj4, version };
    updateIndex(target, obj7, flag);
  }
}
function updateGuildBotMembers(guildId, members) {
  let applicationId;
  obj = { type: "guild", guildId };
  const type = obj.type;
  if ("guild" === type) {
    applicationId = obj.guildId;
  } else if ("channel" === type) {
    applicationId = obj.channelId;
  } else if ("user" === type) {
    applicationId = closure_20;
  } else if ("application" === type) {
    applicationId = obj.applicationId;
  }
  const tmp = applicationCommandIndexStore.indices[applicationId];
  let result;
  if (tmp != null) {
    result = tmp.result;
  }
  const require = result;
  if (null == result) {
    return false;
  } else {
    let c1 = false;
    const item = members.forEach((user) => {
      user = user.user;
      if (user.bot) {
        if (null != require.sectionIdsByBotId[user.id]) {
          _modDef38(null != require.sections[require.sectionIdsByBotId[user.id]], "Bot has no matching index section");
          _modDef38(null != require.sections[require.sectionIdsByBotId[user.id]].descriptor.application, "Bot's index section has no application info");
          obj = { bot: user };
          const getApplicationCommandSection = ApplicationCommandUtils.getApplicationCommandSection;
          ApplicationCommandUtils;
          const merged = Object.assign(tmp4.descriptor.application);
          const applicationCommandSection = getApplicationCommandSection(obj, false, tmp);
          const obj2 = {};
          const merged1 = Object.assign(tmp4.descriptor);
          const merged2 = Object.assign(applicationCommandSection);
          require.sections[require.sectionIdsByBotId[user.id]].descriptor = obj2;
          c1 = true;
        }
      }
    });
    return c1;
  }
}
function handleStaleUserIndex() {
  obj = { serverVersion: SymbolResult };
  updateIndex({ type: "user" }, obj);
}
function queryIndex(allowApplicationCommands) {
  let NONE;
  let allowEmptySections;
  let applicationStates;
  let builtInCommands;
  let builtIns;
  let contextState;
  let permissionContext;
  let singleApplicationId;
  let text;
  let tmp101;
  let tmp24;
  let tmp25;
  let userState;
  ({ permissionContext, contextState, userState, applicationStates, text, builtIns } = allowApplicationCommands);
  if (builtIns === undefined) {
    builtIns = NONE(8803).BuiltInCommandFilter.ALLOW;
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
    NONE = NONE(8803).ScoreMethod.NONE;
  }
  let sortOptions = allowApplicationCommands.sortOptions;
  if (sortOptions === undefined) {
    sortOptions = closure_43;
  }
  let flag2 = allowApplicationCommands.installOnDemand;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let obj2;
  let formatted;
  const commandTypes = permissionContext.commandTypes;
  if (text != null) {
    formatted = text.toLowerCase();
  }
  let parts;
  if (formatted != null) {
    parts = formatted.split(" ");
  }
  const ONLY_TEXT = NONE(8803).BuiltInCommandFilter.ONLY_TEXT;
  const tmp9 = NONE;
  if (builtIns !== NONE(8803).BuiltInCommandFilter.DENY) {
    const tmp12 = builtIns === ONLY_TEXT;
    const tmp9Result = tmp9(8805);
    builtInCommands = tmp9Result.getBuiltInCommands(commandTypes, true, tmp12);
  } else {
    builtInCommands = [];
  }
  const items = [];
  obj = { permissionContext, query: formatted, splitQuery: parts, allowEmptySections, scoreMethod: NONE, installOnDemand: flag2 };
  const result = contextState.result;
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
  set = new Set();
  if (flag) {
    if (permissionContext.hasBaseAccessPermissions) {
      for (const key10082 in sections) {
        let tmp15 = null != singleApplicationId && sections[key10082].descriptor.id !== singleApplicationId;
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
      let tmp18 = null != singleApplicationId && sections1[key10090].descriptor.id !== singleApplicationId;
      if (tmp18) {
        continue;
      } else {
        let addResult1 = set.add(key10090);
        continue;
      }
      continue;
    }
  }
  map = new Map();
  const tmp20 = applicationStates[Symbol.iterator]();
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
          let result1 = map.set(item10124, tmp29[item10124]);
          continue;
        }
      }
    }
    continue;
  }
  const arr = Array.from(set);
  const iter = arr[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let descriptor;
    let items1;
    let tmp39 = sections[nextResult];
    let tmp40 = tmp39;
    let tmp41 = sections1[nextResult];
    let tmp42 = tmp41;
    let value = map.get(nextResult);
    let tmp44 = null != tmp39;
    let tmp45 = null != tmp41;
    if (null != tmp39) {
      if (null != tmp42) {
        descriptor = tmp42.descriptor;
        items1 = [];
        for (const key10170 in tmp42.commands) {
          let arr2 = items1.push(tmp42.commands[key10170]);
          continue;
        }
        for (const key10174 in tmp40.commands) {
          if (key10174 in tmp42.commands) {
            continue;
          } else {
            let arr3 = items1.push(tmp40.commands[tmp114]);
            continue;
          }
          continue;
        }
        let tmp62 = sortOptions(38)(null != descriptor, "Failed to select application descriptor");
        let tmp64 = sortOptions(38)(null != items1, "Failed to select list of application commands");
        let num = 0;
        let tmp71 = queryIndexSection(descriptor, items1, tmp44, tmp45, obj);
        if (null != tmp71) {
          let arr8 = items.push(tmp72);
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
    const FrecencyUserSettingsActionCreators = NONE(2033).FrecencyUserSettingsActionCreators;
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
    let num2 = 0;
    const tmp87 = queryIndexSection(NONE(8805).BUILT_IN_SECTIONS[constants.BUILT_IN], builtInCommands, true, true, obj);
    if (null != tmp87) {
      items.push(tmp87);
    }
  }
  const flatMapResult = items.flatMap((data) => {
    data = data.data;
    return data.map((item) => {
      obj = { section: data.section };
      const merged = Object.assign(item);
      return obj;
    });
  });
  const tmp89 = NONE;
  if (NONE === NONE(8803).ScoreMethod.COMMAND_ONLY) {
    const context = permissionContext.context;
    let guild_id;
    const getGuild = GuildStore.getGuild;
    if (permissionContext != null) {
      const context2 = permissionContext.context;
      if (context2 != null) {
        guild_id = context2.guild_id;
      }
    }
    const guild = getGuild(guild_id);
    const tmp96 = sortOptions.commands.useFrecency && items.some((section) => section.section.id !== constants.BUILT_IN && section.data.length > 0);
    if (tmp96) {
      const FrecencyUserSettingsActionCreators2 = tmp89(2033).FrecencyUserSettingsActionCreators;
      const ifNecessary1 = FrecencyUserSettingsActionCreators2.loadIfNecessary();
    }
    let tmp98;
    if (null != context) {
      obj2 = { channel: context, guild };
      tmp98 = obj2;
    }
    obj2 = tmp98;
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
        const scoreWithoutLoadingLatest = ApplicationCommandFrecencyStore.getScoreWithoutLoadingLatest(obj2, score);
        const scoreWithoutLoadingLatest1 = ApplicationCommandFrecencyStore.getScoreWithoutLoadingLatest(obj2, score2);
        if (scoreWithoutLoadingLatest !== scoreWithoutLoadingLatest1) {
          return scoreWithoutLoadingLatest1 - scoreWithoutLoadingLatest;
        }
      }
      const collator = applicationCommandIndexStore.collator;
      return collator.compare(score.displayName, score2.displayName);
    });
  }
  let fetching;
  const obj3 = { commands: flatMapResult, descriptors: items.map((section) => section.section), sectionedCommands: items, loading: tmp101 };
  if (contextState != null) {
    fetching = contextState.fetchState.fetching;
  }
  tmp101 = true === fetching;
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
      const value2 = applicationStates.get(singleApplicationId);
      let fetching2;
      if (value2 != null) {
        fetching2 = value2.fetchState.fetching;
      }
      tmp103 = true === fetching2;
    }
    tmp101 = tmp103;
  }
  return obj3;
}
function queryIndexSection(descriptor, builtInCommands, isGuildInstalled, arg3, arg4) {
  let allowEmptySections;
  let context;
  let installOnDemand;
  let isImpersonating;
  let permissionContext;
  let query;
  let roleIds;
  let scoreMethod;
  let splitQuery;
  let tmp21;
  let tmp37;
  let userId;
  function scoreCommands(query, splitQuery, items, name, scoreMethod) {
    let SECTION_NAME_FUZZY_MATCHES;
    items = [];
    if (scoreMethod === require("ApplicationCommandQueryTypes").ScoreMethod.APPLICATION_ONLY) {
      name = name.name;
      const toLocaleLowerCaseResult = name.toLocaleLowerCase();
      if (toLocaleLowerCaseResult.startsWith(query)) {
        SECTION_NAME_FUZZY_MATCHES = constants.SECTION_NAME_STARTS_WITH;
      } else if (toLocaleLowerCaseResult.includes(query)) {
        SECTION_NAME_FUZZY_MATCHES = constants.SECTION_NAME_CONTAINS;
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
        if (hasItem) {
          SECTION_NAME_FUZZY_MATCHES = constants.SECTION_DESCRIPTION_CONTAINS;
        } else if (fuzzysearchDefault(query, toLocaleLowerCaseResult)) {
          SECTION_NAME_FUZZY_MATCHES = constants.SECTION_NAME_FUZZY_MATCHES;
        }
      }
    }
    const first = splitQuery[0];
    const substr = splitQuery.slice(1);
    const joined = substr.join(" ");
    const iter = items[Symbol.iterator]();
    const tmp19 = undefined !== SECTION_NAME_FUZZY_MATCHES;
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp21 = nextResult;
      let tmp22;
      let tmp27 = scoreMethod !== require("ApplicationCommandQueryTypes").ScoreMethod.COMMAND_ONLY && scoreMethod !== require("ApplicationCommandQueryTypes").ScoreMethod.COMMAND_OR_APPLICATION;
      if (!tmp27) {
        tmp22 = scoreCommand(tmp21, query, first, joined);
      }
      let tmp36 = undefined === tmp22;
      if (!tmp36) {
        let tmp37 = tmp19;
        if (tmp37) {
          tmp37 = SECTION_NAME_FUZZY_MATCHES < tmp22;
        }
        tmp36 = tmp37;
      }
      if (tmp36) {
        tmp22 = SECTION_NAME_FUZZY_MATCHES;
      }
      if (undefined !== tmp22) {
        obj = { score: tmp22 };
        let push = items.push;
        let merged = Object.assign(tmp21);
        let arr = push(obj);
      }
      continue;
    }
    return items;
  }
  ({ query, splitQuery, scoreMethod, permissionContext } = arg4);
  ({ context, userId, roleIds, isImpersonating } = permissionContext);
  let guild_id;
  ({ allowEmptySections, installOnDemand } = arg4);
  if (context != null) {
    guild_id = context.guild_id;
  }
  let allowedForUser = null;
  if (null != guild_id) {
    obj = CommandPermissionUtilsAll;
    allowedForUser = obj.computeAllowedForUser(descriptor.permissions, context.guild_id, userId, roleIds, isImpersonating);
  }
  let guild_id1;
  if (context != null) {
    guild_id1 = context.guild_id;
  }
  let allowedForChannel = null;
  if (null != guild_id1) {
    const obj2 = CommandPermissionUtilsAll;
    allowedForChannel = obj2.computeAllowedForChannel(descriptor.permissions, context, context.guild_id);
  }
  let items = [];
  let iter = builtInCommands[Symbol.iterator]();
  let nextResult = iter.next();
  while (iter !== undefined) {
    let tmp16 = nextResult;
    let tmp20 = CommandPermissionUtilsAll;
    let obj3 = { applicationAllowedForUser: allowedForUser, applicationAllowedForChannel: allowedForChannel, commandBotId: descriptor.botId, isGuildInstalled, isUserInstalled: tmp21 };
    tmp21 = arg3;
    let hasAccess = tmp20.hasAccess;
    if (!arg3) {
      tmp21 = installOnDemand;
    }
    let hasAccessResult = hasAccess(nextResult, permissionContext, obj3);
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
        let num = 0;
        let tmp34 = items;
        let tmp35 = descriptor;
        arr2 = scoreCommands(query, splitQuery, items, descriptor, scoreMethod);
      }
    }
  }
  if (0 !== arr2.length) {
    let tmp40 = scoreMethod !== ApplicationCommandQueryTypes.ScoreMethod.NONE && scoreMethod !== ApplicationCommandQueryTypes.ScoreMethod.APPLICATION_ONLY;
    if (!tmp40) {
      const sorted = arr2.sort((displayName, displayName2) => {
        collator = collator.collator;
        return collator.compare(displayName.displayName, displayName2.displayName);
      });
    }
    tmp37 = { section: descriptor, data: arr2 };
    const obj4 = { section: descriptor, data: arr2 };
  } else {
    tmp37 = null;
  }
  return tmp37;
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
  if (tmp3) {
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
  return { description: description.description, icon: description.icon, id: description.id, name: description.name, bot: description.bot, flags: description.flags, embedded_surfaces: description.embedded_surfaces };
}
function toServerOption(choices) {
  let description;
  let mapped;
  let mapped1;
  let name;
  obj = { choices: mapped, description, name, options: mapped1 };
  const merged = Object.assign(choices);
  choices = choices.choices;
  mapped = undefined;
  if (choices != null) {
    mapped = choices.map(toServerChoice);
  }
  description = choices.description_default;
  if (description == null) {
    description = choices.description;
  }
  name = choices.name_default;
  if (name == null) {
    name = choices.name;
  }
  const options = choices.options;
  mapped1 = undefined;
  if (options != null) {
    mapped1 = options.map(toServerOption);
  }
  if (choices.description !== choices.description_default) {
    obj.description_localized = choices.description;
  }
  if (choices.name !== choices.name_default) {
    obj.name_localized = choices.name;
  }
  return obj;
}
function toServerChoice(name_default) {
  let name;
  obj = { name };
  const merged = Object.assign(name_default);
  name = name_default.name_default;
  if (name == null) {
    name = name_default.name;
  }
  if (name_default.name !== name_default.name_default) {
    obj.name_localized = name_default.name;
  }
  return obj;
}
function toServerPermissions(permissions, id) {
  let tmp10;
  let tmp11;
  let tmp20;
  let tmp21;
  const items = [];
  if (null != permissions.user) {
    const push = items.push;
    obj = { type: ApplicationCommandTypes.ApplicationCommandPermissionType.USER, id, permission: permissions.user };
    push(obj);
  }
  if (null != permissions.channels) {
    const _Object = Object;
    const entries = Object.entries(permissions.channels);
    const tmp28 = entries[Symbol.iterator]();
    while (tmp28 !== undefined) {
      let tmp9 = _slicedToArray(tmp6, 2);
      let obj2 = { type: ApplicationCommandTypes.ApplicationCommandPermissionType.CHANNEL, id: tmp10, permission: tmp11 };
      [tmp10, tmp11] = tmp9;
      let push2 = items.push;
      let push2Result = push2(obj2);
      continue;
    }
  }
  if (null != permissions.roles) {
    const _Object2 = Object;
    const entries1 = Object.entries(permissions.roles);
    const tmp32 = entries1[Symbol.iterator]();
    while (tmp32 !== undefined) {
      let tmp19 = _slicedToArray(tmp16, 2);
      let obj3 = { type: ApplicationCommandTypes.ApplicationCommandPermissionType.ROLE, id: tmp20, permission: tmp21 };
      [tmp20, tmp21] = tmp19;
      let push3 = items.push;
      let push3Result = push3(obj3);
      continue;
    }
  }
  return items;
}
function scoreCommand(untranslatedName, query, splitQuery, joined) {
  let name2;
  let serverLocalizedName2;
  untranslatedName = untranslatedName.untranslatedName;
  const str = untranslatedName.toLocaleLowerCase();
  const displayName = untranslatedName.displayName;
  const str2 = displayName.toLocaleLowerCase();
  if (!str.startsWith(query)) {
    if (!str2.startsWith(query)) {
      if (str.startsWith(splitQuery)) {
        const parts = str.split(" ");
        const substr = parts.slice(1);
        joined = substr.join(" ");
        if (joined.startsWith(joined)) {
          return constants4.STARTS_WITH_COMMAND_NAME;
        }
      }
      if (str2.startsWith(splitQuery)) {
        const parts1 = str2.split(" ");
        const substr1 = parts1.slice(1);
        const joined1 = substr1.join(" ");
        if (joined1.startsWith(joined)) {
          return constants4.STARTS_WITH_COMMAND_NAME;
        }
      }
      if (!str.includes(query)) {
        let hasItem;
        if (str2 != null) {
          hasItem = str2.includes(query);
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
            if (!name.startsWith(query)) {
              let _HermesInternal = HermesInternal;
              let combined = "" + str + " " + obj5;
              if (!combined.startsWith(query)) {
                if (null == str2) {
                  if (null != serverLocalizedName) {
                    if (!serverLocalizedName.startsWith(query)) {
                      let _HermesInternal3 = HermesInternal;
                      let combined1 = "" + str + " " + serverLocalizedName;
                      if (!combined1.startsWith(query)) {
                        if (null != str2) {
                          let _HermesInternal4 = HermesInternal;
                          let combined2 = "" + str2 + " " + serverLocalizedName;
                        }
                      }
                    }
                    let STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME = constants4.STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME;
                    iter.return();
                    return STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME;
                  }
                  let hasItem1 = obj5.includes(query);
                  if (!hasItem1) {
                    let hasItem2;
                    if (serverLocalizedName != null) {
                      hasItem2 = serverLocalizedName.includes(query);
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
            let STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME2 = constants4.STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME;
            iter.return();
            return STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME2;
          }
          if (flag) {
            return constants4.OPTION_NAME_CONTAINS;
          } else {
            const untranslatedDescription = untranslatedName.untranslatedDescription;
            const toLocaleLowerCaseResult = untranslatedDescription.toLocaleLowerCase();
            const displayDescription = untranslatedName.displayDescription;
            const toLocaleLowerCaseResult1 = displayDescription.toLocaleLowerCase();
            if (!toLocaleLowerCaseResult.includes(query)) {
              if (!toLocaleLowerCaseResult1.includes(query)) {
                if (!fuzzysearchDefault(query, str)) {
                  if (!fuzzysearchDefault(query, str2)) {
                    let COMMAND_DESCRIPTION_FUZZY_MATCHES;
                    let options1 = untranslatedName.options;
                    if (options1 == null) {
                      options1 = [];
                    }
                    for (const item10132 of options1) {
                      ({ serverLocalizedName: serverLocalizedName2, name: name2 } = item10132);
                      let OPTION_NAME_FUZZY_MATCHES = constants4.OPTION_NAME_FUZZY_MATCHES;
                      obj12.return();
                      return OPTION_NAME_FUZZY_MATCHES;
                    }
                    if (fuzzysearchDefault(query, toLocaleLowerCaseResult)) {
                      COMMAND_DESCRIPTION_FUZZY_MATCHES = constants4.COMMAND_DESCRIPTION_FUZZY_MATCHES;
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
let react = react_mod;
({ BuiltInSectionId: closure_15, DISCOVERY_COMMANDS_FRECENCY_LIMIT: closure_16 } = ApplicationCommandConstants);
({ AnalyticEvents: closure_17, ChannelTypes: closure_18 } = Constants);
let tmp4 = new LoggerDefault("ApplicationCommandIndexStore");
const logger = tmp4;
let closure_20 = Symbol("currentUser");
const SymbolResult = Symbol("stale");
const SymbolResult1 = Symbol("current");
let closure_23 = Object.freeze({ descriptors: [], commands: [], sectionedCommands: [], loading: true });
obj = { serverVersion: SymbolResult1, fetchState: { fetching: false }, result: { sections: {}, sectionIdsByBotId: {}, version: SymbolResult1 } };
let closure_24 = Object.freeze(obj);
let closure_25 = Object.freeze({ serverVersion: SymbolResult, fetchState: { fetching: false } });
let closure_26 = { sensitivity: "accent", numeric: true };
let c27 = false;
let closure_28 = [];
const Store = get_initializedDefault.Store;
class ApplicationCommandIndexStore extends Store {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.indices = {};
    applyArgumentsResult.applicationIndices = new Map();
    applyArgumentsResult.applicationIndicesVersion = 0;
    applyArgumentsResult.oldLocale = LocaleStore.locale;
    new Map();
    const collator = new Intl.Collator(LocaleStore.locale, closure_26);
    applyArgumentsResult.collator = collator;
    return applyArgumentsResult;
  }
  initialize() {
    let oldLocale;
    this.waitFor(LocaleStore);
    this.waitFor(ApplicationCommandFrecencyStore, ApplicationFrecencyStore, AuthenticationStore, ChannelStore, GuildMemberStore, GuildStore, UserStore);
    const items = [LocaleStore];
    this.syncWith(items, function() {
      locale = locale.locale;
      if (locale !== oldLocale.oldLocale) {
        handleReset();
        const _Intl = Intl;
        const self = this;
        const self2 = this;
        const collator = new Intl.Collator(locale, { sensitivity: "accent", numeric: true });
        oldLocale.collator = collator;
        oldLocale.oldLocale = locale;
      }
    });
  }
  getContextState(type) {
    if ("contextless" !== type.type) {
      let tmp10;
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
        const indices = this.indices;
        if (id == null) {
          id = type.channel.id;
        }
        let tmp11 = indices[id];
        if (tmp11 == null) {
          tmp11 = closure_25;
        }
        tmp10 = tmp11;
      }
      return tmp10;
    }
    tmp10 = closure_24;
  }
  hasContextStateApplication(guildId) {
    let channelId = guildId.guildId;
    const applicationId = guildId.applicationId;
    const indices = this.indices;
    if (channelId == null) {
      channelId = guildId.channelId;
    }
    let sections;
    if (indices[channelId] != null) {
      const result = tmp.result;
      if (result != null) {
        sections = result.sections;
      }
    }
    if (sections == null) {
      sections = {};
    }
    return null != sections[applicationId];
  }
  getGuildState(arg0) {
    let tmp;
    if (null == arg0) {
      tmp = closure_24;
    } else {
      const self = this;
      tmp = this.indices[arg0];
      if (tmp == null) {
        tmp = closure_25;
      }
    }
    return tmp;
  }
  getUserState() {
    let tmp = this.indices[closure_20];
    if (tmp == null) {
      tmp = closure_25;
    }
    return tmp;
  }
  hasUserStateApplication(applicationId) {
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
  }
  getApplicationState(applicationId) {
    let tmp;
    if (null == applicationId) {
      tmp = closure_24;
    } else {
      const self = this;
      tmp = this.indices[applicationId];
      if (tmp == null) {
        tmp = closure_25;
      }
    }
    return tmp;
  }
  getApplicationStates() {
    return this.applicationIndices;
  }
  hasApplicationState(applicationId) {
    return applicationId in this.indices;
  }
  query(dependencyMap, commandTypes, applicationId) {
    if (null == UserStore.getCurrentUser()) {
      return closure_23;
    } else {
      let channel;
      if ("channel" === dependencyMap.type) {
        channel = dependencyMap.channel;
      }
      const self = this;
      const contextState = this.getContextState(dependencyMap);
      const userState = this.getUserState();
      const applicationState = this.getApplicationState(applicationId.applicationId);
      let applicationStates = this.getApplicationStates();
      const obj2 = CommandPermissionContext;
      const permissionContext = obj2.buildPermissionContext(channel, commandTypes.commandTypes);
      let tmp11 = null == channel;
      if (!tmp11) {
        let prop;
        if (permissionContext != null) {
          prop = permissionContext.hasBaseAccessPermissions;
        }
        tmp11 = true === prop;
      }
      let flag3 = false;
      if (applicationId.allowFetch) {
        let tmp15 = tmp14 && tmp11 && null != channel;
        if (tmp15) {
          let guild_id;
          if (channel != null) {
            guild_id = channel.guild_id;
          }
          let tmp17 = null != guild_id;
          if (!tmp17) {
            let type;
            if (channel != null) {
              type = channel.type;
            }
            let tmp20 = type === constants3.DM;
            if (tmp20) {
              const user = UserStore.getUser(channel.getRecipientId());
              let bot;
              if (user != null) {
                bot = user.bot;
              }
              tmp20 = true === bot;
            }
            tmp17 = tmp20;
          }
          tmp15 = tmp17;
        }
        let flag5 = false;
        if (tmp15) {
          const _Object = Object;
          const obj3 = { miss: null == contextState.result, size: Object.keys(applicationCommandIndexStore.indices).length };
          const track = AnalyticsUtilsDefault.track;
          const APPLICATION_COMMAND_CACHE_FETCH = constants2.APPLICATION_COMMAND_CACHE_FETCH;
          AnalyticsUtilsDefault;
          track(APPLICATION_COMMAND_CACHE_FETCH, obj3);
          const result = contextState.result;
          let version;
          if (result != null) {
            version = result.version;
          }
          let fetching = !tmp30;
          if (version !== contextState.serverVersion) {
            fetching = contextState.fetchState.fetching;
          }
          let tmp31 = !fetching;
          if (tmp31) {
            let tmp32 = null == contextState.fetchState.retryAfter;
            if (!tmp32) {
              const _Date = Date;
              tmp32 = Date.now() >= contextState.fetchState.retryAfter;
            }
            tmp31 = tmp32;
          }
          if (tmp31) {
            tmp31 = null != channel;
          }
          let flag6 = false;
          if (tmp31) {
            if (null != channel.guild_id) {
              const obj4 = { type: "guild", guildId: channel.guild_id };
              const tmp8Result = ApplicationCommandIndexActionCreators;
              const applicationCommandIndex = tmp8Result.requestApplicationCommandIndex(obj4);
              flag6 = true;
            } else {
              const obj5 = { type: "channel", channelId: channel.id };
              const tmp8Result4 = ApplicationCommandIndexActionCreators;
              const applicationCommandIndex1 = tmp8Result4.requestApplicationCommandIndex(obj5);
              flag6 = true;
            }
          }
          flag5 = flag6;
        }
        const result2 = userState.result;
        let version1;
        if (result2 != null) {
          version1 = result2.version;
        }
        let fetching2 = !tmp36;
        if (version1 !== userState.serverVersion) {
          fetching2 = userState.fetchState.fetching;
        }
        let tmp37 = !fetching2;
        if (tmp37) {
          let tmp38 = null == userState.fetchState.retryAfter;
          if (!tmp38) {
            const _Date2 = Date;
            tmp38 = Date.now() >= userState.fetchState.retryAfter;
          }
          tmp37 = tmp38;
        }
        if (tmp37) {
          const tmp8Result5 = ApplicationCommandIndexActionCreators;
          const applicationCommandIndex2 = tmp8Result5.requestApplicationCommandIndex({ type: "user" });
          flag5 = true;
        }
        const result3 = applicationState.result;
        let version2;
        if (result3 != null) {
          version2 = result3.version;
        }
        let fetching3 = !tmp42;
        if (version2 !== applicationState.serverVersion) {
          fetching3 = applicationState.fetchState.fetching;
        }
        let tmp43 = !fetching3;
        if (tmp43) {
          let tmp44 = null == applicationState.fetchState.retryAfter;
          if (!tmp44) {
            const _Date3 = Date;
            tmp44 = Date.now() >= applicationState.fetchState.retryAfter;
          }
          tmp43 = tmp44;
        }
        if (tmp43) {
          tmp43 = null != applicationId.applicationId;
        }
        if (tmp43) {
          const obj6 = { type: "application", applicationId: applicationId.applicationId };
          const tmp8Result6 = ApplicationCommandIndexActionCreators;
          const applicationCommandIndex3 = tmp8Result6.requestApplicationCommandIndex(obj6);
          flag5 = true;
        }
        flag3 = flag5;
      }
      const obj7 = { permissionContext, text: commandTypes.text, allowApplicationCommands: false !== commandTypes.applicationCommands, builtIns: commandTypes.builtIns, scoreMethod: null, allowEmptySections: null, contextState, userState, applicationStates, sortOptions: null, singleApplicationId: null, installOnDemand: null };
      ({ scoreMethod: obj11.scoreMethod, allowEmptySections: obj11.allowEmptySections } = applicationId);
      if (!applicationId.allowApplicationState) {
        const _Map = Map;
        const self2 = this;
        const self3 = this;
        applicationStates = new Map();
      }
      ({ sortOptions: obj11.sortOptions, applicationId: obj11.singleApplicationId, installOnDemand: obj11.installOnDemand } = applicationId);
      const tmp47Result = queryIndex(obj7);
      tmp47Result.loading = tmp47Result.loading || flag3;
      return tmp47Result;
    }
  }
  queryInstallOnDemandApp(id, id2) {
    let items;
    const channel = ChannelStore.getChannel(id2);
    if (null != channel) {
      const self = this;
      const query = this.query;
      if (null != channel) {
        obj = { channel, type: "channel" };
        const obj2 = { channel, type: "channel" };
      } else {
        obj = { type: "contextless" };
      }
      const obj3 = { commandTypes: items };
      items = [Server.ApplicationCommandType.CHAT];
      const obj4 = { placeholderCount: 5, scoreMethod: ApplicationCommandQueryTypes.ScoreMethod.COMMAND_ONLY, applicationId: id, allowFetch: true };
      const query1 = query(obj, obj3, obj4);
    }
  }
}
const prototype = ApplicationCommandIndexStore.prototype;
ApplicationCommandIndexStore.displayName = "ApplicationCommandIndexStore";
let obj2 = {
  LOGOUT: handleReset,
  CONNECTION_OPEN: function handleConnectionOpen() {
    function flushCommandsFetchSuccessQueue() {
      for (const item10005 of closure_28) {
        let tmp2 = handleFetchSuccess(item10005);
        continue;
      }
      closure_28 = [];
    }
    const values = Object.values(applicationCommandIndexStore.indices);
    for (const item10010 of values) {
      item10010.serverVersion = SymbolResult;
      continue;
    }
    flushCommandsFetchSuccessQueue();
    c27 = true;
  },
  APPLICATION_COMMAND_INDEX_FETCH_REQUEST: function handleFetchRequest(target) {
    let applicationId;
    target = target.target;
    const type = target.type;
    if ("guild" === type) {
      applicationId = target.guildId;
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
    if (tmp4) {
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
    obj = { fetchState: { fetching: false, retryAfter: Date.now() + 5000 } };
    ({ fetching: false, retryAfter: Date.now() + 5000 });
    updateIndex(target.target, obj);
  },
  APPLICATION_COMMAND_EXECUTE_BAD_VERSION: function handleStaleCommand(arg0) {
    let applicationId;
    let channelId;
    let guildId;
    ({ applicationId, channelId, guildId } = arg0);
    if (applicationCommandIndexStore.hasContextStateApplication({ applicationId, channelId, guildId })) {
      let obj3;
      if (null != guildId) {
        obj3 = { type: "guild", guildId };
        const obj2 = { type: "guild", guildId };
      } else {
        obj3 = { type: "channel", channelId };
      }
      const obj4 = { serverVersion: SymbolResult };
      updateIndex(obj3, obj4);
    }
    if (applicationCommandIndexStore.hasUserStateApplication(applicationId)) {
      const obj5 = { serverVersion: SymbolResult };
      updateIndex({ type: "user" }, obj5);
    }
    if (applicationCommandIndexStore.hasApplicationState(applicationId)) {
      const obj6 = { type: "application", applicationId };
      const obj7 = { serverVersion: SymbolResult };
      updateIndex(obj6, obj7);
    }
  },
  CHANNEL_DELETE: function handleDeletedChannelIndex(channel) {
    let applicationId;
    obj = { type: "channel", channelId: channel.channel.id };
    const type = obj.type;
    if ("guild" === type) {
      applicationId = obj.guildId;
    } else if ("channel" === type) {
      applicationId = obj.channelId;
    } else if ("user" === type) {
      applicationId = closure_20;
    } else if ("application" === type) {
      applicationId = obj.applicationId;
    }
    let fetching;
    if (applicationCommandIndexStore.indices[applicationId] != null) {
      fetching = tmp2.fetchState.fetching;
    }
    if (fetching) {
      const abort = tmp2.fetchState.abort;
      abort.abort();
    }
    delete applicationCommandIndexStore.indices[applicationId];
  },
  GUILD_DELETE: function handleDeletedGuildIndex(guild) {
    let applicationId;
    obj = { type: "guild", guildId: guild.guild.id };
    const type = obj.type;
    if ("guild" === type) {
      applicationId = obj.guildId;
    } else if ("channel" === type) {
      applicationId = obj.channelId;
    } else if ("user" === type) {
      applicationId = closure_20;
    } else if ("application" === type) {
      applicationId = obj.applicationId;
    }
    let fetching;
    if (applicationCommandIndexStore.indices[applicationId] != null) {
      fetching = tmp2.fetchState.fetching;
    }
    if (fetching) {
      const abort = tmp2.fetchState.abort;
      abort.abort();
    }
    delete applicationCommandIndexStore.indices[applicationId];
  },
  USER_APPLICATION_UPDATE: handleStaleUserIndex,
  USER_APPLICATION_REMOVE: handleStaleUserIndex,
  GUILD_APPLICATION_COMMAND_INDEX_UPDATE: function handleGuildCommandIndexUpdate(guildId) {
    let version = guildId.version;
    obj = { type: "guild", guildId: guildId.guildId };
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
          let obj2 = { type: "channel", channelId: dMFromUserId };
          let obj3 = { serverVersion: SymbolResult };
          let tmp7 = updateIndex(obj2, obj3);
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
const applicationCommandIndexStore = new ApplicationCommandIndexStore(DispatcherDefault, obj2);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel, arg1, arg2) => {
  let closure_1;
  let closure_4;
  let first;
  let first1;
  let tmp8;
  _require = channel;
  importDefault = arg1;
  let closure_2 = arg2;
  const tmp = _require;
  const tmp2 = first;
  obj = require("react");
  const cResult = obj.c(16);
  [first, _slicedToArray] = react.useState(true);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [applicationCommandIndexStore];
    cResult[0] = items;
    first1 = items;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] !== channel) {
    const fn = function c() {
      let contextState;
      if ("channel" === channel.type) {
        contextState = applicationCommandIndexStore.getContextState(tmp);
      } else {
        contextState = applicationCommandIndexStore.getUserState();
      }
      return contextState;
    };
    cResult[1] = channel;
    cResult[2] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const tmpResult = tmp(tmp2[20]);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(first1, tmp8);
  if (cResult[3] === arg1) {
    if (cResult[4] === arg2) {
      if (cResult[5] === first) {
        if (cResult[6] === channel.channel) {
          if (cResult[7] === channel.type) {
            let tmp10;
            if (cResult[8] === stateFromStoresObject) {
              tmp10 = cResult[9];
            }
            if (cResult[10] === arg1) {
              if (cResult[11] === arg2) {
                if (cResult[12] === first) {
                  if (cResult[13] === channel) {
                    let tmp11;
                    if (cResult[14] === stateFromStoresObject) {
                      tmp11 = cResult[15];
                    }
                    const effect = react.useEffect(tmp10, tmp11);
                    return stateFromStoresObject;
                  }
                }
              }
            }
            const items1 = [stateFromStoresObject, arg2, channel, arg1, first];
            cResult[10] = arg1;
            cResult[11] = arg2;
            cResult[12] = first;
            cResult[13] = channel;
            cResult[14] = stateFromStoresObject;
            cResult[15] = items1;
            tmp11 = items1;
          }
        }
      }
    }
  }
  class C {
    constructor() {
      if (first) {
        if ("contextless" !== channel.type) {
          if (closure_2) {
            let tmp15 = closure_1;
            if (tmp15) {
              channel = tmp2.channel;
              let guild_id;
              if (channel != null) {
                guild_id = channel.guild_id;
              }
              let tmp18 = null != guild_id;
              if (!tmp18) {
                let type;
                if (channel != null) {
                  type = channel.type;
                }
                let tmp21 = type === constants2.DM;
                if (tmp21) {
                  const user = UserStore.getUser(channel.getRecipientId());
                  let bot;
                  if (user != null) {
                    bot = user.bot;
                  }
                  tmp21 = true === bot;
                }
                tmp18 = tmp21;
              }
              tmp15 = tmp18;
            }
            if (tmp15) {
              const _Object = Object;
              const obj2 = { miss: null == stateFromStoresObject.result, size: Object.keys(applicationCommandIndexStore.indices).length };
              const track = AnalyticsUtilsDefault.track;
              const APPLICATION_COMMAND_CACHE_FETCH = constants.APPLICATION_COMMAND_CACHE_FETCH;
              AnalyticsUtilsDefault;
              track(APPLICATION_COMMAND_CACHE_FETCH, obj2);
              const result2 = stateFromStoresObject.result;
              let version;
              if (result2 != null) {
                version = result2.version;
              }
              let fetching2 = !tmp35;
              if (version !== stateFromStoresObject.serverVersion) {
                fetching2 = stateFromStoresObject.fetchState.fetching;
              }
              let tmp36 = !fetching2;
              if (tmp36) {
                let tmp37 = null == stateFromStoresObject.fetchState.retryAfter;
                if (!tmp37) {
                  const _Date2 = Date;
                  tmp37 = Date.now() >= stateFromStoresObject.fetchState.retryAfter;
                }
                tmp36 = tmp37;
              }
              if (tmp36) {
                if (null != channel.channel.guild_id) {
                  const obj4 = { type: "guild", guildId: channel.channel.guild_id };
                  const obj5 = ApplicationCommandIndexActionCreators;
                  const applicationCommandIndex = obj5.requestApplicationCommandIndex(obj4);
                } else {
                  const obj6 = { type: "channel", channelId: channel.channel.id };
                  const obj3 = ApplicationCommandIndexActionCreators;
                  const applicationCommandIndex1 = obj3.requestApplicationCommandIndex(obj6);
                }
              }
            }
          }
          closure_4(false);
        } else {
          let tmp10 = closure_2;
          if (tmp10) {
            const result = stateFromStoresObject.result;
            let version1;
            if (result != null) {
              version1 = result.version;
            }
            let fetching = !tmp6;
            if (version1 !== stateFromStoresObject.serverVersion) {
              fetching = stateFromStoresObject.fetchState.fetching;
            }
            let tmp7 = !fetching;
            if (tmp7) {
              let tmp8 = null == stateFromStoresObject.fetchState.retryAfter;
              if (!tmp8) {
                const _Date = Date;
                tmp8 = Date.now() >= stateFromStoresObject.fetchState.retryAfter;
              }
              tmp7 = tmp8;
            }
            tmp10 = tmp7;
          }
          if (tmp10) {
            obj = ApplicationCommandIndexActionCreators;
            const applicationCommandIndex2 = obj.requestApplicationCommandIndex({ type: "user" });
          }
        }
      }
    }
  }
  cResult[3] = arg1;
  cResult[4] = arg2;
  cResult[5] = first;
  cResult[6] = channel.channel;
  cResult[7] = channel.type;
  cResult[8] = stateFromStoresObject;
  cResult[9] = C;
  tmp10 = C;
}) : ((arg0, arg1, arg2) => {
  let closure_0;
  let closure_4;
  let first;
  _require = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  [first, _slicedToArray] = react.useState(true);
  obj = require("get initialized");
  const items = [applicationCommandIndexStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let contextState;
    if ("channel" === closure_0.type) {
      contextState = applicationCommandIndexStore.getContextState(tmp);
    } else {
      contextState = applicationCommandIndexStore.getUserState();
    }
    return contextState;
  });
  const items1 = [stateFromStoresObject, arg2, arg0, arg1, first];
  const effect = react.useEffect(() => {
    if (first) {
      if ("contextless" !== closure_0.type) {
        if (closure_2) {
          let tmp15 = closure_1;
          if (tmp15) {
            const channel = closure_0.channel;
            let guild_id;
            if (channel != null) {
              guild_id = channel.guild_id;
            }
            let tmp18 = null != guild_id;
            if (!tmp18) {
              let type;
              if (channel != null) {
                type = channel.type;
              }
              let tmp21 = type === constants2.DM;
              if (tmp21) {
                const user = UserStore.getUser(channel.getRecipientId());
                let bot;
                if (user != null) {
                  bot = user.bot;
                }
                tmp21 = true === bot;
              }
              tmp18 = tmp21;
            }
            tmp15 = tmp18;
          }
          if (tmp15) {
            const _Object = Object;
            const obj2 = { miss: null == stateFromStoresObject.result, size: Object.keys(applicationCommandIndexStore.indices).length };
            const track = AnalyticsUtilsDefault.track;
            const APPLICATION_COMMAND_CACHE_FETCH = constants.APPLICATION_COMMAND_CACHE_FETCH;
            AnalyticsUtilsDefault;
            track(APPLICATION_COMMAND_CACHE_FETCH, obj2);
            const result2 = stateFromStoresObject.result;
            let version;
            if (result2 != null) {
              version = result2.version;
            }
            let fetching2 = !tmp35;
            if (version !== stateFromStoresObject.serverVersion) {
              fetching2 = stateFromStoresObject.fetchState.fetching;
            }
            let tmp36 = !fetching2;
            if (tmp36) {
              let tmp37 = null == stateFromStoresObject.fetchState.retryAfter;
              if (!tmp37) {
                const _Date2 = Date;
                tmp37 = Date.now() >= stateFromStoresObject.fetchState.retryAfter;
              }
              tmp36 = tmp37;
            }
            if (tmp36) {
              if (null != closure_0.channel.guild_id) {
                const obj4 = { type: "guild", guildId: closure_0.channel.guild_id };
                const obj5 = ApplicationCommandIndexActionCreators;
                const applicationCommandIndex = obj5.requestApplicationCommandIndex(obj4);
              } else {
                const obj6 = { type: "channel", channelId: closure_0.channel.id };
                const obj3 = ApplicationCommandIndexActionCreators;
                const applicationCommandIndex1 = obj3.requestApplicationCommandIndex(obj6);
              }
            }
          }
        }
        closure_4(false);
      } else {
        let tmp10 = closure_2;
        if (tmp10) {
          const result = stateFromStoresObject.result;
          let version1;
          if (result != null) {
            version1 = result.version;
          }
          let fetching = !tmp6;
          if (version1 !== stateFromStoresObject.serverVersion) {
            fetching = stateFromStoresObject.fetchState.fetching;
          }
          let tmp7 = !fetching;
          if (tmp7) {
            let tmp8 = null == stateFromStoresObject.fetchState.retryAfter;
            if (!tmp8) {
              const _Date = Date;
              tmp8 = Date.now() >= stateFromStoresObject.fetchState.retryAfter;
            }
            tmp7 = tmp8;
          }
          tmp10 = tmp7;
        }
        if (tmp10) {
          obj = ApplicationCommandIndexActionCreators;
          const applicationCommandIndex2 = obj.requestApplicationCommandIndex({ type: "user" });
        }
      }
    }
  }, items1);
  return stateFromStoresObject;
});
let closure_38 = tmp8;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId, arg1) => {
  let closure_1;
  let closure_3;
  let first1;
  let stateFromStoresObject;
  let tmp8;
  _require = guildId;
  importDefault = arg1;
  let tmp = _require;
  obj = require("react");
  const cResult = obj.c(9);
  const tmp4 = stateFromStoresObject(react.useState(true), 2);
  const first = tmp4[0];
  dependencyMap = tmp4[1];
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [applicationCommandIndexStore];
    cResult[0] = items;
    first1 = items;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function l() {
      let tmp = applicationCommandIndexStore.indices[guildId];
      if (tmp == null) {
        tmp = closure_25;
      }
      return tmp;
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const tmpResult = tmp(504);
  stateFromStoresObject = tmpResult.useStateFromStoresObject(first1, tmp8);
  if (cResult[3] === arg1) {
    if (cResult[4] === first) {
      if (cResult[5] === guildId) {
        let tmp10;
        let tmp11;
        if (cResult[6] === stateFromStoresObject) {
          tmp10 = cResult[7];
          tmp11 = cResult[8];
        }
        const effect = react.useEffect(tmp10, tmp11);
        return stateFromStoresObject;
      }
    }
  }
  class S {
    constructor() {
      const tmp = first && null != guildId;
      if (tmp) {
        if (closure_1) {
          const _Object = Object;
          obj = { miss: null == stateFromStoresObject.result, size: Object.keys(applicationCommandIndexStore.indices).length };
          const track = AnalyticsUtilsDefault.track;
          const APPLICATION_COMMAND_CACHE_FETCH = constants.APPLICATION_COMMAND_CACHE_FETCH;
          AnalyticsUtilsDefault;
          track(APPLICATION_COMMAND_CACHE_FETCH, obj);
          const result = stateFromStoresObject.result;
          let version;
          if (result != null) {
            version = result.version;
          }
          let fetching = !tmp15;
          if (version !== stateFromStoresObject.serverVersion) {
            fetching = stateFromStoresObject.fetchState.fetching;
          }
          let tmp16 = !fetching;
          if (tmp16) {
            let tmp17 = null == stateFromStoresObject.fetchState.retryAfter;
            if (!tmp17) {
              const _Date = Date;
              tmp17 = Date.now() >= stateFromStoresObject.fetchState.retryAfter;
            }
            tmp16 = tmp17;
          }
          if (tmp16) {
            const obj3 = { type: "guild", guildId };
            const obj2 = ApplicationCommandIndexActionCreators;
            const applicationCommandIndex = obj2.requestApplicationCommandIndex(obj3);
          }
        }
        closure_3(false);
      }
    }
  }
  const items1 = [stateFromStoresObject, arg1, guildId, first];
  cResult[3] = arg1;
  cResult[4] = first;
  cResult[5] = guildId;
  cResult[6] = stateFromStoresObject;
  cResult[7] = S;
  cResult[8] = items1;
  tmp11 = items1;
  tmp10 = S;
}) : ((guildId, arg1) => {
  let closure_3;
  let stateFromStoresObject;
  _require = guildId;
  let closure_1 = arg1;
  let tmp = stateFromStoresObject(react.useState(true), 2);
  const first = tmp[0];
  dependencyMap = tmp[1];
  obj = require("get initialized");
  const items = [applicationCommandIndexStore];
  stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let tmp = applicationCommandIndexStore.indices[guildId];
    if (tmp == null) {
      tmp = closure_25;
    }
    return tmp;
  });
  const items1 = [stateFromStoresObject, arg1, guildId, first];
  const effect = react.useEffect(() => {
    const tmp = first && null != guildId;
    if (tmp) {
      if (closure_1) {
        const _Object = Object;
        obj = { miss: null == stateFromStoresObject.result, size: Object.keys(applicationCommandIndexStore.indices).length };
        const track = AnalyticsUtilsDefault.track;
        const APPLICATION_COMMAND_CACHE_FETCH = constants.APPLICATION_COMMAND_CACHE_FETCH;
        AnalyticsUtilsDefault;
        track(APPLICATION_COMMAND_CACHE_FETCH, obj);
        const result = stateFromStoresObject.result;
        let version;
        if (result != null) {
          version = result.version;
        }
        let fetching = !tmp15;
        if (version !== stateFromStoresObject.serverVersion) {
          fetching = stateFromStoresObject.fetchState.fetching;
        }
        let tmp16 = !fetching;
        if (tmp16) {
          let tmp17 = null == stateFromStoresObject.fetchState.retryAfter;
          if (!tmp17) {
            const _Date = Date;
            tmp17 = Date.now() >= stateFromStoresObject.fetchState.retryAfter;
          }
          tmp16 = tmp17;
        }
        if (tmp16) {
          const obj3 = { type: "guild", guildId };
          const obj2 = ApplicationCommandIndexActionCreators;
          const applicationCommandIndex = obj2.requestApplicationCommandIndex(obj3);
        }
      }
      closure_3(false);
    }
  }, items1);
  return stateFromStoresObject;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let closure_3;
  let stateFromStoresObject;
  let tmp6;
  let tmp7;
  let userState;
  _require = arg0;
  let closure_1 = arg1;
  let tmp2 = dependencyMap;
  obj = require("react");
  const cResult = obj.c(8);
  const tmp4 = stateFromStoresObject(react.useState(true), 2);
  const first = tmp4[0];
  dependencyMap = tmp4[1];
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [applicationCommandIndexStore];
    const fn = function l() {
      return userState.getUserState();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp7 = fn;
    tmp6 = items;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult = tmp(504);
  stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp6, tmp7);
  if (cResult[2] === arg0) {
    if (cResult[3] === arg1) {
      if (cResult[4] === first) {
        let tmp10;
        let tmp11;
        if (cResult[5] === stateFromStoresObject) {
          tmp10 = cResult[6];
          tmp11 = cResult[7];
        }
        const effect = react.useEffect(tmp10, tmp11);
        return stateFromStoresObject;
      }
    }
  }
  class S {
    constructor() {
      if (first) {
        let tmp2 = closure_1;
        if (tmp2) {
          const result = stateFromStoresObject.result;
          let version;
          if (result != null) {
            version = result.version;
          }
          let fetching = !tmp6;
          if (version !== stateFromStoresObject.serverVersion) {
            fetching = stateFromStoresObject.fetchState.fetching;
          }
          let tmp7 = !fetching;
          if (tmp7) {
            let tmp8 = null == stateFromStoresObject.fetchState.retryAfter;
            if (!tmp8) {
              const _Date = Date;
              tmp8 = Date.now() >= stateFromStoresObject.fetchState.retryAfter;
            }
            tmp7 = tmp8;
          }
          tmp2 = tmp7;
        }
        if (tmp2) {
          tmp2 = closure_0;
        }
        if (tmp2) {
          obj = ApplicationCommandIndexActionCreators;
          const applicationCommandIndex = obj.requestApplicationCommandIndex({ type: "user" });
        }
        closure_3(false);
      }
    }
  }
  const items1 = [stateFromStoresObject, arg1, arg0, first];
  cResult[2] = arg0;
  cResult[3] = arg1;
  cResult[4] = first;
  cResult[5] = stateFromStoresObject;
  cResult[6] = S;
  cResult[7] = items1;
  tmp11 = items1;
  tmp10 = S;
}) : ((arg0, arg1) => {
  let closure_0;
  let closure_3;
  let stateFromStoresObject;
  let userState;
  _require = arg0;
  let closure_1 = arg1;
  const tmp = stateFromStoresObject(react.useState(true), 2);
  const first = tmp[0];
  dependencyMap = tmp[1];
  obj = require("get initialized");
  const items = [applicationCommandIndexStore];
  stateFromStoresObject = obj.useStateFromStoresObject(items, () => userState.getUserState());
  const items1 = [stateFromStoresObject, arg1, arg0, first];
  const effect = react.useEffect(() => {
    if (first) {
      let tmp2 = closure_1;
      if (tmp2) {
        const result = stateFromStoresObject.result;
        let version;
        if (result != null) {
          version = result.version;
        }
        let fetching = !tmp6;
        if (version !== stateFromStoresObject.serverVersion) {
          fetching = stateFromStoresObject.fetchState.fetching;
        }
        let tmp7 = !fetching;
        if (tmp7) {
          let tmp8 = null == stateFromStoresObject.fetchState.retryAfter;
          if (!tmp8) {
            const _Date = Date;
            tmp8 = Date.now() >= stateFromStoresObject.fetchState.retryAfter;
          }
          tmp7 = tmp8;
        }
        tmp2 = tmp7;
      }
      if (tmp2) {
        tmp2 = closure_0;
      }
      if (tmp2) {
        obj = ApplicationCommandIndexActionCreators;
        const applicationCommandIndex = obj.requestApplicationCommandIndex({ type: "user" });
      }
      closure_3(false);
    }
  }, items1);
  return stateFromStoresObject;
});
let closure_39 = tmp10;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_40 = ReactCompilerGating.isReactCompilerEnabled() ? ((applicationId, arg1) => {
  let closure_3;
  let first1;
  let stateFromStores;
  let tmp8;
  _require = applicationId;
  let closure_1 = arg1;
  let tmp2 = dependencyMap;
  obj = require("react");
  const cResult = obj.c(9);
  const tmp4 = stateFromStores(react.useState(true), 2);
  const first = tmp4[0];
  dependencyMap = tmp4[1];
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [applicationCommandIndexStore];
    cResult[0] = items;
    first1 = items;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] !== applicationId) {
    const fn = function l() {
      return applicationCommandIndexStore.getApplicationState(applicationId);
    };
    cResult[1] = applicationId;
    cResult[2] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const tmpResult = tmp(504);
  stateFromStores = tmpResult.useStateFromStores(first1, tmp8);
  if (cResult[3] === arg1) {
    if (cResult[4] === applicationId) {
      if (cResult[5] === stateFromStores) {
        let tmp10;
        let tmp11;
        if (cResult[6] === first) {
          tmp10 = cResult[7];
          tmp11 = cResult[8];
        }
        const effect = react.useEffect(tmp10, tmp11);
      }
    }
  }
  class S {
    constructor() {
      if (first) {
        let tmp2 = closure_1;
        if (tmp2) {
          const result = stateFromStores.result;
          let version;
          if (result != null) {
            version = result.version;
          }
          let fetching = !tmp6;
          if (version !== stateFromStores.serverVersion) {
            fetching = stateFromStores.fetchState.fetching;
          }
          let tmp7 = !fetching;
          if (tmp7) {
            let tmp8 = null == stateFromStores.fetchState.retryAfter;
            if (!tmp8) {
              const _Date = Date;
              tmp8 = Date.now() >= stateFromStores.fetchState.retryAfter;
            }
            tmp7 = tmp8;
          }
          tmp2 = tmp7;
        }
        if (tmp2) {
          tmp2 = null != applicationId;
        }
        if (tmp2) {
          const obj2 = { type: "application", applicationId };
          obj = ApplicationCommandIndexActionCreators;
          const applicationCommandIndex = obj.requestApplicationCommandIndex(obj2);
        }
        closure_3(false);
      }
    }
  }
  const items1 = [arg1, applicationId, stateFromStores, first];
  cResult[3] = arg1;
  cResult[4] = applicationId;
  cResult[5] = stateFromStores;
  cResult[6] = first;
  cResult[7] = S;
  cResult[8] = items1;
  tmp11 = items1;
  tmp10 = S;
}) : ((applicationId, arg1) => {
  let closure_3;
  let stateFromStores;
  _require = applicationId;
  let closure_1 = arg1;
  const tmp = stateFromStores(react.useState(true), 2);
  const first = tmp[0];
  dependencyMap = tmp[1];
  obj = require("get initialized");
  const items = [applicationCommandIndexStore];
  stateFromStores = obj.useStateFromStores(items, () => applicationCommandIndexStore.getApplicationState(applicationId));
  const items1 = [arg1, applicationId, stateFromStores, first];
  const effect = react.useEffect(() => {
    if (first) {
      let tmp2 = closure_1;
      if (tmp2) {
        const result = stateFromStores.result;
        let version;
        if (result != null) {
          version = result.version;
        }
        let fetching = !tmp6;
        if (version !== stateFromStores.serverVersion) {
          fetching = stateFromStores.fetchState.fetching;
        }
        let tmp7 = !fetching;
        if (tmp7) {
          let tmp8 = null == stateFromStores.fetchState.retryAfter;
          if (!tmp8) {
            const _Date = Date;
            tmp8 = Date.now() >= stateFromStores.fetchState.retryAfter;
          }
          tmp7 = tmp8;
        }
        tmp2 = tmp7;
      }
      if (tmp2) {
        tmp2 = null != applicationId;
      }
      if (tmp2) {
        const obj2 = { type: "application", applicationId };
        obj = ApplicationCommandIndexActionCreators;
        const applicationCommandIndex = obj.requestApplicationCommandIndex(obj2);
      }
      closure_3(false);
    }
  }, items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_41 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let applicationStates;
  let tmp4;
  let tmp5;
  obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [applicationCommandIndexStore];
    const fn = function n() {
      return applicationStates.getApplicationStates();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (() => {
  let applicationStates;
  const items = [applicationCommandIndexStore];
  obj = get_initialized;
  return obj.useStateFromStores(items, () => applicationStates.getApplicationStates());
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_42 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp4;
  let tmp5;
  obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [applicationCommandIndexStore];
    const fn = function n() {
      return applicationCommandIndexStore.applicationIndicesVersion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (() => {
  const items = [applicationCommandIndexStore];
  obj = get_initialized;
  return obj.useStateFromStores(items, () => applicationCommandIndexStore.applicationIndicesVersion);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp11 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel, arg1, arg2, includeFrecency) => {
  let closure_0;
  let commands;
  let descriptors;
  let loading;
  let sectionedCommands;
  let tmp20;
  obj = require("react");
  const cResult = obj.c(33);
  ({ descriptors, commands, sectionedCommands, loading } = closure_44(channel, arg2, includeFrecency));
  closure_44(channel, arg2, includeFrecency);
  if (cResult[0] === channel.channel) {
    if (cResult[1] === channel.type) {
      let tmp6;
      let tmp10;
      if (cResult[2] === arg1) {
        tmp6 = cResult[3];
      }
      _require = tmp6;
      const tmp2Result = require("ApplicationCommandFrecencyHooks");
      const topCommands = tmp2Result.useTopCommands(tmp6);
      if (cResult[4] === tmp6) {
        if (cResult[5] === commands) {
          if (cResult[6] === descriptors) {
            if (cResult[7] === loading) {
              if (cResult[8] === includeFrecency.includeFrecency) {
                if (cResult[9] === sectionedCommands) {
                  if (cResult[10] === topCommands) {
                    tmp10 = cResult[11];
                  }
                  return tmp10;
                }
              }
            }
          }
        }
      }
      if (includeFrecency.includeFrecency) {
        let tmp11;
        if (0 !== topCommands.length) {
          if (cResult[17] !== topCommands) {
            class O {
              constructor(arg0) {
                return closure_1.includes(channel.id);
              }
            }
            cResult[17] = topCommands;
            cResult[18] = O;
          } else {
            class O {
              constructor(arg0) {
                return closure_1.includes(channel.id);
              }
            }
          }
          if (cResult[19] !== tmp6) {
            class T {
              constructor(arg0, arg1) {
                scoreWithoutLoadingLatest = closure_14.getScoreWithoutLoadingLatest(closure_0, channel);
                return closure_14.getScoreWithoutLoadingLatest(closure_0, arg1) - scoreWithoutLoadingLatest;
              }
            }
            cResult[19] = tmp6;
            cResult[20] = T;
          } else {
            class T {
              constructor(arg0, arg1) {
                scoreWithoutLoadingLatest = closure_14.getScoreWithoutLoadingLatest(closure_0, channel);
                return closure_14.getScoreWithoutLoadingLatest(closure_0, arg1) - scoreWithoutLoadingLatest;
              }
            }
          }
          const found = commands.filter(O);
          const sorted = found.sort(T);
          const spliceResult = sorted.splice(0, closure_16);
          if (0 !== spliceResult.length) {
            class T {
              constructor(arg0, arg1) {
                scoreWithoutLoadingLatest = closure_14.getScoreWithoutLoadingLatest(closure_0, channel);
                return closure_14.getScoreWithoutLoadingLatest(closure_0, arg1) - scoreWithoutLoadingLatest;
              }
            }
            if (cResult[28] !== spliceResult) {
              class T {
                constructor(arg0, arg1) {
                  scoreWithoutLoadingLatest = closure_14.getScoreWithoutLoadingLatest(closure_0, channel);
                  return closure_14.getScoreWithoutLoadingLatest(closure_0, arg1) - scoreWithoutLoadingLatest;
                }
              }
              tmp18[0] = require("ApplicationCommandBuiltIns").BUILT_IN_SECTIONS[constants.FRECENCY];
              tmp18[1] = spliceResult;
              cResult[28] = spliceResult;
              cResult[29] = tmp18;
            } else {
              class T {
                constructor(arg0, arg1) {
                  scoreWithoutLoadingLatest = closure_14.getScoreWithoutLoadingLatest(closure_0, channel);
                  return closure_14.getScoreWithoutLoadingLatest(closure_0, arg1) - scoreWithoutLoadingLatest;
                }
              }
            }
            if (cResult[30] === sectionedCommands) {
              class T {
                constructor(arg0, arg1) {
                  scoreWithoutLoadingLatest = closure_14.getScoreWithoutLoadingLatest(closure_0, channel);
                  return closure_14.getScoreWithoutLoadingLatest(closure_0, arg1) - scoreWithoutLoadingLatest;
                }
              }
              tmp11 = { descriptors: tmp16, commands: spliceResult.concat(commands), sectionedCommands: tmp20, loading };
              const obj2 = { descriptors: tmp16, commands: spliceResult.concat(commands), sectionedCommands: tmp20, loading };
            }
            const items = [tmp18];
            HermesBuiltin.arraySpread(items, sectionedCommands, 1);
            cResult[30] = sectionedCommands;
            cResult[31] = tmp18;
            cResult[32] = items;
            tmp20 = items;
          } else {
            class T {
              constructor(arg0, arg1) {
                scoreWithoutLoadingLatest = closure_14.getScoreWithoutLoadingLatest(closure_0, channel);
                return closure_14.getScoreWithoutLoadingLatest(closure_0, arg1) - scoreWithoutLoadingLatest;
              }
            }
            const obj3 = { descriptors, commands, sectionedCommands, loading };
            cResult[21] = commands;
            cResult[22] = descriptors;
            cResult[23] = loading;
            cResult[24] = sectionedCommands;
            cResult[25] = obj3;
          }
        }
        cResult[4] = tmp6;
        cResult[5] = commands;
        cResult[6] = descriptors;
        cResult[7] = loading;
        cResult[8] = includeFrecency.includeFrecency;
        cResult[9] = sectionedCommands;
        cResult[10] = topCommands;
        cResult[11] = tmp11;
        tmp10 = tmp11;
      }
      if (cResult[12] === commands) {
        class T {
          constructor(arg0, arg1) {
            scoreWithoutLoadingLatest = closure_14.getScoreWithoutLoadingLatest(closure_0, channel);
            return closure_14.getScoreWithoutLoadingLatest(closure_0, arg1) - scoreWithoutLoadingLatest;
          }
        }
      }
      const obj4 = { descriptors, commands, sectionedCommands, loading };
      cResult[12] = commands;
      cResult[13] = descriptors;
      cResult[14] = loading;
      cResult[15] = sectionedCommands;
      cResult[16] = obj4;
      tmp11 = obj4;
    }
  }
  let tmp7;
  if ("channel" === channel.type) {
    class T {
      constructor(arg0, arg1) {
        scoreWithoutLoadingLatest = closure_14.getScoreWithoutLoadingLatest(closure_0, channel);
        return closure_14.getScoreWithoutLoadingLatest(closure_0, arg1) - scoreWithoutLoadingLatest;
      }
    }
    tmp8[0] = channel.channel;
    tmp8[1] = arg1;
    tmp7 = tmp8;
  }
  cResult[0] = channel.channel;
  cResult[1] = channel.type;
  cResult[2] = arg1;
  cResult[3] = tmp7;
  tmp6 = tmp7;
}) : ((arg0, guild, arg2, includeFrecency) => {
  let type;
  _require = arg0;
  const tmp = closure_44(arg0, arg2, includeFrecency);
  const descriptors = tmp.descriptors;
  const commands = tmp.commands;
  const sectionedCommands = tmp.sectionedCommands;
  const loading = tmp.loading;
  let items = [arg0, guild];
  const memo = loading.useMemo(() => {
    let tmp2;
    if ("channel" === type.type) {
      tmp2 = { channel: tmp.channel, guild };
      obj = { channel: tmp.channel, guild };
    }
    return tmp2;
  }, items);
  obj = require("ApplicationCommandFrecencyHooks");
  const topCommands = obj.useTopCommands(memo);
  let items1 = [loading, includeFrecency.includeFrecency, topCommands, commands, descriptors, sectionedCommands, memo];
  return loading.useMemo(() => {
    let items;
    let items1;
    if (includeFrecency.includeFrecency) {
      if (0 !== topCommands.length) {
        let obj2;
        const found = commands.filter((id) => topCommands.includes(id.id));
        const sorted = found.sort((arg0, arg1) => {
          const scoreWithoutLoadingLatest = ApplicationCommandFrecencyStore.getScoreWithoutLoadingLatest(memo, arg0);
          return ApplicationCommandFrecencyStore.getScoreWithoutLoadingLatest(memo, arg1) - scoreWithoutLoadingLatest;
        });
        const spliceResult = sorted.splice(0, authStore3);
        if (0 === spliceResult.length) {
          obj2 = { descriptors, commands, sectionedCommands, loading };
          obj = { descriptors, commands, sectionedCommands, loading };
        } else {
          obj2 = { descriptors: items, commands: spliceResult.concat(commands), sectionedCommands: items1, loading };
          items = [ApplicationCommandBuiltIns.BUILT_IN_SECTIONS[constants.FRECENCY]];
          HermesBuiltin.arraySpread(items, descriptors, 1);
          items1 = [{ section: ApplicationCommandBuiltIns.BUILT_IN_SECTIONS[constants.FRECENCY], data: spliceResult }];
          const obj3 = { section: ApplicationCommandBuiltIns.BUILT_IN_SECTIONS[constants.FRECENCY], data: spliceResult };
          HermesBuiltin.arraySpread(items1, sectionedCommands, 1);
        }
        return obj2;
      }
    }
    return { descriptors, commands, sectionedCommands, loading };
  }, items1);
});
let closure_43 = Object.freeze({ applications: { useFrecency: false, useScore: false }, commands: { useFrecency: true, useScore: true } });
ReactCompilerGating = ReactCompilerGating_mod;
let tmp12 = ReactCompilerGating.isReactCompilerEnabled() ? (function(launcherContext, commandTypes, allowFetch) {
  obj = react2;
  const cResult = obj.c(15);
  let channel;
  if ("channel" === launcherContext.type) {
    channel = launcherContext.channel;
  }
  const tmpResult = CommandPermissionContext;
  const permissionContext = tmpResult.usePermissionContext(channel, commandTypes.commandTypes);
  const tmp7 = closure_38(launcherContext, false !== commandTypes.applicationCommands, allowFetch.allowFetch);
  const tmp8 = closure_39(false !== commandTypes.applicationCommands, allowFetch.allowFetch);
  const tmp9 = closure_41();
  closure_42();
  closure_40(allowFetch.applicationId, allowFetch.allowFetch);
  if (cResult[0] === false !== commandTypes.applicationCommands) {
    if (cResult[1] === tmp9) {
      if (cResult[2] === launcherContext) {
        if (cResult[3] === tmp7) {
          if (cResult[4] === commandTypes.builtIns) {
            if (cResult[5] === commandTypes.text) {
              if (cResult[6] === allowFetch.allowApplicationState) {
                if (cResult[7] === allowFetch.allowEmptySections) {
                  if (cResult[8] === allowFetch.applicationId) {
                    if (cResult[9] === allowFetch.installOnDemand) {
                      if (cResult[10] === allowFetch.scoreMethod) {
                        if (cResult[11] === allowFetch.sortOptions) {
                          if (cResult[12] === permissionContext) {
                            let tmp12;
                            if (cResult[13] === tmp8) {
                              tmp12 = cResult[14];
                            }
                            return tmp12;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  const obj2 = { permissionContext, text: commandTypes.text, allowApplicationCommands: false !== commandTypes.applicationCommands, builtIns: commandTypes.builtIns, scoreMethod: allowFetch.scoreMethod, allowEmptySections: allowFetch.allowEmptySections, contextState: tmp7, userState: tmp8, launcherContext, applicationStates: map, sortOptions: null, singleApplicationId: null, installOnDemand: null };
  map = tmp9;
  if (!allowFetch.allowApplicationState) {
    const _Map = Map;
    const self = this;
    const self2 = this;
    map = new Map();
  }
  ({ sortOptions: obj3.sortOptions, applicationId: obj3.singleApplicationId, installOnDemand: obj3.installOnDemand } = allowFetch);
  const tmp13Result = queryIndex(obj2);
  cResult[0] = false !== commandTypes.applicationCommands;
  cResult[1] = tmp9;
  cResult[2] = launcherContext;
  cResult[3] = tmp7;
  cResult[4] = commandTypes.builtIns;
  cResult[5] = commandTypes.text;
  cResult[6] = allowFetch.allowApplicationState;
  cResult[7] = allowFetch.allowEmptySections;
  cResult[8] = allowFetch.applicationId;
  cResult[9] = allowFetch.installOnDemand;
  cResult[10] = allowFetch.scoreMethod;
  cResult[11] = allowFetch.sortOptions;
  cResult[12] = permissionContext;
  cResult[13] = tmp8;
  cResult[14] = tmp13Result;
  tmp12 = tmp13Result;
}) : ((type, commandTypes, allowFetch) => {
  let launcherContext;
  let permissionContext;
  let userState;
  _require = type;
  let channel;
  if ("channel" === type.type) {
    channel = type.channel;
  }
  obj = require("CommandPermissionContext");
  permissionContext = obj.usePermissionContext(channel, commandTypes.commandTypes);
  const allowApplicationCommands = tmp3;
  const tmp4 = closure_38(type, false !== commandTypes.applicationCommands, allowFetch.allowFetch);
  const contextState = tmp4;
  const tmp5 = closure_39(false !== commandTypes.applicationCommands, allowFetch.allowFetch);
  react = tmp5;
  const tmp6 = closure_41();
  let closure_7 = tmp6;
  const tmp7 = closure_42();
  closure_40(allowFetch.applicationId, allowFetch.allowFetch);
  const items = [permissionContext, , , , , , , , , , , , , , ];
  ({ text: arr[1], builtIns: arr[2] } = commandTypes);
  items[3] = false !== commandTypes.applicationCommands;
  ({ scoreMethod: arr[4], allowEmptySections: arr[5], sortOptions: arr[6], allowApplicationState: arr[7], applicationId: arr[8], installOnDemand: arr[9] } = allowFetch);
  items[10] = tmp4;
  items[11] = tmp5;
  items[12] = type;
  items[13] = tmp6;
  items[14] = tmp7;
  return react.useMemo(function() {
    obj = { permissionContext, text: commandTypes.text, allowApplicationCommands, builtIns: commandTypes.builtIns, scoreMethod: allowFetch.scoreMethod, allowEmptySections: allowFetch.allowEmptySections, contextState, userState, launcherContext, applicationStates: map, sortOptions: null, singleApplicationId: null, installOnDemand: null };
    if (allowFetch.allowApplicationState) {
      map = closure_7;
    } else {
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map();
    }
    ({ sortOptions: obj.sortOptions, applicationId: obj.singleApplicationId, installOnDemand: obj.installOnDemand } = allowFetch);
    return queryIndex(obj);
  }, items);
});
let closure_44 = tmp12;
const constants4 = { COMMAND_NAME_STARTS_WITH: 0, [0]: "COMMAND_NAME_STARTS_WITH", STARTS_WITH_COMMAND_NAME: 1, [1]: "STARTS_WITH_COMMAND_NAME", COMMAND_NAME_CONTAINS: 2, [2]: "COMMAND_NAME_CONTAINS", STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME: 3, [3]: "STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME", OPTION_NAME_CONTAINS: 4, [4]: "OPTION_NAME_CONTAINS", SECTION_NAME_STARTS_WITH: 5, [5]: "SECTION_NAME_STARTS_WITH", SECTION_NAME_CONTAINS: 6, [6]: "SECTION_NAME_CONTAINS", COMMAND_DESCRIPTION_CONTAINS: 7, [7]: "COMMAND_DESCRIPTION_CONTAINS", SECTION_DESCRIPTION_CONTAINS: 8, [8]: "SECTION_DESCRIPTION_CONTAINS", COMMAND_NAME_FUZZY_MATCHES: 9, [9]: "COMMAND_NAME_FUZZY_MATCHES", OPTION_NAME_FUZZY_MATCHES: 10, [10]: "OPTION_NAME_FUZZY_MATCHES", SECTION_NAME_FUZZY_MATCHES: 11, [11]: "SECTION_NAME_FUZZY_MATCHES", COMMAND_DESCRIPTION_FUZZY_MATCHES: 12, [12]: "COMMAND_DESCRIPTION_FUZZY_MATCHES" };
function isStale(result) {
  result = result.result;
  let version;
  if (result != null) {
    version = result.version;
  }
  return version !== result.serverVersion;
}
let result = size.fileFinishedImporting("modules/application_commands/ApplicationCommandIndexStore.tsx");

export default applicationCommandIndexStore;
export const getOrFetchApplicationCommandIndexForTarget = function getOrFetchApplicationCommandIndexForTarget() {
  return obj(...arguments);
};
export const useContextIndexState = tmp8;
export const useGuildIndexState = tmp9;
export const useUserIndexState = tmp10;
export const useDiscoveryState = tmp11;
export const useQueryState = tmp12;
export { isStale };
export const appLauncherOnlyCompareNames = function appLauncherOnlyCompareNames(arg0, arg1) {
  const collator = applicationCommandIndexStore.collator;
  return collator.compare(arg0, arg1);
};
export const getSection = function getSection(type, applicationId) {
  let getBuiltInCommands;
  let items;
  if (applicationId === constants.BUILT_IN) {
    obj = { descriptor: ApplicationCommandBuiltIns.BUILT_IN_SECTIONS[tmp2.BUILT_IN], sectionCommands: getBuiltInCommands(items, true, false), isGuildInstalled: true, isUserInstalled: true };
    getBuiltInCommands = ApplicationCommandBuiltIns.getBuiltInCommands;
    items = [];
    ApplicationCommandBuiltIns;
    items[0] = Server.ApplicationCommandType.CHAT;
    return obj;
  } else {
    let descriptor;
    let values;
    const contextState = applicationCommandIndexStore.getContextState(type);
    const result3 = contextState.result;
    let sections1;
    const userState = applicationCommandIndexStore.getUserState();
    if (result3 != null) {
      sections1 = result3.sections;
    }
    if (sections1 == null) {
      sections1 = {};
    }
    const result = userState.result;
    let sections2;
    if (result != null) {
      sections2 = result.sections;
    }
    if (sections2 == null) {
      sections2 = {};
    }
    const result2 = applicationCommandIndexStore.getApplicationState(applicationId).result;
    if (result2 != null) {
      const sections = result2.sections;
    }
    if (null != sections1[applicationId]) {
      if (null != sections2[applicationId]) {
        const descriptor2 = tmp4.descriptor;
        const items1 = [];
        for (const key10035 in tmp4.commands) {
          let arr = items1.push(tmp4.commands[key10035]);
          continue;
        }
        values = items1;
        descriptor = descriptor2;
        const keys = Object.keys();
        if (keys !== undefined) {
          values = items1;
          descriptor = descriptor2;
          while (keys[tmp] !== undefined) {
            if (tmp11 in tmp4.commands) {
              continue;
            } else {
              let arr2 = items1.push(tmp3.commands[tmp11]);
              continue;
            }
            continue;
          }
        }
      }
      return { descriptor, sectionCommands: values, isGuildInstalled: null != sections1[applicationId], isUserInstalled: null != sections2[applicationId] };
    }
    if (null != sections1[applicationId]) {
      descriptor = tmp3.descriptor;
      const _Object3 = Object;
      values = Object.values(tmp3.commands);
    } else if (null != sections2[applicationId]) {
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