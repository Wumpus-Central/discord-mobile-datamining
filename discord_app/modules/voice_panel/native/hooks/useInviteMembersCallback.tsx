// discord_app/modules/voice_panel/native/hooks/useInviteMembersCallback.tsx
import instant_invite_InstantInviteUtils from "../../../instant_invite/native/InstantInviteUtils.tsx";
import openGroupDMAddMembersDefault from "../../../group_dm/native/openGroupDMAddMembers.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";

require = fn;
const Constants = fn(1074);
({ AnalyticsPages: hasOwnProperty, InstantInviteSources: metroRequire } = Constants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useInviteMembersCallback.tsx");

export const useInviteMembersCallback = function useInviteMembersCallback(channelId) {
  closure_0 = channelId;
  const items = [channelId];
  return noop.useCallback(() => {
    let id = ChannelStore.getChannel(closure_0);
    if (null == id) {
      return null;
    } else if (id.isPrivate()) {
      id = id.id;
      let result = openGroupDMAddMembersDefault(id, constants.CHANNEL_CALL);
    } else {
      const obj = { source: constants2.VOICE_CHANNEL };
      result = obj.showInstantInviteActionSheet(id, obj);
    }
  }, items);
};
