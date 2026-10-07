// discord_app/modules/tti_analytics/native/navigation/NavigationTTIDefinition.tsx
import discord_common_AnalyticsUtils from "../../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import AnalyticsSchema from "../../../../../discord_common/js/packages/analytics-utils/AnalyticsSchema.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/NavigationTTIDefinition.tsx");

export const CHANNEL_NAVIGATION_TTI = {
  rootEventName: discord_common_AnalyticsUtils.SpanTtiNames.CHANNEL,
  componentEventName: AnalyticsSchema.SpanComponentNames.CHANNEL,
};
