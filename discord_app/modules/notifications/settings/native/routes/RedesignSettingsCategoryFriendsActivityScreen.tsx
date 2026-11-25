// === Module 17579: RedesignSettingsCategoryFriendsActivityScreen ===

// Module 17579 (RedesignSettingsCategoryFriendsActivityScreen)
import util from "util" /* 1112 */;
import _modDef3206 from "module_3206" /* 3206 */;
import useMountEffectDefault from "useMountEffect" /* 5573 */;
import SettingBuilders from "SettingBuilders" /* 11914 */;
import FamilyCenterAgeGroupPrefetch from "FamilyCenterAgeGroupPrefetch" /* 17049 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 17569 */;
import SystemNotifPermissionLayoutDefault from "SystemNotifPermissionLayout" /* 17570 */;
import noop from "module_19" /* 19 */;

require = fn;
const MobileUserSettings = fn(9513).MobileUserSettings;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/settings/native/routes/RedesignSettingsCategoryFriendsActivityScreen.tsx");

export default noop.memo(function RedesignSettingsCategoryFriendsActivityScreen() {
  const memo = noop.useMemo(() => {
    const friendActivityTitleSettingsSection = MobileNotifSettingsRouteBuilders.buildFriendActivityTitleSettingsSection();
    const categoryFriendsActivitySettingsSection = MobileNotifSettingsRouteBuilders.buildCategoryFriendsActivitySettingsSection();
    items = [constants.REDESIGN_FRIEND_ANNIVERSARY_NOTIFICATIONS];
    const obj3 = { label: null, settings: null };
    const intl = util.intl;
    obj3.label = intl.string(util.t["0YtG+k"]);
    const items1 = [, ];
    ({ REDESIGN_SCREEN_DOWNTIME_SCHEDULE_NOTIFICATIONS: arr2[0], REDESIGN_SCREEN_DOWNTIME_REMINDER_NOTIFICATIONS: arr2[1] } = constants);
    obj3.settings = items1;
    const obj4 = { node: null, unavailableNode: null };
    const obj6 = { sections: null };
    const obj7 = {};
    const merged = Object.assign(friendActivityTitleSettingsSection);
    const intl2 = util.intl;
    obj7.label = intl2.string(_modDef3206.B0OBFd);
    const items2 = [...items];
    obj7.settings = items2;
    const items3 = [obj7, , ];
    const obj8 = {};
    const merged1 = Object.assign(categoryFriendsActivitySettingsSection);
    const intl3 = util.intl;
    obj8.label = intl3.string(_modDef3206.wB1ASV);
    items3[1] = obj8;
    items3[2] = obj3;
    obj6.sections = items3;
    obj4.node = SettingBuilders.createList(obj6);
    const obj10 = { sections: null };
    const obj11 = { label: null, settings: null };
    const intl4 = util.intl;
    obj11.label = intl4.string(_modDef3206.B0OBFd);
    obj11.settings = items;
    const items4 = [obj11, obj3];
    obj10.sections = items4;
    obj4.unavailableNode = SettingBuilders.createList(obj10);
    return obj4;
  }, []);
  ({ node, unavailableNode } = memo);
  useMountEffectDefault(FamilyCenterAgeGroupPrefetch.prefetchFamilyCenterAgeGroup);
  return jsx(SystemNotifPermissionLayoutDefault, { node, unavailableNode, category: "222_social" });
});