// discord_app/modules/guild_settings/GuildRoleMemberActionCreators.tsx
import privDefault from "../../../_runtime/01437_priv.js";
import closure_3 from "../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "GuildRoleMemberCountStore.tsx";
import { Endpoints } from "../../Constants.tsx";

const require = arg1;
function _fetchMemberCountsFromBackend() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function* (arg0, body) {
      dependencyMap = tmp3;
      c4 = 1;
      obj1 = { type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START", guildId: null };
      obj1[1] = callback;
      closure_1_1(closure_1_2[3]).dispatch(obj1);
      const HTTP = callback(closure_1_2[4]).HTTP;
      const obj2 = { url: null, rejectWithError: true };
      obj2[0] = c5.GUILD_ROLE_MEMBER_COUNTS(callback);
      yield HTTP.get(obj2);
      if (1 === tmp7) {
        c4 = 0;
        const obj3 = body(573);
        const obj4 = { type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE", guildId: null };
        obj4[1] = callback;
        obj3.dispatch(obj4);
        c6 = 3;
      } else if (arg0 === 1) {
        c6 = 3;
        throw body;
      } else if (arg0 !== 2) {
        body = body.body;
        const obj = body(573);
        const obj5 = { type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS", guildId: null, roleMemberCount: null };
        obj5[1] = callback;
        obj5[2] = body;
        obj.dispatch(obj5);
        c4 = 0;
      }
      c4 = 0;
      return body;
    })();
  });
  closure_6 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchMemberCounts() {
  let self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c1 = 0;
    return (function* (arg0) {
      if (c1 === 2) {
        c1 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
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
          c1 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c1 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c1 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              if (closure_1_4.shouldFetch(closure_0)) {
                c2 = 1;
                c1 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = (function fetchMemberCountsFromBackend(arg0) {
                  const self = this;
                  const apply = closure_6.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })(tmp5);
                return obj1;
              }
              tmp5 = closure_0;
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c1 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          c1 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp7) {
          c1 = tmp;
          throw tmp7;
        }
      }
    })();
  });
  closure_7 = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_8 = new privDefault({ maxAge: 10000 });
const tmp2 = new privDefault({ maxAge: 10000 });
let result = require("set").fileFinishedImporting("modules/guild_settings/GuildRoleMemberActionCreators.tsx");

export const fetchMemberCounts = function fetchMemberCounts(guildId) {
  const self = this;
  const apply = _fetchMemberCounts.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const requestMembersForRole = function requestMembersForRole(closure_0, callback, arg2) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  const combined = "" + closure_0 + "-" + callback;
  if (flag) {
    if (null != store.get(combined)) {
      let resolved = Promise.resolve(null);
    }
    return resolved;
  }
  const result = store.set(combined, true);
  const _require = closure_0;
  const HTTP = require("../../../discord_common/js/packages/http-utils/HTTPUtils.tsx").HTTP;
  const obj = {
    url: Endpoints.GUILD_ROLE_MEMBER_IDS(closure_0, callback),
    rejectWithError: require("../../../discord_common/js/packages/http-utils/HTTPUtils.tsx").rejectWithMigratedError(),
  };
  const value = HTTP.get(obj);
  resolved = value.then((body) => {
    const membersById = closure_1_1(closure_1_2[6]).requestMembersById(closure_0, body.body, false);
    return body.body.length;
  });
};
