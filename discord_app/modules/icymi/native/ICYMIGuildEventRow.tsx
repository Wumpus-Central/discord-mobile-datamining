// === Module 16855: ICYMIGuildEventRow ===

// Module 16855 (ICYMIGuildEventRow)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import transitionToGuild from "transitionToGuild" /* 7584 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8622 */;
import ScheduleUtils from "ScheduleUtils" /* 9753 */;
import guild_scheduled_events_GuildScheduledEventModalActionCreators from "guild_scheduled_events/GuildScheduledEventModalActionCreators" /* 9887 */;
import noop from "module_19" /* 19 */;
import GuildScheduledEventStore_mod from "GuildScheduledEventStore" /* 7768 */;
import ChannelStore from "ChannelStore" /* 2041 */;
import GuildStore from "GuildStore" /* 2063 */;

require = fn;
function ICYMIGuildEventRow(event) {
  event = event.event;
  ({ channel, guild } = event);
  noop = undefined;
  const tmp = closure_13();
  const tmp4 = guild(9756)(event, null);
  const tmp5 = closure_7(event);
  dependencyMap = tmp5;
  let toISOStringResult;
  if (tmp4 != null) {
    const startTime = tmp4.startTime;
    toISOStringResult = startTime.toISOString();
  }
  noop = toISOStringResult;
  const items = [toISOStringResult, tmp5];
  const tmp7 = guild(4909)(channel);
  const locationFromEvent = event(9790).getLocationFromEvent(event);
  let obj = event(9790);
  const eventLocationIconSource = event(9866).getEventLocationIconSource(event, channel, true);
  let obj2 = event(9866);
  const eventLocationIconComponent = event(9866).getEventLocationIconComponent(event, channel, true);
  let obj3 = event(9866);
  const items1 = [event];
  const nextRecurrenceIdInEvent = event(9753).getNextRecurrenceIdInEvent(event);
  const items2 = [guild.id, event.id];
  const callback = noop.useCallback(() => {
    ICYMIActionCreatorsDefault.itemInteracted(event.id, "guild_event", "press_event");
    ICYMIActionCreatorsDefault.feedItemActioned({ itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } });
    const obj3 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
    const result = guild_scheduled_events_GuildScheduledEventModalActionCreators.openGuildEventDetails({ eventId: event.id, event });
  }, items1);
  const callback1 = noop.useCallback(() => {
    ICYMIActionCreatorsDefault.itemInteracted(event.id, "guild_event", "press_event");
    ICYMIActionCreatorsDefault.feedItemActioned({ itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "navigate", actionDestinationType: "guild" } });
    const obj3 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "navigate", actionDestinationType: "guild" } };
    transitionToGuild.transitionToGuild(guild.id);
  }, items2);
  let title = null != event.description;
  if (title) {
    title = event.description.length > 0;
  }
  let guild_id;
  const obj4 = event(9753);
  if (event != null) {
    guild_id = event.guild_id;
  }
  let id;
  if (event != null) {
    id = event.id;
  }
  const tmp2Result = guild(9878);
  const obj5 = { actionLabel: null, id: null, interactionType: "guild_event", channelId: null, guildId: null, timestamp: null, onHeaderPress: null, onHeaderLongPress: null, children: null };
  const tmp2ResultResult = guild(9878)(guild_id, id, nextRecurrenceIdInEvent);
  let intl = tmp8(1115).intl;
  obj5.actionLabel = intl.string(event(1115).t["6pFsLQ"]);
  obj5.id = event.id;
  let id1;
  if (channel != null) {
    id1 = channel.id;
  }
  obj5.channelId = id1;
  obj5.guildId = guild.id;
  const tmp2Result3 = guild(16832);
  obj5.timestamp = guild(11).extractTimestamp(event.id);
  obj5.onHeaderPress = callback1;
  obj5.onHeaderLongPress = callback1;
  const obj6 = { onPress: callback, style: tmp.container, children: null };
  const obj7 = { style: tmp.timeAndUserPillContainer, children: null };
  let str = "text-brand";
  if (tmp5) {
    str = "status-positive";
  }
  obj7.children = closure_11(event(4752).Text, {
    variant: "text-sm/semibold",
    color: str,
    children: noop.useMemo(() => {
      if (closure_2) {
        const obj = { startDateTimeString: null };
        const intl = util.intl;
        obj.startDateTimeString = intl.string(util.t.TxqPQR);
        let eventTimeData = obj;
      } else {
        eventTimeData = ScheduleUtils.getEventTimeData(c3);
        const tmpResult = ScheduleUtils;
      }
      return eventTimeData;
    }, items).startDateTimeString
  });
  const items3 = [closure_11(closure_5, obj7), , , , ];
  if (title) {
    title = tmp.title;
  }
  items3[1] = closure_11(event(4752).Text, { style: title, variant: "text-lg/semibold", children: event.name });
  let tmp19Result = null != event.description;
  if (tmp19Result) {
    tmp19Result = event.description.length > 0;
  }
  if (tmp19Result) {
    const obj9 = { variant: "text-md/normal", color: "text-subtle", lineClamp: 5, children: null };
    const obj10 = { guildId: guild.id };
    obj9.children = tmp8(9868).guildEventDetailsParser(event.description, true, obj10);
    tmp19Result = closure_11(tmp8(4752).Text, obj9);
    const tmp8Result = tmp8(9868);
  }
  items3[2] = tmp19Result;
  items3[3] = closure_11(closure_5, { style: tmp.separator });
  const obj12 = { style: tmp.infoContainer, children: null };
  const obj13 = { style: tmp.locationContainer, children: null };
  const items4 = [closure_11(event(5307).GroupIcon, { size: "xs", style: tmp.eventsChannelIcon }), ];
  const obj15 = { lineClamp: 1, variant: "text-xs/normal", color: "text-muted", children: null };
  const intl2 = tmp8(1115).intl;
  obj15.children = intl2.format(event(1115).t["+DLsD8"], { count: tmp2ResultResult });
  items4[1] = closure_11(event(4752).Text, obj15);
  obj13.children = items4;
  const items5 = [closure_12(closure_5, obj13), ];
  const obj16 = { style: tmp.locationContainer, children: null };
  if (null != eventLocationIconComponent) {
    const obj17 = { size: "xs", style: tmp.eventsChannelIcon };
    let tmp19Result2 = closure_11(eventLocationIconComponent, obj17);
  } else {
    tmp19Result2 = null != eventLocationIconSource;
    if (tmp19Result2) {
      const obj18 = { source: eventLocationIconSource, size: tmp8(1177).Icon.Sizes.EXTRA_SMALL, style: tmp.eventsChannelIcon, disableColor: true };
      tmp19Result2 = closure_11(tmp8(1177).Icon, obj18);
    }
  }
  const items6 = [tmp19Result2, ];
  let tmp27 = tmp7;
  if (tmp7 == null) {
    let result = null;
    if (null != locationFromEvent) {
      result = tmp8(9868).guildEventLocationParser(locationFromEvent, true);
      const tmp8Result2 = tmp8(9868);
    }
    tmp27 = result;
  }
  items6[1] = closure_11(event(4752).Text, { lineClamp: 2, variant: "text-xs/normal", color: "text-muted", children: tmp27 });
  obj16.children = items6;
  items5[1] = closure_12(closure_5, obj16);
  obj12.children = items5;
  items3[4] = closure_12(closure_5, obj12);
  obj6.children = items3;
  obj5.children = closure_12(closure_4, obj6);
  return closure_11(tmp2Result3, obj5);
}
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
let GuildScheduledEventStore = fn(7768);
({ isGuildEventEnded: metroRequire, isGuildScheduledEventActive: closure_7 } = GuildScheduledEventStore);
let GuildScheduledEventStore = GuildScheduledEventStore_mod;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createICYMIStyles = fn(16791);
let closure_13 = createICYMIStyles.createICYMIStyles((marginHorizontal) => {
  const obj = { container: { marginHorizontal: marginHorizontal.margin, marginBottom: marginHorizontal.margin, marginLeft: marginHorizontal.margin + marginHorizontal.inset }, card: { marginTop: nativeDefault.space.PX_12 }, title: null, timeAndUserPillContainer: null, separator: null, eventsChannelIcon: null, infoContainer: null, locationContainer: null };
  const obj2 = { marginTop: nativeDefault.space.PX_12 };
  obj.title = { marginBottom: nativeDefault.space.PX_4 };
  const obj3 = { marginBottom: nativeDefault.space.PX_4 };
  obj.timeAndUserPillContainer = { flexDirection: "row", alignItems: "center", marginBottom: nativeDefault.space.PX_8, justifyContent: "space-between" };
  const size = { height: 1, width: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginVertical: nativeDefault.space.PX_12 };
  obj.separator = size;
  const obj4 = { flexDirection: "row", alignItems: "center", marginBottom: nativeDefault.space.PX_8, justifyContent: "space-between" };
  obj.eventsChannelIcon = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  const obj5 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  obj.infoContainer = { gap: nativeDefault.space.PX_4 };
  const obj6 = { gap: nativeDefault.space.PX_4 };
  obj.locationContainer = { alignItems: "center", flexDirection: "row", gap: nativeDefault.space.PX_8 };
  return obj;
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/ICYMIGuildEventRow.tsx");

export default function ICYMIGuildEventRowWrapper(eventId) {
  eventId = eventId.eventId;
  const items = [GuildScheduledEventStore];
  const stateFromStores = eventId(504).useStateFromStores(items, () => GuildScheduledEventStore.getGuildScheduledEvent(eventId));
  const obj = eventId(504);
  const items1 = [GuildStore];
  const stateFromStores1 = eventId(504).useStateFromStores(items1, () => {
    let guild_id;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    return GuildStore.getGuild(guild_id);
  });
  eventId(504);
  [][0] = ChannelStore;
  let tmp5 = null;
  if (null != stateFromStores) {
    tmp5 = null;
    if (null != stateFromStores1) {
      tmp5 = null;
      if (!closure_6(stateFromStores)) {
        const obj3 = { event: stateFromStores, channel: tmp4, guild: stateFromStores1 };
        tmp5 = closure_11(ICYMIGuildEventRow, obj3);
      }
    }
  }
  return tmp5;
};