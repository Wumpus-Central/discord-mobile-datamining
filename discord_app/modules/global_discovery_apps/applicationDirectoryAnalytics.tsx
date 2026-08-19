// discord_app/modules/global_discovery_apps/applicationDirectoryAnalytics.tsx
import expandEventPropertiesDefault from "../../utils/AnalyticsUtils.tsx";
import handleConnectionOpen from "../../stores/SelectedChannelStore.tsx";
import handleConnectionOpen2 from "../../stores/SelectedGuildStore.tsx";
import { AnalyticEvents } from "../../Constants.tsx";

const result = require("obj132").fileFinishedImporting("modules/global_discovery_apps/applicationDirectoryAnalytics.tsx");

export const trackAppDirectoryProfileEmbed = function trackAppDirectoryProfileEmbed(applicationId, storefront) {
  const obj = { application_id: applicationId, device_platform: "mobile_native", guild_id: guildId.getGuildId(), channel_id: channelId.getChannelId(), section: storefront };
  obj.track(AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_SENT, obj);
};