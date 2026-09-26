// === Module 16048: NotificationCenterActionSheet ===

// Module 16048 (NotificationCenterActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6603 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 7270 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7273 */;
import showForLaterModal from "showForLaterModal" /* 7284 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 7285 */;
import MentionActionCreatorsDefault from "MentionActionCreators" /* 16049 */;
import noop from "module_19" /* 19 */;
import RecentMentionsStore from "RecentMentionsStore" /* 7051 */;

require = fn;
const UserSettingsSections = fn(1074).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/notification_center/native/NotificationCenterActionSheet.tsx");

export default function NotificationCenterActionSheet() {
  let items = [closure_4];
  const stateFromStoresObject = roleFilter(504).useStateFromStoresObject(items, () => ({ everyoneFilter: closure_4.everyoneFilter, roleFilter: closure_4.roleFilter }));
  roleFilter = stateFromStoresObject.roleFilter;
  const everyoneFilter = stateFromStoresObject.everyoneFilter;
  const items1 = [everyoneFilter, roleFilter];
  dependencyMap = hasForLaterAccess.useCallback((arg0) => {
    const merged = Object.assign(arg0);
    MentionActionCreatorsDefault.setGuildFilter({ roleFilter, everyoneFilter });
  }, items1);
  let obj = roleFilter(504);
  const isForLaterExperimentOn = roleFilter(7275).useIsForLaterExperimentOn("NotificationCenterActionSheet");
  let obj2 = roleFilter(7275);
  hasForLaterAccess = roleFilter(7275).useHasForLaterAccess("NotificationCenterActionSheet");
  const items2 = [hasForLaterAccess];
  closure_4 = hasForLaterAccess.useCallback((BOOKMARK) => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    if (hasForLaterAccess) {
      showForLaterModal.showForLaterModal(BOOKMARK);
    } else {
      const items = [AnalyticsLocationDefault.FOR_LATER_ROADBLOCK];
      openPremiumUpsellActionSheetDefault(EntitlementFeatureNames.EntitlementFeatureNames.SAVED_MESSAGES, undefined, items);
      const tmpResult = openPremiumUpsellActionSheetDefault;
    }
  }, items2);
  const obj3 = roleFilter(7275);
  const canUseScheduledMessages = roleFilter(7265).useCanUseScheduledMessages();
  const callback = hasForLaterAccess.useCallback(() => {
    everyoneFilter(4800).hideActionSheet();
    const obj = everyoneFilter(4800);
    const result = roleFilter(11693).showScheduledMessagesModal();
  }, []);
  const callback1 = hasForLaterAccess.useCallback(() => {
    everyoneFilter(4800).hideActionSheet();
    const obj = everyoneFilter(4800);
    roleFilter(6800).openUserSettings({ screen: constants.NOTIFICATIONS });
  }, []);
  const obj5 = { showGradient: true, header: null, children: null };
  const obj6 = { title: null };
  const intl = roleFilter(1115).intl;
  obj6.title = intl.string(roleFilter(1115).t.HcoRu0);
  obj5.header = closure_6(roleFilter(6570).BottomSheetTitleHeader, obj6);
  const obj7 = { hasIcons: true, children: null };
  const obj8 = {
    onValueChange() {
      return dependencyMap({ roleFilter: !roleFilter });
    },
    value: roleFilter,
    label: null,
    icon: null
  };
  const intl2 = roleFilter(1115).intl;
  obj8.label = intl2.string(roleFilter(1115).t.asInft);
  const obj4 = roleFilter(7265);
  obj8.icon = closure_6(roleFilter(6620).ActionSheetRow.Icon, { IconComponent: roleFilter(5404).AtIcon, source: everyoneFilter(11915) });
  const items3 = [closure_6(roleFilter(6620).ActionSheetSwitchRow, obj8), ];
  const obj10 = {
    onValueChange() {
      return dependencyMap({ everyoneFilter: !everyoneFilter });
    },
    value: everyoneFilter,
    label: null,
    subLabel: null,
    icon: null
  };
  const intl3 = roleFilter(1115).intl;
  obj10.label = intl3.string(roleFilter(1115).t.S9GLtt);
  const intl4 = roleFilter(1115).intl;
  obj10.subLabel = intl4.string(roleFilter(1115).t.jYgZa4);
  const obj9 = { IconComponent: roleFilter(5404).AtIcon, source: everyoneFilter(11915) };
  obj10.icon = closure_6(roleFilter(6620).ActionSheetRow.Icon, { IconComponent: roleFilter(9067).BellIcon, source: everyoneFilter(16050) });
  items3[1] = closure_6(roleFilter(6620).ActionSheetSwitchRow, obj10);
  obj7.children = items3;
  const items4 = [closure_7(roleFilter(6620).ActionSheetRow.Group, obj7), ];
  let tmp10Result = null;
  if (isForLaterExperimentOn) {
    const obj12 = { icon: null, label: null, onPress: null, arrow: true };
    const obj13 = { IconComponent: tmp(11207).BookmarkIcon };
    obj12.icon = closure_6(tmp(6620).ActionSheetRow.Icon, obj13);
    const intl5 = tmp(1115).intl;
    obj12.label = intl5.string(tmp(1115).t["2pAkDA"]);
    obj12.onPress = function onPress() {
      return closure_4(SavedMessagesTypes.SavedMessageSortTypes.BOOKMARK);
    };
    tmp10Result = closure_6(tmp(6620).ActionSheetRow, obj12, "bookmarks");
  }
  const items5 = [tmp10Result, , , ];
  let tmp10Result3 = null;
  if (isForLaterExperimentOn) {
    const obj14 = { icon: null, label: null, onPress: null, arrow: true };
    const obj15 = { IconComponent: tmp(4795).ClockIcon };
    obj14.icon = closure_6(tmp(6620).ActionSheetRow.Icon, obj15);
    const intl6 = tmp(1115).intl;
    obj14.label = intl6.string(tmp(1115).t.aUXxzT);
    obj14.onPress = function onPress() {
      return closure_4(SavedMessagesTypes.SavedMessageSortTypes.REMINDER);
    };
    tmp10Result3 = closure_6(tmp(6620).ActionSheetRow, obj14, "reminders");
  }
  items5[1] = tmp10Result3;
  let tmp10Result4 = null;
  if (canUseScheduledMessages) {
    const obj16 = { icon: null, label: null, onPress: null, arrow: true };
    const obj17 = { IconComponent: tmp(11691).CalendarPlusIcon };
    obj16.icon = closure_6(tmp(6620).ActionSheetRow.Icon, obj17);
    const intl7 = tmp(1115).intl;
    obj16.label = intl7.string(tmp(1115).t.SZVs3K);
    obj16.onPress = callback;
    tmp10Result4 = closure_6(tmp(6620).ActionSheetRow, obj16, "scheduled-messages");
  }
  const obj18 = { hasIcons: true, children: null };
  items5[2] = tmp10Result4;
  const obj19 = { icon: null, label: null, onPress: null, arrow: true };
  const obj11 = { IconComponent: roleFilter(9067).BellIcon, source: everyoneFilter(16050) };
  obj19.icon = closure_6(roleFilter(6620).ActionSheetRow.Icon, { IconComponent: roleFilter(6798).SettingsIcon });
  const intl8 = tmp(1115).intl;
  obj19.label = intl8.string(roleFilter(1115).t.h850Ss);
  obj19.onPress = callback1;
  items5[3] = closure_6(roleFilter(6620).ActionSheetRow, obj19, "settings");
  obj18.children = items5;
  items4[1] = closure_7(roleFilter(6620).ActionSheetRow.Group, obj18);
  obj5.children = items4;
  return closure_7(roleFilter(6618).ActionSheet, obj5);
};