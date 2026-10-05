// discord_app/modules/dismissible_content/trackDismissibleContentActioned.tsx
import Constants from "../../Constants.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import dismissible_content from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentFatigueConfig from "DismissibleContentFatigueConfig.tsx";
import DismissibleContentShownStateStore from "DismissibleContentShownStateStore.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import DismissibleContentFrameworkStore from "DismissibleContentFrameworkStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const getCurrentlyShownCounts = DismissibleContentShownStateStore.getCurrentlyShownCounts;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/dismissible_content/trackDismissibleContentActioned.tsx");

export const trackDismissibleContentActioned = function trackDismissibleContentActioned(arg0) {
  let CONTENT_TYPES_WITH_BYPASS_FATIGUE;
  let diff;
  let obj = dismissAction;
  if (dismissAction === undefined) {
    obj = {};
  }
  const first = _slicedToArray(getCurrentlyShownCounts(), 1)[0];
  const renderedAtTimestamp = DismissibleContentFrameworkStore.getRenderedAtTimestamp(arg0);
  const tmp3 = AnalyticsUtilsDefault;
  const track = tmp3.track;
  const DISMISSIBLE_CONTENT_ACTIONED = AnalyticEvents.DISMISSIBLE_CONTENT_ACTIONED;
  const obj3 = {
    type: dismissible_content.DismissibleContent[arg0],
    content_count: first,
    group_name: obj.groupName,
    bypass_fatigue: CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(arg0),
    guild_id: obj.guildId,
    shown_duration: diff,
    version: null,
    snowflake_id: null,
  };
  CONTENT_TYPES_WITH_BYPASS_FATIGUE = DismissibleContentFatigueConfig.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
  diff = null;
  if (null != renderedAtTimestamp) {
    const _Date = Date;
    diff = Date.now() - renderedAtTimestamp;
  }
  ({ version: obj2.version, snowflakeId: obj2.snowflake_id } = obj);
  track(DISMISSIBLE_CONTENT_ACTIONED, obj3);
};
