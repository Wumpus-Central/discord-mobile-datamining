// discord_app/modules/user_settings/defs/native/TypingIndicatorSetting.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import DismissibleContent from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import messagesProxyDefault from "../../../custom_typing_indicator/intl/CustomTypingIndicator.messages.js";
import apexExperiment from "../../../custom_typing_indicator/CustomTypingIndicatorExperiment.tsx";
import ChatDotsIcon from "../../../../design/components/Icon/native/redesign/generated/ChatDotsIcon.tsx";
import createDismissiblePremiumNewBadgeRouteProps from "DismissiblePremiumNewBadgeRouteProps.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { CustomTypingIndicatorEditScreen } from "../../../custom_typing_indicator/native/CustomTypingIndicatorEditScreen.tsx";

const dismissiblePremiumNewBadgeRouteProps = createDismissiblePremiumNewBadgeRouteProps.createDismissiblePremiumNewBadgeRouteProps(DismissibleContent.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE);
({ useTrailing, usePreNavigationAction } = dismissiblePremiumNewBadgeRouteProps);
const obj = {
  route: ME.UserSettingsSections.TYPING_INDICATOR,
  getComponent() {
    return CustomTypingIndicatorEditScreen /* CustomTypingIndicatorEditScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/TypingIndicatorSetting.tsx");

export default route;