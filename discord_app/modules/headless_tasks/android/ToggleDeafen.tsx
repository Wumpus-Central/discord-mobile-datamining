// discord_app/modules/headless_tasks/android/ToggleDeafen.tsx
import VoiceActionUtils from "../../video_calls/native/VoiceActionUtils.tsx";
import useDeafStates from "../../video_calls/useDeafStates.tsx";
import HeadlessTaskUtilsDefault from "../HeadlessTaskUtils.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";

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
