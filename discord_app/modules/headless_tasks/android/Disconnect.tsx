// === Module 17442: promise ===

// Module 17442 (promise)
import closure_3 from "ensureGuildLoaded" /* 1391 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/headless_tasks/android/Disconnect.tsx");

export default (channelId) => {
  channelId = channelId.channelId;
  return new Promise((arg0) => {
    closure_0 = arg0;
    closure_1_1(closure_1_2[1]).awaitStorage(() => {
      const channel = closure_2_3.getChannel(callback);
      if (null != channel) {
        channelId(closure_2_2[2]).handleDisconnect(channel);
        const obj = channelId(closure_2_2[2]);
      }
      callback(true);
    });
  });
};