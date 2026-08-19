// discord_app/modules/user_settings/defs/native/AppIconsSetting.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import DismissibleContent from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import fetchCurrentAppIcon from "../../../app_icons/native/AppIconUtils.tsx";
import SettingsItemAppIconDefault from "../../../app_icons/native/SettingsItemAppIcon.tsx";
import createDismissiblePremiumNewBadgeRouteProps from "DismissiblePremiumNewBadgeRouteProps.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

const dismissiblePremiumNewBadgeRouteProps = createDismissiblePremiumNewBadgeRouteProps.createDismissiblePremiumNewBadgeRouteProps(DismissibleContent.DismissibleContent.CUSTOM_APP_ICONS_NEW_BADGE);
({ useTrailing, usePreNavigationAction } = dismissiblePremiumNewBadgeRouteProps);
const obj = {
  route: ME.UserSettingsSections.APP_ICONS,
  getComponent() {
    return require("../../app_icon/native/UserSettingsAppIcons.tsx").default;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/AppIconsSetting.tsx");

export default route;