// discord_app/modules/client_themes/native/chat/sharedClientThemeViewed.tsx
const result = require("set").fileFinishedImporting("modules/client_themes/native/chat/sharedClientThemeViewed.tsx");

export const handleSharedClientThemeViewed = function handleSharedClientThemeViewed() {
  let obj = require("../../../app_analytics/useTrackImpression.tsx") /* trackImpression */;
  obj = { type: require("../../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx") /* encodeProperties */.ImpressionTypes.VIEW, name: require("../../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx") /* encodeProperties */.ImpressionNames.CUSTOM_THEME_SHARE, properties: {} };
  obj.trackImpression(obj);
};