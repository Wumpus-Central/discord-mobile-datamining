// discord_app/modules/guild_member_verification/native/MemberVerificationModalActionCreators.tsx
import items from "items";
import { AnalyticEvents } from "ME";
import { asyncRequireImpl } from "../../../../_runtime/02007_asyncRequireImpl.js";
import { ModalActionCreators } from "../../../actions/ModalActionCreators.tsx";
import { expandEventProperties } from "../../../utils/AnalyticsUtils.tsx";
import { _fetchVerificationForm } from "../MemberVerificationActionCreators.tsx";

let c3;
let c4;
({ MEMBER_VERIFICATION_TYPE: c3, IN_APP_MEMBER_VERIFICATION_MODAL_KEY: c4 } = items);
const result = require("expandEventProperties").fileFinishedImporting("modules/guild_member_verification/native/MemberVerificationModalActionCreators.tsx");

export default {
  openMemberVerificationModal(guildId, connect) {
    let obj = _fetchVerificationForm;
    const verificationForm = obj.fetchVerificationForm(guildId);
    obj = { type: closure_3, guild_id: guildId };
    expandEventProperties.track(AnalyticEvents.OPEN_MODAL, obj);
    const obj2 = expandEventProperties;
    obj = { guildId, onClose: connect };
    ModalActionCreators.pushLazy(asyncRequireImpl(8463, dependencyMap.paths), obj, closure_4);
  },
  closeMemberVerificationModal() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    if (!flag) {
      let obj = expandEventProperties;
      obj = { type: null };
      obj[0] = closure_3;
      obj.track(AnalyticEvents.MODAL_DISMISSED, obj);
    }
    ModalActionCreators.popWithKey(closure_4);
  }
};