// discord_app/modules/global_discovery_apps/applicationDirectoryAnalytics.tsx
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import SelectedGuildStore from "../../stores/SelectedGuildStore.tsx";

const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/global_discovery_apps/applicationDirectoryAnalytics.tsx");

export const trackAppDirectoryProfileEmbed = function trackAppDirectoryProfileEmbed(applicationId, storefront) {
  const obj = {
    application_id: applicationId,
    device_platform: "mobile_native",
    guild_id: SelectedGuildStore.getGuildId(),
    channel_id: SelectedChannelStore.getChannelId(),
    section: storefront,
  };
  obj.track(AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_SENT, obj);
};
