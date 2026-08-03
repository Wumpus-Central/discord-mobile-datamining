// === Module 16104: VoicePanelNoVideoPermissionsAlert ===

// Module 16104 (VoicePanelNoVideoPermissionsAlert)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("getAlertModalItemKey").fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelNoVideoPermissionsAlert.tsx");

export default function VoicePanelNoVideoPermissionsAlert() {
  let obj = require(4599) /* getAlertModalItemKey */;
  obj = { title: null, content: null, actions: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t.OYzPcW);
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl2.string(require(1236) /* getSystemLocale */.t.oBH7Y2);
  obj = { variant: "secondary", text: null, onPress: null };
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl3.string(require(1236) /* getSystemLocale */.t["NX+WJN"]);
  obj[2] = obj.useDismissModalCallback();
  obj[2] = jsx(require(4599) /* getAlertModalItemKey */.AlertActionButton, { variant: "secondary", text: null, onPress: null });
  return jsx(require(4599) /* getAlertModalItemKey */.AlertModal, { variant: "secondary", text: null, onPress: null });
};
export const VOICE_PANEL_NO_VIDEO_PERMS_KEY = "voice-panel-no-video-perms";