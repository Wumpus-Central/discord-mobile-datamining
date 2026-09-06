// === Module 16407: NotificationCenterActionSheet ===

// Module 16407 (NotificationCenterActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7853 */;
import showForLaterModal from "showForLaterModal" /* 7859 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 7860 */;
import MentionActionCreatorsDefault from "MentionActionCreators" /* 16408 */;
import noop from "module_19" /* 19 */;
import RecentMentionsStore from "RecentMentionsStore" /* 7637 */;

require = fn;
const UserSettingsSections = fn(1074).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/notification_center/native/NotificationCenterActionSheet.tsx");

export default function NotificationCenterActionSheet() {
  let obj = roleFilter(504);
  let items = [closure_4];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ everyoneFilter: closure_4.everyoneFilter, roleFilter: closure_4.roleFilter }));
  roleFilter = stateFromStoresObject.roleFilter;
  const everyoneFilter = stateFromStoresObject.everyoneFilter;
  const items1 = [everyoneFilter, roleFilter];
  dependencyMap = hasForLaterAccess.useCallback((arg0) => {
    const obj = { roleFilter, everyoneFilter };
    const merged = Object.assign(arg0);
    obj.setGuildFilter(obj);
  }, items1);
  let obj1 = roleFilter(7855);
  const isForLaterExperimentOn = obj1.useIsForLaterExperimentOn("NotificationCenterActionSheet");
  let obj2 = roleFilter(7855);
  hasForLaterAccess = obj2.useHasForLaterAccess("NotificationCenterActionSheet");
  const items2 = [hasForLaterAccess];
  closure_4 = hasForLaterAccess.useCallback((BOOKMARK) => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    if (hasForLaterAccess) {
      showForLaterModal.showForLaterModal(BOOKMARK);
    } else {
      const items = [tmp(7182).FOR_LATER_ROADBLOCK];
      tmp(7850)(EntitlementFeatureNames.EntitlementFeatureNames.SAVED_MESSAGES, undefined, items);
      const tmpResult = tmp(7850);
    }
  }, items2);
  let obj3 = roleFilter(7845);
  const canUseScheduledMessages = obj3.useCanUseScheduledMessages();
  const callback = hasForLaterAccess.useCallback(() => {
    everyoneFilter(4527).hideActionSheet();
    const obj = everyoneFilter(4527);
    const result = roleFilter(12211).showScheduledMessagesModal();
  }, []);
  const callback1 = hasForLaterAccess.useCallback(() => {
    let obj = everyoneFilter(4527);
    obj.hideActionSheet();
    obj = { screen: constants.NOTIFICATIONS };
    roleFilter(7382).openUserSettings(obj);
  }, []);
  obj = { showGradient: true, header: null, children: null };
  obj = { title: null };
  const intl = roleFilter(1114).intl;
  obj.title = intl.string(roleFilter(1114).t.HcoRu0);
  obj.header = closure_6(roleFilter(7149).BottomSheetTitleHeader, obj);
  obj1 = { hasIcons: true, children: null };
  obj2 = {
    onValueChange() {
      return dependencyMap({ roleFilter: !roleFilter });
    },
    value: roleFilter,
    label: null,
    icon: null
  };
  const intl2 = roleFilter(1114).intl;
  obj2.label = intl2.string(roleFilter(1114).t.asInft);
  obj3 = { IconComponent: roleFilter(5090).AtIcon, source: everyoneFilter(12422) };
  obj2.icon = closure_6(roleFilter(7200).ActionSheetRow.Icon, obj3);
  const items3 = [closure_6(roleFilter(7200).ActionSheetSwitchRow, obj2), ];
  const obj4 = {
    onValueChange() {
      return dependencyMap({ everyoneFilter: !everyoneFilter });
    },
    value: everyoneFilter,
    label: null,
    subLabel: null,
    icon: null
  };
  const intl3 = roleFilter(1114).intl;
  obj4.label = intl3.string(roleFilter(1114).t.S9GLtt);
  const intl4 = roleFilter(1114).intl;
  obj4.subLabel = intl4.string(roleFilter(1114).t.jYgZa4);
  obj4.icon = closure_6(roleFilter(7200).ActionSheetRow.Icon, { IconComponent: roleFilter(9776).BellIcon, source: everyoneFilter(16409) });
  items3[1] = closure_6(roleFilter(7200).ActionSheetSwitchRow, obj4);
  obj1.children = items3;
  const items4 = [closure_7(roleFilter(7200).ActionSheetRow.Group, obj1), ];
  let tmp10Result = null;
  if (isForLaterExperimentOn) {
    const obj6 = { icon: null, label: null, onPress: null, arrow: true };
    const obj7 = { IconComponent: tmp(11707).BookmarkIcon };
    obj6.icon = tmp10(tmp(7200).ActionSheetRow.Icon, obj7);
    const intl5 = tmp(1114).intl;
    obj6.label = intl5.string(tmp(1114).t["2pAkDA"]);
    obj6.onPress = function onPress() {
      return closure_4(SavedMessagesTypes.SavedMessageSortTypes.BOOKMARK);
    };
    tmp10Result = tmp10(tmp(7200).ActionSheetRow, obj6, "bookmarks");
  }
  const items5 = [tmp10Result, , , ];
  tmp10Result = null;
  if (isForLaterExperimentOn) {
    const obj8 = { icon: null, label: null, onPress: null, arrow: true };
    const obj9 = { IconComponent: tmp(4523).ClockIcon };
    obj8.icon = tmp10(tmp(7200).ActionSheetRow.Icon, obj9);
    const intl6 = tmp(1114).intl;
    obj8.label = intl6.string(tmp(1114).t.aUXxzT);
    obj8.onPress = function onPress() {
      return closure_4(SavedMessagesTypes.SavedMessageSortTypes.REMINDER);
    };
    tmp10Result = tmp10(tmp(7200).ActionSheetRow, obj8, "reminders");
  }
  items5[1] = tmp10Result;
  let tmp10Result1 = null;
  if (canUseScheduledMessages) {
    const obj10 = { icon: null, label: null, onPress: null, arrow: true };
    const obj11 = { IconComponent: tmp(12209).CalendarPlusIcon };
    obj10.icon = tmp10(tmp(7200).ActionSheetRow.Icon, obj11);
    const intl7 = tmp(1114).intl;
    obj10.label = intl7.string(tmp(1114).t.SZVs3K);
    obj10.onPress = callback;
    tmp10Result1 = tmp10(tmp(7200).ActionSheetRow, obj10, "scheduled-messages");
  }
  const obj12 = { hasIcons: true, children: null };
  items5[2] = tmp10Result1;
  const obj13 = { icon: null, label: null, onPress: null, arrow: true };
  const obj5 = { IconComponent: roleFilter(9776).BellIcon, source: everyoneFilter(16409) };
  obj13.icon = closure_6(roleFilter(7200).ActionSheetRow.Icon, { IconComponent: roleFilter(7380).SettingsIcon });
  const intl8 = tmp(1114).intl;
  obj13.label = intl8.string(roleFilter(1114).t.h850Ss);
  obj13.onPress = callback1;
  items5[3] = closure_6(roleFilter(7200).ActionSheetRow, obj13, "settings");
  obj12.children = items5;
  items4[1] = closure_7(roleFilter(7200).ActionSheetRow.Group, obj12);
  obj.children = items4;
  return closure_7(roleFilter(7198).ActionSheet, obj);
};