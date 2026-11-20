// === Module 20083: Disconnect ===

// Module 20083 (Disconnect)
import CallsUtils from "CallsUtils" /* 9543 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20084 */;
import ChannelStore from "ChannelStore" /* 4643 */;

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