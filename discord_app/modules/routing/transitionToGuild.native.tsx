// === Module 6845: transitionToGuild ===

// Module 6845 (transitionToGuild)
import Constants from "Constants" /* 1085 */;
import router_utils from "router_utils" /* 1112 */;
import DeprecatedLayoutAnimation from "DeprecatedLayoutAnimation" /* 6473 */;
import getGuildTransitionRoute from "getGuildTransitionRoute" /* 6717 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
let result = size.fileFinishedImporting("modules/routing/transitionToGuild.native.tsx");

export const transitionToGuild = function transitionToGuild(id, arg1) {
  const obj = getGuildTransitionRoute;
  const first = _slicedToArray(obj.getGuildTransitionRoute(id), 1)[0];
  const obj2 = DeprecatedLayoutAnimation;
  const result = obj2.DeprecatedLayoutAnimation({ duration: 0, create: "r", update: "enabled", delete: "toCharArray$esjava$1" });
  const transitionTo = router_utils.transitionTo;
  const obj3 = { navigationReplace: true };
  router_utils;
  const CHANNELResult = Routes.CHANNEL(id, first);
  const merged = Object.assign(arg1);
  transitionTo(CHANNELResult, obj3);
};