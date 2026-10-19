// === Module 9064: GuildScheduledEventHeaderUtils ===

// Module 9064 (GuildScheduledEventHeaderUtils)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1128 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 4806 */;
import _modDef8852 from "module_8852" /* 8852 */;
import _modDef9065 from "module_9065" /* 9065 */;
import _modDef9066 from "module_9066" /* 9066 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 6732 */;
import size from "module_2" /* 2 */;

({ isGuildEventEnded: c3, isGuildScheduledEventActive: closure_4 } = GuildScheduledEventStore);
const constants = GuildScheduledEventsConstants.GuildScheduledEventEntityTypes;
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/GuildScheduledEventHeaderUtils.tsx");

export const getGuildScheduledEventHeaderProps = function getGuildScheduledEventHeaderProps(eventTimeData) {
  ({ startDateTimeString, diffMinutes, currentOrPastEvent, upcomingEvent } = eventTimeData.eventTimeData);
  ({ event, recurrenceId } = eventTimeData);
  ({ isStage, theme, isCanceled } = eventTimeData);
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
  let tmp8Result = _modDef9065;
  if (tmp4) {
    const intl4 = util.intl;
    let stringResult = intl4.string(util.t["X2K3/4"]);
    if (isStage) {
      tmp8Result = _modDef8852;
    }
    let entity_type;
    if (event != null) {
      entity_type = event.entity_type;
    }
    if (entity_type === constants.EXTERNAL) {
      const intl5 = util.intl;
      stringResult = intl5.string(util.t.TxqPQR);
    }
    let ICON_FEEDBACK_CRITICAL = nativeDefault.colors.ICON_FEEDBACK_POSITIVE;
    let stringResult1 = stringResult;
    let tmp8Result3 = tmp8Result;
  } else if (tmp7) {
    tmp8Result3 = _modDef9066;
    stringResult1 = startDateTimeString;
    ICON_FEEDBACK_CRITICAL = ICON_SUBTLE;
  } else if (currentOrPastEvent) {
    tmp8Result3 = _modDef9066;
    const intl3 = util.intl;
    stringResult1 = intl3.string(util.t.WINqKV);
    ICON_FEEDBACK_CRITICAL = ICON_SUBTLE;
  } else {
    tmp8Result3 = tmp8Result;
    stringResult1 = startDateTimeString;
    ICON_FEEDBACK_CRITICAL = ICON_SUBTLE;
    if (upcomingEvent) {
      if (diffMinutes > 0) {
        const intl2 = util.intl;
        const obj2 = { minutes: diffMinutes };
        let formatToPlainStringResult = intl2.formatToPlainString(util.t.PQlCWk, obj2);
      } else {
        const intl = util.intl;
        formatToPlainStringResult = intl.string(util.t.WINqKV);
      }
      stringResult1 = formatToPlainStringResult;
      tmp8Result3 = _modDef9066;
      ICON_FEEDBACK_CRITICAL = ICON_SUBTLE;
      const tmp8Result4 = _modDef9066;
    }
  }
  if (isCanceled) {
    ICON_FEEDBACK_CRITICAL = nativeDefault.colors.ICON_FEEDBACK_CRITICAL;
  }
  const obj3 = { icon: tmp8Result3, text: stringResult1, color: null, shouldChangeTextColor: null };
  const internal = nativeDefault.internal;
  obj3.color = internal.resolveSemanticColor(theme, ICON_FEEDBACK_CRITICAL);
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
  obj3.shouldChangeTextColor = tmp17;
  return obj3;
};