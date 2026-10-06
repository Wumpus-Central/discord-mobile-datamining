// discord_app/modules/user_settings/defs/native/TypingIndicatorSetting.tsx
import Constants from "../../../../Constants.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import dismissible_content from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import _modDef3755 from "../../../custom_typing_indicator/intl/CustomTypingIndicator.messages.js";
import CustomTypingIndicatorExperiment from "../../../custom_typing_indicator/CustomTypingIndicatorExperiment.tsx";
import ChatDotsIcon from "../../../../design/components/Icon/native/redesign/generated/ChatDotsIcon.tsx";
import DismissibleBadgeUtils from "DismissibleBadgeUtils.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

let usePreNavigationAction;
let useTrailing;
const UserSettingsSections = Constants.UserSettingsSections;
const dismissibleBadgeRouteProps = DismissibleBadgeUtils.createDismissibleBadgeRouteProps(
  dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE,
);
({ useTrailing, usePreNavigationAction } = dismissibleBadgeRouteProps);
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3755["pT+BVM"]);
  },
  parent: null,
  IconComponent: ChatDotsIcon.ChatDotsIcon,
  useTrailing,
  usePreNavigationAction,
  usePredicate() {
    const obj = CustomTypingIndicatorExperiment;
    return "settings" === obj.useCustomTypingIndicatorConfig("TypingIndicatorSetting").entryPoint;
  },
  screen: {
    route: UserSettingsSections.TYPING_INDICATOR,
    getComponent() {
      return require("CustomTypingIndicatorEditScreen").default;
    },
  },
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/TypingIndicatorSetting.tsx");

export default route;
