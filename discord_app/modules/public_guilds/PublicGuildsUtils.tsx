// discord_app/modules/public_guilds/PublicGuildsUtils.tsx
import PUBLIC_SUCCESS_MODAL_SEEN_KEY from "PUBLIC_SUCCESS_MODAL_SEEN_KEY";
import { AnalyticEvents } from "ME";

let c3;
let c4;
let c5;
({ PUBLIC_GUILD_ANNOUNCEMENTS_GUILD_ID: c3, PUBLIC_GUILD_UPDATES_WEBHOOK_USER_ID: c4, ENABLE_COMMUNITY_FLOW_MODAL_KEY: c5 } = PUBLIC_SUCCESS_MODAL_SEEN_KEY);
const result = require("isCrosspost").fileFinishedImporting("modules/public_guilds/PublicGuildsUtils.tsx");

export const isPublicSystemMessage = function isPublicSystemMessage(message) {
  let tmp = require("../messages/isCrosspost.tsx")(message);
  if (tmp) {
    tmp = message.messageReference.guild_id === closure_3;
  }
  if (!tmp) {
    let tmp4 = null != message.author;
    if (tmp4) {
      tmp4 = message.author.id === closure_4;
    }
    tmp = tmp4;
  }
  return tmp;
};
export const getPublicSystemMessageAvatar = function getPublicSystemMessageAvatar() {
  return require("../../../_runtime/07954_registerAsset.js");
};
export const trackEnableCommunityFlow = function trackEnableCommunityFlow(fromStep) {
  let obj = require("../../utils/AnalyticsUtils.tsx");
  obj = { flow_type: closure_5, from_step: fromStep.fromStep, to_step: fromStep.toStep };
  const merged = Object.assign(require("../app_analytics/AppAnalyticsUtils.tsx") /* collectGuildAnalyticsMetadata */.collectGuildAnalyticsMetadata(fromStep.guildId));
  obj.track(AnalyticEvents.USER_FLOW_TRANSITION, obj);
};