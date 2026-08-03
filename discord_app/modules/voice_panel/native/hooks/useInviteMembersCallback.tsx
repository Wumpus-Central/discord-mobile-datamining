// === Module 15972: useInviteMembersCallback ===

// Module 15972 (useInviteMembersCallback)
import noop from "noop";
import ensureGuildLoaded from "ensureGuildLoaded";
import ME from "ME";

let c4;
let c5;
const require = arg1;
({ AnalyticsPages: c4, InstantInviteSources: c5 } = ME);
const result = require("ME").fileFinishedImporting("modules/voice_panel/native/hooks/useInviteMembersCallback.tsx");

export const useInviteMembersCallback = function useInviteMembersCallback(channelId) {
  let closure_0 = channelId;
  const items = [channelId];
  return React.useCallback(() => {
    let id = outer1_3.getChannel(closure_0);
    if (null == id) {
      return null;
    } else {
      let tmp = closure_0;
      let navigateToNewGroupDM = outer1_1;
      if (id.isPrivate()) {
        tmp = tmp(navigateToNewGroupDM[3]);
        navigateToNewGroupDM = tmp.navigateToNewGroupDM;
        id = id.id;
        let navigateToNewGroupDMResult = navigateToNewGroupDM(id, outer1_4.CHANNEL_CALL);
      } else {
        const obj = { source: null };
        obj[0] = outer1_5.VOICE_CHANNEL;
        navigateToNewGroupDMResult = tmp(navigateToNewGroupDM[4]).showInstantInviteActionSheet(id, obj);
        const tmpResult = tmp(navigateToNewGroupDM[4]);
      }
    }
  }, items);
};