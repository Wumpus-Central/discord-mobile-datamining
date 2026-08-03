// === Module 13630: useTrackNavigatorScreenImpression ===

// Module 13630 (useTrackNavigatorScreenImpression)
const result = require("set").fileFinishedImporting("modules/app_analytics/native/useTrackNavigatorScreenImpression.tsx");

export const useTrackNavigatorScreenImpression = function useTrackNavigatorScreenImpression(impressionProperties, params) {
  impressionProperties = impressionProperties.impressionProperties;
  let impressionPropertiesResult = impressionProperties;
  if (typeof impressionProperties !== "disabledUntil") {
    impressionPropertiesResult = impressionProperties(params.params);
  }
  const obj = { type: null, name: null, properties: null };
  obj[0] = require(503) /* encodeProperties */.ImpressionTypes.PAGE;
  obj[1] = impressionProperties.impressionName;
  obj[2] = impressionPropertiesResult;
  importDefault(8436)(obj);
};