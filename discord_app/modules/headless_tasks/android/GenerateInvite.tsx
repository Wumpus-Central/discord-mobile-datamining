// discord_app/modules/headless_tasks/android/GenerateInvite.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import InstantInviteActionCreatorsDefault from "../../../actions/InstantInviteActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const NativeModules = _mod17.NativeModules;
const result = size.fileFinishedImporting("modules/headless_tasks/android/GenerateInvite.tsx");

export default (channelId) => {
  channelId = channelId.channelId;
  return new Promise((arg0) => {
    closure_0 = arg0;
    channelId(17932).awaitStorage(() => {
      const invite = InstantInviteActionCreatorsDefault.createInvite(channelId, {}, "Mobile Voice Overlay");
      invite.then((code) => {
        RNCClipboard = RNCClipboard.RNCClipboard;
        RNCClipboard.setString(channelId(7759)(code.code));
        closure_1_0(true);
      });
    });
  });
};
