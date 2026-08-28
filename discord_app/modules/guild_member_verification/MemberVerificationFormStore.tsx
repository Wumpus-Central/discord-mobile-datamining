// === Module 5455: get ===

// Module 5455 (get)
import applyDefault from "apply" /* 12 */;
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import MAX_RESULTS_PER_PAGE from "MAX_RESULTS_PER_PAGE" /* 4271 */;

require = arg1;
let obj = { version: "", description: "", formFields: [] };
let closure_4 = {};
const Store = initializeDefault.Store;
class MemberVerificationFormStore extends Store {
}
const prototype = MemberVerificationFormStore.prototype;
prototype["get"] = function get(arg0) {
  if (null != arg0) {
    return dependencyMap[arg0];
  }
};
prototype["getRulesPrompt"] = function getRulesPrompt(guildId) {
  let formFields;
  if (dependencyMap[guildId] != null) {
    formFields = tmp2.formFields;
  }
  return applyDefault.find(formFields, MAX_RESULTS_PER_PAGE.isTermsFormField);
};
MemberVerificationFormStore.displayName = "MemberVerificationFormStore";
obj = {
  INVITE_ACCEPT_SUCCESS: function handleInviteData(invite) {
    ({ member_verification_form, guild } = invite.invite);
    let flag = null != guild && null != member_verification_form;
    if (flag) {
      obj = { version: null, description: null, formFields: null, guild: null };
      ({ version: obj[0], description } = member_verification_form);
      if (description == null) {
        description = "";
      }
      obj[1] = description;
      obj[2] = member_verification_form.form_fields;
      obj[3] = guild;
      closure_4[guild.id] = obj;
      flag = true;
      const tmp = closure_4;
    }
    return flag;
  },
  MEMBER_VERIFICATION_FORM_UPDATE: function handleVerificationFormUpdate(arg0) {
    ({ form, guildId } = arg0);
    if (null == form) {
      dependencyMap[guildId] = obj;
    } else {
      let tmp2 = dependencyMap[guildId];
      if (tmp2 == null) {
        tmp2 = obj;
      }
      obj = {};
      const merged = Object.assign(tmp2);
      const merged1 = Object.assign(form);
      dependencyMap[guildId] = obj;
      const tmp = dependencyMap;
    }
  },
  MEMBER_VERIFICATION_FORM_FETCH_FAIL: function handleVerificationFormFetchFail(guildId) {
    guildId = guildId.guildId;
    let tmp2 = dependencyMap[guildId];
    if (tmp2 == null) {
      tmp2 = obj;
    }
    dependencyMap[guildId] = tmp2;
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    if (guild != null) {
      const id = guild.id;
    }
    delete tmp2[tmp];
  }
};
const memberVerificationFormStore = new MemberVerificationFormStore(dispatcherDefault, obj);
const result = require("set").fileFinishedImporting("modules/guild_member_verification/MemberVerificationFormStore.tsx");

export default memberVerificationFormStore;
export const NO_MEMBER_VERIFICATION_FORM = obj;