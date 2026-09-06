// discord_app/modules/guild/BasicGuildActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import GuildStore from "../../stores/GuildStore.tsx";
import BasicGuildStore from "BasicGuildStore.tsx";

require = fn;
let closure_8 = async function _fetchBasicGuild(arg0, value) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
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
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp4;
          closure_1 = tmp8;
          closure_129_0 = closure_0;
          let body;
          if (null == guild.getGuild(closure_0)) {
            if (null == guildOrStatus.getGuildOrStatus(tmp56)) {
              if (!set.has(tmp56)) {
                let obj5 = DispatcherDefault;
                const obj1 = { type: "BASIC_GUILD_FETCH", guildId: tmp56 };
                obj5.dispatch(obj1);
                set.add(tmp56);
                c4 = 2;
                const HTTP = HTTPUtils.HTTP;
                const obj2 = { url: Endpoints.GUILD_BASIC(tmp56), rejectWithError: true };
                c5 = 3;
                c6 = 1;
                let obj3 = { value: HTTP.get(obj2), done: false };
                return obj3;
              }
            }
          }
          c6 = 3;
        }
      } else if (1 !== tmp8) {
        if (2 === tmp8) {
          c4 = 1;
          obj3 = closure_130_1(closure_130_2[4]);
          const obj4 = { type: "BASIC_GUILD_FETCH_FAILURE", guildId: closure_129_0 };
          obj3.dispatch(obj4);
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          closure_130_7.delete(closure_129_0);
          c6 = 3;
          obj5 = { value, done: true };
          return obj5;
        } else {
          body = value.body;
          obj = closure_130_1(closure_130_2[4]);
          const obj6 = { type: "BASIC_GUILD_FETCH_SUCCESS", guildId: closure_129_0, guildInfo: body };
          obj.dispatch(obj6);
          c4 = 1;
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
