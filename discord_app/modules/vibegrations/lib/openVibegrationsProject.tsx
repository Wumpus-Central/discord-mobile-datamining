// === Module 12266: openVibegrationsProject ===

// Module 12266 (openVibegrationsProject)
import Constants from "Constants" /* 1085 */;
import router_utils from "router_utils" /* 1112 */;
import ChannelConstants from "ChannelConstants" /* 2058 */;
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