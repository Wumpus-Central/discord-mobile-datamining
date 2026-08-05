// discord_app/modules/client_themes/native/chat/sharedClientThemeViewed.tsx
import { encodeProperties } from "../../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import { trackImpression } from "../../../app_analytics/useTrackImpression.tsx";
const result = require("set").fileFinishedImporting("modules/client_themes/native/chat/sharedClientThemeViewed.tsx");

export const handleSharedClientThemeViewed = function handleSharedClientThemeViewed() {
  let obj = trackImpression;
  obj = { type: encodeProperties.ImpressionTypes.VIEW, name: encodeProperties.ImpressionNames.CUSTOM_THEME_SHARE, properties: {} };
  obj.trackImpression(obj);
};