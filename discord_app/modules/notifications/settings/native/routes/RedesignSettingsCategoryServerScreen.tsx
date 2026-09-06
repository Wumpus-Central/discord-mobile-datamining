// discord_app/modules/notifications/settings/native/routes/RedesignSettingsCategoryServerScreen.tsx
import SettingBuilders from "../../../../settings/native/renderer/SettingBuilders.tsx";
import SettingLayoutDefault from "../../../../settings/native/renderer/SettingLayout.tsx";
import MobileNotifSettingsRouteBuilders from "../MobileNotifSettingsRouteBuilders.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/notifications/settings/native/routes/RedesignSettingsCategoryServerScreen.tsx",
);

export default noop.memo(() => {
  const node = noop.useMemo(() => {
    const obj = { sections: null };
    const items = [MobileNotifSettingsRouteBuilders.buildCategoryServerSettingsSection()];
    obj.sections = items;
    return obj.createList(obj);
  }, []);
  return jsx(SettingLayoutDefault, { node });
});
