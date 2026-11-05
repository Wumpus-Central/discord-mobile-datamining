// === Module 20473: ToggleDeafen ===

// Module 20473 (ToggleDeafen)
import VoiceActionUtils from "VoiceActionUtils" /* 12176 */;
import useDeafStates from "useDeafStates" /* 12209 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20470 */;
import ChannelStore from "ChannelStore" /* 4992 */;

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