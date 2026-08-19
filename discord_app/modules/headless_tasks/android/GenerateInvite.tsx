// discord_app/modules/headless_tasks/android/GenerateInvite.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";

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