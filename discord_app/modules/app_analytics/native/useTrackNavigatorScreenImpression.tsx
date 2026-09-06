// === Module 14557: useTrackNavigatorScreenImpression ===

// Module 14557 (useTrackNavigatorScreenImpression)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1250 */;
import useTrackImpressionDefault from "useTrackImpression" /* 8768 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_analytics/native/useTrackNavigatorScreenImpression.tsx");

export const useTrackNavigatorScreenImpression = function useTrackNavigatorScreenImpression(impressionProperties, params) {
  impressionProperties = impressionProperties.impressionProperties;
  let impressionPropertiesResult = impressionProperties;
  if (typeof impressionProperties === "function") {
    impressionPropertiesResult = impressionProperties(params.params);
  }
  const obj = { type: discord_common_AnalyticsUtils.ImpressionTypes.PAGE, name: impressionProperties.impressionName, properties: impressionPropertiesResult };
  useTrackImpressionDefault(obj);
};