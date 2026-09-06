// === Module 17187: VoicePanelNoJoinPermissionsAlert ===

// Module 17187 (VoicePanelNoJoinPermissionsAlert)
import util from "util" /* 1114 */;
import AlertModal from "AlertModal" /* 4910 */;
import VoicePanelLockedIconDefault from "VoicePanelLockedIcon" /* 17188 */;
import noop from "module_19" /* 19 */;

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
};
export const VOICE_PANEL_NO_JOIN_PERMS_KEY = "voice-panel-no-join-perms";