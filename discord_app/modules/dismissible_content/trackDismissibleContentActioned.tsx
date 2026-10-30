// === Module 5686: trackDismissibleContentActioned ===

// Module 5686 (trackDismissibleContentActioned)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import dismissible_content from "dismissible_content" /* 4842 */;
import DismissibleContentFatigueConfig from "DismissibleContentFatigueConfig" /* 4846 */;
import DismissibleContentFrameworkActionCreators from "DismissibleContentFrameworkActionCreators" /* 5685 */;
import _slicedToArray from "module_32" /* 32 */;
import DismissibleContentFrameworkStore from "DismissibleContentFrameworkStore" /* 4845 */;

require = fn;
const getCurrentlyShownCounts = fn(4850).getCurrentlyShownCounts;
const AnalyticEvents = fn(1072).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/dismissible_content/trackDismissibleContentActioned.tsx");

export function trackDismissibleContentActioned(content) {
  let obj = dismissAction;
  if (dismissAction === undefined) {
    obj = {};
  }
  if (!DismissibleContentFrameworkStore.hasTrackedActionedEvent(content)) {
    DismissibleContentFrameworkActionCreators.handleDCActioned(content);
    const renderedAtTimestamp = DismissibleContentFrameworkStore.getRenderedAtTimestamp(content);
    const obj7 = { type: dismissible_content.DismissibleContent[content], content_count: _slicedToArray(getCurrentlyShownCounts(), 1)[0], group_name: obj.groupName, bypass_fatigue: null, guild_id: null, shown_duration: null, version: null, snowflake_id: null };
    const obj4 = AnalyticsUtilsDefault;
    obj7.bypass_fatigue = DismissibleContentFatigueConfig.bypassesFatigue(content);
    obj7.guild_id = obj.guildId;
    let diff = null;
    if (null != renderedAtTimestamp) {
      const _Date = Date;
      diff = Date.now() - renderedAtTimestamp;
    }
    obj7.shown_duration = diff;
    ({ version: obj5.version, snowflakeId: obj5.snowflake_id } = obj);
    obj4.track(AnalyticEvents.DISMISSIBLE_CONTENT_ACTIONED, obj7);
  }
}