// discord_app/modules/global_discovery_apps/applicationDirectoryAnalytics.tsx
import expandEventPropertiesDefault from "../../utils/AnalyticsUtils.tsx";
import closure_2 from "../../stores/SelectedChannelStore.tsx";
import closure_3 from "../../stores/SelectedGuildStore.tsx";
import { AnalyticEvents } from "../../Constants.tsx";

const result = require("set").fileFinishedImporting("modules/global_discovery_apps/applicationDirectoryAnalytics.tsx");

export const trackAppDirectoryProfileEmbed = function trackAppDirectoryProfileEmbed(applicationId, storefront) {
  let obj = expandEventPropertiesDefault;
  obj = {
    application_id: applicationId,
    device_platform: "mobile_native",
    guild_id: guildId.getGuildId(),
    channel_id: channelId.getChannelId(),
    section: storefront,
  };
  obj.track(AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_SENT, obj);
};
