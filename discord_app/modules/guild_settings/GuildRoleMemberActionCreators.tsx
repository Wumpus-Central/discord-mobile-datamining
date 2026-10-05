// discord_app/modules/guild_settings/GuildRoleMemberActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import LRUCacheDefault from "../../../_runtime/01444_LRUCache.js";
import GuildActionCreatorsDefault from "../../actions/GuildActionCreators.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import GuildRoleMemberCountStore from "GuildRoleMemberCountStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, c1, c2, closure_1, closure_2, closure_3;

let obj = function _fetchMemberCountsFromBackend() {
  obj = _asyncToGenerator(async (guildId) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0) => {
      if (c6 === 2) {
        c6 = 3;
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
          let body;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              closure_1 = tmp4;
              body = undefined;
              c4 = 1;
              const obj5 = { type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START", guildId };
              const obj9 = DispatcherDefault;
              obj9.dispatch(obj5);
              const HTTP = require("HTTPUtils").HTTP;
              const get = HTTP.get;
              c5 = 2;
              c6 = 1;
              const obj6 = { url: Endpoints.GUILD_ROLE_MEMBER_COUNTS(guildId), rejectWithError: true };
              const obj7 = { value: get(obj6), done: false };
              return obj7;
            }
          } else {
            if (1 === c5) {
              c4 = 0;
              const obj8 = { type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE", guildId };
              const obj4 = closure_130_1(closure_130_2[3]);
              obj4.dispatch(obj8);
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              return { value, done: true };
            } else {
              body = value.body;
              const obj11 = { type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS", guildId, roleMemberCount: body };
              obj = closure_130_1(closure_130_2[3]);
              obj.dispatch(obj11);
              c4 = 0;
            }
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp19) {
          closure_3 = tmp19;
          if (0 === c4) {
            c6 = 3;
            throw tmp19;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _fetchMemberCounts() {
  obj = _asyncToGenerator(async (arg0) => {
    function fetchMemberCountsFromBackend() {
      return closure_1_6(...arguments);
    }
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
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
        c1 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else if (GuildRoleMemberCountStore.shouldFetch(closure_0)) {
            c2 = 1;
            c1 = 1;
            const obj4 = { value: fetchMemberCountsFromBackend(closure_0), done: false };
            return obj4;
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
        return { value: "IconComponent", done: null };
      } catch (tmp6) {
        c1 = 3;
        throw tmp6;
      }
    }
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const tmp2 = new LRUCacheDefault({ maxAge: 10000 });
let closure_8 = tmp2;
let result = size.fileFinishedImporting("modules/guild_settings/GuildRoleMemberActionCreators.tsx");

export const fetchMemberCounts = function fetchMemberCounts() {
  return obj(...arguments);
};
export const requestMembersForRole = function requestMembersForRole(guildId, roleId, arg2) {
  let obj2;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  const combined = "" + guildId + "-" + roleId;
  if (flag) {
    let resolved;
    if (null != closure_8.get(combined)) {
      resolved = Promise.resolve(null);
    }
    return resolved;
  }
  const result = closure_8.set(combined, true);
  _require = guildId;
  const HTTP = require("HTTPUtils").HTTP;
  obj = { url: Endpoints.GUILD_ROLE_MEMBER_IDS(guildId, roleId), rejectWithError: obj2.rejectWithMigratedError() };
  const get = HTTP.get;
  obj2 = require("HTTPUtils");
  const value = get(obj);
  resolved = value.then((body) => {
    obj = GuildActionCreatorsDefault;
    const membersById = obj.requestMembersById(guildId, body.body, false);
    return body.body.length;
  });
};
