// discord_app/modules/guild_settings/GuildRoleMemberActionCreators.tsx
import priv from "priv";
import getRoleMemberCount from "getRoleMemberCount";
import { Endpoints } from "ME";

const require = arg1;
function _fetchMemberCountsFromBackend() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0, body) {
      const dependencyMap = tmp3;
      let c4 = 1;
      const obj1 = { type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START", guildId: null };
      obj1[1] = callback;
      outer1_1(outer1_2[3]).dispatch(obj1);
      const HTTP = callback(outer1_2[4]).HTTP;
      const obj2 = { url: null, rejectWithError: true };
      obj2[0] = c5.GUILD_ROLE_MEMBER_COUNTS(callback);
      yield HTTP.get(obj2);
      if (1 === tmp7) {
        c4 = 0;
        const obj3 = body(709);
        const obj4 = { type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE", guildId: null };
        obj4[1] = callback;
        obj3.dispatch(obj4);
        let c6 = 3;
      } else if (arg0 === 1) {
        c6 = 3;
        throw body;
      } else if (arg0 !== 2) {
        body = body.body;
        const obj = body(709);
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
  const _fetchMemberCountsFromBackend = tmp;
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
    let closure_0 = arg0;
    let c2 = 0;
    let c1 = 0;
    return (function*(arg0) {
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
              if (outer1_4.shouldFetch(closure_0)) {
                c2 = 1;
                c1 = 1;
                const obj1 = { value: null, done: false };
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
  const _fetchMemberCounts = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const metroImportAll = new require("priv")({ maxAge: 10000 });
const tmp2 = new require("priv")({ maxAge: 10000 });
let result = require("ME").fileFinishedImporting("modules/guild_settings/GuildRoleMemberActionCreators.tsx");

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
    if (null != tmp2.get(combined)) {
      let resolved = Promise.resolve(null);
    }
    return resolved;
  }
  const result = tmp2.set(combined, true);
  const _require = closure_0;
  const HTTP = _require(530).HTTP;
  const obj = { url: Endpoints.GUILD_ROLE_MEMBER_IDS(closure_0, callback), rejectWithError: null };
  obj[1] = _require(530).rejectWithMigratedError();
  const value = HTTP.get(obj);
  resolved = value.then((body) => {
    const membersById = outer1_1(outer1_2[6]).requestMembersById(closure_0, body.body, false);
    return body.body.length;
  });
};