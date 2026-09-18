// === Module 18193: BasicGuildActionCreators ===

// Module 18193 (BasicGuildActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import GuildStore from "GuildStore" /* 1980 */;
import BasicGuildStore from "BasicGuildStore" /* 8174 */;

require = fn;
let closure_8 = async function _fetchBasicGuild() {
  c5 = 0;
  c6 = 0;
  c4 = 0;
  return (async (arg0) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_2 = tmp4;
            closure_1 = tmp8;
            closure_129_0 = guildId;
            let body;
            if (null == guild.getGuild(guildId)) {
              if (null == guildOrStatus.getGuildOrStatus(guildId)) {
                if (!set.has(guildId)) {
                  const obj5 = { type: "BASIC_GUILD_FETCH", guildId };
                  DispatcherDefault.dispatch(obj5);
                  set.add(guildId);
                  c4 = 2;
                  const HTTP = HTTPUtils.HTTP;
                  const obj7 = { url: Endpoints.GUILD_BASIC(guildId), rejectWithError: true };
                  c5 = 3;
                  c6 = 1;
                  const obj8 = { value: HTTP.get(obj7), done: false };
                  return obj8;
                }
              }
            }
            c6 = 3;
          }
        } else if (1 !== tmp8) {
          if (2 === tmp8) {
            c4 = 1;
            const obj9 = { type: "BASIC_GUILD_FETCH_FAILURE", guildId: closure_129_0 };
            closure_130_1(closure_130_2[4]).dispatch(obj9);
            const obj4 = closure_130_1(closure_130_2[4]);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            closure_130_7.delete(closure_129_0);
            c6 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            body = value.body;
            const obj11 = { type: "BASIC_GUILD_FETCH_SUCCESS", guildId: closure_129_0, guildInfo: body };
            closure_130_1(closure_130_2[4]).dispatch(obj11);
            c4 = 1;
            const obj = closure_130_1(closure_130_2[4]);
          }
          c4 = 0;
          closure_130_7.delete(closure_129_0);
        }
        c4 = 0;
        closure_130_7.delete(closure_129_0);
        throw closure_3;
      } catch (tmp48) {
        closure_3 = tmp48;
        if (tmp5 === c4) {
          c6 = tmp3;
          throw tmp48;
        } else if (tmp2 === tmp50) {
          c5 = tmp2;
        } else {
          c5 = tmp;
        }
      }
    }
  })();
};
const Endpoints = fn(1074).Endpoints;
const set = new Set();
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild/BasicGuildActionCreators.tsx");

export const fetchBasicGuild = function fetchBasicGuild() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};