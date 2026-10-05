// === Module 18129: ToggleSelfMute ===

// Module 18129 (ToggleSelfMute)
import useMuteStates from "useMuteStates" /* 6848 */;
import VoiceActionUtils from "VoiceActionUtils" /* 9687 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18125 */;
import ChannelStore from "ChannelStore" /* 2051 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/headless_tasks/android/ToggleSelfMute.tsx");

export default (channelId) => {
  channelId = channelId.channelId;
  return new Promise((arg0) => {
    closure_0 = arg0;
    HeadlessTaskUtilsDefault.awaitStorage(() => {
      const channel = ChannelStore.getChannel(channelId);
      const muteStates = useMuteStates.getMuteStates({ channel });
      VoiceActionUtils.createMuteHandler(muteStates).onPress();
      closure_0(true);
    });
  });
};