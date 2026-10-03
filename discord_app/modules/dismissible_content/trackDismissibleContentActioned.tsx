// === Module 13804: trackDismissibleContentActioned ===

// Module 13804 (trackDismissibleContentActioned)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import dismissible_content from "dismissible_content" /* 2036 */;
import DismissibleContentFatigueConfig from "DismissibleContentFatigueConfig" /* 2041 */;
import _slicedToArray from "module_32" /* 32 */;
import DismissibleContentFrameworkStore from "DismissibleContentFrameworkStore" /* 2040 */;

require = fn;
const getCurrentlyShownCounts = fn(2042).getCurrentlyShownCounts;
const AnalyticEvents = fn(1085).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/dismissible_content/trackDismissibleContentActioned.tsx");

export const trackDismissibleContentActioned = function trackDismissibleContentActioned(dismissibleContent) {
  let obj = dismissAction;
  if (dismissAction === undefined) {
    obj = {};
  }
  const renderedAtTimestamp = DismissibleContentFrameworkStore.getRenderedAtTimestamp(dismissibleContent);
  const obj4 = { type: dismissible_content.DismissibleContent[dismissibleContent], content_count: _slicedToArray(getCurrentlyShownCounts(), 1)[0], group_name: obj.groupName, bypass_fatigue: null, guild_id: null, shown_duration: null, version: null, snowflake_id: null };
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