// === Module 19081: ToggleSelfMute ===

// Module 19081 (ToggleSelfMute)
import useMuteStates from "useMuteStates" /* 7280 */;
import VoiceActionUtils from "VoiceActionUtils" /* 11416 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 19077 */;
import ChannelStore from "ChannelStore" /* 2068 */;

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