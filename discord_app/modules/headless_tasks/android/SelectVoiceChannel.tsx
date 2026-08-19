// === Module 17155: promise ===

// Module 17155 (promise)
import transitionToChannel from "transitionToChannel" /* 4768 */;
import _modDef4975 from "module_4975" /* 4975 */;
import openChannelCallModal from "openChannelCallModal" /* 8663 */;
import _modDef17148 from "module_17148" /* 17148 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import createRTCConnection from "createRTCConnection" /* 4539 */;

require = fn;
let result = require("obj132").fileFinishedImporting("modules/headless_tasks/android/SelectVoiceChannel.tsx");

export default (arg0) => {
  ({ channelId: require, connectToVoice: importDefault } = arg0);
  return new Promise((arg0) => {
    closure_0 = arg0;
    _modDef17148.awaitStorage(() => {
      if (closure_1_1) {
        const voiceChannel = _modDef4975.selectVoiceChannel(callback);
      }
      if (closure_2_4.getChannelId() === callback) {
        const channel = closure_2_3.getChannel(callback);
        if (null != channel) {
          const result = openChannelCallModal.navigateToVoiceChannel(channel);
        }
      } else {
        transitionToChannel.transitionToChannel(callback);
      }
      callback(true);
    });
  });
};