// discord_app/modules/routing/transitionToGuild.native.tsx
import Constants from "../../Constants.tsx";
import router_utils from "router_utils.tsx";
import DeprecatedLayoutAnimation from "../animations/native/DeprecatedLayoutAnimation.tsx";
import getChannelIdForGuildTransition from "getChannelIdForGuildTransition.tsx";
import size from "../../../_runtime/metro/00002__.js";

const Routes = Constants.Routes;
let result = size.fileFinishedImporting("modules/routing/transitionToGuild.native.tsx");

export const transitionToGuild = function transitionToGuild(guildId, arg1) {
  let obj = getChannelIdForGuildTransition;
  const channelIdForGuildTransition = obj.getChannelIdForGuildTransition(guildId);
  const result = DeprecatedLayoutAnimation.DeprecatedLayoutAnimation({
    duration: 0,
    create: "r",
    update: "WireType",
    delete: "isArray",
  });
  obj = { navigationReplace: true };
  const obj3 = router_utils;
  const merged = Object.assign(arg1);
  obj3.transitionTo(Routes.CHANNEL(guildId, channelIdForGuildTransition), obj);
};
