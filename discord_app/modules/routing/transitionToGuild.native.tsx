// === Module 6154: transitionToGuild ===

// Module 6154 (transitionToGuild)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import transitionTo from "transitionTo" /* 1222 */;
import LayoutAnimation from "LayoutAnimation" /* 5564 */;
import getChannelIdForGuildTransition from "getChannelIdForGuildTransition" /* 6032 */;

const Routes = ME.Routes;
let result = set.fileFinishedImporting("modules/routing/transitionToGuild.native.tsx");

export const transitionToGuild = function transitionToGuild(guildId) {
  let obj = getChannelIdForGuildTransition;
  const channelIdForGuildTransition = obj.getChannelIdForGuildTransition(guildId);
  const result = LayoutAnimation.DeprecatedLayoutAnimation({ duration: 0, create: "r", update: "accessibilityLabel", delete: "constructor" });
  const obj2 = LayoutAnimation;
  obj = { navigationReplace: true };
  const obj3 = transitionTo;
  const merged = Object.assign(arg1);
  obj3.transitionTo(Routes.CHANNEL(guildId, channelIdForGuildTransition), obj);
};