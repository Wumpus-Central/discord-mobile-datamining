// === Module 18628: RedesignSettingsCategoryFriendsActivityScreen ===

// Module 18628 (RedesignSettingsCategoryFriendsActivityScreen)
import util from "util" /* 1113 */;
import useMountEffectDefault from "useMountEffect" /* 5899 */;
import SettingBuilders from "SettingBuilders" /* 12406 */;
import FamilyCenterAgeGroupPrefetch from "FamilyCenterAgeGroupPrefetch" /* 18109 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 18618 */;
import SystemNotifPermissionLayoutDefault from "SystemNotifPermissionLayout" /* 18619 */;
import noop from "module_19" /* 19 */;

require = fn;
const MobileUserSettings = fn(9202).MobileUserSettings;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/settings/native/routes/RedesignSettingsCategoryFriendsActivityScreen.tsx");

export default noop.memo(function RedesignSettingsCategoryFriendsActivityScreen() {
  const memo = noop.useMemo(() => {
    const categoryFriendsActivitySettingsSection = MobileNotifSettingsRouteBuilders.buildCategoryFriendsActivitySettingsSection();
    items = [constants.REDESIGN_FRIEND_ANNIVERSARY_NOTIFICATIONS];
    const obj2 = { label: null, settings: null };
    const intl = util.intl;
    obj2.label = intl.string(util.t["0YtG+k"]);
    const items1 = [, ];
    ({ REDESIGN_SCREEN_DOWNTIME_SCHEDULE_NOTIFICATIONS: arr2[0], REDESIGN_SCREEN_DOWNTIME_REMINDER_NOTIFICATIONS: arr2[1] } = constants);
    obj2.settings = items1;
    const obj3 = { node: null, unavailableNode: null };
    const obj5 = { sections: null };
    const obj6 = {};
    const merged = Object.assign(categoryFriendsActivitySettingsSection);
    const items2 = [...items];
    obj6.settings = items2;
    const items3 = [obj6, obj2];
    obj5.sections = items3;
    obj3.node = SettingBuilders.createList(obj5);
    const obj8 = { sections: null };
    const items4 = [{ settings: items }, obj2];
    obj8.sections = items4;
    obj3.unavailableNode = SettingBuilders.createList(obj8);
    return obj3;
  }, []);
  ({ node, unavailableNode } = memo);
  useMountEffectDefault(FamilyCenterAgeGroupPrefetch.prefetchFamilyCenterAgeGroup);
  return jsx(SystemNotifPermissionLayoutDefault, { node, unavailableNode, category: "222_social" });
});