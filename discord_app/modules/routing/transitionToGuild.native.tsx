// === Module 6947: transitionToGuild ===

// Module 6947 (transitionToGuild)
import router_utils from "router_utils" /* 1101 */;
import DeprecatedLayoutAnimation from "DeprecatedLayoutAnimation" /* 6079 */;
import getGuildTransitionRoute from "getGuildTransitionRoute" /* 6824 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const Routes = fn(1074).Routes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/routing/transitionToGuild.native.tsx");

export const transitionToGuild = function transitionToGuild(guildId, arg1) {
  const obj = getGuildTransitionRoute;
  const result = DeprecatedLayoutAnimation.DeprecatedLayoutAnimation({ duration: 0, create: "r", update: "channelId", delete: "result" });
  const obj3 = router_utils;
  const obj4 = { navigationReplace: true };
  const merged = Object.assign(arg1);
  obj3.transitionTo(Routes.CHANNEL(guildId, _slicedToArray(obj.getGuildTransitionRoute(guildId), 1)[0]), obj4);
};