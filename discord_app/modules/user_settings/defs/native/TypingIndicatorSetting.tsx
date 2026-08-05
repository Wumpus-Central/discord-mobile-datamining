// discord_app/modules/user_settings/defs/native/TypingIndicatorSetting.tsx
import createDismissiblePremiumNewBadgeRouteProps from "createDismissiblePremiumNewBadgeRouteProps";
import createToggle from "createToggle";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { apexExperiment } from "../../../custom_typing_indicator/CustomTypingIndicatorExperiment.tsx";
import { messagesProxy } from "../../../custom_typing_indicator/intl/CustomTypingIndicator.messages.js";
import { CustomTypingIndicatorEditScreen } from "../../../custom_typing_indicator/native/CustomTypingIndicatorEditScreen.tsx";

let usePreNavigationAction;
let useTrailing;
const dismissiblePremiumNewBadgeRouteProps = createDismissiblePremiumNewBadgeRouteProps.createDismissiblePremiumNewBadgeRouteProps(require("DismissibleContent").DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE);
({ useTrailing, usePreNavigationAction } = dismissiblePremiumNewBadgeRouteProps);
obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxy["pT+BVM"]);
  },
  parent: null,
  IconComponent: require("ChatDotsIcon").ChatDotsIcon,
  useTrailing,
  usePreNavigationAction,
  usePredicate() {
    return "settings" === apexExperiment.useCustomTypingIndicatorConfig("TypingIndicatorSetting").entryPoint;
  },
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.TYPING_INDICATOR,
  getComponent() {
    return CustomTypingIndicatorEditScreen.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("DismissibleContent").fileFinishedImporting("modules/user_settings/defs/native/TypingIndicatorSetting.tsx");

export default route;