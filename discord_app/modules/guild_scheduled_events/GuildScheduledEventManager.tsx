// === Module 9781: GuildScheduledEventManager ===

// Module 9781 (GuildScheduledEventManager)
import GuildScheduledEventsActionCreatorsDefault from "GuildScheduledEventsActionCreators" /* 9703 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4381 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7526 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7118 */;

function getGuildEventsForCurrentUser() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_10 = async function _getGuildEventsForCurrentUser(arg0, value) {
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
          closure_129_0 = closure_0;
          if (0 !== guildScheduledEventsForGuild.getGuildScheduledEventsForGuild(closure_0).length) {
            if (!set.has(tmp32)) {
              if (!set2.has(tmp32)) {
                c4 = 1;
                set.add(tmp32);
                let obj1 = GuildScheduledEventsActionCreatorsDefault;
                c5 = 2;
                c6 = 1;
                obj1 = { value: null, done: false };
                obj1.value = obj1.getGuildEventsForCurrentUser(tmp32);
                return obj1;
              }
            }
          }
        }
      } else {
        if (1 === tmp7) {
          c4 = 0;
          closure_130_6.delete(closure_129_0);
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_130_7.add(closure_129_0);
          c4 = 0;
        }
        c4 = 0;
        c6 = 3;
        obj = { value, done: true };
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
let closure_5 = {};
const set = new Set();
const set1 = new Set();
let c8 = 1800000;
class GuildScheduledEventManager extends tmp4 {
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
  closure_0 = guild_id;
  closure_1 = id;
  asyncGeneratorStep = items1;
  return (async () => {
    const found = tmp13.filter((item) => {
      let tmp3 = null == dependencyMap["" + v3 + "-" + closure_1_1 + "-" + item];
      if (!tmp3) {
        const _Date = Date;
        const _HermesInternal = HermesInternal;
        const timestamp = Date.now();
        tmp3 = timestamp - dependencyMap["" + tmp + "-" + tmp2 + "-" + item] > closure_2_8;
      }
      return tmp3;
    });
    const _Date2 = Date;
    const _HermesInternal2 = HermesInternal;
    let timestamp = Date.now();
    let _HermesInternal = HermesInternal;
    let _Date = Date;
    let combined = "" + tmp24 + "-" + tmp25;
    dependencyMap[combined] = Date.now();
    const item = found.forEach((item) => {
      const combined = "" + v3 + "-" + closure_1_1 + "-" + item;
      const timestamp = Date.now();
      dependencyMap[combined] = timestamp;
      return timestamp;
    });
    await v3(c1[3]).fetchGuildEventUserCounts(closure_0, closure_1, found);
    if (1 === tmp6) {
      c3 = 0;
    } else if (arg0 === 1) {
      v3 = 3;
      throw arg1;
    } else if (arg0 !== 2) {
      c3 = 0;
    }
    return arg1;
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
  return (async (arg0, value) => {
    if (c7 === 2) {
      c7 = 3;
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
        c7 = 2;
        let tmp4 = c6;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_2 = tmp4;
            closure_130_1 = undefined;
            let clearResult = c6.clear();
            let clearResult1 = c7.clear();
            c5 = {};
            let lastSelectedGuildId = tmp.getLastSelectedGuildId();
            closure_130_0 = lastSelectedGuildId;
            if (null != lastSelectedGuildId) {
              guildScheduledEventsForGuild = guildScheduledEventsForGuild.getGuildScheduledEventsForGuild(lastSelectedGuildId);
              _self = guildScheduledEventsForGuild[Symbol.iterator]();
            }
            c7 = 3;
            return { value: "HermesInternal", done: null };
          }
        } else if (1 === tmp4) {
          c5 = 0;
          _self.return();
          throw guildScheduledEventsForGuild;
        } else if (2 === tmp4) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            _self.return();
            c7 = 3;
            let obj1 = { value, done: true };
            return obj1;
          } else {
            let _Promise = Promise;
            let tmp6 = new.target;
            let tmp7 = new.target;
            let promise = new Promise((arg0) => setTimeout(arg0, 200 * Math.random() + 50));
            c6 = 3;
            c7 = 1;
            let obj2 = { value: promise, done: false };
            return obj2;
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          _self.return();
          c7 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c5 = 0;
        }
        if (_self !== undefined) {
          c5 = 1;
          closure_130_1 = tmp16;
          c6 = 2;
          c7 = 1;
          let obj3 = { value: closure_131_0.getGuildEventUserCounts(closure_130_0, closure_130_1.id, []), done: false };
          return obj3;
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
  const guild = invite.guild;
  let id;
  if (guild != null) {
    id = guild.id;
  }
  if (tmp2) {
    getGuildEventsForCurrentUser(id);
  }
};
prototype["handleChannelSelect"] = function handleChannelSelect(guildId) {
  guildId = guildId.guildId;
  const self = this;
  return (async (arg0, value) => {
    if (c9 === 2) {
      c9 = 3;
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
        c9 = 2;
        let tmp4 = c8;
        if (0 === c8) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_5 = tmp;
            let guildScheduledEventsForGuild = tmp4;
            closure_132_0 = undefined;
            if (null != guildId) {
              guildScheduledEventsForGuild = guildScheduledEventsForGuild.getGuildScheduledEventsForGuild(guildId);
              guildId = guildScheduledEventsForGuild[Symbol.iterator]();
            }
            c9 = 3;
            return { value: "HermesInternal", done: null };
          }
        } else if (1 === tmp4) {
          c6 = 0;
          guildId.return();
          throw set1;
        } else if (2 === tmp4) {
          closure_3 = set1;
          c6 = 1;
          let _Promise3 = Promise;
          let tmp21 = new.target;
          let tmp22 = new.target;
          let promise = new Promise((arg0) => setTimeout(arg0, 200 * Math.random() + 50));
          c8 = 3;
          c9 = 1;
          let obj1 = { value: promise, done: false };
          return obj1;
        } else if (3 === tmp4) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            guildId.return();
            c9 = 3;
            let obj2 = { value, done: true };
            return obj2;
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
            promise = new Promise((arg0) => setTimeout(arg0, 200 * Math.random() + 50));
            c8 = 5;
            c9 = 1;
            let obj3 = { value: promise, done: false };
            return obj3;
          } else {
            c6 = 1;
            let _Promise = Promise;
            let tmp9 = new.target;
            let tmp10 = new.target;
            let promise1 = new Promise((arg0) => setTimeout(arg0, 200 * Math.random() + 50));
            c8 = 6;
            c9 = 1;
            let obj4 = { value: promise1, done: false };
            return obj4;
          }
        } else if (5 === tmp4) {
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
            c6 = 0;
            guildId.return();
            c9 = 3;
            let obj6 = { value, done: true };
            return obj6;
          }
        } else if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          guildId.return();
          c9 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c6 = 0;
        }
        if (guildId !== undefined) {
          closure_132_0 = tmp30;
          c6 = 2;
          c8 = 4;
          c9 = 1;
          let obj7 = { value: closure_133_1.getGuildEventUserCounts(closure_133_0, closure_132_0.id, []), done: false };
          return obj7;
        }
      }
    }
  })();
};
const guildScheduledEventManager = new GuildScheduledEventManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/GuildScheduledEventManager.tsx");

export default guildScheduledEventManager;