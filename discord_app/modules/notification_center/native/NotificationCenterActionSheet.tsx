// === Module 15663: NotificationCenterActionSheet ===

// Module 15663 (NotificationCenterActionSheet)
import noop from "noop" /* 19 */;
import findOrCreateMessageRecord from "findOrCreateMessageRecord" /* 5384 */;
import { UserSettingsSections } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;

const require = fn;
({ jsx: closure_6, jsxs: error } = jsxProd);
const result = require("obj132").fileFinishedImporting("modules/notification_center/native/NotificationCenterActionSheet.tsx");

export default function NotificationCenterActionSheet() {
  let obj = roleFilter(589);
  let items = [closure_4];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ everyoneFilter: lib.everyoneFilter, roleFilter: lib.roleFilter }));
  roleFilter = stateFromStoresObject.roleFilter;
  const everyoneFilter = stateFromStoresObject.everyoneFilter;
  const items1 = [everyoneFilter, roleFilter];
  dependencyMap = hasForLaterAccess.useCallback((arg0) => {
    everyoneFilter(15664);
    const obj = { roleFilter, everyoneFilter };
    const merged = Object.assign(arg0);
    obj.setGuildFilter(obj);
  }, items1);
  obj1 = roleFilter(8484);
  const isForLaterExperimentOn = obj1.useIsForLaterExperimentOn("NotificationCenterActionSheet");
  let obj2 = roleFilter(8484);
  hasForLaterAccess = obj2.useHasForLaterAccess("NotificationCenterActionSheet");
  const items2 = [hasForLaterAccess];
  closure_4 = hasForLaterAccess.useCallback((BOOKMARK) => {
    everyoneFilter(4342).hideActionSheet();
    if (hasForLaterAccess) {
      roleFilter(8488).showForLaterModal(BOOKMARK);
      const obj2 = roleFilter(8488);
    } else {
      const items = [everyoneFilter(7159).FOR_LATER_ROADBLOCK];
      everyoneFilter(8479)(roleFilter(8482).EntitlementFeatureNames.SAVED_MESSAGES, undefined, items);
      const tmpResult = everyoneFilter(8479);
    }
    const obj = everyoneFilter(4342);
  }, items2);
  const callback = hasForLaterAccess.useCallback(() => {
    let obj = everyoneFilter(4342);
    obj.hideActionSheet();
    obj = { screen: constants.NOTIFICATIONS };
    roleFilter(7360).openUserSettings(obj);
  }, []);
  obj = { title: null };
  const intl = roleFilter(1236).intl;
  obj[0] = intl.string(roleFilter(1236).t.HcoRu0);
  obj[1] = callback(roleFilter(6949).BottomSheetTitleHeader, obj);
  obj1 = { hasIcons: true, children: null };
  obj2 = {
    onValueChange() {
      return dependencyMap({ roleFilter: !roleFilter });
    },
    value: roleFilter,
    label: null,
    icon: null
  };
  const intl2 = roleFilter(1236).intl;
  obj2[2] = intl2.string(roleFilter(1236).t.asInft);
  obj2[3] = callback(roleFilter(7177).ActionSheetRow.Icon, { IconComponent: roleFilter(6885).AtIcon, source: everyoneFilter(11594) });
  const items3 = [callback(roleFilter(7177).ActionSheetSwitchRow, obj2), ];
  const obj4 = {
    onValueChange() {
      return dependencyMap({ everyoneFilter: !everyoneFilter });
    },
    value: everyoneFilter,
    label: null,
    subLabel: null,
    icon: null
  };
  const intl3 = roleFilter(1236).intl;
  obj4[2] = intl3.string(roleFilter(1236).t.S9GLtt);
  const intl4 = roleFilter(1236).intl;
  obj4[3] = intl4.string(roleFilter(1236).t.jYgZa4);
  const obj3 = { IconComponent: roleFilter(6885).AtIcon, source: everyoneFilter(11594) };
  obj4[4] = callback(roleFilter(7177).ActionSheetRow.Icon, { IconComponent: roleFilter(10003).BellIcon, source: everyoneFilter(15665) });
  items3[1] = callback(roleFilter(7177).ActionSheetSwitchRow, obj4);
  obj1[1] = items3;
  const items4 = [callback2(roleFilter(7177).ActionSheetRow.Group, obj1), ];
  let tmp8Result = null;
  if (isForLaterExperimentOn) {
    const obj6 = { icon: null, label: null, onPress: null, arrow: true };
    const obj7 = { IconComponent: null };
    obj7[0] = tmp(10876).BookmarkIcon;
    obj6[0] = tmp8(tmp(7177).ActionSheetRow.Icon, obj7);
    const intl5 = tmp(1236).intl;
    obj6[1] = intl5.string(tmp(1236).t["2pAkDA"]);
    obj6[2] = function onPress() {
      return lib(roleFilter(8489).SavedMessageSortTypes.BOOKMARK);
    };
    tmp8Result = tmp8(tmp(7177).ActionSheetRow, obj6, "bookmarks");
  }
  const items5 = [tmp8Result, , ];
  tmp8Result = null;
  if (isForLaterExperimentOn) {
    const obj8 = { icon: null, label: null, onPress: null, arrow: true };
    const obj9 = { IconComponent: null };
    obj9[0] = tmp(4338).ClockIcon;
    obj8[0] = tmp8(tmp(7177).ActionSheetRow.Icon, obj9);
    const intl6 = tmp(1236).intl;
    obj8[1] = intl6.string(tmp(1236).t.aUXxzT);
    obj8[2] = function onPress() {
      return lib(roleFilter(8489).SavedMessageSortTypes.REMINDER);
    };
    tmp8Result = tmp8(tmp(7177).ActionSheetRow, obj8, "reminders");
  }
  const obj10 = { hasIcons: true, children: null };
  items5[1] = tmp8Result;
  const obj11 = { icon: null, label: null, onPress: null, arrow: true };
  const obj5 = { IconComponent: roleFilter(10003).BellIcon, source: everyoneFilter(15665) };
  obj11[0] = callback(roleFilter(7177).ActionSheetRow.Icon, { IconComponent: roleFilter(7355).SettingsIcon });
  const intl7 = tmp(1236).intl;
  obj11[1] = intl7.string(roleFilter(1236).t.h850Ss);
  obj11[2] = callback;
  items5[2] = callback(roleFilter(7177).ActionSheetRow, obj11, "settings");
  obj10[1] = items5;
  items4[1] = callback2(roleFilter(7177).ActionSheetRow.Group, obj10);
  obj[2] = items4;
  return callback2(roleFilter(7175).ActionSheet, obj);
};