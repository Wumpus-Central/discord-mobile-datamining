// discord_app/modules/voice_panel/native/alerts/VoicePanelNoJoinPermissionsAlert.tsx
import "noop";
import { jsx } from "jsxProd";
import { getAlertModalItemKey } from "../../../../design/components/AlertModal/native/AlertModal.native.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { VoicePanelLockedIcon } from "VoicePanelLockedIcon.tsx";

const require = arg1;
const result = require("getAlertModalItemKey").fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelNoJoinPermissionsAlert.tsx");

export default function VoicePanelNoJoinPermissionsAlert() {
  let obj = getAlertModalItemKey /* getAlertModalItemKey */;
  obj = { header: null, title: null, content: null, actions: null };
  obj[0] = jsx(VoicePanelLockedIcon, {});
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[1] = intl.string(getSystemLocale /* getSystemLocale */.t["7/2/3M"]);
  const intl2 = getSystemLocale /* getSystemLocale */.intl;
  obj[2] = intl2.string(getSystemLocale /* getSystemLocale */.t.xsenup);
  obj = { variant: "secondary", text: null, onPress: null };
  const intl3 = getSystemLocale /* getSystemLocale */.intl;
  obj[1] = intl3.string(getSystemLocale /* getSystemLocale */.t["NX+WJN"]);
  obj[2] = obj.useDismissModalCallback();
  obj[3] = jsx(getAlertModalItemKey /* getAlertModalItemKey */.AlertActionButton, { variant: "secondary", text: null, onPress: null });
  return jsx(getAlertModalItemKey /* getAlertModalItemKey */.AlertModal, { variant: "secondary", text: null, onPress: null });
};
export const VOICE_PANEL_NO_JOIN_PERMS_KEY = "voice-panel-no-join-perms";