// === Module 15074: trackDismissibleContentActioned ===

// Module 15074 (trackDismissibleContentActioned)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import dismissible_content from "dismissible_content" /* 2052 */;
import DismissibleContentFatigueConfig from "DismissibleContentFatigueConfig" /* 2056 */;
import _slicedToArray from "module_32" /* 32 */;
import DismissibleContentFrameworkStore from "DismissibleContentFrameworkStore" /* 2055 */;

require = fn;
const getCurrentlyShownCounts = fn(2060).getCurrentlyShownCounts;
const AnalyticEvents = fn(1087).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/dismissible_content/trackDismissibleContentActioned.tsx");

export const trackDismissibleContentActioned = function trackDismissibleContentActioned(content) {
  let obj = dismissAction;
  if (dismissAction === undefined) {
    obj = {};
  }
  const renderedAtTimestamp = DismissibleContentFrameworkStore.getRenderedAtTimestamp(content);
  const obj5 = { type: dismissible_content.DismissibleContent[content], content_count: _slicedToArray(getCurrentlyShownCounts(), 1)[0], group_name: obj.groupName, bypass_fatigue: null, guild_id: null, shown_duration: null, version: null, snowflake_id: null };
  const obj2 = AnalyticsUtilsDefault;
  obj5.bypass_fatigue = DismissibleContentFatigueConfig.bypassesFatigue(content);
  obj5.guild_id = obj.guildId;
  let diff = null;
  if (null != renderedAtTimestamp) {
    const _Date = Date;
    diff = Date.now() - renderedAtTimestamp;
  }
  obj5.shown_duration = diff;
  ({ version: obj3.version, snowflakeId: obj3.snowflake_id } = obj);
  obj2.track(AnalyticEvents.DISMISSIBLE_CONTENT_ACTIONED, obj5);
};