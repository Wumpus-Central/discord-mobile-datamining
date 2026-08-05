// discord_app/modules/routing/transitionToGuild.native.tsx
import { Routes } from "ME";

let result = require("LayoutAnimation").fileFinishedImporting("modules/routing/transitionToGuild.native.tsx");

export const transitionToGuild = function transitionToGuild(id) {
  let obj = require("getChannelIdForGuildTransition.tsx") /* getChannelIdForGuildTransition */;
  const channelIdForGuildTransition = obj.getChannelIdForGuildTransition(id);
  const result = require("../animations/native/DeprecatedLayoutAnimation.tsx") /* LayoutAnimation */.DeprecatedLayoutAnimation({ duration: 0, create: "call", update: "backgroundColor", delete: "y" });
  const obj2 = require("../animations/native/DeprecatedLayoutAnimation.tsx") /* LayoutAnimation */;
  obj = { navigationReplace: true };
  const obj3 = require("router_utils.tsx") /* transitionTo */;
  const merged = Object.assign(arg1);
  obj3.transitionTo(Routes.CHANNEL(id, channelIdForGuildTransition), obj);
};