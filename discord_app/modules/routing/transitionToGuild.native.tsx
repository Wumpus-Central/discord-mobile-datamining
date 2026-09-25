// === Module 6755: transitionToGuild ===

// Module 6755 (transitionToGuild)
import Constants from "Constants" /* 1074 */;
import router_utils from "router_utils" /* 1101 */;
import DeprecatedLayoutAnimation from "DeprecatedLayoutAnimation" /* 5888 */;
import getChannelIdForGuildTransition from "getChannelIdForGuildTransition" /* 6633 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
let result = size.fileFinishedImporting("modules/routing/transitionToGuild.native.tsx");

export const transitionToGuild = function transitionToGuild(guildId, arg1) {
  const channelIdForGuildTransition = getChannelIdForGuildTransition.getChannelIdForGuildTransition(guildId);
  const result = DeprecatedLayoutAnimation.DeprecatedLayoutAnimation({ duration: 0, create: "r", update: "paddingHorizontal", delete: "diversity" });
  const obj3 = router_utils;
  const obj4 = { navigationReplace: true };
  const merged = Object.assign(arg1);
  obj3.transitionTo(Routes.CHANNEL(guildId, channelIdForGuildTransition), obj4);
};