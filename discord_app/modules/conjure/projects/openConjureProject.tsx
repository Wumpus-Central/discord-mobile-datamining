// === Module 13791: openConjureProject ===

// Module 13791 (openConjureProject)
import Constants from "Constants" /* 1071 */;
import router_utils from "router_utils" /* 1098 */;
import ChannelConstants from "ChannelConstants" /* 4769 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const result = size.fileFinishedImporting("modules/conjure/projects/openConjureProject.tsx");

export function openConjureProject(guildId, id) {
  const CONJURE_PROJECT = StaticChannelRoute.CONJURE_PROJECT;
  if (null == id) {
    let CHANNELResult = Routes.CHANNEL(guildId, CONJURE_PROJECT);
  } else {
    CHANNELResult = Routes.CHANNEL(guildId, CONJURE_PROJECT, id);
  }
  router_utils.transitionTo(CHANNELResult);
}