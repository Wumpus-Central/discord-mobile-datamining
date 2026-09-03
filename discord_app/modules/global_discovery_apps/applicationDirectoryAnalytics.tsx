// === Module 7448: trackAppDirectoryProfileEmbed ===

// Module 7448 (trackAppDirectoryProfileEmbed)
import expandEventPropertiesDefault from "expandEventProperties" /* 695 */;
import closure_2 from "handleConnectionOpen" /* 1980 */;
import closure_3 from "handleConnectionOpen" /* 4299 */;
import { AnalyticEvents } from "ME" /* 673 */;

const result = require("set").fileFinishedImporting("modules/global_discovery_apps/applicationDirectoryAnalytics.tsx");

export const trackAppDirectoryProfileEmbed = function trackAppDirectoryProfileEmbed(applicationId, storefront) {
  let obj = expandEventPropertiesDefault;
  obj = { application_id: applicationId, device_platform: "mobile_native", guild_id: guildId.getGuildId(), channel_id: channelId.getChannelId(), section: storefront };
  obj.track(AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_SENT, obj);
};