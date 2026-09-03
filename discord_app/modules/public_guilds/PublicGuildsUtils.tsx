// === Module 7955: isPublicSystemMessage ===

// Module 7955 (isPublicSystemMessage)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 695 */;
import collectGuildAnalyticsMetadata from "collectGuildAnalyticsMetadata" /* 4701 */;
import isCrosspostDefault from "isCrosspost" /* 7957 */;
import PUBLIC_SUCCESS_MODAL_SEEN_KEY from "PUBLIC_SUCCESS_MODAL_SEEN_KEY" /* 7956 */;

({ PUBLIC_GUILD_ANNOUNCEMENTS_GUILD_ID: c3, PUBLIC_GUILD_UPDATES_WEBHOOK_USER_ID: c4, ENABLE_COMMUNITY_FLOW_MODAL_KEY: c5 } = PUBLIC_SUCCESS_MODAL_SEEN_KEY);
const AnalyticEvents = ME.AnalyticEvents;
const result = set.fileFinishedImporting("modules/public_guilds/PublicGuildsUtils.tsx");

export const isPublicSystemMessage = function isPublicSystemMessage(message) {
  let tmp = isCrosspostDefault(message);
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
  return importDefault(7958);
};
export const trackEnableCommunityFlow = function trackEnableCommunityFlow(fromStep) {
  let obj = expandEventPropertiesDefault;
  obj = { flow_type: closure_5, from_step: fromStep.fromStep, to_step: fromStep.toStep };
  const merged = Object.assign(collectGuildAnalyticsMetadata.collectGuildAnalyticsMetadata(fromStep.guildId));
  obj.track(AnalyticEvents.USER_FLOW_TRANSITION, obj);
};