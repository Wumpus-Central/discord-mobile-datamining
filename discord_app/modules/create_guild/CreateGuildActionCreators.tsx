// discord_app/modules/create_guild/CreateGuildActionCreators.tsx
import Constants from "../../Constants.tsx";
import discord_common_AnalyticsUtils from "../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import TrackedHTTPUtilsDefault from "../../utils/TrackedHTTPUtils.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../_runtime/metro/00002__.js";

let closure_5, closure_6, closure_7, name;

let obj = function _createGuildFromTemplate() {
  obj = _asyncToGenerator(async (name, icon, arg2, is_community_intent, staff_only) => {
    const id = arg2;
    let c9 = 0;
    let c10 = 0;
    let c8 = 0;
    return (async function (arg0, value, arg2, arg3, arg4) {
      let obj4;
      let obj5;
      let obj6;
      if (c10 === 2) {
        c10 = 3;
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
          c10 = 2;
          if (0 === c9) {
            if (arg0 === 1) {
              c10 = 3;
              throw value;
            } else if (arg0 === 2) {
              c10 = 3;
              return { value, done: true };
            } else {
              closure_6 = tmp;
              closure_5 = tmp4;
              c8 = 1;
              const request = { url: constants.GUILDS, body: obj4, trackedActionData: obj5, rejectWithError: false };
              obj4 = {
                name,
                icon,
                channels: null,
                system_channel_id: null,
                roles: null,
                guild_template_code: null,
                staff_only,
              };
              ({
                channels: obj9.channels,
                system_channel_id: obj9.system_channel_id,
                roles: obj9.roles,
                code: obj9.guild_template_code,
              } = id);
              const post = TrackedHTTPUtilsDefault.post;
              obj5 = { event: discord_common_AnalyticsUtils.NetworkActionNames.GUILD_CREATE, properties: obj6 };
              TrackedHTTPUtilsDefault;
              c9 = 2;
              c10 = 1;
              obj6 = { template_name: id.id, is_community_intent };
              const obj7 = { value: post(request), done: false };
              return obj7;
            }
          } else if (1 === c9) {
            c8 = 0;
            name = closure_7;
            const self = this;
            const self2 = this;
            const aPIError = new closure_134_0(closure_134_2[4]).APIError(name);
            throw aPIError;
          } else if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 0;
            c10 = 3;
            return { value, done: true };
          } else {
            c8 = 0;
            c10 = 3;
            return { value: value.body, done: true };
          }
        } catch (tmp17) {
          closure_7 = tmp17;
          if (0 === c8) {
            c10 = 3;
            throw tmp17;
          } else {
            c9 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
obj = {
  createGuildFromTemplate() {
    return obj(...arguments);
  },
};
const result = size.fileFinishedImporting("modules/create_guild/CreateGuildActionCreators.tsx");

export default obj;
