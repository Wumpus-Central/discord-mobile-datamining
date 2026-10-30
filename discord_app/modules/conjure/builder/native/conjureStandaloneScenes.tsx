// === Module 12047: conjureStandaloneScenes ===

// Module 12047 (conjureStandaloneScenes)
import Constants from "Constants" /* 1072 */;
import router_utils from "router_utils" /* 1100 */;
import ChannelConstants from "ChannelConstants" /* 4865 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const result = size.fileFinishedImporting("modules/conjure/builder/native/conjureStandaloneScenes.tsx");

export const ConjureScreenScenes = { PROJECTS: "PROJECTS", CHAT: "CHAT", DEBUG: "DEBUG" };
export function projectOpener(guildId, callback) {
  closure_0 = guildId;
  closure_1 = callback;
  return (arg0, arg1) => {
    if (arg1 === closure_0) {
      closure_1(arg0);
    } else {
      router_utils.transitionTo(Routes.CHANNEL(arg1, StaticChannelRoute.CONJURE, arg0));
    }
  };
}