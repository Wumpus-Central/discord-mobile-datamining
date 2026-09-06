// === Module 17935: ToggleDeafen ===

// Module 17935 (ToggleDeafen)
import VoiceActionUtils from "VoiceActionUtils" /* 10003 */;
import useDeafStates from "useDeafStates" /* 10018 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 17932 */;
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