// === Module 7398: transitionToGuild ===

// Module 7398 (transitionToGuild)
import router_utils from "router_utils" /* 1114 */;
import DeprecatedLayoutAnimation from "DeprecatedLayoutAnimation" /* 5556 */;
import getGuildTransitionRoute from "getGuildTransitionRoute" /* 7269 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const Routes = fn(1087).Routes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/routing/transitionToGuild.native.tsx");

export const transitionToGuild = function transitionToGuild(id, arg1) {
  const obj = getGuildTransitionRoute;
  const result = DeprecatedLayoutAnimation.DeprecatedLayoutAnimation({ duration: 0, create: "r", update: "__packager_asset", delete: "displayName" });
  const obj3 = router_utils;
  const obj4 = { navigationReplace: true };
  const merged = Object.assign(arg1);
  obj3.transitionTo(Routes.CHANNEL(id, _slicedToArray(obj.getGuildTransitionRoute(id), 1)[0]), obj4);
};