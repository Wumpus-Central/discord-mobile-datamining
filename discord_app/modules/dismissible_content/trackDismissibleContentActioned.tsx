// discord_app/modules/dismissible_content/trackDismissibleContentActioned.tsx
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import dismissible_content from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentFatigueConfig from "DismissibleContentFatigueConfig.tsx";
import DismissibleContentFrameworkActionCreators from "DismissibleContentFrameworkActionCreators.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import DismissibleContentFrameworkStore from "DismissibleContentFrameworkStore.tsx";

require = fn;
const getCurrentlyShownCounts = fn(4855).getCurrentlyShownCounts;
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
    const obj7 = {
      type: dismissible_content.DismissibleContent[content],
      content_count: _slicedToArray(getCurrentlyShownCounts(), 1)[0],
      group_name: obj.groupName,
      bypass_fatigue: null,
      guild_id: null,
      shown_duration: null,
      version: null,
      snowflake_id: null,
    };
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
