// === Module 5572: MemberVerificationFormStore ===

// Module 5572 (MemberVerificationFormStore)
import _modDef12 from "module_12" /* 12 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4384 */;

require = fn;
let NO_MEMBER_VERIFICATION_FORM = { version: "", description: "", formFields: [] };
const dependencyMap = {};
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
  return _modDef12.find(formFields, MemberVerificationTypes.isTermsFormField);
};
MemberVerificationFormStore.displayName = "MemberVerificationFormStore";
NO_MEMBER_VERIFICATION_FORM = {
  INVITE_ACCEPT_SUCCESS: function handleInviteData(invite) {
    ({ member_verification_form, guild } = invite.invite);
    let flag = null != guild && null != member_verification_form;
    if (flag) {
      const obj = { version: null, description: null, formFields: null, guild: null };
      ({ version: obj.version, description } = member_verification_form);
      if (description == null) {
        description = "";
      }
      obj.description = description;
      obj.formFields = member_verification_form.form_fields;
      obj.guild = guild;
      closure_4[guild.id] = obj;
      flag = true;
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
const memberVerificationFormStore = new MemberVerificationFormStore(DispatcherDefault, NO_MEMBER_VERIFICATION_FORM);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/MemberVerificationFormStore.tsx");

export default memberVerificationFormStore;
export { NO_MEMBER_VERIFICATION_FORM };