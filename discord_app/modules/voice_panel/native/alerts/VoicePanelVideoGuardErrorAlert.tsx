// === Module 13262: VoicePanelVideoGuardErrorAlert ===

// Module 13262 (VoicePanelVideoGuardErrorAlert)
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import AlertModal from "AlertModal" /* 4910 */;
import VideoGuardExperiment from "VideoGuardExperiment" /* 13260 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelVideoGuardErrorAlert.tsx");

export default function VoicePanelVideoGuardErrorAlert(title) {
  let obj = { title: title.title, content: null, extraContent: null, actions: null };
  const intl = util.intl;
  obj.content = intl.string(util.t.UoW002);
  obj = { variant: "text-sm/normal", color: "text-subtle", children: null };
  const intl2 = util.intl;
  const dismissModalCallback = obj.useDismissModalCallback();
  obj.children = intl2.format(util.t.BPDKoA, { helpdeskArticle: VideoGuardExperiment.VIDEO_GUARD_BLOG_POST_URL });
  obj.extraContent = jsx(Text_Text.Text, { variant: "text-sm/normal", color: "text-subtle", children: null });
  const obj2 = { variant: "secondary", text: null, onPress: null };
  const intl3 = util.intl;
  obj2.text = intl3.string(util.t["NX+WJN"]);
  obj2.onPress = dismissModalCallback;
  obj.actions = jsx(AlertModal.AlertActionButton, { variant: "secondary", text: null, onPress: null });
  return jsx(AlertModal.AlertModal, { variant: "text-sm/normal", color: "text-subtle", children: null });
};
export const VOICE_PANEL_VIDEO_GUARD_ERROR_KEY = "voice-panel-video-guard-error";