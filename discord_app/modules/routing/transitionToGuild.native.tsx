// === Module 7522: transitionToGuild ===

// Module 7522 (transitionToGuild)
import router_utils from "router_utils" /* 1099 */;
import DeprecatedLayoutAnimation from "DeprecatedLayoutAnimation" /* 5609 */;
import getGuildTransitionRoute from "getGuildTransitionRoute" /* 7392 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const Routes = fn(1072).Routes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/routing/transitionToGuild.native.tsx");

export function transitionToGuild(id, arg1) {
  const obj = getGuildTransitionRoute;
  const result = DeprecatedLayoutAnimation.DeprecatedLayoutAnimation({ duration: 0, create: "r", update: "__closure", delete: "assign" });
  const obj3 = router_utils;
  const obj4 = { navigationReplace: true };
  const merged = Object.assign(arg1);
  obj3.transitionTo(Routes.CHANNEL(id, _slicedToArray(obj.getGuildTransitionRoute(id), 1)[0]), obj4);
}