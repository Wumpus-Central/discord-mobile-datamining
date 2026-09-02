// === Module 16226: NotificationCenterActionSheet ===

// Module 16226 (NotificationCenterActionSheet)
import closure_3 from "noop" /* 19 */;
import closure_4 from "findOrCreateMessageRecord" /* 7391 */;
import { UserSettingsSections } from "ME" /* 673 */;
import jsxProd from "jsxProd" /* 21 */;

const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
let result = require("set").fileFinishedImporting("modules/notification_center/native/NotificationCenterActionSheet.tsx");

export default function NotificationCenterActionSheet() {
  let obj = roleFilter(586);
  let items = [closure_4];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ everyoneFilter: lib.everyoneFilter, roleFilter: lib.roleFilter }));
  roleFilter = stateFromStoresObject.roleFilter;
  const everyoneFilter = stateFromStoresObject.everyoneFilter;
  const items1 = [everyoneFilter, roleFilter];
  dependencyMap = hasForLaterAccess.useCallback((arg0) => {
    let obj = everyoneFilter(16227);
    obj = { roleFilter, everyoneFilter };
    const merged = Object.assign(arg0);
    obj.setGuildFilter(obj);
  }, items1);
  obj1 = roleFilter(7609);
  const isForLaterExperimentOn = obj1.useIsForLaterExperimentOn("NotificationCenterActionSheet");
  let obj2 = roleFilter(7609);
  hasForLaterAccess = obj2.useHasForLaterAccess("NotificationCenterActionSheet");
  const items2 = [hasForLaterAccess];
  closure_4 = hasForLaterAccess.useCallback((BOOKMARK) => {
    everyoneFilter(4445).hideActionSheet();
    if (hasForLaterAccess) {
      roleFilter(7613).showForLaterModal(BOOKMARK);
      const obj2 = roleFilter(7613);
    } else {
      const items = [tmp(5981).FOR_LATER_ROADBLOCK];
      tmp(7604)(roleFilter(7607).EntitlementFeatureNames.SAVED_MESSAGES, undefined, items);
      const tmpResult = tmp(7604);
    }
  }, items2);
  let obj3 = roleFilter(7599);
  const canUseScheduledMessages = obj3.useCanUseScheduledMessages();
  const callback = hasForLaterAccess.useCallback(() => {
    everyoneFilter(4445).hideActionSheet();
    const obj = everyoneFilter(4445);
    const result = roleFilter(12001).showScheduledMessagesModal();
  }, []);
  const callback1 = hasForLaterAccess.useCallback(() => {
    let obj = everyoneFilter(4445);
    obj.hideActionSheet();
    obj = { screen: constants.NOTIFICATIONS };
    roleFilter(6254).openUserSettings(obj);
  }, []);
  obj = { showGradient: true, header: null, children: null };
  obj = { title: null };
  const intl = roleFilter(1233).intl;
  obj[0] = intl.string(roleFilter(1233).t.HcoRu0);
  obj[1] = callback(roleFilter(5629).BottomSheetTitleHeader, obj);
  obj1 = { hasIcons: true, children: null };
  obj2 = {
    onValueChange() {
      return dependencyMap({ roleFilter: !roleFilter });
    },
    value: roleFilter,
    label: null,
    icon: null
  };
  const intl2 = roleFilter(1233).intl;
  obj2[2] = intl2.string(roleFilter(1233).t.asInft);
  obj3 = { IconComponent: roleFilter(5043).AtIcon, source: everyoneFilter(12215) };
  obj2[3] = callback(roleFilter(5999).ActionSheetRow.Icon, obj3);
  const items3 = [callback(roleFilter(5999).ActionSheetSwitchRow, obj2), ];
  const obj4 = {
    onValueChange() {
      return dependencyMap({ everyoneFilter: !everyoneFilter });
    },
    value: everyoneFilter,
    label: null,
    subLabel: null,
    icon: null
  };
  const intl3 = roleFilter(1233).intl;
  obj4[2] = intl3.string(roleFilter(1233).t.S9GLtt);
  const intl4 = roleFilter(1233).intl;
  obj4[3] = intl4.string(roleFilter(1233).t.jYgZa4);
  obj4[4] = callback(roleFilter(5999).ActionSheetRow.Icon, { IconComponent: roleFilter(9768).BellIcon, source: everyoneFilter(16228) });
  items3[1] = callback(roleFilter(5999).ActionSheetSwitchRow, obj4);
  obj1[1] = items3;
  const items4 = [callback2(roleFilter(5999).ActionSheetRow.Group, obj1), ];
  let tmp10Result = null;
  if (isForLaterExperimentOn) {
    const obj6 = { icon: null, label: null, onPress: null, arrow: true };
    const obj7 = { IconComponent: null };
    obj7[0] = tmp(11513).BookmarkIcon;
    obj6[0] = tmp10(tmp(5999).ActionSheetRow.Icon, obj7);
    const intl5 = tmp(1233).intl;
    obj6[1] = intl5.string(tmp(1233).t["2pAkDA"]);
    obj6[2] = function onPress() {
      return lib(roleFilter(7614).SavedMessageSortTypes.BOOKMARK);
    };
    tmp10Result = tmp10(tmp(5999).ActionSheetRow, obj6, "bookmarks");
  }
  const items5 = [tmp10Result, , , ];
  tmp10Result = null;
  if (isForLaterExperimentOn) {
    const obj8 = { icon: null, label: null, onPress: null, arrow: true };
    const obj9 = { IconComponent: null };
    obj9[0] = tmp(4441).ClockIcon;
    obj8[0] = tmp10(tmp(5999).ActionSheetRow.Icon, obj9);
    const intl6 = tmp(1233).intl;
    obj8[1] = intl6.string(tmp(1233).t.aUXxzT);
    obj8[2] = function onPress() {
      return lib(roleFilter(7614).SavedMessageSortTypes.REMINDER);
    };
    tmp10Result = tmp10(tmp(5999).ActionSheetRow, obj8, "reminders");
  }
  items5[1] = tmp10Result;
  let tmp10Result1 = null;
  if (canUseScheduledMessages) {
    const obj10 = { icon: null, label: null, onPress: null, arrow: true };
    const obj11 = { IconComponent: null };
    obj11[0] = tmp(11999).CalendarPlusIcon;
    obj10[0] = tmp10(tmp(5999).ActionSheetRow.Icon, obj11);
    const intl7 = tmp(1233).intl;
    obj10[1] = intl7.string(tmp(1233).t.SZVs3K);
    obj10[2] = callback;
    tmp10Result1 = tmp10(tmp(5999).ActionSheetRow, obj10, "scheduled-messages");
  }
  const obj12 = { hasIcons: true, children: null };
  items5[2] = tmp10Result1;
  const obj13 = { icon: null, label: null, onPress: null, arrow: true };
  const obj5 = { IconComponent: roleFilter(9768).BellIcon, source: everyoneFilter(16228) };
  obj13[0] = callback(roleFilter(5999).ActionSheetRow.Icon, { IconComponent: roleFilter(6249).SettingsIcon });
  const intl8 = tmp(1233).intl;
  obj13[1] = intl8.string(roleFilter(1233).t.h850Ss);
  obj13[2] = callback1;
  items5[3] = callback(roleFilter(5999).ActionSheetRow, obj13, "settings");
  obj12[1] = items5;
  items4[1] = callback2(roleFilter(5999).ActionSheetRow.Group, obj12);
  obj[2] = items4;
  return callback2(roleFilter(5997).ActionSheet, obj);
};