// === Module 13262: VoicePanelVideoGuardErrorAlert ===

// Module 13262 (VoicePanelVideoGuardErrorAlert)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import Text from "Text" /* 4556 */;
import getAlertModalItemKey from "getAlertModalItemKey" /* 4910 */;
import VIDEO_GUARD_BLOG_POST_URL from "VIDEO_GUARD_BLOG_POST_URL" /* 13260 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelVideoGuardErrorAlert.tsx");

export default function VoicePanelVideoGuardErrorAlert(title) {
  let obj = getAlertModalItemKey;
  obj = { title: title.title, content: null, extraContent: null, actions: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.UoW002);
  obj = { variant: "text-sm/normal", color: "text-subtle", children: null };
  const intl2 = getSystemLocale.intl;
  const dismissModalCallback = obj.useDismissModalCallback();
  obj[2] = intl2.format(getSystemLocale.t.BPDKoA, { helpdeskArticle: VIDEO_GUARD_BLOG_POST_URL.VIDEO_GUARD_BLOG_POST_URL });
  obj[2] = jsx(Text.Text, { variant: "text-sm/normal", color: "text-subtle", children: null });
  const obj2 = { variant: "secondary", text: null, onPress: null };
  const intl3 = getSystemLocale.intl;
  obj2[1] = intl3.string(getSystemLocale.t["NX+WJN"]);
  obj2[2] = dismissModalCallback;
  obj[3] = jsx(getAlertModalItemKey.AlertActionButton, { variant: "secondary", text: null, onPress: null });
  return jsx(getAlertModalItemKey.AlertModal, { variant: "text-sm/normal", color: "text-subtle", children: null });
};
export const VOICE_PANEL_VIDEO_GUARD_ERROR_KEY = "voice-panel-video-guard-error";