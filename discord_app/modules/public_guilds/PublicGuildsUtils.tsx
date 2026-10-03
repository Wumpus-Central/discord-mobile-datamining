// === Module 7705: PublicGuildsUtils ===

// Module 7705 (PublicGuildsUtils)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5070 */;
import isCrosspostDefault from "isCrosspost" /* 7707 */;
import PublicGuildsConstants from "PublicGuildsConstants" /* 7706 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

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
  return require("module_7708");
};
export const trackEnableCommunityFlow = function trackEnableCommunityFlow(fromStep) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { flow_type, from_step: fromStep.fromStep, to_step: fromStep.toStep };
  const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(fromStep.guildId));
  obj.track(AnalyticEvents.USER_FLOW_TRANSITION, obj2);
};