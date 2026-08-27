// === Module 16017: ICYMIGuildEventRow ===

// Module 16017 (ICYMIGuildEventRow)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import scheduledEventSort from "scheduledEventSort" /* 7204 */;
import closure_8 from "scheduledEventSort" /* 7204 */;
import closure_9 from "ensureGuildLoaded" /* 1391 */;
import closure_10 from "createGuildRecordFromRust" /* 1910 */;
import jsxProd from "jsxProd" /* 21 */;
import createICYMIStyles from "createICYMIStyles" /* 15953 */;

const require = arg1;
function ICYMIGuildEventRow(event) {
  event = event.event;
  ({ channel, guild } = event);
  dependencyMap = undefined;
  let React;
  const tmp = callback4();
  const tmp4 = guild(9558)(event, null);
  const tmp5 = callback2(event);
  dependencyMap = tmp5;
  let toISOStringResult;
  if (tmp4 != null) {
    const startTime = tmp4.startTime;
    toISOStringResult = startTime.toISOString();
  }
  React = toISOStringResult;
  const items = [toISOStringResult, tmp5];
  const tmp7 = guild(4639)(channel);
  let obj = event(9596);
  const locationFromEvent = obj.getLocationFromEvent(event);
  obj1 = event(9660);
  const eventLocationIconSource = obj1.getEventLocationIconSource(event, channel, true);
  let obj2 = event(9660);
  const eventLocationIconComponent = obj2.getEventLocationIconComponent(event, channel, true);
  let obj3 = event(9555);
  const items1 = [event];
  const nextRecurrenceIdInEvent = obj3.getNextRecurrenceIdInEvent(event);
  const items2 = [guild.id, event.id];
  const callback = React.useCallback(() => {
    let obj = guild(8553);
    obj.itemInteracted(event.id, "guild_event", "press_event");
    obj = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
    guild(8553).feedItemActioned(obj);
    const obj2 = guild(8553);
    obj = { eventId: event.id, event };
    const result = event(9680).openGuildEventDetails(obj);
  }, items1);
  const callback1 = React.useCallback(() => {
    let obj = guild(8553);
    obj.itemInteracted(event.id, "guild_event", "press_event");
    obj = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "navigate", actionDestinationType: "guild" } };
    guild(8553).feedItemActioned(obj);
    const obj2 = guild(8553);
    event(6138).transitionToGuild(guild.id);
  }, items2);
  let title = null != event.description;
  if (title) {
    title = event.description.length > 0;
  }
  let guild_id;
  let tmp2Result = tmp2(9671);
  if (event != null) {
    guild_id = event.guild_id;
  }
  let id;
  if (event != null) {
    id = event.id;
  }
  obj = { actionLabel: null, id: null, interactionType: "guild_event", channelId: null, guildId: null, timestamp: null, onHeaderPress: null, onHeaderLongPress: null, children: null };
  tmp2Result = tmp2(15994);
  let intl = tmp8(1236).intl;
  obj[0] = intl.string(event(1236).t["6pFsLQ"]);
  obj[1] = event.id;
  let id1;
  if (channel != null) {
    id1 = channel.id;
  }
  obj[3] = id1;
  obj[4] = guild.id;
  const tmp2ResultResult = tmp2Result(guild_id, id, nextRecurrenceIdInEvent);
  obj[5] = guild(11).extractTimestamp(event.id);
  obj[6] = callback1;
  obj[7] = callback1;
  obj = { onPress: callback, style: tmp.container, children: null };
  obj1 = { style: tmp.timeAndUserPillContainer, children: null };
  let str = "text-brand";
  if (tmp5) {
    str = "status-positive";
  }
  obj1[1] = closure_11(event(4441).Text, {
    variant: "text-sm/semibold",
    color: str,
    children: React.useMemo(() => {
      if (dependencyMap) {
        const obj = { startDateTimeString: null };
        const intl = tmp(1236).intl;
        obj[0] = intl.string(event(1236).t.TxqPQR);
        let eventTimeData = obj;
      } else {
        eventTimeData = tmp(9555).getEventTimeData(c3);
        const tmpResult = tmp(9555);
      }
      return eventTimeData;
    }, items).startDateTimeString
  });
  const items3 = [closure_11(closure_5, obj1), , , , ];
  if (title) {
    title = tmp.title;
  }
  obj2 = { style: title, variant: "text-lg/semibold", children: event.name };
  items3[1] = closure_11(event(4441).Text, obj2);
  let tmp19Result = null != event.description;
  if (tmp19Result) {
    tmp19Result = event.description.length > 0;
  }
  if (tmp19Result) {
    obj3 = { variant: "text-md/normal", color: "text-subtle", lineClamp: 5, children: null };
    let tmp8Result = tmp8(9661);
    const obj4 = { guildId: null };
    obj4[0] = guild.id;
    obj3[3] = tmp8Result.guildEventDetailsParser(event.description, true, obj4);
    tmp19Result = tmp19(tmp8(4441).Text, obj3);
  }
  items3[2] = tmp19Result;
  items3[3] = closure_11(closure_5, { style: tmp.separator });
  const obj6 = { style: tmp.infoContainer, children: null };
  const obj7 = { style: tmp.locationContainer, children: null };
  const items4 = [closure_11(event(4990).GroupIcon, { size: "xs", style: tmp.eventsChannelIcon }), ];
  const obj9 = { lineClamp: 1, variant: "text-xs/normal", color: "text-muted", children: null };
  const intl2 = tmp8(1236).intl;
  obj9[3] = intl2.format(event(1236).t["+DLsD8"], { count: tmp2ResultResult });
  items4[1] = closure_11(event(4441).Text, obj9);
  obj7[1] = items4;
  const items5 = [closure_12(closure_5, obj7), ];
  const obj10 = { style: tmp.locationContainer, children: null };
  if (null != eventLocationIconComponent) {
    const obj11 = { size: "xs", style: null };
    obj11[1] = tmp.eventsChannelIcon;
    tmp19Result = tmp19(eventLocationIconComponent, obj11);
  } else {
    tmp19Result = null != eventLocationIconSource;
    if (tmp19Result) {
      const obj12 = { source: null, size: null, style: null, disableColor: true };
      obj12[0] = eventLocationIconSource;
      obj12[1] = tmp8(1297).Icon.Sizes.EXTRA_SMALL;
      obj12[2] = tmp.eventsChannelIcon;
      tmp19Result = tmp19(tmp8(1297).Icon, obj12);
    }
  }
  const items6 = [tmp19Result, ];
  let tmp27 = tmp7;
  if (tmp7 == null) {
    let result = null;
    if (null != locationFromEvent) {
      tmp8Result = tmp8(9661);
      result = tmp8Result.guildEventLocationParser(locationFromEvent, true);
    }
    tmp27 = result;
  }
  items6[1] = closure_11(event(4441).Text, { lineClamp: 2, variant: "text-xs/normal", color: "text-muted", children: tmp27 });
  obj10[1] = items6;
  items5[1] = closure_12(closure_5, obj10);
  obj6[1] = items5;
  items3[4] = closure_12(closure_5, obj6);
  obj[2] = items3;
  obj[8] = closure_12(closure_4, obj);
  return closure_11(tmp2Result, obj);
}
({ Pressable: c4, View: c5 } = get_ActivityIndicator);
({ isGuildEventEnded: closure_6, isGuildScheduledEventActive: error } = scheduledEventSort);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
let closure_13 = createICYMIStyles.createICYMIStyles((margin) => {
  obj = { container: obj, card: null, title: null, timeAndUserPillContainer: null, separator: null, eventsChannelIcon: null, infoContainer: null, locationContainer: null };
  obj = { marginHorizontal: margin.margin, marginBottom: margin.margin, marginLeft: margin.margin + margin.inset };
  obj = { marginTop: ThemesDefault.space.PX_12 };
  obj[1] = obj;
  obj[2] = { marginBottom: ThemesDefault.space.PX_4 };
  obj1 = { marginBottom: ThemesDefault.space.PX_4 };
  obj[3] = { flexDirection: "row", alignItems: "center", marginBottom: ThemesDefault.space.PX_8, justifyContent: "space-between" };
  const obj2 = { flexDirection: "row", alignItems: "center", marginBottom: ThemesDefault.space.PX_8, justifyContent: "space-between" };
  obj[4] = { height: 1, width: "100%", backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, marginVertical: ThemesDefault.space.PX_12 };
  const obj3 = { height: 1, width: "100%", backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, marginVertical: ThemesDefault.space.PX_12 };
  obj[5] = { tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  const obj4 = { tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  obj[6] = { gap: ThemesDefault.space.PX_4 };
  const obj5 = { gap: ThemesDefault.space.PX_4 };
  obj[7] = { alignItems: "center", flexDirection: "row", gap: ThemesDefault.space.PX_8 };
  return obj;
});
let result = require("set").fileFinishedImporting("modules/icymi/native/ICYMIGuildEventRow.tsx");

export default function ICYMIGuildEventRowWrapper(eventId) {
  eventId = eventId.eventId;
  let stateFromStores;
  let obj = eventId(589);
  const items = [closure_8];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_8.getGuildScheduledEvent(eventId));
  const items1 = [closure_10];
  const stateFromStores1 = eventId(589).useStateFromStores(items1, () => {
    let guild_id;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    return closure_1_10.getGuild(guild_id);
  });
  eventId(589);
  [][0] = closure_9;
  let tmp5 = null;
  if (null != stateFromStores) {
    tmp5 = null;
    if (null != stateFromStores1) {
      tmp5 = null;
      if (!callback(stateFromStores)) {
        obj = { event: null, channel: null, guild: null };
        obj[0] = stateFromStores;
        obj[1] = tmp4;
        obj[2] = stateFromStores1;
        tmp5 = callback3(ICYMIGuildEventRow, obj);
      }
    }
  }
  return tmp5;
};