// === Module 8940: GuildEventRecurrence ===

// Module 8940 (GuildEventRecurrence)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "ensureGuildLoaded" /* 1391 */;
import closure_6 from "createGuildRecordFromRust" /* 1910 */;
import closure_7 from "scheduledEventSort" /* 4374 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

const require = arg1;
({ jsx: closure_8, jsxs: c9 } = jsxProd);
createCacheKey = { container: { alignSelf: "stretch", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, eventHeader: { marginStart: 8, flexShrink: 0, flexGrow: 1 }, active: null, actions: null, secondarySmallButton: null, secondarySmallIcon: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.INTERACTIVE_BACKGROUND_SELECTED, borderRadius: ThemesDefault.radii.xs };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { alignItems: "center", flexDirection: "row", flexShrink: 0 };
createCacheKey[4] = { flexShrink: 0, alignItems: "center", flexDirection: "row", padding: 8, marginLeft: 8, borderRadius: ThemesDefault.radii.xs };
let obj1 = { flexShrink: 0, alignItems: "center", flexDirection: "row", padding: 8, marginLeft: 8, borderRadius: ThemesDefault.radii.xs };
createCacheKey[5] = { tintColor: ThemesDefault.colors.TEXT_STRONG };
let closure_10 = createCacheKey.createStyles(createCacheKey);
let obj2 = { tintColor: ThemesDefault.colors.TEXT_STRONG };
let result = require("set").fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventRecurrence.tsx");

export default function GuildEventRecurrence(recurrenceId) {
  recurrenceId = recurrenceId.recurrenceId;
  const guildEventId = recurrenceId.guildEventId;
  ({ onPress: dependencyMap, isActive } = recurrenceId);
  let stateFromStores;
  let stateFromStores1;
  closure_5 = undefined;
  c6 = undefined;
  closure_7 = undefined;
  const tmp = callback2();
  let obj = recurrenceId(589);
  const items = [closure_7];
  stateFromStores = obj.useStateFromStores(items, () => guildScheduledEvent.getGuildScheduledEvent(guildEventId));
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  obj = guildEventId(8827)(recurrenceId, id);
  let tmp2Result = tmp2(589);
  const items1 = [c6];
  stateFromStores1 = tmp2Result.useStateFromStores(items1, () => {
    let guild_id;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    return _undefined.getGuild(guild_id);
  });
  tmp2Result = tmp2(589);
  const items2 = [closure_5];
  let stateFromStores2 = tmp2Result.useStateFromStores(items2, () => {
    let channel_id;
    if (stateFromStores != null) {
      channel_id = stateFromStores.channel_id;
    }
    return channel.getChannel(channel_id);
  });
  const tmp5 = guildEventId;
  const tmp6 = guildEventId(8827);
  if (stateFromStores2 == null) {
    stateFromStores2 = stateFromStores1;
  }
  closure_5 = recurrenceId(8876).useManageResourcePermissions(stateFromStores2).canManageGuildEvent(stateFromStores);
  const tmp2Result1 = recurrenceId(8876);
  const eventScheduleById = recurrenceId(8828).useEventScheduleById(guildEventId, recurrenceId);
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
      eventTimeData = recurrenceId(closure_1_2[12]).getEventTimeData(tmp);
      const obj = recurrenceId(closure_1_2[12]);
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
      const intl = tmp2(1236).intl;
      const _HermesInternal = HermesInternal;
      str2 = "" + intl.string(tmp2(1236).t.fyBVRm) + ", ";
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
    obj = { style: null, children: null };
    items4[1] = active;
    obj[0] = items4;
    obj1 = { accessible: true, accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
    obj1[2] = sum1;
    obj1[3] = function onPress(stopPropagation) {
      stopPropagation.stopPropagation();
      if (!closure_7) {
        if (closure_2 != null) {
          tmp2(recurrenceId);
        }
      }
    };
    obj1[4] = tmp.eventHeader;
    const obj2 = { isActive: null, event: null, showUserCount: false, showCreator: false, recurrenceId: null };
    obj2[0] = isActive;
    obj2[1] = stateFromStores;
    obj2[4] = recurrenceId;
    obj1[5] = callback(tmp2(8837).GuildEventCardHeader, obj2);
    const items5 = [callback(tmp2(5438).PressableOpacity, obj1), ];
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.actions;
    if (tmp21Result) {
      const obj4 = { variant: "text-sm/semibold", color: "text-feedback-critical", children: null };
      const intl2 = tmp2(1236).intl;
      obj4[2] = intl2.string(tmp2(1236).t.fyBVRm);
      tmp21Result = tmp21(tmp2(4739).Text, obj4);
    }
    const items6 = [tmp21Result, ];
    const obj5 = { accessible: true, accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
    const intl3 = tmp2(1236).intl;
    const _HermesInternal3 = HermesInternal;
    obj5[2] = "" + intl3.string(tmp2(1236).t.HIgA5a) + ", " + sum1;
    obj5[3] = function onPress(stopPropagation) {
      if (null != stateFromStores) {
        stopPropagation.stopPropagation();
        if (null != stateFromStores1) {
          const result = recurrenceId(closure_1_2[17]).showGuildEventModeratorActionSheet(tmp, closure_5, recurrenceId);
          const obj = recurrenceId(closure_1_2[17]);
        }
      }
    };
    obj5[4] = tmp.secondarySmallButton;
    const obj6 = { source: null, size: null, style: null };
    obj6[0] = tmp5(8941);
    obj6[1] = tmp2(1297).Icon.Sizes.REFRESH_SMALL_16;
    obj6[2] = tmp.secondarySmallIcon;
    obj5[5] = callback(tmp2(1297).Icon, obj6);
    items6[1] = callback(tmp2(5438).PressableOpacity, obj5);
    obj3[1] = items6;
    items5[1] = closure_9(stateFromStores1, obj3);
    obj[1] = items5;
    return closure_9(stateFromStores1, obj);
  }
  const tmp2Result2 = recurrenceId(8828);
};