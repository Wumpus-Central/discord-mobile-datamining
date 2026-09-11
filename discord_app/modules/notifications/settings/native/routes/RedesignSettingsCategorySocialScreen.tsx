// === Module 15990: RedesignSettingsCategorySocialScreen ===

// Module 15990 (RedesignSettingsCategorySocialScreen)
import SettingBuilders from "SettingBuilders" /* 11562 */;
import SettingLayoutDefault from "SettingLayout" /* 14741 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 15984 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/settings/native/routes/RedesignSettingsCategorySocialScreen.tsx");

export default noop.memo(() => {
  const node = noop.useMemo(() => {
    const obj = { sections: null };
    const items = [MobileNotifSettingsRouteBuilders.buildCategorySocialSettingsSection()];
    obj.sections = items;
    return obj.createList(obj);
  }, []);
  return jsx(SettingLayoutDefault, { node });
});