// === Module 16279: useInviteMembersCallback ===

// Module 16279 (useInviteMembersCallback)
import noop from "noop" /* 19 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import ME from "ME" /* 676 */;

const require = fn;
({ AnalyticsPages: c4, InstantInviteSources: c5 } = ME);
const result = require("obj132").fileFinishedImporting("modules/voice_panel/native/hooks/useInviteMembersCallback.tsx");

export const useInviteMembersCallback = function useInviteMembersCallback(channelId) {
  closure_0 = channelId;
  const items = [channelId];
  return React.useCallback(() => {
    let id = closure_1_3.getChannel(closure_0);
    if (null == id) {
      return null;
    } else {
      let tmp = closure_0;
      let navigateToNewGroupDM = dependencyMap;
      if (id.isPrivate()) {
        tmp = tmp(navigateToNewGroupDM[3]);
        navigateToNewGroupDM = tmp.navigateToNewGroupDM;
        id = id.id;
        let navigateToNewGroupDMResult = navigateToNewGroupDM(id, closure_1_4.CHANNEL_CALL);
      } else {
        const obj = { source: null };
        obj[0] = closure_1_5.VOICE_CHANNEL;
        navigateToNewGroupDMResult = tmp(navigateToNewGroupDM[4]).showInstantInviteActionSheet(id, obj);
        const tmpResult = tmp(navigateToNewGroupDM[4]);
      }
    }
  }, items);
};