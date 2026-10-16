// === Module 19094: ToggleSelfMute ===

// Module 19094 (ToggleSelfMute)
import useMuteStates from "useMuteStates" /* 7282 */;
import VoiceActionUtils from "VoiceActionUtils" /* 11413 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 19090 */;
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