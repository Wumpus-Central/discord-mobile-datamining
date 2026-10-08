// === Module 18457: Disconnect ===

// Module 18457 (Disconnect)
import CallsUtils from "CallsUtils" /* 8759 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18458 */;
import ChannelStore from "ChannelStore" /* 2063 */;

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