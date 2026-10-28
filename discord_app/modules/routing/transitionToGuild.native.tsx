// === Module 7485: transitionToGuild ===

// Module 7485 (transitionToGuild)
import router_utils from "router_utils" /* 1111 */;
import DeprecatedLayoutAnimation from "DeprecatedLayoutAnimation" /* 5631 */;
import getGuildTransitionRoute from "getGuildTransitionRoute" /* 7356 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const Routes = fn(1084).Routes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/routing/transitionToGuild.native.tsx");

export const transitionToGuild = function transitionToGuild(id, arg1) {
  const obj = getGuildTransitionRoute;
  const result = DeprecatedLayoutAnimation.DeprecatedLayoutAnimation({ duration: 0, create: "r", update: "k", delete: "mode" });
  const obj3 = router_utils;
  const obj4 = { navigationReplace: true };
  const merged = Object.assign(arg1);
  obj3.transitionTo(Routes.CHANNEL(id, _slicedToArray(obj.getGuildTransitionRoute(id), 1)[0]), obj4);
};