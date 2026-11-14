// discord_app/modules/notifications/settings/native/routes/RedesignSettingsCategoryServersScreen.tsx
import SettingBuilders from "../../../../settings/native/renderer/SettingBuilders.tsx";
import MobileNotifSettingsRouteBuilders from "../MobileNotifSettingsRouteBuilders.tsx";
import SystemNotifPermissionLayoutDefault from "../SystemNotifPermissionLayout.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const MobileUserSettings = fn(9202).MobileUserSettings;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/notifications/settings/native/routes/RedesignSettingsCategoryServersScreen.tsx",
);

export default noop.memo(function RedesignSettingsCategoryServersScreen() {
  const memo = noop.useMemo(() => {
    const categoryServersSettingsSection = MobileNotifSettingsRouteBuilders.buildCategoryServersSettingsSection();
    items = [constants.REDESIGN_COMMUNITY_ACTIVITY_ALERTS];
    const obj2 = { node: null, unavailableNode: null };
    const obj4 = { sections: null };
    const obj5 = {};
    const merged = Object.assign(categoryServersSettingsSection);
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
  return jsx(SystemNotifPermissionLayoutDefault, { node, unavailableNode, category: "333_server" });
});
