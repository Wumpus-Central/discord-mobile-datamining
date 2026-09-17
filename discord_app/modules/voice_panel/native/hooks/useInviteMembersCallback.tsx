// === Module 17302: useInviteMembersCallback ===

// Module 17302 (useInviteMembersCallback)
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9971 */;
import openGroupDMAddMembersDefault from "openGroupDMAddMembers" /* 11740 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1958 */;

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
      const obj2 = { source: constants2.VOICE_CHANNEL };
      result = instant_invite_InstantInviteUtils.showInstantInviteActionSheet(id, obj2);
    }
  }, items);
};