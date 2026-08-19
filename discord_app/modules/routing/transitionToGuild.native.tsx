// discord_app/modules/routing/transitionToGuild.native.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import ME from "../../Constants.tsx";
import transitionTo from "router_utils.tsx";
import LayoutAnimation from "../animations/native/DeprecatedLayoutAnimation.tsx";
import getChannelIdForGuildTransition from "getChannelIdForGuildTransition.tsx";

const Routes = ME.Routes;
let result = obj132.fileFinishedImporting("modules/routing/transitionToGuild.native.tsx");

export const transitionToGuild = function transitionToGuild(guildId) {
  let obj = getChannelIdForGuildTransition;
  const channelIdForGuildTransition = obj.getChannelIdForGuildTransition(guildId);
  const result = LayoutAnimation.DeprecatedLayoutAnimation({ duration: 0, create: "r", update: "accessibilityRole", delete: "limit" });
  obj = { navigationReplace: true };
  const obj3 = transitionTo;
  const merged = Object.assign(arg1);
  obj3.transitionTo(Routes.CHANNEL(guildId, channelIdForGuildTransition), obj);
};