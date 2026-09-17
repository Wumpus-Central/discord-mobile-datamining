// === Module 18207: ToggleSelfMute ===

// Module 18207 (ToggleSelfMute)
import useMuteStates from "useMuteStates" /* 7459 */;
import VoiceActionUtils from "VoiceActionUtils" /* 10153 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18203 */;
import ChannelStore from "ChannelStore" /* 1958 */;

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