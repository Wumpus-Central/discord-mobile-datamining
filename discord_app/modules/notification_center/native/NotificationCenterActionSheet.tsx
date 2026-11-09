// === Module 18831: NotificationCenterActionSheet ===

// Module 18831 (NotificationCenterActionSheet)
import SavedMessagesTypes from "SavedMessagesTypes" /* 10311 */;
import MentionActionCreatorsDefault from "MentionActionCreators" /* 18832 */;
import noop from "module_19" /* 19 */;
import RecentMentionsStore from "RecentMentionsStore" /* 6942 */;

require = fn;
const UserSettingsSections = fn(1072).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/notification_center/native/NotificationCenterActionSheet.tsx");

export default function NotificationCenterActionSheet() {
  items = [RecentMentionsStore];
  const stateFromStoresObject = roleFilter(504).useStateFromStoresObject(items, () => ({ everyoneFilter: RecentMentionsStore.everyoneFilter, roleFilter: RecentMentionsStore.roleFilter }));
  roleFilter = stateFromStoresObject.roleFilter;
  const everyoneFilter = stateFromStoresObject.everyoneFilter;
  const items1 = [everyoneFilter, roleFilter];
  dependencyMap = noop.useCallback((arg0) => {
    const merged = Object.assign(arg0);
    MentionActionCreatorsDefault.setGuildFilter({ roleFilter, everyoneFilter });
  }, items1);
  noop = noop.useCallback((BOOKMARK) => {
    everyoneFilter(5374).hideActionSheet();
    const obj = everyoneFilter(5374);
    roleFilter(11282).showForLaterModal(BOOKMARK);
  }, []);
  const callback = noop.useCallback(() => {
    everyoneFilter(5374).hideActionSheet();
    const obj = everyoneFilter(5374);
    const result = roleFilter(9897).showScheduledMessagesModal();
  }, []);
  const callback1 = noop.useCallback(() => {
    everyoneFilter(5374).hideActionSheet();
    const obj = everyoneFilter(5374);
    roleFilter(7635).openUserSettings({ screen: constants.NOTIFICATIONS });
  }, []);
  const obj2 = { showGradient: true, header: null, children: null };
  const obj3 = { title: null };
  const intl = roleFilter(1113).intl;
  obj3.title = intl.string(roleFilter(1113).t.HcoRu0);
  obj2.header = closure_6(roleFilter(7382).BottomSheetTitleHeader, obj3);
  const obj4 = { hasIcons: true, children: null };
  const obj5 = {
    onValueChange() {
      return dependencyMap({ roleFilter: !roleFilter });
    },
    value: roleFilter,
    label: null,
    icon: null
  };
  const intl2 = roleFilter(1113).intl;
  obj5.label = intl2.string(roleFilter(1113).t.asInft);
  let obj = roleFilter(504);
  obj5.icon = closure_6(roleFilter(7428).ActionSheetRow.Icon, { IconComponent: roleFilter(8733).AtIcon, source: everyoneFilter(14220) });
  const items2 = [closure_6(roleFilter(7428).ActionSheetSwitchRow, obj5), ];
  const obj7 = {
    onValueChange() {
      return dependencyMap({ everyoneFilter: !everyoneFilter });
    },
    value: everyoneFilter,
    label: null,
    subLabel: null,
    icon: null
  };
  const intl3 = roleFilter(1113).intl;
  obj7.label = intl3.string(roleFilter(1113).t.S9GLtt);
  const intl4 = roleFilter(1113).intl;
  obj7.subLabel = intl4.string(roleFilter(1113).t.jYgZa4);
  const obj6 = { IconComponent: roleFilter(8733).AtIcon, source: everyoneFilter(14220) };
  obj7.icon = closure_6(roleFilter(7428).ActionSheetRow.Icon, { IconComponent: roleFilter(9288).BellIcon, source: everyoneFilter(18833) });
  items2[1] = closure_6(roleFilter(7428).ActionSheetSwitchRow, obj7);
  obj4.children = items2;
  const items3 = [closure_7(roleFilter(7428).ActionSheetRow.Group, obj4), ];
  const obj9 = { hasIcons: true, children: null };
  const obj10 = { icon: null, label: null, onPress: null, arrow: true };
  const obj8 = { IconComponent: roleFilter(9288).BellIcon, source: everyoneFilter(18833) };
  obj10.icon = closure_6(roleFilter(7428).ActionSheetRow.Icon, { IconComponent: roleFilter(11293).BookmarkIcon });
  const intl5 = roleFilter(1113).intl;
  obj10.label = intl5.string(roleFilter(1113).t["2pAkDA"]);
  obj10.onPress = function onPress() {
    return closure_3(SavedMessagesTypes.SavedMessageSortTypes.BOOKMARK);
  };
  const items4 = [closure_6(roleFilter(7428).ActionSheetRow, obj10, "bookmarks"), , , ];
  const obj12 = { icon: null, label: null, onPress: null, arrow: true };
  const obj11 = { IconComponent: roleFilter(11293).BookmarkIcon };
  obj12.icon = closure_6(roleFilter(7428).ActionSheetRow.Icon, { IconComponent: roleFilter(5864).ClockIcon });
  const intl6 = roleFilter(1113).intl;
  obj12.label = intl6.string(roleFilter(1113).t.aUXxzT);
  obj12.onPress = function onPress() {
    return closure_3(SavedMessagesTypes.SavedMessageSortTypes.REMINDER);
  };
  items4[1] = closure_6(roleFilter(7428).ActionSheetRow, obj12, "reminders");
  const obj14 = { icon: null, label: null, onPress: null, arrow: true };
  const obj13 = { IconComponent: roleFilter(5864).ClockIcon };
  obj14.icon = closure_6(roleFilter(7428).ActionSheetRow.Icon, { IconComponent: roleFilter(12763).CalendarPlusIcon });
  const intl7 = roleFilter(1113).intl;
  obj14.label = intl7.string(roleFilter(1113).t.SZVs3K);
  obj14.onPress = callback;
  items4[2] = closure_6(roleFilter(7428).ActionSheetRow, obj14, "scheduled-messages");
  const obj16 = { icon: null, label: null, onPress: null, arrow: true };
  const obj15 = { IconComponent: roleFilter(12763).CalendarPlusIcon };
  obj16.icon = closure_6(roleFilter(7428).ActionSheetRow.Icon, { IconComponent: roleFilter(7633).SettingsIcon });
  const intl8 = roleFilter(1113).intl;
  obj16.label = intl8.string(roleFilter(1113).t.h850Ss);
  obj16.onPress = callback1;
  items4[3] = closure_6(roleFilter(7428).ActionSheetRow, obj16, "settings");
  obj9.children = items4;
  items3[1] = closure_7(roleFilter(7428).ActionSheetRow.Group, obj9);
  obj2.children = items3;
  return closure_7(roleFilter(7426).ActionSheet, obj2);
};