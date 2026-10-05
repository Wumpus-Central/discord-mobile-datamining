// discord_app/modules/headless_tasks/android/Disconnect.tsx
import CallsUtils from "../../voice_calls/native/CallsUtils.tsx";
import HeadlessTaskUtilsDefault from "../HeadlessTaskUtils.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/headless_tasks/android/Disconnect.tsx");

export default (channelId) => {
  channelId = channelId.channelId;
  const promise = new Promise((arg0) => {
    let closure_0 = arg0;
    let obj = HeadlessTaskUtilsDefault;
    obj.awaitStorage(() => {
      const channel = ChannelStore.getChannel(channelId);
      if (null != channel) {
        const obj = CallsUtils;
        obj.handleDisconnect(channel);
      }
      closure_0(true);
    });
  });
  return promise;
};
