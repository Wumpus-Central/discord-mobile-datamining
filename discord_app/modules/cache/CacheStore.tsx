// discord_app/modules/cache/CacheStore.tsx
import LoggerDefault from "../debug/Logger.tsx";
import AppStartPerformanceDefault from "../../../discord_common/js/packages/app-start-performance/AppStartPerformance.tsx";
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import Storage4 from "../../../discord_common/js/packages/storage/Storage.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import TryLoad from "../app_database/app/TryLoad.tsx";
import modules_MessagesDefault from "../app_database/modules/Messages.tsx";
import timeRequireDefault from "../../../discord_common/js/shared/timeRequire.native.tsx";
import NonGuildVersionsDefault from "../app_database/modules/NonGuildVersions.tsx";
import AuthenticationUtils from "../../utils/AuthenticationUtils.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import GatewayConnectionStore from "../gateway/GatewayConnectionStore.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import SelectedGuildStore from "../../stores/SelectedGuildStore.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let c3, c4, closure_13, dependencyMap, importDefault, length2, length3, set;

let c10;
let c9;
let closure_12;
let tmp;
let unpackModuleId;
const TTITrackerDefault = tmp(9);
function handleClearCaches(type) {
  closure_13.log("Clearing cache store");
  closure_16 = Date.now();
  const Storage = Storage4.Storage;
  Storage.remove(authStore);
  const Storage2 = Storage4.Storage;
  Storage2.remove(unpackModuleId);
  const Storage3 = Storage4.Storage;
  Storage3.remove(closure_12);
  initializing = "no-cache";
  const tmp5 = "CLEAR_CACHES" === type.type && type.preventWritingCachesAgainThisSession;
  if (tmp5) {
    c14 = true;
  }
}
let obj = function _loadChannelHistory() {
  obj = _asyncToGenerator(async (guildId, channelId, arg2) => {
    let closure_3;
    let closure_2 = arg2;
    let c5 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2) => {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let tmp;
          let obj9;
          let c2;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_4 = tmp4;
              guildId = channelId;
              channelId = closure_2;
              tmp = undefined;
              obj9 = undefined;
              const _performance3 = performance;
              const nowResult = performance.now();
              c2 = nowResult;
              if (null != guildId) {
                if (null != closure_2) {
                  c5 = 1;
                  c6 = 1;
                  const obj5 = modules_MessagesDefault;
                  const obj4 = { value: obj5.startupLoad(guildId, channelId, closure_2, closure_2_9), done: false };
                  return obj4;
                }
              }
              const _HermesInternal = HermesInternal;
              closure_2_13.verbose("skipped loaded messages (channel: " + closure_2 + ", database: " + guildId + ").");
              const _performance = performance;
              const items = [performance.now() - nowResult];
              const obj6 = { guildId: null, channelId: null, users: [], members: [], messages: [] };
              items[1] = obj6;
              c6 = 3;
              return { value: items, done: true };
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            return { value, done: true };
          } else {
            tmp = value;
            const _HermesInternal2 = HermesInternal;
            closure_132_13.verbose(
              "loaded " + tmp.messages.length + " messages (guild: " + guildId + ", channel: " + channelId + ").",
            );
            obj9 = { guildId, channelId, users: tmp.users, members: tmp.members, messages: tmp.messages };
            const obj10 = closure_132_1(closure_132_2[11]);
            const result = obj10.recordChannelFetchedLocal(
              channelId,
              closure_132_0(closure_132_2[11]).INITIAL_MESSAGE_FETCH_KEY,
              null,
              null,
              closure_132_9,
              tmp.messages,
            );
            const _performance2 = performance;
            const items1 = [performance.now() - c2, obj9];
            c6 = 3;
            return { value: items1, done: true };
          }
        } catch (tmp16) {
          c6 = 3;
          throw tmp16;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _loadEarlyCache() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
    let name = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c8 = 0;
    let c9 = 0;
    return (async function (arg0, value, arg2) {
      let length1;
      let resolved;
      let resolved1;
      let resolved2;
      let timeAsyncResult;
      closure_7 = tmp;
      closure_6 = tmp2;
      closure_2_13.verbose("loading early cache");
      socket = socket.getSocket();
      socket.connect();
      const guildId1 = guildId.getGuildId();
      c3 = guildId1;
      if (guildId1 == null) {
        c3 = null;
      }
      let closure_4 = c3;
      const channelId1 = channelId.getChannelId();
      c4 = channelId1;
      if (channelId1 == null) {
        c4 = null;
      }
      let closure_5 = c4;
      const _performance = performance;
      closure_6 = performance.now();
      const loadCachedMessages = TTITrackerDefault.loadCachedMessages;
      const result = loadCachedMessages.measureAsyncWithoutNesting(async () => {
        function loadChannelHistory() {
          return closure_1_20(...arguments);
        }
        return loadChannelHistory(closure_1_0, closure_1_4, closure_1_5);
      });
      const fetchGuildCache = TTITrackerDefault.fetchGuildCache;
      const measureAsyncResult = fetchGuildCache.measureAsync(async () => {
        function loadInitialGuilds() {
          return closure_1_23(...arguments);
        }
        return loadInitialGuilds(closure_1_0, closure_1_2);
      });
      const fetchGuildCache2 = TTITrackerDefault.fetchGuildCache;
      const measureAsyncResult1 = fetchGuildCache2.measureAsync(async () => {
        function loadInitialGuildChannels() {
          return closure_1_24(...arguments);
        }
        return loadInitialGuildChannels(closure_1_0, closure_1_2);
      });
      if (null != name) {
        const obj8 = AppStartPerformanceDefault;
        timeAsyncResult = obj8.timeAsync("\u{1F4BE}", "cache: private_channels", async () => {
          obj = closure_2_1(closure_2_2[14]);
          return obj.getAsync(closure_1_0, null);
        });
      } else {
        timeAsyncResult = Promise.resolve([]);
      }
      if (null == name) {
        resolved = Promise.resolve({});
      } else {
        const obj9 = AppStartPerformanceDefault;
        resolved = obj9.timeAsync("\u{1F4BE}", "cache: user_settings", async () => {
          obj = closure_2_1(closure_2_2[15]);
          return obj.getAll(closure_1_0);
        });
      }
      if (null == name) {
        resolved1 = Promise.resolve([]);
      } else {
        const obj10 = AppStartPerformanceDefault;
        resolved1 = obj10.timeAsync("\u{1F4BE}", "cache: read_states", async () => {
          obj = closure_2_1(closure_2_2[16]);
          return obj.getAll(closure_1_0);
        });
      }
      if (null == name) {
        resolved2 = Promise.resolve([]);
      } else {
        const obj11 = AppStartPerformanceDefault;
        resolved2 = obj11.timeAsync("\u{1F4BE}", "cache: user_guild_settings", async () => {
          obj = closure_2_1(closure_2_2[17]);
          return obj.getAll(closure_1_0);
        });
      }
      timeRequireDefault("AllCacheStores", () => name(closure_1_2[19]));
      timeRequireDefault("MobileAppDatabaseManager", () => name(closure_1_2[20]));
      let items = [result, measureAsyncResult, measureAsyncResult1, timeAsyncResult, resolved, resolved1, resolved2];
      await Promise.all(items);
      closure_7 = value;
      let closure_8 = closure_135_3(closure_7, 7);
      let closure_9 = closure_135_3(closure_8[0], 2);
      let closure_10 = closure_9[0];
      let closure_11 = closure_9[1];
      length = closure_8[1];
      closure_13 = closure_8[2];
      let closure_14 = closure_8[3];
      let closure_15 = closure_8[4];
      length2 = closure_8[5];
      length3 = closure_8[6];
      const _performance2 = performance;
      let closure_18 = performance.now() - closure_6;
      const _HermesInternal2 = HermesInternal;
      closure_135_13.verbose("cache loaded in " + closure_18 + "ms (channel_history " + closure_10 + "ms)");
      if (null == closure_11) {
        closure_135_1(closure_135_2[21])("database:history_cache_null");
        closure_135_13.verbose("finished without dispatching CACHE_LOADED");
        const items1 = [false, null, 0];
        return items1;
      }
      const _Object2 = Object;
      const members = closure_11.members;
      let closure_19 = Object.fromEntries(
        members.map((userId) => {
          const items = [userId.userId, userId];
          return items;
        }),
      );
      let closure_20 = null != closure_13.guildId && null != closure_13.channels;
      guildId = closure_13.guildId;
      const self = this;
      const self2 = this;
      const tmp51 = null != closure_13.guildId && null != closure_13.channels;
      const promise = new Promise((arg0, arg1) => {
        let guilds;
        let privateChannels;
        let readStates;
        let userGuildSettings;
        let userSettings;
        let closure_0 = arg0;
        closure_1 = arg1;
        const Emitter = closure_1_1(closure_1_2[22]).Emitter;
        return Emitter.batched(() => {
          obj = closure_1(closure_2[13]);
          obj.time("\u{1F4BE}", "Dispatch Mini Cache", () => {
            let items;
            let obj2;
            let obj3;
            obj = {
              type: "CACHE_LOADED",
              guilds,
              privateChannels,
              initialGuildChannels: channels,
              users: items,
              messages: obj2,
              guildMembers: obj3,
              userSettings,
              userGuildSettings,
              readStates,
            };
            channels = channels.channels;
            const dispatch = closure_3_1(closure_3_2[23]).dispatch;
            closure_3_1(closure_3_2[23]);
            if (channels == null) {
              channels = [];
            }
            items = [...closure_2_11.users];
            if (null == closure_2_11.channelId) {
              obj2 = {};
            } else {
              obj2 = {};
              obj2[closure_2_11.channelId] = closure_2_11.messages;
            }
            if (null == closure_2_11.guildId) {
              obj3 = {};
            } else {
              obj3 = {};
              obj3[closure_2_11.guildId] = closure_2_19;
            }
            const dispatchResult = dispatch(obj);
            return dispatchResult.then(closure_1_0, closure_1_1);
          });
          let obj2 = closure_1(closure_2[13]);
          obj2.time("\u{1F4BE}", "socket.processFirstQueuedDispatch()", () => {
            dispatcher = dispatcher.dispatcher;
            const processFirstQueuedDispatch = dispatcher.processFirstQueuedDispatch;
            set = new Set(["INITIAL_GUILD"]);
            return processFirstQueuedDispatch(set);
          });
        });
      });
      await promise;
      const _JSON = JSON;
      const verbose = closure_135_13.verbose;
      const json = JSON.stringify(closure_2);
      if (name != null) {
        name = name.name;
      }
      length = closure_14.length;
      guildId = closure_11.guildId;
      channelId = closure_11.channelId;
      length2 = closure_11.messages.length;
      length3 = closure_11.members.length;
      let channels = closure_13.channels;
      if (channels != null) {
        length1 = channels.length;
      }
      const _Object = Object;
      const _HermesInternal = HermesInternal;
      verbose(
        "early_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: " +
          closure_1 +
          "\n          selected_guild: " +
          closure_4 +
          "\n          selected_channel: " +
          closure_5 +
          "\n          navigation_state: " +
          json +
          "\n          database: " +
          null !=
          name +
            "\n            name: " +
            name +
            "\n        data:\n          database:\n            private_channels: " +
            length +
            "\n            channel_history:\n              guild: " +
            guildId +
            "\n              channel: " +
            channelId +
            "\n              messages: " +
            length2 +
            "\n                members: " +
            length3 +
            "\n                users: " +
            closure_11.users.length +
            "\n            initial_guild:\n              id: " +
            guildId +
            "\n              channels: " +
            length1 +
            "\n            user_settings: " +
            Object.keys(closure_15).length +
            "\n            read_states: " +
            length2.length +
            "\n            user_guild_settings: " +
            length3.length +
            "\n      )",
      );
      obj = closure_135_1(closure_135_2[12]);
      const obj13 = { guilds: length.length };
      obj.setEarlyCacheInfo(obj13);
      closure_135_13.verbose("finished dispatching CACHE_LOADED");
      const items2 = [true, ,];
      let tmp44 = null;
      if (closure_20) {
        c5 = guildId;
        if (guildId == null) {
          c5 = null;
        }
        tmp44 = c5;
      }
      items2[1] = tmp44;
      items2[2] = closure_14.length;
      return items2;
    })();
  });
  return obj(...arguments);
};
obj = function _loadInitialGuilds() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let closure_0 = arg0;
    let guildId = arg1;
    let c6 = 0;
    let c7 = 0;
    return (async (arg0, value) => {
      let obj11;
      let obj3;
      let obj9;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let closure_3;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_5 = tmp;
              closure_4 = tmp4;
              value = undefined;
              closure_3 = undefined;
              if (null == closure_0) {
                c7 = 3;
                return { value: [], done: true };
              } else {
                const page = tmp32.page;
                if ("private-channels" !== page) {
                  if ("guild-channels" !== page) {
                    if ("other" === page) {
                      if ("@me" === guildId.guildId) {
                        c22 = true;
                      }
                    }
                  }
                  const tmp21 = c22;
                  if (tmp21) {
                    c6 = 1;
                    c7 = 1;
                    const obj6 = {
                      value: obj11.tryLoadAsync(async () => {
                        obj = guildId(closure_2_2[13]);
                        return obj.timeAsync("\u{1F4BE}", "cache: guilds", async () => {
                          obj = closure_2_1(closure_2_2[25]);
                          return obj.getAsync(closure_1_0);
                        });
                      }),
                      done: false,
                    };
                    obj11 = TryLoad;
                    return obj6;
                  } else {
                    c6 = 2;
                    c7 = 1;
                    const obj7 = { value: obj9.getCommittedVersions(), done: false };
                    obj9 = NonGuildVersionsDefault;
                    return obj7;
                  }
                }
                c22 = true;
              }
            }
          } else if (1 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              if (value == null) {
                value = [];
              }
              c7 = 3;
              return { value, done: true };
            }
          } else if (2 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              const initial_guild_id = value.initial_guild_id;
              guildId = initial_guild_id;
              if (initial_guild_id == null) {
                guildId = guildId.guildId;
              }
              value = guildId;
              if (null != value) {
                if ("@me" !== value) {
                  c6 = 3;
                  c7 = 1;
                  const obj13 = {
                    value: obj3.tryLoadAsync(async () => {
                      obj = guildId(closure_2[25]);
                      return obj.getOneAsync(closure_1_0, closure_1_2);
                    }),
                    done: false,
                  };
                  obj3 = closure_133_0(closure_133_2[24]);
                  return obj13;
                }
              }
              c7 = 3;
              return { value: [], done: true };
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            return { value, done: true };
          } else {
            let items1;
            closure_3 = value;
            if (null != closure_3) {
              const items = [closure_3];
              items1 = items;
            } else {
              items1 = [];
            }
            c7 = 3;
            obj = { value: items1, done: true };
            return obj;
          }
        } catch (tmp26) {
          c7 = 3;
          throw tmp26;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _loadInitialGuildChannels() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let obj3;
    let obj7;
    let value;
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (c6 === 2) {
      c6 = 3;
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
        let guildId;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_4 = tmp4;
            guildId = undefined;
            let closure_3;
            if (null == closure_0) {
              c6 = 3;
              const obj5 = { value: Promise.resolve({ channels: null, guildId: null }), done: true };
              return obj5;
            } else {
              c5 = 1;
              c6 = 1;
              const obj6 = { value: obj7.getCommittedVersions(), done: false };
              obj7 = NonGuildVersionsDefault;
              return obj6;
            }
          }
        } else if (1 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            guildId = value.initial_guild_id;
            const tmp11 = null == guildId && "guild-channels" === closure_1.page;
            if (tmp11) {
              guildId = closure_1.guildId;
            }
            if (null != closure_0) {
              if (null != guildId) {
                closure_3 = guildId;
                value = {};
                c5 = 2;
                c6 = 1;
                const obj9 = {
                  value: obj3.tryLoadAsync(async () => {
                    obj = closure_1(closure_2[14]);
                    return obj.getAsync(closure_1_0, closure_1_3);
                  }),
                  done: false,
                };
                obj3 = closure_132_0(closure_132_2[24]);
                return obj9;
              }
            }
            const _HermesInternal = HermesInternal;
            closure_132_13.verbose(
              "skipped loading initial guild (guild: " + guildId + ", database: " + closure_0 + ")",
            );
            c6 = 3;
            const obj10 = { value: Promise.resolve({ channels: null, guildId: null }), done: true };
            return obj10;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj11 = { value, done: true };
          return obj11;
        } else {
          value.channels = value;
          value.guildId = guildId;
          c6 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp33) {
        c6 = 3;
        throw tmp33;
      }
    }
  });
  return obj(...arguments);
};
obj = function _loadLateLazyCache() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2, arg3) => {
    let closure_1;
    let closure_2;
    let closure_3;
    if (c7 === 2) {
      c7 = 3;
      let str3 = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let closure_4;
        let closure_5;
        c7 = 2;
        const tmp4 = c6;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            let obj4 = { value, done: true };
            return obj4;
          } else {
            closure_4 = undefined;
            closure_5 = undefined;
            let closure_6;
            let guilds;
            let closure_8;
            let guildChannels;
            let socket;
            const str4 = "loading late lazy cache";
            const verboseResult = closure_2_13.verbose("loading late lazy cache");
            const fetchLazyCache = TTITrackerDefault.fetchLazyCache;
            c6 = 1;
            c7 = 1;
            let obj5 = {
              value: fetchLazyCache.measureAsync(async () => {
                obj = closure_2_0(initialGuildId[24]);
                const items = [
                  obj.tryLoadAsync(async () => {
                    let timeAsyncResult;
                    if (null != closure_1_0) {
                      obj = closure_2_1(initialGuildId[13]);
                      timeAsyncResult = obj.timeAsync("\u{1F4BE}", "cache: cache_version", async () => {
                        obj = closure_2_1(closure_2_2[27]);
                        return obj.okAsync(closure_1_0);
                      });
                    } else {
                      timeAsyncResult = Promise.resolve(true);
                    }
                    return timeAsyncResult;
                  }),
                  ,
                ];
                let obj2 = closure_2_0(initialGuildId[24]);
                items[1] = obj2.tryLoadAsync(async () => {
                  if (null != closure_1_0) {
                    let timeAsyncResult;
                    if (!closure_2_22) {
                      obj = closure_2_1(initialGuildId[13]);
                      timeAsyncResult = obj.timeAsync("\u{1F4BE}", "cache: lazy guilds", async () => {
                        obj = closure_2_1(closure_2_2[25]);
                        return obj.getAsync(closure_1_0);
                      });
                    }
                    return timeAsyncResult;
                  }
                  timeAsyncResult = Promise.resolve([]);
                });
                const obj3 = closure_2_0(initialGuildId[24]);
                items[2] = obj3.tryLoadAsync(async () => {
                  let timeAsyncResult;
                  if (null != closure_1_0) {
                    const obj2 = closure_2_1(initialGuildId[13]);
                    timeAsyncResult = obj2.timeAsync("\u{1F4BE}", "cache: basic_channels", async () => {
                      obj = closure_2_1(closure_2_2[28]);
                      return obj.getAsync(closure_1_0);
                    });
                  } else {
                    obj = { all: [], stale: [], channels: [] };
                    timeAsyncResult = Promise.resolve(obj);
                  }
                  return timeAsyncResult;
                });
                return all(items);
              }),
              done: false,
            };
            return obj5;
          }
        } else if (1 === tmp4) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            let obj6 = { value, done: true };
            return obj6;
          } else {
            closure_4 = value;
            closure_5 = closure_133_3(closure_4, 3);
            closure_6 = closure_5[0];
            guilds = closure_5[1];
            closure_8 = closure_5[2];
            const fetchStaleChannels = closure_133_1(closure_133_2[12]).fetchStaleChannels;
            c6 = 2;
            c7 = 1;
            let obj7 = {
              value: fetchStaleChannels.measureAsync(async () => {
                if (null != closure_1_0) {
                  if (null != closure_1_8) {
                    let tryLoadAsyncResult;
                    if (closure_1_8.stale.length > 0) {
                      obj = closure_0(initialGuildId[24]);
                      tryLoadAsyncResult = obj.tryLoadAsync(async () => {
                        stale = stale.stale;
                        closure_0 = closure_1_0;
                        closure_2_13.verbose(
                          "loading stale guild channels (count: " + stale.length + ", ids: " + stale.join(", ") + ")",
                        );
                        return Promise.all(
                          stale.map((item) => {
                            closure_0 = item;
                            obj = closure_2_1(closure_2_2[14]);
                            const async = obj.getAsync(closure_0, item);
                            return async.then((result) => {
                              const items = [closure_0, result];
                              return items;
                            });
                          }),
                        );
                      });
                    }
                    return tryLoadAsyncResult;
                  }
                }
                tryLoadAsyncResult = Promise.resolve([]);
              }),
              done: false,
            };
            return obj7;
          }
        } else {
          if (2 === tmp4) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              let obj8 = { value, done: true };
              return obj8;
            } else {
              guildChannels = value;
              const DelayLoadLateLazyCacheHoldoutExperiment = closure_133_0(
                closure_133_2[29],
              ).DelayLoadLateLazyCacheHoldoutExperiment;
              let verbose = closure_133_13.verbose;
              if (DelayLoadLateLazyCacheHoldoutExperiment.getCachedEnabled()) {
                const str2 = "loadLateLazyCache: not yielding to react";
                const verboseResult1 = verbose("loadLateLazyCache: not yielding to react");
              } else {
                const str = "loadLateLazyCache: yielding to react";
                verbose("loadLateLazyCache: yielding to react");
                const waitSafelyForPostTTI = closure_133_0(closure_133_2[30]).waitSafelyForPostTTI;
                const tmp8 = closure_133_0(closure_133_2[30]);
                let obj2 = closure_133_0(closure_133_2[31]);
                let num4;
                if (obj2.isIOS()) {
                  num4 = 0;
                }
                c6 = 3;
                c7 = 1;
                let obj9 = { value: waitSafelyForPostTTI(num4), done: false };
                return obj9;
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
              const obj9 = closure_1(initialGuildId[23]);
              obj9.dispatch({ type: "CLEAR_CACHES", reason: "database:not_ok" });
              const obj10 = closure_1(initialGuildId[23]);
              obj10.dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" });
            } else {
              if (null != guilds) {
                if (null != closure_1_8) {
                  if (null != guildChannels) {
                    if (null == closure_1_6) {
                      closure_1(initialGuildId[21])("database:versionless");
                      closure_2_13.log("kv_cache was not ok (null version with values)");
                      const obj5 = closure_1(initialGuildId[23]);
                      obj5.dispatch({ type: "CLEAR_CACHES", reason: "database:versionless" });
                      const obj6 = closure_1(initialGuildId[23]);
                      obj6.dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" });
                    }
                    if (closure_2_18) {
                      closure_1(initialGuildId[21])("already_connected");
                      closure_2_13.log("Skipping lazy cache; already connected.");
                      const obj4 = closure_1(initialGuildId[23]);
                      obj4.dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" });
                    } else {
                      closure_1_10.addAnalytics({ hadCacheAtStartup: true });
                      obj = {
                        type: "CACHE_LOADED_LAZY",
                        guilds,
                        guildChannels,
                        basicGuildChannels: closure_1_8.channels,
                        initialGuildId,
                      };
                      const deserializeCache = closure_1(initialGuildId[12]).deserializeCache;
                      deserializeCache.measure(() => {
                        if (null != obj.channels) {
                          closure_2_1(initialGuildId[9])(obj.channels);
                        }
                        if (null != obj.privateChannels) {
                          closure_2_1(initialGuildId[9])(obj.privateChannels);
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
                      closure_2_13.verbose(
                        "late lazy cache loaded (ok: true, took: " + performance.now() - tmp + "ms)",
                      );
                      closure_1_10.addAnalytics({ usedCacheAtStartup: true });
                      const reduced = guildChannels.reduce((acc, item) => {
                        let arr;
                        [, arr] = item;
                        return acc + arr.length;
                      }, 0);
                      const all = closure_1_8.all;
                      const length = guildChannels.length;
                      const reduced1 = all.reduce((acc, item) => {
                        let arr;
                        [, arr] = item;
                        return acc + arr.length;
                      }, 0);
                      const channels = closure_1_8.channels;
                      const reduced2 = channels.reduce((acc, item) => {
                        let arr;
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
                      const verbose = closure_2_13.verbose;
                      if (closure_1_0 != null) {
                        name = closure_1_0.name;
                      }
                      const _HermesInternal3 = HermesInternal;
                      verbose(
                        "lazy_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: " +
                          closure_1_1 +
                          "\n          initial_guild: " +
                          initialGuildId +
                          "\n          database: " +
                          null !=
                          closure_1_0 +
                            "\n            ok: " +
                            closure_1_6 +
                            "\n            name: " +
                            name +
                            "\n        data:\n          database:\n            guilds: " +
                            guilds.length +
                            "\n            basic_channels:\n              total: " +
                            reduced1 +
                            " (" +
                            closure_1_8.channels.length +
                            " guilds)\n              stale: " +
                            diff +
                            " (" +
                            closure_1_8.stale.length +
                            " guilds" +
                            str3 +
                            ")\n              unstale: " +
                            reduced2 +
                            "\n            full_channels (guilds_with_stale_basic_channels):\n              total: " +
                            reduced +
                            " (" +
                            guildChannels.length +
                            " guilds)\n      )",
                      );
                      const obj2 = {
                        guilds: guilds.length,
                        privateChannels,
                        basicChannels: reduced1,
                        basicChannelsStale: diff,
                        fullChannels: reduced,
                        fullChannelGuilds: length,
                      };
                      const tmp10Result = closure_1(initialGuildId[12]);
                      tmp10Result.setLazyCacheInfo(obj2);
                    }
                  }
                }
              }
              closure_1(initialGuildId[21])("database:load_failed");
              const _HermesInternal4 = HermesInternal;
              closure_2_13.log(
                ((("couldn't load database item (\n          database: " + null !=
                  closure_1_0 + "\n          basic_channels: " + null) !=
                  closure_1_8 + "\n          guild_channels: " + null) !=
                  guildChannels + "\n          guilds: " + null) !=
                  guilds + "\n        )",
              );
              const obj7 = closure_1(initialGuildId[23]);
              obj7.dispatch({ type: "CLEAR_CACHES", reason: "database:load_failed" });
              const obj8 = closure_1(initialGuildId[23]);
              obj8.dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" });
            }
          });
          c7 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp20) {
        c7 = 3;
        throw tmp20;
      }
    }
  });
  return obj(...arguments);
};
function resumeFluxAndSocket(arg0) {
  let c2;
  let closure_1;
  let closure_0 = arg0;
  importDefault = GatewayConnectionStore.getSocket();
  dependencyMap = false;
  const Emitter = get_initializedDefault.Emitter;
  Emitter.batched(function () {
    let dispatcher;
    let obj3;
    try {
      f154466();
      dispatcher = dispatcher.dispatcher;
      if (dispatcher.hasStuffToDispatchNow()) {
        let c2 = true;
        const loadLazyCache = closure_2_1(closure_2_2[12]).loadLazyCache;
        loadLazyCache.recordEnd();
        logger.verbose("Processing First Queued Dispatch");
        const dispatcher3 = tmp3.dispatcher;
        const _Set = Set;
        const self = this;
        const self2 = this;
        const processFirstQueuedDispatch = dispatcher3.processFirstQueuedDispatch;
        set = new Set(["READY", "INITIAL_GUILD"]);
        const result = processFirstQueuedDispatch(set);
        _setTimeout = setTimeout;
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
    } catch (tmp17) {
      logger.warn("Lazy cache has encountered error", tmp17);
      const obj2 = { type: "RESET_SOCKET", args: obj3 };
      obj3 = { error: tmp17, action: "LazyCache" };
      obj = closure_2_1(closure_2_2[23]);
      obj.dispatch(obj2);
    }
  });
  const tmp4 = dependencyMap;
  if (!tmp4) {
    const loadLazyCache = TTITrackerDefault.loadLazyCache;
    loadLazyCache.recordEnd();
  }
}
({
  MAX_MESSAGES_PER_CHANNEL: c9,
  CACHE_STORE_KEY: c10,
  CACHE_STORE_LAZY_KEY: unpackModuleId,
  CACHE_STORE_CHANNELS_LAZY_KEY: closure_12,
} = Constants);
const tmp3 = new LoggerDefault("CacheStore");
let c14 = false;
let initializing = "initializing";
let closure_16 = 0;
let c17 = false;
let c18 = false;
let c19 = false;
let c22 = false;
const Store = get_initializedDefault.Store;
class CacheStoreClass extends Store {
  initialize() {
    this.waitFor(AuthenticationStore, GatewayConnectionStore, SelectedChannelStore, SelectedGuildStore);
  }
  hasCache() {
    return c17;
  }
  getLazyCacheStatus() {
    return initializing;
  }
  canWriteCaches(flag) {
    obj = AuthenticationUtils;
    if (obj.isAuthenticated()) {
      let flag2;
      if (c14) {
        closure_13.log("Not writing cache because caches cleared");
        flag2 = false;
      } else {
        flag2 = !tmp5;
        if (!flag && !c19) {
          closure_13.log("Not writing cache because never connected");
          flag2 = false;
        }
      }
      flag = flag2;
    } else {
      closure_13.log("Not writing cache because not authenticated");
      flag = false;
    }
    return flag;
  }
  loadCacheAsync(arg0, arg1) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    return (async () => {
      let obj8;
      let tmp;
      function loadLateLazyCache() {
        return closure_1_25(...arguments);
      }
      function dontLoadLateLazyCache() {
        let _true;
        const f154466 = () => {
          obj = closure_1(c2[23]);
          return obj.dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" });
        };
        const socket = closure_5.getSocket();
        let c2 = false;
        const Emitter = socket(c2[22]).Emitter;
        Emitter.batched(function () {
          let dispatcher;
          let obj3;
          try {
            f154466();
            dispatcher = dispatcher.dispatcher;
            if (dispatcher.hasStuffToDispatchNow()) {
              let c2 = true;
              const loadLazyCache = closure_2_1(closure_2_2[12]).loadLazyCache;
              loadLazyCache.recordEnd();
              logger.verbose("Processing First Queued Dispatch");
              const dispatcher3 = tmp3.dispatcher;
              const _Set = Set;
              const self = this;
              const self2 = this;
              const processFirstQueuedDispatch = dispatcher3.processFirstQueuedDispatch;
              set = new Set(["READY", "INITIAL_GUILD"]);
              const result = processFirstQueuedDispatch(set);
              _setTimeout = setTimeout;
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
          } catch (tmp17) {
            logger.warn("Lazy cache has encountered error", tmp17);
            const obj2 = { type: "RESET_SOCKET", args: obj3 };
            obj3 = { error: tmp17, action: "LazyCache" };
            obj = closure_2_1(closure_2_2[23]);
            obj.dispatch(obj2);
          }
        });
        const tmp = socket;
        const tmp2 = c2;
        const tmp4 = c2;
        if (!tmp4) {
          let loadLazyCache = tmp(tmp2[12]).loadLazyCache;
          loadLazyCache.recordEnd();
        }
        return Promise.resolve();
      }
      if (c5 === 2) {
        c5 = 3;
        const str = "Generator functions may not be called on executing generators";
        throw new TypeError("Generator functions may not be called on executing generators");
      } else {
        const str2 = "cache:lazy_cache_not_initializing";
        const str3 = "initializing";
        if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            let obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          let v0;
          let closure_2;
          try {
            let _setTimeout;
            let id;
            let closure_3;
            let closure_4;
            let closure_5;
            let closure_6;
            let closure_7;
            c5 = 2;
            let tmp4 = c4;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                let obj3 = { value, done: true };
                return obj3;
              } else {
                _setTimeout = undefined;
                id = undefined;
                closure_2 = undefined;
                closure_3 = undefined;
                closure_4 = undefined;
                closure_5 = undefined;
                closure_6 = undefined;
                closure_7 = undefined;
                const obj13 = _setTimeout(closure_2[33]);
                const callOnceResult = obj13.callOnce(tmp);
                _setTimeout = callOnceResult;
                const obj14 = tmp(closure_2[12]);
                obj14.setInitialPage(_setTimeout.page);
                const guildId = _setTimeout.guildId;
                let tmp26 = null;
                const setInitialGuildId = tmp(closure_2[12]).setInitialGuildId;
                const tmp62 = tmp(closure_2[12]);
                if (null != guildId) {
                  tmp26 = null;
                  if ("@me" !== guildId) {
                    tmp26 = guildId;
                  }
                }
                setInitialGuildId(tmp26);
                if ("initializing" !== initializing) {
                  tmp(closure_2[21])("cache:lazy_cache_not_initializing");
                  callOnceResult();
                  _setTimeout = setTimeout;
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
                  const obj4 = { value: undefined, done: true };
                  return obj4;
                } else {
                  v0 = 1;
                  id = id.getId();
                  const obj15 = tmp(closure_2[34]);
                  closure_2 = obj15.carefullyOpenDatabase(id);
                  const loadMiniCache = tmp(closure_2[12]).loadMiniCache;
                  c4 = 2;
                  c5 = 1;
                  const obj5 = {
                    value: loadMiniCache.measureAsync(async () => {
                      function loadEarlyCache() {
                        return closure_1_21(...arguments);
                      }
                      return loadEarlyCache(closure_1_2, closure_1_1, _setTimeout);
                    }),
                    done: false,
                  };
                  return obj5;
                }
              }
            } else {
              if (1 === tmp4) {
                v0 = 0;
                const error = closure_2;
                logger.error("clearing cache. exception encountered while loading cache.", error, error.stack);
                const tmp17 = closure_2;
                tmp(closure_2[21])("cache:exception", error);
                _setTimeout();
                const obj7 = { type: "RESET_SOCKET", args: obj8 };
                obj8 = { error, action: "loadCacheAsync" };
                const obj6 = tmp(closure_2[23]);
                const dispatchResult = obj6.dispatch(obj7);
              } else if (2 === tmp4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  v0 = 0;
                  c5 = 3;
                  const obj9 = { value, done: true };
                  return obj9;
                } else {
                  closure_3 = value;
                  closure_4 = v0(closure_3, 3);
                  closure_5 = closure_4[0];
                  closure_6 = closure_4[1];
                  closure_7 = closure_4[2];
                  _setTimeout();
                  if (closure_5) {
                    _setTimeout = loadLateLazyCache(closure_2, id, closure_6, closure_7);
                    c4 = 4;
                    c5 = 1;
                    const obj10 = { value: _setTimeout, done: false };
                    return obj10;
                  } else {
                    c4 = 3;
                    c5 = 1;
                    const obj11 = { value: dontLoadLateLazyCache(), done: false };
                    return obj11;
                  }
                }
              } else {
                if (3 === tmp4) {
                  if (arg0 === 1) {
                    c5 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    v0 = 0;
                    c5 = 3;
                    const obj12 = { value, done: true };
                    return obj12;
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
              c5 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp34) {
            closure_2 = tmp34;
            if (0 === v0) {
              c5 = 3;
              throw tmp34;
            } else {
              c4 = 1;
            }
          }
        }
      }
    })();
  }
}
Object.defineProperty(CacheStoreClass.prototype, "lastWriteTime", {
  get: function lastWriteTime() {
    return closure_16;
  },
  set: undefined,
});
CacheStoreClass.displayName = "CacheStore";
obj = {
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
    initializing = "cache-loaded";
  },
  CACHE_LOADED_LAZY_NO_CACHE: function handleCacheLoadedLazyNoCache() {
    initializing = "no-cache";
  },
  CLEAR_CACHES: handleClearCaches,
  WRITE_CACHES: function saveCaches() {
    closure_13.verbose("Writing cache now");
    closure_16 = Date.now();
    c17 = true;
    const Storage = Storage4.Storage;
    Storage.remove(authStore);
    const Storage2 = Storage4.Storage;
    Storage2.remove(closure_12);
    const Storage3 = Storage4.Storage;
    Storage3.remove(unpackModuleId);
  },
};
const cacheStoreClass = new CacheStoreClass(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/cache/CacheStore.tsx");

export default cacheStoreClass;
export const ENABLE_CACHE_STORE = true;
