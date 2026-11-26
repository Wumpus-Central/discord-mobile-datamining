// === Module 20422: Disconnect ===

// Module 20422 (Disconnect)
import CallsUtils from "CallsUtils" /* 8636 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20423 */;
import ChannelStore from "ChannelStore" /* 4892 */;

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