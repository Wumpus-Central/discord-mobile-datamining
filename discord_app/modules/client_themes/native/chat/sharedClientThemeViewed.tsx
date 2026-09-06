// discord_app/modules/client_themes/native/chat/sharedClientThemeViewed.tsx
import discord_common_AnalyticsUtils from "../../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import useTrackImpression from "../../../app_analytics/useTrackImpression.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/client_themes/native/chat/sharedClientThemeViewed.tsx");

export const handleSharedClientThemeViewed = function handleSharedClientThemeViewed() {
  const obj = {
    type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW,
    name: discord_common_AnalyticsUtils.ImpressionNames.CUSTOM_THEME_SHARE,
    properties: {},
  };
  obj.trackImpression(obj);
};
