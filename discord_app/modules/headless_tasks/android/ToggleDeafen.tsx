// === Module 17938: ToggleDeafen ===

// Module 17938 (ToggleDeafen)
import VoiceActionUtils from "VoiceActionUtils" /* 10008 */;
import useDeafStates from "useDeafStates" /* 10023 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 17935 */;
import ChannelStore from "ChannelStore" /* 1957 */;

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