// === Module 17060: useInviteMembersCallback ===

// Module 17060 (useInviteMembersCallback)
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9825 */;
import openGroupDMAddMembersDefault from "openGroupDMAddMembers" /* 11595 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;

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