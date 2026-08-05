// discord_app/modules/routing/transitionToGuild.native.tsx
import { Routes } from "ME";
import { LayoutAnimation } from "../animations/native/DeprecatedLayoutAnimation.tsx";
import { getChannelIdForGuildTransition } from "getChannelIdForGuildTransition.tsx";
import { transitionTo } from "router_utils.tsx";

let result = require("LayoutAnimation").fileFinishedImporting("modules/routing/transitionToGuild.native.tsx");

export const transitionToGuild = function transitionToGuild(id) {
  let obj = getChannelIdForGuildTransition /* getChannelIdForGuildTransition */;
  const channelIdForGuildTransition = obj.getChannelIdForGuildTransition(id);
  const result = LayoutAnimation /* LayoutAnimation */.DeprecatedLayoutAnimation({ duration: 0, create: "call", update: "backgroundColor", delete: "y" });
  const obj2 = LayoutAnimation /* LayoutAnimation */;
  obj = { navigationReplace: true };
  const obj3 = transitionTo /* transitionTo */;
  const merged = Object.assign(arg1);
  obj3.transitionTo(Routes.CHANNEL(id, channelIdForGuildTransition), obj);
};