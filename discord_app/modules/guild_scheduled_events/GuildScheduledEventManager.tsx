// discord_app/modules/guild_scheduled_events/GuildScheduledEventManager.tsx
import closure_2 from "set";
import handleConnectionOpen from "handleConnectionOpen";
import scheduledEventSort from "scheduledEventSort";
import "initialize";
import set from "scheduledEventSort";
import { GuildScheduledEventsActionCreators } from "GuildScheduledEventsActionCreators.tsx";

function getGuildEventsForCurrentUser() {
  const self = this;
  const apply = _getGuildEventsForCurrentUser.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getGuildEventsForCurrentUser() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (set === 2) {
        set = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          set = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              set = 3;
              throw arg1;
            } else if (arg0 === 2) {
              set = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_2 = tmp3;
              let closure_1 = tmp7;
              if (0 !== guildScheduledEventsForGuild.getGuildScheduledEventsForGuild(callback).length) {
                if (!set.has(tmp33)) {
                  if (!outer1_7.has(tmp33)) {
                    guildScheduledEventsForGuild = 1;
                    set.add(tmp33);
                    let obj1 = callback(outer1_1[3]);
                    c5 = 2;
                    set = 1;
                    obj1 = { value: null, done: false };
                    obj1[0] = obj1.getGuildEventsForCurrentUser(tmp33);
                    return obj1;
                  }
                }
              }
            }
          } else {
            if (1 === tmp7) {
              guildScheduledEventsForGuild = 0;
              set.delete(callback);
            } else if (arg0 === 1) {
              set = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              set2.add(callback);
              guildScheduledEventsForGuild = 0;
            }
            guildScheduledEventsForGuild = 0;
            set = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          set = 3;
        } catch (tmp25) {
          let handleConnectionOpen = tmp25;
          if (tmp4 === guildScheduledEventsForGuild) {
            set = tmp2;
            throw tmp25;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  const _getGuildEventsForCurrentUser = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_5 = {};
let set = new Set();
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
  let closure_0 = guild_id;
  let closure_1 = id;
  const callback = items1;
  return callback(function*() {
    const found = outer1_2.filter((arg0) => {
      let tmp3 = null == outer1_5["" + c0 + "-" + c1 + "-" + arg0];
      if (!tmp3) {
        const _Date = Date;
        const _HermesInternal = HermesInternal;
        const timestamp = Date.now();
        tmp3 = timestamp - outer1_5["" + tmp + "-" + tmp2 + "-" + arg0] > outer1_8;
      }
      return tmp3;
    });
    const _Date2 = Date;
    const _HermesInternal2 = HermesInternal;
    let timestamp = Date.now();
    let _HermesInternal = HermesInternal;
    let _Date = Date;
    let combined = "" + tmp25 + "-" + tmp26;
    outer1_5[combined] = Date.now();
    const item = found.forEach((arg0) => {
      const combined = "" + c0 + "-" + c1 + "-" + arg0;
      const timestamp = Date.now();
      outer1_5[combined] = timestamp;
      return timestamp;
    });
    let c3 = 1;
    const obj1 = v0(table[3]);
    yield obj1.fetchGuildEventUserCounts(v0, table, found);
    if (1 === tmp6) {
      c3 = 0;
    } else if (arg0 === 1) {
      v0 = 3;
      throw arg1;
    } else if (arg0 !== 2) {
      c3 = 0;
    }
    c3 = 0;
    return arg1;
  })();
};
prototype["getGuildEventUsers"] = function getGuildEventUsers(id, arg1, guild_id) {
  return GuildScheduledEventsActionCreators.fetchUsersForGuildEvent(id, arg1, guild_id);
};
prototype["getGuildEventsForCurrentUser"] = function getGuildEventsForCurrentUser(arg0) {
  return getGuildEventsForCurrentUser(arg0);
};
prototype["handleConnectionOpen"] = function handleConnectionOpen() {
  const self = this;
  return callback(function*() {
    if (c7 === 2) {
      c7 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      while (true) {
        let num = 2;
        c7 = 2;
        let tmp4 = c6;
        if (0 === c6) {
          if (arg0 === 1) {
            let num10 = 3;
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            let num9 = 3;
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let handleConnectionOpen = tmp;
            let closure_2 = tmp4;
            let closure_0;
            let guildScheduledEventsForGuild;
            let tmp28 = c6;
            let clearResult = c6.clear();
            let tmp30 = c7;
            let clearResult1 = c7.clear();
            let c5 = {};
            let tmp32 = outer1_3;
            let lastSelectedGuildId = outer1_3.getLastSelectedGuildId();
            closure_0 = lastSelectedGuildId;
            if (null != lastSelectedGuildId) {
              let tmp34 = outer1_4;
              guildScheduledEventsForGuild = outer1_4.getGuildScheduledEventsForGuild(lastSelectedGuildId);
              let tmp36 = guildScheduledEventsForGuild;
              closure_0 = guildScheduledEventsForGuild[Symbol.iterator]();
            }
            let num8 = 3;
            c7 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else if (1 === tmp4) {
          let tmp11 = scheduledEventSort;
          let tmp12 = scheduledEventSort;
          c5 = 0;
          let tmp13 = closure_0;
          closure_0.return();
          throw scheduledEventSort;
        } else if (2 === tmp4) {
          if (arg0 === 1) {
            let num6 = 3;
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 0;
            let tmp10 = closure_0;
            closure_0.return();
            let num5 = 3;
            c7 = 3;
            let obj1 = { value: null, done: true };
            obj1[0] = arg1;
            return obj1;
          } else {
            let _Promise = Promise;
            let tmp6 = new.target;
            let tmp7 = new.target;
            let promise = new Promise((arg0) => setTimeout(arg0, 200 * Math.random() + 50));
            c6 = 3;
            let num4 = 1;
            c7 = 1;
            let tmp9 = promise;
            let obj2 = { value: null, done: false };
            obj2[0] = promise;
            return obj2;
          }
        } else if (arg0 === 1) {
          let num3 = 3;
          c7 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c5 = 0;
          let tmp5 = closure_0;
          closure_0.return();
          let num2 = 3;
          c7 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          c5 = 0;
        }
        let tmp14 = guildScheduledEventsForGuild;
        let tmp15 = closure_0;
        if (closure_0 !== undefined) {
          let tmp17 = closure_2;
          let tmp18 = handleConnectionOpen;
          c5 = 1;
          guildScheduledEventsForGuild = tmp16;
          let tmp19 = closure_0;
          let tmp20 = closure_0;
          let tmp21 = guildScheduledEventsForGuild;
          c6 = 2;
          let num7 = 1;
          c7 = 1;
          let obj3 = { value: null, done: false };
          obj3[0] = closure_0.getGuildEventUserCounts(closure_0, guildScheduledEventsForGuild.id, []);
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
  return callback(function*() {
    if (c9 === 2) {
      c9 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      while (true) {
        let num = 2;
        c9 = 2;
        let tmp4 = c8;
        if (0 === c8) {
          if (arg0 === 1) {
            let num16 = 3;
            c9 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            let num15 = 3;
            c9 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_5 = tmp;
            let scheduledEventSort = tmp4;
            let closure_0;
            let tmp42 = outer1_0;
            if (null != outer1_0) {
              let tmp43 = outer1_4;
              let tmp44 = outer1_0;
              let guildScheduledEventsForGuild = outer1_4.getGuildScheduledEventsForGuild(outer1_0);
              let tmp46 = guildScheduledEventsForGuild;
              closure_0 = guildScheduledEventsForGuild[Symbol.iterator]();
            }
            let num14 = 3;
            c9 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else if (1 === tmp4) {
          let tmp25 = closure_7;
          let tmp26 = closure_7;
          let c6 = 0;
          let tmp27 = closure_0;
          closure_0.return();
          throw closure_7;
        } else if (2 === tmp4) {
          let tmp19 = closure_7;
          let tmp20 = closure_7;
          let handleConnectionOpen = closure_7;
          c6 = 1;
          let _Promise3 = Promise;
          let tmp21 = new.target;
          let tmp22 = new.target;
          let promise = new Promise((arg0) => setTimeout(arg0, 200 * Math.random() + 50));
          c8 = 3;
          let num12 = 1;
          c9 = 1;
          let tmp24 = promise;
          let obj1 = { value: null, done: false };
          obj1[0] = promise;
          return obj1;
        } else if (3 === tmp4) {
          if (arg0 === 1) {
            let num11 = 3;
            c9 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 0;
            let tmp18 = closure_0;
            closure_0.return();
            let num10 = 3;
            c9 = 3;
            let obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            let tmp17 = handleConnectionOpen;
            throw handleConnectionOpen;
          }
        } else if (4 === tmp4) {
          if (arg0 === 1) {
            let num9 = 3;
            c9 = 3;
            throw arg1;
          } else {
            let closure_2 = arg1;
            if (arg0 === 2) {
              c6 = 1;
              let _Promise2 = Promise;
              let tmp13 = new.target;
              let tmp14 = new.target;
              promise = new Promise((arg0) => setTimeout(arg0, 200 * Math.random() + 50));
              c8 = 5;
              let num8 = 1;
              c9 = 1;
              let tmp16 = promise;
              let obj3 = { value: null, done: false };
              obj3[0] = promise;
              return obj3;
            } else {
              c6 = 1;
              let _Promise = Promise;
              let tmp9 = new.target;
              let tmp10 = new.target;
              let promise1 = new Promise((arg0) => setTimeout(arg0, 200 * Math.random() + 50));
              c8 = 6;
              let num7 = 1;
              c9 = 1;
              let tmp12 = promise1;
              let obj4 = { value: null, done: false };
              obj4[0] = promise1;
              return obj4;
            }
          }
        } else if (5 === tmp4) {
          if (arg0 === 1) {
            let num6 = 3;
            c9 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 0;
            let tmp8 = closure_0;
            closure_0.return();
            let num5 = 3;
            c9 = 3;
            let obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          } else {
            c6 = 0;
            let tmp6 = closure_0;
            closure_0.return();
            let num4 = 3;
            c9 = 3;
            let tmp7 = closure_2;
            let obj6 = { value: null, done: true };
            obj6[0] = closure_2;
            return obj6;
          }
        } else if (arg0 === 1) {
          let num3 = 3;
          c9 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c6 = 0;
          let tmp5 = closure_0;
          closure_0.return();
          let num2 = 3;
          c9 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          c6 = 0;
        }
        let tmp28 = guildScheduledEventsForGuild;
        let tmp29 = closure_0;
        if (closure_0 !== undefined) {
          let tmp31 = scheduledEventSort;
          outer1_0 = tmp30;
          let tmp32 = closure_5;
          c6 = 2;
          let tmp33 = outer1_1;
          let tmp34 = outer1_0;
          let tmp35 = outer1_0;
          c8 = 4;
          let num13 = 1;
          c9 = 1;
          let obj7 = { value: null, done: false };
          obj7[0] = outer1_1.getGuildEventUserCounts(outer1_0, outer1_0.id, []);
          return obj7;
        }
      }
    }
  })();
};
const guildScheduledEventManager = new GuildScheduledEventManager();
const result = set.fileFinishedImporting("modules/guild_scheduled_events/GuildScheduledEventManager.tsx");

export default guildScheduledEventManager;