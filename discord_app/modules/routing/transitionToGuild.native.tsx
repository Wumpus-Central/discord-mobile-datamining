// === Module 7594: transitionToGuild ===

// Module 7594 (transitionToGuild)
import router_utils from "router_utils" /* 1099 */;
import getGuildTransitionRoute from "getGuildTransitionRoute" /* 7452 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const Routes = fn(1072).Routes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/routing/transitionToGuild.native.tsx");

export function transitionToGuild(id, arg1) {
  const obj = getGuildTransitionRoute;
  const obj2 = router_utils;
  const obj3 = { navigationReplace: true };
  const merged = Object.assign(arg1);
  obj2.transitionTo(Routes.CHANNEL(id, _slicedToArray(obj.getGuildTransitionRoute(id), 1)[0]), obj3);
}