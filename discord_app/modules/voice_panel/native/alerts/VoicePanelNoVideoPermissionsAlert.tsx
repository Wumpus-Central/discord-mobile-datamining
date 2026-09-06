// === Module 17197: VoicePanelNoVideoPermissionsAlert ===

// Module 17197 (VoicePanelNoVideoPermissionsAlert)
import util from "util" /* 1114 */;
import AlertModal from "AlertModal" /* 4910 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelNoVideoPermissionsAlert.tsx");

export default function VoicePanelNoVideoPermissionsAlert() {
  let obj = { title: null, content: null, actions: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.OYzPcW);
  const intl2 = util.intl;
  obj.content = intl2.string(util.t.oBH7Y2);
  obj = { variant: "secondary", text: null, onPress: null };
  const intl3 = util.intl;
  obj.text = intl3.string(util.t["NX+WJN"]);
  obj.onPress = obj.useDismissModalCallback();
  obj.actions = jsx(AlertModal.AlertActionButton, { variant: "secondary", text: null, onPress: null });
  return jsx(AlertModal.AlertModal, { variant: "secondary", text: null, onPress: null });
};
export const VOICE_PANEL_NO_VIDEO_PERMS_KEY = "voice-panel-no-video-perms";