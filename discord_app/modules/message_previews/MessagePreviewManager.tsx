// discord_app/modules/message_previews/MessagePreviewManager.tsx
import _slicedToArray from "_slicedToArray";
import ensureGuildLoaded from "ensureGuildLoaded";
import _handleConnectionOpen from "_handleConnectionOpen";
import { isThread } from "createChannelRecord";
import fetchFingerprint from "fetchFingerprint";
import closure_8 from "ensureGuildLoaded";
import initialize from "initialize";
import { Endpoints } from "ME";
import "initialize";
import { FetchStatus } from "RemoteFetchData.tsx";

let require = arg1;
const unpackModuleId = new require("createChannelRecord")("MessagePreviewManager");
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
          }
    };
    obj = require("apply");
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.remoteTick = obj.debounce(ensureGuildLoaded(() => {
      let closure_0 = arg0;
      let c7 = 0;
      let c8 = 0;
      let c6 = 0;
      const iter = (function*() {
        if (c8 === 2) {
          c8 = 3;
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
          while (true) {
            let num = 2;
            c8 = 2;
            let tmp4 = c7;
            if (0 === c7) {
              if (arg0 === 1) {
                let num11 = 3;
                c8 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                let num10 = 3;
                c8 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let c4 = tmp;
                let c3 = tmp4;
                let num8;
                if (num8 === undefined) {
                  num8 = 0;
                }
                let closure_1;
                let remote;
                c3 = undefined;
                c4 = undefined;
                c7 = 1;
                let num9 = 1;
                c8 = 1;
                return { value: "ct", done: "Array" };
              }
            } else {
              if (1 === tmp4) {
                if (arg0 === 1) {
                  let num7 = 3;
                  c8 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  let num6 = 3;
                  c8 = 3;
                  let obj1 = { value: null, done: true };
                  obj1[0] = arg1;
                  return obj1;
                } else {
                  let tmp47 = c4;
                  let tmp48 = outer1_5;
                  let tmp49 = c4;
                  let tmp50 = closure_0;
                  if (outer1_5.isConnected()) {
                    if (!tmp50.remoteTicking) {
                      let tmp21 = c3;
                      let tmp22 = closure_0;
                      if (closure_0 <= 5) {
                        let tmp51 = c4;
                        let tmp52 = closure_0;
                        closure_0.tickQueued = false;
                        let tmp53 = c4;
                        let c6 = 1;
                        let tmp54 = closure_0;
                        closure_0.remoteTicking = true;
                        let tmp55 = closure_0;
                        remote = closure_0.remote;
                        let tmp56 = remote;
                        closure_1 = remote[Symbol.iterator]();
                        let tmp23 = remote;
                        let tmp24 = closure_1;
                        if (closure_1 === undefined) {
                          let tmp37 = c4;
                          let tmp38 = closure_0;
                          let cleanupResult = closure_0.cleanup();
                          let tmp40 = closure_0;
                          closure_0.remoteTicking = false;
                          c6 = 0;
                        } else {
                          let tmp57 = c3;
                          let tmp58 = c4;
                          c6 = 2;
                          let outer1_1 = tmp25;
                          let tmp59 = outer1_3;
                          let tmp60 = outer1_1;
                          let outer1_2 = outer1_3(outer1_1, 2);
                          let tmp61 = outer1_2;
                          outer1_3 = outer1_2[0];
                          let tmp62 = outer1_2;
                          let outer1_4 = outer1_2[1];
                          let tmp63 = outer1_3;
                          if (null == outer1_3) {
                            let tmp32 = c3;
                            let tmp33 = c4;
                            let tmp34 = closure_0;
                            let tmp35 = outer1_4;
                            let dms = closure_0.fetchDms(outer1_4);
                          } else {
                            let tmp26 = c3;
                            let tmp27 = c4;
                            let tmp28 = closure_0;
                            let tmp29 = outer1_3;
                            let tmp30 = outer1_4;
                            let guilds = closure_0.fetchGuilds(outer1_3, outer1_4);
                          }
                          c7 = 4;
                          let num4 = 1;
                          c8 = 1;
                        }
                      }
                    }
                  } else {
                    tmp50.tickQueued = true;
                  }
                }
              } else if (2 === tmp4) {
                let tmp9 = c3;
                let tmp10 = c4;
                let tmp11 = _handleConnectionOpen;
                let tmp12 = _handleConnectionOpen;
                c6 = 0;
                let tmp13 = outer1_11;
                let tmp14 = num8;
                let tmp15 = _handleConnectionOpen;
                let _HermesInternal = HermesInternal;
                let str = "couldn't fetch message previews (attempt: ";
                let str2 = ", error: ";
                let str3 = ")";
                let logResult = outer1_11.log("couldn't fetch message previews (attempt: " + num8 + ", error: " + _handleConnectionOpen + ")");
                let tmp17 = num8;
                num8.remoteTicking = false;
                let tmp18 = num8;
                let tmp19 = num8;
                let remoteTickResult = num8.remoteTick(num8 + 1);
              } else if (3 === tmp4) {
                let tmp6 = _handleConnectionOpen;
                let tmp7 = _handleConnectionOpen;
                c6 = 1;
                let tmp8 = closure_1;
                closure_1.return();
                throw _handleConnectionOpen;
              } else if (arg0 === 1) {
                let num3 = 3;
                c8 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c6 = 1;
                let tmp5 = closure_1;
                closure_1.return();
                c6 = 0;
                let num2 = 3;
                c8 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                c6 = 1;
              }
              let num5 = 3;
              c8 = 3;
            }
          }
        }
      })();
      iter.next();
      return iter;
    }), 100);
    return applyArgumentsResult;
  }
}
const prototype = MessagePreviewManager.prototype;
prototype["addWant"] = function addWant(arg0) {
  const basicChannel = store.getBasicChannel(arg0);
  if (null != basicChannel) {
    let guild_id = basicChannel.guild_id;
    if (guild_id == null) {
      guild_id = null;
    }
    let isLatestResult = isThread(basicChannel.type);
    if (!isLatestResult) {
      isLatestResult = initialize.isLatest(guild_id, arg0);
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
  let closure_0 = guild_id;
  const self = this;
  return callback2(function*() {
    if (c5 === 2) {
      c5 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp8 === 3) {
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
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_1 = tmp4;
            let id = tmp6;
            id = undefined;
            closure_1 = undefined;
            if (outer1_9.isLocalFetchNeeded(outer1_0)) {
              const localFetching4 = outer1_1.localFetching;
              if (!localFetching4.has(outer1_0)) {
                let c3 = 2;
                const _HermesInternal2 = HermesInternal;
                outer1_11.verbose("fetching local previews (via: database, guild_id: " + outer1_0 + ")");
                const localFetching5 = outer1_1.localFetching;
                localFetching5.add(outer1_0);
                id = outer1_7.getId();
                let obj3 = outer1_1(outer1_2[11]);
                const messagesResult = obj3.messages();
                let mostRecents;
                if (messagesResult != null) {
                  mostRecents = messagesResult.getMostRecents(outer1_0);
                }
                c4 = 3;
                c5 = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = mostRecents;
                return obj1;
              }
            }
            c5 = 3;
          }
        } else if (1 !== tmp9) {
          if (2 === tmp9) {
            c3 = 1;
            outer1_2 = closure_2;
            const _HermesInternal = HermesInternal;
            outer1_11.log("couldn't fetch local previews (error: " + outer1_2 + ")");
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            const localFetching = outer1_1.localFetching;
            localFetching.delete(outer1_0);
            c5 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            closure_1 = arg1;
            let tmp14 = null != closure_1;
            if (tmp14) {
              tmp14 = id === outer1_7.getId();
            }
            if (tmp14) {
              obj = outer1_1(outer1_2[12]);
              obj3 = { type: "MESSAGE_PREVIEWS_LOCALLY_LOADED", guildId: null, messages: null };
              obj3[1] = id;
              obj3[2] = closure_1.map((arg0) => {
                let tmp;
                let tmp2;
                [tmp, tmp2] = arg0;
                const items = [tmp, tmp2.message];
                return items;
              });
              obj.dispatch(obj3);
            }
            c3 = 1;
          }
          c3 = 0;
          const localFetching2 = outer1_1.localFetching;
          localFetching2.delete(outer1_0);
        }
        c3 = 0;
        const localFetching3 = outer1_1.localFetching;
        localFetching3.delete(outer1_0);
        throw closure_2;
      } catch (tmp56) {
        closure_2 = tmp56;
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
prototype["fetchGuilds"] = function fetchGuilds(outer1_3, outer1_4) {
  let closure_0 = outer1_3;
  const nextWantsResult = outer1_4.nextWants(1000);
  const importDefault = nextWantsResult;
  if (0 === nextWantsResult.length) {
    let resolved = Promise.resolve();
  } else {
    resolved = outer1_4.try(nextWantsResult, () => {
      outer1_11.verbose("fetching guild previews (via: gateway, guild_id: " + closure_0 + ", channel_ids: " + nextWantsResult.join(", ") + ")");
      const socket = outer1_5.getSocket();
      const lastMessages = socket.requestLastMessages(closure_0, nextWantsResult);
      return Promise.resolve();
    });
  }
  return resolved;
};
prototype["fetchDms"] = function fetchDms(outer1_4) {
  const nextWantsResult = outer1_4.nextWants(30);
  const require = nextWantsResult;
  if (0 === nextWantsResult.length) {
    let resolved = Promise.resolve();
  } else {
    resolved = outer1_4.try(nextWantsResult, callback2(function*() {
      if (c3 === 2) {
        c3 = 3;
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
          c3 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_1 = tmp5;
              let body = tmp2;
              body = undefined;
              const _HermesInternal = HermesInternal;
              outer1_11.verbose("fetching dm previews (via: http, channel_ids: " + outer1_0.join(", ") + ")");
              const HTTP = outer1_0(530).HTTP;
              const obj1 = { url: null, body: null, rejectWithError: false };
              obj1[0] = outer1_10.MESSAGE_PREVIEWS;
              const obj2 = { channel_ids: null };
              obj2[0] = outer1_0;
              obj1[1] = obj2;
              dependencyMap = 1;
              c3 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.post(obj1);
              return obj3;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            body = arg1.body;
            obj = outer1_1(709);
            const obj5 = { type: "MESSAGE_PREVIEWS_LOADED", guildId: null, messages: null };
            obj5[2] = body;
            obj.dispatch(obj5);
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp12) {
          c3 = tmp;
          throw tmp12;
        }
      }
    }));
  }
  return resolved;
};
prototype["syncChannel"] = function syncChannel(guildId, channelId) {
  const remote = this.remote;
  const value = remote.get(guildId);
  let isLatestResult = null != value;
  if (isLatestResult) {
    isLatestResult = initialize.isLatest(guildId, channelId);
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
    const remoteFetchData = new FetchStatus /* FetchStatus */.RemoteFetchData();
    const result = remote2.set(arg0, remoteFetchData);
  }
  const remote3 = self.remote;
  return remote3.get(arg0);
};
prototype["cleanup"] = function cleanup() {
  let obj;
  let tmp5;
  while (tmp !== undefined) {
    let tmp3 = callback;
    let tmp4 = callback(tmp2, 2);
    [tmp5, obj] = tmp4;
    if (obj.empty()) {
      let remote = this.remote;
      let tmp6 = tmp5;
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
  const basicChannel = store.getBasicChannel(channelId.channelId);
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
};
const messagePreviewManager = new MessagePreviewManager();
const tmp2 = new require("createChannelRecord")("MessagePreviewManager");
let result = require("_handleConnectionOpen").fileFinishedImporting("modules/message_previews/MessagePreviewManager.tsx");

export default messagePreviewManager;
export { MessagePreviewManager };