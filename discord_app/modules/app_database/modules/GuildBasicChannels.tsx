// discord_app/modules/app_database/modules/GuildBasicChannels.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import BigFlagUtilsAll from "../../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import ChannelStore2 from "../../../stores/ChannelStore.tsx";
import ChannelRecord from "../../../records/ChannelRecord.tsx";
import DatabaseDaosDefault from "../DatabaseDaos.tsx";
import BasicPermissionUtilsDefault from "../../../utils/BasicPermissionUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import GatewayConnectionStore from "../../gateway/GatewayConnectionStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import GuildRoleStore from "../../../stores/GuildRoleStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import BasicChannelCacheStore from "../stores/BasicChannelCacheStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const ChannelStore = ChannelStore2;
let c10, c9, closure_3, set;

function hasBasicChannelChanged(basicChannel, nextResult) {
  let tmp =
    null == basicChannel || basicChannel.type !== nextResult.type || basicChannel.parent_id !== nextResult.parent_id;
  if (!tmp) {
    const basicPermissions = PermissionStore.computeBasicPermissions(basicChannel);
    tmp = basicPermissions !== PermissionStore.computeBasicPermissions(nextResult);
  }
  return tmp;
}
let closure_7 = ChannelRecord.createChannelRecordFromServer;
const ChannelLoader = ChannelStore2.ChannelLoader;
let tmp2 = new LoggerDefault("GuildBasicChannels");
let closure_15 = tmp2;
class GuildBasicChannels {
  constructor() {
    const obj = Object.create(new.target.prototype);
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
      },
    };
    return obj;
  }
  getAsync(arg0) {
    let closure_0 = arg0;
    let self = this;
    return (async function () {
      let c2;
      let closure_1;
      let tmp2;
      function groupStatuses(arg0) {
        const items = [];
        const items1 = [];
        const tmp = arg0[Symbol.iterator]();
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
      }
      const _performance2 = performance;
      closure_0 = performance.now();
      const obj7 = tmp2(all[11]);
      let items = [,];
      const basicChannelsResult = obj7.basicChannels(closure_0);
      items[0] = basicChannelsResult.getKvEntries();
      const obj9 = tmp2(all[11]);
      const syncedBasicChannelsResult = obj9.syncedBasicChannels(closure_0);
      items[1] = syncedBasicChannelsResult.getKvEntries();
      await all(items);
      tmp2 = value;
      let closure_2 = _slicedToArray(tmp2, 2);
      let closure_4 = closure_2[1];
      const _performance = performance;
      let closure_5 = performance.now() - closure_0;
      let closure_6 = groupStatuses(closure_4);
      closure_7 = _slicedToArray(closure_6, 2);
      let closure_8 = closure_7[0];
      const stale = closure_7[1];
      const _Set = Set;
      self = this;
      const self2 = this;
      set = new Set(closure_8);
      closure_129_1.synced = set;
      const _HermesInternal = HermesInternal;
      closure_1_15.verbose(
        "loaded in " +
          closure_5 +
          "ms (guilds: " +
          all.length +
          ", synced: " +
          set.size +
          " unsynced: " +
          stale.length +
          ")",
      );
      const obj6 = {
        all,
        stale,
        channels: all.filter((item) => {
          let tmp;
          [tmp] = item;
          return set.has(tmp);
        }),
      };
      return obj6;
    })();
  }
  handleChannelCreate(channel, iter) {
    if (null != channel.channel.guild_id) {
      const self = this;
      this.unsync(channel.channel.guild_id, iter);
    }
  }
  handleChannelDelete(channel, iter) {
    if (null != channel.channel.guild_id) {
      const self = this;
      this.unsync(channel.channel.guild_id, iter);
    }
  }
  handleChannelUpdates(channels, iter) {
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
  }
  handleBackgroundSync(arg0, arg1) {
    let closure_0 = arg1;
    const self = this;
    function _loop(iter) {
      closure_0 = iter;
      const data_mode = iter.data_mode;
      if ("unavailable" !== data_mode) {
        if ("partial" === data_mode) {
          const id = iter.id;
          const channels = iter.partial_updates.channels;
          let mapped;
          const onGuildUpdate = self.onGuildUpdate;
          if (channels != null) {
            mapped = channels.map((item) => closure_2_7(item, id.id));
          }
          if (mapped == null) {
            mapped = [];
          }
          let deleted_channel_ids = iter.partial_updates.deleted_channel_ids;
          if (deleted_channel_ids == null) {
            deleted_channel_ids = [];
          }
          onGuildUpdate(id, mapped, deleted_channel_ids, closure_0);
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
  }
  handleConnectionOpen(guilds, arg1) {
    const self = this;
    guilds = guilds.guilds;
    for (const item10008 of guilds) {
      let handleOneGuildCreateResult = self.handleOneGuildCreate(item10008, arg1);
      continue;
    }
  }
  handlePostConnectionOpen() {
    let self = this;
    return (async () => {
      let closure_0;
      let guildIds;
      let iter3;
      let method;
      let value;
      if (c10 === 2) {
        c10 = 3;
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
        let c7;
        try {
          let value2;
          let synced;
          let iter4;
          let next;
          let c2;
          let tmp15;
          c10 = 2;
          const tmp3 = c9;
          if (0 === c9) {
            if (arg0 === 1) {
              c10 = 3;
              throw value;
            } else if (arg0 === 2) {
              c10 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              value2 = undefined;
              let _loop2;
              let c4;
              synced = method.lastTimeConnectedChanged();
              const obj6 = guildIds(iter3[11]);
              const databaseResult = obj6.database();
              let c1 = databaseResult;
              const tmp57 = iter3;
              if (null != self.synced) {
                if (null != databaseResult) {
                  const obj7 = synced(tmp57[12]);
                  if (obj7.isCacheEnabled()) {
                    guildIds = guildIds.getGuildIds();
                    let _HermesInternal = HermesInternal;
                    const verboseResult = closure_1_15.verbose(
                      "scheduling basic_channel optimstic writes (guilds: " +
                        guildIds.filter((item) => {
                          synced = synced.synced;
                          return !synced.has(item);
                        }).length +
                        ")",
                    );
                    _loop2 = function _loop2(c4) {
                      synced = c4;
                      let c5 = 0;
                      let c6 = 0;
                      c4 = 0;
                      return (function* _loop2(arg0) {
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
                            c6 = 2;
                            if (0 === c5) {
                              if (arg0 === 1) {
                                c6 = 3;
                                throw value;
                              } else if (arg0 === 2) {
                                c6 = 3;
                                return { value, done: true };
                              } else {
                                closure_2 = tmp;
                                closure_1 = tmp4;
                                if (null != synced.synced) {
                                  const obj10 = c1(_loop2[11]);
                                  if (c1 === obj10.database()) {
                                    if (synced === closure_2_6.lastTimeConnectedChanged()) {
                                      synced = tmp29.synced;
                                      if (synced.has(synced)) {
                                        c6 = 3;
                                        return { value: 1, done: true };
                                      } else {
                                        const _HermesInternal = HermesInternal;
                                        closure_2_15.verbose(
                                          "optimstically writing basic_channels (guild: " + synced + ")",
                                        );
                                        c4 = 1;
                                        const items = [synced];
                                        c5 = 3;
                                        c6 = 1;
                                        const obj4 = { value: closure_2_10.loadGuildIds(items), done: false };
                                        return obj4;
                                      }
                                    }
                                  }
                                }
                                c6 = 3;
                                return { value: 0, done: true };
                              }
                            } else if (1 === c5) {
                              c4 = 0;
                              closure_1 = closure_3;
                              closure_2_15.warn("couldn't optimstically write basic_channel:", closure_1);
                              c6 = 3;
                              return { value: { v: "r" }, done: true };
                            } else if (2 === c5) {
                              if (arg0 === 1) {
                                c6 = 3;
                                throw value;
                              } else if (arg0 === 2) {
                                c6 = 3;
                                return { value, done: true };
                              } else {
                                c6 = 3;
                                return { value: "IconComponent", done: null };
                              }
                            } else if (3 === c5) {
                              if (arg0 === 1) {
                                c6 = 3;
                                throw value;
                              } else if (arg0 === 2) {
                                c4 = 0;
                                c6 = 3;
                                return { value, done: true };
                              } else {
                                c5 = 4;
                                c6 = 1;
                                const obj8 = {
                                  value: closure_130_1.transaction(
                                    (database) => closure_0.syncOne(closure_1_0, database),
                                    "handlePostConnectionOpen",
                                  ),
                                  done: false,
                                };
                                return obj8;
                              }
                            } else if (arg0 === 1) {
                              c6 = 3;
                              throw value;
                            } else if (arg0 === 2) {
                              c4 = 0;
                              c6 = 3;
                              return { value, done: true };
                            } else {
                              c4 = 0;
                              self = this;
                              const self2 = this;
                              c5 = 2;
                              c6 = 1;
                              const obj = { value: new Promise((arg0) => setTimeout(arg0, 1000)), done: false };
                              return obj;
                            }
                          } catch (tmp20) {
                            closure_3 = tmp20;
                            if (0 === c4) {
                              c6 = 3;
                              throw tmp20;
                            } else {
                              c5 = 1;
                            }
                          }
                        }
                      })();
                    };
                    synced = guildIds[Symbol.iterator]();
                    if (synced !== undefined) {
                      c7 = 1;
                      c4 = tmp33;
                      const tmp64 = _loop2(c4);
                      iter4 = tmp64[tmp52.iterator]();
                      HermesBuiltin.ensureObject("iterator is not an object");
                      next = iter4.next;
                      c2 = undefined;
                    }
                  }
                }
              }
              c10 = 3;
              return { value: "IconComponent", done: null };
            }
          } else if (1 === tmp3) {
            c7 = 0;
            synced.return();
            throw closure_8;
          } else {
            if (2 === tmp3) {
              c7 = 2;
              if (arg0 === 1) {
                c10 = 3;
                throw value;
              } else {
                c2 = value;
                if (arg0 === 2) {
                  c2 = value;
                  c7 = 1;
                  method = HermesBuiltin.getMethod("return");
                  if (method === undefined) {
                    c7 = 0;
                    synced.return();
                    c10 = 3;
                    let obj4 = { value, done: true };
                    return obj4;
                  } else {
                    const iter2 = method(c2);
                    const tmp20 = iter2;
                    HermesBuiltin.ensureObject("iterator.return() did not return an object");
                    if (iter2.done) {
                      c7 = 0;
                      value = iter2.value;
                      synced.return();
                      c10 = 3;
                      let obj = { value, done: true };
                      return obj;
                    } else {
                      c9 = 2;
                      c10 = 1;
                      return iter2;
                    }
                  }
                } else {
                  c7 = 1;
                  tmp15 = value;
                }
              }
            } else {
              const tmp4 = iter4;
              c7 = 1;
              const str = "throw";
              const method1 = HermesBuiltin.getMethod("throw");
              const tmp5 = closure_8;
              if (method1 === undefined) {
                const str3 = "return";
                const method2 = HermesBuiltin.getMethod("return");
                if (method2 !== undefined) {
                  const str4 = "iterator.return() did not return an object";
                  HermesBuiltin.ensureObject("iterator.return() did not return an object");
                }
                const str5 = "yield* delegate must have a .throw() method";
                throw new TypeError("yield* delegate must have a .throw() method");
              } else {
                const iter = method1(tmp5);
                const str2 = "iterator.throw() did not return an object";
                HermesBuiltin.ensureObject("iterator.throw() did not return an object");
                if (iter.done) {
                  iter3 = iter;
                } else {
                  c9 = 2;
                  c10 = 1;
                  return iter;
                }
              }
            }
            value2 = iter3.value;
            if (0 === value2) {
              c7 = 0;
              synced.return();
            } else {
              if (1 !== value2) {
                const tmp42 = value2;
                if (tmp42) {
                  c7 = 0;
                  const v = value2.v;
                  synced.return();
                  c10 = 3;
                  const obj5 = { value: v, done: true };
                  return obj5;
                }
              }
              c7 = 0;
            }
          }
          iter3 = next(tmp15);
          HermesBuiltin.ensureObject("iterator.next() did not return an object");
          if (!iter3.done) {
            c9 = 2;
            c10 = 1;
            return iter3;
          }
        } catch (tmp46) {
          closure_8 = tmp46;
          if (0 === c7) {
            c10 = 3;
            throw tmp46;
          } else if (1 === tmp48) {
            c9 = 1;
          } else {
            c9 = 3;
          }
        }
      }
    })();
  }
  handleGuildCreate(guild, arg1) {
    this.handleOneGuildCreate(guild.guild, arg1);
  }
  handleOneGuildCreate(arg0, iter) {
    let channels;
    let id;
    ({ id, channels } = arg0);
    const op = channels.op;
    const self = this;
    if ("full_sync" === op) {
      self.onGuildSync(id, iter);
    } else if ("update" === op) {
      self.onGuildUpdate(id, channels.writes, channels.deletes, iter);
    }
  }
  handleGuildUpdate(guild, iter) {
    this.unsync(guild.guild.id, iter);
  }
  handleGuildDelete(guild, arg1) {
    if (true !== guild.guild.unavailable) {
      const self = this;
      this.delete(guild.guild.id, arg1);
    }
  }
  handleGuildRoleUpdate(role, iter) {
    role = role.role;
    const role1 = GuildRoleStore.getRole(role.guildId, role.id);
    let equalsResult = null != role1;
    if (equalsResult) {
      const equals = BigFlagUtilsAll.equals;
      BigFlagUtilsAll;
      const deserializer = BigFlagUtilsAll;
      equalsResult = equals(deserializer.deserialize(role.permissions), role1.permissions);
    }
    if (!equalsResult) {
      const self = this;
      this.unsync(role.guildId, iter);
    }
  }
  handleGuildMemberUpdate(user, iter) {
    if (user.user.id === AuthenticationStore.getId()) {
      const self = this;
      this.unsync(user.guildId, iter);
    }
  }
  handleWriteCaches(arg0, arg1) {
    this.sync(arg1);
  }
  resetInMemoryState() {
    this.synced = null;
  }
  onGuildUpdate(id, mapped, deleted_channel_ids, iter) {
    let someResult = deleted_channel_ids.length > 0;
    if (!someResult) {
      let tmp2 = mapped;
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
  }
  onGuildSync(id, iter) {
    this.unsync(id, iter);
  }
  delete(guild_id, database) {
    this.unsync(guild_id, database);
    const obj = DatabaseDaosDefault;
    const result = obj.basicChannelsTransaction(database);
    result.delete(guild_id);
    const obj3 = DatabaseDaosDefault;
    const result1 = obj3.syncedBasicChannelsTransaction(database);
    result1.delete(guild_id);
  }
  unsync(guild_id, iter) {
    const synced = this.synced;
    if (synced != null) {
      synced.delete(guild_id);
    }
    const obj = DatabaseDaosDefault;
    const result = obj.basicChannelsTransaction(iter);
    result.delete(guild_id);
    const obj3 = DatabaseDaosDefault;
    const result1 = obj3.syncedBasicChannelsTransaction(iter);
    result1.put(guild_id, false);
    BasicChannelCacheStore.invalidate(guild_id);
  }
  sync(database) {
    const self = this;
    closure_15.verbose("Starting to write all basic channels");
    let num = 0;
    let num2 = 0;
    const nowResult = performance.now();
    const guildIds = GuildStore.getGuildIds();
    const tmp4 = guildIds[Symbol.iterator]();
    while (tmp4 !== undefined) {
      if (self.syncOne(tmp5, database)) {
        num = num + 1;
      } else {
        num2 = num2 + 1;
      }
      continue;
    }
    closure_15.verbose(
      "" +
        num +
        " basic_channel guilds submitted (took: " +
        performance.now() -
        nowResult +
        "ms, skipped: " +
        num2 +
        " guilds)",
    );
  }
  syncOne(id, database) {
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
      let obj = DatabaseDaosDefault;
      const result = obj.basicChannelsTransaction(database);
      const put = result.put;
      const _Object = Object;
      const values = Object.values(ChannelStore.getMutableGuildChannelsForGuild(id));
      put(
        id,
        values.map((id) => {
          let obj2;
          const obj = {
            id: id.id,
            type: id.type,
            guild_id: id.guild_id,
            parent_id: id.parent_id,
            basicPermissions: obj2.asBasicFlag(PermissionStore.computePermissions(id)),
          };
          obj2 = BasicPermissionUtilsDefault;
          return obj;
        }),
      );
      let obj2 = DatabaseDaosDefault;
      const result1 = obj2.syncedBasicChannelsTransaction(database);
      result1.put(id, true);
      flag = true;
    }
    return flag;
  }
}
const prototype = GuildBasicChannels.prototype;
let obj = Object.create(GuildBasicChannels.prototype);
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
  },
};
let result = size.fileFinishedImporting("modules/app_database/modules/GuildBasicChannels.tsx");

export default obj;
