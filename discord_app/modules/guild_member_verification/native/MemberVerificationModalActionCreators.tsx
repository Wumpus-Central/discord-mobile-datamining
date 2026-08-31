// === Module 7615: ? ===

// Module 7615
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4691 from "module_4691" /* 4691 */;
import _fetchVerificationFormDefault from "_fetchVerificationForm" /* 5527 */;
import items from "items" /* 4977 */;

({ MEMBER_VERIFICATION_TYPE: c3, IN_APP_MEMBER_VERIFICATION_MODAL_KEY: c4 } = items);
const AnalyticEvents = ME.AnalyticEvents;
const result = set.fileFinishedImporting("modules/guild_member_verification/native/MemberVerificationModalActionCreators.tsx");

export default {
  openMemberVerificationModal(guildId, connect) {
    let obj = _fetchVerificationFormDefault;
    const verificationForm = obj.fetchVerificationForm(guildId);
    obj = { type: closure_3, guild_id: guildId };
    expandEventPropertiesDefault.track(AnalyticEvents.OPEN_MODAL, obj);
    const obj2 = expandEventPropertiesDefault;
    obj = { guildId, onClose: connect };
    _modDef4691.pushLazy(asyncRequireImpl(7616, dependencyMap.paths), obj, closure_4);
  },
  closeMemberVerificationModal() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    if (!flag) {
      let obj = expandEventPropertiesDefault;
      obj = { type: null };
      obj[0] = closure_3;
      obj.track(AnalyticEvents.MODAL_DISMISSED, obj);
    }
    _modDef4691.popWithKey(closure_4);
  }
};