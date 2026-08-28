// === Module 15054: dismissiblePremiumNewBadgeRouteProps ===

// Module 15054 (dismissiblePremiumNewBadgeRouteProps)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import DismissibleContent from "DismissibleContent" /* 1377 */;
import fetchCurrentAppIcon from "fetchCurrentAppIcon" /* 12957 */;
import SettingsItemAppIconDefault from "SettingsItemAppIcon" /* 15055 */;
import createDismissiblePremiumNewBadgeRouteProps from "createDismissiblePremiumNewBadgeRouteProps" /* 14885 */;
import createToggle from "createToggle" /* 11006 */;

const dismissiblePremiumNewBadgeRouteProps = createDismissiblePremiumNewBadgeRouteProps.createDismissiblePremiumNewBadgeRouteProps(DismissibleContent.DismissibleContent.CUSTOM_APP_ICONS_NEW_BADGE);
({ useTrailing, usePreNavigationAction } = dismissiblePremiumNewBadgeRouteProps);
obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.N4YDao);
  },
  parent: null,
  IconComponent: SettingsItemAppIconDefault,
  useTrailing,
  usePreNavigationAction,
  usePredicate() {
    return fetchCurrentAppIcon.isAppIconsSupported();
  },
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.APP_ICONS,
  getComponent() {
    return require(15057).default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AppIconsSetting.tsx");

export default route;