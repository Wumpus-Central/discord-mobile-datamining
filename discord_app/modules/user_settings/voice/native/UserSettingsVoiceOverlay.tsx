// === Module 9990: UserSettingsVoiceOverlay ===

// Module 9990 (UserSettingsVoiceOverlay)
import useStateFromStores from "useStateFromStores" /* 563 */;
import util from "util" /* 1114 */;
import TableSwitchRow from "TableSwitchRow" /* 7201 */;
import UserSettingsVoice from "UserSettingsVoice" /* 9979 */;
import MobileVoiceOverlayActionCreatorsDefault from "MobileVoiceOverlayActionCreators" /* 9991 */;
import noop from "module_19" /* 19 */;
import MobileVoiceOverlayStore from "MobileVoiceOverlayStore" /* 9980 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoiceOverlay.tsx");

export default function UserSettingsVoiceOverlay() {
  let obj = useStateFromStores;
  const items = [MobileVoiceOverlayStore];
  const stateFromStores = obj.useStateFromStores(items, () => enabled.getEnabled());
  obj = { title: null, hasIcons: false, children: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.bNqkD9);
  obj = { label: null, subLabel: null, value: null, onValueChange: null };
  const intl2 = util.intl;
  obj.label = intl2.string(util.t["9CSZJm"]);
  const intl3 = util.intl;
  obj.subLabel = intl3.string(util.t.Wfoivk);
  obj.value = stateFromStores;
  obj.onValueChange = MobileVoiceOverlayActionCreatorsDefault.setEnabled;
  obj.children = jsx(TableSwitchRow.TableSwitchRow, { label: null, subLabel: null, value: null, onValueChange: null });
  return jsx(UserSettingsVoice.UserSettingsTableRowGroup, { label: null, subLabel: null, value: null, onValueChange: null });
};