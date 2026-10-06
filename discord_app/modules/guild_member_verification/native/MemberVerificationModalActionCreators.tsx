// discord_app/modules/guild_member_verification/native/MemberVerificationModalActionCreators.tsx
import Constants from "../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import MemberVerificationActionCreatorsDefault from "../MemberVerificationActionCreators.tsx";
import MemberVerificationConstants from "../MemberVerificationConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
({ MEMBER_VERIFICATION_TYPE: c3, IN_APP_MEMBER_VERIFICATION_MODAL_KEY: closure_4 } = MemberVerificationConstants);
const AnalyticEvents = Constants.AnalyticEvents;
let obj = {
  openMemberVerificationModal(guildId, startCreateForumPostFlow) {
    const obj = MemberVerificationActionCreatorsDefault;
    const verificationForm = obj.fetchVerificationForm(guildId);
    const obj2 = AnalyticsUtilsDefault;
    const obj3 = { type, guild_id: guildId };
    obj2.track(AnalyticEvents.OPEN_MODAL, obj3);
    const obj4 = ModalActionCreatorsDefault;
    const obj5 = { guildId, onClose: startCreateForumPostFlow };
    obj4.pushLazy(asyncRequire(5969, dependencyMap.paths), obj5, React3);
  },
  closeMemberVerificationModal() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    if (!flag) {
      const obj2 = { type };
      const obj = AnalyticsUtilsDefault;
      obj.track(AnalyticEvents.MODAL_DISMISSED, obj2);
    }
    const obj3 = ModalActionCreatorsDefault;
    obj3.popWithKey(React3);
  },
};
const result = size.fileFinishedImporting(
  "modules/guild_member_verification/native/MemberVerificationModalActionCreators.tsx",
);

export default obj;
