// === Module 6845: transitionToGuild ===

// Module 6845 (transitionToGuild)
import router_utils from "router_utils" /* 1112 */;
import DeprecatedLayoutAnimation from "DeprecatedLayoutAnimation" /* 6473 */;
import getGuildTransitionRoute from "getGuildTransitionRoute" /* 6717 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const Routes = fn(1085).Routes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/routing/transitionToGuild.native.tsx");

export const transitionToGuild = function transitionToGuild(guildId, arg1) {
  const obj = getGuildTransitionRoute;
  const result = DeprecatedLayoutAnimation.DeprecatedLayoutAnimation({ duration: 0, create: "r", update: "emoji", delete: "toCharArray$esjava$1" });
  const obj3 = router_utils;
  const obj4 = { navigationReplace: true };
  const merged = Object.assign(arg1);
  obj3.transitionTo(Routes.CHANNEL(guildId, _slicedToArray(obj.getGuildTransitionRoute(guildId), 1)[0]), obj4);
};