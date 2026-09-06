// discord_app/modules/guild_role_subscriptions/tier_templates/GuildRoleSubscriptionTierTemplateActionCreators.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import HTTPUtils from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
let closure_5 = async function _getTemplates(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
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
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp2;
          closure_1 = tmp5;
          closure_129_0 = closure_0;
          let body;
          const HTTP = HTTPUtils.HTTP;
          const obj1 = {
            url: Endpoints.GUILD_ROLE_SUBSCRIPTION_LISTING_TEMPLATES(closure_0),
            rejectWithError: HTTPUtils.rejectWithMigratedError(),
          };
          c3 = 1;
          c4 = 1;
          const obj2 = { value: HTTP.get(obj1), done: false };
          return obj2;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj3 = { value, done: true };
        return obj3;
      } else {
        body = value.body;
        if (null != body.templates) {
          obj = closure_130_1(closure_130_2[2]);
          const obj4 = {
            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES",
            templates: body.templates,
            guildId: closure_129_0,
          };
          obj.dispatch(obj4);
        }
        c4 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp16) {
      c4 = tmp;
      throw tmp16;
    }
  }
};
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/tier_templates/GuildRoleSubscriptionTierTemplateActionCreators.tsx",
);

export const stashTemplateChannels = function stashTemplateChannels(selectedTemplate, guildId) {
  const obj = { type: "GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS", selectedTemplate, guildId };
  obj.dispatch(obj);
};
export const getTemplates = function getTemplates() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
