// === Module 13509: VoicePanelVideoGuardErrorAlert ===

// Module 13509 (VoicePanelVideoGuardErrorAlert)
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4718 */;
import AlertModal from "AlertModal" /* 5072 */;
import VideoGuardExperiment from "VideoGuardExperiment" /* 13507 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelVideoGuardErrorAlert.tsx");

export default function VoicePanelVideoGuardErrorAlert(title) {
  const obj2 = { title: title.title, content: null, extraContent: null, actions: null };
  const intl = util.intl;
  obj2.content = intl.string(util.t.UoW002);
  const obj3 = { variant: "text-sm/normal", color: "text-subtle", children: null };
  const intl2 = util.intl;
  const dismissModalCallback = AlertModal.useDismissModalCallback();
  obj3.children = intl2.format(util.t.BPDKoA, { helpdeskArticle: VideoGuardExperiment.VIDEO_GUARD_BLOG_POST_URL });
  obj2.extraContent = jsx(Text_Text.Text, { variant: "text-sm/normal", color: "text-subtle", children: null });
  const obj5 = { variant: "secondary", text: null, onPress: null };
  const intl3 = util.intl;
  obj5.text = intl3.string(util.t["NX+WJN"]);
  obj5.onPress = dismissModalCallback;
  obj2.actions = jsx(AlertModal.AlertActionButton, { variant: "secondary", text: null, onPress: null });
  return jsx(AlertModal.AlertModal, { title: title.title, content: null, extraContent: null, actions: null });
};
export const VOICE_PANEL_VIDEO_GUARD_ERROR_KEY = "voice-panel-video-guard-error";