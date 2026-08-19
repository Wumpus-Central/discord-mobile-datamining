// discord_app/modules/guild_scheduled_events/native/GuildScheduledEventHeaderUtils.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import GUILD_EVENT_MAX_NAME_LENGTH from "../GuildScheduledEventsConstants.tsx";
import registerAssetDefault from "../../../../_runtime/08129_registerAsset.js";
import getRRule from "../utils/ScheduleUtils.tsx";
import registerAssetDefault2 from "../../../../_runtime/08896_registerAsset.js";
import registerAssetDefault3 from "../../../../_runtime/12405_registerAsset.js";
import scheduledEventSort from "../GuildScheduledEventStore.tsx";

({ isGuildEventEnded: c3, isGuildScheduledEventActive: c4 } = scheduledEventSort);
let closure_5 = GUILD_EVENT_MAX_NAME_LENGTH.GuildScheduledEventEntityTypes;
const result = obj132.fileFinishedImporting("modules/guild_scheduled_events/native/GuildScheduledEventHeaderUtils.tsx");

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
  let tmp8Result = registerAssetDefault2;
  if (tmp4) {
    const intl4 = getSystemLocale.intl;
    let stringResult = intl4.string(getSystemLocale.t["X2K3/4"]);
    if (isStage) {
      tmp8Result = registerAssetDefault;
    }
    let entity_type;
    if (event != null) {
      entity_type = event.entity_type;
    }
    if (entity_type === constants.EXTERNAL) {
      const intl5 = getSystemLocale.intl;
      stringResult = intl5.string(getSystemLocale.t.TxqPQR);
    }
    let ICON_FEEDBACK_CRITICAL = ThemesDefault.colors.ICON_FEEDBACK_POSITIVE;
    let stringResult1 = stringResult;
  } else if (tmp7) {
    tmp8Result = registerAssetDefault3;
    stringResult1 = startDateTimeString;
    ICON_FEEDBACK_CRITICAL = ICON_SUBTLE;
  } else if (currentOrPastEvent) {
    tmp8Result = registerAssetDefault3;
    const intl3 = getSystemLocale.intl;
    stringResult1 = intl3.string(getSystemLocale.t.WINqKV);
    ICON_FEEDBACK_CRITICAL = ICON_SUBTLE;
  } else {
    stringResult1 = startDateTimeString;
    ICON_FEEDBACK_CRITICAL = ICON_SUBTLE;
    if (upcomingEvent) {
      if (diffMinutes > 0) {
        const intl2 = getSystemLocale.intl;
        obj = { minutes: null };
        obj[0] = diffMinutes;
        let formatToPlainStringResult = intl2.formatToPlainString(getSystemLocale.t.PQlCWk, obj);
      } else {
        const intl = getSystemLocale.intl;
        formatToPlainStringResult = intl.string(getSystemLocale.t.WINqKV);
      }
      stringResult1 = formatToPlainStringResult;
      tmp8Result = registerAssetDefault3;
      ICON_FEEDBACK_CRITICAL = ICON_SUBTLE;
      const tmp8Result1 = registerAssetDefault3;
    }
  }
  if (isCanceled) {
    ICON_FEEDBACK_CRITICAL = ThemesDefault.colors.ICON_FEEDBACK_CRITICAL;
  }
  obj = { icon: tmp8Result, text: stringResult1, color: null, shouldChangeTextColor: null };
  const internal = ThemesDefault.internal;
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