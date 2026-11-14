// === Module 18627: RedesignSettingsCategoryDiscoveryHighlightsScreen ===

// Module 18627 (RedesignSettingsCategoryDiscoveryHighlightsScreen)
import SettingBuilders from "SettingBuilders" /* 12406 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 18618 */;
import SystemNotifPermissionLayoutDefault from "SystemNotifPermissionLayout" /* 18619 */;
import noop from "module_19" /* 19 */;

require = fn;
const MobileUserSettings = fn(9202).MobileUserSettings;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/settings/native/routes/RedesignSettingsCategoryDiscoveryHighlightsScreen.tsx");

export default noop.memo(function RedesignSettingsCategoryDiscoveryHighlightsScreen() {
  const memo = noop.useMemo(() => {
    const categoryDiscoveryHighlightsSettingsSection = MobileNotifSettingsRouteBuilders.buildCategoryDiscoveryHighlightsSettingsSection();
    items = [constants.REDESIGN_HIGHLIGHT_NOTIFICATIONS];
    const obj2 = { node: null, unavailableNode: null };
    const obj4 = { sections: null };
    const obj5 = {};
    const merged = Object.assign(categoryDiscoveryHighlightsSettingsSection);
    const items1 = [...items];
    obj5.settings = items1;
    const items2 = [obj5];
    obj4.sections = items2;
    obj2.node = SettingBuilders.createList(obj4);
    const obj7 = { sections: null };
    const items3 = [{ settings: items }];
    obj7.sections = items3;
    obj2.unavailableNode = SettingBuilders.createList(obj7);
    return obj2;
  }, []);
  ({ node, unavailableNode } = memo);
  return jsx(SystemNotifPermissionLayoutDefault, { node, unavailableNode, category: "444_other" });
});