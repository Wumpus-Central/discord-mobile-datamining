// === Module 13243: openConjureProject ===

// Module 13243 (openConjureProject)
import Constants from "Constants" /* 1072 */;
import router_utils from "router_utils" /* 1099 */;
import ChannelConstants from "ChannelConstants" /* 4998 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const result = size.fileFinishedImporting("modules/conjure/projects/openConjureProject.tsx");

export function openConjureProject(guildId, id) {
  if (null == id) {
    let CHANNELResult = Routes.CHANNEL(guildId, StaticChannelRoute.CONJURE);
  } else {
    CHANNELResult = Routes.CHANNEL(guildId, StaticChannelRoute.CONJURE, id);
  }
  router_utils.transitionTo(CHANNELResult);
}