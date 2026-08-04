// discord_app/modules/notification_center/native/NotificationCenterActionSheet.tsx
import registerAsset from "registerAsset";
import findOrCreateMessageRecord from "findOrCreateMessageRecord";
import { UserSettingsSections } from "ME";
import jsxProd from "SavedMessageSortTypes";

let closure_6;
let error;
const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
const result = require("ME").fileFinishedImporting("modules/notification_center/native/NotificationCenterActionSheet.tsx");

export default function NotificationCenterActionSheet() {
  let obj = roleFilter(589);
  const items = [findOrCreateMessageRecord];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ everyoneFilter: lib.everyoneFilter, roleFilter: lib.roleFilter }));
  roleFilter = stateFromStoresObject.roleFilter;
  const everyoneFilter = stateFromStoresObject.everyoneFilter;
  const items1 = [everyoneFilter, roleFilter];
  const dependencyMap = hasForLaterAccess.useCallback((arg0) => {
    let obj = everyoneFilter(15300);
    obj = { roleFilter, everyoneFilter };
    const merged = Object.assign(arg0);
    obj.setGuildFilter(obj);
  }, items1);
  let obj1 = roleFilter(9567);
  const isForLaterExperimentOn = obj1.useIsForLaterExperimentOn("NotificationCenterActionSheet");
  let obj2 = roleFilter(9567);
  hasForLaterAccess = obj2.useHasForLaterAccess("NotificationCenterActionSheet");
  const items2 = [hasForLaterAccess];
  findOrCreateMessageRecord = hasForLaterAccess.useCallback((BOOKMARK) => {
    everyoneFilter(4161).hideActionSheet();
    if (hasForLaterAccess) {
      roleFilter(9949).showForLaterModal(BOOKMARK);
      const obj2 = roleFilter(9949);
    } else {
      everyoneFilter(6202)(roleFilter(6204).EntitlementFeatureNames.SAVED_MESSAGES);
      const tmpResult = everyoneFilter(6202);
    }
  }, items2);
  const callback = hasForLaterAccess.useCallback(() => {
    let obj = everyoneFilter(4161);
    obj.hideActionSheet();
    obj = { screen: constants.NOTIFICATIONS };
    roleFilter(6614).openUserSettings(obj);
  }, []);
  obj = { showGradient: true, header: null, children: null };
  obj = { title: null };
  const intl = roleFilter(1236).intl;
  obj[0] = intl.string(roleFilter(1236).t.HcoRu0);
  obj[1] = callback(roleFilter(5246).BottomSheetTitleHeader, obj);
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
  const obj3 = { IconComponent: null, source: null };
  obj3[0] = roleFilter(4708).AtIcon;
  obj3[1] = everyoneFilter(10404);
  obj2[3] = callback(roleFilter(5557).ActionSheetRow.Icon, obj3);
  const items3 = [callback(roleFilter(5557).ActionSheetSwitchRow, obj2), ];
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
  const obj5 = { IconComponent: null, source: null };
  obj5[0] = roleFilter(10243).BellIcon;
  obj5[1] = everyoneFilter(15301);
  obj4[4] = callback(roleFilter(5557).ActionSheetRow.Icon, obj5);
  items3[1] = callback(roleFilter(5557).ActionSheetSwitchRow, obj4);
  obj1[1] = items3;
  const items4 = [callback2(roleFilter(5557).ActionSheetRow.Group, obj1), ];
  let tmp8Result = null;
  if (isForLaterExperimentOn) {
    const obj6 = { icon: null, label: null, onPress: null, arrow: true };
    const obj7 = { IconComponent: null };
    obj7[0] = tmp(9968).BookmarkIcon;
    obj6[0] = tmp8(tmp(5557).ActionSheetRow.Icon, obj7);
    const intl5 = tmp(1236).intl;
    obj6[1] = intl5.string(tmp(1236).t["2pAkDA"]);
    obj6[2] = function onPress() {
      return lib(roleFilter(9565).SavedMessageSortTypes.BOOKMARK);
    };
    tmp8Result = tmp8(tmp(5557).ActionSheetRow, obj6, "bookmarks");
  }
  const items5 = [tmp8Result, , ];
  tmp8Result = null;
  if (isForLaterExperimentOn) {
    const obj8 = { icon: null, label: null, onPress: null, arrow: true };
    const obj9 = { IconComponent: null };
    obj9[0] = tmp(4157).ClockIcon;
    obj8[0] = tmp8(tmp(5557).ActionSheetRow.Icon, obj9);
    const intl6 = tmp(1236).intl;
    obj8[1] = intl6.string(tmp(1236).t.aUXxzT);
    obj8[2] = function onPress() {
      return lib(roleFilter(9565).SavedMessageSortTypes.REMINDER);
    };
    tmp8Result = tmp8(tmp(5557).ActionSheetRow, obj8, "reminders");
  }
  const obj10 = { hasIcons: true, children: null };
  items5[1] = tmp8Result;
  const obj11 = { icon: null, label: null, onPress: null, arrow: true };
  const obj12 = { IconComponent: null };
  obj12[0] = roleFilter(9020).SettingsIcon;
  obj11[0] = callback(roleFilter(5557).ActionSheetRow.Icon, obj12);
  const intl7 = tmp(1236).intl;
  obj11[1] = intl7.string(roleFilter(1236).t.h850Ss);
  obj11[2] = callback;
  items5[2] = callback(roleFilter(5557).ActionSheetRow, obj11, "settings");
  obj10[1] = items5;
  items4[1] = callback2(roleFilter(5557).ActionSheetRow.Group, obj10);
  obj[2] = items4;
  return callback2(roleFilter(5555).ActionSheet, obj);
};