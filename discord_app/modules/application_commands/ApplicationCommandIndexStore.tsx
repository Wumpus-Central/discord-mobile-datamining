// === Module 8154: getIndexKey ===

// Module 8154 (getIndexKey)
import timestampDefault from "timestamp" /* 3 */;
import initializeDefault from "initialize" /* 586 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 695 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import PermissionOverwriteType from "PermissionOverwriteType" /* 1954 */;
import fuzzysearchDefault from "fuzzysearch" /* 5462 */;
import showTooManyUserGuildsAlertDefault from "showTooManyUserGuildsAlert" /* 5465 */;
import ApplicationCommandSectionType from "ApplicationCommandSectionType" /* 7277 */;
import computePermissions from "computePermissions" /* 8159 */;
import ScoreMethod from "ScoreMethod" /* 8162 */;
import getOptionValue from "getOptionValue" /* 8164 */;
import computeAllowedForUser from "computeAllowedForUser" /* 8439 */;
import computeAllowedForUserAll from "computeAllowedForUser" /* 8439 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "asyncGeneratorStep" /* 5 */;
import closure_6 from "noop" /* 19 */;
import closure_7 from "handleUserSettingsProtoStoreChange" /* 8155 */;
import closure_8 from "_getSystemLocale" /* 1995 */;
import closure_9 from "fetchFingerprint" /* 1215 */;
import closure_10 from "ensureGuildLoaded" /* 1386 */;
import closure_11 from "trackCommunicationDisabled" /* 1991 */;
import closure_12 from "createGuildRecordFromRust" /* 1908 */;
import closure_13 from "mergeGuildAvatar" /* 1921 */;
import closure_14 from "handleUserSettingsProtoStoreChange" /* 8156 */;
import TRUE_OPTION_NAME from "TRUE_OPTION_NAME" /* 4952 */;
import ME from "ME" /* 673 */;

require = arg1;
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
function updateIndex(target, arg1, flag) {
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
    obj = { serverVersion: null, fetchState: null };
    obj[0] = closure_21;
    obj[1] = { fetching: false };
    const merged2 = Object.assign(arg1);
    tmp3 = obj;
  }
  if (undefined !== tmp3) {
    tmp.indices[applicationId] = tmp3;
    if ("application" === target.type) {
      const applicationIndices = tmp.applicationIndices;
      const result = applicationIndices.set(applicationId, tmp3);
      tmp.applicationIndicesVersion = tmp.applicationIndicesVersion + 1;
    }
  }
  return applicationCommandIndexStore.indices[applicationId];
}
function handleReset() {
  const values = Object.values(applicationCommandIndexStore.indices);
  for (const item10011 of values) {
    if (item10011.fetchState.fetching) {
      let tmp3 = item10011;
      let abort = tmp2.fetchState.abort;
      let abortResult = abort.abort();
    }
    continue;
  }
  applicationCommandIndexStore.indices = {};
}
function _getOrFetchApplicationCommandIndexForTarget() {
  const self = this;
  const tmp = callback2((arg0) => {
    closure_0 = arg0;
    c6 = 0;
    c7 = 0;
    return (function*(arg0) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_5 = tmp5;
              closure_4 = tmp2;
              closure_0 = undefined;
              const tmp34 = closure_1_29(closure_0);
              closure_0 = tmp34;
              closure_1 = tmp36;
              if (closure_1_37.indices[tmp34] == null) {
                closure_1 = closure_1_25;
              }
              if (closure_1_42(closure_1)) {
                c6 = 1;
                c7 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = closure_1_33(tmp32);
                return obj1;
              } else if (tmp23.fetchState.fetching) {
                c6 = 2;
                c7 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = tmp23.fetchState.promise;
                return obj2;
              } else {
                c7 = 3;
                const obj3 = { value: null, done: true };
                obj3[0] = tmp23;
                return obj3;
              }
              tmp32 = closure_0;
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj4 = { value: null, done: true };
              obj4[0] = arg1;
              return obj4;
            } else {
              closure_3 = tmp18;
              if (closure_37.indices[closure_0] == null) {
                closure_3 = closure_25;
              }
              c7 = 3;
              const obj5 = { value: null, done: true };
              obj5[0] = closure_3;
              return obj5;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = arg1;
            return obj6;
          } else {
            closure_2 = tmp10;
            if (closure_37.indices[closure_0] == null) {
              closure_2 = closure_25;
            }
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = closure_2;
            return obj;
          }
        } catch (tmp26) {
          c7 = tmp;
          throw tmp26;
        }
      }
    })();
  });
  closure_32 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function updateIndexAndFetchApplicationCommandIndex(target) {
  const self = this;
  const apply = _updateIndexAndFetchApplicationCommandIndex.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _updateIndexAndFetchApplicationCommandIndex() {
  const self = this;
  const tmp = callback2((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c1 = 0;
    return (function*(arg0) {
      if (c1 === 2) {
        c1 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c1 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const _AbortController = AbortController;
              const abortController = new AbortController();
              const future = new callback(closure_1_3[14]).Future();
              obj1 = { fetchState: null };
              const obj2 = { fetching: true, abort: null, promise: null };
              obj2[1] = abortController;
              obj2[2] = future.promise;
              obj1[0] = obj2;
              closure_1_30(callback, obj1, true);
              const applicationCommandIndex = callback(closure_1_3[15]).fetchApplicationCommandIndex(callback, abortController);
              const obj7 = callback(closure_1_3[15]);
              c2 = 1;
              c1 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = applicationCommandIndex.then(future.resolve).catch(future.reject);
              return obj3;
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c1 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
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
    })();
  });
  closure_34 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function handleFetchSuccess(arg0, flag) {
  if (flag === undefined) {
    flag = false;
  }
  let id;
  ({ target, index } = arg0);
  const currentUser = authStore2.getCurrentUser();
  id = undefined;
  if (currentUser != null) {
    id = currentUser.id;
  }
  if (null == id) {
    if (!c27) {
      arr = arr.push(arg0);
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
        let tmp7 = nextResult;
        if (null != tmp6.bot_id) {
          let tmp10 = nextResult;
          obj[tmp6.bot_id] = tmp6.id;
          let tmp11 = authStore2;
          let user = authStore2.getUser(tmp6.bot_id);
          if (null != user) {
            let tmp16 = nextResult;
            let tmp17 = user;
            tmp6.bot = tmp13;
          } else {
            let tmp14 = nextResult;
            let addResult = set.add(tmp6.bot_id);
          }
          obj = {};
          let tmp18 = id;
          let tmp19 = id;
          let tmp20 = dependencyMap;
          let tmp21 = dependencyMap;
          obj1 = id(7275);
          let tmp22 = toApplication;
          let tmp23 = nextResult;
          let tmp24 = obj;
          let merged = Object.assign(obj1.getApplicationCommandSection(toApplication(tmp6), false));
          let keyPermissionsResult;
          if (null != tmp6.permissions) {
            let tmp27 = tmp18;
            let tmp28 = tmp20;
            let tmp19Result = tmp19(7276);
            let tmp29 = toServerPermissions;
            let tmp30 = nextResult;
            keyPermissionsResult = tmp19Result.keyPermissions(toServerPermissions(tmp6.permissions, id));
          }
          obj1 = { descriptor: null, commands: null };
          obj.permissions = keyPermissionsResult;
          let tmp31 = nextResult;
          obj.botId = tmp6.bot_id;
          obj1[0] = obj;
          obj1[1] = {};
          obj[tmp6.id] = obj1;
          continue;
        }
      }
      let tmp8 = nextResult;
      if (null != tmp6.bot) {
        let tmp9 = nextResult;
        obj[tmp6.bot.id] = tmp6.id;
      }
    }
    if (tmp32) {
      const items = [];
      HermesBuiltin.arraySpread(set, 0);
      const membersById = showTooManyUserGuildsAlertDefault.requestMembersById(target.guildId, items);
      const obj5 = showTooManyUserGuildsAlertDefault;
    }
    const application_commands = index.application_commands;
    const applicationCommands = id(7275).buildApplicationCommands(application_commands.map((description_default) => {
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
        mapped = options.map(closure_1_44);
      }
      if (mapped == null) {
        mapped = [];
      }
      obj.options = mapped;
      let tmp4;
      if (null != description_default.permissions) {
        tmp4 = closure_1_46(description_default.permissions, id);
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
        let tmp54 = tmp50;
        let tmp55 = nextResult1;
        tmp51.commands[tmp49.id] = tmp49;
      } else {
        let tmp52 = logger;
        let errorResult = logger.error("Command has no matching application");
      }
      continue;
    }
    let version = index.version;
    if (version == null) {
      version = SymbolResult1;
    }
    const obj2 = { serverVersion: null, result: null, fetchState: null };
    obj2[0] = version;
    const obj3 = { sections: null, sectionIdsByBotId: null, version: null };
    obj3[0] = obj;
    obj3[1] = obj;
    obj3[2] = version;
    obj2[1] = obj3;
    obj2[2] = { fetching: false };
    updateIndex(target, obj2, flag);
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
  require = result;
  if (null == result) {
    return false;
  } else {
    c1 = false;
    const item = members.forEach((user) => {
      user = user.user;
      if (user.bot) {
        if (null != closure_0.sectionIdsByBotId[user.id]) {
          callback(closure_1_3[19])(null != closure_0.sections[tmp2], "Bot has no matching index section");
          callback(closure_1_3[19])(null != closure_0.sections[tmp2].descriptor.application, "Bot's index section has no application info");
          let obj = result(closure_1_3[16]);
          obj = {};
          const merged = Object.assign(tmp4.descriptor.application);
          obj.bot = user;
          const applicationCommandSection = obj.getApplicationCommandSection(obj, false, tmp);
          obj = {};
          const merged1 = Object.assign(tmp4.descriptor);
          const merged2 = Object.assign(applicationCommandSection);
          closure_0.sections[tmp2].descriptor = obj;
          callback = true;
        }
      }
    });
    return c1;
  }
}
function handleStaleUserIndex() {
  updateIndex({ type: "user" }, { serverVersion: closure_21 });
}
function useQueryState(type, commandTypes, allowFetch) {
  applicationId = type;
  allowFetch3 = commandTypes;
  let first2 = allowFetch;
  let channel;
  if ("channel" === type.type) {
    channel = type.channel;
  }
  const permissionContext = applicationId(8159).usePermissionContext(channel, commandTypes.commandTypes);
  dependencyMap = permissionContext;
  let stateFromStores2 = tmp3;
  allowFetch = allowFetch.allowFetch;
  applicationId = type;
  allowFetch3 = tmp3;
  first2 = allowFetch;
  dependencyMap = undefined;
  stateFromStores2 = undefined;
  let stateFromStoresObject;
  const tmp4 = stateFromStores2(stateFromStoresObject1.useState(true), 2);
  const first = tmp4[0];
  dependencyMap = first;
  stateFromStores2 = tmp4[1];
  let obj = applicationId(8159);
  const items = [applicationCommandIndexStore];
  stateFromStoresObject = applicationId(586).useStateFromStoresObject(items, () => {
    if ("channel" === applicationId.type) {
      let contextState = closure_1_37.getContextState(tmp);
    } else {
      contextState = closure_1_37.getUserState();
    }
    return contextState;
  });
  const items1 = [stateFromStoresObject, allowFetch, type, false !== commandTypes.applicationCommands, first];
  const effect = stateFromStoresObject1.useEffect(() => {
    if (dependencyMap) {
      let guild_id = applicationId;
      if ("contextless" !== applicationId.type) {
        if (first2) {
          let tmp13 = allowFetch3;
          if (allowFetch3) {
            const channel = guild_id.channel;
            guild_id = undefined;
            if (channel != null) {
              guild_id = channel.guild_id;
            }
            let tmp16 = null != guild_id;
            if (!tmp16) {
              let type;
              if (channel != null) {
                type = channel.type;
              }
              let tmp19 = type === closure_1_18.DM;
              if (tmp19) {
                const user = closure_1_13.getUser(channel.getRecipientId());
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
            obj1 = allowFetch3(695);
            let obj = { miss: null, size: null };
            obj[0] = null == stateFromStoresObject.result;
            const _Object = Object;
            obj[1] = Object.keys(closure_1_37.indices).length;
            obj1.track(closure_1_17.APPLICATION_COMMAND_CACHE_FETCH, obj);
            const result2 = stateFromStoresObject.result;
            let version;
            if (result2 != null) {
              version = result2.version;
            }
            let fetching2 = !tmp33;
            if (version !== stateFromStoresObject.serverVersion) {
              fetching2 = tmp27.fetchState.fetching;
            }
            let tmp34 = !fetching2;
            if (!fetching2) {
              let tmp35 = null == tmp27.fetchState.retryAfter;
              if (!tmp35) {
                const _Date2 = Date;
                tmp35 = Date.now() >= tmp27.fetchState.retryAfter;
              }
              tmp34 = tmp35;
            }
            if (tmp34) {
              if (null == guild_id.channel.guild_id) {
                obj = { type: "channel", channelId: null };
                obj[1] = guild_id.channel.id;
                const applicationCommandIndex = applicationId(8158).requestApplicationCommandIndex(obj);
                const obj4 = applicationId(8158);
              }
            }
            obj1 = { type: "guild", guildId: null };
            guild_id = guild_id.channel.guild_id;
            obj1[1] = guild_id;
            const applicationCommandIndex1 = applicationId(8158).requestApplicationCommandIndex(obj1);
            const obj6 = applicationId(8158);
          }
        }
        stateFromStores2(false);
      } else {
        let tmp8 = first2;
        if (first2) {
          const result = stateFromStoresObject.result;
          let version1;
          if (result != null) {
            version1 = result.version;
          }
          let fetching = !tmp4;
          if (version1 !== stateFromStoresObject.serverVersion) {
            fetching = tmp.fetchState.fetching;
          }
          let tmp5 = !fetching;
          if (!fetching) {
            let tmp6 = null == tmp.fetchState.retryAfter;
            if (!tmp6) {
              const _Date = Date;
              tmp6 = Date.now() >= tmp.fetchState.retryAfter;
            }
            tmp5 = tmp6;
          }
          tmp8 = tmp5;
        }
        if (tmp8) {
          obj = applicationId(8158);
          const applicationCommandIndex2 = obj.requestApplicationCommandIndex({ type: "user" });
        }
      }
    }
  }, items1);
  const allowFetch2 = allowFetch.allowFetch;
  applicationId = tmp3;
  allowFetch3 = allowFetch2;
  first2 = undefined;
  dependencyMap = undefined;
  stateFromStores2 = undefined;
  let tmp8 = stateFromStores2(stateFromStoresObject1.useState(true), 2);
  const first1 = tmp8[0];
  first2 = first1;
  dependencyMap = tmp8[1];
  const obj2 = applicationId(586);
  const items2 = [applicationCommandIndexStore];
  stateFromStoresObject1 = applicationId(586).useStateFromStoresObject(items2, () => authStore.getUserState());
  stateFromStores2 = stateFromStoresObject1;
  const items3 = [stateFromStoresObject1, allowFetch2, false !== commandTypes.applicationCommands, first1];
  const effect1 = stateFromStoresObject1.useEffect(() => {
    if (first2) {
      let tmp = allowFetch3;
      if (allowFetch3) {
        const result = stateFromStores2.result;
        let version;
        if (result != null) {
          version = result.version;
        }
        let fetching = !tmp5;
        if (version !== stateFromStores2.serverVersion) {
          fetching = tmp2.fetchState.fetching;
        }
        let tmp6 = !fetching;
        if (!fetching) {
          let tmp7 = null == tmp2.fetchState.retryAfter;
          if (!tmp7) {
            const _Date = Date;
            tmp7 = Date.now() >= tmp2.fetchState.retryAfter;
          }
          tmp6 = tmp7;
        }
        tmp = tmp6;
      }
      if (tmp) {
        tmp = applicationId;
      }
      if (tmp) {
        const applicationCommandIndex = applicationId(8158).requestApplicationCommandIndex({ type: "user" });
        const obj = applicationId(8158);
      }
      dependencyMap(false);
    }
  }, items3);
  const obj3 = applicationId(586);
  const items4 = [applicationCommandIndexStore];
  const stateFromStores = applicationId(586).useStateFromStores(items4, () => authStore.getApplicationStates());
  let obj4 = applicationId(586);
  const items5 = [applicationCommandIndexStore];
  ({ applicationId, allowFetch: allowFetch3 } = allowFetch);
  first2 = undefined;
  dependencyMap = undefined;
  stateFromStores2 = undefined;
  const stateFromStores1 = applicationId(586).useStateFromStores(items5, () => authStore.applicationIndicesVersion);
  const tmp14 = stateFromStores2(stateFromStoresObject1.useState(true), 2);
  first2 = tmp14[0];
  dependencyMap = tmp14[1];
  const obj5 = applicationId(586);
  const items6 = [applicationCommandIndexStore];
  stateFromStores2 = applicationId(586).useStateFromStores(items6, () => closure_1_37.getApplicationState(applicationId));
  const items7 = [allowFetch3, applicationId, stateFromStores2, first2];
  const effect2 = stateFromStoresObject1.useEffect(() => {
    if (first2) {
      let tmp = allowFetch3;
      if (allowFetch3) {
        const result = stateFromStores2.result;
        let version;
        if (result != null) {
          version = result.version;
        }
        let fetching = !tmp5;
        if (version !== stateFromStores2.serverVersion) {
          fetching = tmp2.fetchState.fetching;
        }
        let tmp6 = !fetching;
        if (!fetching) {
          let tmp7 = null == tmp2.fetchState.retryAfter;
          if (!tmp7) {
            const _Date = Date;
            tmp7 = Date.now() >= tmp2.fetchState.retryAfter;
          }
          tmp6 = tmp7;
        }
        tmp = tmp6;
      }
      if (tmp) {
        tmp = null != applicationId;
      }
      if (tmp) {
        let obj = applicationId(8158);
        obj = { type: "application", applicationId: null };
        obj[1] = applicationId;
        const applicationCommandIndex = obj.requestApplicationCommandIndex(obj);
      }
      dependencyMap(false);
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
    const obj = { permissionContext: closure_3, text: allowFetch3.text, allowApplicationCommands: stateFromStores2, builtIns: allowFetch3.builtIns, scoreMethod: first2.scoreMethod, allowEmptySections: first2.allowEmptySections, contextState: stateFromStoresObject, userState: stateFromStoresObject1, launcherContext: applicationId, applicationStates: null, sortOptions: null, singleApplicationId: null, installOnDemand: null };
    if (first2.allowApplicationState) {
      let map = stateFromStores;
    } else {
      const _Map = Map;
      map = new Map();
    }
    obj[9] = map;
    ({ sortOptions: obj[10], applicationId: obj[11], installOnDemand: obj[12] } = first2);
    return closure_1_40(obj);
  }, items8);
}
function queryIndex(allowApplicationCommands) {
  ({ permissionContext, contextState, userState, applicationStates, text, builtIns } = allowApplicationCommands);
  if (builtIns === undefined) {
    let arr = NONE;
    builtIns = NONE(8162).BuiltInCommandFilter.ALLOW;
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
    NONE = NONE(8162).ScoreMethod.NONE;
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
  if (builtIns !== NONE(8162).BuiltInCommandFilter.DENY) {
    const tmp12 = builtIns === NONE(8162).BuiltInCommandFilter.ONLY_TEXT;
    let builtInCommands = NONE(8164).getBuiltInCommands(permissionContext.commandTypes, true, tmp12);
    const tmp9Result = NONE(8164);
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
        arr = key10082;
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
      arr = key10090;
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
    let tmp22 = callback;
    let tmp23 = callback(tmp21, 2);
    [tmp24, tmp25] = tmp23;
    if (null == singleApplicationId) {
      let tmp27 = tmp25;
      let result3 = tmp25.result;
      let sections2;
      if (result3 != null) {
        sections2 = result3.sections;
      }
      let tmp29 = sections2;
      if (null != sections2) {
        let _Object = Object;
        let tmp30 = sections2;
        let keys = Object.keys(tmp29);
        let tmp32 = keys;
        let tmp33 = keys;
        for (const item10124 of keys) {
          let addResult2 = set.add(item10124);
          let tmp35 = sections2;
          result = map.set(item10124, tmp29[item10124]);
          continue;
        }
      }
    } else {
      let tmp26 = tmp24;
    }
    continue;
  }
  arr = Array.from(set);
  const iter = arr[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp39 = sections[nextResult];
    let tmp40 = tmp39;
    let tmp41 = sections1[nextResult];
    let tmp42 = tmp41;
    let value = map.get(nextResult);
    let tmp44 = null != tmp39;
    let tmp45 = null != tmp41;
    if (null != tmp39) {
      let tmp46 = tmp41;
      if (null != tmp42) {
        let tmp52 = tmp41;
        let descriptor = tmp42.descriptor;
        let items1 = [];
        for (const key10170 in tmp42.commands) {
          arr = key10170;
          arr = tmp41;
          arr = items1;
          arr = items1.push(tmp42.commands[key10170]);
          continue;
        }
        let tmp53 = tmp39;
        for (const key10174 in tmp40.commands) {
          arr = tmp41;
          if (key10174 in tmp42.commands) {
            continue;
          } else {
            let tmp54 = tmp39;
            let tmp55 = arr;
            let tmp56 = items1;
            let arr1 = items1.push(tmp40.commands[arr]);
            continue;
          }
          continue;
        }
        let tmp58 = sortOptions;
        let tmp59 = dependencyMap;
        let tmp60 = dependencyMap;
        let tmp61 = descriptor;
        let tmp62 = sortOptions(38)(null != descriptor, "Failed to select application descriptor");
        let tmp63 = items1;
        let tmp64 = sortOptions(38)(null != items1, "Failed to select list of application commands");
        let tmp65 = queryIndexSection;
        let tmp66 = tmp44;
        let tmp67 = tmp45;
        let num = 0;
        let tmp68 = descriptor;
        let tmp69 = items1;
        let tmp70 = obj;
        let tmp71 = queryIndexSection(descriptor, items1, tmp44, tmp45, obj);
        if (null != tmp71) {
          let tmp73 = tmp71;
          let arr2 = items.push(tmp72);
        }
        continue;
      }
    }
    let tmp47 = tmp39;
    if (null != tmp40) {
      let tmp51 = tmp39;
      descriptor = tmp40.descriptor;
      let _Object3 = Object;
      items1 = Object.values(tmp40.commands);
    } else {
      let tmp48 = tmp41;
      if (null != tmp42) {
        let tmp50 = tmp41;
        descriptor = tmp42.descriptor;
        let _Object2 = Object;
        items1 = Object.values(tmp42.commands);
      } else {
        let tmp49 = value;
        if (null != value) {
          arr = value;
          descriptor = value.descriptor;
          let _Object4 = Object;
          items1 = Object.values(value.commands);
        }
      }
    }
  }
  if (sortOptions.applications.useFrecency) {
    const FrecencyUserSettingsActionCreators = NONE(1369).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }
  const sorted = items.sort((section, section2) => {
    if (sortOptions.applications.useScore) {
      if (NONE === NONE(closure_1_3[24]).ScoreMethod.APPLICATION_ONLY) {
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
      const scoreWithoutLoadingLatest = closure_1_7.getScoreWithoutLoadingLatest(section.section.id);
      const scoreWithoutLoadingLatest1 = closure_1_7.getScoreWithoutLoadingLatest(section2.section.id);
      if (scoreWithoutLoadingLatest !== scoreWithoutLoadingLatest1) {
        return scoreWithoutLoadingLatest1 - scoreWithoutLoadingLatest;
      }
    }
    const collator = closure_1_37.collator;
    return collator.compare(section.section.name, section2.section.name);
  });
  if (builtInCommands.length > 0) {
    const tmp87 = queryIndexSection(NONE(8164).BUILT_IN_SECTIONS[constants.BUILT_IN], builtInCommands, true, true, obj);
    if (null != tmp87) {
      items.push(tmp87);
    }
  }
  const flatMapResult = items.flatMap((data) => {
    closure_0 = data;
    data = data.data;
    return data.map((arg0) => {
      obj = {};
      const merged = Object.assign(arg0);
      obj.section = data.section;
      return obj;
    });
  });
  if (NONE === NONE(8162).ScoreMethod.COMMAND_ONLY) {
    const context = permissionContext.context;
    let guild_id;
    if (permissionContext != null) {
      const context2 = permissionContext.context;
      if (context2 != null) {
        guild_id = context2.guild_id;
      }
    }
    guild = guild.getGuild(guild_id);
    if (sortOptions.commands.useFrecency) {
      const FrecencyUserSettingsActionCreators2 = tmp89(1369).FrecencyUserSettingsActionCreators;
      const ifNecessary1 = FrecencyUserSettingsActionCreators2.loadIfNecessary();
    }
    let tmp97;
    if (null != context) {
      obj = { channel: null, guild: null };
      obj[0] = context;
      obj[1] = guild;
      tmp97 = obj;
    }
    obj = tmp97;
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
        const scoreWithoutLoadingLatest = closure_1_14.getScoreWithoutLoadingLatest(obj, score);
        const scoreWithoutLoadingLatest1 = closure_1_14.getScoreWithoutLoadingLatest(obj, score2);
        if (scoreWithoutLoadingLatest !== scoreWithoutLoadingLatest1) {
          return scoreWithoutLoadingLatest1 - scoreWithoutLoadingLatest;
        }
      }
      const collator = closure_1_37.collator;
      return collator.compare(score.displayName, score2.displayName);
    });
  }
  obj1 = { commands: flatMapResult, descriptors: items.map((section) => section.section), sectionedCommands: items, loading: null };
  let fetching;
  if (contextState != null) {
    fetching = contextState.fetchState.fetching;
  }
  arr = true === fetching;
  if (!arr) {
    arr = undefined;
    if (userState != null) {
      arr = userState.fetchState.fetching;
    }
    arr = true === arr;
  }
  if (!arr) {
    arr = null != singleApplicationId;
    if (arr) {
      arr = applicationStates.get(singleApplicationId);
      arr = undefined;
      if (arr != null) {
        arr = arr.fetchState.fetching;
      }
      arr = true === arr;
    }
  }
  obj1[3] = arr;
  return obj1;
}
function queryIndexSection(descriptor, builtInCommands, arg2, arg3, arg4) {
  ({ query, splitQuery, scoreMethod, permissionContext } = arg4);
  ({ context, userId, roleIds, isImpersonating } = permissionContext);
  let guild_id;
  ({ allowEmptySections, installOnDemand } = arg4);
  if (context != null) {
    guild_id = context.guild_id;
  }
  let allowedForUser = null;
  if (null != guild_id) {
    let obj = computeAllowedForUserAll;
    allowedForUser = obj.computeAllowedForUser(descriptor.permissions, context.guild_id, userId, roleIds, isImpersonating);
  }
  let guild_id1;
  if (context != null) {
    guild_id1 = context.guild_id;
  }
  let allowedForChannel = null;
  if (null != guild_id1) {
    allowedForChannel = computeAllowedForUserAll.computeAllowedForChannel(descriptor.permissions, context, context.guild_id);
    const obj2 = computeAllowedForUserAll;
  }
  const items = [];
  const iter = builtInCommands[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp17 = importAll;
    let tmp16 = nextResult;
    let tmp18 = dependencyMap;
    let tmp19 = dependencyMap;
    let obj3 = computeAllowedForUserAll;
    obj = { applicationAllowedForUser: null, applicationAllowedForChannel: null, commandBotId: null, isGuildInstalled: null, isUserInstalled: null };
    obj[0] = allowedForUser;
    obj[1] = allowedForChannel;
    obj[2] = descriptor.botId;
    obj[3] = arg2;
    let tmp20 = arg3;
    if (!arg3) {
      tmp20 = installOnDemand;
    }
    obj[4] = tmp20;
    let tmp22 = require;
    let tmp23 = require;
    let tmp24 = tmp18;
    let hasAccessResult = obj3.hasAccess(nextResult, permissionContext, obj);
    if (hasAccessResult === computeAllowedForUser.HasAccessResult.ALLOWED) {
      let tmp25 = nextResult;
      let arr = items.push(tmp16);
    }
    continue;
  }
  let arr2 = items;
  if (scoreMethod !== ScoreMethod.ScoreMethod.NONE) {
    arr2 = items;
    if (null != query) {
      arr2 = items;
      if (null != splitQuery) {
        arr2 = (function scoreCommands(query, splitQuery, items, name, scoreMethod) {
          if (scoreMethod === callback(table[24]).ScoreMethod.APPLICATION_ONLY) {
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
                  if (callback2(tmp4[31])(query, toLocaleLowerCaseResult)) {
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
    obj = { section: null, data: null };
    obj[0] = descriptor;
    obj[1] = arr2;
    let tmp36 = obj;
    tmp39 = scoreMethod !== ScoreMethod.ScoreMethod.NONE && scoreMethod !== tmp27(8162).ScoreMethod.APPLICATION_ONLY;
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
    let obj = { type: null, id: null, permission: null };
    obj[0] = ApplicationCommandSectionType.ApplicationCommandPermissionType.USER;
    obj[1] = id;
    obj[2] = permissions.user;
    items.push(obj);
  }
  if (null != permissions.channels) {
    const _Object = Object;
    const entries = Object.entries(permissions.channels);
    const tmp28 = entries[Symbol.iterator]();
    while (tmp28 !== undefined) {
      let tmp8 = callback;
      let tmp9 = callback(tmp6, 2);
      obj = { type: null, id: null, permission: null };
      let tmp12 = require;
      let tmp13 = dependencyMap;
      [tmp10, tmp11] = tmp9;
      obj[0] = ApplicationCommandSectionType.ApplicationCommandPermissionType.CHANNEL;
      obj[1] = tmp10;
      obj[2] = tmp11;
      let arr = items.push(obj);
      continue;
    }
  }
  if (null != permissions.roles) {
    const _Object2 = Object;
    const entries1 = Object.entries(permissions.roles);
    const tmp32 = entries1[Symbol.iterator]();
    while (tmp32 !== undefined) {
      let tmp18 = callback;
      let tmp19 = callback(tmp16, 2);
      obj = { type: null, id: null, permission: null };
      let tmp22 = require;
      let tmp23 = dependencyMap;
      [tmp20, tmp21] = tmp19;
      obj[0] = ApplicationCommandSectionType.ApplicationCommandPermissionType.ROLE;
      obj[1] = tmp20;
      obj[2] = tmp21;
      let arr1 = items.push(obj);
      continue;
    }
  }
  return items;
}
function scoreCommand(untranslatedName) {
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
              let tmp10 = name;
              let _HermesInternal = HermesInternal;
              let combined = "" + str + " " + obj5;
              if (!combined.startsWith(arg1)) {
                if (null == str2) {
                  let tmp12 = serverLocalizedName;
                  if (null != serverLocalizedName) {
                    let tmp13 = serverLocalizedName;
                    if (!serverLocalizedName.startsWith(arg1)) {
                      let tmp14 = serverLocalizedName;
                      let _HermesInternal3 = HermesInternal;
                      let combined1 = "" + str + " " + serverLocalizedName;
                      if (!combined1.startsWith(arg1)) {
                        if (null != str2) {
                          let tmp15 = serverLocalizedName;
                          let _HermesInternal4 = HermesInternal;
                          let combined2 = "" + str2 + " " + serverLocalizedName;
                        }
                      }
                    }
                    let tmp20 = constants4;
                    let tmp21 = iter;
                    iter.return();
                    return constants4.STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME;
                  }
                  let tmp16 = name;
                  let hasItem1 = obj5.includes(arg1);
                  if (!hasItem1) {
                    let tmp18 = serverLocalizedName;
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
                  let tmp11 = name;
                  let _HermesInternal2 = HermesInternal;
                  let combined3 = "" + str2 + " " + obj5;
                }
              }
            }
            let tmp22 = constants4;
            let tmp23 = iter;
            iter.return();
            return constants4.STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME;
          }
          if (flag) {
            return constants4.OPTION_NAME_CONTAINS;
          } else {
            const untranslatedDescription = untranslatedName.untranslatedDescription;
            const toLocaleLowerCaseResult = untranslatedDescription.toLocaleLowerCase();
            const displayDescription = untranslatedName.displayDescription;
            const toLocaleLowerCaseResult1 = displayDescription.toLocaleLowerCase();
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
                      let tmp32 = importDefault;
                      let tmp33 = importDefault;
                      let tmp34 = dependencyMap;
                      let tmp35 = dependencyMap;
                      if (!fuzzysearchDefault(arg1, name2)) {
                        let tmp36 = serverLocalizedName2;
                        if (null == serverLocalizedName2) {
                          continue;
                        } else {
                          let tmp37 = tmp32;
                          let tmp38 = tmp34;
                          let tmp39 = serverLocalizedName2;
                        }
                      }
                      let tmp40 = constants4;
                      let tmp41 = obj12;
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
({ BuiltInSectionId: closure_15, DISCOVERY_COMMANDS_FRECENCY_LIMIT: closure_16 } = TRUE_OPTION_NAME);
({ AnalyticEvents: closure_17, ChannelTypes: closure_18 } = ME);
let closure_19 = new timestampDefault("ApplicationCommandIndexStore");
let closure_20 = Symbol("currentUser");
const SymbolResult = Symbol("stale");
const SymbolResult1 = Symbol("current");
let closure_23 = Object.freeze({ descriptors: [], commands: [], sectionedCommands: [], loading: true });
let closure_24 = Object.freeze({ serverVersion: SymbolResult1, fetchState: { fetching: false }, result: { sections: {}, sectionIdsByBotId: {}, version: SymbolResult1 } });
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
  this.waitFor(closure_8);
  this.waitFor(closure_14, closure_7, closure_9, closure_10, closure_11, closure_12, closure_13);
  const items = [closure_8];
  this.syncWith(items, () => {
    locale = locale.locale;
    if (locale !== oldLocale.oldLocale) {
      callback();
      const _Intl = Intl;
      const collator = new Intl.Collator(locale, { sensitivity: "accent", numeric: true });
      tmp.collator = collator;
      tmp.oldLocale = locale;
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
        const user = authStore2.getUser(channel.getRecipientId());
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
prototype["query"] = function query(type, commandTypes, applicationId) {
  let obj = authStore2;
  if (null == authStore2.getCurrentUser()) {
    return closure_23;
  } else {
    let channel;
    if ("channel" === type.type) {
      channel = type.channel;
    }
    const self = this;
    const contextState = this.getContextState(type);
    const userState = this.getUserState();
    const applicationState = this.getApplicationState(applicationId.applicationId);
    let applicationStates = this.getApplicationStates();
    obj1 = computePermissions;
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
          type = undefined;
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
          let tmp8Result = tmp8(8158);
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
          tmp8Result = tmp8(8158);
          obj = { type: "application", applicationId: null };
          obj[1] = applicationId.applicationId;
          const applicationCommandIndex1 = tmp8Result.requestApplicationCommandIndex(obj);
          flag5 = true;
        }
        flag3 = flag5;
      } else {
        let obj2 = expandEventPropertiesDefault;
        obj = { miss: null, size: null };
        obj[0] = null == contextState.result;
        const _Object = Object;
        obj[1] = Object.keys(applicationCommandIndexStore.indices).length;
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
            obj1 = { type: "channel", channelId: null };
            obj1[1] = guild_id.id;
            const applicationCommandIndex2 = tmp8(8158).requestApplicationCommandIndex(obj1);
            flag6 = true;
            const tmp8Result1 = tmp8(8158);
          }
        }
        obj2 = { type: "guild", guildId: null };
        guild_id = guild_id.guild_id;
        obj2[1] = guild_id;
        const applicationCommandIndex3 = tmp8(8158).requestApplicationCommandIndex(obj2);
        flag6 = true;
        const tmp8Result2 = tmp8(8158);
      }
    }
    const obj3 = { permissionContext: null, text: null, allowApplicationCommands: null, builtIns: null, scoreMethod: null, allowEmptySections: null, contextState: null, userState: null, applicationStates: null, sortOptions: null, singleApplicationId: null, installOnDemand: null };
    obj3[0] = permissionContext;
    obj3[1] = commandTypes.text;
    obj3[2] = false !== commandTypes.applicationCommands;
    obj3[3] = commandTypes.builtIns;
    ({ scoreMethod: obj12[4], allowEmptySections: obj12[5] } = applicationId);
    obj3[6] = contextState;
    obj3[7] = userState;
    if (!applicationId.allowApplicationState) {
      const _Map = Map;
      applicationStates = new Map();
    }
    obj3[8] = applicationStates;
    ({ sortOptions: obj12[9], applicationId: obj12[10], installOnDemand: obj12[11] } = applicationId);
    const tmp46Result = queryIndex(obj3);
    tmp46Result.loading = tmp46Result.loading || flag3;
    return tmp46Result;
  }
};
prototype["queryInstallOnDemandApp"] = function queryInstallOnDemandApp(arg0, id) {
  let channel = authStore.getChannel(id);
  if (null != channel) {
    const self = this;
    if (null != channel) {
      let obj = { channel: null, type: "channel" };
      obj[0] = channel;
    } else {
      obj = { type: "contextless" };
    }
    channel = arg0;
    obj = { commandTypes: null };
    const items = [PermissionOverwriteType.ApplicationCommandType.CHAT];
    obj[0] = items;
    obj1 = { placeholderCount: 5, scoreMethod: null, applicationId: null, allowFetch: true };
    obj1[1] = ScoreMethod.ScoreMethod.COMMAND_ONLY;
    obj1[2] = arg0;
    const query = this.query(obj, obj, obj1);
  }
};
ApplicationCommandIndexStore.displayName = "ApplicationCommandIndexStore";
const applicationCommandIndexStore = new ApplicationCommandIndexStore(dispatcherDefault, {
  LOGOUT: handleReset,
  CONNECTION_OPEN: function handleConnectionOpen() {
    const values = Object.values(applicationCommandIndexStore.indices);
    for (const item10010 of values) {
      let tmp2 = closure_21;
      item10010.serverVersion = closure_21;
      continue;
    }
    (function flushCommandsFetchSuccessQueue() {
      for (const item10005 of closure_28) {
        let tmp = callback;
        let tmp2 = callback(item10005);
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
    obj[0] = obj;
    updateIndex(target.target, obj);
  },
  APPLICATION_COMMAND_EXECUTE_BAD_VERSION: function handleStaleCommand(arg0) {
    ({ applicationId, channelId, guildId } = arg0);
    let obj = applicationCommandIndexStore;
    if (!applicationCommandIndexStore.hasContextStateApplication({ applicationId, channelId, guildId })) {
      if (obj.hasUserStateApplication(applicationId)) {
        obj = { serverVersion: null };
        obj[0] = closure_21;
        updateIndex({ type: "user" }, obj);
      }
      if (obj.hasApplicationState(applicationId)) {
        obj = { type: "application", applicationId: null };
        obj[1] = applicationId;
        obj1 = { serverVersion: null };
        obj1[0] = closure_21;
        updateIndex(obj, obj1);
      }
    } else {
      if (null != guildId) {
        const obj2 = { type: "guild", guildId: null };
        obj2[1] = guildId;
        let obj3 = obj2;
      } else {
        obj3 = { type: "channel", channelId: null };
        obj3[1] = channelId;
      }
      const obj4 = { serverVersion: null };
      guildId = closure_21;
      obj4[0] = closure_21;
      updateIndex(obj3, obj4);
      const tmp = updateIndex;
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
      version = closure_21;
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
        let tmp8 = key10016;
        let tmp9 = authStore;
        let dMFromUserId = authStore.getDMFromUserId(key10016);
        if (null == dMFromUserId) {
          continue;
        } else {
          let tmp5 = updateIndex;
          obj = { type: "channel", channelId: null };
          obj[1] = dMFromUserId;
          obj = { serverVersion: null };
          let tmp6 = closure_21;
          obj[0] = closure_21;
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
      let tmp2 = updateGuildBotMembers;
      let tmp3 = updateGuildBotMembers(nextResult.guildId, nextResult.members) || flag;
      flag = tmp3;
      continue;
    }
    return flag;
  }
});
let closure_38 = Object.freeze({ applications: { useFrecency: false, useScore: false }, commands: { useFrecency: true, useScore: true } });
let closure_47 = { COMMAND_NAME_STARTS_WITH: 0, [0]: "COMMAND_NAME_STARTS_WITH", STARTS_WITH_COMMAND_NAME: 1, [1]: "STARTS_WITH_COMMAND_NAME", COMMAND_NAME_CONTAINS: 2, [2]: "COMMAND_NAME_CONTAINS", STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME: 3, [3]: "STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME", OPTION_NAME_CONTAINS: 4, [4]: "OPTION_NAME_CONTAINS", SECTION_NAME_STARTS_WITH: 5, [5]: "SECTION_NAME_STARTS_WITH", SECTION_NAME_CONTAINS: 6, [6]: "SECTION_NAME_CONTAINS", COMMAND_DESCRIPTION_CONTAINS: 7, [7]: "COMMAND_DESCRIPTION_CONTAINS", SECTION_DESCRIPTION_CONTAINS: 8, [8]: "SECTION_DESCRIPTION_CONTAINS", COMMAND_NAME_FUZZY_MATCHES: 9, [9]: "COMMAND_NAME_FUZZY_MATCHES", OPTION_NAME_FUZZY_MATCHES: 10, [10]: "OPTION_NAME_FUZZY_MATCHES", SECTION_NAME_FUZZY_MATCHES: 11, [11]: "SECTION_NAME_FUZZY_MATCHES", COMMAND_DESCRIPTION_FUZZY_MATCHES: 12, [12]: "COMMAND_DESCRIPTION_FUZZY_MATCHES" };
let obj = {
  LOGOUT: handleReset,
  CONNECTION_OPEN: function handleConnectionOpen() {
    const values = Object.values(applicationCommandIndexStore.indices);
    for (const item10010 of values) {
      let tmp2 = closure_21;
      item10010.serverVersion = closure_21;
      continue;
    }
    (function flushCommandsFetchSuccessQueue() {
      for (const item10005 of closure_28) {
        let tmp = callback;
        let tmp2 = callback(item10005);
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
    obj[0] = obj;
    updateIndex(target.target, obj);
  },
  APPLICATION_COMMAND_EXECUTE_BAD_VERSION: function handleStaleCommand(arg0) {
    ({ applicationId, channelId, guildId } = arg0);
    let obj = applicationCommandIndexStore;
    if (!applicationCommandIndexStore.hasContextStateApplication({ applicationId, channelId, guildId })) {
      if (obj.hasUserStateApplication(applicationId)) {
        obj = { serverVersion: null };
        obj[0] = closure_21;
        updateIndex({ type: "user" }, obj);
      }
      if (obj.hasApplicationState(applicationId)) {
        obj = { type: "application", applicationId: null };
        obj[1] = applicationId;
        obj1 = { serverVersion: null };
        obj1[0] = closure_21;
        updateIndex(obj, obj1);
      }
    } else {
      if (null != guildId) {
        const obj2 = { type: "guild", guildId: null };
        obj2[1] = guildId;
        let obj3 = obj2;
      } else {
        obj3 = { type: "channel", channelId: null };
        obj3[1] = channelId;
      }
      const obj4 = { serverVersion: null };
      guildId = closure_21;
      obj4[0] = closure_21;
      updateIndex(obj3, obj4);
      const tmp = updateIndex;
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
      version = closure_21;
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
        let tmp8 = key10016;
        let tmp9 = authStore;
        let dMFromUserId = authStore.getDMFromUserId(key10016);
        if (null == dMFromUserId) {
          continue;
        } else {
          let tmp5 = updateIndex;
          obj = { type: "channel", channelId: null };
          obj[1] = dMFromUserId;
          obj = { serverVersion: null };
          let tmp6 = closure_21;
          obj[0] = closure_21;
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
      let tmp2 = updateGuildBotMembers;
      let tmp3 = updateGuildBotMembers(nextResult.guildId, nextResult.members) || flag;
      flag = tmp3;
      continue;
    }
    return flag;
  }
};
let tmp4 = new timestampDefault("ApplicationCommandIndexStore");
let result = require("set").fileFinishedImporting("modules/application_commands/ApplicationCommandIndexStore.tsx");

export default applicationCommandIndexStore;
export const getOrFetchApplicationCommandIndexForTarget = function getOrFetchApplicationCommandIndexForTarget() {
  const self = this;
  const apply = _getOrFetchApplicationCommandIndexForTarget.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const useContextIndexState = function useContextIndexState(arg0, arg1, arg2) {
  const _require = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  const tmp = callback(React.useState(true), 2);
  const first = tmp[0];
  callback = tmp[1];
  const items = [applicationCommandIndexStore];
  const stateFromStoresObject = _require(first[20]).useStateFromStoresObject(items, () => {
    if ("channel" === applicationId.type) {
      let contextState = closure_1_37.getContextState(tmp);
    } else {
      contextState = closure_1_37.getUserState();
    }
    return contextState;
  });
  const items1 = [stateFromStoresObject, arg2, arg0, arg1, first];
  const effect = React.useEffect(() => {
    if (dependencyMap) {
      let guild_id = applicationId;
      if ("contextless" !== applicationId.type) {
        if (first2) {
          let tmp13 = allowFetch3;
          if (allowFetch3) {
            const channel = guild_id.channel;
            guild_id = undefined;
            if (channel != null) {
              guild_id = channel.guild_id;
            }
            let tmp16 = null != guild_id;
            if (!tmp16) {
              let type;
              if (channel != null) {
                type = channel.type;
              }
              let tmp19 = type === closure_1_18.DM;
              if (tmp19) {
                const user = closure_1_13.getUser(channel.getRecipientId());
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
            obj1 = allowFetch3(695);
            let obj = { miss: null, size: null };
            obj[0] = null == stateFromStoresObject.result;
            const _Object = Object;
            obj[1] = Object.keys(closure_1_37.indices).length;
            obj1.track(closure_1_17.APPLICATION_COMMAND_CACHE_FETCH, obj);
            const result2 = stateFromStoresObject.result;
            let version;
            if (result2 != null) {
              version = result2.version;
            }
            let fetching2 = !tmp33;
            if (version !== stateFromStoresObject.serverVersion) {
              fetching2 = tmp27.fetchState.fetching;
            }
            let tmp34 = !fetching2;
            if (!fetching2) {
              let tmp35 = null == tmp27.fetchState.retryAfter;
              if (!tmp35) {
                const _Date2 = Date;
                tmp35 = Date.now() >= tmp27.fetchState.retryAfter;
              }
              tmp34 = tmp35;
            }
            if (tmp34) {
              if (null == guild_id.channel.guild_id) {
                obj = { type: "channel", channelId: null };
                obj[1] = guild_id.channel.id;
                const applicationCommandIndex = applicationId(8158).requestApplicationCommandIndex(obj);
                const obj4 = applicationId(8158);
              }
            }
            obj1 = { type: "guild", guildId: null };
            guild_id = guild_id.channel.guild_id;
            obj1[1] = guild_id;
            const applicationCommandIndex1 = applicationId(8158).requestApplicationCommandIndex(obj1);
            const obj6 = applicationId(8158);
          }
        }
        stateFromStores2(false);
      } else {
        let tmp8 = first2;
        if (first2) {
          const result = stateFromStoresObject.result;
          let version1;
          if (result != null) {
            version1 = result.version;
          }
          let fetching = !tmp4;
          if (version1 !== stateFromStoresObject.serverVersion) {
            fetching = tmp.fetchState.fetching;
          }
          let tmp5 = !fetching;
          if (!fetching) {
            let tmp6 = null == tmp.fetchState.retryAfter;
            if (!tmp6) {
              const _Date = Date;
              tmp6 = Date.now() >= tmp.fetchState.retryAfter;
            }
            tmp5 = tmp6;
          }
          tmp8 = tmp5;
        }
        if (tmp8) {
          obj = applicationId(8158);
          const applicationCommandIndex2 = obj.requestApplicationCommandIndex({ type: "user" });
        }
      }
    }
  }, items1);
  return stateFromStoresObject;
};
export const useGuildIndexState = function useGuildIndexState(arg0, arg1) {
  const _require = arg0;
  closure_1 = arg1;
  let tmp = stateFromStoresObject(React.useState(true), 2);
  const first = tmp[0];
  dependencyMap = tmp[1];
  const items = [applicationCommandIndexStore];
  stateFromStoresObject = _require(586).useStateFromStoresObject(items, () => {
    let tmp = closure_1_37.indices[closure_0];
    if (tmp == null) {
      tmp = closure_1_25;
    }
    return tmp;
  });
  const items1 = [stateFromStoresObject, arg1, arg0, first];
  const effect = React.useEffect(() => {
    let tmp = first;
    if (first) {
      tmp = null != callback;
    }
    if (tmp) {
      if (callback2) {
        let obj = callback2(695);
        obj = { miss: null, size: null };
        obj[0] = null == stateFromStoresObject.result;
        const _Object = Object;
        obj[1] = Object.keys(closure_1_37.indices).length;
        obj.track(closure_1_17.APPLICATION_COMMAND_CACHE_FETCH, obj);
        const result = stateFromStoresObject.result;
        let version;
        if (result != null) {
          version = result.version;
        }
        let fetching = !tmp14;
        if (version !== stateFromStoresObject.serverVersion) {
          fetching = tmp8.fetchState.fetching;
        }
        let tmp15 = !fetching;
        if (!fetching) {
          let tmp16 = null == tmp8.fetchState.retryAfter;
          if (!tmp16) {
            const _Date = Date;
            tmp16 = Date.now() >= tmp8.fetchState.retryAfter;
          }
          tmp15 = tmp16;
        }
        if (tmp15) {
          obj = { type: "guild", guildId: null };
          obj[1] = callback;
          const applicationCommandIndex = callback(8158).requestApplicationCommandIndex(obj);
          const obj3 = callback(8158);
        }
      }
      dependencyMap(false);
    }
  }, items1);
  return stateFromStoresObject;
};
export const useUserIndexState = function useUserIndexState(arg0, arg1) {
  const _require = arg0;
  closure_1 = arg1;
  const tmp = stateFromStoresObject(React.useState(true), 2);
  const first = tmp[0];
  dependencyMap = tmp[1];
  const items = [applicationCommandIndexStore];
  stateFromStoresObject = _require(586).useStateFromStoresObject(items, () => authStore.getUserState());
  const items1 = [stateFromStoresObject, arg1, arg0, first];
  const effect = React.useEffect(() => {
    if (first2) {
      let tmp = allowFetch3;
      if (allowFetch3) {
        const result = stateFromStores2.result;
        let version;
        if (result != null) {
          version = result.version;
        }
        let fetching = !tmp5;
        if (version !== stateFromStores2.serverVersion) {
          fetching = tmp2.fetchState.fetching;
        }
        let tmp6 = !fetching;
        if (!fetching) {
          let tmp7 = null == tmp2.fetchState.retryAfter;
          if (!tmp7) {
            const _Date = Date;
            tmp7 = Date.now() >= tmp2.fetchState.retryAfter;
          }
          tmp6 = tmp7;
        }
        tmp = tmp6;
      }
      if (tmp) {
        tmp = applicationId;
      }
      if (tmp) {
        const applicationCommandIndex = applicationId(8158).requestApplicationCommandIndex({ type: "user" });
        const obj = applicationId(8158);
      }
      dependencyMap(false);
    }
  }, items1);
  return stateFromStoresObject;
};
export const useDiscoveryState = function useDiscoveryState(type, arg1, commandTypes, includeFrecency) {
  const _require = type;
  closure_1 = arg1;
  closure_2 = includeFrecency;
  const tmp = useQueryState(type, commandTypes, includeFrecency);
  const descriptors = tmp.descriptors;
  const commands = tmp.commands;
  const sectionedCommands = tmp.sectionedCommands;
  const loading = tmp.loading;
  let items = [type, arg1];
  const memo = loading.useMemo(() => {
    let tmp2;
    if ("channel" === type.type) {
      const obj = { channel: null, guild: null };
      obj[0] = tmp.channel;
      obj[1] = closure_1;
      tmp2 = obj;
    }
    return tmp2;
  }, items);
  const topCommands = _require(descriptors[26]).useTopCommands(memo);
  let items1 = [loading, includeFrecency.includeFrecency, topCommands, commands, descriptors, sectionedCommands, memo];
  return loading.useMemo(() => {
    if (includeFrecency.includeFrecency) {
      if (0 !== topCommands.length) {
        const found = commands.filter((id) => closure_8.includes(id.id));
        const sorted = found.sort((arg0, arg1) => {
          const scoreWithoutLoadingLatest = closure_1_14.getScoreWithoutLoadingLatest(closure_7, arg0);
          return closure_1_14.getScoreWithoutLoadingLatest(closure_7, arg1) - scoreWithoutLoadingLatest;
        });
        const spliceResult = sorted.splice(0, closure_1_16);
        if (0 === spliceResult.length) {
          let obj = { descriptors: null, commands: null, sectionedCommands: null, loading: null };
          obj[0] = descriptors;
          obj[1] = tmp5;
          obj[2] = sectionedCommands;
          obj[3] = loading;
        } else {
          obj = { descriptors: null, commands: null, sectionedCommands: null, loading: null };
          const items = [type(descriptors[27]).BUILT_IN_SECTIONS[closure_1_15.FRECENCY]];
          HermesBuiltin.arraySpread(descriptors, 1);
          obj[0] = items;
          obj[1] = spliceResult.concat(tmp5);
          obj = { section: null, data: null };
          obj[0] = type(descriptors[27]).BUILT_IN_SECTIONS[closure_1_15.FRECENCY];
          obj[1] = spliceResult;
          const items1 = [obj];
          HermesBuiltin.arraySpread(sectionedCommands, 1);
          obj[2] = items1;
          obj[3] = loading;
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
    let obj = { descriptor: null, sectionCommands: null, isGuildInstalled: true, isUserInstalled: true };
    obj[0] = getOptionValue.BUILT_IN_SECTIONS[tmp2.BUILT_IN];
    const items = [PermissionOverwriteType.ApplicationCommandType.CHAT];
    obj[1] = getOptionValue.getBuiltInCommands(items, true, false);
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
          let tmp19 = key10035;
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
            let tmp21 = tmp11;
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
      obj = { descriptor: null, sectionCommands: null, isGuildInstalled: null, isUserInstalled: null };
      obj[0] = descriptor;
      obj[1] = values;
      obj[2] = null != tmp3;
      obj[3] = null != tmp4;
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
    const obj6 = applicationCommandIndexStore;
  }
};