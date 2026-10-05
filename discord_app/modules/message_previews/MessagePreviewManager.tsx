// === Module 15139: MessagePreviewManager ===

// Module 15139 (MessagePreviewManager)
import LoggerDefault from "Logger" /* 3 */;
import _modDef12 from "module_12" /* 12 */;
import Constants from "Constants" /* 1085 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import RemoteFetchData from "RemoteFetchData" /* 15140 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5436 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import MessagePreviewStore from "message_previews/MessagePreviewStore" /* 13529 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6613 */;
import size from "module_2" /* 2 */;

let c2, c4, c5, c7, c8, closure_2, importDefault, set;

const isThread = ChannelRecord.isThread;
const Endpoints = Constants.Endpoints;
const tmp2 = new LoggerDefault("MessagePreviewManager");
let closure_11 = tmp2;
class MessagePreviewManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.remote = new Map();
    applyArgumentsResult.remoteTicking = false;
    applyArgumentsResult.tickQueued = false;
    new Map();
    applyArgumentsResult.localFetching = new Set();
    applyArgumentsResult.actions = {
      CONNECTION_OPEN_SUPPLEMENTAL() {
        return require.handleConnectionOpenSupplemental();
      },
      CONNECTION_RESUMED() {
        return require.handleConnectionResumed();
      },
      GUILD_CREATE(arg0) {
        return require.handleGuildCreate(arg0);
      },
      GUILD_DELETE(arg0) {
        return require.handleGuildDelete(arg0);
      },
      LOAD_MESSAGES_SUCCESS(channelId) {
        return require.handleMessagesLoaded(channelId);
      },
      LOCAL_MESSAGES_LOADED(channelId) {
        return require.handleMessagesLoaded(channelId);
      },
      LOGOUT() {
        return require.handleLogout();
      },
      MESSAGE_CREATE(arg0) {
        return require.handleMessageCreate(arg0);
      },
      MESSAGE_DELETE(arg0) {
        return require.handleMessageDelete(arg0);
      },
      MESSAGE_UPDATE(arg0) {
        return require.handleMessageUpdate(arg0);
      },
      THREAD_LIST_SYNC(arg0) {
        return require.handleThreadListSync(arg0);
      }
    };
    new Set();
    let obj = _modDef12;
    applyArgumentsResult.remoteTick = obj.debounce(_asyncToGenerator(async () => {
      let closure_0 = arg0;
      if (c8 === 2) {
        c8 = 3;
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
        while (true) {
          let closure_4;
          let closure_3;
          let num8;
          let c1;
          let remote;
          c8 = 2;
          let tmp4 = c7;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              let obj3 = { value, done: true };
              return obj3;
            } else {
              closure_4 = tmp;
              closure_3 = tmp4;
              num8 = closure_0;
              if (closure_0 === undefined) {
                num8 = 0;
              }
              c1 = undefined;
              remote = undefined;
              closure_3 = undefined;
              closure_4 = undefined;
              c7 = 1;
              c8 = 1;
              return { value: "Set", done: true };
            }
          } else {
            let closure_1;
            if (1 === tmp4) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                let obj4 = { value, done: true };
                return obj4;
              } else if (connected.isConnected()) {
                if (!closure_132_0.remoteTicking) {
                  if (num8 <= 5) {
                    closure_132_0.tickQueued = false;
                    let c6 = 1;
                    closure_132_0.remoteTicking = true;
                    remote = closure_132_0.remote;
                    closure_1 = remote[Symbol.iterator]();
                    if (closure_1 === undefined) {
                      let cleanupResult = closure_132_0.cleanup();
                      closure_132_0.remoteTicking = false;
                      c6 = 0;
                    } else {
                      let dms;
                      c6 = 2;
                      c1 = tmp25;
                      remote = closure_3(c1, 2);
                      closure_3 = remote[0];
                      closure_4 = remote[1];
                      if (null == closure_3) {
                        dms = closure_132_0.fetchDms(closure_4);
                      } else {
                        dms = closure_132_0.fetchGuilds(closure_3, closure_4);
                      }
                      c7 = 4;
                      c8 = 1;
                      let obj5 = { value: dms, done: false };
                      return obj5;
                    }
                  }
                }
              } else {
                closure_132_0.tickQueued = true;
              }
            } else if (2 === tmp4) {
              c6 = 0;
              let closure_5 = connected;
              let _HermesInternal = HermesInternal;
              let str = "couldn't fetch message previews (attempt: ";
              let str2 = ", error: ";
              let str3 = ")";
              let logResult = logger.log("couldn't fetch message previews (attempt: " + num8 + ", error: " + closure_5 + ")");
              closure_132_0.remoteTicking = false;
              let remoteTickResult = closure_132_0.remoteTick(num8 + 1);
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
              let obj = { value, done: true };
              return obj;
            } else {
              c6 = 1;
            }
            c8 = 3;
            return { value: "IconComponent", done: null };
          }
        }
      }
    }), 100);
    return applyArgumentsResult;
  }
  addWant(arg0) {
    const basicChannel = ChannelStore.getBasicChannel(arg0);
    if (null != basicChannel) {
      let guild_id = basicChannel.guild_id;
      if (guild_id == null) {
        guild_id = null;
      }
      const isLatestResult = isThread(basicChannel.type) || MessagePreviewStore.isLatest(guild_id, arg0);
      if (!isLatestResult) {
        const self = this;
        const orCreate = this.getOrCreate(guild_id);
        orCreate.addWant(arg0);
        const local = this.fetchLocal(guild_id);
        this.remoteTick();
      }
    }
  }
  fetchLocal(guild_id) {
    let closure_0 = guild_id;
    const self = this;
    return (async () => {
      let closure_1;
      if (c5 === 2) {
        c5 = 3;
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
        let c3;
        try {
          let id;
          let tmp;
          let mostRecents;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              id = undefined;
              tmp = undefined;
              if (localFetchNeeded.isLocalFetchNeeded(id)) {
                const localFetching4 = self.localFetching;
                if (!localFetching4.has(id)) {
                  c3 = 2;
                  const _HermesInternal2 = HermesInternal;
                  closure_1_11.verbose("fetching local previews (via: database, guild_id: " + id + ")");
                  const localFetching5 = self.localFetching;
                  localFetching5.add(id);
                  id = AuthenticationStore.getId();
                  const obj3 = tmp(closure_2[11]);
                  const messagesResult = obj3.messages();
                  mostRecents = undefined;
                  if (messagesResult != null) {
                    mostRecents = messagesResult.getMostRecents(id);
                  }
                  c4 = 3;
                  c5 = 1;
                  const obj5 = { value: mostRecents, done: false };
                  return obj5;
                }
              }
            }
          } else if (1 === c4) {
            c3 = 0;
            const localFetching3 = closure_129_1.localFetching;
            mostRecents = localFetching3.delete(closure_129_0);
            throw closure_2;
          } else {
            if (2 === c4) {
              c3 = 1;
              const _HermesInternal = HermesInternal;
              closure_1_11.log("couldn't fetch local previews (error: " + closure_2 + ")");
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              const localFetching = closure_129_1.localFetching;
              localFetching.delete(closure_129_0);
              c5 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              tmp = value;
              let tmp10 = null != tmp;
              if (tmp10) {
                mostRecents = AuthenticationStore.getId();
                tmp10 = id === mostRecents;
              }
              if (tmp10) {
                mostRecents = tmp(closure_2[12]).dispatch;
                const obj = {
                  type: "MESSAGE_PREVIEWS_LOCALLY_LOADED",
                  guildId: closure_129_0,
                  messages: tmp.map((item) => {
                              let tmp;
                              let tmp2;
                              [tmp, tmp2] = item;
                              const items = [tmp, tmp2.message];
                              return items;
                            })
                };
                const tmp15 = tmp(closure_2[12]);
                mostRecents(obj);
              }
              c3 = 1;
            }
            c3 = 0;
            const localFetching2 = closure_129_1.localFetching;
            mostRecents = localFetching2.delete;
            mostRecents(closure_129_0);
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp51) {
          closure_2 = tmp51;
          if (0 === c3) {
            c5 = 3;
            throw tmp51;
          } else if (1 === tmp53) {
            c4 = 1;
          } else {
            c4 = 2;
          }
        }
      }
    })();
  }
  fetchGuilds(arg0, nextWants) {
    let resolved;
    let closure_0 = arg0;
    const nextWantsResult = nextWants.nextWants(1000);
    importDefault = nextWantsResult;
    if (0 === nextWantsResult.length) {
      resolved = Promise.resolve();
    } else {
      resolved = nextWants.try(nextWantsResult, () => {
        closure_11.verbose("fetching guild previews (via: gateway, guild_id: " + closure_0 + ", channel_ids: " + importDefault.join(", ") + ")");
        const socket = GatewayConnectionStore.getSocket();
        const lastMessages = socket.requestLastMessages(closure_0, importDefault);
        return Promise.resolve();
      });
    }
    return resolved;
  }
  fetchDms(nextWants) {
    let resolved;
    const nextWantsResult = nextWants.nextWants(30);
    require = nextWantsResult;
    if (0 === nextWantsResult.length) {
      const tmp3 = globalThis;
      resolved = Promise.resolve();
    } else {
      resolved = nextWants.try(nextWantsResult, _asyncToGenerator(async () => {
        let closure_0;
        let closure_1;
        let obj4;
        if (c3 === 2) {
          c3 = 3;
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
            let body;
            c3 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                body = undefined;
                const _HermesInternal = HermesInternal;
                closure_1_11.verbose("fetching dm previews (via: http, channel_ids: " + require.join(", ") + ")");
                const HTTP = tmp(c2[13]).HTTP;
                const request = { url: constants.MESSAGE_PREVIEWS, body: obj4, rejectWithError: false };
                obj4 = { channel_ids: require };
                c2 = 1;
                c3 = 1;
                const obj5 = { value: HTTP.post(request), done: false };
                return obj5;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              body = value.body;
              const obj7 = { type: "MESSAGE_PREVIEWS_LOADED", guildId: null, messages: body };
              const obj = tmp4(c2[12]);
              obj.dispatch(obj7);
              c3 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp11) {
            c3 = 3;
            throw tmp11;
          }
        }
      }));
    }
    return resolved;
  }
  syncChannel(guildId, channelId) {
    const remote = this.remote;
    const value = remote.get(guildId);
    const isLatestResult = null != value && MessagePreviewStore.isLatest(guildId, channelId);
    if (isLatestResult) {
      value.removeWant(channelId);
    }
  }
  getOrCreate(arg0) {
    const self = this;
    const remote = this.remote;
    if (!remote.has(arg0)) {
      const remote2 = self.remote;
      const self2 = this;
      const self3 = this;
      set = remote2.set;
      const remoteFetchData = new RemoteFetchData.RemoteFetchData();
      const result = set(arg0, remoteFetchData);
    }
    const remote3 = self.remote;
    return remote3.get(arg0);
  }
  cleanup() {
    let obj;
    let tmp5;
    const tmp = this.remote[Symbol.iterator]();
    while (tmp !== undefined) {
      let tmp4 = _slicedToArray(tmp2, 2);
      [tmp5, obj] = tmp4;
      if (obj.empty()) {
        let remote = this.remote;
        let deleteResult = remote.delete(tmp5);
      }
      continue;
    }
  }
  handleConnectionOpenSupplemental() {
    const result = this.handleConnectionResumed(false);
  }
  handleConnectionResumed() {
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
  }
  handleGuildCreate(guild) {
    const remote = this.remote;
    remote.delete(guild.guild.id);
  }
  handleGuildDelete(guild) {
    const remote = this.remote;
    remote.delete(guild.guild.id);
  }
  handleLogout() {
    const localFetching = this.localFetching;
    localFetching.clear();
    const remote = this.remote;
    remote.clear();
    this.remoteTicking = false;
  }
  handleMessageCreate(guildId) {
    guildId = guildId.guildId;
    const syncChannel = this.syncChannel;
    if (guildId == null) {
      guildId = null;
    }
    syncChannel(guildId, guildId.channelId);
  }
  handleMessageDelete(guildId) {
    guildId = guildId.guildId;
    const syncChannel = this.syncChannel;
    if (guildId == null) {
      guildId = null;
    }
    syncChannel(guildId, guildId.channelId);
  }
  handleMessageUpdate(message) {
    if (null != message.message.channel_id) {
      let guildId = message.guildId;
      const self = this;
      const syncChannel = this.syncChannel;
      if (guildId == null) {
        guildId = null;
      }
      syncChannel(guildId, message.message.channel_id);
    }
  }
  handleMessagesLoaded(channelId) {
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
  }
  handleThreadListSync(guildId) {
    const remote = this.remote;
    const value = remote.get(guildId.guildId);
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
  }
}
const prototype = MessagePreviewManager.prototype;
const messagePreviewManager = new MessagePreviewManager();
let result = size.fileFinishedImporting("modules/message_previews/MessagePreviewManager.tsx");

export default messagePreviewManager;
export { MessagePreviewManager };