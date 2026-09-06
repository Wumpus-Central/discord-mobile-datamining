// discord_app/modules/auth/LoginHandoffSource.tsx
import UserSettingsConstants from "../user_settings/UserSettingsConstants.tsx";
import ChannelConstants from "../channel/ChannelConstants.tsx";
import LinkUtils from "../links/LinkUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const UserSettingsPath = UserSettingsConstants.UserSettingsPath;
const LoginHandoffSource = {
  ROLE_SUBSCRIPTION: "role_subscription",
  ROLE_SUBSCRIPTION_SETTING: "role_subscription_setting",
};
const result = size.fileFinishedImporting("modules/auth/LoginHandoffSource.tsx");

export { LoginHandoffSource };
export const getLoginHandoffSourceFromRedirectTo = function getLoginHandoffSourceFromRedirectTo(arg0) {
  const str = decodeURIComponent(arg0);
  const obj = LinkUtils;
  const tryParseChannelPathResult = obj.tryParseChannelPath(str);
  if (null != tryParseChannelPathResult) {
    if (tryParseChannelPathResult.channelId === StaticChannelRoute.ROLE_SUBSCRIPTIONS) {
      let ROLE_SUBSCRIPTION_SETTING = obj.ROLE_SUBSCRIPTION;
    }
    return ROLE_SUBSCRIPTION_SETTING;
  }
  const formatted = str.toLowerCase();
  if (formatted === tmpResult.settingsPathToRoute(UserSettingsPath.SUBSCRIPTIONS_ROLE_SUBSCRIPTIONS)) {
    ROLE_SUBSCRIPTION_SETTING = obj.ROLE_SUBSCRIPTION_SETTING;
  }
};
