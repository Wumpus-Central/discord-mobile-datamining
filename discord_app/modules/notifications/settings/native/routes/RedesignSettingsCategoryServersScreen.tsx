// === Module 18212: RedesignSettingsCategoryServersScreen ===

// Module 18212 (RedesignSettingsCategoryServersScreen)
import SettingBuilders from "SettingBuilders" /* 11728 */;
import SettingLayoutDefault from "SettingLayout" /* 16823 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 18203 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/settings/native/routes/RedesignSettingsCategoryServersScreen.tsx");

export default noop.memo(function RedesignSettingsCategoryServersScreen() {
  const node = noop.useMemo(() => {
    const obj2 = { sections: null };
    const obj = SettingBuilders;
    items = [MobileNotifSettingsRouteBuilders.buildCategoryServersSettingsSection()];
    obj2.sections = items;
    return obj.createList(obj2);
  }, []);
  return jsx(SettingLayoutDefault, { node });
});