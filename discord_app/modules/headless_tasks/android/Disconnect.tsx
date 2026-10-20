// === Module 19218: Disconnect ===

// Module 19218 (Disconnect)
import CallsUtils from "CallsUtils" /* 9086 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 19219 */;
import ChannelStore from "ChannelStore" /* 4800 */;

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