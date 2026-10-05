// === Module 17984: GuildRoleSubscriptionTierTemplateActionCreators ===

// Module 17984 (GuildRoleSubscriptionTierTemplateActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let closure_1, closure_2;

let obj = function _getTemplates() {
  obj = _asyncToGenerator(async (guildId) => {
    let c3 = 0;
    let c4 = 0;
    return (async (arg0) => {
      let obj8;
      if (c4 === 2) {
        c4 = 3;
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
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              closure_1 = tmp4;
              body = undefined;
              const HTTP = HTTPUtils.HTTP;
              const get = HTTP.get;
              const obj4 = { url: Endpoints.GUILD_ROLE_SUBSCRIPTION_LISTING_TEMPLATES(guildId), rejectWithError: obj8.rejectWithMigratedError() };
              c3 = 1;
              c4 = 1;
              obj8 = HTTPUtils;
              const obj5 = { value: get(obj4), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            body = value.body;
            if (null != body.templates) {
              const obj7 = { type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES", templates: body.templates, guildId };
              obj = closure_130_1(closure_130_2[2]);
              obj.dispatch(obj7);
            }
            c4 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp15) {
          c4 = 3;
          throw tmp15;
        }
      }
    })();
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/tier_templates/GuildRoleSubscriptionTierTemplateActionCreators.tsx");

export const stashTemplateChannels = function stashTemplateChannels(selectedTemplate, guildId) {
  obj = DispatcherDefault;
  const obj2 = { type: "GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS", selectedTemplate, guildId };
  obj.dispatch(obj2);
};
export const getTemplates = function getTemplates() {
  return obj(...arguments);
};