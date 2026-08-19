// === Module 17156: promise ===

// Module 17156 (promise)
import obj132 from "obj132" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const NativeModules = get_ActivityIndicator.NativeModules;
const result = obj132.fileFinishedImporting("modules/headless_tasks/android/GenerateInvite.tsx");

export default (channelId) => {
  channelId = channelId.channelId;
  return new Promise((arg0) => {
    closure_0 = arg0;
    channelId(dependencyMap[1]).awaitStorage(() => {
      const invite = channelId(dependencyMap[2]).createInvite(closure_0, {}, "Mobile Voice Overlay");
      invite.then((result) => {
        const RNCClipboard = closure_2_2.RNCClipboard;
        RNCClipboard.setString(callback(closure_2_1[3])(result.code));
        callback(true);
      });
    });
  });
};