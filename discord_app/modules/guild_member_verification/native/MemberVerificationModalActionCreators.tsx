// discord_app/modules/guild_member_verification/native/MemberVerificationModalActionCreators.tsx
import Constants from "../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import MemberVerificationActionCreatorsDefault from "../MemberVerificationActionCreators.tsx";
import MemberVerificationConstants from "../MemberVerificationConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

({ MEMBER_VERIFICATION_TYPE: c3, IN_APP_MEMBER_VERIFICATION_MODAL_KEY: closure_4 } = MemberVerificationConstants);
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting(
  "modules/guild_member_verification/native/MemberVerificationModalActionCreators.tsx",
);

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
  },
};
