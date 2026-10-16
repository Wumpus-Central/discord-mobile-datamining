// discord_app/modules/conjure/builder/native/conjureStandaloneScenes.tsx
import Constants from "../../../../Constants.tsx";
import router_utils from "../../../routing/router_utils.tsx";
import ChannelConstants from "../../../channel/ChannelConstants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const result = size.fileFinishedImporting("modules/conjure/builder/native/conjureStandaloneScenes.tsx");

export const ConjureScreenScenes = { PROJECTS: "PROJECTS", CHAT: "CHAT", DEBUG: "DEBUG" };
export function projectOpener(guildId, U) {
  closure_0 = guildId;
  return (arg0, arg1) => {
    if (arg1 === closure_0) {
      U(arg0);
    } else {
      router_utils.transitionTo(Routes.CHANNEL(arg1, StaticChannelRoute.CONJURE, arg0));
    }
  };
}
