// discord_app/modules/guild_member_verification/native/MemberVerificationModalActionCreators.tsx
import Constants from "../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../_runtime/01980_asyncRequireImpl.js";
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
    const verificationForm = MemberVerificationActionCreatorsDefault.fetchVerificationForm(guildId);
    AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_MODAL, { type, guild_id: guildId });
    const obj3 = { type, guild_id: guildId };
    ModalActionCreatorsDefault.pushLazy(
      asyncRequireImpl(5876, dependencyMap.paths),
      { guildId, onClose: connect },
      React4,
    );
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
  },
};
