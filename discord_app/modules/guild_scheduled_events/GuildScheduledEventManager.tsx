// discord_app/modules/guild_scheduled_events/GuildScheduledEventManager.tsx
import initializeDefault from "../../lib/AutomaticLifecycleManager.tsx";
import _modDef8783 from "GuildScheduledEventsActionCreators.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import handleConnectionOpen from "../../stores/SelectedGuildStore.tsx";
import scheduledEventSort from "GuildScheduledEventStore.tsx";

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
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
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
              closure_2 = tmp3;
              closure_1 = tmp7;
              if (0 !== guildScheduledEventsForGuild.getGuildScheduledEventsForGuild(callback).length) {
                if (!set.has(callback)) {
                  if (!closure_1_7.has(callback)) {
                    guildScheduledEventsForGuild = 1;
                    set.add(callback);
                    obj1 = callback(closure_1_1[3]);
                    c5 = 2;
                    set = 1;
                    obj1 = { value: null, done: false };
                    obj1[0] = obj1.getGuildEventsForCurrentUser(callback);
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
          closure_3 = tmp25;
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
  closure_10 = tmp;
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
initializeDefault;
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
prototype["getGuildEventUserCounts"] = function getGuildEventUserCounts(closure_0, id, items1) {
  closure_1 = id;
  const callback = items1;
  return callback(function*() {
    const found = items1.filter((item, index) => {
      let tmp3 = null == closure_1_5["" + c0 + "-" + c1 + "-" + item];
      if (!tmp3) {
        const _Date = Date;
        const _HermesInternal = HermesInternal;
        const timestamp = Date.now();
        tmp3 = timestamp - closure_1_5["" + c0 + "-" + c1 + "-" + item] > closure_1_8;
      }
      return tmp3;
    });
    const _Date2 = Date;
    const _HermesInternal2 = HermesInternal;
    let timestamp = Date.now();
    let _HermesInternal = HermesInternal;
    let _Date = Date;
    let combined = "" + tmp25 + "-" + tmp26;
    closure_1_5[combined] = Date.now();
    const item = found.forEach((item, index) => {
      const combined = "" + c0 + "-" + c1 + "-" + item;
      const timestamp = Date.now();
      closure_1_5[combined] = timestamp;
      return timestamp;
    });
    c3 = 1;
    obj1 = v0(table[3]);
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
  return _modDef8783.fetchUsersForGuildEvent(id, arg1, guild_id);
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
        c7 = 2;
        let tmp4 = c6;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_3 = tmp;
            closure_2 = tmp4;
            let guildScheduledEventsForGuild;
            let clearResult = c6.clear();
            let clearResult1 = c7.clear();
            closure_5 = {};
            let lastSelectedGuildId = closure_1_3.getLastSelectedGuildId();
            closure_0 = lastSelectedGuildId;
            if (null != lastSelectedGuildId) {
              guildScheduledEventsForGuild = closure_1_4.getGuildScheduledEventsForGuild(lastSelectedGuildId);
              closure_0 = guildScheduledEventsForGuild[Symbol.iterator]();
            }
            c7 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else if (1 === tmp4) {
          c5 = 0;
          closure_0.return();
          throw closure_4;
        } else if (2 === tmp4) {
          if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 0;
            closure_0.return();
            c7 = 3;
            obj1 = { value: null, done: true };
            obj1[0] = arg1;
            return obj1;
          } else {
            let _Promise = Promise;
            let promise = new Promise((arg0) => setTimeout(arg0, 200 * Math.random() + 50));
            c6 = 3;
            c7 = 1;
            let obj2 = { value: null, done: false };
            obj2[0] = promise;
            return obj2;
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c5 = 0;
          closure_0.return();
          c7 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          c5 = 0;
        }
        if (closure_0 !== undefined) {
          c5 = 1;
          guildScheduledEventsForGuild = tmp16;
          c6 = 2;
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
  tmp2 = null != invite.guild_scheduled_event && null != id;
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
        c9 = 2;
        let tmp4 = c8;
        if (0 === c8) {
          if (arg0 === 1) {
            c9 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c9 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_5 = tmp;
            closure_4 = tmp4;
            let tmp30;
            if (null != tmp30) {
              let guildScheduledEventsForGuild = closure_1_4.getGuildScheduledEventsForGuild(tmp30);
              tmp30 = guildScheduledEventsForGuild[Symbol.iterator]();
            }
            c9 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else if (1 === tmp4) {
          c6 = 0;
          tmp30.return();
          throw closure_7;
        } else if (2 === tmp4) {
          closure_3 = closure_7;
          c6 = 1;
          let _Promise3 = Promise;
          let promise = new Promise((arg0) => setTimeout(arg0, 200 * Math.random() + 50));
          c8 = 3;
          c9 = 1;
          obj1 = { value: null, done: false };
          obj1[0] = promise;
          return obj1;
        } else if (3 === tmp4) {
          if (arg0 === 1) {
            c9 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 0;
            tmp30.return();
            c9 = 3;
            let obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            throw closure_3;
          }
        } else if (4 === tmp4) {
          if (arg0 === 1) {
            c9 = 3;
            throw arg1;
          } else {
            closure_2 = arg1;
            if (arg0 === 2) {
              c6 = 1;
              let _Promise2 = Promise;
              promise = new Promise((arg0) => setTimeout(arg0, 200 * Math.random() + 50));
              c8 = 5;
              c9 = 1;
              let obj3 = { value: null, done: false };
              obj3[0] = promise;
              return obj3;
            } else {
              c6 = 1;
              let _Promise = Promise;
              let promise1 = new Promise((arg0) => setTimeout(arg0, 200 * Math.random() + 50));
              c8 = 6;
              c9 = 1;
              let obj4 = { value: null, done: false };
              obj4[0] = promise1;
              return obj4;
            }
          }
        } else if (5 === tmp4) {
          if (arg0 === 1) {
            c9 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 0;
            tmp30.return();
            c9 = 3;
            let obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          } else {
            c6 = 0;
            tmp30.return();
            c9 = 3;
            let obj6 = { value: null, done: true };
            obj6[0] = closure_2;
            return obj6;
          }
        } else if (arg0 === 1) {
          c9 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c6 = 0;
          tmp30.return();
          c9 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          c6 = 0;
        }
        if (tmp30 !== undefined) {
          c6 = 2;
          c8 = 4;
          c9 = 1;
          let obj7 = { value: null, done: false };
          obj7[0] = self.getGuildEventUserCounts(tmp30, tmp30.id, []);
          return obj7;
        }
      }
    }
  })();
};
const guildScheduledEventManager = new GuildScheduledEventManager();
const result = require("obj132").fileFinishedImporting("modules/guild_scheduled_events/GuildScheduledEventManager.tsx");

export default guildScheduledEventManager;