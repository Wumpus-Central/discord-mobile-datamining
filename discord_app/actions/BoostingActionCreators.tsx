// === Module 7679: actions/BoostingActionCreators ===

// Module 7679 (actions/BoostingActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import AppliedGuildBoostRecord from "AppliedGuildBoostRecord" /* 7680 */;
import GuildBoostSlotRecord from "GuildBoostSlotRecord" /* 7681 */;
import SubscriptionStore from "SubscriptionStore" /* 4540 */;
import size from "module_2" /* 2 */;

let boostId, c8, closure_5;

let obj = function _fetchAppliedGuildBoostsForGuild() {
  obj = _asyncToGenerator(async (guildId) => {
    let closure_2;
    let closure_1 = arg1;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (guildId === 1) {
        throw value;
      } else if (guildId === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let flag;
        let tmp;
        c5 = 2;
        if (0 === c4) {
          if (guildId === 1) {
            c5 = 3;
            throw value;
          } else if (guildId === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_3 = tmp4;
            flag = undefined;
            let obj4 = closure_1;
            if (closure_1 === undefined) {
              obj4 = {};
            }
            flag = obj4.includeEnded ?? false;
            tmp = undefined;
            c4 = 1;
            c5 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === c4) {
          if (guildId === 1) {
            c5 = 3;
            throw value;
          } else if (guildId === 2) {
            c5 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            let obj6;
            const HTTP = closure_131_0(closure_131_2[5]).HTTP;
            const request = { url: closure_131_7.APPLIED_GUILD_BOOSTS_FOR_GUILD(guildId), oldFormErrors: true, query: obj6, rejectWithError: true };
            const get = HTTP.get;
            const tmp23 = flag;
            if (tmp23) {
              obj6 = { include_ended: true };
            }
            c4 = 2;
            c5 = 1;
            const obj7 = { value: get(request), done: false };
            return obj7;
          }
        } else if (guildId === 1) {
          c5 = 3;
          throw value;
        } else if (guildId === 2) {
          c5 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          const body = value.body;
          tmp = body.map((item) => closure_1_4.createFromServer(item));
          const obj9 = { type: "GUILD_APPLIED_BOOSTS_FETCH_SUCCESS", guildId, appliedBoosts: tmp };
          obj = closure_131_1(closure_131_2[6]);
          obj.dispatch(obj9);
          c5 = 3;
          const obj10 = { value: tmp, done: true };
          return obj10;
        }
      } catch (tmp13) {
        c5 = 3;
        throw tmp13;
      }
    }
  });
  return obj(...arguments);
};
obj = function _fetchAppliedGuildBoostsForUser() {
  obj = _asyncToGenerator(async () => {
    let closure_1;
    let obj5;
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
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
      try {
        let flag;
        let tmp;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp4;
            flag = closure_0;
            if (closure_0 === undefined) {
              flag = false;
            }
            tmp = undefined;
            c3 = 1;
            c4 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const HTTP = closure_130_0(closure_130_2[5]).HTTP;
            const request = { url: closure_130_7.USER_APPLIED_GUILD_BOOSTS, oldFormErrors: true, query: obj5, rejectWithError: true };
            obj5 = { paused: flag };
            c3 = 2;
            c4 = 1;
            const obj6 = { value: HTTP.get(request), done: false };
            return obj6;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          const body = value.body;
          tmp = body.map((item) => closure_1_4.createFromServer(item));
          const obj8 = { type: "USER_APPLIED_BOOSTS_FETCH_SUCCESS", appliedGuildBoosts: tmp };
          obj = closure_130_1(closure_130_2[6]);
          obj.dispatch(obj8);
          c4 = 3;
          const obj9 = { value: tmp, done: true };
          return obj9;
        }
      } catch (tmp17) {
        c4 = 3;
        throw tmp17;
      }
    }
  });
  return obj(...arguments);
};
function fetchGuildBoostSlots() {
  return obj(...arguments);
}
obj = function _fetchGuildBoostSlots() {
  obj = _asyncToGenerator(async () => {
    let c2;
    let c3;
    let closure_0;
    let closure_1;
    let obj10;
    const obj8 = DispatcherDefault;
    obj8.dispatch({ type: "GUILD_BOOST_SLOTS_FETCH" });
    const HTTP = HTTPUtils.HTTP;
    const obj4 = { url: constants.USER_GUILD_BOOST_SLOTS, oldFormErrors: true, rejectWithError: obj10.rejectWithMigratedError() };
    const get = HTTP.get;
    obj10 = HTTPUtils;
    await get(obj4);
    const body = value.body;
    const tmp4 = body.map((subscription_id) => closure_1_5.createFromServer(subscription_id, subscriptionById.getSubscriptionById(subscription_id.subscription_id)));
    const obj7 = { type: "GUILD_BOOST_SLOTS_FETCH_SUCCESS", guildBoostSlots: tmp4 };
    obj = closure_129_1(closure_129_2[6]);
    obj.dispatch(obj7);
    return tmp4;
  });
  return obj(...arguments);
};
obj = function _fetchAppliedBoostsCooldown() {
  obj = _asyncToGenerator(async function() {
    let obj10;
    if (c5 === 2) {
      c5 = 3;
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
      let c3;
      try {
        let status;
        let ends_at;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            status = tmp;
            let closure_0 = tmp4;
            ends_at = undefined;
            c3 = 1;
            const HTTP = HTTPUtils.HTTP;
            const obj4 = { url: constants.APPLIED_GUILD_BOOST_COOLDOWN, oldFormErrors: true, rejectWithError: obj10.rejectWithMigratedError() };
            const get = HTTP.get;
            obj10 = HTTPUtils;
            c4 = 2;
            c5 = 1;
            const obj6 = { value: get(obj4), done: false };
            return obj6;
          }
        } else if (1 === c4) {
          c3 = 0;
          status = closure_2;
          if (404 === status.status) {
            const obj5 = closure_129_1(closure_129_2[6]);
            obj5.dispatch({ type: "APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS", endsAt: null });
            c5 = 3;
            return { value: null, done: true };
          } else {
            const self = this;
            const self2 = this;
            const appliedGuildBoostError = new closure_129_0(closure_129_2[7]).AppliedGuildBoostError(status);
            throw appliedGuildBoostError;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          ends_at = value.body.ends_at;
          const obj8 = { type: "APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS", endsAt: ends_at };
          obj = closure_129_1(closure_129_2[6]);
          obj.dispatch(obj8);
          c3 = 0;
          c5 = 3;
          const obj9 = { value: ends_at, done: true };
          return obj9;
        }
      } catch (tmp26) {
        closure_2 = tmp26;
        if (0 === c3) {
          c5 = 3;
          throw tmp26;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _applyToGuild() {
  obj = _asyncToGenerator(async function(arg0, user_premium_guild_subscription_slot_ids) {
    let obj14;
    let obj6;
    let closure_0 = arg0;
    let closure_2 = arg2;
    if (c8 === 2) {
      c8 = 3;
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
      let c6;
      try {
        let closure_3;
        let flag;
        let mapped;
        let appliedGuildBoostError;
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_4 = tmp;
            closure_3 = tmp4;
            flag = closure_2;
            if (closure_2 === undefined) {
              flag = false;
            }
            closure_3 = undefined;
            mapped = undefined;
            appliedGuildBoostError = undefined;
            c7 = 1;
            c8 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const obj11 = closure_132_1(closure_132_2[6]);
            obj11.dispatch({ type: "GUILD_APPLY_BOOST_START" });
            c6 = 1;
            const HTTP = closure_132_0(closure_132_2[5]).HTTP;
            const request = { url: closure_132_7.APPLIED_GUILD_BOOSTS_FOR_GUILD(closure_0), body: obj6, oldFormErrors: true, rejectWithError: obj14.rejectWithMigratedError() };
            const put = HTTP.put;
            obj6 = { user_premium_guild_subscription_slot_ids, disable_powerup_auto_apply: flag };
            obj14 = closure_132_0(closure_132_2[5]);
            c7 = 3;
            c8 = 1;
            const obj7 = { value: put(request), done: false };
            return obj7;
          }
        } else if (2 === c7) {
          c6 = 0;
          let closure_6 = closure_5;
          const self = this;
          const self2 = this;
          appliedGuildBoostError = new closure_132_0(closure_132_2[7]).AppliedGuildBoostError(closure_6);
          const obj8 = { type: "GUILD_APPLY_BOOST_FAIL", error: appliedGuildBoostError };
          const obj5 = closure_132_1(closure_132_2[6]);
          obj5.dispatch(obj8);
          throw appliedGuildBoostError;
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          closure_3 = value;
          const _Array = Array;
          if (Array.isArray(closure_3.body)) {
            const body = closure_3.body;
            mapped = body.map(closure_132_4.createFromServer);
          } else {
            mapped = [closure_132_4.createFromServer(closure_3.body)];
          }
          const obj10 = { type: "GUILD_APPLY_BOOST_SUCCESS", appliedGuildBoost: mapped };
          obj = closure_132_1(closure_132_2[6]);
          obj.dispatch(obj10);
          closure_132_10();
          c6 = 0;
          c8 = 3;
          const obj12 = { value: mapped, done: true };
          return obj12;
        }
      } catch (tmp33) {
        closure_5 = tmp33;
        if (0 === c6) {
          c8 = 3;
          throw tmp33;
        } else {
          c7 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _unapplyFromGuild() {
  obj = _asyncToGenerator(async (boostId, arg1) => {
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async function(arg0, value) {
      let obj11;
      if (c7 === 2) {
        c7 = 3;
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
          let appliedGuildBoostError;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_2 = tmp4;
              boostId = closure_1;
              appliedGuildBoostError = undefined;
              const obj9 = DispatcherDefault;
              obj9.dispatch({ type: "GUILD_UNAPPLY_BOOST_START" });
              c5 = 1;
              const HTTP = HTTPUtils.HTTP;
              const del = HTTP.del;
              const obj5 = { url: Endpoints.APPLIED_GUILD_BOOST(boostId, closure_1), oldFormErrors: true, rejectWithError: obj11.rejectWithMigratedError() };
              c6 = 2;
              c7 = 1;
              obj11 = HTTPUtils;
              const obj6 = { value: del(obj5), done: false };
              return obj6;
            }
          } else if (1 === c6) {
            c5 = 0;
            closure_2 = closure_4;
            const self = this;
            const self2 = this;
            appliedGuildBoostError = new closure_131_0(closure_131_2[7]).AppliedGuildBoostError(closure_2);
            const obj7 = { type: "GUILD_UNAPPLY_BOOST_FAIL", error: appliedGuildBoostError };
            const obj4 = closure_131_1(closure_131_2[6]);
            obj4.dispatch(obj7);
            throw appliedGuildBoostError;
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            return { value, done: true };
          } else {
            closure_131_10();
            c5 = 0;
            const obj10 = { type: "GUILD_UNAPPLY_BOOST_SUCCESS", boostId };
            obj = closure_131_1(closure_131_2[6]);
            obj.dispatch(obj10);
            c7 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp28) {
          closure_4 = tmp28;
          if (0 === c5) {
            c7 = 3;
            throw tmp28;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _cancelGuildBoostSlot() {
  obj = _asyncToGenerator(async (arg0) => {
    let c3;
    let c4;
    let closure_1;
    let closure_2;
    let closure_0 = arg0;
    const HTTP = HTTPUtils.HTTP;
    const obj4 = { url: Endpoints.USER_GUILD_BOOST_SLOT_CANCEL(closure_0), oldFormErrors: true, rejectWithError: true };
    const post = HTTP.post;
    await post(obj4);
    closure_0 = value;
    const tmp4 = closure_130_5.createFromServer(closure_0.body, closure_130_6.getSubscriptionById(closure_0.body.subscription_id));
    const obj8 = { type: "GUILD_BOOST_SLOT_UPDATE_SUCCESS", guildBoostSlot: tmp4 };
    const obj6 = closure_130_1(closure_130_2[6]);
    obj6.dispatch(obj8);
    return tmp4;
  });
  return obj(...arguments);
};
obj = function _uncancelGuildBoostSlot() {
  obj = _asyncToGenerator(async (arg0) => {
    let c3;
    let c4;
    let closure_1;
    let closure_2;
    let closure_0 = arg0;
    const HTTP = HTTPUtils.HTTP;
    const obj4 = { url: Endpoints.USER_GUILD_BOOST_SLOT_UNCANCEL(closure_0), oldFormErrors: true, rejectWithError: true };
    const post = HTTP.post;
    await post(obj4);
    closure_0 = value;
    const tmp4 = closure_130_5.createFromServer(closure_0.body, closure_130_6.getSubscriptionById(closure_0.body.subscription_id));
    const obj8 = { type: "GUILD_BOOST_SLOT_UPDATE_SUCCESS", guildBoostSlot: tmp4 };
    const obj6 = closure_130_1(closure_130_2[6]);
    obj6.dispatch(obj8);
    return tmp4;
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("actions/BoostingActionCreators.tsx");

export const fetchAppliedGuildBoostsForGuild = function fetchAppliedGuildBoostsForGuild() {
  return obj(...arguments);
};
export const fetchAppliedGuildBoostsForUser = function fetchAppliedGuildBoostsForUser() {
  return obj(...arguments);
};
export { fetchGuildBoostSlots };
export const fetchAppliedBoostsCooldown = function fetchAppliedBoostsCooldown() {
  return obj(...arguments);
};
export const applyToGuild = function applyToGuild() {
  return obj(...arguments);
};
export const unapplyFromGuild = function unapplyFromGuild() {
  return obj(...arguments);
};
export const cancelGuildBoostSlot = function cancelGuildBoostSlot() {
  return obj(...arguments);
};
export const uncancelGuildBoostSlot = function uncancelGuildBoostSlot() {
  return obj(...arguments);
};