// discord_app/modules/voice_panel/native/alerts/VoicePanelNoJoinPermissionsAlert.tsx
import util from "../../../../intl/index.native.tsx";
import AlertModal from "../../../../design/components/AlertModal/native/AlertModal.native.tsx";
import VoicePanelLockedIconDefault from "VoicePanelLockedIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelNoJoinPermissionsAlert.tsx");

export default function VoicePanelNoJoinPermissionsAlert() {
  let obj = { header: jsx(VoicePanelLockedIconDefault, {}), title: null, content: null, actions: null };
  const intl = util.intl;
  obj.title = intl.string(util.t["7/2/3M"]);
  const intl2 = util.intl;
  obj.content = intl2.string(util.t.xsenup);
  obj = { variant: "secondary", text: null, onPress: null };
  const intl3 = util.intl;
  obj.text = intl3.string(util.t["NX+WJN"]);
  obj.onPress = obj.useDismissModalCallback();
  obj.actions = jsx(AlertModal.AlertActionButton, { variant: "secondary", text: null, onPress: null });
  return jsx(AlertModal.AlertModal, { variant: "secondary", text: null, onPress: null });
}
export const VOICE_PANEL_NO_JOIN_PERMS_KEY = "voice-panel-no-join-perms";
