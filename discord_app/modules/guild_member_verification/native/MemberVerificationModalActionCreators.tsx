// === Module 5656: guild_member_verification/MemberVerificationModalActionCreators ===

// Module 5656 (guild_member_verification/MemberVerificationModalActionCreators)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4841 */;
import MemberVerificationActionCreatorsDefault from "MemberVerificationActionCreators" /* 5633 */;
import MemberVerificationConstants from "MemberVerificationConstants" /* 5144 */;
import size from "module_2" /* 2 */;

({ MEMBER_VERIFICATION_TYPE: c3, IN_APP_MEMBER_VERIFICATION_MODAL_KEY: closure_4 } = MemberVerificationConstants);
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/guild_member_verification/native/MemberVerificationModalActionCreators.tsx");

export default {
  openMemberVerificationModal(guildId, connect) {
    const verificationForm = MemberVerificationActionCreatorsDefault.fetchVerificationForm(guildId);
    AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_MODAL, { type, guild_id: guildId });
    const obj3 = { type, guild_id: guildId };
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(5657, dependencyMap.paths), { guildId, onClose: connect }, React4);
  },
  closeMemberVerificationModal() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    if (!flag) {
      const obj2 = { type };
      AnalyticsUtilsDefault.track(AnalyticEvents.MODAL_DISMISSED, obj2);
    }
    ModalActionCreatorsDefault.popWithKey(React4);
  }
};