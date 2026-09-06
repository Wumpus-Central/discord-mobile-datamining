// === Module 7342: transitionToGuild ===

// Module 7342 (transitionToGuild)
import Constants from "Constants" /* 1074 */;
import router_utils from "router_utils" /* 1100 */;
import DeprecatedLayoutAnimation from "DeprecatedLayoutAnimation" /* 5581 */;
import getChannelIdForGuildTransition from "getChannelIdForGuildTransition" /* 7217 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
let result = size.fileFinishedImporting("modules/routing/transitionToGuild.native.tsx");

export const transitionToGuild = function transitionToGuild(guildId, arg1) {
  let obj = getChannelIdForGuildTransition;
  const channelIdForGuildTransition = obj.getChannelIdForGuildTransition(guildId);
  const result = DeprecatedLayoutAnimation.DeprecatedLayoutAnimation({ duration: 0, create: "r", update: "WireType", delete: "isArray" });
  obj = { navigationReplace: true };
  const obj3 = router_utils;
  const merged = Object.assign(arg1);
  obj3.transitionTo(Routes.CHANNEL(guildId, channelIdForGuildTransition), obj);
};