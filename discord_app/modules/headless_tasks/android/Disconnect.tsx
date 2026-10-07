// discord_app/modules/headless_tasks/android/Disconnect.tsx
import CallsUtils from "../../voice_calls/native/CallsUtils.tsx";
import HeadlessTaskUtilsDefault from "../HeadlessTaskUtils.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/headless_tasks/android/Disconnect.tsx");

export default (channelId) => {
  channelId = channelId.channelId;
  return new Promise((arg0) => {
    closure_0 = arg0;
    HeadlessTaskUtilsDefault.awaitStorage(() => {
      const channel = ChannelStore.getChannel(channelId);
      if (null != channel) {
        CallsUtils.handleDisconnect(channel);
      }
      closure_0(true);
    });
  });
};
