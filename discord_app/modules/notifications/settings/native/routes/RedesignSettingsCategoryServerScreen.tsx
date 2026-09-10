// === Module 16003: RedesignSettingsCategoryServerScreen ===

// Module 16003 (RedesignSettingsCategoryServerScreen)
import SettingBuilders from "SettingBuilders" /* 11540 */;
import SettingLayoutDefault from "SettingLayout" /* 14767 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 16000 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/settings/native/routes/RedesignSettingsCategoryServerScreen.tsx");

export default noop.memo(() => {
  const node = noop.useMemo(() => {
    const obj = { sections: null };
    const items = [MobileNotifSettingsRouteBuilders.buildCategoryServerSettingsSection()];
    obj.sections = items;
    return obj.createList(obj);
  }, []);
  return jsx(SettingLayoutDefault, { node });
});