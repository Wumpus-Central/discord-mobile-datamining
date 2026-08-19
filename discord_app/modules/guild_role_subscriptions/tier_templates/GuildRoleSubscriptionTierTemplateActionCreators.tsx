// === Module 17010: _getTemplates ===

// Module 17010 (_getTemplates)
import dispatcherDefault from "dispatcher" /* 709 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import { Endpoints } from "ME" /* 676 */;

const require = fn;
function _getTemplates() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    return (function*(arg0, body) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw body;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              const table = tmp2;
              body = tmp5;
              body = undefined;
              const HTTP = callback(closure_1_2[3]).HTTP;
              obj1 = { url: null, rejectWithError: null };
              obj1[0] = c4.GUILD_ROLE_SUBSCRIPTION_LISTING_TEMPLATES(callback);
              obj1[1] = callback(closure_1_2[3]).rejectWithMigratedError();
              c3 = 1;
              c4 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.get(obj1);
              return obj2;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw body;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = body;
            return obj3;
          } else {
            body = body.body;
            if (null != body.templates) {
              obj = body(table[2]);
              const obj4 = { type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES", templates: null, guildId: null };
              obj4[1] = body.templates;
              obj4[2] = callback;
              obj.dispatch(obj4);
            }
            c4 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp16) {
          c4 = tmp;
          throw tmp16;
        }
      }
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
const result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/tier_templates/GuildRoleSubscriptionTierTemplateActionCreators.tsx");

export const stashTemplateChannels = function stashTemplateChannels(selectedTemplate, guildId) {
  const obj = { type: "GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS", selectedTemplate, guildId };
  obj.dispatch(obj);
};
export const getTemplates = function getTemplates() {
  const self = this;
  const apply = _getTemplates.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};