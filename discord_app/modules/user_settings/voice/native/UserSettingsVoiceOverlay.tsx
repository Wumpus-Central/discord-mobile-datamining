// === Module 10129: UserSettingsVoiceOverlay ===

// Module 10129 (UserSettingsVoiceOverlay)
import useStateFromStores from "useStateFromStores" /* 563 */;
import util from "util" /* 1115 */;
import TableSwitchRow from "TableSwitchRow" /* 7310 */;
import UserSettingsVoice from "UserSettingsVoice" /* 10118 */;
import MobileVoiceOverlayActionCreatorsDefault from "MobileVoiceOverlayActionCreators" /* 10130 */;
import noop from "module_19" /* 19 */;
import MobileVoiceOverlayStore from "MobileVoiceOverlayStore" /* 10119 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoiceOverlay.tsx");

export default function UserSettingsVoiceOverlay() {
  const items = [MobileVoiceOverlayStore];
  const stateFromStores = useStateFromStores.useStateFromStores(items, () => enabled.getEnabled());
  const obj2 = { title: null, hasIcons: false, children: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t.bNqkD9);
  const obj3 = { label: null, subLabel: null, value: null, onValueChange: null };
  const intl2 = util.intl;
  obj3.label = intl2.string(util.t["9CSZJm"]);
  const intl3 = util.intl;
  obj3.subLabel = intl3.string(util.t.Wfoivk);
  obj3.value = stateFromStores;
  obj3.onValueChange = MobileVoiceOverlayActionCreatorsDefault.setEnabled;
  obj2.children = jsx(TableSwitchRow.TableSwitchRow, { label: null, subLabel: null, value: null, onValueChange: null });
  return jsx(UserSettingsVoice.UserSettingsTableRowGroup, { title: null, hasIcons: false, children: null });
};