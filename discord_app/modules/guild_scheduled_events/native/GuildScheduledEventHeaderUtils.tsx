// discord_app/modules/guild_scheduled_events/native/GuildScheduledEventHeaderUtils.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import GuildScheduledEventsConstants from "../GuildScheduledEventsConstants.tsx";
import ScheduleUtils from "../utils/ScheduleUtils.tsx";
import _modDef9783 from "../../../../_runtime/metro/09783__.js";
import GuildScheduledEventStore from "../GuildScheduledEventStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

({ isGuildEventEnded: c3, isGuildScheduledEventActive: closure_4 } = GuildScheduledEventStore);
const constants = GuildScheduledEventsConstants.GuildScheduledEventEntityTypes;
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/GuildScheduledEventHeaderUtils.tsx");

export const getGuildScheduledEventHeaderProps = function getGuildScheduledEventHeaderProps(eventTimeData) {
  ({ startDateTimeString, diffMinutes, currentOrPastEvent, upcomingEvent } = eventTimeData.eventTimeData);
  ({ event, recurrenceId } = eventTimeData);
  ({ isStage, theme, isCanceled } = eventTimeData);
  let obj = ScheduleUtils;
  if (null != recurrenceId) {
    let tmp5 = obj.getNextRecurrenceIdInEvent(event) === recurrenceId;
    if (tmp5) {
      tmp5 = React4(event);
    }
    let tmp4 = tmp5;
  } else {
    tmp4 = React4(event);
  }
  const tmp7 = React3(event);
  const ICON_SUBTLE = nativeDefault.colors.ICON_SUBTLE;
  let tmp8Result = _modDef9783;
  if (tmp4) {
    const intl4 = tmp(1114).intl;
    let stringResult = intl4.string(tmp(1114).t["X2K3/4"]);
    if (isStage) {
      tmp8Result = tmp8(8622);
    }
    let entity_type;
    if (event != null) {
      entity_type = event.entity_type;
    }
    if (entity_type === constants.EXTERNAL) {
      const intl5 = tmp(1114).intl;
      stringResult = intl5.string(tmp(1114).t.TxqPQR);
    }
    let ICON_FEEDBACK_CRITICAL = tmp8(576).colors.ICON_FEEDBACK_POSITIVE;
    let stringResult1 = stringResult;
  } else if (tmp7) {
    tmp8Result = tmp8(9784);
    stringResult1 = startDateTimeString;
    ICON_FEEDBACK_CRITICAL = ICON_SUBTLE;
  } else if (currentOrPastEvent) {
    tmp8Result = tmp8(9784);
    const intl3 = tmp(1114).intl;
    stringResult1 = intl3.string(tmp(1114).t.WINqKV);
    ICON_FEEDBACK_CRITICAL = ICON_SUBTLE;
  } else {
    stringResult1 = startDateTimeString;
    ICON_FEEDBACK_CRITICAL = ICON_SUBTLE;
    if (upcomingEvent) {
      if (diffMinutes > 0) {
        const intl2 = tmp(1114).intl;
        obj = { minutes: diffMinutes };
        let formatToPlainStringResult = intl2.formatToPlainString(tmp(1114).t.PQlCWk, obj);
      } else {
        const intl = tmp(1114).intl;
        formatToPlainStringResult = intl.string(tmp(1114).t.WINqKV);
      }
      stringResult1 = formatToPlainStringResult;
      tmp8Result = tmp8(9784);
      ICON_FEEDBACK_CRITICAL = ICON_SUBTLE;
      const tmp8Result1 = tmp8(9784);
    }
  }
  if (isCanceled) {
    ICON_FEEDBACK_CRITICAL = tmp8(576).colors.ICON_FEEDBACK_CRITICAL;
  }
  obj = { icon: tmp8Result, text: stringResult1, color: null, shouldChangeTextColor: null };
  const internal = tmp8(576).internal;
  obj.color = internal.resolveSemanticColor(theme, ICON_FEEDBACK_CRITICAL);
  let tmp17 = !tmp7;
  if (!tmp7) {
    if (!tmp4) {
      tmp4 = currentOrPastEvent;
    }
    if (!tmp4) {
      tmp4 = upcomingEvent;
    }
    tmp17 = tmp4;
  }
  obj.shouldChangeTextColor = tmp17;
  return obj;
};
