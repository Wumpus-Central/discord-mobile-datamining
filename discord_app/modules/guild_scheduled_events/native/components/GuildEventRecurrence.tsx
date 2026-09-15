// discord_app/modules/guild_scheduled_events/native/components/GuildEventRecurrence.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ScheduleUtils from "../../utils/ScheduleUtils.tsx";
import GuildScheduledEventModalActionCreators from "../GuildScheduledEventModalActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import GuildScheduledEventStore from "../../GuildScheduledEventStore.tsx";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4639);
let obj2 = {
  container: { alignSelf: "stretch", flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  eventHeader: { marginStart: 8, flexShrink: 0, flexGrow: 1 },
  active: {
    backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_SELECTED,
    borderRadius: nativeDefault.radii.xs,
  },
  actions: { alignItems: "center", flexDirection: "row", flexShrink: 0 },
  secondarySmallButton: null,
  secondarySmallIcon: null,
};
let obj3 = {
  backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_SELECTED,
  borderRadius: nativeDefault.radii.xs,
};
obj2.secondarySmallButton = {
  flexShrink: 0,
  alignItems: "center",
  flexDirection: "row",
  padding: 8,
  marginLeft: 8,
  borderRadius: nativeDefault.radii.xs,
};
let obj4 = {
  flexShrink: 0,
  alignItems: "center",
  flexDirection: "row",
  padding: 8,
  marginLeft: 8,
  borderRadius: nativeDefault.radii.xs,
};
obj2.secondarySmallIcon = { tintColor: nativeDefault.colors.TEXT_STRONG };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventRecurrence.tsx");

export default function GuildEventRecurrence(recurrenceId) {
  recurrenceId = recurrenceId.recurrenceId;
  const guildEventId = recurrenceId.guildEventId;
  ({ onPress: dependencyMap, isActive } = recurrenceId);
  let stateFromStores1;
  closure_5 = undefined;
  c6 = undefined;
  closure_7 = undefined;
  const tmp = closure_10();
  const items = [closure_7];
  const stateFromStores = recurrenceId(504).useStateFromStores(items, () =>
    GuildScheduledEventStore.getGuildScheduledEvent(guildEventId),
  );
  let id;
  let obj = recurrenceId(504);
  const tmp5 = guildEventId;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let obj2 = guildEventId(9801)(recurrenceId, id);
  const tmp6 = guildEventId(9801);
  const items1 = [c6];
  stateFromStores1 = recurrenceId(504).useStateFromStores(items1, () => {
    let guild_id;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    return GuildStore.getGuild(guild_id);
  });
  const tmp2Result = recurrenceId(504);
  const items2 = [closure_5];
  let stateFromStores2 = recurrenceId(504).useStateFromStores(items2, () => {
    let channel_id;
    if (stateFromStores != null) {
      channel_id = stateFromStores.channel_id;
    }
    return ChannelStore.getChannel(channel_id);
  });
  const tmp2Result4 = recurrenceId(504);
  if (stateFromStores2 == null) {
    stateFromStores2 = stateFromStores1;
  }
  closure_5 = recurrenceId(9803).useManageResourcePermissions(stateFromStores2).canManageGuildEvent(stateFromStores);
  const tmp2Result5 = recurrenceId(9803);
  const eventScheduleById = recurrenceId(9800).useEventScheduleById(guildEventId, recurrenceId);
  let toISOStringResult;
  if (eventScheduleById != null) {
    const startTime = eventScheduleById.startTime;
    toISOStringResult = startTime.toISOString();
  }
  c6 = toISOStringResult;
  const items3 = [toISOStringResult];
  const memo = stateFromStores.useMemo(() => {
    let eventTimeData = null;
    if (null != c6) {
      eventTimeData = ScheduleUtils.getEventTimeData(tmp);
    }
    return eventTimeData;
  }, items3);
  if (null == stateFromStores) {
    return null;
  } else {
    if (obj2 == null) {
      obj2 = {};
    }
    const is_canceled = obj2.is_canceled;
    let tmp21Result = undefined !== is_canceled && is_canceled;
    closure_7 = tmp21Result;
    let str2 = "";
    if (tmp21Result) {
      const intl = tmp2(1115).intl;
      const _HermesInternal = HermesInternal;
      str2 = "" + intl.string(tmp2(1115).t.fyBVRm) + ", ";
    }
    let str4 = "";
    const sum = str2 + stateFromStores.name;
    if (null != memo) {
      const _HermesInternal2 = HermesInternal;
      str4 = ", " + memo.startDateTimeString;
    }
    const sum1 = sum + str4;
    const items4 = [tmp.container];
    let active;
    if (isActive) {
      active = tmp.active;
    }
    const obj3 = { style: null, children: null };
    items4[1] = active;
    obj3.style = items4;
    const obj4 = {
      accessible: true,
      accessibilityRole: "button",
      accessibilityLabel: sum1,
      onPress(stopPropagation) {
        stopPropagation.stopPropagation();
        if (!closure_7) {
          if (dependencyMap != null) {
            tmp2(recurrenceId);
          }
        }
      },
      style: tmp.eventHeader,
      children: null,
    };
    const obj5 = { isActive, event: stateFromStores, showUserCount: false, showCreator: false, recurrenceId };
    obj4.children = closure_8(tmp2(9904).GuildEventCardHeader, obj5);
    const items5 = [closure_8(tmp2(5207).PressableOpacity, obj4)];
    const obj6 = { style: tmp.actions, children: null };
    if (tmp21Result) {
      const obj7 = { variant: "text-sm/semibold", color: "text-feedback-critical", children: null };
      const intl2 = tmp2(1115).intl;
      obj7.children = intl2.string(tmp2(1115).t.fyBVRm);
      tmp21Result = closure_8(tmp2(4635).Text, obj7);
    }
    const items6 = [tmp21Result];
    const obj8 = {
      accessible: true,
      accessibilityRole: "button",
      accessibilityLabel: null,
      onPress: null,
      style: null,
      children: null,
    };
    const intl3 = tmp2(1115).intl;
    const _HermesInternal3 = HermesInternal;
    obj8.accessibilityLabel = "" + intl3.string(tmp2(1115).t.HIgA5a) + ", " + sum1;
    obj8.onPress = function onPress(stopPropagation) {
      if (null != stateFromStores) {
        stopPropagation.stopPropagation();
        if (null != stateFromStores1) {
          const result = GuildScheduledEventModalActionCreators.showGuildEventModeratorActionSheet(
            tmp,
            closure_5,
            recurrenceId,
          );
        }
      }
    };
    obj8.style = tmp.secondarySmallButton;
    const obj9 = { source: tmp5(9932), size: tmp2(1177).Icon.Sizes.REFRESH_SMALL_16, style: tmp.secondarySmallIcon };
    obj8.children = closure_8(tmp2(1177).Icon, obj9);
    items6[1] = closure_8(tmp2(5207).PressableOpacity, obj8);
    obj6.children = items6;
    items5[1] = closure_9(stateFromStores1, obj6);
    obj3.children = items5;
    return closure_9(stateFromStores1, obj3);
  }
  const tmp2Result6 = recurrenceId(9800);
}
