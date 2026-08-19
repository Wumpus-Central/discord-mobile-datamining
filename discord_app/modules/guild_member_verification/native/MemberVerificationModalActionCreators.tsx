// discord_app/modules/guild_member_verification/native/MemberVerificationModalActionCreators.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import ME from "../../../Constants.tsx";
import expandEventPropertiesDefault from "../../../utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../_runtime/02007_asyncRequireImpl.js";
import _modDef5260 from "../../../actions/ModalActionCreators.tsx";
import _fetchVerificationFormDefault from "../MemberVerificationActionCreators.tsx";
import items from "../MemberVerificationConstants.tsx";

({ MEMBER_VERIFICATION_TYPE: c3, IN_APP_MEMBER_VERIFICATION_MODAL_KEY: c4 } = items);
const AnalyticEvents = ME.AnalyticEvents;
const result = obj132.fileFinishedImporting("modules/guild_member_verification/native/MemberVerificationModalActionCreators.tsx");

export default {
  openMemberVerificationModal(guildId, connect) {
    let obj = _fetchVerificationFormDefault;
    const verificationForm = obj.fetchVerificationForm(guildId);
    obj = { type: closure_3, guild_id: guildId };
    expandEventPropertiesDefault.track(AnalyticEvents.OPEN_MODAL, obj);
    obj = { guildId, onClose: connect };
    _modDef5260.pushLazy(asyncRequireImpl(8524, dependencyMap.paths), obj, closure_4);
  },
  closeMemberVerificationModal() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    if (!flag) {
      const obj = { type: null };
      obj[0] = closure_3;
      obj.track(AnalyticEvents.MODAL_DISMISSED, obj);
    }
    _modDef5260.popWithKey(closure_4);
  }
};