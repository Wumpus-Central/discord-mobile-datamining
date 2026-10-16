// === Module 5167: preloadChannel ===

// Module 5167 (preloadChannel)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1087 */;
import size from "module_2" /* 2 */;

({ ME: c2, CURRENT_APP_CONTEXT: c3 } = Constants);
const result = size.fileFinishedImporting("modules/channel/preloadChannel.tsx");

export default function preloadChannel(arg0, channelId) {
  let tmp = null;
  if (arg0 !== React2) {
    tmp = arg0;
  }
  DispatcherDefault.dispatch({ type: "CHANNEL_PRELOAD", guildId: tmp, channelId, context });
};