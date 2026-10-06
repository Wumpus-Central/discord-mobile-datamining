// === Module 13803: GuildPopoutActionCreators ===

// Module 13803 (GuildPopoutActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let body, closure_2, closure_3;

let obj = function _fetchGuildForPopout() {
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
              body = undefined;
              const obj5 = { type: "GUILD_POPOUT_FETCH_START", guildId };
              const obj9 = DispatcherDefault;
              obj9.dispatch(obj5);
              c4 = 1;
              const HTTP = HTTPUtils.HTTP;
              const get = HTTP.get;
              c5 = 2;
              c6 = 1;
              const obj6 = { url: Endpoints.GUILD_PREVIEW(guildId), oldFormErrors: true, rejectWithError: true };
              const obj7 = { value: get(obj6), done: false };
              return obj7;
            }
          } else {
            if (1 === c5) {
              c4 = 0;
              const obj8 = { type: "GUILD_POPOUT_FETCH_FAILURE", guildId };
              const obj4 = closure_130_1(closure_130_2[2]);
              obj4.dispatch(obj8);
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              return { value, done: true };
            } else {
              body = value;
              const obj11 = { type: "GUILD_POPOUT_FETCH_SUCCESS", guildId, guild: body.body };
              obj = closure_130_1(closure_130_2[2]);
              obj.dispatch(obj11);
              c4 = 0;
            }
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp19) {
          closure_3 = tmp19;
          if (0 === c4) {
            c6 = 3;
            throw tmp19;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/guild_profile/GuildPopoutActionCreators.tsx");

export const fetchGuildForPopout = function fetchGuildForPopout() {
  return obj(...arguments);
};