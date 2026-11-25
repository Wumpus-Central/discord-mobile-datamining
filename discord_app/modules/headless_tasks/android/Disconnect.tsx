// === Module 20358: Disconnect ===

// Module 20358 (Disconnect)
import CallsUtils from "CallsUtils" /* 8594 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20359 */;
import ChannelStore from "ChannelStore" /* 4861 */;

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