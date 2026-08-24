// discord_app/modules/auth/LoginHandoffSource.tsx
import set from "../../../_runtime/00002_set.js";
import MAX_FAVORITES from "../user_settings/UserSettingsConstants.tsx";
import set2 from "../channel/ChannelConstants.tsx";
import ME from "../links/LinkUtils.tsx";

const StaticChannelRoute = set2.StaticChannelRoute;
const UserSettingsPath = MAX_FAVORITES.UserSettingsPath;
let obj = { ROLE_SUBSCRIPTION: "role_subscription", ROLE_SUBSCRIPTION_SETTING: "role_subscription_setting" };
const result = set.fileFinishedImporting("modules/auth/LoginHandoffSource.tsx");

export const LoginHandoffSource = obj;
export const getLoginHandoffSourceFromRedirectTo = function getLoginHandoffSourceFromRedirectTo(closure_0) {
  const str = decodeURIComponent(closure_0);
  obj = ME;
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