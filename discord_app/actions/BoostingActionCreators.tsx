import sendRequest from "sendRequest";
import createFromServer from "createFromServer";
import closure_5 from "createFromServer";
import reset from "reset";
import { Endpoints } from "ME";

const require = arg1;
function _fetchAppliedGuildBoostsForGuild() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    const iter = (function*(arg0, body) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
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
              throw body;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              let sendRequest = tmp5;
              let dependencyMap = tmp2;
              let flag;
              let obj1 = flag;
              if (flag === undefined) {
                obj1 = {};
              }
              flag = obj1.includeEnded;
              if (flag === undefined) {
                flag = false;
              }
              dependencyMap = undefined;
              c4 = 1;
              c5 = 1;
              return { value: "ct", done: "Array" };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c5 = 3;
              throw body;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = body;
              return obj2;
            } else {
              let obj4;
              const HTTP = callback(530).HTTP;
              const obj3 = { url: null, oldFormErrors: true, query: null, rejectWithError: true };
              obj3[0] = closure_7.APPLIED_GUILD_BOOSTS_FOR_GUILD(callback);
              if (flag) {
                obj4 = { include_ended: true };
              }
              obj3[2] = obj4;
              c4 = 2;
              c5 = 1;
              const obj5 = { value: null, done: false };
              obj5[0] = HTTP.get(obj3);
              return obj5;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw body;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = body;
            return obj6;
          } else {
            body = body.body;
            dependencyMap = body.map((arg0) => c4.createFromServer(arg0));
            obj = flag(709);
            const obj7 = { type: "GUILD_APPLIED_BOOSTS_FETCH_SUCCESS", guildId: null, appliedBoosts: null };
            obj7[1] = callback;
            obj7[2] = dependencyMap;
            obj.dispatch(obj7);
            c5 = 3;
            const obj8 = { value: null, done: true };
            obj8[0] = dependencyMap;
            return obj8;
          }
        } catch (tmp14) {
          c5 = tmp;
          throw tmp14;
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _fetchAppliedGuildBoostsForGuild = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchAppliedGuildBoostsForUser() {
  const self = this;
  const tmp = callback(() => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    const iter = (function*(arg0, body) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw body;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              const dependencyMap = tmp5;
              let callback = tmp2;
              let flag;
              if (flag === undefined) {
                flag = false;
              }
              callback = undefined;
              c3 = 1;
              c4 = 1;
              return { value: "ct", done: "Array" };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw body;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = body;
              return obj1;
            } else {
              const HTTP = flag(530).HTTP;
              const obj2 = { url: null, oldFormErrors: true, query: null, rejectWithError: true };
              obj2[0] = constants.USER_APPLIED_GUILD_BOOSTS;
              const obj3 = { paused: null };
              obj3[0] = flag;
              obj2[2] = obj3;
              c3 = 2;
              c4 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = HTTP.get(obj2);
              return obj4;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw body;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = body;
            return obj5;
          } else {
            body = body.body;
            callback = body.map((arg0) => c4.createFromServer(arg0));
            obj = callback(709);
            const obj6 = { type: "USER_APPLIED_BOOSTS_FETCH_SUCCESS", appliedGuildBoosts: null };
            obj6[1] = callback;
            obj.dispatch(obj6);
            c4 = 3;
            const obj7 = { value: null, done: true };
            obj7[0] = callback;
            return obj7;
          }
        } catch (tmp18) {
          c4 = tmp;
          throw tmp18;
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _fetchAppliedGuildBoostsForUser = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function fetchGuildBoostSlots() {
  const self = this;
  const apply = _fetchGuildBoostSlots.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchGuildBoostSlots() {
  const self = this;
  const tmp = callback(function*() {
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
            const callback = tmp2;
            let closure_0 = tmp5;
            closure_0 = undefined;
            outer1_1(709).dispatch({ type: "GUILD_BOOST_SLOTS_FETCH" });
            const HTTP = outer1_0(530).HTTP;
            const obj1 = { url: null, oldFormErrors: true, rejectWithError: null };
            obj1[0] = outer1_7.USER_GUILD_BOOST_SLOTS;
            const obj8 = outer1_1(709);
            obj1[2] = outer1_0(530).rejectWithMigratedError();
            dependencyMap = 1;
            c3 = 1;
            const obj2 = { value: null, done: false };
            obj2[0] = HTTP.get(obj1);
            return obj2;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj3 = { value: null, done: true };
          obj3[0] = arg1;
          return obj3;
        } else {
          const body = arg1.body;
          closure_0 = body.map((subscription_id) => closure_5.createFromServer(subscription_id, subscriptionById.getSubscriptionById(subscription_id.subscription_id)));
          obj = callback(709);
          const obj4 = { type: "GUILD_BOOST_SLOTS_FETCH_SUCCESS", guildBoostSlots: null };
          obj4[1] = closure_0;
          obj.dispatch(obj4);
          c3 = 3;
          const obj5 = { value: null, done: true };
          obj5[0] = closure_0;
          return obj5;
        }
      } catch (tmp12) {
        c3 = tmp;
        throw tmp12;
      }
    }
  });
  const _fetchGuildBoostSlots = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchAppliedBoostsCooldown() {
  const self = this;
  const tmp = callback(function*() {
    if (c5 === 2) {
      c5 = 3;
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
            let lib = tmp3;
            let ends_at = tmp7;
            ends_at = undefined;
            let c3 = 1;
            const HTTP = outer1_0(outer1_2[5]).HTTP;
            const obj1 = { url: null, oldFormErrors: true, rejectWithError: null };
            obj1[0] = outer1_7.APPLIED_GUILD_BOOST_COOLDOWN;
            obj1[2] = outer1_0(outer1_2[5]).rejectWithMigratedError();
            c4 = 2;
            c5 = 1;
            const obj2 = { value: null, done: false };
            obj2[0] = HTTP.get(obj1);
            return obj2;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          lib = dependencyMap;
          if (404 === lib.status) {
            let obj4 = lib(709);
            obj4.dispatch({ type: "APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS", endsAt: null });
            c5 = 3;
            return { value: null, done: true };
          } else {
            const appliedGuildBoostError = new ends_at(4184).AppliedGuildBoostError(lib);
            throw appliedGuildBoostError;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj3 = { value: null, done: true };
          obj3[0] = arg1;
          return obj3;
        } else {
          ends_at = arg1.body.ends_at;
          obj = lib(709);
          obj4 = { type: "APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS", endsAt: null };
          obj4[1] = ends_at;
          obj.dispatch(obj4);
          c3 = 0;
          c5 = 3;
          const obj5 = { value: null, done: true };
          obj5[0] = ends_at;
          return obj5;
        }
      } catch (tmp31) {
        dependencyMap = tmp31;
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp31;
        } else {
          c4 = tmp;
        }
      }
    }
  });
  const _fetchAppliedBoostsCooldown = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _applyToGuild() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    const iter = (function*(arg0, arg1) {
      if (c8 === 2) {
        c8 = 3;
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
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let mapped = tmp3;
              let sendRequest = tmp7;
              let flag;
              if (flag === undefined) {
                flag = false;
              }
              sendRequest = undefined;
              mapped = undefined;
              let appliedGuildBoostError;
              c7 = 1;
              c8 = 1;
              return { value: "ct", done: "Array" };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              callback2(flag[6]).dispatch({ type: "GUILD_APPLY_BOOST_START" });
              let c6 = 1;
              const HTTP = callback(flag[5]).HTTP;
              const obj2 = { url: null, body: null, oldFormErrors: true, rejectWithError: null };
              obj2[0] = c7.APPLIED_GUILD_BOOSTS_FOR_GUILD(callback);
              let obj3 = { user_premium_guild_subscription_slot_ids: null, disable_powerup_auto_apply: null };
              obj3[0] = callback2;
              obj3[1] = flag;
              obj2[1] = obj3;
              const obj10 = callback2(flag[6]);
              obj2[3] = callback(flag[5]).rejectWithMigratedError();
              c7 = 3;
              c8 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = HTTP.put(obj2);
              return obj4;
            }
          } else if (2 === tmp7) {
            c6 = 0;
            c6 = appliedGuildBoostError;
            appliedGuildBoostError = new callback(flag[7]).AppliedGuildBoostError(c6);
            obj3 = callback2(flag[6]);
            const obj5 = { type: "GUILD_APPLY_BOOST_FAIL", error: null };
            obj5[1] = appliedGuildBoostError;
            obj3.dispatch(obj5);
            throw appliedGuildBoostError;
          } else if (arg0 === 1) {
            c8 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = arg1;
            return obj6;
          } else {
            sendRequest = arg1;
            const _Array = Array;
            if (Array.isArray(sendRequest.body)) {
              const body = sendRequest.body;
              mapped = body.map(mapped.createFromServer);
            } else {
              mapped = [];
              mapped[0] = mapped.createFromServer(sendRequest.body);
            }
            obj = callback2(flag[6]);
            const obj7 = { type: "GUILD_APPLY_BOOST_SUCCESS", appliedGuildBoost: null };
            obj7[1] = mapped;
            obj.dispatch(obj7);
            callback3();
            c6 = 0;
            c8 = 3;
          }
        } catch (tmp39) {
          appliedGuildBoostError = tmp39;
          if (tmp4 === c6) {
            c8 = tmp2;
            throw tmp39;
          } else {
            c7 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _applyToGuild = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _unapplyFromGuild() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (function*(arg0, arg1) {
      if (c7 === 2) {
        c7 = 3;
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
          c7 = 2;
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
              let sendRequest = tmp3;
              let dependencyMap = tmp7;
              const callback = appliedGuildBoostError;
              appliedGuildBoostError = undefined;
              callback2(outer1_2[6]).dispatch({ type: "GUILD_UNAPPLY_BOOST_START" });
              let c5 = 1;
              const HTTP = callback(outer1_2[5]).HTTP;
              const obj1 = { url: null, oldFormErrors: true, rejectWithError: null };
              obj1[0] = c7.APPLIED_GUILD_BOOST(callback, appliedGuildBoostError);
              const obj9 = callback2(outer1_2[6]);
              obj1[2] = callback(outer1_2[5]).rejectWithMigratedError();
              c6 = 2;
              c7 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.del(obj1);
              return obj2;
            }
          } else if (1 === tmp7) {
            c5 = 0;
            dependencyMap = createFromServer;
            appliedGuildBoostError = new callback(4184).AppliedGuildBoostError(dependencyMap);
            let obj3 = appliedGuildBoostError(709);
            obj3 = { type: "GUILD_UNAPPLY_BOOST_FAIL", error: null };
            obj3[1] = appliedGuildBoostError;
            obj3.dispatch(obj3);
            throw appliedGuildBoostError;
          } else if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            callback3();
            c5 = 0;
            obj = appliedGuildBoostError(709);
            const obj5 = { type: "GUILD_UNAPPLY_BOOST_SUCCESS", boostId: null };
            obj5[1] = callback;
            obj.dispatch(obj5);
            c7 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp33) {
          createFromServer = tmp33;
          if (tmp4 === c5) {
            c7 = tmp2;
            throw tmp33;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
  });
  const _unapplyFromGuild = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _cancelGuildBoostSlot() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
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
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const table = tmp2;
              let callback = tmp5;
              let lib;
              callback = undefined;
              const HTTP = lib(outer1_2[5]).HTTP;
              const obj1 = { url: null, oldFormErrors: true, rejectWithError: true };
              obj1[0] = outer1_7.USER_GUILD_BOOST_SLOT_CANCEL(lib);
              c3 = 1;
              c4 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.post(obj1);
              return obj2;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            lib = arg1;
            callback = closure_5.createFromServer(lib.body, subscriptionById.getSubscriptionById(lib.body.subscription_id));
            const obj4 = { type: "GUILD_BOOST_SLOT_UPDATE_SUCCESS", guildBoostSlot: null };
            obj4[1] = callback;
            callback(table[6]).dispatch(obj4);
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = callback;
            return obj;
          }
        } catch (tmp10) {
          c4 = tmp;
          throw tmp10;
        }
      }
    })();
  });
  const _cancelGuildBoostSlot = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _uncancelGuildBoostSlot() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
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
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const table = tmp2;
              let callback = tmp5;
              let lib;
              callback = undefined;
              const HTTP = lib(outer1_2[5]).HTTP;
              const obj1 = { url: null, oldFormErrors: true, rejectWithError: true };
              obj1[0] = outer1_7.USER_GUILD_BOOST_SLOT_UNCANCEL(lib);
              c3 = 1;
              c4 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.post(obj1);
              return obj2;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            lib = arg1;
            callback = closure_5.createFromServer(lib.body, subscriptionById.getSubscriptionById(lib.body.subscription_id));
            const obj4 = { type: "GUILD_BOOST_SLOT_UPDATE_SUCCESS", guildBoostSlot: null };
            obj4[1] = callback;
            callback(table[6]).dispatch(obj4);
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = callback;
            return obj;
          }
        } catch (tmp10) {
          c4 = tmp;
          throw tmp10;
        }
      }
    })();
  });
  const _uncancelGuildBoostSlot = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("createFromServer").fileFinishedImporting("actions/BoostingActionCreators.tsx");

export const fetchAppliedGuildBoostsForGuild = function fetchAppliedGuildBoostsForGuild(closure_0, arg1) {
  const self = this;
  const apply = _fetchAppliedGuildBoostsForGuild.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchAppliedGuildBoostsForUser = function fetchAppliedGuildBoostsForUser() {
  const self = this;
  const apply = _fetchAppliedGuildBoostsForUser.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { fetchGuildBoostSlots };
export const fetchAppliedBoostsCooldown = function fetchAppliedBoostsCooldown() {
  const self = this;
  const apply = _fetchAppliedBoostsCooldown.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const applyToGuild = function applyToGuild(id, closure_7, arg2) {
  const self = this;
  const apply = _applyToGuild.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const unapplyFromGuild = function unapplyFromGuild(guildId, id) {
  const self = this;
  const apply = _unapplyFromGuild.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const cancelGuildBoostSlot = function cancelGuildBoostSlot() {
  const self = this;
  const apply = _cancelGuildBoostSlot.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const uncancelGuildBoostSlot = function uncancelGuildBoostSlot() {
  const self = this;
  const apply = _uncancelGuildBoostSlot.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};