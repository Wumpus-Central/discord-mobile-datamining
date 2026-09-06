// === Module 7648: GuildBasicChannels ===

// Module 7648 (GuildBasicChannels)
import LoggerDefault from "Logger" /* 3 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1086 */;
import DatabaseDaosDefault from "DatabaseDaos" /* 1986 */;
import BasicPermissionUtilsDefault from "BasicPermissionUtils" /* 4208 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5277 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildRoleStore from "GuildRoleStore" /* 2015 */;
import GuildStore from "GuildStore" /* 1979 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import BasicChannelCacheStore from "BasicChannelCacheStore" /* 1958 */;

const require = fn;
function hasBasicChannelChanged(basicChannel, nextResult) {
  let tmp = null == basicChannel || basicChannel.type !== nextResult.type || basicChannel.parent_id !== nextResult.parent_id;
  if (!tmp) {
    const basicPermissions = PermissionStore.computeBasicPermissions(basicChannel);
    tmp = basicPermissions !== PermissionStore.computeBasicPermissions(nextResult);
  }
  return tmp;
}
let closure_7 = fn(1961).createChannelRecordFromServer;
const ChannelLoader = fn(1957).ChannelLoader;
let closure_15 = new LoggerDefault("GuildBasicChannels");
class GuildBasicChannels {
  constructor() {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
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
  closure_0 = arg0;
  const self = this;
  return (async () => {
    closure_0 = tmp2;
    const _performance2 = performance;
    closure_128_0 = performance.now();
    let items = [tmp3(1986).basicChannels(closure_0).getKvEntries(), ];
    tmp3(1986).basicChannels(closure_0);
    items[1] = tmp3(1986).syncedBasicChannels(closure_0).getKvEntries();
    closure_128_1 = await Promise.all(items);
    closure_128_2 = _slicedToArray(closure_128_1, 2);
    closure_128_3 = closure_128_2[0];
    closure_128_4 = closure_128_2[1];
    const _performance = performance;
    closure_128_5 = performance.now() - closure_128_0;
    closure_128_6 = (function groupStatuses(arg0) {
      const items = [];
      const items1 = [];
      while (tmp !== undefined) {
        let tmp4 = closure_1_4(tmp2, 2);
        let first = tmp4[0];
        let arr3 = items1;
        if (tmp4[1]) {
          arr3 = items;
        }
        let arr = arr3.push(first);
        continue;
      }
      const items2 = [items, items1];
      return items2;
    })(closure_128_4);
    closure_128_7 = _slicedToArray(closure_128_6, 2);
    closure_128_8 = closure_128_7[0];
    closure_128_9 = closure_128_7[1];
    const _Set = Set;
    closure_128_10 = new Set(closure_128_8);
    closure_129_1.synced = closure_128_10;
    const _HermesInternal = HermesInternal;
    closure_1_15.verbose("loaded in " + closure_128_5 + "ms (guilds: " + closure_128_3.length + ", synced: " + closure_128_10.size + " unsynced: " + closure_128_9.length + ")");
    new Set(closure_128_8);
    return {
      all: closure_128_3,
      stale: closure_128_9,
      channels: closure_128_3.filter((item) => {
        [tmp, ] = item;
        return set.has(tmp);
      })
    };
  })();
};
prototype["handleChannelCreate"] = function handleChannelCreate(channel, iter) {
  if (null != channel.channel.guild_id) {
    const self = this;
    this.unsync(channel.channel.guild_id, iter);
  }
};
prototype["handleChannelDelete"] = function handleChannelDelete(channel, iter) {
  if (null != channel.channel.guild_id) {
    const self = this;
    this.unsync(channel.channel.guild_id, iter);
  }
};
prototype["handleChannelUpdates"] = function handleChannelUpdates(channels, iter) {
  const self = this;
  channels = channels.channels;
  const found = channels.filter((guild_id) => null != guild_id.guild_id);
  iter = found[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    if (hasBasicChannelChanged(ChannelStore.getBasicChannel(nextResult.id), nextResult)) {
      let unsyncResult = self.unsync(tmp3.guild_id, iter);
    }
    continue;
  }
};
prototype["handleBackgroundSync"] = function handleBackgroundSync(arg0, arg1) {
  closure_0 = arg1;
  const self = this;
  function _loop(iter) {
    const data_mode = iter.data_mode;
    if ("unavailable" !== data_mode) {
      if ("partial" === data_mode) {
        const id = iter.id;
        const channels = iter.partial_updates.channels;
        let mapped;
        if (channels != null) {
          mapped = channels.map((item) => closure_2_7(item, iter.id));
        }
        if (mapped == null) {
          mapped = [];
        }
        let deleted_channel_ids = iter.partial_updates.deleted_channel_ids;
        if (deleted_channel_ids == null) {
          deleted_channel_ids = [];
        }
        self.onGuildUpdate(id, mapped, deleted_channel_ids, iter);
      } else {
        self.onGuildSync(iter.id, iter);
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
  return (async (arg0, value) => {
    if (c10 === 2) {
      c10 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c10 = 2;
        if (0 === c9) {
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c10 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_134_0 = undefined;
            closure_134_1 = undefined;
            closure_134_2 = undefined;
            closure_134_3 = undefined;
            closure_134_4 = undefined;
            closure_134_0 = tmp4.lastTimeConnectedChanged();
            const databaseResult = guildIds(iter3[11]).database();
            closure_134_1 = databaseResult;
            if (null != self.synced) {
              if (null != databaseResult) {
                if (obj7.isCacheEnabled()) {
                  guildIds = guildIds.getGuildIds();
                  let _HermesInternal = HermesInternal;
                  closure_1_15.verbose("scheduling basic_channel optimstic writes (guilds: " + guildIds.filter((item) => {
                    synced = synced.synced;
                    return !synced.has(item);
                  }).length + ")");
                  closure_134_3 = function _loop2(arg0) {
                    synced = arg0;
                    c5 = 0;
                    c6 = 0;
                    c4 = 0;
                    return (function* _loop2(arg0, value) {
                      if (c6 === 2) {
                        c6 = 3;
                        throw new TypeError("Generator functions may not be called on executing generators");
                      } else if (tmp6 === 3) {
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
                              closure_2 = tmp3;
                              closure_1 = tmp7;
                              closure_129_0 = synced;
                              if (null != synced.synced) {
                                if (guildIds === obj10.database()) {
                                  if (closure_2_0 === closure_2_6.lastTimeConnectedChanged()) {
                                    synced = tmp35.synced;
                                    if (synced.has(tmp34)) {
                                      c6 = 3;
                                      return { value: 1, done: true };
                                    } else {
                                      const _HermesInternal = HermesInternal;
                                      closure_2_15.verbose("optimstically writing basic_channels (guild: " + tmp34 + ")");
                                      c4 = 1;
                                      const items = [tmp34];
                                      c5 = 3;
                                      c6 = 1;
                                      const obj1 = { value: closure_2_10.loadGuildIds(items), done: false };
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
                            closure_129_1 = closure_3;
                            closure_2_15.warn("couldn't optimstically write basic_channel:", closure_129_1);
                            c6 = 3;
                            const obj2 = { value: { v: "Array" }, done: true };
                            return obj2;
                          } else if (2 === tmp7) {
                            if (arg0 === 1) {
                              c6 = 3;
                              throw value;
                            } else if (arg0 === 2) {
                              c6 = 3;
                              const obj3 = { value, done: true };
                              return obj3;
                            } else {
                              c6 = 3;
                              return { value: "HermesInternal", done: null };
                            }
                          } else if (3 === tmp7) {
                            if (arg0 === 1) {
                              c6 = 3;
                              throw value;
                            } else if (arg0 === 2) {
                              c4 = 0;
                              c6 = 3;
                              const obj4 = { value, done: true };
                              return obj4;
                            } else {
                              c5 = 4;
                              c6 = 1;
                              const obj5 = { value: closure_130_1.transaction((database) => closure_0.syncOne(synced, database), "handlePostConnectionOpen"), done: false };
                              return obj5;
                            }
                          } else if (arg0 === 1) {
                            c6 = 3;
                            throw value;
                          } else if (arg0 === 2) {
                            c4 = 0;
                            c6 = 3;
                            const obj6 = { value, done: true };
                            return obj6;
                          } else {
                            c4 = 0;
                            const promise = new Promise((arg0) => setTimeout(arg0, 1000));
                            c5 = 2;
                            c6 = 1;
                            obj = { value: promise, done: false };
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
                  let synced = guildIds[Symbol.iterator]();
                  if (synced !== undefined) {
                    c7 = 1;
                    closure_134_4 = tmp37;
                    const iter4 = closure_134_3(closure_134_4)[tmp57.iterator]();
                    HermesBuiltin.ensureObject("iterator is not an object");
                    const next = iter4.next;
                    closure_2 = undefined;
                    const tmp69 = closure_134_3(closure_134_4);
                  }
                }
                obj7 = synced(iter3[12]);
              }
            }
            c10 = 3;
            return { value: "HermesInternal", done: null };
          }
        } else if (1 === tmp7) {
          c7 = 0;
          synced.return();
          throw closure_8;
        } else {
          if (2 === tmp7) {
            c7 = 2;
            if (arg0 === 1) {
              c10 = 3;
              throw value;
            } else {
              closure_2 = value;
              if (arg0 === 2) {
                closure_2 = value;
                c7 = 1;
                const method = HermesBuiltin.getMethod("return");
                if (method === undefined) {
                  c7 = 0;
                  synced.return();
                  c10 = 3;
                  let obj1 = { value, done: true };
                  return obj1;
                } else {
                  const iter2 = method(closure_2);
                  HermesBuiltin.ensureObject("iterator.return() did not return an object");
                  if (iter2.done) {
                    c7 = 0;
                    synced.return();
                    c10 = 3;
                    obj = { value: iter2.value, done: true };
                    return obj;
                  } else {
                    c9 = 2;
                    c10 = 1;
                    return iter2;
                  }
                }
              } else {
                c7 = 1;
                const tmp19 = value;
              }
            }
          } else {
            c7 = 1;
            const method1 = HermesBuiltin.getMethod("throw");
            if (method1 === undefined) {
              const method2 = HermesBuiltin.getMethod("return");
              if (method2 !== undefined) {
                HermesBuiltin.ensureObject("iterator.return() did not return an object");
              }
              throw new TypeError("yield* delegate must have a .throw() method");
            } else {
              const iter = method1(tmp9);
              HermesBuiltin.ensureObject("iterator.throw() did not return an object");
              if (iter.done) {
                iter3 = iter;
              } else {
                c9 = 2;
                c10 = 1;
                return iter;
              }
            }
            tmp9 = closure_8;
          }
          value = iter3.value;
          closure_134_2 = value;
          if (0 === value) {
            c7 = 0;
            synced.return();
          } else {
            if (1 !== closure_134_2) {
              if (closure_134_2) {
                c7 = 0;
                synced.return();
                c10 = 3;
                let obj2 = { value: closure_134_2.v, done: true };
                return obj2;
              }
            }
            c7 = 0;
          }
        }
        iter3 = next(tmp19);
        HermesBuiltin.ensureObject("iterator.next() did not return an object");
        if (!iter3.done) {
          c9 = 2;
          c10 = 1;
          return iter3;
        }
      } catch (tmp50) {
        closure_8 = tmp50;
        if (tmp3 === c7) {
          c10 = tmp2;
          throw tmp50;
        } else if (tmp === tmp52) {
          c9 = tmp;
        } else {
          c9 = tmp2;
        }
      }
    }
  })();
};
prototype["handleGuildCreate"] = function handleGuildCreate(guild, arg1) {
  this.handleOneGuildCreate(guild.guild, arg1);
};
prototype["handleOneGuildCreate"] = function handleOneGuildCreate(arg0, iter) {
  ({ id, channels } = arg0);
  const op = channels.op;
  const self = this;
  if ("full_sync" === op) {
    self.onGuildSync(id, iter);
  } else if ("update" === op) {
    self.onGuildUpdate(id, channels.writes, channels.deletes, iter);
  }
};
prototype["handleGuildUpdate"] = function handleGuildUpdate(guild, iter) {
  this.unsync(guild.guild.id, iter);
};
prototype["handleGuildDelete"] = function handleGuildDelete(guild, arg1) {
  if (true !== guild.guild.unavailable) {
    const self = this;
    this.delete(guild.guild.id, arg1);
  }
};
prototype["handleGuildRoleUpdate"] = function handleGuildRoleUpdate(role, iter) {
  role = role.role;
  role = GuildRoleStore.getRole(role.guildId, role.id);
  let equalsResult = null != role;
  if (equalsResult) {
    const deserializer = BigFlagUtilsAll;
    equalsResult = BigFlagUtilsAll.equals(deserializer.deserialize(role.permissions), role.permissions);
  }
  if (!equalsResult) {
    const self = this;
    this.unsync(role.guildId, iter);
  }
};
prototype["handleGuildMemberUpdate"] = function handleGuildMemberUpdate(user, iter) {
  if (user.user.id === AuthenticationStore.getId()) {
    const self = this;
    this.unsync(user.guildId, iter);
  }
};
prototype["handleWriteCaches"] = function handleWriteCaches(arg0, arg1) {
  this.sync(arg1);
};
prototype["resetInMemoryState"] = function resetInMemoryState() {
  this.synced = null;
};
prototype["onGuildUpdate"] = function onGuildUpdate(id, mapped, deleted_channel_ids, iter) {
  let someResult = deleted_channel_ids.length > 0;
  if (!someResult) {
    someResult = mapped.some((id) => {
      basicChannel = basicChannel.getBasicChannel(id.id);
      let tmp2 = null == basicChannel || basicChannel.type !== id.type || basicChannel.parent_id !== id.parent_id;
      if (!tmp2) {
        const basicPermissions = PermissionStore.computeBasicPermissions(basicChannel);
        tmp2 = basicPermissions !== PermissionStore.computeBasicPermissions(id);
      }
      return tmp2;
    });
  }
  if (someResult) {
    const self = this;
    this.unsync(id, iter);
  }
};
prototype["onGuildSync"] = function onGuildSync(id, iter) {
  this.unsync(id, iter);
};
prototype["delete"] = function delete(guild_id, database) {
  this.unsync(guild_id, database);
  const result = DatabaseDaosDefault.basicChannelsTransaction(database);
  result.delete(guild_id);
  const result1 = DatabaseDaosDefault.syncedBasicChannelsTransaction(database);
  result1.delete(guild_id);
};
prototype["unsync"] = function unsync(guild_id, iter) {
  const synced = this.synced;
  if (synced != null) {
    synced.delete(guild_id);
  }
  const result = DatabaseDaosDefault.basicChannelsTransaction(iter);
  result.delete(guild_id);
  const result1 = DatabaseDaosDefault.syncedBasicChannelsTransaction(iter);
  result1.put(guild_id, false);
  BasicChannelCacheStore.invalidate(guild_id);
};
prototype["sync"] = function sync(database) {
  const self = this;
  closure_15.verbose("Starting to write all basic channels");
  let num = 0;
  let num2 = 0;
  const guildIds = GuildStore.getGuildIds();
  const nowResult = performance.now();
  while (tmp4 !== undefined) {
    if (self.syncOne(tmp5, database)) {
      num = num + 1;
    } else {
      num2 = num2 + 1;
    }
    continue;
  }
  closure_15.verbose("" + num + " basic_channel guilds submitted (took: " + performance.now() - nowResult + "ms, skipped: " + num2 + " guilds)");
};
prototype["syncOne"] = function syncOne(id, database) {
  const self = this;
  let flag = null != GuildStore.getGuild(id);
  if (flag) {
    const synced = self.synced;
    let hasItem;
    if (synced != null) {
      hasItem = synced.has(id);
    }
    flag = !hasItem;
  }
  if (flag) {
    const synced2 = self.synced;
    if (synced2 != null) {
      synced2.add(id);
    }
    const result = DatabaseDaosDefault.basicChannelsTransaction(database);
    const _Object = Object;
    const values = Object.values(ChannelStore.getMutableGuildChannelsForGuild(id));
    result.put(id, values.map((id) => {
      const obj = { id: id.id, type: id.type, guild_id: id.guild_id, parent_id: id.parent_id, basicPermissions: BasicPermissionUtilsDefault.asBasicFlag(PermissionStore.computePermissions(id)) };
      return obj;
    }));
    const result1 = DatabaseDaosDefault.syncedBasicChannelsTransaction(database);
    result1.put(id, true);
    flag = true;
  }
  return flag;
};
let size = Object.create(GuildBasicChannels.prototype);
let closure_129_0 = size;
size.synced = null;
size.actions = {
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
size = fn(2);
let result = size.fileFinishedImporting("modules/app_database/modules/GuildBasicChannels.tsx");

export default size;