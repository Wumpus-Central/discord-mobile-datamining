// === Module 18211: GenerateInvite ===

// Module 18211 (GenerateInvite)
import _mod17 from "module_17" /* 17 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8527 */;
import size from "module_2" /* 2 */;

const NativeModules = _mod17.NativeModules;
const result = size.fileFinishedImporting("modules/headless_tasks/android/GenerateInvite.tsx");

export default (channelId) => {
  channelId = channelId.channelId;
  return new Promise((arg0) => {
    closure_0 = arg0;
    channelId(18203).awaitStorage(() => {
      const invite = InstantInviteActionCreatorsDefault.createInvite(channelId, {}, "Mobile Voice Overlay");
      invite.then((code) => {
        RNCClipboard = RNCClipboard.RNCClipboard;
        RNCClipboard.setString(channelId(7879)(code.code));
        closure_1_0(true);
      });
    });
  });
};