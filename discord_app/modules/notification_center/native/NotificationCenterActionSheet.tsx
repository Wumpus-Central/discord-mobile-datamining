// === Module 18425: NotificationCenterActionSheet ===

// Module 18425 (NotificationCenterActionSheet)
import SavedMessagesTypes from "SavedMessagesTypes" /* 10172 */;
import MentionActionCreatorsDefault from "MentionActionCreators" /* 18426 */;
import noop from "module_19" /* 19 */;
import RecentMentionsStore from "RecentMentionsStore" /* 6881 */;

require = fn;
const UserSettingsSections = fn(1072).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/notification_center/native/NotificationCenterActionSheet.tsx");

export default function NotificationCenterActionSheet() {
  const items = [RecentMentionsStore];
  const stateFromStoresObject = roleFilter(504).useStateFromStoresObject(items, () => ({ everyoneFilter: RecentMentionsStore.everyoneFilter, roleFilter: RecentMentionsStore.roleFilter }));
  roleFilter = stateFromStoresObject.roleFilter;
  const everyoneFilter = stateFromStoresObject.everyoneFilter;
  const items1 = [everyoneFilter, roleFilter];
  dependencyMap = noop.useCallback((arg0) => {
    const merged = Object.assign(arg0);
    MentionActionCreatorsDefault.setGuildFilter({ roleFilter, everyoneFilter });
  }, items1);
  noop = noop.useCallback((BOOKMARK) => {
    everyoneFilter(5253).hideActionSheet();
    const obj = everyoneFilter(5253);
    roleFilter(11131).showForLaterModal(BOOKMARK);
  }, []);
  let obj = roleFilter(504);
  const canUseScheduledMessages = roleFilter(9787).useCanUseScheduledMessages();
  const callback = noop.useCallback(() => {
    everyoneFilter(5253).hideActionSheet();
    const obj = everyoneFilter(5253);
    const result = roleFilter(9786).showScheduledMessagesModal();
  }, []);
  const callback1 = noop.useCallback(() => {
    everyoneFilter(5253).hideActionSheet();
    const obj = everyoneFilter(5253);
    roleFilter(7557).openUserSettings({ screen: constants.NOTIFICATIONS });
  }, []);
  const obj3 = { showGradient: true, header: null, children: null };
  const obj4 = { title: null };
  const intl = roleFilter(1114).intl;
  obj4.title = intl.string(roleFilter(1114).t.HcoRu0);
  obj3.header = closure_6(roleFilter(7315).BottomSheetTitleHeader, obj4);
  const obj5 = { hasIcons: true, children: null };
  const obj6 = {
    onValueChange() {
      return dependencyMap({ roleFilter: !roleFilter });
    },
    value: roleFilter,
    label: null,
    icon: null
  };
  const intl2 = roleFilter(1114).intl;
  obj6.label = intl2.string(roleFilter(1114).t.asInft);
  const obj2 = roleFilter(9787);
  obj6.icon = closure_6(roleFilter(7362).ActionSheetRow.Icon, { IconComponent: roleFilter(8654).AtIcon, source: everyoneFilter(13936) });
  const items2 = [closure_6(roleFilter(7362).ActionSheetSwitchRow, obj6), ];
  const obj8 = {
    onValueChange() {
      return dependencyMap({ everyoneFilter: !everyoneFilter });
    },
    value: everyoneFilter,
    label: null,
    subLabel: null,
    icon: null
  };
  const intl3 = roleFilter(1114).intl;
  obj8.label = intl3.string(roleFilter(1114).t.S9GLtt);
  const intl4 = roleFilter(1114).intl;
  obj8.subLabel = intl4.string(roleFilter(1114).t.jYgZa4);
  const obj7 = { IconComponent: roleFilter(8654).AtIcon, source: everyoneFilter(13936) };
  obj8.icon = closure_6(roleFilter(7362).ActionSheetRow.Icon, { IconComponent: roleFilter(9189).BellIcon, source: everyoneFilter(18427) });
  items2[1] = closure_6(roleFilter(7362).ActionSheetSwitchRow, obj8);
  obj5.children = items2;
  const items3 = [closure_7(roleFilter(7362).ActionSheetRow.Group, obj5), ];
  const obj10 = { icon: null, label: null, onPress: null, arrow: true };
  const obj9 = { IconComponent: roleFilter(9189).BellIcon, source: everyoneFilter(18427) };
  obj10.icon = closure_6(roleFilter(7362).ActionSheetRow.Icon, { IconComponent: roleFilter(11142).BookmarkIcon });
  const intl5 = roleFilter(1114).intl;
  obj10.label = intl5.string(roleFilter(1114).t["2pAkDA"]);
  obj10.onPress = function onPress() {
    return closure_3(SavedMessagesTypes.SavedMessageSortTypes.BOOKMARK);
  };
  const items4 = [closure_6(roleFilter(7362).ActionSheetRow, obj10, "bookmarks"), , , ];
  const obj12 = { icon: null, label: null, onPress: null, arrow: true };
  const obj11 = { IconComponent: roleFilter(11142).BookmarkIcon };
  obj12.icon = closure_6(roleFilter(7362).ActionSheetRow.Icon, { IconComponent: roleFilter(5735).ClockIcon });
  const intl6 = roleFilter(1114).intl;
  obj12.label = intl6.string(roleFilter(1114).t.aUXxzT);
  obj12.onPress = function onPress() {
    return closure_3(SavedMessagesTypes.SavedMessageSortTypes.REMINDER);
  };
  items4[1] = closure_6(roleFilter(7362).ActionSheetRow, obj12, "reminders");
  let tmp8Result = null;
  if (canUseScheduledMessages) {
    const obj14 = { icon: null, label: null, onPress: null, arrow: true };
    const obj15 = { IconComponent: tmp(12382).CalendarPlusIcon };
    obj14.icon = closure_6(tmp(7362).ActionSheetRow.Icon, obj15);
    const intl7 = tmp(1114).intl;
    obj14.label = intl7.string(tmp(1114).t.SZVs3K);
    obj14.onPress = callback;
    tmp8Result = closure_6(tmp(7362).ActionSheetRow, obj14, "scheduled-messages");
  }
  const obj16 = { hasIcons: true, children: null };
  items4[2] = tmp8Result;
  const obj17 = { icon: null, label: null, onPress: null, arrow: true };
  const obj13 = { IconComponent: roleFilter(5735).ClockIcon };
  obj17.icon = closure_6(roleFilter(7362).ActionSheetRow.Icon, { IconComponent: roleFilter(7555).SettingsIcon });
  const intl8 = tmp(1114).intl;
  obj17.label = intl8.string(roleFilter(1114).t.h850Ss);
  obj17.onPress = callback1;
  items4[3] = closure_6(roleFilter(7362).ActionSheetRow, obj17, "settings");
  obj16.children = items4;
  items3[1] = closure_7(roleFilter(7362).ActionSheetRow.Group, obj16);
  obj3.children = items3;
  return closure_7(roleFilter(7360).ActionSheet, obj3);
};