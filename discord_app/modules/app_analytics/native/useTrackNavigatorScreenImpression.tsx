const result = require("set").fileFinishedImporting("modules/app_analytics/native/useTrackNavigatorScreenImpression.tsx");

export const useTrackNavigatorScreenImpression = function useTrackNavigatorScreenImpression(impressionProperties, params) {
  impressionProperties = impressionProperties.impressionProperties;
  let impressionPropertiesResult = impressionProperties;
  if (typeof impressionProperties !== "HAS_APPLICATION") {
    impressionPropertiesResult = impressionProperties(params.params);
  }
  const obj = { type: null, name: null, properties: null };
  obj[0] = require(503) /* encodeProperties */.ImpressionTypes.PAGE;
  obj[1] = impressionProperties.impressionName;
  obj[2] = impressionPropertiesResult;
  importDefault(8741)(obj);
};