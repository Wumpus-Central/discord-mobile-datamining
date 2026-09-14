// discord_app/modules/create_guild/CreateGuildActionCreators.tsx
import discord_common_AnalyticsUtils from "../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import TrackedHTTPUtilsDefault from "../../utils/TrackedHTTPUtils.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
let closure_5 = async function _createGuildFromTemplate() {
  let id = arg2;
  c9 = 0;
  c10 = 0;
  c8 = 0;
  return (async (arg0, value, arg2, arg3, arg4) => {
    if (c10 === 2) {
      c10 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c10 = 2;
        if (0 === c9) {
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c10 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_6 = tmp3;
            closure_5 = tmp7;
            c8 = 1;
            const request = { url: constants.GUILDS, body: null, trackedActionData: null, rejectWithError: false };
            const obj4 = {
              name,
              icon,
              channels: null,
              system_channel_id: null,
              roles: null,
              guild_template_code: null,
              staff_only: null,
            };
            ({
              channels: obj10.channels,
              system_channel_id: obj10.system_channel_id,
              roles: obj10.roles,
              code: obj10.guild_template_code,
            } = id);
            obj4.staff_only = staff_only;
            request.body = obj4;
            const obj5 = { event: discord_common_AnalyticsUtils.NetworkActionNames.GUILD_CREATE, properties: null };
            const obj6 = { template_name: id.id, is_community_intent };
            obj5.properties = obj6;
            request.trackedActionData = obj5;
            c9 = 2;
            c10 = 1;
            const obj7 = { value: TrackedHTTPUtilsDefault.post(request), done: false };
            return obj7;
          }
        } else if (1 === tmp7) {
          c8 = 0;
          closure_133_0 = closure_7;
          const aPIError = new closure_134_0(closure_134_2[4]).APIError(closure_133_0);
          throw aPIError;
        } else if (arg0 === 1) {
          c10 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 0;
          c10 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          c8 = 0;
          c10 = 3;
          const obj = { value: value.body, done: true };
          return obj;
        }
      } catch (tmp22) {
        closure_7 = tmp22;
        if (tmp4 === c8) {
          c10 = tmp2;
          throw tmp22;
        } else {
          c9 = tmp;
        }
      }
    }
  })();
};
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/create_guild/CreateGuildActionCreators.tsx");

export default {
  createGuildFromTemplate() {
    const self = this;
    const apply = closure_5.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
};
