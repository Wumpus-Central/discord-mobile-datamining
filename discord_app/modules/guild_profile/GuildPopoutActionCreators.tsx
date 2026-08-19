// === Module 13429: _fetchGuildForPopout ===

// Module 13429 (_fetchGuildForPopout)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import { Endpoints } from "ME" /* 676 */;

const require = fn;
function _fetchGuildForPopout() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      dependencyMap = tmp3;
      obj1 = { type: "GUILD_POPOUT_FETCH_START", guildId: null };
      obj1[1] = callback;
      closure_1_1(closure_1_2[2]).dispatch(obj1);
      c4 = 1;
      const HTTP = callback(closure_1_2[3]).HTTP;
      const obj2 = { url: null, oldFormErrors: true, rejectWithError: true };
      obj2[0] = c4.GUILD_PREVIEW(callback);
      yield HTTP.get(obj2);
      if (1 === tmp7) {
        c4 = 0;
        const obj3 = lib(709);
        const obj4 = { type: "GUILD_POPOUT_FETCH_FAILURE", guildId: null };
        obj4[1] = callback;
        obj3.dispatch(obj4);
        c6 = 3;
      } else if (arg0 === 1) {
        c6 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        lib = arg1;
        const obj = lib(709);
        const obj5 = { type: "GUILD_POPOUT_FETCH_SUCCESS", guildId: null, guild: null };
        obj5[1] = callback;
        obj5[2] = lib.body;
        obj.dispatch(obj5);
        c4 = 0;
      }
      c4 = 0;
      return arg1;
    })();
  });
  closure_5 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("obj132").fileFinishedImporting("modules/guild_profile/GuildPopoutActionCreators.tsx");

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