// === Module 8274: applicationDirectoryAnalytics ===

// Module 8274 (applicationDirectoryAnalytics)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4697 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4827 */;

const AnalyticEvents = fn(1071).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/global_discovery_apps/applicationDirectoryAnalytics.tsx");

export function trackAppDirectoryProfileEmbed(applicationId, storefront) {
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_SENT, { application_id: applicationId, device_platform: "mobile_native", guild_id: SelectedGuildStore.getGuildId(), channel_id: SelectedChannelStore.getChannelId(), section: storefront });
}