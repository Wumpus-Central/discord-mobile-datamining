// === Module 5570: guild_member_verification/MemberVerificationModalActionCreators ===

// Module 5570 (guild_member_verification/MemberVerificationModalActionCreators)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import MemberVerificationActionCreatorsDefault from "MemberVerificationActionCreators" /* 5547 */;
import MemberVerificationConstants from "MemberVerificationConstants" /* 5059 */;
import size from "module_2" /* 2 */;

({ MEMBER_VERIFICATION_TYPE: c3, IN_APP_MEMBER_VERIFICATION_MODAL_KEY: closure_4 } = MemberVerificationConstants);
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/guild_member_verification/native/MemberVerificationModalActionCreators.tsx");

export default {
  openMemberVerificationModal(guildId, connect) {
    let obj = MemberVerificationActionCreatorsDefault;
    const verificationForm = obj.fetchVerificationForm(guildId);
    obj = { type, guild_id: guildId };
    AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_MODAL, obj);
    obj = { guildId, onClose: connect };
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(5571, dependencyMap.paths), obj, React4);
  },
  closeMemberVerificationModal() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    if (!flag) {
      const obj = { type };
      obj.track(AnalyticEvents.MODAL_DISMISSED, obj);
    }
    ModalActionCreatorsDefault.popWithKey(React4);
  }
};