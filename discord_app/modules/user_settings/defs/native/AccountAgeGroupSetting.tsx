// === Module 14715: route ===

// Module 14715 (route)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import ThemesDefault from "Themes" /* 576 */;
import ME from "ME" /* 1074 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import DismissibleContent from "DismissibleContent" /* 1943 */;
import TableRowInner from "TableRowInner" /* 5605 */;
import MobileUserSettings from "MobileUserSettings" /* 7975 */;
import useIsTinyBroncoSettingsEnabled from "useIsTinyBroncoSettingsEnabled" /* 14682 */;
import AgeGroupState from "AgeGroupState" /* 14716 */;
import isTinyBroncoAnnouncementCountry from "isTinyBroncoAnnouncementCountry" /* 14717 */;
import DismissiblePremiumNewBadgeDefault from "DismissiblePremiumNewBadge" /* 14718 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;
import createToggle from "createToggle" /* 11468 */;
import useAlwaysShow from "useAlwaysShow" /* 14719 */;

const View = get_ActivityIndicator.View;
({ jsx: c4, jsxs: c5 } = jsxProd);
let obj = { trailing: { flexDirection: "row", alignItems: "center", flexShrink: 1 }, badge: null };
obj = { marginLeft: 0, marginRight: ThemesDefault.space.PX_4 };
obj[1] = obj;
let closure_6 = createCacheKey.createStyles(obj);
const obj1 = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.piqs0o);
  },
  parent: MobileUserSettings.MobileUserSettings.ACCOUNT,
  useTrailing: function useAccountAgeGroupTrailing() {
    const tmp = callback2();
    let obj = AgeGroupState;
    const ageGroupValueLabel = obj.useAgeGroupValueLabel();
    const shouldShowTinyBroncoAccountStatus = isTinyBroncoAnnouncementCountry.useShouldShowTinyBroncoAccountStatus();
    obj = { style: tmp.trailing, children: null };
    let tmp8 = shouldShowTinyBroncoAccountStatus;
    if (shouldShowTinyBroncoAccountStatus) {
      obj = { dismissibleContent: null, containerStyle: null, noGradient: true };
      obj[0] = tmp2(1943).DismissibleContent.TINY_BRONCO_SETTINGS;
      obj[1] = tmp.badge;
      tmp8 = callback(DismissiblePremiumNewBadgeDefault, obj);
      const tmp11 = DismissiblePremiumNewBadgeDefault;
    }
    const items = [tmp8, callback(TableRowInner.TableRow.TrailingText, { text: ageGroupValueLabel })];
    obj[1] = items;
    return closure_5(View, obj);
  },
  usePreNavigationAction: null,
  usePredicate: null,
  screen: null
};
obj1[3] = useAlwaysShow.createDismissibleBadgePreNavigationAction(DismissibleContent.DismissibleContent.TINY_BRONCO_SETTINGS, isTinyBroncoAnnouncementCountry.useShouldShowTinyBroncoAccountStatus);
obj1[4] = useIsTinyBroncoSettingsEnabled.useIsTinyBroncoSettingsEnabled;
obj1[5] = {
  route: ME.UserSettingsSections.AGE_GROUP,
  getComponent() {
    return require(14720) /* SettingsAgeGroupHeader */.default;
  }
};
const route = createToggle.createRoute(obj1);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupSetting.tsx");

export default route;