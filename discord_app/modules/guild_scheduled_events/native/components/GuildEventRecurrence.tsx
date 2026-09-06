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
fn(4560);
let createStyles = {
  container: { alignSelf: "stretch", flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  eventHeader: { marginStart: 8, flexShrink: 0, flexGrow: 1 },
  active: null,
  actions: null,
  secondarySmallButton: null,
  secondarySmallIcon: null,
};
createStyles = {
  backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_SELECTED,
  borderRadius: nativeDefault.radii.xs,
};
createStyles.active = createStyles;
createStyles.actions = { alignItems: "center", flexDirection: "row", flexShrink: 0 };
createStyles.secondarySmallButton = {
  flexShrink: 0,
  alignItems: "center",
  flexDirection: "row",
  padding: 8,
  marginLeft: 8,
  borderRadius: nativeDefault.radii.xs,
};
let obj1 = {
  flexShrink: 0,
  alignItems: "center",
  flexDirection: "row",
  padding: 8,
  marginLeft: 8,
  borderRadius: nativeDefault.radii.xs,
};
createStyles.secondarySmallIcon = { tintColor: nativeDefault.colors.TEXT_STRONG };
let closure_10 = createStyles.createStyles(createStyles);
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
  let obj = recurrenceId(504);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () =>
    GuildScheduledEventStore.getGuildScheduledEvent(guildEventId),
  );
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  obj = guildEventId(9669)(recurrenceId, id);
  let tmp2Result = tmp2(504);
  const items1 = [c6];
  stateFromStores1 = tmp2Result.useStateFromStores(items1, () => {
    let guild_id;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    return GuildStore.getGuild(guild_id);
  });
  tmp2Result = tmp2(504);
  const items2 = [closure_5];
  let stateFromStores2 = tmp2Result.useStateFromStores(items2, () => {
    let channel_id;
    if (stateFromStores != null) {
      channel_id = stateFromStores.channel_id;
    }
    return ChannelStore.getChannel(channel_id);
  });
  const tmp5 = guildEventId;
  const tmp6 = guildEventId(9669);
  if (stateFromStores2 == null) {
    stateFromStores2 = stateFromStores1;
  }
  closure_5 = recurrenceId(9671).useManageResourcePermissions(stateFromStores2).canManageGuildEvent(stateFromStores);
  const tmp2Result1 = recurrenceId(9671);
  const eventScheduleById = recurrenceId(9668).useEventScheduleById(guildEventId, recurrenceId);
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
    if (obj == null) {
      obj = {};
    }
    const is_canceled = obj.is_canceled;
    let tmp21Result = undefined !== is_canceled && is_canceled;
    closure_7 = tmp21Result;
    let str2 = "";
    if (tmp21Result) {
      const intl = tmp2(1114).intl;
      const _HermesInternal = HermesInternal;
      str2 = "" + intl.string(tmp2(1114).t.fyBVRm) + ", ";
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
    obj = { style: null, children: null };
    items4[1] = active;
    obj.style = items4;
    const obj1 = {
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
    const obj2 = { isActive, event: stateFromStores, showUserCount: false, showCreator: false, recurrenceId };
    obj1.children = closure_8(tmp2(9772).GuildEventCardHeader, obj2);
    const items5 = [closure_8(tmp2(5123).PressableOpacity, obj1)];
    const obj3 = { style: tmp.actions, children: null };
    if (tmp21Result) {
      const obj4 = { variant: "text-sm/semibold", color: "text-feedback-critical", children: null };
      const intl2 = tmp2(1114).intl;
      obj4.children = intl2.string(tmp2(1114).t.fyBVRm);
      tmp21Result = closure_8(tmp2(4556).Text, obj4);
    }
    const items6 = [tmp21Result];
    const obj5 = {
      accessible: true,
      accessibilityRole: "button",
      accessibilityLabel: null,
      onPress: null,
      style: null,
      children: null,
    };
    const intl3 = tmp2(1114).intl;
    const _HermesInternal3 = HermesInternal;
    obj5.accessibilityLabel = "" + intl3.string(tmp2(1114).t.HIgA5a) + ", " + sum1;
    obj5.onPress = function onPress(stopPropagation) {
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
    obj5.style = tmp.secondarySmallButton;
    const obj6 = { source: tmp5(9800), size: tmp2(1178).Icon.Sizes.REFRESH_SMALL_16, style: tmp.secondarySmallIcon };
    obj5.children = closure_8(tmp2(1178).Icon, obj6);
    items6[1] = closure_8(tmp2(5123).PressableOpacity, obj5);
    obj3.children = items6;
    items5[1] = closure_9(stateFromStores1, obj3);
    obj.children = items5;
    return closure_9(stateFromStores1, obj);
  }
  const tmp2Result2 = recurrenceId(9668);
}
