// === Module 8663: GuildEventRecurrence ===

// Module 8663 (GuildEventRecurrence)
import nativeDefault from "native" /* 587 */;
import ScheduleUtils from "ScheduleUtils" /* 8520 */;
import guild_scheduled_events_GuildScheduledEventModalActionCreators from "guild_scheduled_events/GuildScheduledEventModalActionCreators" /* 8534 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import GuildStore from "GuildStore" /* 2087 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 6054 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { container: { alignSelf: "stretch", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, eventHeader: { marginStart: 8, flexShrink: 0, flexGrow: 1 }, active: { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_SELECTED, borderRadius: nativeDefault.radii.xs }, actions: { alignItems: "center", flexDirection: "row", flexShrink: 0 }, secondarySmallButton: null, secondarySmallIcon: null };
let obj3 = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_SELECTED, borderRadius: nativeDefault.radii.xs };
obj2.secondarySmallButton = { flexShrink: 0, alignItems: "center", flexDirection: "row", padding: 8, marginLeft: 8, borderRadius: nativeDefault.radii.xs };
let obj4 = { flexShrink: 0, alignItems: "center", flexDirection: "row", padding: 8, marginLeft: 8, borderRadius: nativeDefault.radii.xs };
obj2.secondarySmallIcon = { tintColor: nativeDefault.colors.TEXT_STRONG };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { tintColor: nativeDefault.colors.TEXT_STRONG };
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventRecurrence.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildEventRecurrence(recurrenceId) {
  const cResult = recurrenceId(onPress[9]).c(59);
  recurrenceId = recurrenceId.recurrenceId;
  const guildEventId = recurrenceId.guildEventId;
  onPress = recurrenceId.onPress;
  closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildScheduledEventStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildEventId) {
    class S {
      constructor() {
        return closure_7.getGuildScheduledEvent(guildEventId);
      }
    }
    cResult[1] = guildEventId;
    cResult[2] = S;
  } else {
    class S {
      constructor() {
        return closure_7.getGuildScheduledEvent(guildEventId);
      }
    }
  }
  let obj = recurrenceId(onPress[9]);
  const stateFromStores = recurrenceId(onPress[10]).useStateFromStores(first, S);
  const tmpResult = recurrenceId(onPress[10]);
  if (stateFromStores != null) {
    class S {
      constructor() {
        return closure_7.getGuildScheduledEvent(guildEventId);
      }
    }
  }
  guildEventId(onPress[11])(recurrenceId, undefined);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return closure_7.getGuildScheduledEvent(guildEventId);
      }
    }
    const items1 = [GuildStore];
    cResult[3] = items1;
    const tmp11 = items1;
  } else {
    class S {
      constructor() {
        return closure_7.getGuildScheduledEvent(guildEventId);
      }
    }
  }
  if (stateFromStores != null) {
    class S {
      constructor() {
        return closure_7.getGuildScheduledEvent(guildEventId);
      }
    }
  }
  if (cResult[4] !== undefined) {
    class S {
      constructor() {
        return closure_7.getGuildScheduledEvent(guildEventId);
      }
    }
    if (stateFromStores != null) {
      class S {
        constructor() {
          return closure_7.getGuildScheduledEvent(guildEventId);
        }
      }
    }
    class R {
      constructor() {
        guild_id = undefined;
        tmp = closure_6;
        if (closure_3 != null) {
          guild_id = closure_3.guild_id;
        }
        return closure_6.getGuild(guild_id);
      }
    }
    cResult[4] = tmp13;
    cResult[5] = R;
  } else {
    class S {
      constructor() {
        return closure_7.getGuildScheduledEvent(guildEventId);
      }
    }
  }
  const tmp9 = guildEventId(onPress[11]);
  const stateFromStores1 = recurrenceId(onPress[10]).useStateFromStores(tmp11, R);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return closure_7.getGuildScheduledEvent(guildEventId);
      }
    }
    const items2 = [];
    class R {
      constructor() {
        guild_id = undefined;
        tmp = closure_6;
        if (closure_3 != null) {
          guild_id = closure_3.guild_id;
        }
        return closure_6.getGuild(guild_id);
      }
    }
    cResult[6] = items2;
    const tmp15 = items2;
  } else {
    class S {
      constructor() {
        return closure_7.getGuildScheduledEvent(guildEventId);
      }
    }
  }
  if (stateFromStores != null) {
    class S {
      constructor() {
        return closure_7.getGuildScheduledEvent(guildEventId);
      }
    }
  }
  if (cResult[7] !== undefined) {
    class S {
      constructor() {
        return closure_7.getGuildScheduledEvent(guildEventId);
      }
    }
    if (stateFromStores != null) {
      class S {
        constructor() {
          return closure_7.getGuildScheduledEvent(guildEventId);
        }
      }
    }
    class G {
      constructor() {
        channel_id = undefined;
        tmp = closure_5;
        if (closure_3 != null) {
          channel_id = closure_3.channel_id;
        }
        return closure_5.getChannel(channel_id);
      }
    }
    cResult[7] = tmp17;
    cResult[8] = G;
  } else {
    class S {
      constructor() {
        return closure_7.getGuildScheduledEvent(guildEventId);
      }
    }
  }
  const tmpResult4 = recurrenceId(onPress[10]);
  const stateFromStores2 = recurrenceId(onPress[10]).useStateFromStores(tmp15, G);
  const tmpResult5 = recurrenceId(onPress[10]);
  if (stateFromStores2 == null) {
    class S {
      constructor() {
        return closure_7.getGuildScheduledEvent(guildEventId);
      }
    }
  }
  const canManageGuildEvent = recurrenceId(onPress[12]).useManageResourcePermissions(stateFromStores2).canManageGuildEvent;
  if (cResult[9] === canManageGuildEvent) {
    class S {
      constructor() {
        return closure_7.getGuildScheduledEvent(guildEventId);
      }
    }
    ChannelStore = canManageGuildEventResult;
    class G {
      constructor() {
        channel_id = undefined;
        tmp = closure_5;
        if (closure_3 != null) {
          channel_id = closure_3.channel_id;
        }
        return closure_5.getChannel(channel_id);
      }
    }
    const eventScheduleById = obj6.useEventScheduleById(guildEventId, recurrenceId);
    if (eventScheduleById != null) {
      class S {
        constructor() {
          return closure_7.getGuildScheduledEvent(guildEventId);
        }
      }
    }
    if (cResult[12] !== undefined) {
      class S {
        constructor() {
          return closure_7.getGuildScheduledEvent(guildEventId);
        }
      }
      if (eventScheduleById != null) {
        class S {
          constructor() {
            return closure_7.getGuildScheduledEvent(guildEventId);
          }
        }
        const toISOStringResult = obj7.toISOString();
      }
      class G {
        constructor() {
          channel_id = undefined;
          tmp = closure_5;
          if (closure_3 != null) {
            channel_id = closure_3.channel_id;
          }
          return closure_5.getChannel(channel_id);
        }
      }
      if (eventScheduleById != null) {
        class S {
          constructor() {
            return closure_7.getGuildScheduledEvent(guildEventId);
          }
        }
      }
      cResult[12] = tmp24;
      cResult[13] = toISOStringResult;
    } else {
      class S {
        constructor() {
          return closure_7.getGuildScheduledEvent(guildEventId);
        }
      }
    }
    if (cResult[14] !== tmp22) {
      class S {
        constructor() {
          return closure_7.getGuildScheduledEvent(guildEventId);
        }
      }
      if (null != tmp22) {
        class S {
          constructor() {
            return closure_7.getGuildScheduledEvent(guildEventId);
          }
        }
        const eventTimeData = obj8.getEventTimeData(tmp22);
      }
      class G {
        constructor() {
          channel_id = undefined;
          tmp = closure_5;
          if (closure_3 != null) {
            channel_id = closure_3.channel_id;
          }
          return closure_5.getChannel(channel_id);
        }
      }
      cResult[14] = tmp22;
      cResult[15] = eventTimeData;
      const tmp25 = eventTimeData;
    } else {
      class S {
        constructor() {
          return closure_7.getGuildScheduledEvent(guildEventId);
        }
      }
    }
    if (null == stateFromStores) {
      class S {
        constructor() {
          return closure_7.getGuildScheduledEvent(guildEventId);
        }
      }
    } else {
      class S {
        constructor() {
          return closure_7.getGuildScheduledEvent(guildEventId);
        }
      }
      const is_canceled = tmp27.is_canceled;
      class G {
        constructor() {
          channel_id = undefined;
          tmp = closure_5;
          if (closure_3 != null) {
            channel_id = closure_3.channel_id;
          }
          return closure_5.getChannel(channel_id);
        }
      }
      GuildStore = tmp28;
      if (cResult[18] !== tmp28) {
        class S {
          constructor() {
            return closure_7.getGuildScheduledEvent(guildEventId);
          }
        }
        class G {
          constructor() {
            channel_id = undefined;
            tmp = closure_5;
            if (closure_3 != null) {
              channel_id = closure_3.channel_id;
            }
            return closure_5.getChannel(channel_id);
          }
        }
        cResult[18] = tmp28;
        cResult[19] = "";
      } else {
        class S {
          constructor() {
            return closure_7.getGuildScheduledEvent(guildEventId);
          }
        }
      }
      const sum = tmp29 + stateFromStores.name;
      if (null != tmp25) {
        class S {
          constructor() {
            return closure_7.getGuildScheduledEvent(guildEventId);
          }
        }
        class G {
          constructor() {
            channel_id = undefined;
            tmp = closure_5;
            if (closure_3 != null) {
              channel_id = closure_3.channel_id;
            }
            return closure_5.getChannel(channel_id);
          }
        }
      }
      const sum1 = sum + str3;
      if (cResult[20] === tmp28) {
        class S {
          constructor() {
            return closure_7.getGuildScheduledEvent(guildEventId);
          }
        }
      }
      function handlePress(stopPropagation) {
        stopPropagation.stopPropagation();
        if (!closure_6) {
          if (onPress != null) {
            tmp2(recurrenceId);
          }
        }
      }
      cResult[20] = tmp28;
      cResult[21] = onPress;
      cResult[22] = recurrenceId;
      cResult[23] = handlePress;
    }
  }
  canManageGuildEventResult = canManageGuildEvent(stateFromStores);
  cResult[9] = canManageGuildEvent;
  cResult[10] = stateFromStores;
  cResult[11] = canManageGuildEventResult;
  const tmpResult6 = recurrenceId(onPress[12]);
}) : (function GuildEventRecurrence(recurrenceId) {
  recurrenceId = recurrenceId.recurrenceId;
  const guildEventId = recurrenceId.guildEventId;
  ({ onPress: dependencyMap, isActive } = recurrenceId);
  let stateFromStores1;
  closure_5 = undefined;
  c6 = undefined;
  closure_7 = undefined;
  const tmp = closure_10();
  const items = [closure_7];
  const stateFromStores = recurrenceId(504).useStateFromStores(items, () => GuildScheduledEventStore.getGuildScheduledEvent(guildEventId));
  let id;
  let obj = recurrenceId(504);
  const tmp5 = guildEventId;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let obj2 = guildEventId(8525)(recurrenceId, id);
  const tmp6 = guildEventId(8525);
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
  closure_5 = recurrenceId(8572).useManageResourcePermissions(stateFromStores2).canManageGuildEvent(stateFromStores);
  const tmp2Result5 = recurrenceId(8572);
  const eventScheduleById = recurrenceId(8526).useEventScheduleById(guildEventId, recurrenceId);
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
      const intl = tmp2(1126).intl;
      const _HermesInternal = HermesInternal;
      str2 = "" + intl.string(tmp2(1126).t.fyBVRm) + ", ";
    }
    let str4 = "";
    const sum = str2 + stateFromStores.name;
    if (null != memo) {
      const _HermesInternal2 = HermesInternal;
      str4 = ", " + memo.startDateTimeString;
    }
    const sum1 = sum + str4;
    const items4 = [tmp.container, ];
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
      onPress: function handlePress(stopPropagation) {
          stopPropagation.stopPropagation();
          if (!closure_7) {
            if (dependencyMap != null) {
              tmp2(recurrenceId);
            }
          }
        },
      style: tmp.eventHeader,
      children: null
    };
    const obj5 = { isActive, event: stateFromStores, showUserCount: false, showCreator: false, recurrenceId };
    obj4.children = closure_8(tmp2(8530).GuildEventCardHeader, obj5);
    const items5 = [closure_8(tmp2(6184).PressableOpacity, obj4), ];
    const obj6 = { style: tmp.actions, children: null };
    if (tmp21Result) {
      const obj7 = { variant: "text-sm/semibold", color: "text-feedback-critical", children: null };
      const intl2 = tmp2(1126).intl;
      obj7.children = intl2.string(tmp2(1126).t.fyBVRm);
      tmp21Result = closure_8(tmp2(5088).Text, obj7);
    }
    const items6 = [tmp21Result, ];
    const obj8 = { accessible: true, accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
    const intl3 = tmp2(1126).intl;
    const _HermesInternal3 = HermesInternal;
    obj8.accessibilityLabel = "" + intl3.string(tmp2(1126).t.HIgA5a) + ", " + sum1;
    obj8.onPress = function handlePressOverflow(stopPropagation) {
      if (null != stateFromStores) {
        stopPropagation.stopPropagation();
        if (null != stateFromStores1) {
          const result = guild_scheduled_events_GuildScheduledEventModalActionCreators.showGuildEventModeratorActionSheet(tmp, closure_5, recurrenceId);
        }
      }
    };
    obj8.style = tmp.secondarySmallButton;
    const obj9 = { source: tmp5(8664), size: tmp2(1200).Icon.Sizes.REFRESH_SMALL_16, style: tmp.secondarySmallIcon };
    obj8.children = closure_8(tmp2(1200).Icon, obj9);
    items6[1] = closure_8(tmp2(6184).PressableOpacity, obj8);
    obj6.children = items6;
    items5[1] = closure_9(stateFromStores1, obj6);
    obj3.children = items5;
    return closure_9(stateFromStores1, obj3);
  }
  const tmp2Result6 = recurrenceId(8526);
});