// discord_app/modules/app_analytics/native/useTrackNavigatorScreenImpression.tsx
import discord_common_AnalyticsUtils from "../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import useTrackImpressionDefault from "../useTrackImpression.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/app_analytics/native/useTrackNavigatorScreenImpression.tsx");

export const useTrackNavigatorScreenImpression = function useTrackNavigatorScreenImpression(
  impressionProperties,
  params,
) {
  impressionProperties = impressionProperties.impressionProperties;
  let impressionPropertiesResult = impressionProperties;
  if (typeof impressionProperties === "function") {
    impressionPropertiesResult = impressionProperties(params.params);
  }
  const obj = {
    type: discord_common_AnalyticsUtils.ImpressionTypes.PAGE,
    name: impressionProperties.impressionName,
    properties: impressionPropertiesResult,
  };
  useTrackImpressionDefault(obj);
};
