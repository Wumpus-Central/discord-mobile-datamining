// === Module 17151: promise ===

// Module 17151 (promise)
import _modDef17148 from "module_17148" /* 17148 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/headless_tasks/android/ToggleDeafen.tsx");

export default (channelId) => {
  channelId = channelId.channelId;
  return new Promise((arg0) => {
    closure_0 = arg0;
    _modDef17148.awaitStorage(() => {
      const channel = closure_2_3.getChannel(callback);
      const deafStates = channelId(dependencyMap[2]).getDeafStates(channel);
      const obj = channelId(dependencyMap[2]);
      channelId(dependencyMap[3]).createDeafHandler(deafStates).onPress();
      callback(true);
    });
  });
};