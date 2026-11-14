// discord_app/modules/app_database/modules/GuildBasicChannels.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import SnowflakeUtilsDefault from "../../../utils/SnowflakeUtils.tsx";
import BigFlagUtilsAll from "../../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import DatabaseDaosDefault from "../DatabaseDaos.tsx";
import CommunicationDisabledUtils from "../../guild_communication_disabled/CommunicationDisabledUtils.tsx";
import PermissionUtils from "../../../utils/PermissionUtils.tsx";
import BasicPermissionUtilsDefault from "../../../utils/BasicPermissionUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import GatewayConnectionStore from "../../gateway/GatewayConnectionStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import GuildRoleStore from "../../../stores/GuildRoleStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import BasicChannelCacheStore from "../stores/BasicChannelCacheStore.tsx";

require = fn;
function hasBasicChannelChanged(basicChannel, nextResult) {
  let tmp = null == basicChannel || basicChannel.type !== nextResult.type || basicChannel.parent_id !== nextResult.parent_id;
  if (!tmp) {
    let flag = basicChannel.nsfw;
    if (flag == null) {
      flag = false;
    }
    tmp = flag !== nextResult.nsfw;
  }
  if (!tmp) {
    const basicPermissions = PermissionStore.computeBasicPermissions(basicChannel);
    tmp = basicPermissions !== PermissionStore.computeBasicPermissions(nextResult);
  }
  return tmp;
}
function toPermissionInputs(roles) {
  let tmp = null;
  if (null != roles) {
    const obj = { roles: null, isPending: null, flags: null, communicationDisabledUntil: null };
    items = [];
    HermesBuiltin.arraySpread(roles.roles, 0);
    obj.roles = items;
    let flag = roles.isPending;
    if (flag == null) {
      flag = false;
    }
    obj.isPending = flag;
    let num2 = roles.flags;
    if (num2 == null) {
      num2 = 0;
    }
    obj.flags = num2;
    let prop = null;
    if (obj2.isCommunicationDisabled(roles.communicationDisabledUntil)) {
      prop = roles.communicationDisabledUntil;
    }
    obj.communicationDisabledUntil = prop;
    tmp = obj;
    obj2 = CommunicationDisabledUtils;
  }
  return tmp;
}
function haveSelfMemberPermissionInputsChanged(roles, member) {
  let tmp = null != roles;
  if (tmp) {
    tmp = undefined !== member;
  }
  if (tmp) {
    let tmp2 = null === member;
    if (!tmp2) {
      roles = member.roles;
      const roles1 = roles.roles;
      let set;
      let flag = false;
      if (roles.length === roles1.length) {
        const _Set = Set;
        set = new Set(roles);
        flag = roles1.every((item) => set.has(item));
      }
      let tmp9 = !flag;
      if (flag) {
        let flag2 = roles.isPending;
        if (flag2 == null) {
          flag2 = false;
        }
        let flag3 = member.isPending;
        if (flag3 == null) {
          flag3 = false;
        }
        tmp9 = flag2 !== flag3;
      }
      if (!tmp9) {
        tmp9 = null != member.communicationDisabledUntil !== CommunicationDisabledUtils.isCommunicationDisabled(roles.communicationDisabledUntil);
        const tmp10 = null != member.communicationDisabledUntil;
      }
      if (!tmp9) {
        let num = roles.flags;
        if (num == null) {
          num = 0;
        }
        let num2 = member.flags;
        if (num2 == null) {
          num2 = 0;
        }
        tmp9 = (num & PermissionUtils.PERMISSION_MEMBER_FLAGS_MASK) != (num2 & PermissionUtils.PERMISSION_MEMBER_FLAGS_MASK);
        const tmp15 = num & PermissionUtils.PERMISSION_MEMBER_FLAGS_MASK;
      }
      tmp2 = tmp9;
    }
    tmp = tmp2;
  }
  return tmp;
}
function haveRolesChangedSinceSync(id, value, op) {
  items = roles1;
  if (roles1 === undefined) {
    items = [];
  }
  let set;
  let map;
  if ("update" === op.op) {
    if (0 === op.writes.length) {
      if (0 === op.deletes.length) {
        return false;
      }
    }
  }
  if (null == value) {
    return true;
  } else {
    const items1 = [set(11).castGuildIdAsEveryoneGuildRoleId(id)];
    const member = value.member;
    let roles;
    if (member != null) {
      roles = member.roles;
    }
    if (roles == null) {
      roles = [];
    }
    HermesBuiltin.arraySpread(items, HermesBuiltin.arraySpread(roles, 1));
    set = new Set(items1);
    if ("full_sync" === op.op) {
      const _Map = Map;
      const items2 = op.items;
      map = new Map(items2.map((item) => {
        items = [, ];
        ({ id: arr[0], permissions: arr[1] } = item);
        return items;
      }));
      const items3 = [];
      HermesBuiltin.arraySpread(tmp10, 0);
      return items3.some((item) => {
        value = map.get(item);
        let equalsResult = null != tmp && null != value;
        if (equalsResult) {
          const deserializer = BigFlagUtilsAll;
          const obj = BigFlagUtilsAll;
          const deserializer2 = BigFlagUtilsAll;
          equalsResult = obj.equals(deserializer.deserialize(tmp), deserializer2.deserialize(value));
          const deserializeResult = deserializer.deserialize(tmp);
        }
        return !equalsResult;
      });
    } else {
      const deletes = op.deletes;
      let someResult = deletes.some((item) => set.has(item));
      if (!someResult) {
        const writes = op.writes;
        someResult = writes.some((id) => {
          let hasItem = set.has(id.id);
          if (hasItem) {
            const permissions = id.permissions;
            let equalsResult = null != tmp3 && null != permissions;
            if (equalsResult) {
              const deserializer = BigFlagUtilsAll;
              const obj = BigFlagUtilsAll;
              const deserializer2 = BigFlagUtilsAll;
              equalsResult = obj.equals(deserializer.deserialize(tmp3), deserializer2.deserialize(permissions));
              const deserializeResult = deserializer.deserialize(tmp3);
            }
            hasItem = !equalsResult;
          }
          return hasItem;
        });
      }
      return someResult;
    }
    let obj = set(11);
  }
}
function isCurrentSyncStatus(version) {
  if (null != version) {
    if (typeof version === "object") {
      ({ member, rolePermissions, ownerId } = version);
      if (4 === version.version) {
        if (undefined !== member) {
          if (null != rolePermissions) {
            if (typeof rolePermissions === "object") {
              const _Array = Array;
              if (!Array.isArray(rolePermissions)) {
                const _Object = Object;
                const values = Object.values(rolePermissions);
                if (values.every((item) => {
                  let isMatch = typeof item === "string";
                  if (typeof item === "string") {
                    isMatch = regex.test(item);
                  }
                  return isMatch;
                })) {
                  if (null === ownerId) {
                    if (typeof tmp6 === "number") {
                      if (null === member) {
                        return true;
                      } else if (typeof member !== "object") {
                        return false;
                      } else {
                        ({ roles, isPending, flags, communicationDisabledUntil } = member);
                        const _Array2 = Array;
                        let tmp = Array.isArray(roles) && roles.every((item) => typeof item === "string");
                        if (tmp) {
                          tmp = null == isPending || typeof isPending === "boolean";
                          const tmp2 = null == isPending || typeof isPending === "boolean";
                        }
                        if (tmp) {
                          tmp = null == flags || typeof flags === "number";
                          const tmp3 = null == flags || typeof flags === "number";
                        }
                        if (tmp) {
                          let tmp4 = null == communicationDisabledUntil;
                          if (!tmp4) {
                            let result = typeof communicationDisabledUntil === "string";
                            if (typeof communicationDisabledUntil === "string") {
                              result = CommunicationDisabledUtils.isCommunicationDisabled(communicationDisabledUntil);
                            }
                            tmp4 = result;
                          }
                          tmp = tmp4;
                        }
                        return tmp;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      return false;
    }
  }
  return false;
}
let closure_7 = fn(5159).createChannelRecordFromServer;
const ChannelLoader = fn(5155).ChannelLoader;
let closure_16 = new LoggerDefault("GuildBasicChannels");
const re17 = /^\d+$/;
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
      GUILD_ROLE_DELETE(arg0, arg1) {
            return obj.handleGuildRoleDelete(arg0, arg1);
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
    items = [tmp3(5184).basicChannels(closure_0).getKvEntries(), ];
    tmp3(5184).basicChannels(closure_0);
    items[1] = tmp3(5184).syncedBasicChannels(closure_0).getKvEntries();
    await Promise.all(items);
    closure_128_1 = value;
    closure_128_2 = _slicedToArray(closure_128_1, 2);
    closure_128_3 = closure_128_2[0];
    closure_128_4 = closure_128_2[1];
    const _performance = performance;
    closure_128_5 = performance.now() - closure_128_0;
    closure_128_6 = (function groupStatuses(arg0) {
      items = [];
      const items1 = [];
      while (tmp !== undefined) {
        let tmp4 = closure_1_4(tmp2, 2);
        [tmp5, tmp6] = tmp4;
        if (closure_1_22(tmp6)) {
          let items2 = [tmp5, tmp6];
          let arr = items.push(items2);
        } else {
          let arr2 = items1.push(tmp5);
        }
        continue;
      }
      const items3 = [items, items1];
      return items3;
    })(closure_128_4);
    closure_128_7 = _slicedToArray(closure_128_6, 2);
    closure_128_8 = closure_128_7[0];
    closure_128_9 = closure_128_7[1];
    const _Map = Map;
    closure_128_10 = new Map(closure_128_8);
    closure_129_1.synced = closure_128_10;
    const _HermesInternal = HermesInternal;
    closure_1_16.verbose("loaded in " + closure_128_5 + "ms (guilds: " + closure_128_3.length + ", synced: " + closure_128_10.size + " unsynced: " + closure_128_9.length + ")");
    new Map(closure_128_8);
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
        const synced = self.synced;
        if (synced != null) {
          value = synced.get(iter.id);
        }
        const properties = iter.properties;
        let tmp6 = null != properties;
        if (tmp6) {
          let tmp7 = null == value || undefined === properties.owner_id || null == properties.mfa_level;
          if (!tmp7) {
            let owner_id = properties.owner_id;
            if (owner_id == null) {
              owner_id = null;
            }
            tmp7 = owner_id !== value.ownerId;
          }
          if (!tmp7) {
            tmp7 = properties.mfa_level !== value.mfaLevel;
          }
          tmp6 = tmp7;
        }
        if (!tmp6) {
          let roles = iter.partial_updates.roles;
          if (roles == null) {
            roles = [];
          }
          const obj2 = { op: "update", writes: roles, deletes: null };
          let deleted_role_ids = iter.partial_updates.deleted_role_ids;
          if (deleted_role_ids == null) {
            deleted_role_ids = [];
          }
          obj2.deletes = deleted_role_ids;
          if (!haveRolesChangedSinceSync(iter.id, value, obj2)) {
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
          }
        }
        self.unsync(iter.id, iter);
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
  return (async () => {
    if (c10 === 2) {
      c10 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
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
            let obj3 = { value, done: true };
            return obj3;
          } else {
            closure_134_0 = undefined;
            closure_134_1 = undefined;
            closure_134_2 = undefined;
            closure_134_3 = undefined;
            closure_134_4 = undefined;
            closure_134_0 = tmp4.lastTimeConnectedChanged();
            const databaseResult = guildIds(iter3[12]).database();
            closure_134_1 = databaseResult;
            if (null != self.synced) {
              if (null != databaseResult) {
                if (obj7.isCacheEnabled()) {
                  guildIds = guildIds.getGuildIds();
                  let _HermesInternal = HermesInternal;
                  closure_1_16.verbose("scheduling basic_channel optimstic writes (guilds: " + guildIds.filter((item) => {
                    synced = synced.synced;
                    return !synced.has(item);
                  }).length + ")");
                  closure_134_3 = function _loop2(arg0) {
                    synced = arg0;
                    c5 = 0;
                    c6 = 0;
                    c4 = 0;
                    return (function* _loop2(arg0) {
                      if (c6 === 2) {
                        c6 = 3;
                        throw new TypeError("Generator functions may not be called on executing generators");
                      } else if (tmp6 === 3) {
                        if (arg0 === 1) {
                          throw value;
                        } else if (arg0 === 2) {
                          const obj2 = { value, done: true };
                          return obj2;
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
                              const obj3 = { value, done: true };
                              return obj3;
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
                                      closure_2_16.verbose("optimstically writing basic_channels (guild: " + tmp34 + ")");
                                      c4 = 1;
                                      items = [tmp34];
                                      c5 = 3;
                                      c6 = 1;
                                      const obj4 = { value: closure_2_10.loadGuildIds(items), done: false };
                                      return obj4;
                                    }
                                  }
                                }
                                obj10 = guildIds(iter3[12]);
                              }
                              c6 = 3;
                              return { value: 0, done: true };
                            }
                          } else if (1 === tmp7) {
                            c4 = 0;
                            closure_129_1 = closure_3;
                            closure_2_16.warn("couldn't optimstically write basic_channel:", closure_129_1);
                            c6 = 3;
                            const obj5 = { value: { v: "r" }, done: true };
                            return obj5;
                          } else if (2 === tmp7) {
                            if (arg0 === 1) {
                              c6 = 3;
                              throw value;
                            } else if (arg0 === 2) {
                              c6 = 3;
                              const obj6 = { value, done: true };
                              return obj6;
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
                              const obj7 = { value, done: true };
                              return obj7;
                            } else {
                              c5 = 4;
                              c6 = 1;
                              const obj8 = { value: closure_130_1.transaction((database) => closure_0.syncOne(synced, database), "handlePostConnectionOpen"), done: false };
                              return obj8;
                            }
                          } else if (arg0 === 1) {
                            c6 = 3;
                            throw value;
                          } else if (arg0 === 2) {
                            c4 = 0;
                            c6 = 3;
                            const obj9 = { value, done: true };
                            return obj9;
                          } else {
                            c4 = 0;
                            const promise = new Promise((arg0) => setTimeout(arg0, 1000));
                            c5 = 2;
                            c6 = 1;
                            const obj = { value: promise, done: false };
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
                obj7 = synced(iter3[13]);
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
                  let obj4 = { value, done: true };
                  return obj4;
                } else {
                  const iter2 = method(closure_2);
                  HermesBuiltin.ensureObject("iterator.return() did not return an object");
                  if (iter2.done) {
                    c7 = 0;
                    synced.return();
                    c10 = 3;
                    let obj = { value: iter2.value, done: true };
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
                let obj5 = { value: closure_134_2.v, done: true };
                return obj5;
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
  ({ id, channels, roles, properties, members } = arg0);
  const id1 = AuthenticationStore.getId();
  const found = members.find((user) => user.user.id === id1);
  if (null != found) {
    ({ pending, flags, communication_disabled_until } = found);
    const obj = { roles: null, isPending: null, flags: null, communicationDisabledUntil: null };
    items = [];
    HermesBuiltin.arraySpread(found.roles, 0);
    obj.roles = items;
    if (pending == null) {
      pending = false;
    }
    obj.isPending = pending;
    if (flags == null) {
      flags = 0;
    }
    obj.flags = flags;
    let tmp8 = null;
    if (obj2.isCommunicationDisabled(communication_disabled_until)) {
      tmp8 = communication_disabled_until;
    }
    obj.communicationDisabledUntil = tmp8;
    obj2 = CommunicationDisabledUtils;
  }
  const self = this;
  const synced = this.synced;
  if (synced != null) {
    value = synced.get(id);
  }
  if (null == self.synced) {
    const trueMember = GuildMemberStore.getTrueMember(id, id1);
    let tmp12 = null;
    if (null != trueMember) {
      const obj3 = { roles: null, isPending: null, flags: null, communicationDisabledUntil: null };
      const items1 = [];
      HermesBuiltin.arraySpread(trueMember.roles, 0);
      obj3.roles = items1;
      let flag = trueMember.isPending;
      if (flag == null) {
        flag = false;
      }
      obj3.isPending = flag;
      let num3 = trueMember.flags;
      if (num3 == null) {
        num3 = 0;
      }
      obj3.flags = num3;
      let prop = null;
      if (obj4.isCommunicationDisabled(trueMember.communicationDisabledUntil)) {
        prop = trueMember.communicationDisabledUntil;
      }
      obj3.communicationDisabledUntil = prop;
      tmp12 = obj3;
      obj4 = CommunicationDisabledUtils;
    }
    let member = tmp12;
  } else if (value != null) {
    member = value.member;
  }
  let tmp18 = null != properties;
  if (tmp18) {
    let tmp19 = null == value || undefined === properties.owner_id || null == properties.mfa_level;
    if (!tmp19) {
      let owner_id = properties.owner_id;
      if (owner_id == null) {
        owner_id = null;
      }
      tmp19 = owner_id !== value.ownerId;
    }
    if (!tmp19) {
      tmp19 = properties.mfa_level !== value.mfaLevel;
    }
    tmp18 = tmp19;
  }
  if (!tmp18) {
    let roles1;
    if (tmp3 != null) {
      roles1 = tmp3.roles;
    }
    if (!haveRolesChangedSinceSync(id, value, roles, roles1)) {
      if (!haveSelfMemberPermissionInputsChanged(tmp3, member)) {
        const op = channels.op;
        if ("full_sync" === op) {
          self.onGuildSync(id, iter);
        } else if ("update" === op) {
          self.onGuildUpdate(id, channels.writes, channels.deletes, iter);
        }
      }
    }
  }
  self.unsync(id, iter);
};
prototype["handleGuildUpdate"] = function handleGuildUpdate(guild, iter) {
  const self = this;
  guild = guild.guild;
  if (!this.isUnsynced(guild.id)) {
    const synced = self.synced;
    if (synced != null) {
      value = synced.get(guild.id);
    }
    let tmp3 = null != guild;
    if (tmp3) {
      let tmp4 = null == value || undefined === guild.owner_id || null == guild.mfa_level;
      if (!tmp4) {
        let owner_id = guild.owner_id;
        if (owner_id == null) {
          owner_id = null;
        }
        tmp4 = owner_id !== value.ownerId;
      }
      if (!tmp4) {
        tmp4 = guild.mfa_level !== value.mfaLevel;
      }
      tmp3 = tmp4;
    }
    if (!tmp3) {
      const obj = { op: "full_sync", items: guild.roles };
      tmp3 = haveRolesChangedSinceSync(guild.id, value, obj);
    }
    if (tmp3) {
      self.unsync(guild.id, iter);
    }
  }
};
prototype["handleGuildDelete"] = function handleGuildDelete(guild, arg1) {
  if (true !== guild.guild.unavailable) {
    const self = this;
    this.delete(guild.guild.id, arg1);
  }
};
prototype["handleGuildRoleUpdate"] = function handleGuildRoleUpdate(arg0, iter) {
  const self = this;
  ({ guildId, role } = arg0);
  if (!this.isUnsynced(guildId)) {
    const synced = self.synced;
    value = undefined;
    if (synced != null) {
      value = synced.get(guildId);
    }
    const obj = { op: "update", writes: null, deletes: null };
    items = [role];
    obj.writes = items;
    obj.deletes = [];
    if (haveRolesChangedSinceSync(guildId, value, obj)) {
      self.unsync(guildId, iter);
    }
  }
};
prototype["handleGuildRoleDelete"] = function handleGuildRoleDelete(arg0, iter) {
  const self = this;
  ({ guildId, roleId } = arg0);
  if (!this.isUnsynced(guildId)) {
    const synced = self.synced;
    value = undefined;
    if (synced != null) {
      value = synced.get(guildId);
    }
    const obj = { op: "update", writes: [], deletes: null };
    items = [roleId];
    obj.deletes = items;
    if (haveRolesChangedSinceSync(guildId, value, obj)) {
      self.unsync(guildId, iter);
    }
  }
};
prototype["handleGuildMemberUpdate"] = function handleGuildMemberUpdate(user, iter) {
  const id = AuthenticationStore.getId();
  if (user.user.id === id) {
    const self = this;
    if (!this.isUnsynced(user.guildId)) {
      const synced = self.synced;
      value = undefined;
      if (synced != null) {
        value = synced.get(user.guildId);
      }
      if (null != value) {
        let member = value.member;
      } else {
        const trueMember = GuildMemberStore.getTrueMember(user.guildId, id);
        member = null;
        if (null != trueMember) {
          const obj = { roles: null, isPending: null, flags: null, communicationDisabledUntil: null };
          items = [];
          HermesBuiltin.arraySpread(trueMember.roles, 0);
          obj.roles = items;
          let flag = trueMember.isPending;
          if (flag == null) {
            flag = false;
          }
          obj.isPending = flag;
          let num2 = trueMember.flags;
          if (num2 == null) {
            num2 = 0;
          }
          obj.flags = num2;
          let prop = null;
          if (obj2.isCommunicationDisabled(trueMember.communicationDisabledUntil)) {
            prop = trueMember.communicationDisabledUntil;
          }
          obj.communicationDisabledUntil = prop;
          member = obj;
          obj2 = CommunicationDisabledUtils;
        }
      }
      let tmp11 = null;
      if (null != user) {
        const obj3 = { roles: null, isPending: null, flags: null, communicationDisabledUntil: null };
        const items1 = [];
        HermesBuiltin.arraySpread(user.roles, 0);
        obj3.roles = items1;
        let flag2 = user.isPending;
        if (flag2 == null) {
          flag2 = false;
        }
        obj3.isPending = flag2;
        let num4 = user.flags;
        if (num4 == null) {
          num4 = 0;
        }
        obj3.flags = num4;
        let prop1 = null;
        if (obj4.isCommunicationDisabled(user.communicationDisabledUntil)) {
          prop1 = user.communicationDisabledUntil;
        }
        obj3.communicationDisabledUntil = prop1;
        tmp11 = obj3;
        obj4 = CommunicationDisabledUtils;
      }
      if (member == null) {
        member = null;
      }
      if (haveSelfMemberPermissionInputsChanged(tmp11, member)) {
        self.unsync(user.guildId, iter);
      }
    }
  }
};
prototype["isUnsynced"] = function isUnsynced(guildId) {
  let tmp2 = null != this.synced;
  if (tmp2) {
    const synced = tmp.synced;
    tmp2 = !synced.has(guildId);
  }
  return tmp2;
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
        let flag = basicChannel.nsfw;
        if (flag == null) {
          flag = false;
        }
        tmp2 = flag !== id.nsfw;
      }
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
prototype["delete"] = function delete(guildId, database) {
  this.unsync(guildId, database);
  const result = DatabaseDaosDefault.basicChannelsTransaction(database);
  result.delete(guildId);
  const result1 = DatabaseDaosDefault.syncedBasicChannelsTransaction(database);
  result1.delete(guildId);
};
prototype["unsync"] = function unsync(guildId, iter) {
  const synced = this.synced;
  if (synced != null) {
    synced.delete(guildId);
  }
  const result = DatabaseDaosDefault.basicChannelsTransaction(iter);
  result.delete(guildId);
  const result1 = DatabaseDaosDefault.syncedBasicChannelsTransaction(iter);
  result1.put(guildId, false);
  BasicChannelCacheStore.invalidate(guildId);
};
prototype["sync"] = function sync(database) {
  const self = this;
  closure_16.verbose("Starting to write all basic channels");
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
  closure_16.verbose("" + num + " basic_channel guilds submitted (took: " + performance.now() - nowResult + "ms, skipped: " + num2 + " guilds)");
};
prototype["syncOne"] = function syncOne(id, database) {
  guild = GuildStore.getGuild(id);
  if (null != guild) {
    const synced2 = this.synced;
    let hasItem;
    const self = this;
    if (synced2 != null) {
      hasItem = synced2.has(id);
    }
    if (!hasItem) {
      const _Object = Object;
      const values = Object.values(ChannelStore.getMutableGuildChannelsForGuild(id));
      const mapped = values.map((id) => {
        const obj = { id: id.id, type: id.type, guild_id: id.guild_id, parent_id: id.parent_id, basicPermissions: BasicPermissionUtilsDefault.asBasicFlag(PermissionStore.computePermissions(id)), nsfw: id.nsfw || undefined };
        return obj;
      });
      const tmp6 = (function createSyncStatus(guild) {
        const tmp = toPermissionInputs(member.getMember(guild.id, id.getId()));
        const obj = {};
        items = [SnowflakeUtilsDefault.castGuildIdAsEveryoneGuildRoleId(guild.id)];
        let roles;
        if (tmp != null) {
          roles = tmp.roles;
        }
        if (roles == null) {
          roles = [];
        }
        HermesBuiltin.arraySpread(roles, 1);
        for (const item10033 of items) {
          role = role.getRole(arg0.id, item10033);
          if (null != role) {
            let str = tmp6.permissions;
            obj[item10033] = str.toString();
          }
          continue;
        }
        const obj3 = { version: 4, member: tmp, rolePermissions: obj, ownerId: null, mfaLevel: null };
        let ownerId = guild.ownerId;
        if (ownerId == null) {
          ownerId = null;
        }
        obj3.ownerId = ownerId;
        obj3.mfaLevel = guild.mfaLevel;
        return obj3;
      })(guild);
      const synced = self.synced;
      if (synced != null) {
        const result = synced.set(id, tmp6);
      }
      const result1 = DatabaseDaosDefault.basicChannelsTransaction(database);
      result1.put(id, mapped);
      const result2 = DatabaseDaosDefault.syncedBasicChannelsTransaction(database);
      result2.put(id, tmp6);
      return true;
    }
  }
  return false;
};
let obj2 = Object.create(GuildBasicChannels.prototype);
let closure_129_0 = obj2;
obj2.synced = null;
obj2.actions = {
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
  GUILD_ROLE_DELETE(arg0, arg1) {
    return obj.handleGuildRoleDelete(arg0, arg1);
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
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_database/modules/GuildBasicChannels.tsx");

export default obj2;