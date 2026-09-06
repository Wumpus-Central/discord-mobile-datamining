// discord_app/modules/message_previews/MessagePreviewManager.tsx
import LoggerDefault from "../debug/Logger.tsx";
import _modDef12 from "../../../_runtime/metro/00012__.js";
import RemoteFetchData from "RemoteFetchData.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import GatewayConnectionStore from "../gateway/GatewayConnectionStore.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import MessagePreviewStore from "MessagePreviewStore.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";

require = fn;
const isThread = fn(1961).isThread;
const Endpoints = fn(1074).Endpoints;
let closure_11 = new LoggerDefault("MessagePreviewManager");
class MessagePreviewManager extends tmp3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    map = new Map();
    applyArgumentsResult.remote = map;
    applyArgumentsResult.remoteTicking = false;
    applyArgumentsResult.tickQueued = false;
    set = new Set();
    applyArgumentsResult.localFetching = set;
    applyArgumentsResult.actions = {
      CONNECTION_OPEN_SUPPLEMENTAL() {
        return applyArgumentsResult.handleConnectionOpenSupplemental();
      },
      CONNECTION_RESUMED() {
        return applyArgumentsResult.handleConnectionResumed();
      },
      GUILD_CREATE(arg0) {
        return applyArgumentsResult.handleGuildCreate(arg0);
      },
      GUILD_DELETE(arg0) {
        return applyArgumentsResult.handleGuildDelete(arg0);
      },
      LOAD_MESSAGES_SUCCESS(channelId) {
        return applyArgumentsResult.handleMessagesLoaded(channelId);
      },
      LOCAL_MESSAGES_LOADED(channelId) {
        return applyArgumentsResult.handleMessagesLoaded(channelId);
      },
      LOGOUT() {
        return applyArgumentsResult.handleLogout();
      },
      MESSAGE_CREATE(arg0) {
        return applyArgumentsResult.handleMessageCreate(arg0);
      },
      MESSAGE_DELETE(arg0) {
        return applyArgumentsResult.handleMessageDelete(arg0);
      },
      MESSAGE_UPDATE(arg0) {
        return applyArgumentsResult.handleMessageUpdate(arg0);
      },
      THREAD_LIST_SYNC(arg0) {
        return applyArgumentsResult.handleThreadListSync(arg0);
      },
    };
    obj = closure_1(closure_2[10]);
    closure_129_0 = applyArgumentsResult;
    applyArgumentsResult.remoteTick = obj.debounce(
      closure_4(async (arg0, value) => {
        if (c8 === 2) {
          c8 = 3;
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
          while (true) {
            c8 = 2;
            let tmp4 = c7;
            if (0 === c7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                closure_4 = tmp;
                closure_3 = tmp4;
                closure_131_0 = undefined;
                let num8 = closure_0;
                if (closure_0 === undefined) {
                  num8 = 0;
                }
                closure_131_0 = num8;
                closure_131_1 = undefined;
                closure_131_2 = undefined;
                closure_131_3 = undefined;
                closure_131_4 = undefined;
                c7 = 1;
                c8 = 1;
                return { value: "PX_16", done: true };
              }
            } else {
              if (1 === tmp4) {
                if (arg0 === 1) {
                  c8 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c8 = 3;
                  let obj1 = { value, done: true };
                  return obj1;
                } else {
                  let tmp49 = closure_132_0;
                  if (connected.isConnected()) {
                    if (!tmp49.remoteTicking) {
                      if (closure_131_0 <= 5) {
                        closure_132_0.tickQueued = false;
                        c6 = 1;
                        closure_132_0.remoteTicking = true;
                        let remote = closure_132_0.remote;
                        closure_1 = remote[Symbol.iterator]();
                        if (closure_1 === undefined) {
                          let cleanupResult = closure_132_0.cleanup();
                          closure_132_0.remoteTicking = false;
                          c6 = 0;
                        } else {
                          c6 = 2;
                          closure_131_1 = tmp25;
                          closure_131_2 = closure_3(closure_131_1, 2);
                          closure_131_3 = closure_131_2[0];
                          closure_131_4 = closure_131_2[1];
                          if (null == closure_131_3) {
                            let dms = closure_132_0.fetchDms(closure_131_4);
                          } else {
                            let guilds = closure_132_0.fetchGuilds(closure_131_3, closure_131_4);
                          }
                          c7 = 4;
                          c8 = 1;
                        }
                      }
                    }
                  } else {
                    tmp49.tickQueued = true;
                  }
                }
              } else if (2 === tmp4) {
                c6 = 0;
                closure_131_5 = connected;
                let _HermesInternal = HermesInternal;
                let str = "couldn't fetch message previews (attempt: ";
                let str2 = ", error: ";
                let str3 = ")";
                let logResult = logger.log(
                  "couldn't fetch message previews (attempt: " + closure_131_0 + ", error: " + closure_131_5 + ")",
                );
                closure_132_0.remoteTicking = false;
                let remoteTickResult = closure_132_0.remoteTick(closure_131_0 + 1);
              } else if (3 === tmp4) {
                c6 = 1;
                closure_1.return();
                throw connected;
              } else if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                closure_1.return();
                c6 = 0;
                c8 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                c6 = 1;
              }
              c8 = 3;
            }
          }
        }
      }),
      100,
    );
    return applyArgumentsResult;
  }
}
const prototype = MessagePreviewManager.prototype;
prototype["addWant"] = function addWant(arg0) {
  const basicChannel = ChannelStore.getBasicChannel(arg0);
  if (null != basicChannel) {
    let guild_id = basicChannel.guild_id;
    if (guild_id == null) {
      guild_id = null;
    }
    let isLatestResult = isThread(basicChannel.type);
    if (!isLatestResult) {
      isLatestResult = MessagePreviewStore.isLatest(guild_id, arg0);
    }
    if (!isLatestResult) {
      const self = this;
      const orCreate = this.getOrCreate(guild_id);
      orCreate.addWant(arg0);
      const local = this.fetchLocal(guild_id);
      this.remoteTick();
    }
  }
};
prototype["fetchLocal"] = function fetchLocal(guild_id) {
  closure_0 = guild_id;
  const self = this;
  return (async (arg0, value) => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp8 === 3) {
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
            closure_0 = tmp6;
            let id;
            closure_128_1 = undefined;
            if (localFetchNeeded.isLocalFetchNeeded(closure_0)) {
              const localFetching4 = self.localFetching;
              if (!localFetching4.has(closure_0)) {
                c3 = 2;
                const _HermesInternal2 = HermesInternal;
                closure_1_11.verbose("fetching local previews (via: database, guild_id: " + closure_0 + ")");
                const localFetching5 = self.localFetching;
                localFetching5.add(closure_0);
                id = AuthenticationStore.getId();
                let obj3 = tmp4(tmp56[11]);
                const messagesResult = obj3.messages();
                let mostRecents;
                if (messagesResult != null) {
                  mostRecents = messagesResult.getMostRecents(closure_0);
                }
                c4 = 3;
                c5 = 1;
                const obj1 = { value: mostRecents, done: false };
                return obj1;
              }
            }
            c5 = 3;
          }
        } else if (1 !== tmp9) {
          if (2 === tmp9) {
            c3 = 1;
            closure_128_2 = tmp56;
            const _HermesInternal = HermesInternal;
            closure_1_11.log("couldn't fetch local previews (error: " + closure_128_2 + ")");
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            const localFetching = closure_129_1.localFetching;
            localFetching.delete(closure_129_0);
            c5 = 3;
            const obj2 = { value, done: true };
            return obj2;
          } else {
            closure_128_1 = value;
            let tmp14 = null != closure_128_1;
            if (tmp14) {
              tmp14 = id === AuthenticationStore.getId();
            }
            if (tmp14) {
              obj = tmp4(tmp56[12]);
              obj3 = {
                type: "MESSAGE_PREVIEWS_LOCALLY_LOADED",
                guildId: closure_129_0,
                messages: closure_128_1.map((item) => {
                  [tmp, tmp2] = item;
                  const items = [tmp, tmp2.message];
                  return items;
                }),
              };
              obj.dispatch(obj3);
            }
            c3 = 1;
          }
          c3 = 0;
          const localFetching2 = closure_129_1.localFetching;
          localFetching2.delete(closure_129_0);
        }
        c3 = 0;
        const localFetching3 = closure_129_1.localFetching;
        localFetching3.delete(closure_129_0);
        throw tmp56;
      } catch (tmp56) {
        if (tmp5 === c3) {
          c5 = tmp3;
          throw tmp56;
        } else if (tmp2 === tmp58) {
          c4 = tmp2;
        } else {
          c4 = tmp;
        }
      }
    }
  })();
};
prototype["fetchGuilds"] = function fetchGuilds(arg0, nextWants) {
  closure_0 = arg0;
  const nextWantsResult = nextWants.nextWants(1000);
  importDefault = nextWantsResult;
  if (0 === nextWantsResult.length) {
    let resolved = Promise.resolve();
  } else {
    resolved = nextWants.try(nextWantsResult, () => {
      closure_11.verbose(
        "fetching guild previews (via: gateway, guild_id: " +
          closure_0 +
          ", channel_ids: " +
          nextWantsResult.join(", ") +
          ")",
      );
      const socket = GatewayConnectionStore.getSocket();
      const lastMessages = socket.requestLastMessages(closure_0, nextWantsResult);
      return Promise.resolve();
    });
  }
  return resolved;
};
prototype["fetchDms"] = function fetchDms(nextWants) {
  const nextWantsResult = nextWants.nextWants(30);
  require = nextWantsResult;
  if (0 === nextWantsResult.length) {
    let resolved = Promise.resolve();
  } else {
    resolved = nextWants.try(
      nextWantsResult,
      asyncGeneratorStep(async (arg0, value) => {
        if (c3 === 2) {
          c3 = 3;
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
            c3 = 2;
            if (0 === dependencyMap) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                let body;
                const _HermesInternal = HermesInternal;
                closure_1_11.verbose(
                  "fetching dm previews (via: http, channel_ids: " + nextWantsResult.join(", ") + ")",
                );
                const HTTP = tmp2(1272).HTTP;
                const request = { url: constants.MESSAGE_PREVIEWS, body: null, rejectWithError: false };
                const obj1 = { channel_ids: nextWantsResult };
                request.body = obj1;
                dependencyMap = 1;
                c3 = 1;
                const obj2 = { value: HTTP.post(request), done: false };
                return obj2;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              body = value.body;
              obj = tmp5(573);
              const obj4 = { type: "MESSAGE_PREVIEWS_LOADED", guildId: null, messages: body };
              obj.dispatch(obj4);
              c3 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp12) {
            c3 = tmp;
            throw tmp12;
          }
        }
      }),
    );
  }
  return resolved;
};
prototype["syncChannel"] = function syncChannel(guildId, channelId) {
  const remote = this.remote;
  value = remote.get(guildId);
  let isLatestResult = null != value;
  if (isLatestResult) {
    isLatestResult = MessagePreviewStore.isLatest(guildId, channelId);
  }
  if (isLatestResult) {
    value.removeWant(channelId);
  }
};
prototype["getOrCreate"] = function getOrCreate(arg0) {
  const self = this;
  const remote = this.remote;
  if (!remote.has(arg0)) {
    const remote2 = self.remote;
    const remoteFetchData = new RemoteFetchData.RemoteFetchData();
    const result = remote2.set(arg0, remoteFetchData);
  }
  const remote3 = self.remote;
  return remote3.get(arg0);
};
prototype["cleanup"] = function cleanup() {
  while (tmp !== undefined) {
    let tmp4 = _slicedToArray(tmp2, 2);
    [tmp5, obj] = tmp4;
    if (obj.empty()) {
      let remote = this.remote;
      let deleteResult = remote.delete(tmp5);
    }
    continue;
  }
};
prototype["handleConnectionOpenSupplemental"] = function handleConnectionOpenSupplemental() {
  const result = this.handleConnectionResumed(false);
};
prototype["handleConnectionResumed"] = function handleConnectionResumed() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  const self = this;
  if (this.tickQueued) {
    if (!self.remoteTicking) {
      self.remoteTick();
      const remoteTick = self.remoteTick;
      remoteTick.flush();
    }
  }
  if (flag) {
    const localFetching = self.localFetching;
    localFetching.clear();
    const remote = self.remote;
    remote.clear();
    self.remoteTicking = false;
  }
};
prototype["handleGuildCreate"] = function handleGuildCreate(guild) {
  const remote = this.remote;
  remote.delete(guild.guild.id);
};
prototype["handleGuildDelete"] = function handleGuildDelete(guild) {
  const remote = this.remote;
  remote.delete(guild.guild.id);
};
prototype["handleLogout"] = function handleLogout() {
  const localFetching = this.localFetching;
  localFetching.clear();
  const remote = this.remote;
  remote.clear();
  this.remoteTicking = false;
};
prototype["handleMessageCreate"] = function handleMessageCreate(guildId) {
  guildId = guildId.guildId;
  if (guildId == null) {
    guildId = null;
  }
  this.syncChannel(guildId, guildId.channelId);
};
prototype["handleMessageDelete"] = function handleMessageDelete(guildId) {
  guildId = guildId.guildId;
  if (guildId == null) {
    guildId = null;
  }
  this.syncChannel(guildId, guildId.channelId);
};
prototype["handleMessageUpdate"] = function handleMessageUpdate(message) {
  if (null != message.message.channel_id) {
    let guildId = message.guildId;
    const self = this;
    if (guildId == null) {
      guildId = null;
    }
    this.syncChannel(guildId, message.message.channel_id);
  }
};
prototype["handleMessagesLoaded"] = function handleMessagesLoaded(channelId) {
  const self = this;
  const basicChannel = ChannelStore.getBasicChannel(channelId.channelId);
  let guild_id;
  if (basicChannel != null) {
    guild_id = basicChannel.guild_id;
  }
  if (guild_id == null) {
    guild_id = null;
  }
  if (null != basicChannel) {
    let messages = channelId.messages;
    if (messages == null) {
      messages = [];
    }
    for (const item10014 of messages) {
      let syncChannelResult = self.syncChannel(guild_id, item10014.channel_id);
      continue;
    }
  }
};
prototype["handleThreadListSync"] = function handleThreadListSync(guildId) {
  const remote = this.remote;
  value = remote.get(guildId.guildId);
  if (null != value) {
    let mostRecentMessages = guildId.mostRecentMessages;
    if (mostRecentMessages == null) {
      mostRecentMessages = [];
    }
    for (const item10012 of mostRecentMessages) {
      let removeWantResult = value.removeWant(item10012.channel_id);
      continue;
    }
  }
};
const messagePreviewManager = new MessagePreviewManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/message_previews/MessagePreviewManager.tsx");

export default messagePreviewManager;
export { MessagePreviewManager };
