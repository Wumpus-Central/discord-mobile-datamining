// discord_app/modules/notifications/settings/native/routes/RedesignSettingsReactionsChoiceScreen.tsx
import SettingBuilders from "../../../../settings/native/renderer/SettingBuilders.tsx";
import MobileNotifSettingsRouteBuilders from "../MobileNotifSettingsRouteBuilders.tsx";
import EffectiveNotifSettingsLayoutDefault from "../EffectiveNotifSettingsLayout.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/notifications/settings/native/routes/RedesignSettingsReactionsChoiceScreen.tsx",
);

export default noop.memo(function RedesignSettingsReactionsChoiceScreen() {
  const node = noop.useMemo(() => {
    const obj2 = { sections: null };
    const obj = SettingBuilders;
    items = [MobileNotifSettingsRouteBuilders.buildReactionsChoiceSettingsSection()];
    obj2.sections = items;
    return obj.createList(obj2);
  }, []);
  return jsx(EffectiveNotifSettingsLayoutDefault, { node });
});
