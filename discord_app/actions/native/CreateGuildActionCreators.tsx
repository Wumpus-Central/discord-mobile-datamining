// === Module 11923: showInstantInviteModal ===

// Module 11923 (showInstantInviteModal)
import comparator from "comparator" /* 1980 */;
import { InstantInviteSources } from "ME" /* 676 */;

const require = fn;
let result = require("obj132").fileFinishedImporting("actions/native/CreateGuildActionCreators.tsx");

export const showInstantInviteModal = function showInstantInviteModal(closure_0) {
  let result = closure_2.addConditionalChangeListener(() => {
    defaultChannel = closure_1_2.getDefaultChannel(defaultChannel);
    let flag = null == defaultChannel;
    if (!flag) {
      const _setImmediate = setImmediate;
      setImmediate(() => {
        defaultChannel(closure_1_1[2]);
        const obj = { source: closure_1_3.GUILD_CREATE };
        const result = obj.showInstantInviteActionSheet(defaultChannel, obj);
      });
      flag = false;
    }
    return flag;
  });
};