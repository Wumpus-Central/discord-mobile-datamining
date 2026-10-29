// === Module 20033: GenerateInvite ===

// Module 20033 (GenerateInvite)
import _mod17 from "module_17" /* 17 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8903 */;
import size from "module_2" /* 2 */;

const NativeModules = _mod17.NativeModules;
const result = size.fileFinishedImporting("modules/headless_tasks/android/GenerateInvite.tsx");

export default (channelId) => {
  channelId = channelId.channelId;
  return new Promise((arg0) => {
    closure_0 = arg0;
    channelId(20025).awaitStorage(() => {
      const invite = InstantInviteActionCreatorsDefault.createInvite(channelId, {}, "Mobile Voice Overlay");
      invite.then((code) => {
        RNCClipboard = RNCClipboard.RNCClipboard;
        RNCClipboard.setString(channelId(9097)(code.code));
        closure_1_0(true);
      });
    });
  });
};