// === Module 20545: Disconnect ===

// Module 20545 (Disconnect)
import CallsUtils from "CallsUtils" /* 9301 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20546 */;
import ChannelStore from "ChannelStore" /* 4989 */;

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