// === Module 14831: dismissiblePremiumNewBadgeRouteProps ===

// Module 14831 (dismissiblePremiumNewBadgeRouteProps)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import DismissibleContent from "DismissibleContent" /* 1377 */;
import fetchCurrentAppIcon from "fetchCurrentAppIcon" /* 7945 */;
import SettingsItemAppIconDefault from "SettingsItemAppIcon" /* 14832 */;
import createDismissiblePremiumNewBadgeRouteProps from "createDismissiblePremiumNewBadgeRouteProps" /* 14702 */;
import createToggle from "createToggle" /* 10669 */;

const dismissiblePremiumNewBadgeRouteProps = createDismissiblePremiumNewBadgeRouteProps.createDismissiblePremiumNewBadgeRouteProps(DismissibleContent.DismissibleContent.CUSTOM_APP_ICONS_NEW_BADGE);
({ useTrailing, usePreNavigationAction } = dismissiblePremiumNewBadgeRouteProps);
const obj = {
  route: ME.UserSettingsSections.APP_ICONS,
  getComponent() {
    return require(14834).default;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/AppIconsSetting.tsx");

export default route;