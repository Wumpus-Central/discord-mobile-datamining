// === Module 7380: applicationDirectoryAnalytics ===

// Module 7380 (applicationDirectoryAnalytics)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2116 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4939 */;

const AnalyticEvents = fn(1085).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/global_discovery_apps/applicationDirectoryAnalytics.tsx");

export const trackAppDirectoryProfileEmbed = function trackAppDirectoryProfileEmbed(applicationId, storefront) {
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_SENT, { application_id: applicationId, device_platform: "mobile_native", guild_id: SelectedGuildStore.getGuildId(), channel_id: SelectedChannelStore.getChannelId(), section: storefront });
};