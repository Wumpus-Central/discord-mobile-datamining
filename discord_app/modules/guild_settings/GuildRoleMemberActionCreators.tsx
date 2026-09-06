// discord_app/modules/guild_settings/GuildRoleMemberActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import privDefault from "../../../_runtime/01437_priv.js";
import GuildActionCreatorsDefault from "../../actions/GuildActionCreators.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import GuildRoleMemberCountStore from "GuildRoleMemberCountStore.tsx";

const require = fn;
let closure_6 = async function _fetchMemberCountsFromBackend() {
  c5 = 0;
  c6 = 0;
  c4 = 0;
  return (async (arg0) => {
    closure_2 = tmp3;
    closure_129_0 = guildId;
    DispatcherDefault.dispatch({ type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START", guildId });
    const HTTP = require("HTTPUtils").HTTP;
    await HTTP.get({ url: Endpoints.GUILD_ROLE_MEMBER_COUNTS(guildId), rejectWithError: true });
    if (1 === tmp7) {
      c4 = 0;
      closure_130_1(closure_130_2[3]).dispatch({
        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE",
        guildId: closure_129_0,
      });
      c6 = 3;
      closure_130_1(closure_130_2[3]);
    } else if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 !== 2) {
      const body = value.body;
      closure_130_1(closure_130_2[3]).dispatch({
        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS",
        guildId: closure_129_0,
        roleMemberCount: body,
      });
      c4 = 0;
      closure_130_1(closure_130_2[3]);
    }
    return value;
  })();
};
let closure_7 = async function _fetchMemberCounts(arg0) {
  if (c1 === 2) {
    c1 = 3;
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
    try {
      c1 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          obj = { value, done: true };
          return obj;
        } else if (GuildRoleMemberCountStore.shouldFetch(closure_0)) {
          c2 = 1;
          c1 = 1;
          const obj1 = {
            value: (function fetchMemberCountsFromBackend() {
              const self = this;
              const apply = closure_1_6.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            })(closure_0),
            done: false,
          };
          return obj1;
        }
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        obj = { value, done: true };
        return obj;
      }
      c1 = 3;
      return { value: "HermesInternal", done: null };
    } catch (tmp7) {
      c1 = tmp;
      throw tmp7;
    }
  }
};
const Endpoints = fn(1074).Endpoints;
let closure_8 = new privDefault({ maxAge: 10000 });
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/GuildRoleMemberActionCreators.tsx");

export const fetchMemberCounts = function fetchMemberCounts() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const requestMembersForRole = function requestMembersForRole(guildId, roleId, arg2) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  const combined = "" + guildId + "-" + roleId;
  if (flag) {
    if (null != closure_8.get(combined)) {
      let resolved = Promise.resolve(null);
    }
    return resolved;
  }
  const result = closure_8.set(combined, true);
  _require = guildId;
  const HTTP = require("HTTPUtils").HTTP;
  const obj = {
    url: Endpoints.GUILD_ROLE_MEMBER_IDS(guildId, roleId),
    rejectWithError: require("HTTPUtils").rejectWithMigratedError(),
  };
  value = HTTP.get(obj);
  resolved = value.then((body) => {
    const membersById = GuildActionCreatorsDefault.requestMembersById(closure_0, body.body, false);
    return body.body.length;
  });
  const obj2 = require("HTTPUtils");
};
