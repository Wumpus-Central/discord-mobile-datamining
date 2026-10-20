// === Module 19223: ToggleSelfMute ===

// Module 19223 (ToggleSelfMute)
import useMuteStates from "useMuteStates" /* 7402 */;
import VoiceActionUtils from "VoiceActionUtils" /* 11522 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 19219 */;
import ChannelStore from "ChannelStore" /* 4800 */;

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