// === Module 6173: LoginHandoffSource ===

// Module 6173 (LoginHandoffSource)
import set from "set" /* 2 */;
import MAX_FAVORITES from "MAX_FAVORITES" /* 682 */;
import set2 from "set" /* 1393 */;
import ME from "ME" /* 4675 */;

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