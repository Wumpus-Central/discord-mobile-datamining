// discord_app/modules/user_settings/voice/native/UserSettingsVoiceOverlay.tsx
import "noop";
import getUserAgnosticState from "getUserAgnosticState";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoiceOverlay.tsx");

export default function UserSettingsVoiceOverlay() {
  let obj = require("../../../../../discord_common/js/packages/flux/useStateFromStores.tsx") /* defaultAreStatesEqual */;
  const items = [getUserAgnosticState];
  const stateFromStores = obj.useStateFromStores(items, () => enabled.getEnabled());
  obj = { title: null, hasIcons: false, children: null };
  const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[0] = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.bNqkD9);
  obj = { label: null, subLabel: null, value: null, onValueChange: null };
  const intl2 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[0] = intl2.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["9CSZJm"]);
  const intl3 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl3.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.Wfoivk);
  obj[2] = stateFromStores;
  obj[3] = require("../../../voice_overlay/native/MobileVoiceOverlayActionCreators.tsx").setEnabled;
  obj[2] = jsx(require("../../../../design/components/TableRow/native/TableSwitchRow.native.tsx") /* TableSwitchRow */.TableSwitchRow, { label: null, subLabel: null, value: null, onValueChange: null });
  return jsx(require("UserSettingsVoice.tsx") /* UserSettingsVoice */.UserSettingsTableRowGroup, { label: null, subLabel: null, value: null, onValueChange: null });
};