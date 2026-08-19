// === Module 13922: useTrackNavigatorScreenImpression ===

// Module 13922 (useTrackNavigatorScreenImpression)
import obj132 from "obj132" /* 2 */;
import encodeProperties from "encodeProperties" /* 503 */;
import trackImpressionDefault from "trackImpression" /* 9177 */;

const result = obj132.fileFinishedImporting("modules/app_analytics/native/useTrackNavigatorScreenImpression.tsx");

export const useTrackNavigatorScreenImpression = function useTrackNavigatorScreenImpression(impressionProperties, params) {
  impressionProperties = impressionProperties.impressionProperties;
  let impressionPropertiesResult = impressionProperties;
  if (typeof impressionProperties === "function") {
    impressionPropertiesResult = impressionProperties(params.params);
  }
  const obj = { type: encodeProperties.ImpressionTypes.PAGE, name: impressionProperties.impressionName, properties: impressionPropertiesResult };
  trackImpressionDefault(obj);
};