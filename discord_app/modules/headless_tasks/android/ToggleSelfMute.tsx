// === Module 20781: ToggleSelfMute ===

// Module 20781 (ToggleSelfMute)
import useMuteStates from "useMuteStates" /* 12926 */;
import VoiceActionUtils from "VoiceActionUtils" /* 12950 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20777 */;
import ChannelStore from "ChannelStore" /* 5092 */;

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