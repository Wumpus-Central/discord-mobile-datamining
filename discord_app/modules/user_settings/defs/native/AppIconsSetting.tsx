// discord_app/modules/user_settings/defs/native/AppIconsSetting.tsx
import Constants from "../../../../Constants.tsx";
import util from "../../../../intl/index.native.tsx";
import dismissible_content from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import AppIconUtils from "../../../app_icons/native/AppIconUtils.tsx";
import SettingsItemAppIconDefault from "../../../app_icons/native/SettingsItemAppIcon.tsx";
import DismissibleBadgeUtils from "DismissibleBadgeUtils.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const dismissibleBadgeRouteProps = DismissibleBadgeUtils.createDismissibleBadgeRouteProps(
  dismissible_content.DismissibleContent.CUSTOM_APP_ICONS_NEW_BADGE,
);
({ useTrailing, usePreNavigationAction } = dismissibleBadgeRouteProps);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.N4YDao);
  },
  parent: null,
  IconComponent: SettingsItemAppIconDefault,
  useTrailing,
  usePreNavigationAction,
  usePredicate() {
    return AppIconUtils.isAppIconsSupported();
  },
  screen: {
    route: Constants.UserSettingsSections.APP_ICONS,
    getComponent() {
      return require("UserSettingsAppIcons").default;
    },
  },
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AppIconsSetting.tsx");

export default route;
