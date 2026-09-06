// discord_app/actions/BoostingActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import HTTPUtils from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import asyncGeneratorStep from "../../_runtime/00005_asyncGeneratorStep.js";
import AppliedGuildBoostRecord from "../records/AppliedGuildBoostRecord.tsx";
import GuildBoostSlotRecord from "../records/GuildBoostSlotRecord.tsx";
import SubscriptionStore from "../stores/billing/SubscriptionStore.tsx";

require = fn;
let closure_8 = async function _fetchAppliedGuildBoostsForGuild(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
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
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_3 = tmp5;
          closure_2 = tmp2;
          closure_130_1 = undefined;
          closure_130_0 = closure_0;
          let obj1 = closure_1;
          if (closure_1 === undefined) {
            obj1 = {};
          }
          let flag = obj1.includeEnded;
          if (flag === undefined) {
            flag = false;
          }
          closure_130_1 = flag;
          closure_130_2 = undefined;
          c4 = 1;
          c5 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          let obj3;
          const HTTP = closure_131_0(closure_131_2[5]).HTTP;
          const request = {
            url: closure_131_7.APPLIED_GUILD_BOOSTS_FOR_GUILD(closure_130_0),
            oldFormErrors: true,
            query: null,
            rejectWithError: true,
          };
          if (closure_130_1) {
            obj3 = { include_ended: true };
          }
          request.query = obj3;
          c4 = 2;
          c5 = 1;
          const obj4 = { value: HTTP.get(request), done: false };
          return obj4;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        const body = value.body;
        closure_130_2 = body.map((item) => closure_1_4.createFromServer(item));
        obj = closure_131_1(closure_131_2[6]);
        const obj6 = {
          type: "GUILD_APPLIED_BOOSTS_FETCH_SUCCESS",
          guildId: closure_130_0,
          appliedBoosts: closure_130_2,
        };
        obj.dispatch(obj6);
        c5 = 3;
        const obj7 = { value: closure_130_2, done: true };
        return obj7;
      }
    } catch (tmp14) {
      c5 = tmp;
      throw tmp14;
    }
  }
};
let closure_9 = async function _fetchAppliedGuildBoostsForUser() {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
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
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = undefined;
          let flag = closure_0;
          if (closure_0 === undefined) {
            flag = false;
          }
          closure_129_0 = flag;
          closure_129_1 = undefined;
          c3 = 1;
          c4 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          const HTTP = closure_130_0(closure_130_2[5]).HTTP;
          const request = {
            url: closure_130_7.USER_APPLIED_GUILD_BOOSTS,
            oldFormErrors: true,
            query: null,
            rejectWithError: true,
          };
          const obj2 = { paused: closure_129_0 };
          request.query = obj2;
          c3 = 2;
          c4 = 1;
          const obj3 = { value: HTTP.get(request), done: false };
          return obj3;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj4 = { value, done: true };
        return obj4;
      } else {
        const body = value.body;
        closure_129_1 = body.map((item) => closure_1_4.createFromServer(item));
        obj = closure_130_1(closure_130_2[6]);
        const obj5 = { type: "USER_APPLIED_BOOSTS_FETCH_SUCCESS", appliedGuildBoosts: closure_129_1 };
        obj.dispatch(obj5);
        c4 = 3;
        const obj6 = { value: closure_129_1, done: true };
        return obj6;
      }
    } catch (tmp18) {
      c4 = tmp;
      throw tmp18;
    }
  }
};
function fetchGuildBoostSlots() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_11 = async function _fetchGuildBoostSlots() {
  closure_1 = tmp2;
  closure_0 = tmp5;
  DispatcherDefault.dispatch({ type: "GUILD_BOOST_SLOTS_FETCH" });
  const HTTP = HTTPUtils.HTTP;
  const obj1 = { url: constants.USER_GUILD_BOOST_SLOTS, oldFormErrors: true, rejectWithError: null };
  obj1.rejectWithError = HTTPUtils.rejectWithMigratedError();
  await HTTP.get(obj1);
  const body = value.body;
  closure_128_0 = body.map((subscription_id) =>
    closure_1_5.createFromServer(
      subscription_id,
      subscriptionById.getSubscriptionById(subscription_id.subscription_id),
    ),
  );
  closure_129_1(closure_129_2[6]).dispatch({ type: "GUILD_BOOST_SLOTS_FETCH_SUCCESS", guildBoostSlots: closure_128_0 });
  return closure_128_0;
};
let closure_12 = async function _fetchAppliedBoostsCooldown() {
  if (c5 === 2) {
    c5 = 3;
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
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp3;
          closure_0 = tmp7;
          let ends_at;
          c3 = 1;
          const HTTP = HTTPUtils.HTTP;
          const obj1 = {
            url: constants.APPLIED_GUILD_BOOST_COOLDOWN,
            oldFormErrors: true,
            rejectWithError: HTTPUtils.rejectWithMigratedError(),
          };
          c4 = 2;
          c5 = 1;
          const obj2 = { value: HTTP.get(obj1), done: false };
          return obj2;
        }
      } else if (1 === tmp7) {
        c3 = 0;
        closure_128_1 = closure_2;
        if (404 === closure_128_1.status) {
          let obj4 = closure_129_1(closure_129_2[6]);
          obj4.dispatch({ type: "APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS", endsAt: null });
          c5 = 3;
          return { value: null, done: true };
        } else {
          const appliedGuildBoostError = new closure_129_0(closure_129_2[7]).AppliedGuildBoostError(closure_128_1);
          throw appliedGuildBoostError;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c5 = 3;
        const obj3 = { value, done: true };
        return obj3;
      } else {
        ends_at = value.body.ends_at;
        obj = closure_129_1(closure_129_2[6]);
        obj4 = { type: "APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS", endsAt: ends_at };
        obj.dispatch(obj4);
        c3 = 0;
        c5 = 3;
        const obj5 = { value: ends_at, done: true };
        return obj5;
      }
    } catch (tmp31) {
      closure_2 = tmp31;
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp31;
      } else {
        c4 = tmp;
      }
    }
  }
};
let closure_13 = async function _applyToGuild(arg0) {
  if (c8 === 2) {
    c8 = 3;
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
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp3;
          closure_3 = tmp7;
          closure_131_2 = undefined;
          closure_131_0 = closure_0;
          closure_131_1 = closure_1;
          let flag = closure_2;
          if (closure_2 === undefined) {
            flag = false;
          }
          closure_131_2 = flag;
          closure_131_3 = undefined;
          closure_131_4 = undefined;
          closure_131_5 = undefined;
          c7 = 1;
          c8 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          closure_132_1(closure_132_2[6]).dispatch({ type: "GUILD_APPLY_BOOST_START" });
          c6 = 1;
          const HTTP = closure_132_0(closure_132_2[5]).HTTP;
          const request = {
            url: closure_132_7.APPLIED_GUILD_BOOSTS_FOR_GUILD(closure_131_0),
            body: null,
            oldFormErrors: true,
            rejectWithError: null,
          };
          const obj2 = {
            user_premium_guild_subscription_slot_ids: closure_131_1,
            disable_powerup_auto_apply: closure_131_2,
          };
          request.body = obj2;
          const obj10 = closure_132_1(closure_132_2[6]);
          request.rejectWithError = closure_132_0(closure_132_2[5]).rejectWithMigratedError();
          c7 = 3;
          c8 = 1;
          let obj3 = { value: HTTP.put(request), done: false };
          return obj3;
        }
      } else if (2 === tmp7) {
        c6 = 0;
        closure_131_6 = closure_5;
        const appliedGuildBoostError = new closure_132_0(closure_132_2[7]).AppliedGuildBoostError(closure_131_6);
        closure_131_5 = appliedGuildBoostError;
        obj3 = closure_132_1(closure_132_2[6]);
        const obj4 = { type: "GUILD_APPLY_BOOST_FAIL", error: closure_131_5 };
        obj3.dispatch(obj4);
        throw closure_131_5;
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 0;
        c8 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        closure_131_3 = value;
        const _Array = Array;
        if (Array.isArray(closure_131_3.body)) {
          const body = closure_131_3.body;
          let mapped = body.map(closure_132_4.createFromServer);
        } else {
          mapped = [closure_132_4.createFromServer(closure_131_3.body)];
        }
        closure_131_4 = mapped;
        obj = closure_132_1(closure_132_2[6]);
        const obj6 = { type: "GUILD_APPLY_BOOST_SUCCESS", appliedGuildBoost: closure_131_4 };
        obj.dispatch(obj6);
        closure_132_10();
        c6 = 0;
        c8 = 3;
      }
    } catch (tmp39) {
      closure_5 = tmp39;
      if (tmp4 === c6) {
        c8 = tmp2;
        throw tmp39;
      } else {
        c7 = tmp;
      }
    }
  }
};
let closure_14 = async function _unapplyFromGuild(arg0) {
  if (c7 === 2) {
    c7 = 3;
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
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_3 = tmp3;
          closure_2 = tmp7;
          closure_130_0 = closure_1;
          closure_130_1 = undefined;
          DispatcherDefault.dispatch({ type: "GUILD_UNAPPLY_BOOST_START" });
          c5 = 1;
          const HTTP = HTTPUtils.HTTP;
          const obj1 = {
            url: Endpoints.APPLIED_GUILD_BOOST(closure_0, closure_1),
            oldFormErrors: true,
            rejectWithError: null,
          };
          obj1.rejectWithError = HTTPUtils.rejectWithMigratedError();
          c6 = 2;
          c7 = 1;
          const obj2 = { value: HTTP.del(obj1), done: false };
          return obj2;
        }
      } else if (1 === tmp7) {
        c5 = 0;
        closure_130_2 = closure_4;
        const appliedGuildBoostError = new closure_131_0(closure_131_2[7]).AppliedGuildBoostError(closure_130_2);
        closure_130_1 = appliedGuildBoostError;
        let obj3 = closure_131_1(closure_131_2[6]);
        obj3 = { type: "GUILD_UNAPPLY_BOOST_FAIL", error: closure_130_1 };
        obj3.dispatch(obj3);
        throw closure_130_1;
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 0;
        c7 = 3;
        const obj4 = { value, done: true };
        return obj4;
      } else {
        closure_131_10();
        c5 = 0;
        obj = closure_131_1(closure_131_2[6]);
        const obj5 = { type: "GUILD_UNAPPLY_BOOST_SUCCESS", boostId: closure_130_0 };
        obj.dispatch(obj5);
        c7 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp33) {
      closure_4 = tmp33;
      if (tmp4 === c5) {
        c7 = tmp2;
        throw tmp33;
      } else {
        c6 = tmp;
      }
    }
  }
};
let closure_15 = async function _cancelGuildBoostSlot() {
  closure_2 = tmp2;
  closure_1 = tmp5;
  const HTTP = HTTPUtils.HTTP;
  await HTTP.post({
    url: Endpoints.USER_GUILD_BOOST_SLOT_CANCEL(closure_0),
    oldFormErrors: true,
    rejectWithError: true,
  });
  closure_129_0 = value;
  closure_129_1 = closure_130_5.createFromServer(
    closure_129_0.body,
    closure_130_6.getSubscriptionById(closure_129_0.body.subscription_id),
  );
  closure_130_1(closure_130_2[6]).dispatch({ type: "GUILD_BOOST_SLOT_UPDATE_SUCCESS", guildBoostSlot: closure_129_1 });
  return closure_129_1;
};
let closure_16 = async function _uncancelGuildBoostSlot() {
  closure_2 = tmp2;
  closure_1 = tmp5;
  const HTTP = HTTPUtils.HTTP;
  await HTTP.post({
    url: Endpoints.USER_GUILD_BOOST_SLOT_UNCANCEL(closure_0),
    oldFormErrors: true,
    rejectWithError: true,
  });
  closure_129_0 = value;
  closure_129_1 = closure_130_5.createFromServer(
    closure_129_0.body,
    closure_130_6.getSubscriptionById(closure_129_0.body.subscription_id),
  );
  closure_130_1(closure_130_2[6]).dispatch({ type: "GUILD_BOOST_SLOT_UPDATE_SUCCESS", guildBoostSlot: closure_129_1 });
  return closure_129_1;
};
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("actions/BoostingActionCreators.tsx");

export const fetchAppliedGuildBoostsForGuild = function fetchAppliedGuildBoostsForGuild() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchAppliedGuildBoostsForUser = function fetchAppliedGuildBoostsForUser() {
  const self = this;
  const apply = closure_9.apply;
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
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const applyToGuild = function applyToGuild() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const unapplyFromGuild = function unapplyFromGuild() {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const cancelGuildBoostSlot = function cancelGuildBoostSlot() {
  const self = this;
  const apply = closure_15.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const uncancelGuildBoostSlot = function uncancelGuildBoostSlot() {
  const self = this;
  const apply = closure_16.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
