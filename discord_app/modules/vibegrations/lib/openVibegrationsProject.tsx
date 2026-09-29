// === Module 16794: openVibegrationsProject ===

// Module 16794 (openVibegrationsProject)
import Constants from "Constants" /* 1074 */;
import router_utils from "router_utils" /* 1101 */;
import ChannelConstants from "ChannelConstants" /* 2052 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const result = size.fileFinishedImporting("modules/vibegrations/lib/openVibegrationsProject.tsx");

export const openVibegrationsProject = function openVibegrationsProject(id, projectId) {
  if (null == projectId) {
    let CHANNELResult = Routes.CHANNEL(id, StaticChannelRoute.VIBEGRATIONS);
  } else {
    CHANNELResult = Routes.CHANNEL(id, StaticChannelRoute.VIBEGRATIONS, projectId);
  }
  router_utils.transitionTo(CHANNELResult);
};