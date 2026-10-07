// discord_app/modules/headless_tasks/android/ToggleSelfMute.tsx
import useMuteStates from "../../video_calls/useMuteStates.tsx";
import VoiceActionUtils from "../../video_calls/native/VoiceActionUtils.tsx";
import HeadlessTaskUtilsDefault from "../HeadlessTaskUtils.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";

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
