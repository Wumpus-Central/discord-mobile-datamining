// discord_app/modules/guild_member_verification/native/MemberVerificationModalActionCreators.tsx
import items from "items";
import { AnalyticEvents } from "ME";

let c3;
let c4;
({ MEMBER_VERIFICATION_TYPE: c3, IN_APP_MEMBER_VERIFICATION_MODAL_KEY: c4 } = items);
const result = require("expandEventProperties").fileFinishedImporting("modules/guild_member_verification/native/MemberVerificationModalActionCreators.tsx");

export default {
  openMemberVerificationModal(guildId, connect) {
    let obj = require("../MemberVerificationActionCreators.tsx");
    const verificationForm = obj.fetchVerificationForm(guildId);
    obj = { type: closure_3, guild_id: guildId };
    require("../../../utils/AnalyticsUtils.tsx").track(AnalyticEvents.OPEN_MODAL, obj);
    const obj2 = require("../../../utils/AnalyticsUtils.tsx");
    obj = { guildId, onClose: connect };
    require("../../../actions/ModalActionCreators.tsx").pushLazy(require("../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(8225, dependencyMap.paths), obj, closure_4);
  },
  closeMemberVerificationModal() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    if (!flag) {
      let obj = require("../../../utils/AnalyticsUtils.tsx");
      obj = { type: null };
      obj[0] = closure_3;
      obj.track(AnalyticEvents.MODAL_DISMISSED, obj);
    }
    require("../../../actions/ModalActionCreators.tsx").popWithKey(closure_4);
  }
};