// discord_app/modules/app_analytics/native/useTrackNavigatorScreenImpression.tsx
import c from "../../../../_runtime/00576_c.js";
import discord_common_AnalyticsUtils from "../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import useTrackImpressionDefault from "../useTrackImpression.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/app_analytics/native/useTrackNavigatorScreenImpression.tsx");

export const useTrackNavigatorScreenImpression = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, params) => {
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
        const obj2 = {
          type: discord_common_AnalyticsUtils.ImpressionTypes.PAGE,
          name: impressionName,
          properties: tmp4,
        };
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
    }
  : (impressionProperties, params) => {
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
