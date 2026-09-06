// === Module 7693: trackAppDirectoryProfileEmbed ===

// Module 7693 (trackAppDirectoryProfileEmbed)
import expandEventPropertiesDefault from "expandEventProperties" /* 1242 */;
import closure_2 from "handleConnectionOpen" /* 2011 */;
import closure_3 from "handleConnectionOpen" /* 4381 */;
import { AnalyticEvents } from "ME" /* 1074 */;

const result = require("set").fileFinishedImporting("modules/global_discovery_apps/applicationDirectoryAnalytics.tsx");

export const trackAppDirectoryProfileEmbed = function trackAppDirectoryProfileEmbed(applicationId, storefront) {
  let obj = expandEventPropertiesDefault;
  obj = { application_id: applicationId, device_platform: "mobile_native", guild_id: guildId.getGuildId(), channel_id: channelId.getChannelId(), section: storefront };
  obj.track(AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_SENT, obj);
};