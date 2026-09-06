// === Module 15922: RedesignSettingsCategoryOtherScreen ===

// Module 15922 (RedesignSettingsCategoryOtherScreen)
import SettingBuilders from "SettingBuilders" /* 11468 */;
import SettingLayoutDefault from "SettingLayout" /* 14689 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 15918 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/settings/native/routes/RedesignSettingsCategoryOtherScreen.tsx");

export default noop.memo(() => {
  const node = noop.useMemo(() => {
    const obj = { sections: null };
    const items = [MobileNotifSettingsRouteBuilders.buildCategoryOtherSettingsSection()];
    obj.sections = items;
    return obj.createList(obj);
  }, []);
  return jsx(SettingLayoutDefault, { node });
});