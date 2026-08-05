// discord_app/modules/voice_panel/native/alerts/VoicePanelNoJoinPermissionsAlert.tsx
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("getAlertModalItemKey").fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelNoJoinPermissionsAlert.tsx");

export default function VoicePanelNoJoinPermissionsAlert() {
  let obj = require("../../../../design/components/AlertModal/native/AlertModal.native.tsx") /* getAlertModalItemKey */;
  obj = { header: null, title: null, content: null, actions: null };
  obj[0] = jsx(require("VoicePanelLockedIcon.tsx"), {});
  const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["7/2/3M"]);
  const intl2 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[2] = intl2.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.xsenup);
  obj = { variant: "secondary", text: null, onPress: null };
  const intl3 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl3.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["NX+WJN"]);
  obj[2] = obj.useDismissModalCallback();
  obj[3] = jsx(require("../../../../design/components/AlertModal/native/AlertModal.native.tsx") /* getAlertModalItemKey */.AlertActionButton, { variant: "secondary", text: null, onPress: null });
  return jsx(require("../../../../design/components/AlertModal/native/AlertModal.native.tsx") /* getAlertModalItemKey */.AlertModal, { variant: "secondary", text: null, onPress: null });
};
export const VOICE_PANEL_NO_JOIN_PERMS_KEY = "voice-panel-no-join-perms";