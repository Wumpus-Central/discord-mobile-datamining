// discord_app/modules/guild_tag/GuildTagActionCreators.tsx
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
let closure_6 = async function _adoptGuildIdentity() {
  c6 = 0;
  c7 = 0;
  c5 = 0;
  return (async (arg0, value) => {
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
            closure_130_0 = undefined;
            c5 = 1;
            const HTTP = HTTPUtils.HTTP;
            const request = { url: constants.USER_SET_GUILD_IDENTITY, body: null, rejectWithError: false };
            const obj1 = { identity_guild_id, identity_enabled };
            request.body = obj1;
            c6 = 2;
            c7 = 1;
            const obj2 = { value: HTTP.put(request), done: false };
            return obj2;
          }
        } else if (1 === tmp7) {
          c5 = 0;
          c7 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_130_0 = value;
          let obj6 = closure_131_1(closure_131_2[4]);
          const obj5 = { type: "CURRENT_USER_UPDATE", user: null };
          obj6 = {};
          const merged = Object.assign(closure_131_4.getCurrentUser());
          const merged1 = Object.assign(closure_130_0.body);
          obj5.user = obj6;
          obj6.dispatch(obj5);
          c5 = 0;
          c7 = 3;
          obj = { value: closure_130_0, done: true };
          return obj;
        }
      } catch (tmp9) {
        value = tmp9;
        if (tmp4 === c5) {
          c7 = tmp2;
          throw tmp9;
        } else {
          c6 = tmp;
        }
      }
    }
  })();
};
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_tag/GuildTagActionCreators.tsx");

export const adoptGuildIdentity = function adoptGuildIdentity() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
