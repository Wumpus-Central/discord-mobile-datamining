// === Module 12404: getGuildScheduledEventHeaderProps ===

// Module 12404 (getGuildScheduledEventHeaderProps)
import set from "set" /* 2 */;
import ThemesDefault from "Themes" /* 712 */;
import GUILD_EVENT_MAX_NAME_LENGTH from "GUILD_EVENT_MAX_NAME_LENGTH" /* 1397 */;
import getRRule from "getRRule" /* 8785 */;
import registerAssetDefault from "registerAsset" /* 8896 */;
import scheduledEventSort from "scheduledEventSort" /* 4370 */;

({ isGuildEventEnded: c3, isGuildScheduledEventActive: c4 } = scheduledEventSort);
let closure_5 = GUILD_EVENT_MAX_NAME_LENGTH.GuildScheduledEventEntityTypes;
const result = set.fileFinishedImporting("modules/guild_scheduled_events/native/GuildScheduledEventHeaderUtils.tsx");

export const getGuildScheduledEventHeaderProps = function getGuildScheduledEventHeaderProps(eventTimeData) {
  ({ startDateTimeString, diffMinutes, currentOrPastEvent, upcomingEvent } = eventTimeData.eventTimeData);
  ({ event, recurrenceId } = eventTimeData);
  ({ isStage, theme, isCanceled } = eventTimeData);
  let obj = getRRule;
  if (null != recurrenceId) {
    let tmp5 = obj.getNextRecurrenceIdInEvent(event) === recurrenceId;
    if (tmp5) {
      tmp5 = callback2(event);
    }
    let tmp4 = tmp5;
  } else {
    tmp4 = callback2(event);
  }
  const tmp7 = callback(event);
  const ICON_SUBTLE = ThemesDefault.colors.ICON_SUBTLE;
  let tmp8Result = registerAssetDefault;
  if (tmp4) {
    const intl4 = tmp(1236).intl;
    let stringResult = intl4.string(tmp(1236).t["X2K3/4"]);
    if (isStage) {
      tmp8Result = tmp8(8129);
    }
    let entity_type;
    if (event != null) {
      entity_type = event.entity_type;
    }
    if (entity_type === constants.EXTERNAL) {
      const intl5 = tmp(1236).intl;
      stringResult = intl5.string(tmp(1236).t.TxqPQR);
    }
    let ICON_FEEDBACK_CRITICAL = tmp8(712).colors.ICON_FEEDBACK_POSITIVE;
    let stringResult1 = stringResult;
  } else if (tmp7) {
    tmp8Result = tmp8(12405);
    stringResult1 = startDateTimeString;
    ICON_FEEDBACK_CRITICAL = ICON_SUBTLE;
  } else if (currentOrPastEvent) {
    tmp8Result = tmp8(12405);
    const intl3 = tmp(1236).intl;
    stringResult1 = intl3.string(tmp(1236).t.WINqKV);
    ICON_FEEDBACK_CRITICAL = ICON_SUBTLE;
  } else {
    stringResult1 = startDateTimeString;
    ICON_FEEDBACK_CRITICAL = ICON_SUBTLE;
    if (upcomingEvent) {
      if (diffMinutes > 0) {
        const intl2 = tmp(1236).intl;
        obj = { minutes: null };
        obj[0] = diffMinutes;
        let formatToPlainStringResult = intl2.formatToPlainString(tmp(1236).t.PQlCWk, obj);
      } else {
        const intl = tmp(1236).intl;
        formatToPlainStringResult = intl.string(tmp(1236).t.WINqKV);
      }
      stringResult1 = formatToPlainStringResult;
      tmp8Result = tmp8(12405);
      ICON_FEEDBACK_CRITICAL = ICON_SUBTLE;
      const tmp8Result1 = tmp8(12405);
    }
  }
  if (isCanceled) {
    ICON_FEEDBACK_CRITICAL = tmp8(712).colors.ICON_FEEDBACK_CRITICAL;
  }
  obj = { icon: tmp8Result, text: stringResult1, color: null, shouldChangeTextColor: null };
  const internal = tmp8(712).internal;
  obj[2] = internal.resolveSemanticColor(theme, ICON_FEEDBACK_CRITICAL);
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
  obj[3] = tmp17;
  return obj;
};