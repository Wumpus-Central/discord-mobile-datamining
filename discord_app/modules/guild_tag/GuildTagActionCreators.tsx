// === Module 13567: _adoptGuildIdentity ===

// Module 13567 (_adoptGuildIdentity)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "mergeGuildAvatar" /* 1922 */;
import { Endpoints } from "ME" /* 676 */;

const require = arg1;
function _adoptGuildIdentity() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c6 = 0;
    c7 = 0;
    c5 = 0;
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
              closure_3 = tmp3;
              const table = tmp7;
              let lib;
              let constants = 1;
              const HTTP = lib(closure_1_2[3]).HTTP;
              obj1 = { url: null, body: null, rejectWithError: false };
              obj1[0] = constants.USER_SET_GUILD_IDENTITY;
              const obj2 = { identity_guild_id: null, identity_enabled: null };
              obj2[0] = lib;
              obj2[1] = callback;
              obj1[1] = obj2;
              c6 = 2;
              c7 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.put(obj1);
              return obj3;
            }
          } else if (1 === tmp7) {
            constants = 0;
            c7 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = currentUser;
            return obj4;
          } else if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            constants = 0;
            c7 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          } else {
            lib = arg1;
            let obj6 = callback(table[4]);
            obj6 = { type: "CURRENT_USER_UPDATE", user: null };
            const obj7 = {};
            const merged = Object.assign(currentUser.getCurrentUser());
            const merged1 = Object.assign(lib.body);
            obj6[1] = obj7;
            obj6.dispatch(obj6);
            constants = 0;
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = lib;
            return obj;
          }
        } catch (tmp9) {
          currentUser = tmp9;
          if (tmp4 === constants) {
            c7 = tmp2;
            throw tmp9;
          } else {
            c6 = tmp;
          }
        }
      }
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
const result = require("set").fileFinishedImporting("modules/guild_tag/GuildTagActionCreators.tsx");

export const adoptGuildIdentity = function adoptGuildIdentity(closure_1_0, arg1) {
  const self = this;
  const apply = _adoptGuildIdentity.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};