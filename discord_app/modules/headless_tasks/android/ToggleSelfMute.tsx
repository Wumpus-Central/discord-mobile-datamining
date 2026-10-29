// === Module 20029: ToggleSelfMute ===

// Module 20029 (ToggleSelfMute)
import useMuteStates from "useMuteStates" /* 7512 */;
import VoiceActionUtils from "VoiceActionUtils" /* 11738 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20025 */;
import ChannelStore from "ChannelStore" /* 4857 */;

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