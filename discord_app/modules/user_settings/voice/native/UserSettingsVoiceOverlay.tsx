// discord_app/modules/user_settings/voice/native/UserSettingsVoiceOverlay.tsx
import useStateFromStores from "../../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import util from "../../../../intl/index.native.tsx";
import TableSwitchRow from "../../../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import UserSettingsVoice from "UserSettingsVoice.tsx";
import MobileVoiceOverlayActionCreatorsDefault from "../../../voice_overlay/native/MobileVoiceOverlayActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import MobileVoiceOverlayStore from "../../../../stores/native/MobileVoiceOverlayStore.tsx";

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
  return jsx(UserSettingsVoice.UserSettingsTableRowGroup, {
    label: null,
    subLabel: null,
    value: null,
    onValueChange: null,
  });
}
