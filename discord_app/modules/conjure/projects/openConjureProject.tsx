// discord_app/modules/conjure/projects/openConjureProject.tsx
import Constants from "../../../Constants.tsx";
import router_utils from "../../routing/router_utils.tsx";
import ChannelConstants from "../../channel/ChannelConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
