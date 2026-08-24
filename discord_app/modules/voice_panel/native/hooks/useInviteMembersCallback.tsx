// discord_app/modules/voice_panel/native/hooks/useInviteMembersCallback.tsx
import closure_2 from "../../../../../_runtime/00019_noop.js";
import closure_3 from "../../../../stores/ChannelStore.tsx";
import ME from "../../../../Constants.tsx";

const require = arg1;
({ AnalyticsPages: c4, InstantInviteSources: c5 } = ME);
const result = require("set").fileFinishedImporting("modules/voice_panel/native/hooks/useInviteMembersCallback.tsx");

export const useInviteMembersCallback = function useInviteMembersCallback(channelId) {
  closure_0 = channelId;
  const items = [channelId];
  return React.useCallback(() => {
    let id = closure_1_3.getChannel(closure_0);
    if (null == id) {
      return null;
    } else {
      let tmp = closure_0;
      let navigateToNewGroupDM = closure_1_1;
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