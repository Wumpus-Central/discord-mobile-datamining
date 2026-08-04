import _slicedToArray from "_slicedToArray";
import ensureGuildLoaded from "ensureGuildLoaded";
import _handleConnectionOpen from "_handleConnectionOpen";
import { createChannelRecordFromServer as closure_7 } from "createChannelRecord";
import fetchFingerprint from "fetchFingerprint";
import closure_9 from "ensureGuildLoaded";
import { ChannelLoader } from "ensureGuildLoaded";
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import hasChannel from "hasChannel";
import set from "_handleConnectionOpen";

function hasBasicChannelChanged(basicChannel, nextResult) {
  let tmp = null == basicChannel || basicChannel.type !== nextResult.type || basicChannel.parent_id !== nextResult.parent_id;
  if (!tmp) {
    const basicPermissions = getUncachedChannelPermissions.computeBasicPermissions(basicChannel);
    tmp = basicPermissions !== getUncachedChannelPermissions.computeBasicPermissions(nextResult);
  }
  return tmp;
}
let closure_15 = new require("createChannelRecord")("GuildBasicChannels");
class GuildBasicChannels {
  constructor() {
    obj = Object.create(new.target.prototype);
    GuildBasicChannels = obj;
    obj.synced = null;
    obj.actions = {
      BACKGROUND_SYNC(arg0, arg1) {
            return obj.handleBackgroundSync(arg0, arg1);
          },
      CHANNEL_CREATE(arg0, arg1) {
            return obj.handleChannelCreate(arg0, arg1);
          },
      CHANNEL_DELETE(arg0, arg1) {
            return obj.handleChannelDelete(arg0, arg1);
          },
      CHANNEL_UPDATES(arg0, arg1) {
            return obj.handleChannelUpdates(arg0, arg1);
          },
      CONNECTION_OPEN(arg0, arg1) {
            return obj.handleConnectionOpen(arg0, arg1);
          },
      GUILD_CREATE(arg0, arg1) {
            return obj.handleGuildCreate(arg0, arg1);
          },
      GUILD_DELETE(arg0, arg1) {
            return obj.handleGuildDelete(arg0, arg1);
          },
      GUILD_MEMBER_UPDATE(arg0, arg1) {
            return obj.handleGuildMemberUpdate(arg0, arg1);
          },
      GUILD_ROLE_UPDATE(arg0, arg1) {
            return obj.handleGuildRoleUpdate(arg0, arg1);
          },
      GUILD_UPDATE(arg0, arg1) {
            return obj.handleGuildUpdate(arg0, arg1);
          },
      POST_CONNECTION_OPEN() {
            return obj.handlePostConnectionOpen();
          },
      WRITE_CACHES(arg0, arg1) {
            return obj.handleWriteCaches(arg0, arg1);
          }
    };
    return obj;
  }
}
const prototype = GuildBasicChannels.prototype;
prototype["getAsync"] = function getAsync(arg0) {
  let closure_0 = arg0;
  const self = this;
  return callback(function*() {
    let closure_1 = tmp3;
    let closure_0 = tmp2;
    const _performance2 = performance;
    closure_0 = performance.now();
    const obj7 = outer1_1(c3[11]);
    let items = [outer1_1(c3[11]).basicChannels(outer1_0).getKvEntries(), ];
    const basicChannelsResult = outer1_1(c3[11]).basicChannels(outer1_0);
    const obj9 = outer1_1(c3[11]);
    items[1] = outer1_1(c3[11]).syncedBasicChannels(outer1_0).getKvEntries();
    closure_1 = yield Promise.all(items);
    let _slicedToArray = 5;
    const _performance = performance;
    let ensureGuildLoaded = performance.now() - closure_0;
    let _handleConnectionOpen = (function groupStatuses(_slicedToArray) {
      const items = [];
      const items1 = [];
      while (tmp !== undefined) {
        let tmp3 = callback;
        let tmp4 = callback(tmp2, 2);
        let first = tmp4[0];
        let arr3 = items1;
        if (tmp4[1]) {
          arr3 = items;
        }
        let tmp6 = first;
        let arr = arr3.push(first);
        continue;
      }
      const items2 = [items, items1];
      return items2;
    })(_slicedToArray);
    const dependencyMap2 = outer1_4(_handleConnectionOpen, 2);
    let fetchFingerprint = 32;
    const length = 5;
    const _Set = Set;
    const set = new Set(fetchFingerprint);
    closure_1.synced = set;
    const _HermesInternal = HermesInternal;
    outer1_15.verbose("loaded in " + ensureGuildLoaded + "ms (guilds: " + c3.length + ", synced: " + set.size + " unsynced: " + length.length + ")");
    const obj3 = { all: null, stale: null, channels: null };
    obj3[0] = c3;
    obj3[1] = length;
    obj3[2] = c3.filter((arg0) => {
      let tmp;
      [tmp, ] = arg0;
      return set.has(tmp);
    });
    return obj3;
  })();
};
prototype["handleChannelCreate"] = function handleChannelCreate(channel, closure_0) {
  if (null != channel.channel.guild_id) {
    const self = this;
    this.unsync(channel.channel.guild_id, closure_0);
  }
};
prototype["handleChannelDelete"] = function handleChannelDelete(channel, closure_0) {
  if (null != channel.channel.guild_id) {
    const self = this;
    this.unsync(channel.channel.guild_id, closure_0);
  }
};
prototype["handleChannelUpdates"] = function handleChannelUpdates(channels, closure_0) {
  const self = this;
  channels = channels.channels;
  const found = channels.filter((guild_id) => null != guild_id.guild_id);
  const iter = found[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp4 = hasBasicChannelChanged;
    let tmp5 = store;
    let tmp3 = nextResult;
    if (hasBasicChannelChanged(store.getBasicChannel(nextResult.id), nextResult)) {
      let tmp6 = nextResult;
      let unsyncResult = self.unsync(tmp3.guild_id, closure_0);
    }
    continue;
  }
};
prototype["handleBackgroundSync"] = function handleBackgroundSync(arg0, arg1) {
  let closure_0 = arg1;
  const self = this;
  function _loop(iter) {
    let closure_0 = iter;
    const data_mode = iter.data_mode;
    if ("unavailable" !== data_mode) {
      if ("partial" === data_mode) {
        const id = iter.id;
        const channels = iter.partial_updates.channels;
        let mapped;
        if (channels != null) {
          mapped = channels.map((arg0) => outer1_7(arg0, iter.id));
        }
        if (mapped == null) {
          mapped = [];
        }
        let deleted_channel_ids = iter.partial_updates.deleted_channel_ids;
        if (deleted_channel_ids == null) {
          deleted_channel_ids = [];
        }
        self.onGuildUpdate(id, mapped, deleted_channel_ids, closure_0);
        const tmp4 = self;
      } else {
        self.onGuildSync(iter.id, closure_0);
      }
    }
  }
  const iter = arg0.guilds[Symbol.iterator]();
  while (iter !== undefined) {
    let _loopResult = _loop(iter.next());
    continue;
  }
};
prototype["handleConnectionOpen"] = function handleConnectionOpen(arg0, arg1) {
  const self = this;
  for (const item10008 of tmp) {
    let handleOneGuildCreateResult = self.handleOneGuildCreate(item10008, arg1);
    continue;
  }
};
prototype["handlePostConnectionOpen"] = function handlePostConnectionOpen() {
  const self = this;
  return callback(function*() {
    if (c10 === 2) {
      c10 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
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
        c10 = 2;
        if (0 === c9) {
          if (arg0 === 1) {
            c10 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c10 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let _handleConnectionOpen = tmp4;
            let closure_0;
            let guildIds;
            let v;
            let iter3;
            let next;
            closure_0 = outer1_6.lastTimeConnectedChanged();
            const databaseResult = outer1_1(outer1_3[11]).database();
            guildIds = databaseResult;
            if (null != outer1_0.synced) {
              if (null != databaseResult) {
                if (obj7.isCacheEnabled()) {
                  guildIds = outer1_12.getGuildIds();
                  let _HermesInternal = HermesInternal;
                  outer1_15.verbose("scheduling basic_channel optimstic writes (guilds: " + guildIds.filter((arg0) => {
                    synced = synced.synced;
                    return !synced.has(arg0);
                  }).length + ")");
                  iter3 = function _loop2(arg0) {
                    let closure_0 = arg0;
                    let c5 = 0;
                    let c6 = 0;
                    let c4 = 0;
                    return (function* _loop2(arg0) {
                      if (c6 === 2) {
                        c6 = 3;
                        HermesBuiltin.throwTypeError();
                      } else if (tmp6 === 3) {
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
                              let closure_2 = tmp3;
                              let closure_1 = tmp7;
                              if (null != synced.synced) {
                                if (outer1_1 === obj10.database()) {
                                  if (synced === _handleConnectionOpen.lastTimeConnectedChanged()) {
                                    synced = tmp36.synced;
                                    if (synced.has(tmp35)) {
                                      c6 = 3;
                                      return { value: 1, done: true };
                                    } else {
                                      const _HermesInternal = HermesInternal;
                                      outer2_15.verbose("optimstically writing basic_channels (guild: " + tmp35 + ")");
                                      let c4 = 1;
                                      const items = [tmp35];
                                      c5 = 3;
                                      c6 = 1;
                                      const obj1 = { value: null, done: false };
                                      obj1[0] = c10.loadGuildIds(items);
                                      return obj1;
                                    }
                                  }
                                }
                                obj10 = guildIds(iter3[11]);
                              }
                              c6 = 3;
                              return { value: 0, done: true };
                            }
                          } else if (1 === tmp7) {
                            c4 = 0;
                            closure_1 = closure_3;
                            outer2_15.warn("couldn't optimstically write basic_channel:", closure_1);
                            c6 = 3;
                            const obj2 = { value: null, done: true };
                            obj2[0] = { v: "r" };
                            return obj2;
                          } else if (2 === tmp7) {
                            if (arg0 === 1) {
                              c6 = 3;
                              throw arg1;
                            } else if (arg0 === 2) {
                              c6 = 3;
                              const obj3 = { value: null, done: true };
                              obj3[0] = arg1;
                              return obj3;
                            } else {
                              c6 = 3;
                              return { value: "HermesInternal", done: null };
                            }
                          } else if (3 === tmp7) {
                            if (arg0 === 1) {
                              c6 = 3;
                              throw arg1;
                            } else if (arg0 === 2) {
                              c4 = 0;
                              c6 = 3;
                              const obj4 = { value: null, done: true };
                              obj4[0] = arg1;
                              return obj4;
                            } else {
                              c5 = 4;
                              c6 = 1;
                              const obj5 = { value: null, done: false };
                              obj5[0] = closure_1.transaction((database) => closure_0.syncOne(closure_0, database), "handlePostConnectionOpen");
                              return obj5;
                            }
                          } else if (arg0 === 1) {
                            c6 = 3;
                            throw arg1;
                          } else if (arg0 === 2) {
                            c4 = 0;
                            c6 = 3;
                            const obj6 = { value: null, done: true };
                            obj6[0] = arg1;
                            return obj6;
                          } else {
                            c4 = 0;
                            const promise = new Promise((arg0) => setTimeout(arg0, 1000));
                            c5 = 2;
                            c6 = 1;
                            obj = { value: null, done: false };
                            obj[0] = promise;
                            return obj;
                          }
                        } catch (tmp25) {
                          closure_3 = tmp25;
                          if (tmp4 === c4) {
                            c6 = tmp2;
                            throw tmp25;
                          } else {
                            c5 = tmp;
                          }
                        }
                      }
                    })();
                  };
                  closure_0 = guildIds[Symbol.iterator]();
                  if (closure_0 !== undefined) {
                    let c7 = 1;
                    next = tmp38;
                    const iter4 = iter3(next)[tmp59.iterator]();
                    HermesBuiltin.ensureObject("iterator is not an object");
                    next = iter4.next;
                    v = undefined;
                    const tmp71 = iter3(next);
                  }
                }
                obj7 = outer1_0(outer1_3[12]);
              }
            }
            c10 = 3;
            return { value: "HermesInternal", done: null };
          }
        } else if (1 === tmp7) {
          c7 = 0;
          closure_0.return();
          throw fetchFingerprint;
        } else {
          if (2 !== tmp7) {
            c7 = 1;
            const method = HermesBuiltin.getMethod("throw");
            if (method === undefined) {
              const method1 = HermesBuiltin.getMethod("return");
              if (method1 !== undefined) {
                HermesBuiltin.ensureObject("iterator.return() did not return an object");
              }
              HermesBuiltin.throwTypeError();
            } else {
              const iter = method(tmp9);
              HermesBuiltin.ensureObject("iterator.throw() did not return an object");
              if (iter.done) {
                iter3 = iter;
              } else {
                c9 = 2;
                c10 = 1;
                return iter;
              }
            }
            const value = iter3.value;
            v = value;
            if (0 === value) {
              c7 = 0;
              closure_0.return();
            } else {
              if (1 !== v) {
                if (v) {
                  c7 = 0;
                  closure_0.return();
                  c10 = 3;
                  let obj1 = { value: null, done: true };
                  obj1[0] = v.v;
                  return obj1;
                }
              }
              c7 = 0;
            }
            tmp9 = fetchFingerprint;
          }
          c7 = 2;
          if (arg0 === 1) {
            c10 = 3;
            throw arg1;
          } else {
            v = arg1;
            if (arg0 === 2) {
              v = arg1;
              c7 = 1;
              const method2 = HermesBuiltin.getMethod("return");
              if (method2 === undefined) {
                c7 = 0;
                closure_0.return();
                c10 = 3;
                let obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              } else {
                const iter2 = method2(v);
                HermesBuiltin.ensureObject("iterator.return() did not return an object");
                if (iter2.done) {
                  c7 = 0;
                  closure_0.return();
                  c10 = 3;
                  obj = { value: null, done: true };
                  obj[0] = iter2.value;
                  return obj;
                } else {
                  c9 = 2;
                  c10 = 1;
                  return iter2;
                }
              }
            } else {
              c7 = 1;
              const tmp20 = arg1;
            }
          }
        }
        iter3 = next(tmp20);
        HermesBuiltin.ensureObject("iterator.next() did not return an object");
        if (!iter3.done) {
          c9 = 2;
          c10 = 1;
          return iter3;
        }
      } catch (tmp51) {
        fetchFingerprint = tmp51;
        if (tmp3 === c7) {
          c10 = tmp2;
          throw tmp51;
        } else if (tmp === tmp53) {
          c9 = tmp;
        } else {
          c9 = tmp2;
        }
      }
    }
  })();
};
prototype["handleGuildCreate"] = function handleGuildCreate(guild) {
  this.handleOneGuildCreate(guild.guild, arg1);
};
prototype["handleOneGuildCreate"] = function handleOneGuildCreate(arg0, closure_0) {
  let channels;
  let id;
  ({ id, channels } = arg0);
  const op = channels.op;
  const self = this;
  if ("full_sync" === op) {
    self.onGuildSync(id, closure_0);
  } else if ("update" === op) {
    self.onGuildUpdate(id, channels.writes, channels.deletes, closure_0);
  }
};
prototype["handleGuildUpdate"] = function handleGuildUpdate(guild, closure_0) {
  this.unsync(guild.guild.id, closure_0);
};
prototype["handleGuildDelete"] = function handleGuildDelete(guild) {
  if (true !== guild.guild.unavailable) {
    const self = this;
    this.delete(guild.guild.id, arg1);
  }
};
prototype["handleGuildRoleUpdate"] = function handleGuildRoleUpdate(role, closure_0) {
  role = role.role;
  role = role.getRole(role.guildId, role.id);
  let equalsResult = null != role;
  if (equalsResult) {
    const obj = importAll(506);
    equalsResult = obj.equals(importAll(506).deserialize(role.permissions), role.permissions);
    const obj2 = importAll(506);
  }
  if (!equalsResult) {
    const self = this;
    this.unsync(role.guildId, closure_0);
  }
};
prototype["handleGuildMemberUpdate"] = function handleGuildMemberUpdate(user, closure_0) {
  if (user.user.id === id.getId()) {
    const self = this;
    this.unsync(user.guildId, closure_0);
  }
};
prototype["handleWriteCaches"] = function handleWriteCaches(arg0, arg1) {
  this.sync(arg1);
};
prototype["resetInMemoryState"] = function resetInMemoryState() {
  this.synced = null;
};
prototype["onGuildUpdate"] = function onGuildUpdate(id, mapped, deleted_channel_ids, closure_0) {
  let someResult = deleted_channel_ids.length > 0;
  if (!someResult) {
    someResult = mapped.some((id) => {
      basicChannel = basicChannel.getBasicChannel(id.id);
      let tmp2 = null == basicChannel || basicChannel.type !== id.type || basicChannel.parent_id !== id.parent_id;
      if (!tmp2) {
        const basicPermissions = getUncachedChannelPermissions.computeBasicPermissions(basicChannel);
        tmp2 = basicPermissions !== getUncachedChannelPermissions.computeBasicPermissions(id);
      }
      return tmp2;
    });
  }
  if (someResult) {
    const self = this;
    this.unsync(id, closure_0);
  }
};
prototype["onGuildSync"] = function onGuildSync(id, closure_0) {
  this.unsync(id, closure_0);
};
prototype["delete"] = function delete(guild_id, database) {
  this.unsync(guild_id, database);
  const result = importDefault(1907).basicChannelsTransaction(database);
  result.delete(guild_id);
  const obj = importDefault(1907);
  const result1 = importDefault(1907).syncedBasicChannelsTransaction(database);
  result1.delete(guild_id);
};
prototype["unsync"] = function unsync(guild_id, closure_0) {
  const synced = this.synced;
  if (synced != null) {
    synced.delete(guild_id);
  }
  const result = importDefault(1907).basicChannelsTransaction(closure_0);
  result.delete(guild_id);
  const obj = importDefault(1907);
  const result1 = importDefault(1907).syncedBasicChannelsTransaction(closure_0);
  result1.put(guild_id, false);
  hasChannel.invalidate(guild_id);
};
prototype["sync"] = function sync(database) {
  const self = this;
  tmp2.verbose("Starting to write all basic channels");
  let num = 0;
  let num2 = 0;
  const guildIds = store2.getGuildIds();
  const nowResult = performance.now();
  while (tmp4 !== undefined) {
    if (self.syncOne(tmp5, database)) {
      let tmp7 = num;
      num = num + 1;
    } else {
      let tmp6 = num2;
      num2 = num2 + 1;
    }
    continue;
  }
  tmp2.verbose("" + num + " basic_channel guilds submitted (took: " + performance.now() - nowResult + "ms, skipped: " + num2 + " guilds)");
};
prototype["syncOne"] = function syncOne(closure_0, database) {
  const self = this;
  let flag = null != store2.getGuild(closure_0);
  if (flag) {
    const synced = self.synced;
    let hasItem;
    if (synced != null) {
      hasItem = synced.has(closure_0);
    }
    flag = !hasItem;
  }
  if (flag) {
    const synced2 = self.synced;
    if (synced2 != null) {
      synced2.add(closure_0);
    }
    const result = importDefault(1907).basicChannelsTransaction(database);
    const _Object = Object;
    const values = Object.values(store.getMutableGuildChannelsForGuild(closure_0));
    result.put(closure_0, values.map((id) => {
      const obj = { id: id.id, type: id.type, guild_id: id.guild_id, parent_id: id.parent_id, basicPermissions: null };
      obj[4] = callback(table[14]).asBasicFlag(getUncachedChannelPermissions.computePermissions(id));
      return obj;
    }));
    let obj = importDefault(1907);
    const result1 = importDefault(1907).syncedBasicChannelsTransaction(database);
    result1.put(closure_0, true);
    flag = true;
    const obj3 = importDefault(1907);
  }
  return flag;
};
let set = Object.create(GuildBasicChannels.prototype);
set.synced = null;
set.actions = {
  BACKGROUND_SYNC(arg0, arg1) {
    return obj.handleBackgroundSync(arg0, arg1);
  },
  CHANNEL_CREATE(arg0, arg1) {
    return obj.handleChannelCreate(arg0, arg1);
  },
  CHANNEL_DELETE(arg0, arg1) {
    return obj.handleChannelDelete(arg0, arg1);
  },
  CHANNEL_UPDATES(arg0, arg1) {
    return obj.handleChannelUpdates(arg0, arg1);
  },
  CONNECTION_OPEN(arg0, arg1) {
    return obj.handleConnectionOpen(arg0, arg1);
  },
  GUILD_CREATE(arg0, arg1) {
    return obj.handleGuildCreate(arg0, arg1);
  },
  GUILD_DELETE(arg0, arg1) {
    return obj.handleGuildDelete(arg0, arg1);
  },
  GUILD_MEMBER_UPDATE(arg0, arg1) {
    return obj.handleGuildMemberUpdate(arg0, arg1);
  },
  GUILD_ROLE_UPDATE(arg0, arg1) {
    return obj.handleGuildRoleUpdate(arg0, arg1);
  },
  GUILD_UPDATE(arg0, arg1) {
    return obj.handleGuildUpdate(arg0, arg1);
  },
  POST_CONNECTION_OPEN() {
    return obj.handlePostConnectionOpen();
  },
  WRITE_CACHES(arg0, arg1) {
    return obj.handleWriteCaches(arg0, arg1);
  }
};
let result = set.fileFinishedImporting("modules/app_database/modules/GuildBasicChannels.tsx");

export default set;