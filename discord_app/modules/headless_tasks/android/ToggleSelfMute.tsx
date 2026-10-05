// discord_app/modules/headless_tasks/android/ToggleSelfMute.tsx
import useMuteStates from "../../video_calls/useMuteStates.tsx";
import VoiceActionUtils from "../../video_calls/native/VoiceActionUtils.tsx";
import HeadlessTaskUtilsDefault from "../HeadlessTaskUtils.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/headless_tasks/android/ToggleSelfMute.tsx");

export default (channelId) => {
  channelId = channelId.channelId;
  const promise = new Promise((arg0) => {
    let closure_0 = arg0;
    let obj = HeadlessTaskUtilsDefault;
    obj.awaitStorage(() => {
      const channel = ChannelStore.getChannel(channelId);
      const obj = useMuteStates;
      const muteStates = obj.getMuteStates({ channel });
      const obj2 = VoiceActionUtils;
      obj2.createMuteHandler(muteStates).onPress();
      closure_0(true);
    });
  });
  return promise;
};
