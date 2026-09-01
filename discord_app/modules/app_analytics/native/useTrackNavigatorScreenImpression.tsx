// discord_app/modules/app_analytics/native/useTrackNavigatorScreenImpression.tsx
import set from "../../../../_runtime/00002_set.js";
import encodeProperties from "../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import trackImpressionDefault from "../useTrackImpression.tsx";

const result = set.fileFinishedImporting("modules/app_analytics/native/useTrackNavigatorScreenImpression.tsx");

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
    type: encodeProperties.ImpressionTypes.PAGE,
    name: impressionProperties.impressionName,
    properties: impressionPropertiesResult,
  };
  trackImpressionDefault(obj);
};
