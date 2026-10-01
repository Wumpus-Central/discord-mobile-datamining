// === Module 12309: openVibegrationsProject ===

// Module 12309 (openVibegrationsProject)
import Constants from "Constants" /* 1074 */;
import router_utils from "router_utils" /* 1101 */;
import ChannelConstants from "ChannelConstants" /* 2051 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const result = size.fileFinishedImporting("modules/vibegrations/lib/openVibegrationsProject.tsx");

export const openVibegrationsProject = function openVibegrationsProject(id, id2) {
  if (null == id2) {
    let CHANNELResult = Routes.CHANNEL(id, StaticChannelRoute.VIBEGRATIONS);
  } else {
    CHANNELResult = Routes.CHANNEL(id, StaticChannelRoute.VIBEGRATIONS, id2);
  }
  router_utils.transitionTo(CHANNELResult);
};