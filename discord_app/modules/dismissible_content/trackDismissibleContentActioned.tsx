// discord_app/modules/dismissible_content/trackDismissibleContentActioned.tsx
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import dismissible_content from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentFatigueConfig from "DismissibleContentFatigueConfig.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import DismissibleContentFrameworkStore from "DismissibleContentFrameworkStore.tsx";

require = fn;
const getCurrentlyShownCounts = fn(2055).getCurrentlyShownCounts;
const AnalyticEvents = fn(1085).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/dismissible_content/trackDismissibleContentActioned.tsx");

export const trackDismissibleContentActioned = function trackDismissibleContentActioned(dismissibleContent) {
  let obj = dismissAction;
  if (dismissAction === undefined) {
    obj = {};
  }
  const renderedAtTimestamp = DismissibleContentFrameworkStore.getRenderedAtTimestamp(dismissibleContent);
  const obj4 = {
    type: dismissible_content.DismissibleContent[dismissibleContent],
    content_count: _slicedToArray(getCurrentlyShownCounts(), 1)[0],
    group_name: obj.groupName,
    bypass_fatigue: null,
    guild_id: null,
    shown_duration: null,
    version: null,
    snowflake_id: null,
  };
  const CONTENT_TYPES_WITH_BYPASS_FATIGUE = DismissibleContentFatigueConfig.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
  obj4.bypass_fatigue = CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(dismissibleContent);
  obj4.guild_id = obj.guildId;
  let diff = null;
  if (null != renderedAtTimestamp) {
    const _Date = Date;
    diff = Date.now() - renderedAtTimestamp;
  }
  obj4.shown_duration = diff;
  ({ version: obj3.version, snowflakeId: obj3.snowflake_id } = obj);
  AnalyticsUtilsDefault.track(AnalyticEvents.DISMISSIBLE_CONTENT_ACTIONED, obj4);
};
