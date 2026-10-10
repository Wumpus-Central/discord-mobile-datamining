// discord_app/modules/dismissible_content/trackDismissibleContentActioned.tsx
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import dismissible_content from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentFatigueConfig from "DismissibleContentFatigueConfig.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import DismissibleContentFrameworkStore from "DismissibleContentFrameworkStore.tsx";

require = fn;
const getCurrentlyShownCounts = fn(2057).getCurrentlyShownCounts;
const AnalyticEvents = fn(1085).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/dismissible_content/trackDismissibleContentActioned.tsx");

export const trackDismissibleContentActioned = function trackDismissibleContentActioned(content) {
  let obj = dismissAction;
  if (dismissAction === undefined) {
    obj = {};
  }
  const renderedAtTimestamp = DismissibleContentFrameworkStore.getRenderedAtTimestamp(content);
  const obj5 = {
    type: dismissible_content.DismissibleContent[content],
    content_count: _slicedToArray(getCurrentlyShownCounts(), 1)[0],
    group_name: obj.groupName,
    bypass_fatigue: null,
    guild_id: null,
    shown_duration: null,
    version: null,
    snowflake_id: null,
  };
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
