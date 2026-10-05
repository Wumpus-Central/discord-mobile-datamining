// discord_app/modules/guild_tag/GuildTagActionCreators.tsx
import Constants from "../../Constants.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import UserStore from "../../stores/UserStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_2, closure_3;

let obj = function _adoptGuildIdentity() {
  obj = _asyncToGenerator(async (arg0, identity_enabled) => {
    let body = arg0;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      let obj4;
      let obj9;
      if (c7 === 2) {
        c7 = 3;
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
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_2 = tmp4;
              body = undefined;
              c5 = 1;
              const HTTP = HTTPUtils.HTTP;
              const request = { url: constants.USER_SET_GUILD_IDENTITY, body: obj4, rejectWithError: false };
              c6 = 2;
              c7 = 1;
              obj4 = { identity_guild_id: body, identity_enabled };
              const obj5 = { value: HTTP.put(request), done: false };
              return obj5;
            }
          } else if (1 === c6) {
            c5 = 0;
            c7 = 3;
            return { value, done: true };
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            return { value, done: true };
          } else {
            body = value;
            const obj8 = { type: "CURRENT_USER_UPDATE", user: obj9 };
            obj9 = {};
            const dispatch = closure_131_1(closure_131_2[4]).dispatch;
            closure_131_1(closure_131_2[4]);
            const merged = Object.assign(closure_131_4.getCurrentUser());
            const merged1 = Object.assign(body.body);
            dispatch(obj8);
            c5 = 0;
            c7 = 3;
            return { value: body, done: true };
          }
        } catch (tmp6) {
          value = tmp6;
          if (0 === c5) {
            c7 = 3;
            throw tmp6;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/guild_tag/GuildTagActionCreators.tsx");

export const adoptGuildIdentity = function adoptGuildIdentity() {
  return obj(...arguments);
};
