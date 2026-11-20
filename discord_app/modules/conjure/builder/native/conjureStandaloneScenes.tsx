// discord_app/modules/conjure/builder/native/conjureStandaloneScenes.tsx
import Constants from "../../../../Constants.tsx";
import router_utils from "../../../routing/router_utils.tsx";
import ChannelConstants from "../../../channel/ChannelConstants.tsx";
import openConjureHomeScreenDefault from "../../home/native/openConjureHomeScreen.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const map = new Map();
let result = size.fileFinishedImporting("modules/conjure/builder/native/conjureStandaloneScenes.tsx");

export const ConjureScreenScenes = { PROJECTS: "PROJECTS", CHAT: "CHAT", DEBUG: "DEBUG" };
export function pushServerProjectScreen(guildId, arg1, project_list) {
  const CHANNELResult = Routes.CHANNEL(guildId, StaticChannelRoute.CONJURE_PROJECT, arg1);
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
export function projectOpener(guildId, arg1) {
  closure_0 = guildId;
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
