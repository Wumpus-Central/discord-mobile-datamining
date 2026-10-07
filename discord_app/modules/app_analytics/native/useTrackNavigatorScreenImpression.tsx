// === Module 14415: useTrackNavigatorScreenImpression ===

// Module 14415 (useTrackNavigatorScreenImpression)
import c from "c" /* 576 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1260 */;
import useTrackImpressionDefault from "useTrackImpression" /* 8455 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_analytics/native/useTrackNavigatorScreenImpression.tsx");

export const useTrackNavigatorScreenImpression = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, params) => {
  const cResult = c.c(6);
  ({ impressionName, impressionProperties } = arg0);
  if (cResult[0] === impressionProperties) {
    if (cResult[1] === params) {
      let tmp4 = cResult[2];
    }
    if (cResult[3] === impressionName) {
      if (cResult[4] === tmp4) {
        let tmp6 = cResult[5];
      }
      useTrackImpressionDefault(tmp6);
    }
    const obj2 = { type: discord_common_AnalyticsUtils.ImpressionTypes.PAGE, name: impressionName, properties: tmp4 };
    cResult[3] = impressionName;
    cResult[4] = tmp4;
    cResult[5] = obj2;
    tmp6 = obj2;
  }
  let impressionPropertiesResult = impressionProperties;
  if (typeof impressionProperties === "function") {
    impressionPropertiesResult = impressionProperties(params.params);
  }
  cResult[0] = impressionProperties;
  cResult[1] = params;
  cResult[2] = impressionPropertiesResult;
  tmp4 = impressionPropertiesResult;
}) : ((impressionProperties, params) => {
  impressionProperties = impressionProperties.impressionProperties;
  let impressionPropertiesResult = impressionProperties;
  if (typeof impressionProperties === "function") {
    impressionPropertiesResult = impressionProperties(params.params);
  }
  const obj = { type: discord_common_AnalyticsUtils.ImpressionTypes.PAGE, name: impressionProperties.impressionName, properties: impressionPropertiesResult };
  useTrackImpressionDefault(obj);
});