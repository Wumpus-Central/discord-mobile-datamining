// === Module 16540: TypingIndicatorSetting ===

// Module 16540 (TypingIndicatorSetting)
import Constants from "Constants" /* 1087 */;
import util from "util" /* 1128 */;
import _modDef3832 from "module_3832" /* 3832 */;
import dismissible_content from "dismissible_content" /* 4805 */;
import CustomTypingIndicatorExperiment from "CustomTypingIndicatorExperiment" /* 12949 */;
import ChatDotsIcon from "ChatDotsIcon" /* 16541 */;
import DismissibleBadgeUtils from "DismissibleBadgeUtils" /* 15892 */;
import SettingBuilders from "SettingBuilders" /* 11155 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const dismissibleBadgeRouteProps = DismissibleBadgeUtils.createDismissibleBadgeRouteProps(dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE);
({ useTrailing, usePreNavigationAction } = dismissibleBadgeRouteProps);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3832["pT+BVM"]);
  },
  parent: null,
  IconComponent: ChatDotsIcon.ChatDotsIcon,
  useTrailing,
  usePreNavigationAction,
  usePredicate() {
    return "settings" === CustomTypingIndicatorExperiment.useCustomTypingIndicatorConfig("TypingIndicatorSetting").entryPoint;
  },
  screen: {
    route: Constants.UserSettingsSections.TYPING_INDICATOR,
    getComponent() {
      return require("CustomTypingIndicatorEditScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/TypingIndicatorSetting.tsx");

export default route;