// === Module 8819: GuildScheduledEventManager ===

// Module 8819 (GuildScheduledEventManager)
import GuildScheduledEventsActionCreatorsDefault from "GuildScheduledEventsActionCreators" /* 8820 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4971 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 6735 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7165 */;

let require = fn;
function getGuildEventsForCurrentUser() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_12 = async function _getGuildEventsForCurrentUser(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
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
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = closure_0;
          if (0 !== guildScheduledEventsForGuild.getGuildScheduledEventsForGuild(closure_0).length) {
            if (!set.has(closure_0)) {
              if (!set2.has(closure_0)) {
                c4 = 1;
                set.add(closure_0);
                c5 = 2;
                c6 = 1;
                const obj5 = { value: GuildScheduledEventsActionCreatorsDefault.getGuildEventsForCurrentUser(closure_0), done: false };
                return obj5;
              }
            }
          }
        }
      } else {
        if (1 === tmp7) {
          c4 = 0;
          closure_130_7.delete(closure_129_0);
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_130_8.add(closure_129_0);
          c4 = 0;
        }
        c4 = 0;
        c6 = 3;
        const obj = { value, done: true };
        return obj;
      }
      c6 = 3;
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
};
let closure_6 = {};
let set = new Set();
const set1 = new Set();
let c9 = 1800000;
const map = new Map();
class GuildScheduledEventManager extends tmp5 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.actions = {
      POST_CONNECTION_OPEN() {
            return applyArgumentsResult.handleConnectionOpen();
          },
      GUILD_DELETE(arg0) {
            return applyArgumentsResult.handleGuildDelete(arg0);
          },
      GUILD_UNAVAILABLE(arg0) {
            return applyArgumentsResult.handleGuildUnavailable(arg0);
          },
      INVITE_RESOLVE_SUCCESS(arg0) {
            return applyArgumentsResult.handleInviteResolveSuccess(arg0);
          },
      CHANNEL_SELECT(arg0) {
            return applyArgumentsResult.handleChannelSelect(arg0);
          }
    };
    return applyArgumentsResult;
  }
}
const prototype = GuildScheduledEventManager.prototype;
prototype["getGuildEventUserCounts"] = function getGuildEventUserCounts(guild_id, id, items1) {
  return this.fetchGuildEventUserCounts(guild_id, id, items1, false);
};
prototype["getGuildEventUserCountsForEmbed"] = function getGuildEventUserCountsForEmbed(guild_id, id, items1) {
  if (null == GuildScheduledEventStore.getGuildScheduledEvent(id)) {
    return Promise.resolve();
  } else {
    const _HermesInternal = HermesInternal;
    const combined = "" + guild_id + "-" + id;
    value2 = map.get(combined);
    if (null == value2) {
      const obj = { startedAt: null, ids: null };
      const _Date2 = Date;
      obj.startedAt = Date.now();
      const _Set = Set;
      set = new Set();
      obj.ids = set;
      let tmp2 = obj;
    } else {
      const _Date = Date;
      tmp2 = value2;
    }
    value2 = tmp2;
    const found = items1.filter((item) => {
      const ids = value2.ids;
      let hasItem = ids.has(item);
      if (!hasItem) {
        let flag = value2.ids.size < 8;
        if (flag) {
          const ids2 = value2.ids;
          ids2.add(item);
          flag = true;
        }
        hasItem = flag;
      }
      return hasItem;
    });
    map.delete(combined);
    const result = map.set(combined, tmp2);
    if (map.size > 1024) {
      value = map.keys().next().value;
      while (null != value) {
        let deleteResult1 = map.delete(value);
        if (map.size <= 1024) {
          break;
        }
      }
      const iter = map.keys();
    }
    if (items1.length > 0) {
      if (0 === found.length) {
        let resolved = Promise.resolve();
      }
      return resolved;
    }
    const self = this;
    const self2 = this;
    resolved = this.fetchGuildEventUserCounts(guild_id, id, found, true);
  }
};
prototype["fetchGuildEventUserCounts"] = function fetchGuildEventUserCounts(arg0, arg1, arg2, arg3) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  asyncGeneratorStep = arg3;
  return (async () => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c4 = 2;
        if (0 !== v2) {
          if (1 === v2) {
            c2 = 0;
            c4 = 3;
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 !== 2) {
            if (null != dependencyMap[closure_128_0]) {
              let _Date2 = Date;
              if (Date.now() - dependencyMap[closure_128_0] < closure_1_9) {
                if (closure_128_1().length <= 0) {
                  c2 = 0;
                }
              }
            }
            v2 = 2;
            c4 = 1;
            let obj4 = {
              value: tmp21(c2[5]).guardGuildEventUserCountFetch(closure_129_0, closure_129_1, v2(async () => {
                        if (c0 === 2) {
                          c0 = 3;
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
                            c0 = 2;
                            if (0 === c1) {
                              if (arg0 === 1) {
                                c0 = 3;
                                throw value;
                              } else if (arg0 === 2) {
                                c0 = 3;
                                let obj4 = { value, done: true };
                                return obj4;
                              } else {
                                closure_1 = function _fetch() {
                                  const self = this;
                                  const tmp = c3(function*() {
                                    if (c7 === 2) {
                                      c7 = 3;
                                      throw new TypeError("Generator functions may not be called on executing generators");
                                    } else if (tmp3 === 3) {
                                      if (arg0 === 1) {
                                        throw value;
                                      } else if (arg0 === 2) {
                                        const obj3 = { value, done: true };
                                        return obj3;
                                      } else {
                                        return { value: "IconComponent", done: null };
                                      }
                                    } else {
                                      while (true) {
                                        c7 = 2;
                                        let tmp4 = c6;
                                        if (0 === c6) {
                                          if (arg0 === 1) {
                                            c7 = 3;
                                            throw value;
                                          } else if (arg0 === 2) {
                                            c7 = 3;
                                            let obj4 = { value, done: true };
                                            return obj4;
                                          } else {
                                            closure_3 = tmp;
                                            closure_2 = tmp4;
                                            closure_130_0 = undefined;
                                            if (closure_2_3) {
                                              if (null == guildScheduledEvent.getGuildScheduledEvent(closure_2_1)) {
                                                let _Error = Error;
                                                let tmp24 = new.target;
                                                let tmp25 = new.target;
                                                let str = "guild event not found";
                                                let error = new Error("guild event not found");
                                                throw error;
                                              }
                                            }
                                            let obj2 = closure_1(closure_3_2[3]);
                                            c6 = 1;
                                            c7 = 1;
                                            let obj5 = { value: obj2.fetchGuildEventUserCounts(closure_2_0, closure_2_1, closure_2_0), done: false };
                                            return obj5;
                                          }
                                        } else if (1 === tmp4) {
                                          if (arg0 === 1) {
                                            c7 = 3;
                                            throw value;
                                          } else if (arg0 === 2) {
                                            c7 = 3;
                                            let obj = { value, done: true };
                                            return obj;
                                          } else {
                                            let _Date2 = Date;
                                            closure_3_6[closure_0] = Date.now();
                                            closure_1 = closure_131_0;
                                            closure_0 = closure_131_0[Symbol.iterator]();
                                            while (closure_0 !== undefined) {
                                              closure_130_0 = tmp10;
                                              let _HermesInternal = HermesInternal;
                                              let _Date = Date;
                                              let combined = "" + closure_0 + "-" + closure_130_0;
                                              closure_3_6[combined] = Date.now();
                                              c5 = 0;
                                              continue;
                                            }
                                            c7 = 3;
                                            return { value: "IconComponent", done: null };
                                          }
                                        } else {
                                          c5 = 0;
                                          closure_0.return();
                                          throw closure_1_4;
                                        }
                                      }
                                    }
                                  });
                                  closure_1 = tmp;
                                  const apply = tmp.apply;
                                  if (typeof apply === "unknown") {
                                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                                  } else {
                                    applyArgumentsResult = apply(self, arguments);
                                  }
                                  return applyArgumentsResult;
                                };
                                closure_0 = tmp3();
                                c1 = 1;
                                c0 = 1;
                                let obj5 = {
                                  value: tmp21(closure_2_2[6]).scheduleGuildEventEmbedFetch(function fetch() {
                                            const self = this;
                                            const apply = closure_1.apply;
                                            if (typeof apply === "unknown") {
                                              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                                            } else {
                                              applyArgumentsResult = apply(self, arguments);
                                            }
                                            return applyArgumentsResult;
                                          }),
                                  done: false
                                };
                                return obj5;
                              }
                            } else if (arg0 === 1) {
                              c0 = 3;
                              throw value;
                            } else if (arg0 === 2) {
                              c0 = 3;
                              let obj = { value, done: true };
                              return obj;
                            } else {
                              c0 = 3;
                              return { value: "IconComponent", done: null };
                            }
                          } catch (tmp8) {
                            c0 = tmp;
                            throw tmp8;
                          }
                        }
                      })),
              done: false
            };
            return obj4;
          }
          c2 = 0;
          c4 = 3;
          let obj = { value, done: true };
          return obj;
        }
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          let obj5 = { value, done: true };
          return obj5;
        } else {
          closure_128_0 = undefined;
          function neededIds() {
            return c2.filter((item) => {
              let tmp2 = null == dependencyMap["" + closure_1_0 + "-" + item];
              if (!tmp2) {
                const _Date = Date;
                const _HermesInternal = HermesInternal;
                const timestamp = Date.now();
                tmp2 = timestamp - dependencyMap["" + closure_1_0 + "-" + item] >= closure_3_9;
              }
              return tmp2;
            });
          }
          closure_128_1 = neededIds;
          let _HermesInternal = HermesInternal;
          let combined = "" + tmp21 + "-" + tmp3;
          closure_128_0 = combined;
          c2 = 1;
          if (null != dependencyMap[combined]) {
            let _Date = Date;
          }
        }
      } catch (tmp20) {
        if (tmp4 === c2) {
          c4 = tmp2;
          throw tmp20;
        } else {
          v2 = tmp;
        }
      }
    }
  })();
};
prototype["getGuildEventUsers"] = function getGuildEventUsers(id, arg1, guild_id) {
  return GuildScheduledEventsActionCreatorsDefault.fetchUsersForGuildEvent(id, arg1, guild_id);
};
prototype["getGuildEventsForCurrentUser"] = function getGuildEventsForCurrentUser(arg0) {
  return getGuildEventsForCurrentUser(arg0);
};
prototype["handleConnectionOpen"] = function handleConnectionOpen() {
  const self = this;
  return (async () => {
    if (c7 === 2) {
      c7 = 3;
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
        c7 = 2;
        let tmp4 = c6;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            closure_3 = tmp;
            closure_2 = tmp4;
            closure_130_1 = undefined;
            let clearResult = c7.clear();
            let clearResult1 = set1.clear();
            c6 = {};
            let clearResult2 = map.clear();
            let obj7 = _self(closure_2[5]);
            let result = obj7.forgetTransientGuildEventFetchFailures();
            lastSelectedGuildId = lastSelectedGuildId.getLastSelectedGuildId();
            closure_130_0 = lastSelectedGuildId;
            if (null != lastSelectedGuildId) {
              guildScheduledEventsForGuild = guildScheduledEventsForGuild.getGuildScheduledEventsForGuild(lastSelectedGuildId);
              _self = guildScheduledEventsForGuild[Symbol.iterator]();
            }
            c7 = 3;
            return { value: "IconComponent", done: null };
          }
        } else if (1 === tmp4) {
          guildScheduledEventsForGuild = 0;
          _self.return();
          throw lastSelectedGuildId;
        } else if (2 === tmp4) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            guildScheduledEventsForGuild = 0;
            _self.return();
            c7 = 3;
            let obj4 = { value, done: true };
            return obj4;
          } else {
            let _Promise = Promise;
            let tmp6 = new.target;
            let tmp7 = new.target;
            let promise = new Promise((arg0) => setTimeout(arg0, 200 * Math.random() + 50));
            c6 = 3;
            c7 = 1;
            let obj5 = { value: promise, done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          guildScheduledEventsForGuild = 0;
          _self.return();
          c7 = 3;
          let obj = { value, done: true };
          return obj;
        } else {
          guildScheduledEventsForGuild = 0;
        }
        if (_self !== undefined) {
          guildScheduledEventsForGuild = 1;
          closure_130_1 = tmp16;
          c6 = 2;
          c7 = 1;
          let obj6 = { value: closure_131_0.getGuildEventUserCounts(closure_130_0, closure_130_1.id, []), done: false };
          return obj6;
        }
      }
    }
  })();
};
prototype["handleGuildUnavailable"] = function handleGuildUnavailable(guildId) {
  guildId = guildId.guildId;
  set.delete(guildId);
  set1.delete(guildId);
  delete tmp[tmp2];
};
prototype["handleGuildDelete"] = function handleGuildDelete(guild) {
  const id = guild.guild.id;
  set.delete(id);
  set1.delete(id);
  delete tmp[tmp2];
};
prototype["handleInviteResolveSuccess"] = function handleInviteResolveSuccess(invite) {
  invite = invite.invite;
  guild = invite.guild;
  let id;
  if (guild != null) {
    id = guild.id;
  }
  if (tmp2) {
    getGuildEventsForCurrentUser(id);
  }
  tmp2 = null != invite.guild_scheduled_event && null != id;
};
prototype["handleChannelSelect"] = function handleChannelSelect(guildId) {
  guildId = guildId.guildId;
  const self = this;
  return (async (arg0) => {
    if (c9 === 2) {
      c9 = 3;
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
        c9 = 2;
        let tmp4 = c8;
        if (0 === c8) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            closure_4 = tmp4;
            closure_132_0 = undefined;
            if (null != guildId) {
              let guildScheduledEventsForGuild = tmp.getGuildScheduledEventsForGuild(guildId);
              guildId = guildScheduledEventsForGuild[Symbol.iterator]();
            }
            c9 = 3;
            return { value: "IconComponent", done: null };
          }
        } else if (1 === tmp4) {
          c6 = 0;
          guildId.return();
          throw set;
        } else if (2 === tmp4) {
          closure_3 = set;
          c6 = 1;
          let _Promise3 = Promise;
          let tmp21 = new.target;
          let tmp22 = new.target;
          let promise = new Promise((arg0) => setTimeout(arg0, 200 * Math.random() + 50));
          c8 = 3;
          c9 = 1;
          let obj4 = { value: promise, done: false };
          return obj4;
        } else if (3 === tmp4) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            guildId.return();
            c9 = 3;
            let obj5 = { value, done: true };
            return obj5;
          } else {
            throw closure_3;
          }
        } else if (4 === tmp4) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 1;
            let _Promise2 = Promise;
            let tmp13 = new.target;
            let tmp14 = new.target;
            let promise3 = new Promise((arg0) => setTimeout(arg0, 200 * Math.random() + 50));
            c8 = 5;
            c9 = 1;
            let obj6 = { value: promise3, done: false };
            return obj6;
          } else {
            c6 = 1;
            let _Promise = Promise;
            let tmp9 = new.target;
            let tmp10 = new.target;
            let promise4 = new Promise((arg0) => setTimeout(arg0, 200 * Math.random() + 50));
            c8 = 6;
            c9 = 1;
            let obj7 = { value: promise4, done: false };
            return obj7;
          }
        } else if (5 === tmp4) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            guildId.return();
            c9 = 3;
            let obj8 = { value, done: true };
            return obj8;
          } else {
            c6 = 0;
            guildId.return();
            c9 = 3;
            let obj9 = { value, done: true };
            return obj9;
          }
        } else if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          guildId.return();
          c9 = 3;
          let obj = { value, done: true };
          return obj;
        } else {
          c6 = 0;
        }
        if (guildId !== undefined) {
          closure_132_0 = tmp30;
          c6 = 2;
          c8 = 4;
          c9 = 1;
          let obj10 = { value: closure_133_1.getGuildEventUserCounts(closure_133_0, closure_132_0.id, []), done: false };
          return obj10;
        }
      }
    }
  })();
};
const guildScheduledEventManager = new GuildScheduledEventManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/GuildScheduledEventManager.tsx");

export default guildScheduledEventManager;
export const MAX_EMBED_COUNT_RECURRENCES = 8;