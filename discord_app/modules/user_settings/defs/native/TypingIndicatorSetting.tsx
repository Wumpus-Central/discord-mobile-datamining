// discord_app/modules/user_settings/defs/native/TypingIndicatorSetting.tsx
import Constants from "../../../../Constants.tsx";
import util from "../../../../intl/index.native.tsx";
import dismissible_content from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import _modDef3549 from "../../../custom_typing_indicator/intl/CustomTypingIndicator.messages.js";
import CustomTypingIndicatorExperiment from "../../../custom_typing_indicator/CustomTypingIndicatorExperiment.tsx";
import ChatDotsIcon from "../../../../design/components/Icon/native/redesign/generated/ChatDotsIcon.tsx";
import SettingRendererTypes from "../../../settings/native/renderer/SettingRendererTypes.tsx";
import DismissibleBadgeUtils from "DismissibleBadgeUtils.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const dismissibleBadgeRouteProps = DismissibleBadgeUtils.createDismissibleBadgeRouteProps(
  dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE,
);
({ useTrailing, usePreNavigationAction } = dismissibleBadgeRouteProps);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3549["pT+BVM"]);
  },
  parent: null,
  IconComponent: ChatDotsIcon.ChatDotsIcon,
  useTrailing,
  usePreNavigationAction,
  usePredicate() {
    return (
      "settings" === CustomTypingIndicatorExperiment.useCustomTypingIndicatorConfig("TypingIndicatorSetting").entryPoint
    );
  },
  screen: {
    route: Constants.UserSettingsSections.TYPING_INDICATOR,
    getComponent() {
      return require("CustomTypingIndicatorEditScreen").default;
    },
    usePersistentBadge() {
      return { badgeType: SettingRendererTypes.SettingsBadgeType.BETA };
    },
  },
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/TypingIndicatorSetting.tsx");

export default route;
