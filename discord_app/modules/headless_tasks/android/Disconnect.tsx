// === Module 17147: promise ===

// Module 17147 (promise)
import _modDef17148 from "module_17148" /* 17148 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/headless_tasks/android/Disconnect.tsx");

export default (channelId) => {
  channelId = channelId.channelId;
  return new Promise((arg0) => {
    closure_0 = arg0;
    _modDef17148.awaitStorage(() => {
      const channel = closure_2_3.getChannel(callback);
      if (null != channel) {
        channelId(dependencyMap[2]).handleDisconnect(channel);
        const obj = channelId(dependencyMap[2]);
      }
      callback(true);
    });
  });
};