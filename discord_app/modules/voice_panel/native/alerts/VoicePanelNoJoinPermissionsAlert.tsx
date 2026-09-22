// === Module 17663: VoicePanelNoJoinPermissionsAlert ===

// Module 17663 (VoicePanelNoJoinPermissionsAlert)
import util from "util" /* 1115 */;
import AlertModal from "AlertModal" /* 5115 */;
import VoicePanelLockedIconDefault from "VoicePanelLockedIcon" /* 17664 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelNoJoinPermissionsAlert.tsx");

export default function VoicePanelNoJoinPermissionsAlert() {
  const obj2 = { header: jsx(VoicePanelLockedIconDefault, {}), title: null, content: null, actions: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t["7/2/3M"]);
  const intl2 = util.intl;
  obj2.content = intl2.string(util.t.xsenup);
  const obj3 = { variant: "secondary", text: null, onPress: null };
  const intl3 = util.intl;
  obj3.text = intl3.string(util.t["NX+WJN"]);
  obj3.onPress = AlertModal.useDismissModalCallback();
  obj2.actions = jsx(AlertModal.AlertActionButton, { variant: "secondary", text: null, onPress: null });
  return jsx(AlertModal.AlertModal, { header: jsx(VoicePanelLockedIconDefault, {}), title: null, content: null, actions: null });
};
export const VOICE_PANEL_NO_JOIN_PERMS_KEY = "voice-panel-no-join-perms";