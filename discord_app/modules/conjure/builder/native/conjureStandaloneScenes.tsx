// === Module 18459: conjureStandaloneScenes ===

// Module 18459 (conjureStandaloneScenes)
import Constants from "Constants" /* 1071 */;
import router_utils from "router_utils" /* 1098 */;
import ChannelConstants from "ChannelConstants" /* 4899 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 11462 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const map = new Map();
let result = size.fileFinishedImporting("modules/conjure/builder/native/conjureStandaloneScenes.tsx");

export const ConjureScreenScenes = { PROJECTS: "PROJECTS", CHAT: "CHAT", DEBUG: "DEBUG" };
export function pushServerProjectScreen(arg0, arg1, project_list) {
  const CHANNELResult = Routes.CHANNEL(arg0, StaticChannelRoute.CONJURE_PROJECT, arg1);
  if (null != project_list) {
    const result = map.set(CHANNELResult, project_list);
  } else {
    map.delete(CHANNELResult);
  }
  router_utils.transitionTo(CHANNELResult, { navigationReplace: false });
}
export function takeServerProjectEntryPoint(guildId, projectId) {
  const CHANNELResult = Routes.CHANNEL(guildId, StaticChannelRoute.CONJURE_PROJECT, projectId);
  value = map.get(CHANNELResult);
  map.delete(CHANNELResult);
  return value;
}
export function projectOpener(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return (arg0, arg1) => {
    if (arg1 === closure_0) {
      closure_1(arg0);
    } else if (null == arg1) {
      openConjureHomeScreenDefault(arg0);
    } else {
      router_utils.transitionTo(Routes.CHANNEL(arg1, StaticChannelRoute.CONJURE_PROJECT, arg0));
    }
  };
}