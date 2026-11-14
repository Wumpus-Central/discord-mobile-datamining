// === Module 18626: RedesignSettingsCategoryCallsMessagesScreen ===

// Module 18626 (RedesignSettingsCategoryCallsMessagesScreen)
import SettingBuilders from "SettingBuilders" /* 12406 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 18618 */;
import SystemNotifPermissionLayoutDefault from "SystemNotifPermissionLayout" /* 18619 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/settings/native/routes/RedesignSettingsCategoryCallsMessagesScreen.tsx");

export default noop.memo(function RedesignSettingsCategoryCallsMessagesScreen() {
  const node = noop.useMemo(() => {
    const obj2 = { sections: null };
    const obj = SettingBuilders;
    items = [MobileNotifSettingsRouteBuilders.buildCategoryCallsMessagesSettingsSection()];
    obj2.sections = items;
    return obj.createList(obj2);
  }, []);
  return jsx(SystemNotifPermissionLayoutDefault, { node, category: "111_realtime" });
});