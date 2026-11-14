// === Module 20934: ToggleDeafen ===

// Module 20934 (ToggleDeafen)
import VoiceActionUtils from "VoiceActionUtils" /* 13046 */;
import useDeafStates from "useDeafStates" /* 13061 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20931 */;
import ChannelStore from "ChannelStore" /* 5155 */;

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