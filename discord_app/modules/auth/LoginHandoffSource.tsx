// discord_app/modules/auth/LoginHandoffSource.tsx
import { StaticChannelRoute } from "set";
import { UserSettingsPath } from "MAX_FAVORITES";

let obj = { ROLE_SUBSCRIPTION: "role_subscription", ROLE_SUBSCRIPTION_SETTING: "role_subscription_setting" };
const result = require("ME").fileFinishedImporting("modules/auth/LoginHandoffSource.tsx");

export const LoginHandoffSource = obj;
export const getLoginHandoffSourceFromRedirectTo = function getLoginHandoffSourceFromRedirectTo(closure_0) {
  const str = decodeURIComponent(closure_0);
  const obj = require("../links/LinkUtils.tsx") /* ME */;
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