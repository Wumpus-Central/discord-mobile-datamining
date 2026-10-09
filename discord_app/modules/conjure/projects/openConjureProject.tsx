// === Module 12297: openConjureProject ===

// Module 12297 (openConjureProject)
import Constants from "Constants" /* 1085 */;
import router_utils from "router_utils" /* 1112 */;
import ChannelConstants from "ChannelConstants" /* 2071 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const target = "target";
const result = size.fileFinishedImporting("modules/conjure/projects/openConjureProject.tsx");

export const CONJURE_TARGET_PARAM = "target";
export const openConjureProject = function openConjureProject(id, projectId) {
  if (null == projectId) {
    let CHANNELResult = Routes.CHANNEL(id, StaticChannelRoute.CONJURE);
  } else {
    CHANNELResult = Routes.CHANNEL(id, StaticChannelRoute.CONJURE, projectId);
  }
  router_utils.transitionTo(CHANNELResult);
};
export const openConjureForMe = function openConjureForMe(arg0) {
  const obj2 = { search: null };
  const obj = router_utils;
  const obj3 = { [closure_1_4]: "user" };
  const CHANNELResult = Routes.CHANNEL(arg0, StaticChannelRoute.CONJURE);
  obj2.search = new URLSearchParams(obj3).toString();
  obj.transitionTo(CHANNELResult, obj2);
};