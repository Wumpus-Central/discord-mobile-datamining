// === Module 8034: PublicGuildsUtils ===

// Module 8034 (PublicGuildsUtils)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4740 */;
import isCrosspostDefault from "isCrosspost" /* 8036 */;
import PublicGuildsConstants from "PublicGuildsConstants" /* 8035 */;
import size from "module_2" /* 2 */;

({ PUBLIC_GUILD_ANNOUNCEMENTS_GUILD_ID: c3, PUBLIC_GUILD_UPDATES_WEBHOOK_USER_ID: closure_4, ENABLE_COMMUNITY_FLOW_MODAL_KEY: hasOwnProperty } = PublicGuildsConstants);
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/public_guilds/PublicGuildsUtils.tsx");

export const isPublicSystemMessage = function isPublicSystemMessage(message) {
  let tmp = isCrosspostDefault(message);
  if (tmp) {
    tmp = message.messageReference.guild_id === React3;
  }
  if (!tmp) {
    let tmp4 = null != message.author;
    if (tmp4) {
      tmp4 = message.author.id === React4;
    }
    tmp = tmp4;
  }
  return tmp;
};
export const getPublicSystemMessageAvatar = function getPublicSystemMessageAvatar() {
  return require("module_8037");
};
export const trackEnableCommunityFlow = function trackEnableCommunityFlow(fromStep) {
  const obj = { flow_type, from_step: fromStep.fromStep, to_step: fromStep.toStep };
  const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(fromStep.guildId));
  obj.track(AnalyticEvents.USER_FLOW_TRANSITION, obj);
};