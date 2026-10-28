// === Module 11800: conjureStandaloneScenes ===

// Module 11800 (conjureStandaloneScenes)
import Constants from "Constants" /* 1084 */;
import router_utils from "router_utils" /* 1111 */;
import ChannelConstants from "ChannelConstants" /* 4863 */;
import size from "module_2" /* 2 */;

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