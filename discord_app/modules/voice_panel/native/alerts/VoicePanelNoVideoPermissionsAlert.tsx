// discord_app/modules/voice_panel/native/alerts/VoicePanelNoVideoPermissionsAlert.tsx
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("getAlertModalItemKey").fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelNoVideoPermissionsAlert.tsx");

export default function VoicePanelNoVideoPermissionsAlert() {
  let obj = require("../../../../design/components/AlertModal/native/AlertModal.native.tsx") /* getAlertModalItemKey */;
  obj = { title: null, content: null, actions: null };
  const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[0] = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.OYzPcW);
  const intl2 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl2.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.oBH7Y2);
  obj = { variant: "secondary", text: null, onPress: null };
  const intl3 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl3.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["NX+WJN"]);
  obj[2] = obj.useDismissModalCallback();
  obj[2] = jsx(require("../../../../design/components/AlertModal/native/AlertModal.native.tsx") /* getAlertModalItemKey */.AlertActionButton, { variant: "secondary", text: null, onPress: null });
  return jsx(require("../../../../design/components/AlertModal/native/AlertModal.native.tsx") /* getAlertModalItemKey */.AlertModal, { variant: "secondary", text: null, onPress: null });
};
export const VOICE_PANEL_NO_VIDEO_PERMS_KEY = "voice-panel-no-video-perms";