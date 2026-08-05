// discord_app/modules/app_analytics/native/useTrackNavigatorScreenImpression.tsx
const result = require("set").fileFinishedImporting("modules/app_analytics/native/useTrackNavigatorScreenImpression.tsx");

export const useTrackNavigatorScreenImpression = function useTrackNavigatorScreenImpression(impressionProperties, params) {
  impressionProperties = impressionProperties.impressionProperties;
  let impressionPropertiesResult = impressionProperties;
  if (typeof impressionProperties === "function") {
    impressionPropertiesResult = impressionProperties(params.params);
  }
  const obj = { type: null, name: null, properties: null };
  obj[0] = require("../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx") /* encodeProperties */.ImpressionTypes.PAGE;
  obj[1] = impressionProperties.impressionName;
  obj[2] = impressionPropertiesResult;
  require("../useTrackImpression.tsx")(obj);
};