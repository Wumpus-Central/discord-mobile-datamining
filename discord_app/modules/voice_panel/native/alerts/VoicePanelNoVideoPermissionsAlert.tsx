// discord_app/modules/voice_panel/native/alerts/VoicePanelNoVideoPermissionsAlert.tsx
import "noop";
import { jsx } from "jsxProd";
import { getAlertModalItemKey } from "../../../../design/components/AlertModal/native/AlertModal.native.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";

const require = arg1;
const result = require("getAlertModalItemKey").fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelNoVideoPermissionsAlert.tsx");

export default function VoicePanelNoVideoPermissionsAlert() {
  let obj = getAlertModalItemKey;
  obj = { title: null, content: null, actions: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.OYzPcW);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t.oBH7Y2);
  obj = { variant: "secondary", text: null, onPress: null };
  const intl3 = getSystemLocale.intl;
  obj[1] = intl3.string(getSystemLocale.t["NX+WJN"]);
  obj[2] = obj.useDismissModalCallback();
  obj[2] = jsx(getAlertModalItemKey.AlertActionButton, { variant: "secondary", text: null, onPress: null });
  return jsx(getAlertModalItemKey.AlertModal, { variant: "secondary", text: null, onPress: null });
};
export const VOICE_PANEL_NO_VIDEO_PERMS_KEY = "voice-panel-no-video-perms";