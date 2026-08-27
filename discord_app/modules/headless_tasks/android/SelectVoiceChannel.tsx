// === Module 17432: promise ===

// Module 17432 (promise)
import closure_3 from "ensureGuildLoaded" /* 1391 */;
import closure_4 from "createRTCConnection" /* 4519 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/headless_tasks/android/SelectVoiceChannel.tsx");

export default (arg0) => {
  ({ channelId: require, connectToVoice: importDefault } = arg0);
  return new Promise((arg0) => {
    closure_0 = arg0;
    closure_1_1(closure_1_2[2]).awaitStorage(() => {
      if (closure_1_1) {
        const voiceChannel = closure_2_1(closure_2_2[3]).selectVoiceChannel(callback);
        const obj = closure_2_1(closure_2_2[3]);
      }
      if (closure_2_4.getChannelId() === callback) {
        const channel = closure_2_3.getChannel(tmp5);
        if (null != channel) {
          const result = closure_2_0(closure_2_2[4]).navigateToVoiceChannel(channel);
          const obj3 = closure_2_0(closure_2_2[4]);
        }
      } else {
        closure_2_0(closure_2_2[5]).transitionToChannel(tmp5);
        const obj2 = closure_2_0(closure_2_2[5]);
      }
      callback(true);
    });
  });
};