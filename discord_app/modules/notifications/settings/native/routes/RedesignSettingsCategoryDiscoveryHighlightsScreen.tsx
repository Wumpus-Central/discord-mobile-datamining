// === Module 18209: RedesignSettingsCategoryDiscoveryHighlightsScreen ===

// Module 18209 (RedesignSettingsCategoryDiscoveryHighlightsScreen)
import SettingBuilders from "SettingBuilders" /* 11728 */;
import SettingLayoutDefault from "SettingLayout" /* 16823 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 18203 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/settings/native/routes/RedesignSettingsCategoryDiscoveryHighlightsScreen.tsx");

export default noop.memo(function RedesignSettingsCategoryDiscoveryHighlightsScreen() {
  const node = noop.useMemo(() => {
    const obj2 = { sections: null };
    const obj = SettingBuilders;
    items = [MobileNotifSettingsRouteBuilders.buildCategoryDiscoveryHighlightsSettingsSection()];
    obj2.sections = items;
    return obj.createList(obj2);
  }, []);
  return jsx(SettingLayoutDefault, { node });
});