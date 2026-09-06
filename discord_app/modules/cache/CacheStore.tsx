// === Module 7476: CacheStore ===

// Module 7476 (CacheStore)
import LoggerDefault from "Logger" /* 3 */;
import TTITrackerDefault from "TTITracker" /* 9 */;
import AppStartPerformanceDefault from "AppStartPerformance" /* 10 */;
import initializeDefault from "initialize" /* 504 */;
import Storage4 from "Storage" /* 510 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import TryLoad from "TryLoad" /* 2006 */;
import modules_MessagesDefault from "modules/Messages" /* 7477 */;
import timeRequireDefault from "timeRequire" /* 7492 */;
import NonGuildVersionsDefault from "NonGuildVersions" /* 7656 */;
import AuthenticationUtils from "AuthenticationUtils" /* 7668 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5277 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4381 */;

require = fn;
function handleClearCaches(type) {
  closure_13.log("Clearing cache store");
  closure_16 = Date.now();
  const Storage = Storage4.Storage;
  Storage.remove(closure_1_10);
  const Storage2 = Storage4.Storage;
  Storage2.remove(closure_1_11);
  const Storage3 = Storage4.Storage;
  Storage3.remove(closure_1_12);
  c15 = "no-cache";
  if (tmp5) {
    c14 = true;
  }
}
let closure_20 = async function _loadChannelHistory(arg0) {
  if (c6 === 2) {
    c6 = 3;
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
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp5;
          closure_3 = tmp2;
          closure_131_0 = closure_1;
          closure_131_1 = closure_2;
          closure_131_2 = undefined;
          closure_131_3 = undefined;
          closure_131_4 = undefined;
          const _performance3 = performance;
          const nowResult = performance.now();
          closure_131_2 = nowResult;
          if (null != closure_0) {
            if (null != closure_2) {
              let obj4 = modules_MessagesDefault;
              c5 = 1;
              c6 = 1;
              const obj1 = { value: obj4.startupLoad(closure_0, closure_1, closure_2, React7), done: false };
              return obj1;
            }
          }
          const _HermesInternal = HermesInternal;
          map1.verbose("skipped loaded messages (channel: " + closure_2 + ", database: " + closure_0 + ").");
          const _performance = performance;
          const items = [performance.now() - nowResult, ];
          const obj2 = { guildId: null, channelId: null, users: [], members: [], messages: [] };
          items[1] = obj2;
          c6 = 3;
          const obj3 = { value: items, done: true };
          return obj3;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        obj4 = { value, done: true };
        return obj4;
      } else {
        closure_131_3 = value;
        const _HermesInternal2 = HermesInternal;
        closure_132_13.verbose("loaded " + closure_131_3.messages.length + " messages (guild: " + closure_131_0 + ", channel: " + closure_131_1 + ").");
        const obj5 = { guildId: closure_131_0, channelId: closure_131_1, users: closure_131_3.users, members: closure_131_3.members, messages: closure_131_3.messages };
        closure_131_4 = obj5;
        const obj10 = closure_132_1(closure_132_2[11]);
        const result = obj10.recordChannelFetchedLocal(closure_131_1, closure_132_0(closure_132_2[11]).INITIAL_MESSAGE_FETCH_KEY, null, null, closure_132_9, closure_131_3.messages);
        const _performance2 = performance;
        const items1 = [performance.now() - closure_131_2, closure_131_4];
        c6 = 3;
        obj = { value: items1, done: true };
        return obj;
      }
    } catch (tmp17) {
      c6 = tmp;
      throw tmp17;
    }
  }
};
let closure_21 = async function _loadEarlyCache(arg0) {
  if (c9 === 2) {
    c9 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
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
      c9 = 2;
      if (0 === c8) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_7 = tmp2;
          closure_6 = tmp3;
          closure_134_0 = closure_0;
          closure_134_1 = closure_1;
          closure_134_2 = dependencyMap;
          closure_134_3 = undefined;
          closure_134_4 = undefined;
          closure_134_5 = undefined;
          closure_134_6 = undefined;
          closure_134_7 = undefined;
          closure_134_8 = undefined;
          closure_134_9 = undefined;
          closure_134_10 = undefined;
          closure_134_11 = undefined;
          closure_134_12 = undefined;
          closure_134_13 = undefined;
          closure_134_14 = undefined;
          closure_134_15 = undefined;
          closure_134_16 = undefined;
          closure_134_17 = undefined;
          closure_134_18 = undefined;
          closure_134_19 = undefined;
          closure_134_20 = undefined;
          let guildId2;
          map1.verbose("loading early cache");
          socket = socket.getSocket();
          closure_134_3 = socket;
          socket.connect();
          guildId = guildId.getGuildId();
          c3 = guildId;
          if (guildId == null) {
            c3 = null;
          }
          closure_134_4 = c3;
          channelId = channelId.getChannelId();
          c4 = channelId;
          if (channelId == null) {
            c4 = null;
          }
          closure_134_5 = c4;
          let allResult = globalThis;
          const _performance = performance;
          closure_134_6 = performance.now();
          const loadCachedMessages = TTITrackerDefault.loadCachedMessages;
          const result = loadCachedMessages.measureAsyncWithoutNesting(async () => (function loadChannelHistory() {
            const self = this;
            const apply = closure_1_20.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })(closure_1_0, closure_1_4, closure_1_5));
          const fetchGuildCache = TTITrackerDefault.fetchGuildCache;
          const fetchGuildCache2 = TTITrackerDefault.fetchGuildCache;
          const measureAsyncResult = fetchGuildCache.measureAsync(async () => (function loadInitialGuilds() {
            const self = this;
            const apply = closure_1_23.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })(closure_1_0, dependencyMap));
          if (null != closure_0) {
            let timeAsyncResult = AppStartPerformanceDefault.timeAsync("\u{1F4BE}", "cache: private_channels", async () => closure_1(2007).getAsync(closure_1_0, null));
          } else {
            timeAsyncResult = Promise.resolve([]);
          }
          if (null == closure_0) {
            let resolved = Promise.resolve({});
          } else {
            resolved = AppStartPerformanceDefault.timeAsync("\u{1F4BE}", "cache: user_settings", async () => closure_1(7489).getAll(closure_1_0));
          }
          if (null == closure_0) {
            let resolved1 = Promise.resolve([]);
          } else {
            resolved1 = AppStartPerformanceDefault.timeAsync("\u{1F4BE}", "cache: read_states", async () => closure_1(7490).getAll(closure_1_0));
          }
          if (null == closure_0) {
            let resolveResult = allResult.Promise.resolve([]);
            const _Promise5 = allResult.Promise;
          } else {
            resolveResult = AppStartPerformanceDefault.timeAsync("\u{1F4BE}", "cache: user_guild_settings", async () => closure_1(7491).getAll(closure_1_0));
          }
          timeRequireDefault("AllCacheStores", () => closure_1_0(7493));
          timeRequireDefault("MobileAppDatabaseManager", () => closure_1_0(7644));
          let items = [
            result,
            measureAsyncResult,
            fetchGuildCache2.measureAsync(async () => (function loadInitialGuildChannels() {
                      const self = this;
                      const apply = closure_1_24.apply;
                      if (typeof apply === "unknown") {
                        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                      } else {
                        applyArgumentsResult = apply(self, arguments);
                      }
                      return applyArgumentsResult;
                    })(closure_1_0, dependencyMap)),
            timeAsyncResult,
            resolved,
            resolved1,
            resolveResult
          ];
          allResult = allResult.Promise.all(items);
          c8 = 1;
          c9 = 1;
          const _Promise6 = allResult.Promise;
          const measureAsyncResult1 = fetchGuildCache2.measureAsync(async () => (function loadInitialGuildChannels() {
            const self = this;
            const apply = closure_1_24.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })(closure_1_0, dependencyMap));
        }
      } else if (1 === tmp6) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 3;
          let obj1 = { value, done: true };
          return obj1;
        } else {
          closure_134_7 = value;
          closure_134_8 = closure_135_3(closure_134_7, 7);
          closure_134_9 = closure_135_3(closure_134_8[0], 2);
          closure_134_10 = closure_134_9[0];
          closure_134_11 = closure_134_9[1];
          closure_134_12 = closure_134_8[1];
          closure_134_13 = closure_134_8[2];
          closure_134_14 = closure_134_8[3];
          closure_134_15 = closure_134_8[4];
          closure_134_16 = closure_134_8[5];
          closure_134_17 = closure_134_8[6];
          const _performance2 = performance;
          closure_134_18 = performance.now() - closure_134_6;
          const _HermesInternal2 = HermesInternal;
          closure_135_13.verbose("cache loaded in " + closure_134_18 + "ms (channel_history " + closure_134_10 + "ms)");
          if (null == closure_134_11) {
            closure_135_1(closure_135_2[21])("database:history_cache_null");
            closure_135_13.verbose("finished without dispatching CACHE_LOADED");
            const items1 = [false, null, 0];
            c9 = 3;
            const obj2 = { value: items1, done: true };
            return obj2;
          } else {
            const _Object2 = Object;
            const members = closure_134_11.members;
            closure_134_19 = Object.fromEntries(members.map((userId) => {
              const items = [userId.userId, userId];
              return items;
            }));
            let tmp52 = null != closure_134_13.guildId;
            if (tmp52) {
              tmp52 = null != closure_134_13.channels;
            }
            closure_134_20 = tmp52;
            guildId2 = closure_134_13.guildId;
            const promise = new Promise((arg0, arg1) => {
              closure_0 = arg0;
              closure_1 = arg1;
              const Emitter = closure_1_1(504).Emitter;
              return Emitter.batched(() => {
                closure_1(10).time("\u{1F4BE}", "Dispatch Mini Cache", () => {
                  closure_3_1(573);
                  let obj = { type: "CACHE_LOADED", guilds, privateChannels, initialGuildChannels: null, users: null, messages: null, guildMembers: null, userSettings: null, userGuildSettings: null, readStates: null };
                  channels = channels.channels;
                  if (channels == null) {
                    channels = [];
                  }
                  obj.initialGuildChannels = channels;
                  const items = [...closure_2_11.users];
                  obj.users = items;
                  if (null == closure_2_11.channelId) {
                    obj = {};
                  } else {
                    obj = {};
                    obj[closure_2_11.channelId] = closure_2_11.messages;
                  }
                  obj.messages = obj;
                  if (null == closure_2_11.guildId) {
                    let obj1 = {};
                  } else {
                    obj1 = {};
                    obj1[closure_2_11.guildId] = closure_2_19;
                  }
                  obj.guildMembers = obj1;
                  obj.userSettings = userSettings;
                  obj.userGuildSettings = userGuildSettings;
                  obj.readStates = readStates;
                  return obj.dispatch(obj).then(closure_1_0, closure_1_1);
                });
                let obj = closure_1(10);
                closure_1(10).time("\u{1F4BE}", "socket.processFirstQueuedDispatch()", () => {
                  dispatcher = dispatcher.dispatcher;
                  return dispatcher.processFirstQueuedDispatch(new Set(["INITIAL_GUILD"]));
                });
              });
            });
            c8 = 2;
            c9 = 1;
            const obj3 = { value: promise, done: false };
            return obj3;
          }
        }
      } else if (arg0 === 1) {
        c9 = 3;
        throw value;
      } else if (arg0 === 2) {
        c9 = 3;
        const obj4 = { value, done: true };
        return obj4;
      } else {
        const _JSON = JSON;
        const json = JSON.stringify(closure_134_2);
        let name;
        if (closure_134_0 != null) {
          name = closure_134_0.name;
        }
        let length = closure_134_14.length;
        guildId = closure_134_11.guildId;
        channelId = closure_134_11.channelId;
        let channels = closure_134_13.channels;
        length = undefined;
        if (channels != null) {
          length = channels.length;
        }
        const _Object = Object;
        const _HermesInternal = HermesInternal;
        closure_135_13.verbose("early_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: " + closure_134_1 + "\n          selected_guild: " + closure_134_4 + "\n          selected_channel: " + closure_134_5 + "\n          navigation_state: " + json + "\n          database: " + null != closure_134_0 + "\n            name: " + name + "\n        data:\n          database:\n            private_channels: " + length + "\n            channel_history:\n              guild: " + guildId + "\n              channel: " + channelId + "\n              messages: " + closure_134_11.messages.length + "\n                members: " + closure_134_11.members.length + "\n                users: " + closure_134_11.users.length + "\n            initial_guild:\n              id: " + guildId2 + "\n              channels: " + length + "\n            user_settings: " + Object.keys(closure_134_15).length + "\n            read_states: " + closure_134_16.length + "\n            user_guild_settings: " + closure_134_17.length + "\n      )");
        obj = closure_135_1(closure_135_2[12]);
        const obj5 = { guilds: closure_134_12.length };
        obj.setEarlyCacheInfo(obj5);
        closure_135_13.verbose("finished dispatching CACHE_LOADED");
        const items2 = [true, , ];
        let tmp45 = null;
        if (closure_134_20) {
          c5 = guildId2;
          if (guildId2 == null) {
            c5 = null;
          }
          tmp45 = c5;
        }
        items2[1] = tmp45;
        items2[2] = closure_134_14.length;
        c9 = 3;
        const obj6 = { value: items2, done: true };
        return obj6;
      }
    } catch (tmp97) {
      c9 = tmp;
      throw tmp97;
    }
  }
};
let closure_23 = async function _loadInitialGuilds(arg0) {
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
          closure_5 = tmp2;
          closure_4 = tmp5;
          closure_132_0 = closure_0;
          closure_132_1 = importDefault;
          closure_132_2 = undefined;
          closure_132_3 = undefined;
          if (null == closure_0) {
            c7 = 3;
            let obj1 = { value: [], done: true };
            return obj1;
          } else {
            const page = importDefault.page;
            if ("private-channels" !== page) {
              if ("guild-channels" !== page) {
                if ("other" === page) {
                  if ("@me" === importDefault.guildId) {
                    c22 = true;
                  }
                }
              }
              if (c22) {
                c6 = 1;
                c7 = 1;
                const obj2 = { value: TryLoad.tryLoadAsync(async () => closure_1(10).timeAsync("\u{1F4BE}", "cache: guilds", async () => closure_2_1(7650).getAsync(closure_1_0))), done: false };
                return obj2;
              } else {
                let obj7 = NonGuildVersionsDefault;
                c6 = 2;
                c7 = 1;
                const obj3 = { value: obj7.getCommittedVersions(), done: false };
                return obj3;
              }
            }
            c22 = true;
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
          if (value == null) {
            value = [];
          }
          c7 = 3;
          const obj5 = { value, done: true };
          return obj5;
        }
      } else if (2 === tmp5) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          const initial_guild_id = value.initial_guild_id;
          let guildId = initial_guild_id;
          if (initial_guild_id == null) {
            guildId = closure_132_1.guildId;
          }
          closure_132_2 = guildId;
          if (null != closure_132_2) {
            if ("@me" !== closure_132_2) {
              obj1 = closure_133_0(closure_133_2[24]);
              c6 = 3;
              c7 = 1;
              obj7 = { value: obj1.tryLoadAsync(async () => closure_1(7650).getOneAsync(closure_1_0, dependencyMap)), done: false };
              return obj7;
            }
          }
          c7 = 3;
          const obj8 = { value: [], done: true };
          return obj8;
        }
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c7 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        closure_132_3 = value;
        if (null != closure_132_3) {
          const items = [closure_132_3];
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
};
let closure_24 = async function _loadInitialGuildChannels(arg0) {
  if (c6 === 2) {
    c6 = 3;
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
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp5;
          closure_3 = tmp2;
          closure_131_0 = closure_0;
          closure_131_1 = closure_1;
          let initial_guild_id;
          closure_131_3 = undefined;
          if (null == closure_0) {
            c6 = 3;
            const obj1 = { value: Promise.resolve({ channels: null, guildId: null }), done: true };
            return obj1;
          } else {
            let obj6 = NonGuildVersionsDefault;
            c5 = 1;
            c6 = 1;
            let obj2 = { value: obj6.getCommittedVersions(), done: false };
            return obj2;
          }
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          initial_guild_id = value.initial_guild_id;
          let tmp12 = null == initial_guild_id;
          if (tmp12) {
            tmp12 = "guild-channels" === closure_131_1.page;
          }
          if (tmp12) {
            initial_guild_id = closure_131_1.guildId;
          }
          if (null != closure_131_0) {
            if (null != initial_guild_id) {
              closure_131_3 = initial_guild_id;
              value = {};
              obj2 = closure_132_0(closure_132_2[24]);
              c5 = 2;
              c6 = 1;
              const obj4 = { value: obj2.tryLoadAsync(async () => closure_1(closure_2[14]).getAsync(closure_1_0, closure_1_3)), done: false };
              return obj4;
            }
          }
          const _HermesInternal = HermesInternal;
          closure_132_13.verbose("skipped loading initial guild (guild: " + initial_guild_id + ", database: " + closure_131_0 + ")");
          c6 = 3;
          const obj5 = { value: Promise.resolve({ channels: null, guildId: null }), done: true };
          return obj5;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        obj6 = { value, done: true };
        return obj6;
      } else {
        value.channels = value;
        value.guildId = initial_guild_id;
        c6 = 3;
        obj = { value, done: true };
        return obj;
      }
    } catch (tmp34) {
      c6 = tmp;
      throw tmp34;
    }
  }
};
let closure_25 = async function _loadLateLazyCache(arg0) {
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
          closure_5 = tmp2;
          closure_4 = tmp5;
          closure_132_0 = closure_0;
          closure_132_1 = closure_1;
          closure_132_2 = initialGuildId;
          closure_132_3 = privateChannels;
          closure_132_4 = undefined;
          closure_132_5 = undefined;
          closure_132_6 = undefined;
          closure_132_7 = undefined;
          closure_132_8 = undefined;
          closure_132_9 = undefined;
          let socket;
          map1.verbose("loading late lazy cache");
          const fetchLazyCache = TTITrackerDefault.fetchLazyCache;
          c6 = 1;
          c7 = 1;
          let obj1 = {
            value: fetchLazyCache.measureAsync(async () => {
                      const items = [
                        closure_0(initialGuildId[24]).tryLoadAsync(async () => {
                          if (null != closure_1_0) {
                            let timeAsyncResult = closure_2_1(initialGuildId[13]).timeAsync("\u{1F4BE}", "cache: cache_version", async () => closure_2_1(7654).okAsync(closure_1_0));
                            const obj = closure_2_1(initialGuildId[13]);
                          } else {
                            timeAsyncResult = Promise.resolve(true);
                          }
                          return timeAsyncResult;
                        }),
                      ,

                      ];
                      let obj = closure_0(initialGuildId[24]);
                      items[1] = closure_0(initialGuildId[24]).tryLoadAsync(async () => {
                        if (null != closure_1_0) {
                          if (!closure_2_22) {
                            let timeAsyncResult = closure_2_1(initialGuildId[13]).timeAsync("\u{1F4BE}", "cache: lazy guilds", async () => closure_2_1(7650).getAsync(closure_1_0));
                            const obj = closure_2_1(initialGuildId[13]);
                          }
                          return timeAsyncResult;
                        }
                        timeAsyncResult = Promise.resolve([]);
                      });
                      let obj2 = closure_0(initialGuildId[24]);
                      items[2] = closure_0(initialGuildId[24]).tryLoadAsync(async () => {
                        if (null != closure_1_0) {
                          let timeAsyncResult = closure_2_1(initialGuildId[13]).timeAsync("\u{1F4BE}", "cache: basic_channels", async () => closure_2_1(7648).getAsync(closure_1_0));
                          const obj2 = closure_2_1(initialGuildId[13]);
                        } else {
                          const obj = { all: [], stale: [], channels: [] };
                          timeAsyncResult = Promise.resolve(obj);
                        }
                        return timeAsyncResult;
                      });
                      return Promise.all(items);
                    }),
            done: false
          };
          return obj1;
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          let obj2 = { value, done: true };
          return obj2;
        } else {
          closure_132_4 = value;
          closure_132_5 = closure_133_3(closure_132_4, 3);
          closure_132_6 = closure_132_5[0];
          closure_132_7 = closure_132_5[1];
          closure_132_8 = closure_132_5[2];
          const fetchStaleChannels = closure_133_1(closure_133_2[12]).fetchStaleChannels;
          c6 = 2;
          c7 = 1;
          const obj3 = {
            value: fetchStaleChannels.measureAsync(async () => {
                      if (null != closure_1_0) {
                        if (null != closure_1_8) {
                          if (closure_1_8.stale.length > 0) {
                            let tryLoadAsyncResult = closure_0(initialGuildId[24]).tryLoadAsync(async () => {
                              stale = stale.stale;
                              closure_0 = closure_1_0;
                              closure_2_13.verbose("loading stale guild channels (count: " + stale.length + ", ids: " + stale.join(", ") + ")");
                              return Promise.all(stale.map((item) => {
                                closure_0 = item;
                                const async = closure_2_1(initialGuildId[14]).getAsync(closure_0, item);
                                return async.then((result) => {
                                  const items = [closure_0, result];
                                  return items;
                                });
                              }));
                            });
                            const obj = closure_0(initialGuildId[24]);
                          }
                          return tryLoadAsyncResult;
                        }
                      }
                      tryLoadAsyncResult = Promise.resolve([]);
                    }),
            done: false
          };
          return obj3;
        }
      } else {
        if (2 === tmp5) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_132_9 = value;
            const DelayLoadLateLazyCacheHoldoutExperiment = closure_133_0(closure_133_2[29]).DelayLoadLateLazyCacheHoldoutExperiment;
            const verbose = closure_133_13.verbose;
            if (DelayLoadLateLazyCacheHoldoutExperiment.getCachedEnabled()) {
              verbose("loadLateLazyCache: not yielding to react");
            } else {
              verbose("loadLateLazyCache: yielding to react");
              obj1 = closure_133_0(closure_133_2[30]);
              obj2 = closure_133_0(closure_133_2[31]);
              let num4;
              if (obj2.isIOS()) {
                num4 = 0;
              }
              c6 = 3;
              c7 = 1;
              let obj5 = { value: obj1.waitSafelyForPostTTI(num4), done: false };
              return obj5;
            }
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          obj = { value, done: true };
          return obj;
        }
        const loadLazyCache = closure_133_1(closure_133_2[12]).loadLazyCache;
        loadLazyCache.recordStart();
        socket = closure_133_5.getSocket();
        closure_133_26(() => {
          if (false === closure_1_6) {
            closure_1(initialGuildId[21])("database:not_ok");
            closure_1(initialGuildId[23]).dispatch({ type: "CLEAR_CACHES", reason: "database:not_ok" });
            const obj10 = closure_1(initialGuildId[23]);
            closure_1(initialGuildId[23]).dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" });
            const obj11 = closure_1(initialGuildId[23]);
          } else {
            if (null != guilds) {
              if (null != closure_1_8) {
                if (null != guildChannels) {
                  if (null == closure_1_6) {
                    closure_1(initialGuildId[21])("database:versionless");
                    closure_2_13.log("kv_cache was not ok (null version with values)");
                    closure_1(initialGuildId[23]).dispatch({ type: "CLEAR_CACHES", reason: "database:versionless" });
                    const obj6 = closure_1(initialGuildId[23]);
                    closure_1(initialGuildId[23]).dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" });
                    const obj7 = closure_1(initialGuildId[23]);
                  }
                  if (closure_2_18) {
                    closure_1(initialGuildId[21])("already_connected");
                    closure_2_13.log("Skipping lazy cache; already connected.");
                    closure_1(initialGuildId[23]).dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" });
                    const obj5 = closure_1(initialGuildId[23]);
                  } else {
                    closure_1_10.addAnalytics({ hadCacheAtStartup: true });
                    let obj = { type: "CACHE_LOADED_LAZY", guilds, guildChannels, basicGuildChannels: closure_1_8.channels, initialGuildId };
                    const deserializeCache = closure_1(initialGuildId[12]).deserializeCache;
                    deserializeCache.measure(() => {
                      if (null != obj.channels) {
                        closure_2_1(initialGuildId[9])(tmp.channels);
                      }
                      if (null != obj.privateChannels) {
                        closure_2_1(initialGuildId[9])(tmp.privateChannels);
                      }
                      if (null != obj.guildChannels) {
                        obj = closure_2_0(initialGuildId[9]);
                        const result = obj.deserializeChannelEntries(tmp.guildChannels);
                      }
                    });
                    const dispatchLazyCache = closure_1(initialGuildId[12]).dispatchLazyCache;
                    dispatchLazyCache.measure(() => {
                      obj = closure_2_1(initialGuildId[23]);
                      return obj.dispatch(obj);
                    });
                    const _performance = performance;
                    const _HermesInternal = HermesInternal;
                    closure_2_13.verbose("late lazy cache loaded (ok: true, took: " + performance.now() - tmp + "ms)");
                    closure_1_10.addAnalytics({ usedCacheAtStartup: true });
                    const reduced = guildChannels.reduce((acc, item) => {
                      [, arr] = item;
                      return acc + arr.length;
                    }, 0);
                    const all = closure_1_8.all;
                    const reduced1 = all.reduce((acc, item) => {
                      [, arr] = item;
                      return acc + arr.length;
                    }, 0);
                    const channels = closure_1_8.channels;
                    const reduced2 = channels.reduce((acc, item) => {
                      [, arr] = item;
                      return acc + arr.length;
                    }, 0);
                    const diff = reduced1 - reduced2;
                    let str3 = "";
                    if (0 !== closure_1_8.stale.length) {
                      const stale = closure_1_8.stale;
                      const _HermesInternal2 = HermesInternal;
                      str3 = " \u00B7 " + stale.join(", ");
                    }
                    let name;
                    if (closure_1_0 != null) {
                      name = closure_1_0.name;
                    }
                    const _HermesInternal3 = HermesInternal;
                    closure_2_13.verbose("lazy_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: " + closure_1_1 + "\n          initial_guild: " + initialGuildId + "\n          database: " + null != closure_1_0 + "\n            ok: " + closure_1_6 + "\n            name: " + name + "\n        data:\n          database:\n            guilds: " + guilds.length + "\n            basic_channels:\n              total: " + reduced1 + " (" + closure_1_8.channels.length + " guilds)\n              stale: " + diff + " (" + closure_1_8.stale.length + " guilds" + str3 + ")\n              unstale: " + reduced2 + "\n            full_channels (guilds_with_stale_basic_channels):\n              total: " + reduced + " (" + guildChannels.length + " guilds)\n      )");
                    obj = { guilds: guilds.length, privateChannels, basicChannels: reduced1, basicChannelsStale: diff, fullChannels: reduced, fullChannelGuilds: guildChannels.length };
                    closure_1(initialGuildId[12]).setLazyCacheInfo(obj);
                    const tmp10Result = closure_1(initialGuildId[12]);
                  }
                }
              }
            }
            closure_1(initialGuildId[21])("database:load_failed");
            const _HermesInternal4 = HermesInternal;
            closure_2_13.log("couldn't load database item (\n          database: " + null != closure_1_0 + "\n          basic_channels: " + null != closure_1_8 + "\n          guild_channels: " + null != guildChannels + "\n          guilds: " + null != guilds + "\n        )");
            closure_1(initialGuildId[23]).dispatch({ type: "CLEAR_CACHES", reason: "database:load_failed" });
            const obj8 = closure_1(initialGuildId[23]);
            closure_1(initialGuildId[23]).dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" });
            const obj9 = closure_1(initialGuildId[23]);
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
};
function resumeFluxAndSocket(arg0) {
  closure_0 = arg0;
  importDefault = GatewayConnectionStore.getSocket();
  dependencyMap = false;
  const Emitter = initializeDefault.Emitter;
  Emitter.batched(() => {
    try {
      f124807();
      dispatcher = dispatcher.dispatcher;
      if (dispatcher.hasStuffToDispatchNow()) {
        c2 = true;
        const loadLazyCache = closure_2_1(9).loadLazyCache;
        loadLazyCache.recordEnd();
        logger.verbose("Processing First Queued Dispatch");
        const dispatcher3 = tmp3.dispatcher;
        const _Set = Set;
        const set = new Set(["READY", "INITIAL_GUILD"]);
        const result = dispatcher3.processFirstQueuedDispatch(set);
        const _setTimeout = setTimeout;
        const timerId = setTimeout(() => {
          closure_2_13.verbose("Unpausing Dispatch Queue");
          dispatcher = dispatcher.dispatcher;
          dispatcher.unpauseDispatchQueue();
        }, 100);
      } else {
        logger.verbose("Unpausing Dispatch Queue");
        const dispatcher2 = tmp3.dispatcher;
        dispatcher2.unpauseDispatchQueue();
      }
    } catch (tmp19) {
      logger.warn("Lazy cache has encountered error", tmp19);
      let obj = closure_2_1(573);
      obj = { type: "RESET_SOCKET", args: null };
      obj = { error: tmp19, action: "LazyCache" };
      obj.args = obj;
      obj.dispatch(obj);
    }
  });
  if (!dependencyMap) {
    const loadLazyCache = TTITrackerDefault.loadLazyCache;
    loadLazyCache.recordEnd();
  }
}
const Constants = fn(1074);
({ MAX_MESSAGES_PER_CHANNEL: closure_9, CACHE_STORE_KEY: c10, CACHE_STORE_LAZY_KEY: closure_11, CACHE_STORE_CHANNELS_LAZY_KEY: closure_12 } = Constants);
let closure_13 = new LoggerDefault("CacheStore");
let c14 = false;
let c15 = "initializing";
let closure_16 = 0;
let c17 = false;
let c18 = false;
let c19 = false;
let c22 = false;
const Store = initializeDefault.Store;
class CacheStoreClass extends Store {
}
const prototype = CacheStoreClass.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(AuthenticationStore, GatewayConnectionStore, SelectedChannelStore, SelectedGuildStore);
};
prototype["hasCache"] = function hasCache() {
  return c17;
};
prototype["getLazyCacheStatus"] = function getLazyCacheStatus() {
  return c15;
};
Object.defineProperty(prototype, "lastWriteTime", {
  get: function lastWriteTime() {
    return closure_16;
  },
  set: undefined
});
prototype["canWriteCaches"] = function canWriteCaches(arg0) {
  if (obj.isAuthenticated()) {
    if (c14) {
      closure_13.log("Not writing cache because caches cleared");
      let flag2 = false;
    } else {
      let tmp5 = !arg0;
      if (!arg0) {
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
  obj = AuthenticationUtils;
};
prototype["loadCacheAsync"] = function loadCacheAsync(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return (async () => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
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
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            closure_128_2 = undefined;
            closure_128_3 = undefined;
            closure_128_4 = undefined;
            closure_128_5 = undefined;
            closure_128_6 = undefined;
            closure_128_7 = undefined;
            const callOnceResult = tmp5(tmp38[33]).callOnce(tmp3);
            closure_128_0 = callOnceResult;
            const obj13 = tmp5(tmp38[33]);
            tmp3(tmp38[12]).setInitialPage(tmp5.page);
            const guildId = tmp5.guildId;
            const obj14 = tmp3(tmp38[12]);
            let tmp30 = null;
            if (null != guildId) {
              tmp30 = null;
              if ("@me" !== guildId) {
                tmp30 = guildId;
              }
            }
            tmp3(tmp38[12]).setInitialGuildId(tmp30);
            if ("initializing" !== closure_1_15) {
              tmp3(tmp38[21])("cache:lazy_cache_not_initializing");
              callOnceResult();
              let _setTimeout = setTimeout;
              let timerId = setTimeout(() => {
                const socket = closure_1_5.getSocket();
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
              const obj1 = { value: undefined, done: true };
              return obj1;
            } else {
              let v0 = 1;
              id = id.getId();
              closure_128_1 = id;
              closure_128_2 = tmp3(tmp38[34]).carefullyOpenDatabase(id);
              const loadMiniCache = tmp3(tmp38[12]).loadMiniCache;
              c4 = 2;
              c5 = 1;
              const obj2 = {
                value: loadMiniCache.measureAsync(async () => (function loadEarlyCache() {
                            const self = this;
                            const apply = closure_1_21.apply;
                            if (typeof apply === "unknown") {
                              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                            } else {
                              applyArgumentsResult = apply(self, arguments);
                            }
                            return applyArgumentsResult;
                          })(dependencyMap, closure_1_1, closure_0)),
                done: false
              };
              return obj2;
            }
            const obj15 = tmp3(tmp38[12]);
          }
        } else {
          if (1 === tmp8) {
            v0 = 0;
            closure_128_8 = tmp38;
            logger.error("clearing cache. exception encountered while loading cache.", closure_128_8, closure_128_8.stack);
            tmp3(tmp38[21])("cache:exception", closure_128_8);
            closure_128_0();
            let obj5 = tmp3(tmp38[23]);
            const obj3 = { type: "RESET_SOCKET", args: null };
            const obj4 = { error: closure_128_8, action: "loadCacheAsync" };
            obj3.args = obj4;
            obj5.dispatch(obj3);
            c5 = 3;
          } else if (2 === tmp8) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              v0 = 0;
              c5 = 3;
              obj5 = { value, done: true };
              return obj5;
            } else {
              closure_128_3 = value;
              closure_128_4 = v0(closure_128_3, 3);
              closure_128_5 = closure_128_4[0];
              closure_128_6 = closure_128_4[1];
              closure_128_7 = closure_128_4[2];
              closure_128_0();
              if (closure_128_5) {
                c4 = 4;
                c5 = 1;
                const obj6 = {
                  value: (function loadLateLazyCache() {
                                const self = this;
                                const apply = closure_1_25.apply;
                                if (typeof apply === "unknown") {
                                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                                } else {
                                  applyArgumentsResult = apply(self, arguments);
                                }
                                return applyArgumentsResult;
                              })(closure_128_2, closure_128_1, closure_128_6, closure_128_7),
                  done: false
                };
                return obj6;
              } else {
                c4 = 3;
                c5 = 1;
                const obj7 = {
                  value: (function dontLoadLateLazyCache() {
                                const f124807 = () => closure_1(_true[23]).dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" });
                                const socket = closure_5.getSocket();
                                dependencyMap = false;
                                const Emitter = socket(504).Emitter;
                                Emitter.batched(() => {
                                  try {
                                    f124807();
                                    dispatcher = dispatcher.dispatcher;
                                    if (dispatcher.hasStuffToDispatchNow()) {
                                      c2 = true;
                                      const loadLazyCache = closure_2_1(9).loadLazyCache;
                                      loadLazyCache.recordEnd();
                                      logger.verbose("Processing First Queued Dispatch");
                                      const dispatcher3 = tmp3.dispatcher;
                                      const _Set = Set;
                                      const set = new Set(["READY", "INITIAL_GUILD"]);
                                      const result = dispatcher3.processFirstQueuedDispatch(set);
                                      const _setTimeout = setTimeout;
                                      const timerId = setTimeout(() => {
                                        closure_2_13.verbose("Unpausing Dispatch Queue");
                                        dispatcher = dispatcher.dispatcher;
                                        dispatcher.unpauseDispatchQueue();
                                      }, 100);
                                    } else {
                                      logger.verbose("Unpausing Dispatch Queue");
                                      const dispatcher2 = tmp3.dispatcher;
                                      dispatcher2.unpauseDispatchQueue();
                                    }
                                  } catch (tmp19) {
                                    logger.warn("Lazy cache has encountered error", tmp19);
                                    let obj = closure_2_1(573);
                                    obj = { type: "RESET_SOCKET", args: null };
                                    obj = { error: tmp19, action: "LazyCache" };
                                    obj.args = obj;
                                    obj.dispatch(obj);
                                  }
                                });
                                if (!dependencyMap) {
                                  let loadLazyCache = socket(9).loadLazyCache;
                                  loadLazyCache.recordEnd();
                                }
                                return Promise.resolve();
                              })(),
                  done: false
                };
                return obj7;
              }
            }
          } else {
            if (3 === tmp8) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              v0 = 0;
              c5 = 3;
              obj = { value, done: true };
              return obj;
            }
            v0 = 0;
          }
          v0 = 0;
          c5 = 3;
          const obj8 = { value, done: true };
          return obj8;
        }
      } catch (tmp38) {
        if (tmp4 === v0) {
          c5 = tmp2;
          throw tmp38;
        } else {
          c4 = tmp;
        }
      }
    }
  })();
};
CacheStoreClass.displayName = "CacheStore";
const cacheStoreClass = new CacheStoreClass(DispatcherDefault, {
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
    Storage.remove(closure_1_10);
    const Storage2 = Storage4.Storage;
    Storage2.remove(closure_1_12);
    const Storage3 = Storage4.Storage;
    Storage3.remove(closure_1_11);
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/cache/CacheStore.tsx");

export default cacheStoreClass;
export const ENABLE_CACHE_STORE = true;