// discord_app/modules/conjure/projects/openConjureProject.tsx
import Constants from "../../../Constants.tsx";
import router_utils from "../../routing/router_utils.tsx";
import ChannelConstants from "../../channel/ChannelConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const result = size.fileFinishedImporting("modules/conjure/projects/openConjureProject.tsx");

export const openConjureProject = function openConjureProject(id, projectId) {
  let CHANNELResult;
  const transitionTo = router_utils.transitionTo;
  router_utils;
  if (null == projectId) {
    CHANNELResult = Routes.CHANNEL(id, StaticChannelRoute.CONJURE);
  } else {
    CHANNELResult = Routes.CHANNEL(id, StaticChannelRoute.CONJURE, projectId);
  }
  transitionTo(CHANNELResult);
};
