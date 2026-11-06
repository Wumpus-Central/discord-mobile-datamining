// discord_app/modules/conjure/projects/openConjureProject.tsx
import Constants from "../../../Constants.tsx";
import router_utils from "../../routing/router_utils.tsx";
import ChannelConstants from "../../channel/ChannelConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
