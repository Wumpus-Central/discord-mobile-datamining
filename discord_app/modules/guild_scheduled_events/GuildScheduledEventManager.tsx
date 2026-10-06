// === Module 9306: GuildScheduledEventManager ===

// Module 9306 (GuildScheduledEventManager)
import GuildScheduledEventsActionCreatorsDefault from "GuildScheduledEventsActionCreators" /* 9213 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4705 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7050 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6620 */;
import size from "module_2" /* 2 */;

let _self, c1, c7, c9;

function getGuildEventsForCurrentUser() {
  return obj(...arguments);
}
let obj = function _getGuildEventsForCurrentUser() {
  let guildScheduledEventsForGuild;
  obj = _asyncToGenerator(async (arg0) => {
    let obj2;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
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
      let c4;
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
            let closure_2 = tmp;
            let closure_1 = tmp4;
            if (0 !== guildScheduledEventsForGuild.getGuildScheduledEventsForGuild(closure_0).length) {
              if (!set.has(closure_0)) {
                if (!set2.has(closure_0)) {
                  c4 = 1;
                  set.add(closure_0);
                  c5 = 2;
                  c6 = 1;
                  const obj5 = { value: obj2.getGuildEventsForCurrentUser(closure_0), done: false };
                  obj2 = GuildScheduledEventsActionCreatorsDefault;
                  return obj5;
                }
              }
            }
          }
        } else if (1 === c5) {
          c4 = 0;
          closure_130_6.delete(closure_0);
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_130_7.add(closure_0);
          c4 = 0;
        }
        c6 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp22) {
        let closure_3 = tmp22;
        if (0 === c4) {
          c6 = 3;
          throw tmp22;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
let _asyncToGenerator = _asyncToGenerator_mod;
let closure_5 = {};
const set = new Set();
const set1 = new Set();
let c8 = 1800000;
class GuildScheduledEventManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
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
  getGuildEventUserCounts(guild_id, id, items1) {
    let closure_0 = guild_id;
    let closure_1 = id;
    _asyncToGenerator = items1;
    return (async () => {
      let closure_2;
      let tmp3;
      let v3;
      if (v3 === 2) {
        v3 = 3;
        const str = "Generator functions may not be called on executing generators";
        throw new TypeError("Generator functions may not be called on executing generators");
      } else {
        const str2 = "-";
        const str3 = "";
        if (tmp2 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          let c3;
          try {
            v3 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else if (arg0 === 2) {
                v3 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                const found = tmp10.filter((item) => {
                  let tmp3 = null == closure_2_5["" + v3 + "-" + closure_1_1 + "-" + item];
                  if (!tmp3) {
                    const _Date = Date;
                    const _HermesInternal = HermesInternal;
                    const timestamp = Date.now();
                    tmp3 = timestamp - closure_2_5["" + v3 + "-" + closure_1_1 + "-" + item] > closure_2_8;
                  }
                  return tmp3;
                });
                const _Date2 = Date;
                const _HermesInternal2 = HermesInternal;
                let timestamp = Date.now();
                let _HermesInternal = HermesInternal;
                let _Date = Date;
                let combined = "" + guild_id + "-" + id;
                closure_1_5[combined] = Date.now();
                const item = found.forEach((item) => {
                  const combined = "" + v3 + "-" + closure_1_1 + "-" + item;
                  const timestamp = Date.now();
                  closure_2_5[combined] = timestamp;
                  return timestamp;
                });
                c3 = 1;
                const obj2 = v3(c1[3]);
                c1 = 2;
                v3 = 1;
                const obj5 = { value: obj2.fetchGuildEventUserCounts(guild_id, id, found), done: false };
                return obj5;
              }
            } else if (1 === tmp3) {
              c3 = 0;
            } else if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              v3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              c3 = 0;
            }
            v3 = 3;
            return { value: "IconComponent", done: null };
          } catch (tmp10) {
            if (0 === c3) {
              v3 = 3;
              throw tmp10;
            } else {
              c1 = 1;
            }
          }
        }
      }
    })();
  }
  getGuildEventUsers(id, arg1, guild_id) {
    obj = GuildScheduledEventsActionCreatorsDefault;
    return obj.fetchUsersForGuildEvent(id, arg1, guild_id);
  }
  getGuildEventsForCurrentUser(arg0) {
    return getGuildEventsForCurrentUser(arg0);
  }
  handleConnectionOpen() {
    let self = this;
    return (async function() {
      let closure_0;
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
          let lastSelectedGuildId;
          let guildScheduledEventsForGuild;
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
              let closure_2 = tmp4;
              lastSelectedGuildId = undefined;
              guildScheduledEventsForGuild = undefined;
              let clearResult = c6.clear();
              let clearResult1 = c7.clear();
              let c5 = {};
              lastSelectedGuildId = lastSelectedGuildId.getLastSelectedGuildId();
              if (null != lastSelectedGuildId) {
                guildScheduledEventsForGuild = guildScheduledEventsForGuild2.getGuildScheduledEventsForGuild(lastSelectedGuildId);
                _self = guildScheduledEventsForGuild[Symbol.iterator]();
              }
              c7 = 3;
              return { value: "IconComponent", done: null };
            }
          } else if (1 === tmp4) {
            c5 = 0;
            _self.return();
            throw guildScheduledEventsForGuild2;
          } else if (2 === tmp4) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              _self.return();
              c7 = 3;
              let obj4 = { value, done: true };
              return obj4;
            } else {
              let _Promise = Promise;
              let self = this;
              let self2 = this;
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
            guildScheduledEventsForGuild = tmp14;
            c6 = 2;
            c7 = 1;
            let obj6 = { value: closure_131_0.getGuildEventUserCounts(lastSelectedGuildId, guildScheduledEventsForGuild.id, []), done: false };
            return obj6;
          }
        }
      }
    })();
  }
  handleGuildUnavailable(guildId) {
    guildId = guildId.guildId;
    set.delete(guildId);
    set1.delete(guildId);
    delete closure_5[guildId];
  }
  handleGuildDelete(guild) {
    const id = guild.guild.id;
    set.delete(id);
    set1.delete(id);
    delete closure_5[id];
  }
  handleInviteResolveSuccess(invite) {
    invite = invite.invite;
    const guild = invite.guild;
    let id;
    const guild_scheduled_event = invite.guild_scheduled_event;
    if (guild != null) {
      id = guild.id;
    }
    const tmp2 = null != guild_scheduled_event && null != id;
    if (tmp2) {
      getGuildEventsForCurrentUser(id);
    }
  }
  handleChannelSelect(guildId) {
    guildId = guildId.guildId;
    let self = this;
    return (async function() {
      let closure_0;
      const f152289 = (arg0) => setTimeout(arg0, 200 * Math.random() + 50);
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
              closure_5 = tmp;
              let guildScheduledEventsForGuild = tmp4;
              guildId = undefined;
              if (null != guildId) {
                guildScheduledEventsForGuild = guildScheduledEventsForGuild.getGuildScheduledEventsForGuild(guildId);
                guildId = guildScheduledEventsForGuild[Symbol.iterator]();
              }
              c9 = 3;
              return { value: "IconComponent", done: null };
            }
          } else if (1 === tmp4) {
            let c6 = 0;
            guildId.return();
            throw set1;
          } else {
            let closure_3;
            if (2 === tmp4) {
              closure_3 = set1;
              c6 = 1;
              let _Promise3 = Promise;
              let self5 = this;
              let self6 = this;
              let promise = new Promise(f152289);
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
                let self3 = this;
                let self4 = this;
                let promise3 = new Promise(f152289);
                c8 = 5;
                c9 = 1;
                let obj6 = { value: promise3, done: false };
                return obj6;
              } else {
                c6 = 1;
                let _Promise = Promise;
                self = this;
                let self2 = this;
                let promise4 = new Promise(f152289);
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
              obj = { value, done: true };
              return obj;
            } else {
              c6 = 0;
            }
          }
          if (guildId !== undefined) {
            guildId = tmp24;
            c6 = 2;
            c8 = 4;
            c9 = 1;
            let obj10 = { value: closure_133_1.getGuildEventUserCounts(closure_133_0, guildId.id, []), done: false };
            return obj10;
          }
        }
      }
    })();
  }
}
const prototype = GuildScheduledEventManager.prototype;
const guildScheduledEventManager = new GuildScheduledEventManager();
const result = size.fileFinishedImporting("modules/guild_scheduled_events/GuildScheduledEventManager.tsx");

export default guildScheduledEventManager;