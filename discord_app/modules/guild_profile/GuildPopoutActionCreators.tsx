// discord_app/modules/guild_profile/GuildPopoutActionCreators.tsx
import asyncGeneratorStep from "asyncGeneratorStep";
import { Endpoints } from "ME";

const require = arg1;
function _fetchGuildForPopout() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const dependencyMap = tmp3;
              let lib = tmp7;
              lib = undefined;
              const obj1 = { type: "GUILD_POPOUT_FETCH_START", guildId: null };
              obj1[1] = callback;
              outer1_1(outer1_2[2]).dispatch(obj1);
              let c4 = 1;
              const HTTP = callback(outer1_2[3]).HTTP;
              const obj2 = { url: null, oldFormErrors: true, rejectWithError: true };
              obj2[0] = c4.GUILD_PREVIEW(callback);
              c5 = 2;
              c6 = 1;
              let obj3 = { value: null, done: false };
              obj3[0] = HTTP.get(obj2);
              return obj3;
            }
          } else {
            if (1 === tmp7) {
              c4 = 0;
              obj3 = lib(709);
              const obj4 = { type: "GUILD_POPOUT_FETCH_FAILURE", guildId: null };
              obj4[1] = callback;
              obj3.dispatch(obj4);
              c6 = 3;
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              lib = arg1;
              obj = lib(709);
              const obj5 = { type: "GUILD_POPOUT_FETCH_SUCCESS", guildId: null, guild: null };
              obj5[1] = callback;
              obj5[2] = lib.body;
              obj.dispatch(obj5);
              c4 = 0;
            }
            c4 = 0;
            c6 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = arg1;
            return obj6;
          }
        } catch (tmp22) {
          let asyncGeneratorStep = tmp22;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp22;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  const _fetchGuildForPopout = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("dispatcher").fileFinishedImporting("modules/guild_profile/GuildPopoutActionCreators.tsx");

export const fetchGuildForPopout = function fetchGuildForPopout(id) {
  const self = this;
  const apply = _fetchGuildForPopout.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};