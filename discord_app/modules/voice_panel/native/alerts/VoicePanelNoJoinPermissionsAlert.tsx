// discord_app/modules/voice_panel/native/alerts/VoicePanelNoJoinPermissionsAlert.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import getAlertModalItemKey from "../../../../design/components/AlertModal/native/AlertModal.native.tsx";
import VoicePanelLockedIconDefault from "VoicePanelLockedIcon.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting(
  "modules/voice_panel/native/alerts/VoicePanelNoJoinPermissionsAlert.tsx",
);

export default function VoicePanelNoJoinPermissionsAlert() {
  let obj = getAlertModalItemKey;
  obj = { header: jsx(VoicePanelLockedIconDefault, {}), title: null, content: null, actions: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t["7/2/3M"]);
  const intl2 = getSystemLocale.intl;
  obj[2] = intl2.string(getSystemLocale.t.xsenup);
  obj = { variant: "secondary", text: null, onPress: null };
  const intl3 = getSystemLocale.intl;
  obj[1] = intl3.string(getSystemLocale.t["NX+WJN"]);
  obj[2] = obj.useDismissModalCallback();
  obj[3] = jsx(getAlertModalItemKey.AlertActionButton, { variant: "secondary", text: null, onPress: null });
  return jsx(getAlertModalItemKey.AlertModal, { variant: "secondary", text: null, onPress: null });
}
export const VOICE_PANEL_NO_JOIN_PERMS_KEY = "voice-panel-no-join-perms";
