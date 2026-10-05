// discord_app/modules/notifications/settings_unread_notice/UnreadSettingNoticeImpressionTracking.tsx
import react from "../../../../_runtime/00576_react.js";
import discord_common_AnalyticsUtils from "../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import useTrackImpressionDefault from "../../app_analytics/useTrackImpression.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (id) => {
      let first;
      let tmp5;
      const obj = react;
      const cResult = obj.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = {
          type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW,
          name: discord_common_AnalyticsUtils.ImpressionNames.NOTIFICATION_SETTING_UNREAD_NUDGE,
        };
        cResult[0] = obj2;
        first = obj2;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== id.id) {
        const items = [id.id];
        cResult[1] = id.id;
        cResult[2] = items;
        tmp5 = items;
      } else {
        tmp5 = cResult[2];
      }
      useTrackImpressionDefault(first, undefined, tmp5);
      return null;
    }
  : (id) => {
      const obj = {
        type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW,
        name: discord_common_AnalyticsUtils.ImpressionNames.NOTIFICATION_SETTING_UNREAD_NUDGE,
      };
      const items = [id.id];
      const tmp = useTrackImpressionDefault;
      tmp(obj, undefined, items);
      return null;
    };
const result = size.fileFinishedImporting(
  "modules/notifications/settings_unread_notice/UnreadSettingNoticeImpressionTracking.tsx",
);

export default tmp2;
