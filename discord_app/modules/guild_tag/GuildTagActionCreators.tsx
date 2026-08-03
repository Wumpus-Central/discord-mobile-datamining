// === Module 13135: _adoptGuildIdentity ===

// Module 13135 (_adoptGuildIdentity)
import set from "set";
import mergeGuildAvatar from "mergeGuildAvatar";
import { Endpoints } from "ME";

const require = arg1;
function _adoptGuildIdentity() {
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
              let set = tmp3;
              const table = tmp7;
              let lib;
              let constants = 1;
              const HTTP = lib(outer1_2[3]).HTTP;
              const obj1 = { url: null, body: null, rejectWithError: false };
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
            if (lib.ok) {
              obj = callback(table[4]);
              const obj6 = { type: "CURRENT_USER_UPDATE", user: null };
              const obj7 = {};
              const merged = Object.assign(currentUser.getCurrentUser());
              const merged1 = Object.assign(lib.body);
              obj6[1] = obj7;
              obj.dispatch(obj6);
            }
            constants = 0;
            c7 = 3;
            const obj8 = { value: null, done: true };
            obj8[0] = lib;
            return obj8;
          }
        } catch (tmp21) {
          currentUser = tmp21;
          if (tmp4 === constants) {
            c7 = tmp2;
            throw tmp21;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
  });
  const _adoptGuildIdentity = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("ME").fileFinishedImporting("modules/guild_tag/GuildTagActionCreators.tsx");

export const adoptGuildIdentity = function adoptGuildIdentity(outer1_0, arg1) {
  const self = this;
  const apply = _adoptGuildIdentity.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};