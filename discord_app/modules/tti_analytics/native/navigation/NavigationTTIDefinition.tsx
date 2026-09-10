// === Module 16715: NavigationTTIDefinition ===

// Module 16715 (NavigationTTIDefinition)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1250 */;
import AnalyticsSchema from "AnalyticsSchema" /* 1336 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/NavigationTTIDefinition.tsx");

export const CHANNEL_NAVIGATION_TTI = { rootEventName: discord_common_AnalyticsUtils.SpanTtiNames.CHANNEL, componentEventName: AnalyticsSchema.SpanComponentNames.CHANNEL };