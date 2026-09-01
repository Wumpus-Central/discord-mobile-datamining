// discord_app/modules/user_settings/voice/native/UserSettingsVoiceOverlay.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import defaultAreStatesEqual from "../../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import TableSwitchRow from "../../../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import UserSettingsVoice from "UserSettingsVoice.tsx";
import dispatcherDefault from "../../../voice_overlay/native/MobileVoiceOverlayActionCreators.tsx";
import closure_3 from "../../../../stores/native/MobileVoiceOverlayStore.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoiceOverlay.tsx");

export default function UserSettingsVoiceOverlay() {
  let obj = defaultAreStatesEqual;
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => enabled.getEnabled());
  obj = { title: null, hasIcons: false, children: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.bNqkD9);
  obj = { label: null, subLabel: null, value: null, onValueChange: null };
  const intl2 = getSystemLocale.intl;
  obj[0] = intl2.string(getSystemLocale.t["9CSZJm"]);
  const intl3 = getSystemLocale.intl;
  obj[1] = intl3.string(getSystemLocale.t.Wfoivk);
  obj[2] = stateFromStores;
  obj[3] = dispatcherDefault.setEnabled;
  obj[2] = jsx(TableSwitchRow.TableSwitchRow, { label: null, subLabel: null, value: null, onValueChange: null });
  return jsx(UserSettingsVoice.UserSettingsTableRowGroup, {
    label: null,
    subLabel: null,
    value: null,
    onValueChange: null,
  });
}
