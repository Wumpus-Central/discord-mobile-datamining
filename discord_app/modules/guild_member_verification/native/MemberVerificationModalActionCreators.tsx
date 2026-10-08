// === Module 6150: guild_member_verification/MemberVerificationModalActionCreators ===

// Module 6150 (guild_member_verification/MemberVerificationModalActionCreators)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import MemberVerificationActionCreatorsDefault from "MemberVerificationActionCreators" /* 6127 */;
import MemberVerificationConstants from "MemberVerificationConstants" /* 6151 */;
import size from "module_2" /* 2 */;

({ MEMBER_VERIFICATION_TYPE: c3, IN_APP_MEMBER_VERIFICATION_MODAL_KEY: closure_4 } = MemberVerificationConstants);
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/guild_member_verification/native/MemberVerificationModalActionCreators.tsx");

export default {
  openMemberVerificationModal(guildId, startCreateForumPostFlow) {
    const verificationForm = MemberVerificationActionCreatorsDefault.fetchVerificationForm(guildId);
    AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_MODAL, { type, guild_id: guildId });
    const obj3 = { type, guild_id: guildId };
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(6152, dependencyMap.paths), { guildId, onClose: startCreateForumPostFlow }, React4);
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