// === Module 11636: sharedClientThemeViewed ===

// Module 11636 (sharedClientThemeViewed)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1272 */;
import useTrackImpression from "useTrackImpression" /* 8941 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/sharedClientThemeViewed.tsx");

export const handleSharedClientThemeViewed = function handleSharedClientThemeViewed() {
  const obj = useTrackImpression;
  obj.trackImpression({ type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW, name: discord_common_AnalyticsUtils.ImpressionNames.CUSTOM_THEME_SHARE, properties: {} });
};