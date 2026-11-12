// === Module 20780: ToggleDeafen ===

// Module 20780 (ToggleDeafen)
import VoiceActionUtils from "VoiceActionUtils" /* 12950 */;
import useDeafStates from "useDeafStates" /* 12965 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20777 */;
import ChannelStore from "ChannelStore" /* 5092 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/headless_tasks/android/ToggleDeafen.tsx");

export default (channelId) => {
  channelId = channelId.channelId;
  return new Promise((arg0) => {
    closure_0 = arg0;
    HeadlessTaskUtilsDefault.awaitStorage(() => {
      const channel = ChannelStore.getChannel(channelId);
      const deafStates = useDeafStates.getDeafStates(channel);
      VoiceActionUtils.createDeafHandler(deafStates).onPress();
      closure_0(true);
    });
  });
};