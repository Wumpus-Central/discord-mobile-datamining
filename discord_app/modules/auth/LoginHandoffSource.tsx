// === Module 7283: LoginHandoffSource ===

// Module 7283 (LoginHandoffSource)
import obj132 from "obj132" /* 2 */;
import MAX_FAVORITES from "MAX_FAVORITES" /* 685 */;
import set from "set" /* 1398 */;
import ME from "ME" /* 4488 */;
import settingsPathToRoute from "settingsPathToRoute" /* 6725 */;

const StaticChannelRoute = set.StaticChannelRoute;
const UserSettingsPath = MAX_FAVORITES.UserSettingsPath;
let obj = { ROLE_SUBSCRIPTION: "role_subscription", ROLE_SUBSCRIPTION_SETTING: "role_subscription_setting" };
const result = obj132.fileFinishedImporting("modules/auth/LoginHandoffSource.tsx");

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
  tmpResult = settingsPathToRoute;
};