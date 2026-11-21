// === Module 17987: useInviteMembersCallback ===

// Module 17987 (useInviteMembersCallback)
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 8051 */;
import openGroupDMAddMembersDefault from "openGroupDMAddMembers" /* 12059 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4762 */;

require = fn;
const Constants = fn(1071);
({ AnalyticsPages: hasOwnProperty, InstantInviteSources: closure_6 } = Constants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useInviteMembersCallback.tsx");

export function useInviteMembersCallback(channelId) {
  closure_0 = channelId;
  items = [channelId];
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
}