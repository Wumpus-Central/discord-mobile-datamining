// discord_app/modules/icymi/native/ICYMIGuildEventRow.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import transitionToGuild from "../../routing/transitionToGuild.native.tsx";
import ICYMIActionCreatorsDefault from "../ICYMIActionCreators.tsx";
import ScheduleUtils from "../../guild_scheduled_events/utils/ScheduleUtils.tsx";
import guild_scheduled_events_GuildScheduledEventModalActionCreators from "../../guild_scheduled_events/GuildScheduledEventModalActionCreators.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildScheduledEventStore from "../../guild_scheduled_events/GuildScheduledEventStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";

require = fn;
function ICYMIGuildEventRow(event) {
  event = event.event;
  ({ channel, guild } = event);
  noop = undefined;
  const tmp = closure_13();
  const tmp4 = guild(9668)(event, null);
  const tmp5 = closure_7(event);
  dependencyMap = tmp5;
  let toISOStringResult;
  if (tmp4 != null) {
    const startTime = tmp4.startTime;
    toISOStringResult = startTime.toISOString();
  }
  noop = toISOStringResult;
  const items = [toISOStringResult, tmp5];
  const tmp7 = guild(4713)(channel);
  let obj = event(9705);
  const locationFromEvent = obj.getLocationFromEvent(event);
  let obj1 = event(9769);
  const eventLocationIconSource = obj1.getEventLocationIconSource(event, channel, true);
  let obj2 = event(9769);
  const eventLocationIconComponent = obj2.getEventLocationIconComponent(event, channel, true);
  let obj3 = event(9665);
  const items1 = [event];
  const nextRecurrenceIdInEvent = obj3.getNextRecurrenceIdInEvent(event);
  const items2 = [guild.id, event.id];
  const callback = noop.useCallback(() => {
    let obj = ICYMIActionCreatorsDefault;
    obj.itemInteracted(event.id, "guild_event", "press_event");
    obj = {
      itemId: event.id,
      itemType: "guild_event",
      actionParameters: {
        actionGestureType: "press",
        actionTargetElement: "item_body",
        actionIntentType: "navigate",
        actionDestinationType: "event",
      },
    };
    ICYMIActionCreatorsDefault.feedItemActioned(obj);
    obj = { eventId: event.id, event };
    const result = guild_scheduled_events_GuildScheduledEventModalActionCreators.openGuildEventDetails(obj);
  }, items1);
  const callback1 = noop.useCallback(() => {
    let obj = ICYMIActionCreatorsDefault;
    obj.itemInteracted(event.id, "guild_event", "press_event");
    obj = {
      itemId: event.id,
      itemType: "guild_event",
      actionParameters: {
        actionGestureType: "press",
        actionTargetElement: "item_header",
        actionIntentType: "navigate",
        actionDestinationType: "guild",
      },
    };
    ICYMIActionCreatorsDefault.feedItemActioned(obj);
    transitionToGuild.transitionToGuild(guild.id);
  }, items2);
  let title = null != event.description;
  if (title) {
    title = event.description.length > 0;
  }
  let guild_id;
  let tmp2Result = guild(9780);
  if (event != null) {
    guild_id = event.guild_id;
  }
  let id;
  if (event != null) {
    id = event.id;
  }
  obj = {
    actionLabel: null,
    id: null,
    interactionType: "guild_event",
    channelId: null,
    guildId: null,
    timestamp: null,
    onHeaderPress: null,
    onHeaderLongPress: null,
    children: null,
  };
  tmp2Result = guild(16493);
  let intl = tmp8(1114).intl;
  obj.actionLabel = intl.string(event(1114).t["6pFsLQ"]);
  obj.id = event.id;
  let id1;
  if (channel != null) {
    id1 = channel.id;
  }
  obj.channelId = id1;
  obj.guildId = guild.id;
  const tmp2ResultResult = tmp2Result(guild_id, id, nextRecurrenceIdInEvent);
  obj.timestamp = guild(11).extractTimestamp(event.id);
  obj.onHeaderPress = callback1;
  obj.onHeaderLongPress = callback1;
  obj = { onPress: callback, style: tmp.container, children: null };
  obj1 = { style: tmp.timeAndUserPillContainer, children: null };
  let str = "text-brand";
  if (tmp5) {
    str = "status-positive";
  }
  obj1.children = closure_11(event(4556).Text, {
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
    }, items).startDateTimeString,
  });
  const items3 = [closure_11(closure_5, obj1), , , ,];
  if (title) {
    title = tmp.title;
  }
  obj2 = { style: title, variant: "text-lg/semibold", children: event.name };
  items3[1] = closure_11(event(4556).Text, obj2);
  let tmp19Result = null != event.description;
  if (tmp19Result) {
    tmp19Result = event.description.length > 0;
  }
  if (tmp19Result) {
    obj3 = { variant: "text-md/normal", color: "text-subtle", lineClamp: 5, children: null };
    let tmp8Result = tmp8(9771);
    const obj4 = { guildId: guild.id };
    obj3.children = tmp8Result.guildEventDetailsParser(event.description, true, obj4);
    tmp19Result = closure_11(tmp8(4556).Text, obj3);
  }
  items3[2] = tmp19Result;
  items3[3] = closure_11(closure_5, { style: tmp.separator });
  const obj6 = { style: tmp.infoContainer, children: null };
  const obj7 = { style: tmp.locationContainer, children: null };
  const items4 = [closure_11(event(5089).GroupIcon, { size: "xs", style: tmp.eventsChannelIcon })];
  const obj9 = { lineClamp: 1, variant: "text-xs/normal", color: "text-muted", children: null };
  const intl2 = tmp8(1114).intl;
  obj9.children = intl2.format(event(1114).t["+DLsD8"], { count: tmp2ResultResult });
  items4[1] = closure_11(event(4556).Text, obj9);
  obj7.children = items4;
  const items5 = [closure_12(closure_5, obj7)];
  const obj10 = { style: tmp.locationContainer, children: null };
  if (null != eventLocationIconComponent) {
    const obj11 = { size: "xs", style: tmp.eventsChannelIcon };
    tmp19Result = closure_11(eventLocationIconComponent, obj11);
  } else {
    tmp19Result = null != eventLocationIconSource;
    if (tmp19Result) {
      const obj12 = {
        source: eventLocationIconSource,
        size: tmp8(1178).Icon.Sizes.EXTRA_SMALL,
        style: tmp.eventsChannelIcon,
        disableColor: true,
      };
      tmp19Result = closure_11(tmp8(1178).Icon, obj12);
    }
  }
  const items6 = [tmp19Result];
  let tmp27 = tmp7;
  if (tmp7 == null) {
    let result = null;
    if (null != locationFromEvent) {
      tmp8Result = tmp8(9771);
      result = tmp8Result.guildEventLocationParser(locationFromEvent, true);
    }
    tmp27 = result;
  }
  items6[1] = closure_11(event(4556).Text, {
    lineClamp: 2,
    variant: "text-xs/normal",
    color: "text-muted",
    children: tmp27,
  });
  obj10.children = items6;
  items5[1] = closure_12(closure_5, obj10);
  obj6.children = items5;
  items3[4] = closure_12(closure_5, obj6);
  obj.children = items3;
  obj.children = closure_12(closure_4, obj);
  return closure_11(tmp2Result, obj);
}
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
let GuildScheduledEventStore = fn(7526);
({ isGuildEventEnded: metroRequire, isGuildScheduledEventActive: closure_7 } = GuildScheduledEventStore);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createICYMIStyles = fn(16452);
let closure_13 = createICYMIStyles.createICYMIStyles((marginHorizontal) => {
  let obj = {
    container: {
      marginHorizontal: marginHorizontal.margin,
      marginBottom: marginHorizontal.margin,
      marginLeft: marginHorizontal.margin + marginHorizontal.inset,
    },
    card: null,
    title: null,
    timeAndUserPillContainer: null,
    separator: null,
    eventsChannelIcon: null,
    infoContainer: null,
    locationContainer: null,
  };
  obj = { marginTop: nativeDefault.space.PX_12 };
  obj.card = obj;
  obj = { marginBottom: nativeDefault.space.PX_4 };
  obj.title = obj;
  obj.timeAndUserPillContainer = {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: nativeDefault.space.PX_8,
    justifyContent: "space-between",
  };
  const size = {
    height: 1,
    width: "100%",
    backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
    marginVertical: nativeDefault.space.PX_12,
  };
  obj.separator = size;
  const obj1 = {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: nativeDefault.space.PX_8,
    justifyContent: "space-between",
  };
  obj.eventsChannelIcon = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  const obj2 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  obj.infoContainer = { gap: nativeDefault.space.PX_4 };
  const obj3 = { gap: nativeDefault.space.PX_4 };
  obj.locationContainer = { alignItems: "center", flexDirection: "row", gap: nativeDefault.space.PX_8 };
  return obj;
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/ICYMIGuildEventRow.tsx");

export default function ICYMIGuildEventRowWrapper(eventId) {
  eventId = eventId.eventId;
  let obj = eventId(504);
  const items = [GuildScheduledEventStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildScheduledEventStore.getGuildScheduledEvent(eventId));
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
        obj = { event: stateFromStores, channel: tmp4, guild: stateFromStores1 };
        tmp5 = closure_11(ICYMIGuildEventRow, obj);
      }
    }
  }
  return tmp5;
}
