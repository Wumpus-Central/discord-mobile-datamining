// === Module 5963: MemberVerificationFormStore ===

// Module 5963 (MemberVerificationFormStore)
import _modDef12 from "module_12" /* 12 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4702 */;
import size from "module_2" /* 2 */;

const NO_MEMBER_VERIFICATION_FORM = { version: "", description: "", formFields: [] };
const React3 = {};
const Store = get_initializedDefault.Store;
class MemberVerificationFormStore extends Store {
  get(arg0) {
    if (null != arg0) {
      return closure_4[arg0];
    }
  }
  getRulesPrompt(guildId) {
    let formFields;
    const find = _modDef12.find;
    _modDef12;
    if (closure_4[guildId] != null) {
      formFields = tmp2.formFields;
    }
    return find(formFields, MemberVerificationTypes.isTermsFormField);
  }
}
const prototype = MemberVerificationFormStore.prototype;
MemberVerificationFormStore.displayName = "MemberVerificationFormStore";
const obj2 = {
  INVITE_ACCEPT_SUCCESS: function handleInviteData(invite) {
    let description;
    let guild;
    let member_verification_form;
    ({ member_verification_form, guild } = invite.invite);
    let flag = null != guild && null != member_verification_form;
    if (flag) {
      const obj = { version: null, description, formFields: member_verification_form.form_fields, guild };
      ({ version: obj.version, description } = member_verification_form);
      const id = guild.id;
      if (description == null) {
        description = "";
      }
      closure_4[id] = obj;
      flag = true;
    }
    return flag;
  },
  MEMBER_VERIFICATION_FORM_UPDATE: function handleVerificationFormUpdate(arg0) {
    let form;
    let guildId;
    let obj;
    ({ form, guildId } = arg0);
    if (null == form) {
      closure_4[guildId] = obj;
    } else {
      let tmp2 = closure_4[guildId];
      if (tmp2 == null) {
        tmp2 = obj;
      }
      obj = {};
      const merged = Object.assign(tmp2);
      const merged1 = Object.assign(form);
      closure_4[guildId] = obj;
    }
  },
  MEMBER_VERIFICATION_FORM_FETCH_FAIL: function handleVerificationFormFetchFail(guildId) {
    guildId = guildId.guildId;
    let tmp2 = closure_4[guildId];
    if (tmp2 == null) {
      tmp2 = obj;
    }
    closure_4[guildId] = tmp2;
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    if (guild != null) {
      const id = guild.id;
    }
    delete closure_4[id];
  }
};
const memberVerificationFormStore = new MemberVerificationFormStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/guild_member_verification/MemberVerificationFormStore.tsx");

export default memberVerificationFormStore;
export { NO_MEMBER_VERIFICATION_FORM };