// discord_app/modules/voice_panel/native/hooks/useInviteMembersCallback.tsx
import closure_3 from "../../../../../_runtime/00019_noop.js";
import closure_4 from "../../../../stores/ChannelStore.tsx";
import ME from "../../../../Constants.tsx";

const require = arg1;
({ AnalyticsPages: c5, InstantInviteSources: closure_6 } = ME);
let result = require("set").fileFinishedImporting("modules/voice_panel/native/hooks/useInviteMembersCallback.tsx");

export const useInviteMembersCallback = function useInviteMembersCallback(channelId) {
  closure_0 = channelId;
  const items = [channelId];
  return React.useCallback(() => {
    let id = closure_1_4.getChannel(channelId);
    if (null == id) {
      return null;
    } else if (id.isPrivate()) {
      id = id.id;
      let result = closure_1_1(closure_1_2[3])(id, closure_1_5.CHANNEL_CALL);
    } else {
      let obj = channelId(closure_1_2[4]);
      obj = { source: null };
      obj[0] = closure_1_6.VOICE_CHANNEL;
      result = obj.showInstantInviteActionSheet(id, obj);
    }
  }, items);
};
