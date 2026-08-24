// discord_app/modules/cache/CacheStore.tsx
import timestampDefault from "../debug/Logger.tsx";
import serializeDefault from "../tti_analytics/TTITracker.tsx";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import Storage4 from "../../../discord_common/js/packages/storage/Storage.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import closure_3 from "../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../_runtime/00005_asyncGeneratorStep.js";
import closure_5 from "../gateway/GatewayConnectionStore.tsx";
import closure_6 from "../../stores/AuthenticationStore.tsx";
import closure_7 from "../../stores/SelectedChannelStore.tsx";
import closure_8 from "../../stores/SelectedGuildStore.tsx";
import ME from "../../Constants.tsx";

require = arg1;
function handleClearCaches(type) {
  closure_13.log("Clearing cache store");
  closure_16 = Date.now();
  const Storage = Storage4.Storage;
  Storage.remove(closure_10);
  const Storage2 = Storage4.Storage;
  Storage2.remove(closure_11);
  const Storage3 = Storage4.Storage;
  Storage3.remove(closure_12);
  c15 = "no-cache";
  if (tmp5) {
    c14 = true;
  }
}
function _loadChannelHistory() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c5 = 0;
    c6 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c6 === 2) {
        c6 = 3;
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let obj5 = tmp5;
              closure_3 = tmp2;
              const callback = callback2;
              callback2 = dependencyMap;
              dependencyMap = undefined;
              closure_3 = undefined;
              obj5 = undefined;
              const _performance3 = performance;
              const nowResult = performance.now();
              dependencyMap = nowResult;
              if (null != callback) {
                if (null != tmp52) {
                  let obj4 = callback2(5073);
                  c5 = 1;
                  c6 = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = obj4.startupLoad(tmp50, tmp51, tmp52, closure_1_9);
                  return obj1;
                }
              }
              const _HermesInternal = HermesInternal;
              closure_1_13.verbose("skipped loaded messages (channel: " + dependencyMap + ", database: " + callback + ").");
              const _performance = performance;
              const items = [performance.now() - nowResult, ];
              const obj2 = { guildId: null, channelId: null, users: null, members: null, messages: null };
              obj2[2] = [];
              obj2[3] = [];
              obj2[4] = [];
              items[1] = obj2;
              c6 = 3;
              const obj3 = { value: null, done: true };
              obj3[0] = items;
              return obj3;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            closure_3 = arg1;
            const _HermesInternal2 = HermesInternal;
            closure_13.verbose("loaded " + closure_3.messages.length + " messages (guild: " + callback + ", channel: " + callback2 + ").");
            obj5 = { guildId: null, channelId: null, users: null, members: null, messages: null };
            obj5[0] = callback;
            obj5[1] = callback2;
            obj5[2] = closure_3.users;
            obj5[3] = closure_3.members;
            obj5[4] = closure_3.messages;
            const obj10 = callback2(5087);
            const result = obj10.recordChannelFetchedLocal(callback2, callback(5087).INITIAL_MESSAGE_FETCH_KEY, null, null, closure_9, closure_3.messages);
            const _performance2 = performance;
            const items1 = [performance.now() - dependencyMap, obj5];
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = items1;
            return obj;
          }
        } catch (tmp17) {
          c6 = tmp;
          throw tmp17;
        }
      }
    })();
  });
  closure_20 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _loadEarlyCache() {
  let self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c8 = 0;
    c9 = 0;
    return (function*(arg0, arg1, arg2) {
      if (dependencyMap2 === 2) {
        dependencyMap2 = 3;
        HermesBuiltin.throwTypeError();
      } else {
        let verboseResult = arg1;
        verboseResult = arg0;
        verboseResult = tmp4;
        if (tmp5 === 3) {
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
            dependencyMap2 = 2;
            if (0 === guildId) {
              if (arg0 === 1) {
                dependencyMap2 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                dependencyMap2 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_7 = tmp2;
                closure_6 = tmp3;
                verboseResult = name;
                verboseResult = callback;
                verboseResult = dependencyMap;
                let callback2;
                c4 = undefined;
                c5 = undefined;
                closure_6 = undefined;
                closure_7 = undefined;
                guildId = undefined;
                dependencyMap2 = undefined;
                closure_10 = undefined;
                closure_11 = undefined;
                let length;
                closure_13 = undefined;
                closure_14 = undefined;
                closure_15 = undefined;
                let length2;
                let length3;
                closure_18 = undefined;
                closure_19 = undefined;
                closure_20 = undefined;
                guildId = undefined;
                verboseResult = closure_1_13;
                verboseResult = closure_1_13.verbose("loading early cache");
                verboseResult = closure_1_5;
                const socket = closure_1_5.getSocket();
                callback2 = socket;
                verboseResult = socket.connect();
                verboseResult = guildId;
                verboseResult = guildId.getGuildId();
                callback2 = verboseResult;
                verboseResult = null;
                if (verboseResult == null) {
                  callback2 = null;
                }
                c4 = callback2;
                let channelId = closure_1_7.getChannelId();
                c4 = channelId;
                if (channelId == null) {
                  c4 = null;
                }
                c5 = c4;
                let allResult = globalThis;
                const _performance = performance;
                closure_6 = performance.now();
                const loadCachedMessages = callback(9).loadCachedMessages;
                const result = loadCachedMessages.measureAsyncWithoutNesting(() => (function loadChannelHistory(closure_0, c4, c5) {
                  const self = this;
                  const apply = closure_20.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })(closure_0, c4, c5));
                const fetchGuildCache = callback(9).fetchGuildCache;
                const fetchGuildCache2 = callback(9).fetchGuildCache;
                const measureAsyncResult = fetchGuildCache.measureAsync(() => (function loadInitialGuilds(closure_0, closure_2) {
                  const self = this;
                  const apply = closure_23.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })(closure_0, closure_2));
                if (null != verboseResult) {
                  let timeAsyncResult = callback(10).timeAsync("\u{1F4BE}", "cache: private_channels", () => callback2(1976).getAsync(closure_0, null));
                  const obj8 = callback(10);
                } else {
                  timeAsyncResult = Promise.resolve([]);
                }
                if (null == verboseResult) {
                  let resolved = Promise.resolve({});
                } else {
                  resolved = callback(10).timeAsync("\u{1F4BE}", "cache: user_settings", () => callback2(5088).getAll(closure_0));
                  const obj9 = callback(10);
                }
                if (null == verboseResult) {
                  let resolved1 = Promise.resolve([]);
                } else {
                  resolved1 = callback(10).timeAsync("\u{1F4BE}", "cache: read_states", () => callback2(5089).getAll(closure_0));
                  const obj10 = callback(10);
                }
                if (null == verboseResult) {
                  let resolveResult = allResult.Promise.resolve([]);
                  const _Promise5 = allResult.Promise;
                } else {
                  resolveResult = callback(10).timeAsync("\u{1F4BE}", "cache: user_guild_settings", () => callback2(5090).getAll(closure_0));
                  const obj11 = callback(10);
                }
                callback(5091)("AllCacheStores", () => callback(5092));
                callback(5091)("MobileAppDatabaseManager", () => callback(5395));
                let items = [
                  result,
                  measureAsyncResult,
                  fetchGuildCache2.measureAsync(() => (function loadInitialGuildChannels(closure_0, closure_2) {
                              const self = this;
                              const apply = closure_24.apply;
                              if (typeof apply === "unknown") {
                                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                              } else {
                                applyArgumentsResult = apply(self, arguments);
                              }
                              return applyArgumentsResult;
                            })(closure_0, closure_2)),
                  timeAsyncResult,
                  resolved,
                  resolved1,
                  resolveResult
                ];
                allResult = allResult.Promise.all(items);
                guildId = 1;
                dependencyMap2 = 1;
                const _Promise6 = allResult.Promise;
                const measureAsyncResult1 = fetchGuildCache2.measureAsync(() => (function loadInitialGuildChannels(closure_0, closure_2) {
                  const self = this;
                  const apply = closure_24.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })(closure_0, closure_2));
              }
            } else if (1 === tmp6) {
              if (arg0 === 1) {
                dependencyMap2 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                dependencyMap2 = 3;
                obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else {
                verboseResult = closure_6;
                verboseResult = closure_7;
                closure_7 = arg1;
                verboseResult = callback2;
                verboseResult = closure_7;
                guildId = callback2(closure_7, 7);
                verboseResult = guildId;
                dependencyMap2 = callback2(guildId[0], 2);
                verboseResult = dependencyMap2;
                closure_10 = 32;
                verboseResult = dependencyMap2;
                closure_11 = 5;
                verboseResult = guildId;
                length = guildId[1];
                verboseResult = guildId;
                closure_13 = guildId[2];
                verboseResult = guildId;
                closure_14 = guildId[3];
                verboseResult = guildId;
                closure_15 = guildId[4];
                verboseResult = guildId;
                length2 = guildId[5];
                verboseResult = guildId;
                length3 = guildId[6];
                verboseResult = globalThis;
                const _performance2 = performance;
                verboseResult = closure_6;
                closure_18 = performance.now() - closure_6;
                verboseResult = closure_13;
                verboseResult = closure_18;
                verboseResult = closure_10;
                const _HermesInternal2 = HermesInternal;
                verboseResult = closure_13.verbose("cache loaded in " + closure_18 + "ms (channel_history " + closure_10 + "ms)");
                verboseResult = closure_11;
                verboseResult = null;
                if (null == closure_11) {
                  callback(5418)("database:history_cache_null");
                  closure_13.verbose("finished without dispatching CACHE_LOADED");
                  const items1 = [false, null, 0];
                  dependencyMap2 = 3;
                  const obj2 = { value: null, done: true };
                  obj2[0] = items1;
                  return obj2;
                } else {
                  verboseResult = closure_6;
                  const _Object2 = Object;
                  verboseResult = closure_11;
                  const members = closure_11.members;
                  closure_19 = Object.fromEntries(members.map((userId) => {
                    const items = [userId.userId, userId];
                    return items;
                  }));
                  verboseResult = closure_13;
                  let tmp52 = null != closure_13.guildId;
                  if (tmp52) {
                    tmp52 = null != closure_13.channels;
                  }
                  closure_20 = tmp52;
                  guildId = closure_13.guildId;
                  const promise = new Promise((arg0, arg1) => {
                    closure_0 = arg0;
                    const callback2 = arg1;
                    const Emitter = callback2(589).Emitter;
                    return Emitter.batched(() => {
                      callback(10).time("\u{1F4BE}", "Dispatch Mini Cache", () => { ... });
                      let obj = callback(10);
                      callback(10).time("\u{1F4BE}", "socket.processFirstQueuedDispatch()", () => { ... });
                    });
                  });
                  guildId = 2;
                  dependencyMap2 = 1;
                  const obj3 = { value: null, done: false };
                  obj3[0] = promise;
                  return obj3;
                }
              }
            } else if (arg0 === 1) {
              dependencyMap2 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              dependencyMap2 = 3;
              const obj4 = { value: null, done: true };
              obj4[0] = arg1;
              return obj4;
            } else {
              verboseResult = closure_6;
              verboseResult = closure_7;
              verboseResult = callback;
              verboseResult = c4;
              verboseResult = c5;
              verboseResult = globalThis;
              const _JSON = JSON;
              verboseResult = dependencyMap;
              verboseResult = closure_13;
              verboseResult = JSON.stringify(dependencyMap);
              verboseResult = name;
              verboseResult = null;
              verboseResult = null != name;
              name = undefined;
              if (name != null) {
                name = name.name;
              }
              length = closure_14.length;
              guildId = closure_11.guildId;
              channelId = closure_11.channelId;
              length2 = closure_11.messages.length;
              length3 = closure_11.members.length;
              let channels = closure_13.channels;
              length = undefined;
              if (channels != null) {
                length = channels.length;
              }
              const _Object = Object;
              const _HermesInternal = HermesInternal;
              closure_13.verbose("early_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: " + verboseResult + "\n          selected_guild: " + verboseResult + "\n          selected_channel: " + verboseResult + "\n          navigation_state: " + verboseResult + "\n          database: " + verboseResult + "\n            name: " + name + "\n        data:\n          database:\n            private_channels: " + length + "\n            channel_history:\n              guild: " + guildId + "\n              channel: " + channelId + "\n              messages: " + length2 + "\n                members: " + length3 + "\n                users: " + closure_11.users.length + "\n            initial_guild:\n              id: " + guildId + "\n              channels: " + length + "\n            user_settings: " + Object.keys(closure_15).length + "\n            read_states: " + length2.length + "\n            user_guild_settings: " + length3.length + "\n      )");
              obj = callback(9);
              const obj5 = { guilds: null };
              obj5[0] = length.length;
              obj.setEarlyCacheInfo(obj5);
              closure_13.verbose("finished dispatching CACHE_LOADED");
              const items2 = [true, , ];
              let tmp45 = null;
              if (closure_20) {
                c5 = guildId;
                if (guildId == null) {
                  c5 = null;
                }
                tmp45 = c5;
              }
              items2[1] = tmp45;
              items2[2] = closure_14.length;
              dependencyMap2 = 3;
              const obj6 = { value: null, done: true };
              obj6[0] = items2;
              return obj6;
            }
          } catch (tmp97) {
            dependencyMap2 = verboseResult;
            throw tmp97;
          }
        }
      }
    })();
  });
  closure_21 = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _loadInitialGuilds() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c6 = 0;
    c7 = 0;
    return (function*(arg0, initial_guild_id) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw initial_guild_id;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = initial_guild_id;
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
              throw initial_guild_id;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = initial_guild_id;
              return obj;
            } else {
              closure_5 = tmp2;
              closure_4 = tmp5;
              let table;
              let guildId;
              if (null == callback) {
                c7 = 3;
                obj1 = { value: null, done: true };
                obj1[0] = [];
                return obj1;
              } else {
                const page = tmp36.page;
                if ("private-channels" !== page) {
                  if ("guild-channels" !== page) {
                    if ("other" === page) {
                      if ("@me" === tmp36.guildId) {
                        c22 = true;
                      }
                    }
                  }
                  if (c22) {
                    c6 = 1;
                    c7 = 1;
                    const obj2 = { value: null, done: false };
                    obj2[0] = callback(closure_1_2[24]).tryLoadAsync(() => callback(10).timeAsync("\u{1F4BE}", "cache: guilds", () => closure_1_1(closure_1_2[25]).getAsync(closure_0)));
                    return obj2;
                  } else {
                    let obj7 = lib(closure_1_2[26]);
                    c6 = 2;
                    c7 = 1;
                    const obj3 = { value: null, done: false };
                    obj3[0] = obj7.getCommittedVersions();
                    return obj3;
                  }
                }
                c22 = true;
              }
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c7 = 3;
              throw initial_guild_id;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj4 = { value: null, done: true };
              obj4[0] = initial_guild_id;
              return obj4;
            } else {
              table = initial_guild_id;
              if (initial_guild_id == null) {
                table = [];
              }
              c7 = 3;
              const obj5 = { value: null, done: true };
              obj5[0] = table;
              return obj5;
            }
          } else if (2 === tmp5) {
            if (arg0 === 1) {
              c7 = 3;
              throw initial_guild_id;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj6 = { value: null, done: true };
              obj6[0] = initial_guild_id;
              return obj6;
            } else {
              initial_guild_id = initial_guild_id.initial_guild_id;
              guildId = initial_guild_id;
              if (initial_guild_id == null) {
                guildId = lib.guildId;
              }
              table = guildId;
              if (null != table) {
                if ("@me" !== table) {
                  obj1 = callback(table[24]);
                  c6 = 3;
                  c7 = 1;
                  obj7 = { value: null, done: false };
                  obj7[0] = obj1.tryLoadAsync(() => callback(5402).getOneAsync(closure_0, dependencyMap));
                  return obj7;
                }
              }
              c7 = 3;
              const obj8 = { value: null, done: true };
              obj8[0] = [];
              return obj8;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw initial_guild_id;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = initial_guild_id;
            return obj;
          } else {
            guildId = initial_guild_id;
            if (null != guildId) {
              const items = [guildId];
            } else {
              const items1 = [];
            }
            c7 = 3;
          }
        } catch (tmp28) {
          c7 = tmp;
          throw tmp28;
        }
      }
    })();
  });
  closure_23 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _loadInitialGuildChannels() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c5 = 0;
    c6 = 0;
    return (function*(arg0, initial_guild_id) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw initial_guild_id;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = initial_guild_id;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw initial_guild_id;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = initial_guild_id;
              return obj;
            } else {
              closure_4 = tmp5;
              closure_3 = tmp2;
              let table;
              closure_3 = undefined;
              if (null == callback) {
                c6 = 3;
                obj1 = { value: null, done: true };
                obj1[0] = Promise.resolve({ channels: null, guildId: null });
                return obj1;
              } else {
                let obj6 = lib(closure_1_2[26]);
                c5 = 1;
                c6 = 1;
                let obj2 = { value: null, done: false };
                obj2[0] = obj6.getCommittedVersions();
                return obj2;
              }
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c6 = 3;
              throw initial_guild_id;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj3 = { value: null, done: true };
              obj3[0] = initial_guild_id;
              return obj3;
            } else {
              table = initial_guild_id.initial_guild_id;
              let tmp12 = null == table;
              if (tmp12) {
                tmp12 = "guild-channels" === lib.page;
              }
              if (tmp12) {
                table = lib.guildId;
              }
              if (null != callback) {
                if (null != table) {
                  closure_3 = table;
                  table = {};
                  obj2 = callback(table[24]);
                  c5 = 2;
                  c6 = 1;
                  const obj4 = { value: null, done: false };
                  obj4[0] = obj2.tryLoadAsync(() => callback(table[14]).getAsync(closure_0, closure_3));
                  return obj4;
                }
              }
              const _HermesInternal = HermesInternal;
              closure_13.verbose("skipped loading initial guild (guild: " + table + ", database: " + callback + ")");
              c6 = 3;
              const obj5 = { value: null, done: true };
              obj5[0] = Promise.resolve({ channels: null, guildId: null });
              return obj5;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw initial_guild_id;
          } else if (arg0 === 2) {
            c6 = 3;
            obj6 = { value: null, done: true };
            obj6[0] = initial_guild_id;
            return obj6;
          } else {
            table.channels = initial_guild_id;
            table.guildId = table;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = table;
            return obj;
          }
        } catch (tmp34) {
          c6 = tmp;
          throw tmp34;
        }
      }
    })();
  });
  closure_24 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _loadLateLazyCache() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2, arg3) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    closure_3 = arg3;
    c6 = 0;
    c7 = 0;
    return (function*(arg0, arg1, arg2, arg3) {
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
              let socket = tmp2;
              closure_4 = tmp5;
              closure_4 = undefined;
              socket = undefined;
              c6 = undefined;
              c7 = undefined;
              closure_8 = undefined;
              closure_9 = undefined;
              let socket2;
              closure_1_13.verbose("loading late lazy cache");
              const fetchLazyCache = callback2(9).fetchLazyCache;
              c6 = 1;
              c7 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = fetchLazyCache.measureAsync(() => {
                const items = [
                  callback(1975).tryLoadAsync(() => {
                    if (null != closure_0) {
                      let timeAsyncResult = closure_1_1(closure_1_2[13]).timeAsync("\u{1F4BE}", "cache: cache_version", () => { ... });
                      const obj = closure_1_1(closure_1_2[13]);
                    } else {
                      timeAsyncResult = Promise.resolve(true);
                    }
                    return timeAsyncResult;
                  }),
                ,

                ];
                let obj = callback(1975);
                items[1] = callback(1975).tryLoadAsync(() => {
                  if (null != closure_0) {
                    if (!closure_1_22) {
                      let timeAsyncResult = closure_1_1(closure_1_2[13]).timeAsync("\u{1F4BE}", "cache: lazy guilds", () => { ... });
                      const obj = closure_1_1(closure_1_2[13]);
                    }
                    return timeAsyncResult;
                  }
                  timeAsyncResult = Promise.resolve([]);
                });
                let obj2 = callback(1975);
                items[2] = callback(1975).tryLoadAsync(() => {
                  if (null != closure_0) {
                    let timeAsyncResult = closure_1_1(closure_1_2[13]).timeAsync("\u{1F4BE}", "cache: basic_channels", () => { ... });
                    const obj2 = closure_1_1(closure_1_2[13]);
                  } else {
                    const obj = { all: null, stale: null, channels: null };
                    obj[0] = [];
                    obj[1] = [];
                    obj[2] = [];
                    timeAsyncResult = Promise.resolve(obj);
                  }
                  return timeAsyncResult;
                });
                return Promise.all(items);
              });
              return obj1;
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              let obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              closure_4 = arg1;
              socket = callback3(closure_4, 3);
              c6 = socket[0];
              c7 = socket[1];
              closure_8 = socket[2];
              const fetchStaleChannels = callback2(9).fetchStaleChannels;
              c6 = 2;
              c7 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = fetchStaleChannels.measureAsync(() => {
                if (null != callback) {
                  if (null != closure_8) {
                    if (closure_8.stale.length > 0) {
                      let tryLoadAsyncResult = callback(1975).tryLoadAsync(() => {
                        stale = stale.stale;
                        closure_1_13.verbose("loading stale guild channels (count: " + stale.length + ", ids: " + stale.join(", ") + ")");
                        return Promise.all(stale.map(() => { ... }));
                      });
                      const obj = callback(1975);
                    }
                    return tryLoadAsyncResult;
                  }
                }
                tryLoadAsyncResult = Promise.resolve([]);
              });
              return obj3;
            }
          } else {
            if (2 === tmp5) {
              if (arg0 === 1) {
                c7 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c7 = 3;
                const obj4 = { value: null, done: true };
                obj4[0] = arg1;
                return obj4;
              } else {
                closure_9 = arg1;
                const DelayLoadLateLazyCacheHoldoutExperiment = callback(1914).DelayLoadLateLazyCacheHoldoutExperiment;
                verbose = verbose.verbose;
                if (DelayLoadLateLazyCacheHoldoutExperiment.getCachedEnabled()) {
                  verbose("loadLateLazyCache: not yielding to react");
                } else {
                  verbose("loadLateLazyCache: yielding to react");
                  obj1 = callback(5419);
                  obj2 = callback(500);
                  let num4;
                  if (obj2.isIOS()) {
                    num4 = 0;
                  }
                  c6 = 3;
                  c7 = 1;
                  const obj5 = { value: null, done: false };
                  obj5[0] = obj1.waitSafelyForPostTTI(num4);
                  return obj5;
                }
              }
            } else if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            const loadLazyCache = callback2(9).loadLazyCache;
            loadLazyCache.recordStart();
            socket2 = socket.getSocket();
            callback4(() => {
              if (false === c6) {
                callback2(5418)("database:not_ok");
                callback2(709).dispatch({ type: "CLEAR_CACHES", reason: "database:not_ok" });
                const obj10 = callback2(709);
                callback2(709).dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" });
              } else {
                if (null != c7) {
                  if (null != closure_8) {
                    if (null != closure_9) {
                      if (null == c6) {
                        callback2(5418)("database:versionless");
                        closure_1_13.log("kv_cache was not ok (null version with values)");
                        callback2(709).dispatch({ type: "CLEAR_CACHES", reason: "database:versionless" });
                        const obj6 = callback2(709);
                        callback2(709).dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" });
                      }
                      if (closure_1_18) {
                        callback2(5418)("already_connected");
                        closure_1_13.log("Skipping lazy cache; already connected.");
                        callback2(709).dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" });
                      } else {
                        closure_10.addAnalytics({ hadCacheAtStartup: true });
                        let obj = { type: "CACHE_LOADED_LAZY", guilds: null, guildChannels: null, basicGuildChannels: null, initialGuildId: null };
                        obj[1] = c7;
                        obj[2] = closure_9;
                        obj[3] = closure_8.channels;
                        obj[4] = dependencyMap;
                        const deserializeCache = callback2(9).deserializeCache;
                        deserializeCache.measure(() => {
                          if (null != obj.channels) {
                            closure_1_1(closure_1_2[9])(tmp.channels);
                          }
                          if (null != obj.privateChannels) {
                            closure_1_1(closure_1_2[9])(tmp.privateChannels);
                          }
                          if (null != obj.guildChannels) {
                            obj = obj(closure_1_2[9]);
                            const result = obj.deserializeChannelEntries(tmp.guildChannels);
                          }
                        });
                        const dispatchLazyCache = callback2(9).dispatchLazyCache;
                        dispatchLazyCache.measure(() => {
                          obj = closure_1_1(closure_1_2[23]);
                          return obj.dispatch(obj);
                        });
                        const _performance = performance;
                        const _HermesInternal = HermesInternal;
                        closure_1_13.verbose("late lazy cache loaded (ok: true, took: " + performance.now() - tmp + "ms)");
                        closure_10.addAnalytics({ usedCacheAtStartup: true });
                        const reduced = closure_9.reduce((arg0, arg1) => {
                          [, arr] = arg1;
                          return arg0 + arr.length;
                        }, 0);
                        const all = closure_8.all;
                        const reduced1 = all.reduce((arg0, arg1) => {
                          [, arr] = arg1;
                          return arg0 + arr.length;
                        }, 0);
                        const channels = closure_8.channels;
                        const reduced2 = channels.reduce((arg0, arg1) => {
                          [, arr] = arg1;
                          return arg0 + arr.length;
                        }, 0);
                        const diff = reduced1 - reduced2;
                        let str3 = "";
                        if (0 !== closure_8.stale.length) {
                          const stale = closure_8.stale;
                          const _HermesInternal2 = HermesInternal;
                          str3 = " \u00B7 " + stale.join(", ");
                        }
                        let name;
                        if (obj != null) {
                          name = obj.name;
                        }
                        const _HermesInternal3 = HermesInternal;
                        closure_1_13.verbose("lazy_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: " + callback2 + "\n          initial_guild: " + dependencyMap + "\n          database: " + null != obj + "\n            ok: " + c6 + "\n            name: " + name + "\n        data:\n          database:\n            guilds: " + c7.length + "\n            basic_channels:\n              total: " + reduced1 + " (" + closure_8.channels.length + " guilds)\n              stale: " + diff + " (" + closure_8.stale.length + " guilds" + str3 + ")\n              unstale: " + reduced2 + "\n            full_channels (guilds_with_stale_basic_channels):\n              total: " + reduced + " (" + closure_9.length + " guilds)\n      )");
                        obj = { guilds: null, privateChannels: null, basicChannels: null, basicChannelsStale: null, fullChannels: null, fullChannelGuilds: null };
                        obj[0] = c7.length;
                        obj[1] = closure_3;
                        obj[2] = reduced1;
                        obj[3] = diff;
                        obj[4] = reduced;
                        obj[5] = closure_9.length;
                        callback2(9).setLazyCacheInfo(obj);
                      }
                    }
                  }
                }
                callback2(5418)("database:load_failed");
                const _HermesInternal4 = HermesInternal;
                closure_1_13.log("couldn't load database item (\n          database: " + null != obj + "\n          basic_channels: " + null != closure_8 + "\n          guild_channels: " + null != closure_9 + "\n          guilds: " + null != c7 + "\n        )");
                callback2(709).dispatch({ type: "CLEAR_CACHES", reason: "database:load_failed" });
                const obj8 = callback2(709);
                callback2(709).dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" });
              }
            });
            c7 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp20) {
          c7 = tmp;
          throw tmp20;
        }
      }
    })();
  });
  closure_25 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function resumeFluxAndSocket(arg0) {
  closure_0 = arg0;
  importDefault = socket.getSocket();
  dependencyMap = false;
  const Emitter = initializeDefault.Emitter;
  Emitter.batched(() => {
    try {
      f120797();
      let dispatcher = lib.dispatcher;
      if (dispatcher.hasStuffToDispatchNow()) {
        dependencyMap = true;
        const loadLazyCache = lib(9).loadLazyCache;
        loadLazyCache.recordEnd();
        closure_1_13.verbose("Processing First Queued Dispatch");
        const dispatcher3 = tmp3.dispatcher;
        const _Set = Set;
        const set = new Set(["READY", "INITIAL_GUILD"]);
        const result = dispatcher3.processFirstQueuedDispatch(set);
        const _setTimeout = setTimeout;
        const timerId = setTimeout(() => {
          closure_1_13.verbose("Unpausing Dispatch Queue");
          dispatcher = dispatcher.dispatcher;
          dispatcher.unpauseDispatchQueue();
        }, 100);
      } else {
        closure_1_13.verbose("Unpausing Dispatch Queue");
        const dispatcher2 = tmp3.dispatcher;
        dispatcher2.unpauseDispatchQueue();
      }
    } catch (tmp19) {
      closure_1_13.warn("Lazy cache has encountered error", tmp19);
      let obj = lib(709);
      obj = { type: "RESET_SOCKET", args: null };
      obj = { error: null, action: "LazyCache" };
      obj[0] = tmp19;
      obj[1] = obj;
      obj.dispatch(obj);
    }
  });
  if (!dependencyMap) {
    const loadLazyCache = serializeDefault.loadLazyCache;
    loadLazyCache.recordEnd();
  }
}
({ MAX_MESSAGES_PER_CHANNEL: c9, CACHE_STORE_KEY: c10, CACHE_STORE_LAZY_KEY: unpackModuleId, CACHE_STORE_CHANNELS_LAZY_KEY: closure_12 } = ME);
let closure_13 = new timestampDefault("CacheStore");
let c14 = false;
const initializing = "initializing";
let c16 = 0;
let c17 = false;
let c18 = false;
let c19 = false;
let c22 = false;
const Store = initializeDefault.Store;
class CacheStoreClass extends Store {
}
const prototype = CacheStoreClass.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_6, closure_5, closure_7, closure_8);
};
prototype["hasCache"] = function hasCache() {
  return c17;
};
prototype["getLazyCacheStatus"] = function getLazyCacheStatus() {
  return initializing;
};
Object.defineProperty(prototype, "lastWriteTime", {
  get: function lastWriteTime() {
    return c16;
  },
  set: undefined
});
prototype["canWriteCaches"] = function canWriteCaches(flag) {
  if (obj.isAuthenticated()) {
    if (c14) {
      closure_13.log("Not writing cache because caches cleared");
      let flag2 = false;
    } else {
      let tmp5 = !flag;
      if (!flag) {
        tmp5 = !c19;
      }
      flag2 = !tmp5;
      if (tmp5) {
        closure_13.log("Not writing cache because never connected");
        flag2 = false;
      }
    }
  } else {
    closure_13.log("Not writing cache because not authenticated");
    return false;
  }
};
prototype["loadCacheAsync"] = function loadCacheAsync(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return callback(function*() {
    if (c5 === 2) {
      c5 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp7 === 3) {
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
        c5 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let id = tmp3;
            let callback = tmp5;
            callback = undefined;
            id = undefined;
            closure_2 = undefined;
            let v0;
            dependencyMap = undefined;
            c5 = undefined;
            closure_6 = undefined;
            closure_7 = undefined;
            const callOnceResult = closure_1_0(closure_1_2[33]).callOnce(closure_1_1);
            callback = callOnceResult;
            const obj13 = closure_1_0(closure_1_2[33]);
            closure_1_1(closure_1_2[12]).setInitialPage(closure_1_0.page);
            const guildId = closure_1_0.guildId;
            const obj14 = closure_1_1(closure_1_2[12]);
            let tmp30 = null;
            if (null != guildId) {
              tmp30 = null;
              if ("@me" !== guildId) {
                tmp30 = guildId;
              }
            }
            closure_1_1(closure_1_2[12]).setInitialGuildId(tmp30);
            if ("initializing" !== closure_1_15) {
              closure_1_1(closure_1_2[21])("cache:lazy_cache_not_initializing");
              callOnceResult();
              let _setTimeout = setTimeout;
              let timerId = setTimeout(() => {
                const socket = store.getSocket();
                let unpauseDispatchQueueResult;
                if (socket != null) {
                  const dispatcher = socket.dispatcher;
                  if (dispatcher != null) {
                    unpauseDispatchQueueResult = dispatcher.unpauseDispatchQueue();
                  }
                }
                return unpauseDispatchQueueResult;
              }, 0);
              c5 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = undefined;
              return obj1;
            } else {
              v0 = 1;
              id = closure_1_6.getId();
              closure_2 = closure_1_1(closure_1_2[34]).carefullyOpenDatabase(id);
              const loadMiniCache = closure_1_1(closure_1_2[12]).loadMiniCache;
              dependencyMap = 2;
              c5 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = loadMiniCache.measureAsync(() => (function loadEarlyCache(closure_2, id, c0) {
                const self = this;
                const apply = closure_21.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              })(closure_2, id, c0));
              return obj2;
            }
            const obj15 = closure_1_1(closure_1_2[12]);
          }
        } else {
          if (1 === tmp8) {
            v0 = 0;
            const stack = closure_2;
            closure_1_13.error("clearing cache. exception encountered while loading cache.", stack, stack.stack);
            closure_1_1(closure_1_2[21])("cache:exception", stack);
            callback();
            let obj5 = closure_1_1(closure_1_2[23]);
            const obj3 = { type: "RESET_SOCKET", args: null };
            const obj4 = { error: null, action: "loadCacheAsync" };
            obj4[0] = stack;
            obj3[1] = obj4;
            obj5.dispatch(obj3);
            c5 = 3;
          } else if (2 === tmp8) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 0;
              c5 = 3;
              obj5 = { value: null, done: true };
              obj5[0] = arg1;
              return obj5;
            } else {
              v0 = arg1;
              dependencyMap = v0(v0, 3);
              c5 = 32;
              closure_6 = 5;
              closure_7 = 4499;
              closure_1_0();
              if (c5) {
                dependencyMap = 4;
                c5 = 1;
                const obj6 = { value: null, done: false };
                obj6[0] = (function loadLateLazyCache(closure_1_2, closure_1_1, closure_1_6, closure_1_7) {
                  const self = this;
                  const apply = closure_25.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })(closure_1_2, closure_1_1, closure_1_6, closure_1_7);
                return obj6;
              } else {
                dependencyMap = 3;
                c5 = 1;
                const obj7 = { value: null, done: false };
                obj7[0] = (function dontLoadLateLazyCache() {
                  const f120797 = () => lib(709).dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" });
                  id = store.getSocket();
                  const Emitter = id(tmp38[22]).Emitter;
                  Emitter.batched(() => {
                    try {
                      f120797();
                      let dispatcher = lib.dispatcher;
                      if (dispatcher.hasStuffToDispatchNow()) {
                        dependencyMap = true;
                        const loadLazyCache = lib(9).loadLazyCache;
                        loadLazyCache.recordEnd();
                        closure_1_13.verbose("Processing First Queued Dispatch");
                        const dispatcher3 = tmp3.dispatcher;
                        const _Set = Set;
                        const set = new Set(["READY", "INITIAL_GUILD"]);
                        const result = dispatcher3.processFirstQueuedDispatch(set);
                        const _setTimeout = setTimeout;
                        const timerId = setTimeout(() => {
                          closure_1_13.verbose("Unpausing Dispatch Queue");
                          dispatcher = dispatcher.dispatcher;
                          dispatcher.unpauseDispatchQueue();
                        }, 100);
                      } else {
                        closure_1_13.verbose("Unpausing Dispatch Queue");
                        const dispatcher2 = tmp3.dispatcher;
                        dispatcher2.unpauseDispatchQueue();
                      }
                    } catch (tmp19) {
                      closure_1_13.warn("Lazy cache has encountered error", tmp19);
                      let obj = lib(709);
                      obj = { type: "RESET_SOCKET", args: null };
                      obj = { error: null, action: "LazyCache" };
                      obj[0] = tmp19;
                      obj[1] = obj;
                      obj.dispatch(obj);
                    }
                  });
                  if (!false) {
                    let loadLazyCache = id(tmp2[12]).loadLazyCache;
                    loadLazyCache.recordEnd();
                  }
                  return Promise.resolve();
                })();
                return obj7;
              }
            }
          } else {
            if (3 === tmp8) {
              if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 0;
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            v0 = 0;
          }
          v0 = 0;
          c5 = 3;
          const obj8 = { value: null, done: true };
          obj8[0] = arg1;
          return obj8;
        }
      } catch (tmp38) {
        closure_2 = tmp38;
        if (tmp4 === v0) {
          c5 = tmp2;
          throw tmp38;
        } else {
          dependencyMap = tmp;
        }
      }
    }
  })();
};
CacheStoreClass.displayName = "CacheStore";
const cacheStoreClass = new CacheStoreClass(dispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen() {
    c18 = true;
    c19 = true;
    return false;
  },
  LOGOUT: handleClearCaches,
  CONNECTION_CLOSED: function handleConnectionClose() {
    c18 = false;
    c19 = true;
    return false;
  },
  CACHE_LOADED: function handleCacheLoaded() {
    c17 = true;
  },
  CACHE_LOADED_LAZY: function handleCacheLoadedLazy() {
    c17 = true;
    c15 = "cache-loaded";
  },
  CACHE_LOADED_LAZY_NO_CACHE: function handleCacheLoadedLazyNoCache() {
    c15 = "no-cache";
  },
  CLEAR_CACHES: handleClearCaches,
  WRITE_CACHES: function saveCaches() {
    closure_13.verbose("Writing cache now");
    closure_16 = Date.now();
    c17 = true;
    const Storage = Storage4.Storage;
    Storage.remove(closure_10);
    const Storage2 = Storage4.Storage;
    Storage2.remove(closure_12);
    const Storage3 = Storage4.Storage;
    Storage3.remove(closure_11);
  }
});
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    c18 = true;
    c19 = true;
    return false;
  },
  LOGOUT: handleClearCaches,
  CONNECTION_CLOSED: function handleConnectionClose() {
    c18 = false;
    c19 = true;
    return false;
  },
  CACHE_LOADED: function handleCacheLoaded() {
    c17 = true;
  },
  CACHE_LOADED_LAZY: function handleCacheLoadedLazy() {
    c17 = true;
    c15 = "cache-loaded";
  },
  CACHE_LOADED_LAZY_NO_CACHE: function handleCacheLoadedLazyNoCache() {
    c15 = "no-cache";
  },
  CLEAR_CACHES: handleClearCaches,
  WRITE_CACHES: function saveCaches() {
    closure_13.verbose("Writing cache now");
    closure_16 = Date.now();
    c17 = true;
    const Storage = Storage4.Storage;
    Storage.remove(closure_10);
    const Storage2 = Storage4.Storage;
    Storage2.remove(closure_12);
    const Storage3 = Storage4.Storage;
    Storage3.remove(closure_11);
  }
};
const tmp3 = new timestampDefault("CacheStore");
let result = require("set").fileFinishedImporting("modules/cache/CacheStore.tsx");

export default cacheStoreClass;
export const ENABLE_CACHE_STORE = true;