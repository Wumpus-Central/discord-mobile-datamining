// === Module 12215: showInstantInviteModal ===

// Module 12215 (showInstantInviteModal)
import closure_2 from "comparator" /* 1983 */;
import { InstantInviteSources } from "ME" /* 676 */;

const require = arg1;
let result = require("set").fileFinishedImporting("actions/native/CreateGuildActionCreators.tsx");

export const showInstantInviteModal = function showInstantInviteModal(closure_0) {
  let result = closure_2.addConditionalChangeListener(() => {
    defaultChannel = closure_1_2.getDefaultChannel(defaultChannel);
    let flag = null == defaultChannel;
    if (!flag) {
      const _setImmediate = setImmediate;
      setImmediate(() => {
        let obj = defaultChannel(closure_1_1[2]);
        obj = { source: closure_1_3.GUILD_CREATE };
        const result = obj.showInstantInviteActionSheet(defaultChannel, obj);
      });
      flag = false;
    }
    return flag;
  });
};