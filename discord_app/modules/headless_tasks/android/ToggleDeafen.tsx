// === Module 19080: ToggleDeafen ===

// Module 19080 (ToggleDeafen)
import VoiceActionUtils from "VoiceActionUtils" /* 11416 */;
import useDeafStates from "useDeafStates" /* 11449 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 19077 */;
import ChannelStore from "ChannelStore" /* 2068 */;

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