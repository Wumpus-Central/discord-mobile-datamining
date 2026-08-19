// discord_app/modules/client_themes/native/chat/sharedClientThemeViewed.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import encodeProperties from "../../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import trackImpression from "../../../app_analytics/useTrackImpression.tsx";

const result = obj132.fileFinishedImporting("modules/client_themes/native/chat/sharedClientThemeViewed.tsx");

export const handleSharedClientThemeViewed = function handleSharedClientThemeViewed() {
  const obj = { type: encodeProperties.ImpressionTypes.VIEW, name: encodeProperties.ImpressionNames.CUSTOM_THEME_SHARE, properties: {} };
  obj.trackImpression(obj);
};