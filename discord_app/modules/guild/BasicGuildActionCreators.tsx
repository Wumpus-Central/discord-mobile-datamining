// === Module 18065: BasicGuildActionCreators ===

// Module 18065 (BasicGuildActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import GuildStore from "GuildStore" /* 2074 */;
import BasicGuildStore from "BasicGuildStore" /* 7625 */;
import size from "module_2" /* 2 */;

let closure_1, closure_2, closure_3;

let obj = function _fetchBasicGuild() {
  let guild;
  let guildOrStatus;
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
              if (null == guild.getGuild(guildId)) {
                if (null == guildOrStatus.getGuildOrStatus(guildId)) {
                  if (!set.has(guildId)) {
                    const obj5 = { type: "BASIC_GUILD_FETCH", guildId };
                    const obj6 = DispatcherDefault;
                    obj6.dispatch(obj5);
                    set.add(guildId);
                    c4 = 2;
                    const HTTP = HTTPUtils.HTTP;
                    const get = HTTP.get;
                    c5 = 3;
                    c6 = 1;
                    const obj7 = { url: Endpoints.GUILD_BASIC(guildId), rejectWithError: true };
                    const obj8 = { value: get(obj7), done: false };
                    return obj8;
                  }
                }
              }
            }
          } else if (1 === c5) {
            c4 = 0;
            closure_130_7.delete(guildId);
            throw closure_3;
          } else {
            if (2 === c5) {
              c4 = 1;
              const obj9 = { type: "BASIC_GUILD_FETCH_FAILURE", guildId };
              const obj4 = closure_130_1(closure_130_2[4]);
              obj4.dispatch(obj9);
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              closure_130_7.delete(guildId);
              c6 = 3;
              return { value, done: true };
            } else {
              body = value.body;
              const obj11 = { type: "BASIC_GUILD_FETCH_SUCCESS", guildId, guildInfo: body };
              obj = closure_130_1(closure_130_2[4]);
              obj.dispatch(obj11);
              c4 = 1;
            }
            c4 = 0;
            closure_130_7.delete(guildId);
          }
          c6 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp44) {
          closure_3 = tmp44;
          if (0 === c4) {
            c6 = 3;
            throw tmp44;
          } else if (1 === tmp46) {
            c5 = 1;
          } else {
            c5 = 2;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const set = new Set();
const result = size.fileFinishedImporting("modules/guild/BasicGuildActionCreators.tsx");

export const fetchBasicGuild = function fetchBasicGuild() {
  return obj(...arguments);
};